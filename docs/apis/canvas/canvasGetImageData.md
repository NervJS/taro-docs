---
title: Taro.canvasGetImageData(option, component)
sidebar_label: canvasGetImageData
---

获取 canvas 区域隐含的像素数据。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html)

## 类型

```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| option | `Option` |  |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| canvasId | `string` | 是 | 画布标识，传入 [canvas](/docs/components/canvas) 组件的 `canvas-id` 属性。 |
| height | `number` | 是 | 将要被提取的图像数据矩形区域的高度 |
| width | `number` | 是 | 将要被提取的图像数据矩形区域的宽度 |
| x | `number` | 是 | 将要被提取的图像数据矩形区域的左上角横坐标 |
| y | `number` | 是 | 将要被提取的图像数据矩形区域的左上角纵坐标 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `Uint8ClampedArray` | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba |
| height | `number` | 图像数据矩形的高度 |
| width | `number` | 图像数据矩形的宽度 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success: function (res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```
