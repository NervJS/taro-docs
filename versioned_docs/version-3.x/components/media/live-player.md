---
title: LivePlayer
sidebar_label: LivePlayer
---

实时音视频播放。相关api：Taro.createLivePlayerContext

需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)

## 类型

```tsx
ComponentType<LivePlayerProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
class App extends Components {
  render () {
    return (
      <LivePlayer src='url' mode='live' autoplay  />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <live-player src="url" mode="live" :autoplay="true"  />
</template>
```
</TabItem>
</Tabs>

## LivePlayerProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| src | `string` |  | 否 | 音视频地址。目前仅支持 flv, rtmp 格式 |
| mode | `keyof Mode` | `"live"` | 否 | 模式 |
| autoplay | `boolean` | `false` | 否 | 自动播放 |
| muted | `boolean` | `false` | 否 | 是否静音 |
| orientation | `keyof Orientation` | `"vertical"` | 否 | 画面方向 |
| objectFit | `keyof objectFit` | `"contain"` | 否 | 填充模式 |
| backgroundMute | `boolean` | `false` | 否 | 进入后台时是否静音（已废弃，默认退台静音）<br />**不推荐使用** |
| minCache | `number` | `1` | 否 | 最小缓冲区，单位s |
| maxCache | `number` | `3` | 否 | 最大缓冲区，单位s |
| soundMode | `keyof soundMode` | `"speaker"` | 否 | 声音输出方式 |
| autoPauseIfNavigate | `boolean` | `true` | 否 | 当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放 |
| pictureInPictureMode | "" or "push" or "pop" or ("push" or "pop")[] |  | 否 | 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） |
| autoPauseIfOpenNative | `boolean` | `true` | 否 | 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放 |
| referrerPolicy | "origin" or "no-referrer" | `'no-referrer'` | 否 | 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html ，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； |
| signature | `string` |  | 否 | 设置署名水印 |
| enableMetadata | `string` |  | 否 | 是否回调metadata |
| id | `string` |  | 否 | live-player 属性的唯一标志符 |
| enableAutoRotation | `boolean` | `false` | 否 | 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效 |
| enableCasting | `boolean` | `false` | 否 | 是否支持投屏。开启后，可以通过 LivePlayerContext 上相关方法进行操作。 |
| onStateChange | `CommonEventFunction<onStateChangeEventDetail>` |  | 否 | 播放状态变化事件，detail = {code} |
| onFullScreenChange | `CommonEventFunction<onFullScreenChangeEventDetail>` |  | 否 | 全屏变化事件，detail = {direction, fullScreen} |
| onNetStatus | `CommonEventFunction<onNetStatusEventDetail>` |  | 否 | 网络状态通知，detail = {info} |
| onAudioVolumeNotify | `CommonEventFunction<{}>` |  | 否 | 播放音量大小通知，detail = {} |
| onEnterPictureInPicture | `CommonEventFunction` |  | 否 | 播放器进入小窗 |
| onLeavePictureInPicture | `CommonEventFunction` |  | 否 | 播放器退出小窗 |
| onError | `CommonEventFunction` |  | 否 | 播放错误事件 |
| onMetaDataChange | `CommonEventFunction` |  | 否 | metadata通知，detail = {info} |
| onCastingUserSelect | CommonEventFunction<{ state: "success" or "fail"; }> |  | 否 | 用户选择投屏设备时触发 detail = { state: "success"/"fail" } |
| onCastingStateChange | CommonEventFunction<{ type: any; state: "success" or "fail"; }> |  | 否 | 投屏成功/失败时触发 detail = { type, state: "success"/"fail" } |
| onCastingInterrupt | `CommonEventFunction` |  | 否 | 投屏被中断时触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LivePlayerProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.mode | ✔️ |  |  | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.autoplay | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.muted | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.orientation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.objectFit | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.backgroundMute | ✔️ | ✔️ |  |  |  |  |  |  |
| LivePlayerProps.minCache | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| LivePlayerProps.maxCache | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| LivePlayerProps.soundMode | ✔️ |  |  | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.autoPauseIfNavigate | ✔️ |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.pictureInPictureMode | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.autoPauseIfOpenNative | ✔️ |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.referrerPolicy | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.signature |  |  | ✔️ |  |  |  |  |  |
| LivePlayerProps.enableMetadata |  |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.id |  | ✔️ |  |  |  |  |  |  |
| LivePlayerProps.enableAutoRotation | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.enableCasting | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onStateChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.onFullScreenChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| LivePlayerProps.onNetStatus | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| LivePlayerProps.onAudioVolumeNotify | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onEnterPictureInPicture | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onLeavePictureInPicture | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onError |  |  | ✔️ |  |  |  |  |  |
| LivePlayerProps.onMetaDataChange |  |  |  | ✔️ |  |  |  |  |
| LivePlayerProps.onCastingUserSelect | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onCastingStateChange | ✔️ |  |  |  |  |  |  |  |
| LivePlayerProps.onCastingInterrupt | ✔️ |  |  |  |  |  |  |  |

### Mode

mode 的合法值

| 参数 | 说明 |
| --- | --- |
| live | 直播 |
| RTC | 实时通话，该模式时延更低 |

### Orientation

orientation 的合法值

| 参数 | 说明 |
| --- | --- |
| vertical | 竖直 |
| horizontal | 水平 |

### objectFit

objectFit 的合法值

| 参数 | 说明 |
| --- | --- |
| contain | 图像长边填满屏幕，短边区域会被填充⿊⾊ |
| fillCrop | 图像铺满屏幕，超出显示区域的部分将被截掉 |

### soundMode

soundMode 的合法值

| 参数 | 说明 |
| --- | --- |
| speaker | 扬声器 |
| ear | 听筒 |

### onStateChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | `number` | 状态码 |

### onFullScreenChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| direction | `number` | 方向 |
| fullScreen | number or boolean | 全屏 |

### onNetStatusEventDetail

| 参数 | 类型 |
| --- | --- |
| info | `NetStatus` |

### Status

状态码

| 参数 | 说明 |
| --- | --- |
| 2001 | 已经连接服务器 |
| 2002 | 已经连接 RTMP 服务器,开始拉流 |
| 2003 | 网络接收到首个视频数据包(IDR) |
| 2004 | 视频播放开始 |
| 2005 | 视频播放进度 |
| 2006 | 视频播放结束 |
| 2007 | 视频播放Loading |
| 2008 | 解码器启动 |
| 2009 | 视频分辨率改变 |
| -2301 | 网络断连，且经多次重连抢救无效，更多重试请自行重启播放 |
| -2302 | 获取加速拉流地址失败 |
| 2101 | 当前视频帧解码失败 |
| 2102 | 当前音频帧解码失败 |
| 2103 | 网络断连, 已启动自动重连 |
| 2104 | 网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀 |
| 2105 | 当前视频播放出现卡顿 |
| 2106 | 硬解启动失败，采用软解 |
| 2107 | 当前视频帧不连续，可能丢帧 |
| 2108 | 当前流硬解第一个I帧失败，SDK自动切软解 |
| 3001 | RTMP -DNS解析失败 |
| 3002 | RTMP服务器连接失败 |
| 3003 | RTMP服务器握手失败 |
| 3005 | RTMP 读/写失败 |
