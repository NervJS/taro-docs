---
title: RtcRoom
sidebar_label: RtcRoom
---

实时音视频通话房间

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/media_rtc-room/)

## 类型

```tsx
ComponentType<RtcRoomProps>
```

## RtcRoomProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| id | `string` |  | 否 | rtc-room 组件的唯一标识符 |
| enableCamera | `boolean` | `true` | 否 | 是否开启摄像头 |
| enableAutoFocus | `boolean` | `true` | 否 | 是否开启摄像头自动对焦 |
| enableZoom | `boolean` | `false` | 否 | 是否支持双手滑动调整摄像头聚焦 |
| devicePosition | "front" or "back" | `"front"` | 否 | 设置前置还是后置摄像头，有效值：front、back |
| enableMic | `boolean` | `true` | 否 | 是否开启麦克风 |
| enableAgc | `boolean` | `false` | 否 | 是否开启音频自动增益 |
| enableAns | `boolean` | `false` | 否 | 是否开启音频噪声抑制 |
| bitrate | `number` | `900` | 否 | 最大码率 |
| videoWidth | `number` | `360` | 否 | 视频分辨率宽 |
| videoHeight | `number` | `640` | 否 | 视频分辨率高 |
| enableRemoteMirror | `boolean` | `false` | 否 | 设置远端看到的画面的镜像效果，该属性的变化不会影响到本地画面，仅影响远端看到的画面效果 |
| localMirror | "auto" or "enable" or "disable" | `"auto"` | 否 | 设置本地摄像头预览画面的镜像效果，有效值：auto、enable、disable |
| soundMode | "speaker" or "ear" | `"speaker"` | 否 | 设置声音输出方式，有效值：speaker、ear |
| onStateChange | `CommonEventFunction` |  | 否 | 房间状态变化事件，参考下方状态码，detail = { code, msg, userInfo } |
| onError | `CommonEventFunction` |  | 否 | 错误事件。参考下方错误码，detail = { errMsg, errCode } |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| RtcRoomProps.id |  | ✔️ |  |  |  |
| RtcRoomProps.enableCamera |  | ✔️ |  |  |  |
| RtcRoomProps.enableAutoFocus |  | ✔️ |  |  |  |
| RtcRoomProps.enableZoom |  | ✔️ |  |  |  |
| RtcRoomProps.devicePosition |  | ✔️ |  |  |  |
| RtcRoomProps.enableMic |  | ✔️ |  |  |  |
| RtcRoomProps.enableAgc |  | ✔️ |  |  |  |
| RtcRoomProps.enableAns |  | ✔️ |  |  |  |
| RtcRoomProps.bitrate |  | ✔️ |  |  |  |
| RtcRoomProps.videoWidth |  | ✔️ |  |  |  |
| RtcRoomProps.videoHeight |  | ✔️ |  |  |  |
| RtcRoomProps.enableRemoteMirror |  | ✔️ |  |  |  |
| RtcRoomProps.localMirror |  | ✔️ |  |  |  |
| RtcRoomProps.soundMode |  | ✔️ |  |  |  |
| RtcRoomProps.onStateChange |  | ✔️ |  |  |  |
| RtcRoomProps.onError |  | ✔️ |  |  |  |
