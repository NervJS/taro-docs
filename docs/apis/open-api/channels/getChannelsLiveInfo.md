---
title: Taro.getChannelsLiveInfo(option)
sidebar_label: getChannelsLiveInfo
---

获取视频号直播信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveInfo.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| finderUserName | `string` | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| feedId | `string` | 是 | 直播 feedId |
| nonceId | `string` | 是 | 直播 nonceId |
| description | `string` | 是 | 直播主题 |
| status | `number` | 是 | 直播状态，2直播中，3直播结束 |
| headUrl | `string` | 是 | 视频号头像 |
| nickname | `string` | 是 | 视频号昵称 |
| replayStatus | `number` | 是 | 直播回放状态 |
| otherInfos | `string[]` | 否 | 除最近的一条直播外，其他的直播列表（注意：每次最多返回按时间戳增序排列的15个直播信息，其中时间最近的那个直播会在接口其他的返回参数中展示，其余的直播会在该字段中展示）。 |

### Status

| 参数 | 说明 |
| --- | --- |
| 2 | 直播中 |
| 3 | 直播结束 |

### ReplayStatus

| 参数 | 说明 |
| --- | --- |
| 0 | 未生成 |
| 1 | 已生成 |
| 3 | 生成中 |
| 6 | 已过期 |
