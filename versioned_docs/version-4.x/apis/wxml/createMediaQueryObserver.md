---
title: Taro.createMediaQueryObserver()
sidebar_label: createMediaQueryObserver
---

创建并返回一个 MediaQueryObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createMediaQueryObserver()` 来代替。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#Media%20Query)

## 类型

```tsx
() => MediaQueryObserver
```

## 示例代码

```tsx
let createMediaQueryObserver
if (process.env.TARO_ENV === 'weapp') {
   // 小程序没有组件实例，只能获取Page级组件实例
   createMediaQueryObserver = Taro.getCurrentInstance().page.createMediaQueryObserver
} else if (process.env.TARO_ENV === 'h5') {
   createMediaQueryObserver= Taro.createMediaQueryObserver
}
const mediaQueryObserver = createMediaQueryObserver()
```
