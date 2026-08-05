---
title: Taro.createCameraContext(id)
sidebar_label: createCameraContext
---

创建 camera 上下文 CameraContext 对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> 支付宝小程序: 支付宝小程序需指定 camera 组件中的 id 属性

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html)

## 类型

```tsx
(id?: string) => CameraContext
```

## 参数

| 参数 | 类型 |
| --- | --- |
| id | `string` |

## 示例代码

```tsx
const cameraContext = Taro.createCameraContext()
```
