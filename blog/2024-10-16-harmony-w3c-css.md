---
title: Taro 鸿蒙技术内幕系列（二）：如何让 W3C 标准的 CSS跑在鸿蒙上
authors: [atao, xuanzebin, TJ, azu]
tags: [v4, harmony]
description: '基于 Taro 打造的京东鸿蒙 APP 已跟随鸿蒙 Next 系统公测，本系列文章将深入解析 Taro 如何实现使用 React 开发高性能鸿蒙应用的技术内幕'
---

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-09-26-21-35NaN6T9eOyiqx9Z6.png)

> 基于 Taro 打造的京东鸿蒙 APP 已跟随鸿蒙 Next 系统公测，本系列文章将深入解析 Taro 如何实现使用 React 开发高性能鸿蒙应用的技术内幕

## 背景

HarmonyOS 采用自研的 ArkUI 框架作为原生 UI 开发方案，这套方案有完善的布局系统和样式控制，但是他的标准与 W3C 的 CSS 标准存在不一致性。这意味着，如果 Taro 直接使用 HarmonyOS 提供的样式系统，开发者在使用 Taro 开发时会遇到非常多的样式兼容性问题，写出来的代码也会失去跨平台兼容的能力，与 Taro 多端统一开发的定位不符。如何抹平 ArkUI 标准和 W3C 的 CSS 标准之间的差异成了一个重中之重的任务。

本文将介绍 Taro 处理 CSS 的全流程，剖析将不同的 CSS 样式转换为 ArkUI 样式遇到的问题和对应的解决方案。

## CSS 样式和 ArkUI CAPI 样式的差异和抹平

### 1、样式书写方式不一致

以几个我们日常会使用到的属性为例，下面的分别是 CSS 的写法和 ArkUI CAPI 的写法。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03qlrpcJHjnf8UwTx.png)

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-036HAOAmekXNOAY16R.png)

对比可以看出，CSS 样式和鸿蒙样式在单位系统和数据表示方式上存在显著差异。CSS 提供多样化的尺寸和颜色单位，而 ArkUI 的 CAPI 接口采用更统一的表示方式。

ArkUI 的 CAPI 接口将所有尺寸统一为 vp 单位，颜色采用 0xAARRGGBB 格式的 uint32 类型，对于渐变和 transform 等复杂样式属性，更是需要转换为颜色停止点和角度值列表和矩阵运算，这样的接口简洁但需要调用者根据具体场景完成必要的单位转换。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03m3DrlNt9ZWM9r33.png)

一个页面通常会包含非常多的样式规则，如果所有的单位转换都放在运行时候完成，必定会造成明显的性能问题。因此，我们选择提前完成部分转换。HTML 节点的样式主要来源于 CSS 和 Style 属性。CSS 样式通常是静态的，可以在编译阶段进行转换。为此，我们基于 lightningCSS 开发了一个 Rust 插件。该插件通过遍历项目 CSS 的抽象语法树（AST），将其转换为 ArkUI 的 CAPI 接口可直接使用的数据结构。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03Kx96fONRVSUre9b.png)

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-17-49CfGeE7ci5xmvdWB.png)

而对于 Style 属性，其内容在运行时才能确定，因此必须在运行时进行转换。在 React 的语法中，Style 可能以字符串形式呈现，也可能是 CSS 属性名和属性值的键值对。为了有效解析 Style，我们针对各种类型的 CSS 语法写了一系列小型的 CSS 语法解析逻辑。这些逻辑能够从各种不同格式的字符串中准确匹配出属性值并进行转换。

虽然这种方法需要在运行时进行语法分析，但考虑到 Style 属性通常只包含有限的样式，加上 C++语言的高效执行特性，这种实时转换对性能的影响可以忽略不计。更为重要的是，这些运行时的 CSS 语法解析逻辑可以为后面 Taro 支持 CSS 变量提供能力支持。

### 2、布局存在差异

除了书写方式的差异，ArkUI 有很多布局属性的行为在细节上也和 W3C 的布局属性存在着不小的差异，比如鸿蒙的绝对定位相对父级定位，Web 的绝对定位相对最近的已定位祖先元素定位，并且鸿蒙的定位不支持 right 和 bottom（早期）。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03NUl0N103qEzwjsb.png)

web 可以通过 margin 的 auto 实现居中，鸿蒙能通过 flex 实现居中。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03NYxqcvPBzFwq9or.png)

同时， ArkUI 的 CAPI 接口缺少一些 Web 常用功能，如 calc() 计算和百分比设置支持。为消除这些差异，我们选择采用 Yoga 作为布局引擎，而非使用鸿蒙原生提供的布局。Yoga 是 Facebook 开发的开源跨平台布局引擎，实现了基于 Web 标准的 FlexBox 布局算法。使用 Yoga 可以很容易地实现对大部分 CSS 布局属性的支持，让两端的差异缩小 。

在具体实现中，我们需要在构建 Taro 节点树的同时，构建结构一致的 Yoga 节点树。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03qwUThCxxrnAvGeD.png)

然后把原本直接设置到鸿蒙节点上的样式属性（如宽高、margin、padding、display 和 position）设置到 Yoga 节点上。经 Yoga 计算后，我们再从 Yoga 节点上读取计算后的 width、height、x 和 y 值设置到鸿蒙节点上，从而实现鸿蒙端和 web 端的布局一致性。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-0399999U0JRKVdRoY.png)

通过使用 Yoga 作为布局引擎，我们不仅解决了鸿蒙系统与 Web 布局之间的差异，还提高了跨平台一致性。这种方法使开发者可以使用熟悉的 Web 布局概念，同时确保在鸿蒙平台上获得预期的布局效果。

## 样式的工作流程

介绍完 Taro 适配 ArkUI 的 CAPI 样式过程中遇到的问题和对应的解决策略之后，我们就可以来看看基于这些策略，鸿蒙样式的整个工作流程是怎么样的。

### 样式初始化

首先，项目启动后，编译器处理后的样式文件将第一个被加载到运行时环境。样式处理逻辑会根据各个选择器（selector）生成相应的样式规则（StyleRule），即 CSS 属性的键值对集合。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03KY8OrbieO3znaFI.png)

### 根据 ClassName 匹配 StyleRule

React 在构建每个节点的同时，会通过 Reconciler 把 React 节点的 ClassName 和 Style 设置到相应的 Taro 节点上，这个时候我们就开始进入节点的样式匹配环节。样式处理会执行以下步骤：首先，从 CSSStylesheet 这个样式集合里识别出与 className 相关的所有 StyleRule；然后，根据选择器的优先级合并这些 StyleRule；最后，将合并结果与由 Style 生成的 StyleRule 合并，从而得出最终的样式配置。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03ffn9Fza6W9mNg7m.png)

这里顺带提一下，CSS 除了可以书写样式之外，还可以书写伪元素和关键帧动画，这两者在都没办法直接设置到鸿蒙的样式里，在处理某个节点时，如果匹配到这个节点的样式里包含伪元素，就会把这个伪元素转换成 一次 insertBefore api 的调用，用这个新 insert 进去的子元素来承载伪元素的 StyleRule，举一个例子，下面的 F 节点的 CSS 样式里带有一个 ::after 的伪类，那么当 F 节点匹配到这个样式的时候，就会被插入一个子节点用来承载 ::after 对应的样式。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-033Djdj7rBjEv16jlI.png)

而对于匹配到关键帧的动画，会把动画对应的元素，动画播放的次数、播放的方向、播放的缓动函数收集起来放到另外的线程，由这个线程算出元素每一帧对应的属性值，并在元素当前帧的 StyleRule 设置完之后，设置到节点上，保证动画的优先级一定是最高的。

### 样式的应用

确定了节点对应的样式表后，我们就到了把样式应用到节点上这个环节了。这个环节我们会调用节点的 SetStyle 方法，遍历 StyleRule 中的所有样式。对于布局相关的属性（如 display、position、float、flex、width、height、margin、padding），如需更新，会被设置到节点对应的 Yoga 节点上，同时为节点本身添加 layout_dirty 标记。接着，判断是否有绘制相关的属性需要更新，如果有，则设置到节点对象的临时属性上，并为节点添加 draw_dirty 标记。这些被标记的节点并不会立刻被处理，而是会被纳入下一帧的样式处理队列中，这样能避免同一帧多次设置同一个结点的相同属性，确保样式更新的高效性，同时也能保证布局属性和绘制属性设置到鸿蒙节点时的前后时序。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03yhNRtVtNdTewURo.png)

在标记完所有需要更新的节点后，下一帧的样式处理流程就会对这些节点进行处理。首先，系统会调用 Yoga 的 calcYGLayout 函数，让 Yoga 从根节点开始对所有的 Yoga 节点进行测算。在此过程中，布局信息发生改变的 Yoga 节点会被打上 has_new_layout 的标记，节点上的信息也会被更新。

我们用一个例子来说明 Yoga 如何判断布局变化的影响范围：假设节点 E 的宽度改变，这可能影响到依赖父元素宽度的子元素以及由子元素撑开宽度的父元素。计算后，系统可能会更新 A、B、C、E、F、H 等节点。

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-0310QvORMoGqrFB7pD.png)

测算完成后，我们遍历 Yoga 节点树，找出标记为 has_new_layout 的节点，并将其 width、height、x、y 值更新到对应的鸿蒙节点上。这样，所有节点的布局信息就更新完毕了。

布局更新完成后，我们再把前一帧中添加到样式处理队列的节点拿出来。将存储在节点临时对象中的绘制属性转移到鸿蒙节点上。在这个环节里大多数绘制属性可以直接设置，少量依赖节点布局信息的属性（如百分比形式的 background-size）也可以利用新计算出的布局信息来准确确定这些属性的值。

### 样式的更新

了解了初始化状态的样式工作流程后，我们再回过头来看一下样式更新部分的逻辑，在这一块逻辑里，样式的匹配和应用与前面的流程没有任何区别，所以只是简单介绍一下一个节点的样式是怎么被更新的。

#### Style 更新

Style 的更新是相对比较好处理的一部分，因为 Style 的影响范围只在节点的本身。当元素的 Style 更新时，我们只需要重新生成对应的 inline_style\_，然后将其与通过 className 生成的样式进行合并应用即可。这个过程相对简单直接，因为不需要考虑对其他元素的影响。通过这种方式，我们可以确保元素的样式得到准确更新，同时保持整体样式系统的一致性和效率。

#### ClassName 更新

当元素的 ClassName 更新时，我们需要执行以下步骤来确保样式正确应用：

1.识别包含新 ClassName 的所有选择器规则。

2.根据 ClassName 在规则中的位置，确定需要重新进行样式匹配的元素：

- 目标元素选择器：更新当前节点
- 直接后代选择器：更新直接子节点
- 后代选择器：更新所有子孙节点

这些规则适用于 className 的增加、删除、修改和查询操作。对于 className 的修改，我们将其视为先删除旧 className 再添加新 className，并执行两次规则匹配。

举一个例子，当样式规则和元素结构如下时：

```test
.E .G {}
.E .H {}
.I > .J {}
.I {}
```

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03MLVnKT109Lq9YZEQ.png)

为蓝色的节点添加 className I，为红色的节点添加 className E，那么需要要被更新的节点就有 F G H I J

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-03oO6tk8XfFlPmRrb.png)

在实际应用中，我们还需考虑性能问题。对于大型应用或复杂的元素结构，频繁的样式重计算可能会影响性能。因此，我们采取了一种优化策略：找出需要更新的节点后，不会立即进行样式重匹配，而是将这些节点标记为"脏"并放入更新队列中。然后，我们在下一帧统一完成所有样式重匹配的工作。这种方法可以有效减少重复计算，提高整体性能。

## 总结

通过本文，我们详细阐述了 Taro 在处理 CSS 样式与鸿蒙系统 ArkUI 框架之间差异的全流程。我们探讨了样式书写方式的不一致性、样式匹配和应用的复杂过程，以及样式更新时的处理策略。这些功能和特性使得 Taro 能够在保持跨平台兼容性的同时，实现 CSS 样式到鸿蒙系统的有效转换。

作为开发者，我们深知这个过程中面临的挑战，但也为最终取得的成果感到自豪。通过这种方法，我们为开发者提供了一个统一且强大的多端开发解决方案，使他们能够更加高效地开发跨平台应用。

我们相信，随着技术的不断进步，未来还会出现更多的优化空间。我们将继续致力于改进 Taro 的性能和兼容性，为开发者提供更好的开发体验。同时，我们也欢迎社区的反馈和贡献，共同推动 Taro 在多端开发领域的发展。

### 系列往期精选

[《京东鸿蒙上线前瞻——使用 Taro 打造高性能原生应用》](../../09/11/harmony-react-on-arkts)

[Taro 鸿蒙技术内幕系列（一）：如何将 React 代码跑在 ArkUI 上文章](../../09/29/harmony-react-on-arkts)

![](https://s3.cn-north-1.jdcloud-oss.com/shendengbucket1/2024-10-16-15-030TfLhjzRf916dOEY.png)

[《Taro 鸿蒙技术内幕系列（三） - 多语言场景下的通用事件系统设计》](../../11/01/harmony-native-events)
