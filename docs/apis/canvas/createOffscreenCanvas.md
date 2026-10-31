---
title: Taro.createOffscreenCanvas(options)
sidebar_label: createOffscreenCanvas
---

创建离屏 canvas 实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html

有两个版本的写法：

- createOffscreenCanvas(options) 从 2.16.1 起支持
- createOffscreenCanvas(width, height, this) 从 2.7.0 起支持)

## 类型

```tsx
(options: Option) => OffscreenCanvas
```

## 参数

| 参数 | 类型 |
| --- | --- |
| options | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | "webgl" or "2d" | `: 'webgl'` | 否 | 创建的离屏 canvas 类型 |
| height | `number` |  | 否 | 画布高度 |
| width | `number` |  | 否 | 画布宽度 |
| compInst | `TaroGeneral.IAnyObject` |  | 否 | 在自定义组件下，当前组件实例的 this，以操作组件内 [canvas](/docs/components/canvas) 组件 |

## 示例代码

```tsx
// 创建离屏 2D canvas 实例
const canvas = Taro.createOffscreenCanvas({type: '2d', width: 300, height: 150})
// 获取 context。注意这里必须要与创建时的 type 一致
const context = canvas.getContext('2d')

// 创建一个图片
const image = canvas.createImage()
// 等待图片加载
await new Promise(resolve => {
  image.onload = resolve
  image.src = IMAGE_URL // 要加载的图片 url
})

// 把图片画到离屏 canvas 上
context.clearRect(0, 0, 300, 150)
context.drawImage(image, 0, 0, 300, 150)

// 获取画完后的数据
const imgData = context.getImageData(0, 0, 300, 150)
```
