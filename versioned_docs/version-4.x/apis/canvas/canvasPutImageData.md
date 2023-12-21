---
title: Taro.canvasPutImageData(option, component)
sidebar_label: canvasPutImageData
---

将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html)

## 类型

```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| option | `Option` |  |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| canvasId | `string` | 是 | 画布标识，传入 [canvas](/docs/components/canvas) 组件的 canvas-id 属性。 |
| data | `Uint8ClampedArray` | 是 | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba |
| height | `number` | 是 | 源图像数据矩形区域的高度 |
| width | `number` | 是 | 源图像数据矩形区域的宽度 |
| x | `number` | 是 | 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量） |
| y | `number` | 是 | 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量） |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
const data = new Uint8ClampedArray([255, 0, 0, 1])
Taro.canvasPutImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 1,
  data: data,
  success: function (res) {}
})
```
