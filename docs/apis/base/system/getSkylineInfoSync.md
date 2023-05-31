---
title: Taro.getSkylineInfoSync()
sidebar_label: getSkylineInfoSync
---

获取当前运行环境对于 Skyline 渲染引擎 的支持情况
基础库 2.26.2 开始支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfoSync.html)

## 类型

```tsx
() => Result
```

## 参数

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| isSupported | `boolean` | 是 | 当前运行环境是否支持 Skyline 渲染引擎 |
| version | `string` | 是 | 当前运行环境 Skyline 渲染引擎 的版本号，形如 0.9.7 |
| reason | `string` | 否 | 当前运行环境不支持 Skyline 渲染引擎 的原因，仅在 isSupported 为 false 时出现 |
