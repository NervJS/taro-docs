---
title: worklet
sidebar_label: worklet
---

worklet 对象，可以通过 wx.worklet 获取

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/wx.worklet.html)

## 类型

```tsx
worklet
```

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scrollViewContext | `{ scrollTo(NodesRef: TaroGeneral.IAnyObject, object: Option): void; }` | ScrollView 实例，可在 worklet 函数内操作 scroll-view 组件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.scrollViewContext.html) |
| Easing | `Easing` |  |

### cancelAnimation

取消由 SharedValue 驱动的动画

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.cancelAnimation.html)

```tsx
(SharedValue: TaroGeneral.IAnyObject) => void
```

| 参数 | 类型 |
| --- | --- |
| SharedValue | `TaroGeneral.IAnyObject` |

### derived

衍生值 DerivedValue，可基于已有的 SharedValue 生成其它共享变量。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.derived.html)

```tsx
(updaterWorklet: TaroGeneral.TFunc) => TaroGeneral.IAnyObject
```

| 参数 | 类型 |
| --- | --- |
| updaterWorklet | `TaroGeneral.TFunc` |

### shared

创建共享变量 SharedValue，用于跨线程共享数据和驱动动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.shared.html)

```tsx
(initialValue: any) => TaroGeneral.IAnyObject
```

### decay

基于滚动衰减的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.decay.html)

```tsx
(options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| options | `Option` | 动画配置<br />param: options 动画配置 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### spring

基于物理的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.spring.html)

```tsx
(toValue: string | number, options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| toValue | string or number | 目标值<br />param: toValue 目标值 |
| options | `Option` | 动画配置<br />param: options 动画配置 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### timing

基于时间的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.timing.html)

```tsx
(toValue: string | number, options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| toValue | string or number | 目标值<br />param: toValue 目标值 |
| options | `Option` | 动画配置<br />param: options 动画配置 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### delay

延迟执行动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.delay.html)

```tsx
(delayMS: number, delayedAnimation: TaroGeneral.IAnyObject) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| delayMS | `number` | 动画开始前等待的时间，单位：毫秒<br />param: delayMS 动画开始前等待的时间，单位：毫秒 |
| delayedAnimation | `TaroGeneral.IAnyObject` | 动画对象<br />param: delayedAnimation 动画对象 |

### repeat

重复执行动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.repeat.html)

```tsx
(delayedAnimation: TaroGeneral.IAnyObject, numberOfReps: number, reverse?: boolean, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| delayedAnimation | `TaroGeneral.IAnyObject` |  |
| numberOfReps | `number` | 重复次数。为负值时一直循环，直到被取消动画。<br />param: numberOfReps 重复次数。为负值时一直循环，直到被取消动画。 |
| reverse | `boolean` | 反向运行动画，每周期结束动画由尾到头运行。该字段仅对 timing 和 spring 返回的动画对象生效。<br />param: reverse 反向运行动画，每周期结束动画由尾到头运行。该字段仅对 timing 和 spring 返回的动画对象生效。 |
| callback | `(flag: boolean) => void` | 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。<br />param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。 |

### sequence

组合动画序列，依次执行传入的动画。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.sequence.html)

```tsx
(...delayedAnimation: TaroGeneral.IAnyObject) => TaroGeneral.IAnyObject
```

| 参数 | 类型 |
| --- | --- |
| delayedAnimation | `TaroGeneral.IAnyObject` |

### runOnJS

worklet 函数运行在 UI 线程时，捕获的外部函数可能为 worklet 类型或普通函数，为了更明显的对其区分，要求必须使用 runOnJS 调回 JS 线程的普通函数。 有这样的要求是因为，调用其它 worklet 函数时是同步调用，但在 UI 线程执行 JS 线程的函数只能是异步，开发者容易混淆，试图同步获取 JS 线程的返回值。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/tool-function/worklet.runOnJS.html)

```tsx
(fn: TaroGeneral.TFunc) => TaroGeneral.TFunc
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fn | `TaroGeneral.TFunc` | worklet 类型函数<br />param: fn worklet 类型函数 |

### runOnUI

在 UI 线程执行 worklet 函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/tool-function/worklet.runOnUI.html)

```tsx
(fn: TaroGeneral.TFunc) => TaroGeneral.TFunc
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fn | `TaroGeneral.TFunc` | worklet 类型函数<br />param: fn worklet 类型函数 |

## 参数

### SharedValue

### DerivedValue

### AnimationObject

### WorkletFunction

### scrollViewContext

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| top | `number` | 否 | 顶部距离 |
| left | `number` | 否 | 左边界距离 |
| duration | `number` | 否 | 滚动动画时长 |
| animated | `boolean` | 否 | 是否启用滚动动画 |
| easingFunction | `string` | 否 | 动画曲线 |

### decay

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| velocity | `number` | 否 | 初速度 |
| deceleration | `number` | 否 | 衰减速率 |
| clamp | `number[]` | 否 | 边界值，长度为 2 的数组 |

### Easing

#### bounce

简单的反弹效果

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### ease

简单的惯性动画

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### elastic

简单的弹性动画，类似弹簧来回摆动，高阶函数。默认弹性为 1，会稍微超出一次。弹性为 0 时 不会过冲

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(bounciness?: number) => any
```

| 参数 | 类型 |
| --- | --- |
| bounciness | `number` |

#### linear

线性函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### quad

二次方函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### cubic

立方函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### poly

高阶函数，返回幂函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(n: number) => any
```

| 参数 | 类型 |
| --- | --- |
| n | `number` |

#### bezier

三次贝塞尔曲线，效果同 css transition-timing-function

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(x1: number, y1: number, x2: number, y2: number) => any
```

| 参数 | 类型 |
| --- | --- |
| x1 | `number` |
| y1 | `number` |
| x2 | `number` |
| y2 | `number` |

#### circle

圆形曲线

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### sin

正弦函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### exp

指数函数

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(t: number) => any
```

| 参数 | 类型 |
| --- | --- |
| t | `number` |

#### in

正向运行 easing function，高阶函数。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(easing: (t: number) => any) => any
```

| 参数 | 类型 |
| --- | --- |
| easing | `(t: number) => any` |

#### out

反向运行 easing function，高阶函数。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(easing: (t: number) => any) => any
```

| 参数 | 类型 |
| --- | --- |
| easing | `(t: number) => any` |

#### inOut

前半程正向，后半程反向，高阶函数。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)

```tsx
(easing: (t: number) => any) => any
```

| 参数 | 类型 |
| --- | --- |
| easing | `(t: number) => any` |

### spring

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| damping | `number` | 否 | 阻尼系数 |
| mass | `number` | 否 | 重量系数，值越大移动越慢 |
| stiffness | `number` | 否 | 弹性系数 |
| overshootClamping | `boolean` | 否 | 动画是否可以在指定值上反弹 |
| restDisplacementThreshold | `number` | 否 | 弹簧静止时的位移 |
| restSpeedThreshold | `number` | 否 | 弹簧静止的速度 |
| velocity | `number` | 否 | 速度 |

### timing

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| duration | `number` | 否 | 动画时长 |
| easing | `(t: number) => number` | 否 | 动画曲线 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| worklet | ✔️ |  |  |  |
