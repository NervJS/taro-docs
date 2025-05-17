---
title: Taro on Harmony C-API 版本正式开源
authors: [xuanzebin, TJ, azu, atao]
tags: [v4, harmony]
description: '在过去的一年中，Taro 经历了显著的蜕变，Taro For Harmony 方案完成从 ArkTS 方案到 C-API 方案的升级，成功实现了对纯血鸿蒙的完全适配，扩展了 Taro 的兼容平台家族，实现了对 H5、小程序、RN、原生鸿蒙多端的统一开发。'
---

## Taro x 纯血鸿蒙

在过去的一年中，Taro 经历了显著的蜕变，Taro For Harmony 方案完成从 ArkTS 方案到 C-API 方案的升级，成功实现了对纯血鸿蒙的完全适配，扩展了 Taro 的兼容平台家族，实现了对 H5、小程序、RN、原生鸿蒙多端的统一开发。

![Taro X HarmonyOS](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35NaN6T9eOyiqx9Z6.png)

去年 9 月，京东 APP 纯血鸿蒙 在鸿蒙应用商城正式上线，APP 中核心购物链路，如首页、搜索、商详、购物车、订单、结算和我京等页面，都是通过 Taro On Harmony C-API 版本进行开发，并且一上线就获得了华为的 S 级应用认证。

![JD Harmony](https://img13.360buyimg.com/img/jfs/t1/235448/38/25755/201048/66d7d844F0baea79b/adfe087ce5348c30.png)

今天，我们正式开源 Taro on Harmony C-API 版本，这次版本的发布，将带来更丰富的样式适配、更高效的渲染性能、更全面的组件支持，让开发者以 Web 范式的方式来开发出媲美原生鸿蒙性能的应用，为鸿蒙应用生态的丰富注入强大的动力。

![JD Harmony APP](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/pic_hd.jpg)

## 整体技术架构

Taro on Harmony 技术方案支持开发者使用 React DSL 来开发纯血鸿蒙应用，整体架构可以简单分为三层：

![Taro Harmony React](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img3.png)

最上层是应用业务代码所在的 ArkVM 层，这一层在 C-API 版本中主要运行业务代码、React 的核心代码以及少量的 Taro 运行时代码。

中间层是 Taro 的 CSSOM 和 TaroElement 树，负责处理上层 Taro 运行时代码传递下来的指令，比如 TaroElement 节点树创建，绑定关系以及设置属性等操作。

最下层存放的是 TaroRenderNode 虚拟节点树，这棵节点树和真正的上屏节点树是一一对应的关系，同时在 TaroRenderNode 节点树内会创建对应的 Yoga 节点。

![Taro Harmony React DOM](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img4.png)

同时 Taro 还基于鸿蒙提供的 VSync 机制设置一套任务处理管线，来处理中间层和下层节点树产生的样式匹配、节点测量、节点布局、样式设置以及节点上屏等任务，来保证任务的时序性和最后上屏渲染结果的正确性。

## 重点特性

### 丰富的能力支持

#### 常用组件和 API 支持

在 C-API 版本的 Taro on Harmony 中，我们不仅完整支持了 React 18+，另外支持了 View、Text、Image、Video 等近 33 个 Taro 组件，对于常用的 API，如 getSystemInfo、getStorage 等也是在 C-API 版本中得到了完整的支持，而且针对逻辑较为复杂的 API 如：createSelectorQuery 以及 createIntersectionObserver，我们将这些 API 在 C++ 侧进行了重新的实现，大幅提升了他们的执行性能。

#### 常用样式支持

在 C-API 版本中，我们对支持了大部分常见的 CSS 能力：

- 支持常见的 CSS 样式和布局，支持 flex、伪类和伪元素
- 支持常见的 CSS 定位，绝对定位、fixed 定位
- 支持常见的 CSS 选择器和媒体查询
- 支持常见的 CSS 单位，比如 vh、vw 以及计算属性 calc
- 支持 CSS 变量以及安全区域等预定义变量

同时，我们参考浏览器 CSSOM 的实现方式，在 C++ 实现了一套 CSSOM 逻辑，里面包含了样式解析、样式匹配、样式合成和应用整个链路的样式处理逻辑。

![Taro Harmony CSS](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img5.png)

另外，Taro 引入了 Yoga 布局引擎来计算渲染节点的位置和大小，最大程度保证 Taro 构建出来的鸿蒙应用中渲染样式和 W3C 规范的一致性。

![Taro Harmony Style](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img6.png)

### 媲美原生 ArkTS 的高性能

#### 运行时逻辑下沉至 C++

在 C-API 的版本中，我们将 ArkVM 层的 Taro 运行时内容削减到极致的薄，将 TaroElement 的大部分内容都下沉到了 C++ 侧，并在 ArkVM 层取消了他们之间父子关系的绑定，极大地提升了 TaroElement 相关逻辑的性能。

![Taro Harmony CAPI](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img7.png)

另一方面，在 C++ 侧 Taro 会指令式地调用 ArkUI 在 C++ 侧提供的 API，来高效地创建节点、设置属性、绑定事件以及绘制上屏。

#### 提供长列表组件应对长列表场景

Taro 还针对长列表场景针对性地提供了长列表类型组件，并对长列表类型组件进行了优化，提供了懒加载、预加载和节点复用等功能，有效地解决大数据量下的性能问题，提高应用的流畅度和用户体验。

![Taro Harmony Virtual List](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img8.png)

### 支持 C-API 混合原生的渲染模式

Taro 的组件和 API 是以小程序作为基准来进行设计的，因此在实际的鸿蒙应用开发过程中，会出现部分所需的组件和 API 在 Taro 中不存在的情况，因为针对这种情况，在 C-API 版本中，Taro 提供了原生混合开发的能力，支持将原生页面或者原生组件混合编译到 Taro 鸿蒙项目中，支持 Taro 组件和鸿蒙原生组件在页面上的混合使用。

![Taro Harmony CAPI Hybrid](https://storage.360buyimg.com/aotu-team/zakary-blog/2025-05-16/img9.png)

## 使用教程

### 安装和使用

#### 安装 harmony 插件

```bash
# 使用 npm 安装
$ npm i @tarojs/plugin-platform-harmony-cpp
# 使用 pnpm 安装
$ pnpm i @tarojs/plugin-platform-harmony-cpp
```

#### 添加插件配置

```jsx
import os from 'os'
import path from 'path'

const config = {
  // ...
  plugins: ['@tarojs/plugin-platform-harmony-cpp'],
  harmony: {
    // 当前仅支持使用 Vite 编译鸿蒙应用
    compiler: 'vite',
    // Note: 鸿蒙工程路径，可以参考 [鸿蒙应用创建导读](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/start-with-ets-stage-0000001477980905-V2) 创建
    projectPath: path.join(os.homedir(), 'projects/my-business-project'),
    // Taro 项目编译到对应鸿蒙模块名，默认为 entry
    hapName: 'entry',
  },
  // ...
}
```

### 编译项目

```bash
# 编译鸿蒙应用
$ taro build --type harmony_cpp
# 编译鸿蒙原生组件
$ taro build native-components --type harmony_cpp
```

如果需要编译鸿蒙应用，同时使用编译鸿蒙原生组件，可以在页面配置中添加  `entryOption: false`  表示该页面是组件，同时可以用过  `componentName`  指定组件导出名。

```jsx
export default {
  navigationBarTitleText: 'Hello World',
+  componentName: 'MyComponent',
+  entryOption: false,
}
```

## 总结与展望

Taro on Harmony C-API 版本经历了京东鸿蒙 APP 的实践，综合性能、生态以及开发体验来讲，毫无疑问已经成为了开发鸿蒙应用的最佳框架选型之一。

当下，我们也仍然在不断完善着鸿蒙的适配方案，基于当前的 Taro on Harmony C-API 方案，我们会进行多线程的架构升级以及 React 的 C++ 化，进一步提升 Taro 在鸿蒙端侧的性能，并极大地降低应用的丢帧率，整体进展也已经处于验证和测试阶段。

也欢迎大家一起参与 Taro on Harmony 的共建，你们的每一个建议，每一次提交，都是推进 Taro 继续往前走最大的动力。
