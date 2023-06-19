---
title: Taro.useUnhandledRejection(callback)
sidebar_label: useUnhandledRejection
---

小程序有未处理的 Promise reject 时触发。也可以使用 Taro.onUnhandledRejection 绑定监听。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: (error: { reason: Error; promise: Promise<Error>; }) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(error: { reason: Error; promise: Promise<Error>; }) => void` |
