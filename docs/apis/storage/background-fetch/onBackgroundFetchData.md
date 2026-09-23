---
title: Taro.onBackgroundFetchData(option)
sidebar_label: onBackgroundFetchData
---

收到 backgroundFetch 数据时的回调

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html)

## 类型

```tsx
(option?: Option | Callback) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | Option or Callback |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Callback

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fetchType | `string` | 缓存数据类别，取值为 periodic 或 pre |
| fetchedData | `string` | 缓存数据 |
| timeStamp | `number` | 客户端拿到缓存数据的时间戳 |
| path | `string` | 小程序页面路径 |
| query | `string` | 传给页面的 query 参数 |
| scene | `number` | 进入小程序的场景值 |
