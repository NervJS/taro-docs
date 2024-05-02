---
title: Taro.getCurrentInstance()
sidebar_label: getCurrentInstance
---

获取当前页面实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
() => Current
```

## 参数

### Current

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| app | `any` | 是 |  |
| router | `any` | 是 |  |
| page | `any` | 是 |  |
| onReady | `string` | 是 |  |
| onHide | `string` | 是 |  |
| onShow | `string` | 是 |  |
| preloadData | `Record<any, any>` | 否 |  |
| rnNavigationRef | `React.RefObject<any>` | 否 | RN 私有对象navigationRef，用于使用底层接口控制路由 |
