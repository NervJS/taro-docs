---
title: Taro 鸿蒙技术内幕系列（一）：如何将 React 代码跑在 ArkUI 上文章
authors: [azu, xuanzebin, TJ, atao]
tags: [v4, harmony]
description: '基于 Taro 打造的京东鸿蒙 APP 已跟随鸿蒙 Next 系统公测，本系列文章将深入解析 Taro 如何实现使用 React 开发高性能鸿蒙应用的技术内幕'
---

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35NaN6T9eOyiqx9Z6.png)

> 基于 Taro 打造的京东鸿蒙 APP 已跟随鸿蒙 Next 系统公测，本系列文章将深入解析 Taro 如何实现使用 React 开发高性能鸿蒙应用的技术内幕

## 背景

随着鸿蒙操作系统的快速发展，开发者们期待将现有跨平台应用迁移到鸿蒙平台。Taro 作为一个流行的跨平台开发框架，其支持鸿蒙系统的可能性引起了广泛关注。

然而，鸿蒙系统采用全新的 ArkUI 框架作为原生 UI 开发方案，与 Taro 原本支持的平台存在显著差异。将 Taro 的 React 开发模式与 ArkUI 的声明式 UI 开发范式进行有效对接成为了一个技术难题。

本文将探讨 Taro 框架如何通过创新方案实现 React 代码在 ArkUI 上的运行。我们将解析 Taro 的运行时原理，剖析其如何将 React 组件转换为 ArkUI 可识别的结构，以及相关技术挑战和解决方案。

### Taro 运行时原理介绍

为了理解 Taro 适配 ArkUI 的核心机制，我们首先需要深入了解 Taro 的运行时原理。Taro 通过巧妙的设计，将 React 代码转换为各平台可执行的形式，其中包括对鸿蒙平台的适配。下面将详细介绍 Taro 是如何将 React 代码转换为 ArkUI 可执行的形式，以及节点转换的流程细节。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35o26cuJ48IrXps9Pxy.png)

### 1. 从 React 到 Taro

#### React 跨平台的秘诀

在 Taro 的运行时中，首先执行的是开发者编写的 React 业务代码。这些代码定义了业务应用的结构、逻辑和状态管理。那么既然要对接 React，那肯定先得了解它的核心架构，React 是怎么运作的：

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35zjLOZWNpLyg9WIv.png)

了解了 React 的基本架构后，我们可以清晰地看到，`**Renderer**` 作为渲染器，负责将 React 的虚拟节点操作最终映射到相应的平台上。例如，`react-dom`将这些操作对接到浏览器上，而`react-native`则将其对接到 iOS 或 Android 平台。这种设计使得 React 能够适配不同的运行环境。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35vNxJHNqGiGD7EiB.png)

正是基于这种思路，Taro 团队设计了 **Taro Renderer**。这个渲染器充当了 React 与 Taro 虚拟节点树之间的桥梁，使得 React 的操作可以被转换为 Taro 的中间表示。

#### 通过实现 Taro Renderer 生成 Taro 虚拟节点树

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35NBq0KTsHmbCx9Cz.png)

HostConfig 接口实现

要实现 Taro 的 Renderer，我们需要实现 `React Reconciler` 所需的 `hostConfig` 接口。这个接口定义了一系列方法，用于创建、更新和管理渲染目标平台的元素。以下是一些关键的 hostConfig 方法：

- **createElement：**创建 ArkUI 对应的元素。
- **createTextInstance**：创建文本节点。
- **appendChild：**将子元素添加到父元素。
- **removeChild：**从父元素中移除子元素。
- **insertBefore：**在指定位置插入元素。
- **commitUpdate：**更新元素属性。

通过实现这些方法，**Taro Rendere**r 能够将 **React 的操作转换为 Taro 虚拟节点树的相应操作**。这个虚拟节点树是 Taro 实现跨平台的核心，它为不同平台的渲染提供了统一的中间表示。

```ts
// 部分HostConfig接口实现的代码

const hostConfig: HostConfig {
    // 创建Taro虚拟节点
  createInstance (type, props: Props, _rootContainerInstance, _hostContext, internalInstanceHandle: Fiber) {
    const element: TaroElement = TaroNativeModule.createTaroNode(type)
    precacheFiberNode(internalInstanceHandle, element)
    updateFiberProps(element, props)
    return element
  },
  // 更新属性
    commitUpdate (dom, updatePayload, _, oldProps, newProps) {
      updatePropsByPayload(dom, oldProps, updatePayload)
      updateFiberProps(dom, newProps)
    },
    // 插入节点
    insertBefore (parent: TaroElement, child: TaroElement, refChild: TaroElement) {
      parent.insertBefore(child, refChild)
    },
    // 移除节点
    removeChild (parent: TaroElement, child TaroElement) {
      parent.removeChild(child)
    },
    // ...
}
```

### 2. 从 Taro 到 ArkUI

在将 Taro 虚拟节点树转换为 ArkUI 的过程中，我们需要进行几个关键步骤：

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35NrS7935hv26Lf9xJ35.png)

Taro Element 转换 ArkUI 过程

首先，我们需要在 ArkUI 层面**实现一套与 Taro 组件对应的组件库**。这个步骤至关重要，因为它建立了 Taro 组件和 ArkUI 组件之间的映射关系。例如，我们需要为 Taro 的 `View`、`Text`、`Image` 等基础组件创建对应的 ArkUI 组件。这样，当我们遍历 Taro 虚拟节点树时，就能找到每个节点在 ArkUI 中的对应实现。

在节点映射的过程中，我们注意到 Taro 虚拟节点树与实际 ArkUI 视图结构存在差异。这些差异主要体现在以下几个方面：

- **复合组件结构：**某些 Taro 组件在 ArkUI 中可能需要多个组件配合实现。例如，ScrollView 组件在 ArkUI 中可能需要一个 Scroll 节点搭配一个 Stack 来实现完整功能。
- **层级位置调整：**一些特殊定位的节点（如 Fixed 定位的元素）在最终渲染时的位置可能与其在虚拟节点树中的层级不一致。这需要在生成渲染树时进行特殊处理。
- **平台特定组件：**某些 Taro 组件可能需要使用 ArkUI 特有的组件或布局方式来实现，这要求我们在转换过程中进行适当的调整和映射。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35PhZHoHOEsU9f6Zg.png)

因此，在生成渲染树时，我们需要一个更复杂的转换过程，不仅要考虑简单的一对一映射，还要处理这些结构性的差异，确保最终生成的 ArkUI 组件树能够正确反映预期的视图结构和布局。**因此，在 Taro > ArkUI 的节点对接中，我们需要维护一棵 Render Tree，用于做中间的桥梁。**

#### 1. 根据组件类型 创建 Taro Element

在创建 Taro Element 的过程中，我们根据组件的类型来实例化相应的 Taro 元素。这一步骤是将 React 组件转换为 Taro 内部表示的关键。

```ts
// 根据组件类型创建对应的Taro节点
std::shared_ptr<TaroElement> TaroDocument::CreateElement(napi_value &node) {
        // 获取组件类型
    TAG_NAME tag_name_ = TaroDOM::TaroElement::GetTagName(node);
    // 根据组件类型，创建对应的实例
    std::shared_ptr<TaroDOM::TaroElement> item;
    switch (tag_name_) {
        case TAG_NAME::SCROLL_VIEW: {
            item = std::make_shared<TaroDOM::TaroScrollView>(node);
            break;
        }
        case TAG_NAME::IMAGE:
            item = std::make_shared<TaroDOM::TaroImage>(node);
            break;
        }
        case TAG_NAME::SPAN:
        case TAG_NAME::TEXT: {
            item = std::make_shared<TaroDOM::TaroText>(node);
            break;
        }
        case TAG_NAME::SWIPER: {
            item = std::make_shared<TaroDOM::TaroSwiper>(node);
            break;
        }
        // ...
    }
    return item;
}
```

#### 2. Taro Element 创建 Taro RenderNode

在创建完 Taro Element 之后，下一步是将其转换为 Taro RenderNode。这个过程是将 Taro 的内部表示进一步转化为更接近 ArkUI 结构的渲染节点。

```ts
// 创建 Taro RenderNode
void TaroSwiper::Build() {
    if (!is_init_) {
        // create render node
        TaroElementRef element = std::static_pointer_cast<TaroElement>(shared_from_this());
        auto render_swiper = std::make_shared<TaroSwiperNode>(element);
        render_swiper->Build();
    }
}
```

#### 3. Taro RenderNode 创建 ArkUI Node

最后一步是将 Taro RenderNode 转换为实际的 ArkUI 节点。这个过程涉及到直接与 ArkUI 的底层 API 交互，创建和配置 ArkUI 的原生节点。实现了从 Taro 的渲染节点到 ArkUI 实际可渲染节点的最终转换。

```ts
  // 创建 ArkUI Node
void TaroSwiperNode::Build() {
    NativeNodeApi *nativeNodeApi = NativeNodeApi::getInstance();
    // 创建一个Swiper的ArkUI节点
    SetArkUINodeHandle(nativeNodeApi->createNode(ARKUI_NODE_SWIPER));
}
```

通过这三个步骤，我们在 C++ 层面成功实现了 React 组件结构到 ArkUI 原生组件结构的映射。这一过程使 Taro 应用能够在鸿蒙系统上准确地渲染和运行，为跨平台开发提供了有力支持。

## 总结

最后总结下，本文探讨了 Taro 框架如何将 React 代码成功运行在鸿蒙系统的 ArkUI 上。这个过程主要分为两个关键部分：

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35jfyTMtdtlxvYQ69.png)

React > ArkUI 架构图

### 1. Taro 对接 React

Taro 通过实现自定义的 Renderer 来对接 React。这个 Renderer 包含了一系列方法，如 createInstance、commitUpdate 等，用于将 React 的操作转换为 Taro 虚拟节点树的操作。这个虚拟节点树是 Taro 实现跨平台的核心，为不同平台的渲染提供了统一的中间表示。

### 2. Taro 对接 ArkUI

Taro 通过自定义 Renderer 将 React 操作转换为虚拟节点树，然后通过三步转换过程将其映射到 ArkUI 结构。这个过程涉及 Taro Element、Taro RenderNode 和 ArkUI Node 这三棵树的维护，主要通过这三个流程步骤实现：

1.**创建 Taro Element：**这一步将 React 组件转换为 Taro 内部表示。

2.**创建 Taro RenderNode：**将 Taro 的内部表示进一步转化为更接近 ArkUI 层级结构的渲染节点。

3.**创建 ArkUI Node：**最后一步是将 Taro RenderNode 转换为实际的 ArkUI 节点，直接与 ArkUI 的底层 API 交互。

通过这种方式，Taro 成功地将 React 组件结构映射到 ArkUI 原生组件结构，使得 Taro 应用能够在鸿蒙系统上准确地渲染和运行，同时也为跨平台开发提供了有力支持。

## 系列往期精选

[《京东鸿蒙上线前瞻——使用 Taro 打造高性能原生应用》](../../09/11/harmony-react-on-arkts)
