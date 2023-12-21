---
title: Taro.getBackgroundFetchData(option)
sidebar_label: getBackgroundFetchData
---

拉取 backgroundFetch 客户端缓存数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| fetchType | `string` | 是 | 缓存数据类别<br />weapp: 取值为 periodic<br />qq: 取值为 periodic<br />alipay: 取值为 pre: 数据预拉取; jsapiPre: API 预调用（目前仅支持地理位置预拉取） |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| fetchedData | string or Object | 是 | 缓存数据<br />alipay: Object |
| timeStamp | `number` | 是 | 客户端拿到缓存数据的时间戳 ms。(iOS 时间戳存在异常，8.0.27 修复) |
| path | `string` | 是 | 小程序页面路径 |
| query | `string` | 是 | 传给页面的 query 参数 |
| scene | `number` | 是 | 进入小程序的场景值 |
| fetchType | `string` | 否 | 缓存数据类型，与入参 fetchType 一致<br />API 支持度: alipay |
| timestamp | `number` | 否 | 缓存数据的时间戳。单位：ms。<br />API 支持度: alipay |
