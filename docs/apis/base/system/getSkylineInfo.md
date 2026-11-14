---
title: Taro.getSkylineInfo(option)
sidebar_label: getSkylineInfo
---

获取当前运行环境对于 Skyline 渲染引擎 的支持情况
基础库 2.26.2 开始支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfo.html)

## 类型

```tsx
(option?: Option) => Promise<Result>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| success | `(res: Result) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### Result

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| isSupported | `boolean` | 是 | 当前运行环境是否支持 Skyline 渲染引擎 |
| version | `string` | 是 | 当前运行环境 Skyline 渲染引擎 的版本号，形如 0.9.7 |
| reason | `string` | 否 | 当前运行环境不支持 Skyline 渲染引擎 的原因，仅在 isSupported 为 false 时出现 |
