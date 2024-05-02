---
title: Path2D
sidebar_label: Path2D
---

Canvas 2D API 的接口 Path2D 用来声明路径，此路径稍后会被CanvasRenderingContext2D 对象使用。CanvasRenderingContext2D 接口的 路径方法 也存在于 Path2D 这个接口中，允许你在 canvas 中根据需要创建可以保留并重用的路径。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Path2D.html)

## 方法

### addPath

添加路径到当前路径。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(path: Path2D) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `Path2D` | 添加的 Path2D 路径 |

### arc

添加一段圆弧路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 圆心横坐标 |
| y | `number` | 圆心纵坐标 |
| radius | `number` | 圆形半径，必须为正数 |
| startAngle | `number` | 圆弧开始角度 |
| endAngle | `number` | 圆弧结束角度 |
| counterclockwise | `boolean` | 是否逆时针绘制。如果传 true, 则会从 endAngle 开始绘制到 startAngle |

### arcTo

通过给定控制点添加一段圆弧路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(x1: number, y1: number, x2: number, y2: number, radius: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x1 | `number` | 第一个控制点横坐标 |
| y1 | `number` | 第一个控制点纵坐标 |
| x2 | `number` | 第二个控制点横坐标 |
| y2 | `number` | 第二个控制点纵坐标 |
| radius | `number` | 圆形半径，必须为非负数 |

### bezierCurveTo

添加三次贝塞尔曲线路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cp1x | `number` | 第一个控制点横坐标 |
| cp1y | `number` | 第一个控制点纵坐标 |
| cp2x | `number` | 第二个控制点横坐标 |
| cp2y | `number` | 第二个控制点纵坐标 |
| x | `number` | 结束点横坐标 |
| y | `number` | 结束点纵坐标 |

### closePath

闭合路径到起点

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
() => void
```

### ellipse

添加椭圆弧路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 椭圆圆心横坐标 |
| y | `number` | 椭圆圆心纵坐标 |
| radiusX | `number` | 椭圆长轴半径，必须为非负数 |
| radiusY | `number` | 椭圆短轴半径，必须为非负数 |
| rotation | `number` | 椭圆旋转角度 |
| startAngle | `number` | 圆弧开始角度 |
| endAngle | `number` | 圆弧结束角度 |
| counterclockwise | `boolean` | 是否逆时针绘制。如果传 true, 则会从 endAngle 开始绘制到 startAngle |

### lineTo

添加直线路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(x: number, y: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 结束点横坐标 |
| y | `number` | 结束点纵坐标 |

### moveTo

移动路径开始点

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(x: number, y: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### quadraticCurveTo

添加二次贝塞尔曲线路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(cpx: number, cpy: number, x: number, y: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| cpx | `number` | 控制点横坐标 |
| cpy | `number` | 控制点纵坐标 |
| x | `number` | 结束点横坐标 |
| y | `number` | 结束点纵坐标 |

### rect

添加方形路径

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

```tsx
(x: number, y: number, width: number, height: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 开始点横坐标 |
| y | `number` | 开始点纵坐标 |
| width | `number` | 方形宽度，正数向右，负数向左 |
| height | `number` | 方形高度，正数向下，负数向上 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| Path2D | ✔️ |  |  |  |
| Path2D.addPath | ✔️ |  |  |  |
| Path2D.arc | ✔️ |  |  |  |
| Path2D.arcTo | ✔️ |  |  |  |
| Path2D.bezierCurveTo | ✔️ |  |  |  |
| Path2D.closePath | ✔️ |  |  |  |
| Path2D.ellipse | ✔️ |  |  |  |
| Path2D.lineTo | ✔️ |  |  |  |
| Path2D.moveTo | ✔️ |  |  |  |
| Path2D.quadraticCurveTo | ✔️ |  |  |  |
| Path2D.rect | ✔️ |  |  |  |
