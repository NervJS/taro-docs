---
title: Taro.downloadPackage(option)
sidebar_label: downloadPackage
---

针对在小程序中调用其他小程序的场景，预下载其他小程序的包内容。
Web 态说明：Web 态不支持预下载的能力。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-downloadPackage/)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| appKey | `string` | 是 | 预下载的小程序的 appKey |
| pageUrl | `string` | 否 | 预下载的小程序的 pageUrl ，默认值为小程序的首页页面 |
| success | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用成功的回调函数 |
| fail | `(err: TaroGeneral.CallbackResult) => any` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => any` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
