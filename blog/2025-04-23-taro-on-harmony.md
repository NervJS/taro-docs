---
title: Taro on Harmony ：助力业务高效开发纯血鸿蒙应用
authors: [luckyadam, xuanzebin, TJ, azu, atao]
tags: [v4, harmony]
description: '基于 Taro 打造的京东鸿蒙 APP 已跟随鸿蒙 Next 系统公测，本系列文章将深入解析 Taro 如何实现使用 React 开发高性能鸿蒙应用的技术内幕'
---

## 背景

纯血鸿蒙逐渐成为全球第三大操作系统，业界也掀起了适配鸿蒙原生的浪潮，用户迁移趋势明显，京东作为国民应用，为鸿蒙用户提供完整的购物体验至关重要。

![](https://luckyadam.notion.site/image/attachment%3A3687639d-b6bb-48eb-aa8c-05c5d8bfc76f%3Aimage.png?table=block&id=1de0d09e-99e3-8088-adf0-e48b2bb8c41b&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

去年 9 月，京东 APP 纯血鸿蒙 在鸿蒙应用商城正式上线，APP 中核心购物链路，如首页、搜索、商详、购物车、订单、结算和我京等页面，都是通过 Taro on Harmony 方案进行开发，并且一上线就获得了华为的 S 级应用认证。

## Taro 介绍

Taro 是由京东发起并维护的开放式跨端跨框架解决方案，支持以 Web 的开发范式来实现小程序、H5、原生 APP 的跨端统一开发，从 18 年开源至今，在 GitHub 已累计获得 36,000+ Stars。

![](https://luckyadam.notion.site/image/attachment%3A2eef6133-46f1-4243-9380-b84c58021378%3Aimage.png?table=block&id=1de0d09e-99e3-80e6-ad81-c22e8fcff5e6&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

在过去的一年中，Taro 完成了鸿蒙适配方案的开发，Taro on Harmony 方案支持开发者使用 React DSL 来快速开发高性能原生鸿蒙应用，让 Taro 具备了一份代码同时跨鸿蒙、小程序、H5、React Native 多端的能力，可以让开发者以熟悉的方式来开发鸿蒙应用，大幅降低鸿蒙开发门槛，并且存量的 Taro 业务也能快速转成鸿蒙原生应用，可以节约大量研发成本。

## Taro on Harmony 适配方案的演进

### 基于 ArkTS 的初始版本

Taro 适配鸿蒙方案经过了多个版本的演进迭代，最初版本我们采用的是对接到鸿蒙原生 ArkTS 语言的方式来实现，这和 Taro 适配微信小程序的方案类似，都是通过模拟浏览器 DOM/BOM 环境，然后运行 React 代码构建出虚拟 DOM 树，再将虚拟 DOM 树以递归遍历的方式构建出宿主环境（小程序/鸿蒙）的渲染节点树，从而实现页面渲染。

![](https://luckyadam.notion.site/image/attachment%3A1824337e-2852-4feb-b67c-c2df8684e878%3A2023-12-04-14-58Rxh5858Hz12tATUfWO.png?table=block&id=1de0d09e-99e3-804d-9dc6-c0285dd9d4ee&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

但这个方案的缺陷非常明显，那就是在 ArkTS 之上再桥接一层转换，导致性能相比原生存在一定差异，并且这个差异几乎没有办法可以抹平。

### 基于 C API 的全新版本

恰逢此时，鸿蒙为了方便三方框架与应用接入鸿蒙生态，在官方开发语言 ArkTS 之外，开放了更底层 C API 能力，提供了 C++ 层的 UI 节点创建、属性设置等能力（类似于 C++ 版本的 DOM），三方框架和应用可以基于 C API 构建高性能的解决方案和应用。

![](https://luckyadam.notion.site/image/attachment%3Ab45a6ed0-7536-4055-a5cd-85ad0f733479%3Aimage.png?table=block&id=1de0d09e-99e3-809a-a1b9-ddf319bf3556&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=960&userId=&cache=v2)

C API 就是 Taro 想要的能力，与 Taro 的架构完美契合，Taro React 构建出来的虚拟 DOM 树可以通过 C API 直接去创建原生 UI 节点，省去了很多流程环节，并且可以将我们大部分的渲染管线处理沉到 C++ 中去，获得飞跃式的性能提升，所以基于 C API 我们首先设计并开发了单线程架构版本。

#### 单线程架构版本

单线程架构版本的示意图如下，整个渲染过程均在主线程实现，业务代码在 ArkVM 中执行获得虚拟 DOM 树，同时读取样式数据，通过 React Reconciler ，在构建虚拟树时会调用 NAPI 在 C++ 侧构建出对应的 Element Tree，同时也会进行样式数据的解析处理，从而构建出 CSSOM 对象，Element Tree 和 CSSOM 对象会进行匹配从而构建出带有样式的 Render Tree，在这一步也会同时创建 yoga 节点，进行布局计算，最后会再基于布局计算的结果生成 C API 的 ArkNode Tree，从而实现上屏渲染。

![](https://luckyadam.notion.site/image/attachment%3A8b6d3829-3351-4b23-a0b2-cd9e182e14f5%3Aimage.png?table=block&id=1de0d09e-99e3-8029-b026-e1c3831dcf63&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

目前京东鸿蒙 APP 中首页、搜推、我京、核心购物流程均是使用 Taro 单线程版本进行开发，性能和稳定性位于第一梯队。

![](https://luckyadam.notion.site/image/attachment%3A3f53d76c-a116-43b7-a6e4-4ad19251cd0f%3A11431743594310_.pic_hd.jpg?table=block&id=1de0d09e-99e3-8081-8a18-fbe100bbc986&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

#### 多线程架构版本

单线程版本上线之后，我们也发现了单线程架构的不足，① 从业务代码的执行到渲染流程的处理都发生在主线程上，这导致了主线程的过载，使得应用无法及时响应用户的操作，从而引发了用户体验上的卡顿，随着业务逻辑的增加和复杂性的提升，这种卡顿现象会越发明显；② 在单线程架构下，代码都是需要内置到应用包里，这样就无法实现业务代码的动态下发更新。

所以，为了解决以上问题，进一步提升应用性能，和应对未来更多业务场景需求的可能性，我们实现了多线程架构。

![](https://luckyadam.notion.site/image/attachment%3Af873dd4e-fde0-498f-8f01-61bafef7338c%3Aimage.png?table=block&id=1de0d09e-99e3-804b-bc2c-ec73b07330cb&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

相较于单线程架构，多线程架构将整个业务代码执行和渲染的过程拆分到了三个线程，每个线程各司其职，让任务的执行更加合理，不会造成主线程的堵塞，这样的架构主要带来三个好处。

1.**业务逻辑不再堵塞主流程**，完全剥离到了单独的线程执行，之前容易出现卡顿、甚至 APP Freeze 的页面基本不再有问题，例如商详接入之后滑动页面变得更加流畅；

2.**动画执行和渲染不再卡顿**，动画的执行交由 Background 线程管控，不再和 JS 线程有冲突问题，动画支持满帧渲染；

3.**支持动态化的能力**，在性能上可以与原生相媲美，同时还能支持动态下发，支持更新远端 JS 资源来实现 APP 内容的更新，让业务具备快速验证和免发版的能力。

目前多线程版本正在我们的业务中进行试点接入，很快就会正式上线。

## Taro on Harmony 方案特性

### 丰富的能力支持

#### 常用组件和 API 支持

在 C-API 版本的 Taro For Harmony 中，我们不仅完整支持了 React 18+，另外支持了 View、Text、Image、Video 等近 33 个 Taro 组件，对于常用的 API，如 getSystemInfo、getStorage 等也是在 C-API 版本中得到了完整的支持，而且针对逻辑较为复杂的 API 如：createSelectorQuery 以及 createIntersectionObserver，我们将这些 API 在 C++ 侧进行了重新的实现，大幅提升了他们的执行性能。

#### 常用样式支持

在 C-API 版本中，我们对支持了大部分常见的 CSS 能力：

- 支持常见的 CSS 样式和布局，支持 flex、伪类和伪元素
- 支持常见的 CSS 定位，绝对定位、fixed 定位
- 支持常见的 CSS 选择器和媒体查询
- 支持常见的 CSS 单位，比如 vh、vw 以及计算属性 calc
- 支持 CSS 变量以及安全区域等预定义变量

同时，我们参考浏览器 CSSOM 的实现方式，在 C++ 实现了一套 CSSOM 逻辑，里面包含了样式解析、样式匹配、样式合成和应用整个链路的样式处理逻辑。

![](https://luckyadam.notion.site/image/attachment%3A98ea6485-da68-4583-9b18-b8f1366e84e5%3Aimage.png?table=block&id=1de0d09e-99e3-800a-8a32-d836783876f1&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1170&userId=&cache=v2)

另外，Taro 引入了 Yoga 布局引擎来计算渲染节点的位置和大小，最大程度保证 Taro 构建出来的鸿蒙应用中渲染样式和 W3C 规范的一致性。

![](https://luckyadam.notion.site/image/attachment%3Aa740c240-1acc-4021-bf69-3db739ec4391%3Aimage.png?table=block&id=1de0d09e-99e3-8047-8200-cf9f60302c6e&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

### 媲美原生 ArkTS 的高性能

#### 运行时逻辑下沉至 C++

在 C-API 的版本中，我们将 ArkVM 层的 Taro 运行时内容削减到极致的薄，将 TaroElement 的大部分内容都下沉到了 C++ 侧，并在 ArkVM 层取消了他们之间父子关系的绑定，极大地提升了 TaroElement 相关逻辑的性能。

![](https://luckyadam.notion.site/image/attachment%3A6d4739f0-41d3-4177-b293-dafc34817472%3Aimage.png?table=block&id=1de0d09e-99e3-801f-8854-fa40d21f1afb&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

另一方面，在 C++ 侧 Taro 会指令式地调用 ArkUI 在 C++ 侧提供的 API，来高效地创建节点、设置属性、绑定事件以及绘制上屏。

#### 提供长列表组件应对长列表场景

Taro 还针对长列表场景针对性地提供了长列表类型组件，并对长列表类型组件进行了优化，提供了懒加载、预加载和节点复用等功能，有效地解决大数据量下的性能问题，提高应用的流畅度和用户体验。

![](https://luckyadam.notion.site/image/attachment%3A104a946f-10d1-4403-87a8-f137e2a8e3ab%3Aimage.png?table=block&id=1de0d09e-99e3-80dd-ac4f-d782ad2b53d4&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

### 支持 C API 混合原生的渲染模式

Taro 的组件和 API 是以小程序作为基准来进行设计的，因此在实际的鸿蒙应用开发过程中，会出现部分所需的组件和 API 在 Taro 中不存在的情况，因为针对这种情况，在 C-API 版本中，Taro 提供了原生混合开发的能力，支持将原生页面或者原生组件混合编译到 Taro 鸿蒙项目中，支持 Taro 组件和鸿蒙原生组件在页面上的混合使用。

![](https://luckyadam.notion.site/image/attachment%3Aca51307a-d51f-460c-b5b8-1c930843f445%3Aimage.png?table=block&id=1de0d09e-99e3-806c-b10f-fbafa2ef8a98&spaceId=9a0c7639-98bb-4652-b1e5-2d1a6b23d718&width=1420&userId=&cache=v2)

## 总结

Taro 鸿蒙方案基于鸿蒙 CAPI 进行构建，实现了将 React DSL 直接对接到 C++ 侧来运行整体渲染管线，从而实现了与原生齐平的渲染性能，同时 Taro 鸿蒙方案是多线程架构的方案，在应用渲染性能、操作响应时延上都在业界做到极致，并且 Taro 鸿蒙方案支持动态更新，是行业首创且经过大规模 APP 应用场景验证的开发框架，综合性能、生态以及开发体验来讲，毫无疑问已经成为了开发鸿蒙应用的最佳框架选型之一。

目前，我们也仍然在不断完善着鸿蒙的适配方案，目前在渲染性能提升方面我们正在进行 React C++ 化的探索，整体进展也已经处于验证和测试阶段，同时也在进行自研布局引擎的探索，在进一步提升渲染性能的同时，为业务提供更丰富的样式写法支持；此外，在开发效率提升方面，我们也正在进行开发调试工具的探索开发，为业务提供热重载、源码定位、断点调试、元素审查等能力，提升效率和开发体验。

在近期，我们会将已经在京东鸿蒙 APP 久经考验的单线程架构版本开源出来，为开源社区贡献一份力量，为鸿蒙应用生态的丰富注入强大的动力。
