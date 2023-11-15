---
title: ChannelLive
sidebar_label: ChannelLive
---

小程序内嵌视频号直播组件，展示视频号直播状态和封面，并无弹窗跳转至视频号。注意：使用该组件打开的视频号视频需要与小程序的主体一致。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/channel-live.html)

## 类型

```tsx
ComponentType<ChannelLiveProps>
```

## ChannelLiveProps

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| feedId | `string` | 视频 feedId |
| finderUserName | `string` | 视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ChannelLiveProps.feedId | ✔️ |  |  |  |
| ChannelLiveProps.finderUserName | ✔️ |  |  |  |
