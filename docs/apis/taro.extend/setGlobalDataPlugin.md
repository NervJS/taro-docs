---
title: setGlobalDataPlugin
sidebar_label: setGlobalDataPlugin
---

Vue3 插件，用于设置 `getApp()` 中的全局变量

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
Plugin
```

## 参数

### Plugin

Vue3 插件，用于设置 `getApp()` 中的全局变量

#### install

```tsx
(app: any, data: any) => void
```

## 示例代码

```js
// 使用插件
const App = createApp(...)
App.use(setGlobalDataPlugin, {
  xxx: 999
})
// 获取全局变量
Taro.getApp().xxx
```
