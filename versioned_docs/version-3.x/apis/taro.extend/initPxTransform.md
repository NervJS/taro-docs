---
title: Taro.initPxTransform(config)
sidebar_label: initPxTransform
---

尺寸转换初始化

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(config: { baseFontSize?: number; deviceRatio?: TaroGeneral.TDeviceRatio; designWidth?: number | ((size?: string | number) => number); targetUnit?: string; unitPrecision?: number; }) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| config | { baseFontSize?: number; deviceRatio?: TaroGeneral.TDeviceRatio; designWidth?: number or ((size?: string or number) => number); targetUnit?: string; unitPrecision?: number; } |
