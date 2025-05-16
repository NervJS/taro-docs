---
title: Taro 鸿蒙技术内幕系列（五） - 剖析鸿蒙长列表优化实践
authors: [liubb, xuanzebin, TJ, azu, atao]
tags: [v4, harmony]
description: '基于 Taro 打造的京东鸿蒙 APP 已跟随鸿蒙 Next 系统公测，本系列文章将深入解析 Taro 如何实现使用 React 开发高性能鸿蒙应用的技术内幕'
---

![首图](https://img13.360buyimg.com/img/jfs/t1/148159/17/47762/49649/673ffa2fF63c5cee5/99599074b6ae93ca.png)

## 问题背景

长列表类型组件（例如 WaterFlow, List）在应用开发中被广泛使用，特别适合商品列表、订单列表、消息列表等需要无限滚动的场景。这些组件通常包含大量结构相似的子组件，它们的样式和布局相似，但数据内容各异，且数据通常来自网络。

在典型的 Taro React 应用中 ，正常的列表处理流程如下：

1. 生成或从远端服务器加载数据。
2. 框架基于最新数据生成新的虚拟 DOM 树。
3. 框架使用 diff 算法或其他机制，根据虚拟 DOM 树的变化，触发对应的更新指令。
4. 运行时捕获框架的更新请求，并实际更新视图。

然而，如果加载的数据量非常大，可能会引发严重的性能问题，导致视图在一段时间内无法响应用户操作。为了解决这个问题，我们为 Taro 长列表类型组件提供了懒加载、预加载和组件复用等功能，专门针对长列表类型组件进行了优化，有效地解决大数据量下的性能问题，提高应用的流畅度和用户体验。

### Taro 虚拟列表

目前 Taro 在其他端侧已支持[虚拟列表](https://docs.taro.zone/docs/next/virtual-list/)，并在实践中证明虚拟列表可以极大程度提升列表渲染性能。出于性能考虑，Taro 通过 CAPI 对接鸿蒙 ArkUI，将更多的运行时逻辑如组件、动效、测算和布局等逻辑下沉到了 C++ 层。虚拟列表也需要在 C++层重新设计实现，在只渲染当前可视区域视图的基础上，我们还加入了组件预加载，数据预请求和组件复用等高阶功能，有效地解决大数据量下的性能问题，提高应用的流畅度和用户体验，并大幅度降低了应用内存占用。以下是 Taro 虚拟列表渲染流程：

![虚拟列表](https://img20.360buyimg.com/img/jfs/t1/247467/7/23875/28060/673b1b6cFdf12e18e/226b35e0f280f63c.png)

### 优化方案

#### NodeAdapter 介绍

当前 ArkTS 滚动类容器使用 LazyForEach 时，框架会根据滚动容器可视区域按需创建组件，但是鸿蒙 CAPI 接口不支持 LazyForEach 功能。作为 ArkTS 侧 LazyForEach 的替代方案，开发者可以使用 NodeAdapter 对象在 C++ 侧实现类似的效果。NodeAdapter 已支持 List、Grid、Swiper 和 WaterFlow 四种主要的长列表组件。

本文将以 WaterFlow 组件为例，详细介绍如何利用 NodeAdapter 对象和 CAPI 提供的能力来实现长列表组件的懒加载、预加载和组件复用。

NodeAdapter 通过特定的事件机制时需要进行相关的处理。以下是 NodeAdapter 的典型工作流程：

![NodeAdapter](https://img13.360buyimg.com/img/jfs/t1/214063/21/46994/43111/67330f8cF5dd5b1d3/0c3b04cea1c4a205.png)

通过这种方式，开发者可以更好地控制长列表组件的行为，从而显著提升其性能。

NodeAdapter 的创建和挂载如下：

- 创建 NodeAdapter 对象并挂载回调处理函数

```cpp
class RenderNode : public std::enable_shared_from_this<RenderNode> {
    public:
    RenderNode(std::string str) : str_(str), node_(nullptr), child_(nullptr), reuseId_("") {}
    std::string str_;
    std::shared_ptr<ArkUIBaseNode> node_;
    std::string reuseId_;
    std::shared_ptr<ArkUIBaseNode> child_;
};

ArkUIWaterFlowAdapter() : handle_(OH_ArkUI_NodeAdapter_Create()) {
// 初始化懒加载数据。
    for (int32_t i = 0; i < 50; i++) {
        auto renderNode = std::make_shared<RenderNode>(std::to_string(i));
        renderNode->reuseId_ = "reuse";
        data_.emplace_back(renderNode);
    }
    // 设置懒加载数据。
    OH_ArkUI_NodeAdapter_SetTotalNodeCount(handle_, data_.size());
    // 设置懒加载回调事件。
    OH_ArkUI_NodeAdapter_RegisterEventReceiver(handle_, this, OnStaticAdapterEvent);
}
```

- 将 NodeAdapter 绑定到对应的容器组件上

```cpp
// 引入懒加载模块。
void SetLazyAdapter(const std::shared_ptr<ArkUIWaterFlowAdapter> &adapter) {
    assert(handle_);
    ArkUI_AttributeItem item{nullptr, 0, nullptr, adapter->GetHandle()};
    nativeModule_->setAttribute(handle_, NODE_WATER_FLOW_NODE_ADAPTER, &item);
}
```

- 回调处理函数定义

```cpp
void OnAdapterEvent(ArkUI_NodeAdapterEvent *event) {
    auto type = OH_ArkUI_NodeAdapterEvent_GetType(event);
    auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);
    switch (type) {
    case NODE_ADAPTER_EVENT_ON_GET_NODE_ID:
        OnNewItemIdCreated(event);
        break;
    case NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER:
        OnNewItemAttached(event);
        break;
    case NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER:
        OnItemDetached(event);
        break;
    default:
        break;
    }
}
```

#### 懒加载

懒加载特性会根据容器组件能够容纳显示的组件数量按需加载数据，创建对应的 Item 组件，并挂载在容器组件树根组件上。整体渲染流程如下图所示(备注:图片来自 HarmonyOS NEXT 官网)：

![渲染流程](https://img13.360buyimg.com/img/jfs/t1/207202/22/32362/17737/66f23379F2bc52482/b6ad124768016e4d.png)

懒加载创建组件示例代码：

- 创建组件唯一 ID：

```cpp
// 分配ID给需要显示的Item，用于ReloadAllItems场景的元素diff。
void OnNewItemIdCreated(ArkUI_NodeAdapterEvent *event) {
    auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);
    static std::hash<std::string> hashId = std::hash<std::string>();
    auto id = hashId(std::to_string(reinterpret_cast<std::uintptr_t>(data_[index].get())));
    OH_ArkUI_NodeAdapterEvent_SetNodeId(event, id);
}
```

- 处理组件上屏事件：

```cpp
// 需要新的Item显示在可见区域。
void OnNewItemAttached(ArkUI_NodeAdapterEvent *event) {
    uint32_t index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);
    if (index >= data_.size()) {
        return;
    }
    auto newNode = data_[index];
    // RecycleManager(newNode);
    // 创建新的组件元素。
    auto flowItem = std::make_shared<ArkUIFlowItemNode>(0);
    auto textNode = std::make_shared<ArkUITextNode>(0);
    textNode->SetTextContent(newNode->str_);
    textNode->SetFontSize(16);
    textNode->SetPercentWidth(0.5);
    textNode->SetHeight(100);
    textNode->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);
    uint32_t color = 0xFFFF0000;
    textNode->SetBackgroundColor(color);
    flowItem->AddChild(textNode);
    newNode->node_ = flowItem;
    newNode->child_ = textNode;
    if (!newNode->node_) {
        return;
    }
    items_.insert_or_assign(newNode->node_->GetHandle(), newNode);
    // 设置需要展示的组件元素。
    OH_ArkUI_NodeAdapterEvent_SetItem(event, newNode->node_->GetHandle());
}
```

### 预加载

尽管按需加载列表项可以提升长列表的性能，但在用户快速滑动，特别是数据中包含大量图片和视频的情况下，可能会出现渲染不及时导致的白块现象，影响用户体验。

为了解决该问题，NodeAdapter 支持设置 cachedCount 属性来指定缓存数量，当设置 cachedCount 后，除了容器类组件内显示的 Item 外，还将预先创建 cachedCount 条数据作为缓存。这样可以有效避免白块现象，确保用户在滑动过程中有流畅的视觉体验。

一般而言，**缓存的 cachedCount 为一屏显示数据的一半的时候，效果较好。**

整体渲染流程如下图所示(备注:图片来自 HarmonyOS NEXT 官网)：

![渲染流程](https://img13.360buyimg.com/img/jfs/t1/124119/7/48766/62271/66f2337cF99412cfe/67e9b88733775837.png)

- cachedCount 的使用方法如下所示：

```cpp
void setCachedCount(int32_tcount) {
    ArkUI_NumberValue value[1] = {{.i32 = count}};
    item = {value, 1};
    nativeModule_->setAttribute(handle_, NODE_WATER_FLOW_CACHED_COUNT, &item);
}
```

#### 数据预请求

尽管长列表组件支持无限滚动，但在实际业务场景中，上层业务通常会采用分页方式来加载数据。以京东 App 首页为例，一屏可以显示 6 个商品，一次网络请求加载 20 条数据。如果在滑动到底部时才发起请求加载新数据，可能会出现明显的加载停顿，尤其是在网络时延较高的情况下，这种停顿会更加突出。

为了解决该问题，我们可以调整请求新数据的时机。具体来说，当还未上屏的数据数量低于某个阈值时，就提前发起请求来加载新数据。这样可以预先准备好下一批数据，避免在滑动过程出现加载停顿。

数据预请求示例代码：

- 注册 NODE_WATER_FLOW_ON_SCROLL_INDEX 事件，获取当前容器显示的起始位置/终止索引

```cpp
void RegisterOnScrollIndex() {
    nativeModule_->registerNodeEvent(handle_, NODE_WATER_FLOW_ON_SCROLL_INDEX, 0, nullptr);
}
```

- 请求加载新数据

```cpp
auto callback = [](ArkUI_NodeEvent*event) {
    auto handle = OH_ArkUI_NodeEvent_GetNodeHandle(event);
    auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);
    auto target = OH_ArkUI_NodeEvent_GetTargetId(event);
    auto componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);
    if (eventType == NODE_WATER_FLOW_ON_SCROLL_INDEX) {
        int start = componentEvent->data[0].i32;
        int end = componentEvent->data[1].i32;
        if (end + 10 >= waterFlow->adapter_->GetDataSize()) {
            int size = waterFlow->UpdateSectionSize(20);
            for (int i = 0; i < 20; i++) {
                waterFlow->adapter_->InsertItem(size + i, std::to_string(size+i));
            }
        }
    }
};
```

下面是使用懒加载、预加载和数据预请求的前后对比（左边为使用后，右边为使用前）：

#### 组件复用

对于离开可视区域的组件，NodeAdapter 不会主动释放它们，而是通过 NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER 回调通知开发者。这样可以让开发者根据实际情况决定是释放组件对象，还是将其放入复用缓存池以便后续使用。

Taro 采用了组件复用的策略，**当组件离开可视区域时，并不会立即释放其占用的资源，而是将其放入复用缓存池中。**

当用户滚动到其他位置，需要渲染新的子组件时，Taro 会先检查缓存池中是否有结构相似的组件。如果找到了相似的组件，就直接从缓存池中取出该组件，并更新其属性和事件。

这种做法可以有效降低应用的内存占用，减少频繁创建和销毁组件带来的性能开销，提升应用的整体性能和用户体验。

原理如下图所示：

![组件复用](https://img14.360buyimg.com/img/jfs/t1/101938/1/51422/52628/66f2328dFed641532/809db22518d091df.png)

识别子组件相似性对于组件复用至关重要。由于上层业务开发者对 Item 的结构和子组件的相似性有着全面的了解, 为了更准确地识别可复用的子组件, Taro 框架引入了一个**新的属性 reuseId**，表示以当前组件为根组件的子组件树可以被复用。开发者可以根据业务场景和 Item 结构特点，灵活地标记出具有相似性的子组件。

当列表中存在多个具有相同 reuseId 的子组件树时, 框架会自动识别并复用这些子组件, 而不是重新创建和渲染它们。

![首页组件复用](https://img30.360buyimg.com/img/jfs/t1/103040/30/52968/367786/66f25fd0F0b7dd064/1a34cfc6a3cb4436.png)

组件复用是 Taro 优化性能的重要策略，其流程如下：

1.  从缓存池中获取与当前组件 reuseId 相匹配的子组件。
2.  对获取到的组件进行类型比较(diff)：

    - 如果组件类型相同，则认为可以直接复用该组件，进入下一步；
    - 如果组件类型不同，则销毁该组件及其所有子组件，并创建对应的新组件后挂载，结束复用流程。

3.  对于类型相同的组件，进一步比较保其属性：

    - 通过 diff 算法识别出属性的差异部分；
    - 将差异部分的属性更新到复用的组件上，保证组件的属性与当前组件状态一致。

4.  更新组件的事件绑定，确保事件处理函数与当前组件的事件处理逻辑相匹配。

5.  递归地对该组件的子组件重复步骤 2 到步骤 4，实现对整个子树的深度复用。

- 组件复用示例代码：

```cpp
// 管理NodeAdapter生成的元素。
std::unordered_map<ArkUI_NodeHandle, std::shared_ptr<RenderNode>> items_;
// 管理回收复用组件池，key为 reuseId
std::unordered_map<std::string, std::unordered_set<std::shared_ptr<RenderNode>>> cachedItems_;
```

- 组件回收逻辑：

```cpp
// Item从可见区域移除。
void OnItemDetached(ArkUI_NodeAdapterEvent *event) {
    auto item = OH_ArkUI_NodeAdapterEvent_GetRemovedNode(event);
    // 放置到缓存池中进行回收复用。
    auto it = items_.find(item);
    if (it != items_.end()) {
        auto renderNode = it->second;
        if (!renderNode->reuseId_.empty()) {
            cachedItems_[renderNode->reuseId_].emplace(renderNode);
        }
    }
}
```

- 组件上屏逻辑：

```cpp
bool isInitilaizedNode(std::shared_ptr<RenderNode>& newNode) {
    if (newNode->node_) {
        auto reuseId = newNode->reuseId_;
        auto it = cachedItems_.find(reuseId);
        if (it != cachedItems_.end()) {
            auto setIt = it->second.find(newNode);
            if (setIt != it->second.end()) {
                it->second.erase(setIt);
            }
        }
        return true;
    }
    return false;
}

void initRenderNode(std::shared_ptr<RenderNode>& newNode, std::shared_ptr<RenderNode>& reuseNode) {
    newNode->node_ = reuseNode->node_;
    newNode->child_ = reuseNode->child_;
    auto newText = std::dynamic_pointer_cast<ArkUITextNode>(newNode->child_);
    // 处理子组件，属性 diff 和更新
    if (newText && newNode->str_ != reuseNode->str_) {
        newText->SetTextContent(newNode->str_);
    }
    reuseNode->node_ = nullptr;
    reuseNode->child_ = nullptr;
}

void RecycleManager(std::shared_ptr<RenderNode>& newNode) {
    if (isInitilaizedNode(newNode)) {
        return;
    }
    auto it = cachedItems_.find(newNode->reuseId_);
    if (it != cachedItems_.end() && !it->second.empty()) {
        // 组件复用
        auto reuseIt = it->second.begin();
        auto reuseNode = *reuseIt;
        initRenderNode(newNode, reuseNode);
        it->second.erase(reuseIt);
    } else {
        // 创建新的元素。
        auto flowItem = std::make_shared<ArkUIFlowItemNode>(0);
        auto textNode = std::make_shared<ArkUITextNode>(0);
        textNode->SetTextContent(newNode->str_);
        textNode->SetFontSize(16);
        textNode->SetPercentWidth(0.5);
        textNode->SetHeight(100);
        textNode->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);
        uint32_t color = 0xFFFF0000;
        textNode->SetBackgroundColor(color);
        flowItem->AddChild(textNode);
        newNode->node_ = flowItem;
        newNode->child_ = textNode;
    }
}

// 需要新的Item显示在可见区域。
void OnNewItemAttached(ArkUI_NodeAdapterEvent *event) {
    uint32_t index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);
    if (index >= data_.size()) {
        return;
    }
    auto newNode = data_[index];
    RecycleManager(newNode);
    if (!newNode->node_) {
        return;
    }
    items_.insert_or_assign(newNode->node_->GetHandle(), newNode);
    // 设置需要展示的元素。
    OH_ArkUI_NodeAdapterEvent_SetItem(event, newNode->node_->GetHandle());
}
```

## 总结

本文重点阐述了一种针对长列表类型组件的优化方案，利用 CAPI 提供的能力，结合组件复用方案，有效地提升了页面性能。文中还附带了 CAPI 实现 demo 以供参考。目前这一方案已经在京东 App 的多个核心页面得到应用，包括首页、搜索结果页和购物车等，实践表明页面的**加载和更新速度平均提升了 38%，组件复用降低京东 App 首页 54% 的内存占用**。该方案在实际项目中的成功应用，为 CAPI 实现长列表组件，及长列表组件性能优化提供了有益的参考和借鉴。

### 下期预告

![尾图](https://img30.360buyimg.com/img/jfs/t1/244935/34/24667/267488/673ffa36F6da4f1ed/c22723a2134f55ab.png)
