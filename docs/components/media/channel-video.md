---
title: ChannelVideo
sidebar_label: ChannelVideo
---

小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号。注意：使用该组件打开的视频号视频需要与小程序相同主体或关联主体。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html)

## 类型

```tsx
ComponentType<ChannelVideoProps>
```

## ChannelVideoProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| feedId | `string` |  | 是 | 仅视频号视频与小程序同主体时生效。若内嵌非同主体视频，请使用 feed-token。 |
| finderUserName | `string` |  | 是 | 视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。 |
| loop | `boolean` | `false` | 否 | 是否循环播放 |
| muted | `boolean` | `false` | 否 | 是否静音播放 |
| objectFit | "fill" or "contain" or "cover" | `"contain"` | 否 | 当视频大小与 video 容器大小不一致时，视频的表现形式 |
| autoplay | `boolean` | `false` | 否 | 是否自动播放 |
| feedToken | `string` |  | 否 | 仅内嵌小程序非同主体视频号视频时使用，获取方式参考[本指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/channels-activity.html#feed-token)。 |
| onError | `CommonEventFunction` |  | 否 | 视频播放出错时触发 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| ChannelVideoProps.feedId | ✔️ |  |  |  |
| ChannelVideoProps.finderUserName | ✔️ |  |  |  |
| ChannelVideoProps.loop | ✔️ |  |  |  |
| ChannelVideoProps.muted | ✔️ |  |  |  |
| ChannelVideoProps.objectFit | ✔️ |  |  |  |
| ChannelVideoProps.autoplay | ✔️ |  |  |  |
| ChannelVideoProps.feedToken | ✔️ |  |  |  |
| ChannelVideoProps.onError | ✔️ |  |  |  |
