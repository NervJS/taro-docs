---
title: LivePusher
sidebar_label: LivePusher
---

实时音视频录制。需要用户授权 scope.camera、scope.record
需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)

## 类型

```tsx
ComponentType<LivePusherProps>
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
      <LivePusher url='url' mode='RTC' autopush  />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <live-pusher url="url" mode="RTC" :autopush="true"  />
</template>
```
</TabItem>
</Tabs>

## LivePusherProps

实时音视频录制。
需要用户授权 scope.camera、scope.record
暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| url | `string` |  | 否 | 推流地址。目前仅支持 rtmp 格式 |
| mode | "SD" or "HD" or "FHD" or "RTC" | `"RTC"` | 否 | SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话） |
| autopush | `boolean` | `false` | 否 | 自动推流 |
| enableVideoCustomRender | `boolean` | `false` | 否 | 自定义渲染，允许开发者自行处理所采集的视频帧 |
| muted | `boolean` | `false` | 否 | 是否静音。即将废弃，可用 enable-mic 替代<br />**不推荐使用** |
| enableCamera | `boolean` | `true` | 否 | 开启摄像头 |
| autoFocus | `boolean` | `true` | 否 | 自动聚集 |
| orientation | `keyof Orientation` | `"vertical"` | 否 | 画面方向 |
| beauty | `number` | `0` | 否 | 美颜，取值范围 0-9 ，0 表示关闭 |
| whiteness | `number` | `0` | 否 | 美白，取值范围 0-9 ，0 表示关闭 |
| aspect | "9:16" or "3:4" | `"9:16"` | 否 | 宽高比，可选值有 3:4, 9:16 |
| minBitrate | `number` | `200` | 否 | 最小码率 |
| maxBitrate | `number` | `1000` | 否 | 最大码率 |
| audioQuality | `string` | `"high"` | 否 | 高音质(48KHz)或低音质(16KHz)，值为high, low |
| waitingImage | `string` |  | 否 | 进入后台时推流的等待画面 |
| waitingImageHash | `string` |  | 否 | 等待画面资源的MD5值 |
| zoom | `boolean` | `false` | 否 | 调整焦距 |
| devicePosition | `string` | `"front"` | 否 | 前置或后置，值为front, back |
| backgroundMute | `boolean` | `false` | 否 | 进入后台时是否静音 |
| mirror | `boolean` | `false` | 否 | 设置推流画面是否镜像，产生的效果在 LivePlayer 反应到 |
| remoteMirror | `boolean` | `false` | 否 | 设置推流画面是否镜像，产生的效果在 LivePlayer 反应到<br /><br />**Note:** 同 mirror 属性，后续 mirror 将废弃 |
| localMirror | `keyof LocalMirror` | `"auto"` | 否 | 控制本地预览画面是否镜像 |
| audioReverbType | `keyof AudioReverbType` | `0` | 否 | 音频混响类型 |
| enableMic | `boolean` | `true` | 否 | 开启或关闭麦克风 |
| enableAgc | `boolean` | `false` | 否 | 是否开启音频自动增益 |
| enableAns | `boolean` | `false` | 否 | 是否开启音频噪声抑制 |
| audioVolumeType | `keyof AudioVolumeType` | `"voicecall"` | 否 | 音量类型 |
| videoWidth | `number` | `360` | 否 | 上推的视频流的分辨率宽度 |
| videoHeight | `number` | `640` | 否 | 上推的视频流的分辨率高度 |
| beautyStyle | `keyof BeautyStyleType` | `smooth` | 否 | 设置美颜类型 |
| filter | `keyof FilterType` | `standard` | 否 | 设置色彩滤镜 |
| pictureInPictureMode | string or any[] |  | 否 | 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） |
| customEffect | `boolean` | `false` | 否 | 是否启动自定义特效，设定后不能更改 |
| skinWhiteness | `number` | `0` | 否 | 自定义特效美白效果，取值 0~1。需要开启 custom-effect |
| skinSmoothness | `number` | `0` | 否 | 自定义特效磨皮效果，取值 0~1。需要开启 custom-effect |
| faceThinness | `number` | `0` | 否 | 自定义特效瘦脸效果，取值 0~1。需要开启 custom-effect |
| eyeBigness | `number` | `0` | 否 | 自定义特效大眼效果，取值 0~1。需要开启 custom-effect |
| voiceChangerType | `number` | `0` | 否 | 0：关闭变声；1：熊孩子；2：萝莉；3：大叔；4：重金属；6：外国人；7：困兽；8：死肥仔；9：强电流；10：重机械；11：空灵 |
| fps | `number` | `15` | 否 | 帧率，有效值为 1~30 |
| onStateChange | `CommonEventFunction<onStateChangeEventDetail>` |  | 否 | 状态变化事件，detail = {code} |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 渲染错误事件，detail = {errMsg, errCode} |
| onBgmProgress | `CommonEventFunction<onBgmProgressEventDetail>` |  | 否 | 背景音进度变化时触发，detail = {progress, duration} |
| onBgmComplete | `CommonEventFunction` |  | 否 | 背景音播放完成时触发 |
| onAudioVolumeNotify | `CommonEventFunction` |  | 否 | 返回麦克风采集的音量大小 |
| onNetStatus | `CommonEventFunction` |  | 否 | 网络状态通知，detail = {info} |
| onEnterPictureInPicture | `string` |  | 否 | 进入小窗 |
| onLeavePictureInPicture | `string` |  | 否 | 退出小窗 |
| onBgmStart | `CommonEventFunction` |  | 否 | 背景音开始播放时触发 |

### API 支持度

| API | 微信小程序 | QQ 小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LivePusherProps.url | ✔️ | ✔️ |  |  |  |
| LivePusherProps.mode | ✔️ | ✔️ |  |  |  |
| LivePusherProps.autopush | ✔️ | ✔️ |  |  |  |
| LivePusherProps.enableVideoCustomRender | ✔️ |  |  |  |  |
| LivePusherProps.muted | ✔️ | ✔️ |  |  |  |
| LivePusherProps.enableCamera | ✔️ | ✔️ |  |  |  |
| LivePusherProps.autoFocus | ✔️ | ✔️ |  |  |  |
| LivePusherProps.orientation | ✔️ | ✔️ |  |  |  |
| LivePusherProps.beauty | ✔️ | ✔️ |  |  |  |
| LivePusherProps.whiteness | ✔️ | ✔️ |  |  |  |
| LivePusherProps.aspect | ✔️ | ✔️ |  |  |  |
| LivePusherProps.minBitrate | ✔️ | ✔️ |  |  |  |
| LivePusherProps.maxBitrate | ✔️ | ✔️ |  |  |  |
| LivePusherProps.audioQuality | ✔️ | ✔️ |  |  |  |
| LivePusherProps.waitingImage | ✔️ | ✔️ |  |  |  |
| LivePusherProps.waitingImageHash | ✔️ | ✔️ |  |  |  |
| LivePusherProps.zoom | ✔️ | ✔️ |  |  |  |
| LivePusherProps.devicePosition | ✔️ | ✔️ |  |  |  |
| LivePusherProps.backgroundMute | ✔️ | ✔️ |  |  |  |
| LivePusherProps.mirror | ✔️ | ✔️ |  |  |  |
| LivePusherProps.remoteMirror | ✔️ |  |  |  |  |
| LivePusherProps.localMirror | ✔️ |  |  |  |  |
| LivePusherProps.audioReverbType | ✔️ | ✔️ |  |  |  |
| LivePusherProps.enableMic | ✔️ |  |  |  |  |
| LivePusherProps.enableAgc | ✔️ |  |  |  |  |
| LivePusherProps.enableAns | ✔️ |  |  |  |  |
| LivePusherProps.audioVolumeType | ✔️ |  |  |  |  |
| LivePusherProps.videoWidth | ✔️ |  |  |  |  |
| LivePusherProps.videoHeight | ✔️ |  |  |  |  |
| LivePusherProps.beautyStyle | ✔️ |  |  |  |  |
| LivePusherProps.filter | ✔️ |  |  |  |  |
| LivePusherProps.pictureInPictureMode | ✔️ |  |  |  |  |
| LivePusherProps.customEffect | ✔️ |  |  |  |  |
| LivePusherProps.skinWhiteness | ✔️ |  |  |  |  |
| LivePusherProps.skinSmoothness | ✔️ |  |  |  |  |
| LivePusherProps.faceThinness | ✔️ |  |  |  |  |
| LivePusherProps.eyeBigness | ✔️ |  |  |  |  |
| LivePusherProps.voiceChangerType | ✔️ |  |  |  |  |
| LivePusherProps.fps | ✔️ |  |  |  |  |
| LivePusherProps.onStateChange | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onError | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onBgmProgress | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onBgmComplete | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onAudioVolumeNotify | ✔️ |  |  |  |  |
| LivePusherProps.onNetStatus | ✔️ | ✔️ |  |  |  |
| LivePusherProps.onEnterPictureInPicture | ✔️ |  |  |  |  |
| LivePusherProps.onLeavePictureInPicture | ✔️ |  |  |  |  |
| LivePusherProps.onBgmStart | ✔️ | ✔️ |  |  |  |

### Orientation

orientation 的合法值

| 参数 | 说明 |
| --- | --- |
| vertical | 竖直 |
| horizontal | 水平 |

### LocalMirror

localMirror 的合法值

| 参数 | 说明 |
| --- | --- |
| auto | 前置摄像头镜像，后置摄像头不镜像 |
| enable | 前后置摄像头均镜像 |
| disable | 前后置摄像头均不镜像 |

### AudioReverbType

audioReverbType 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 关闭 |
| 1 | KTV |
| 2 | 小房间 |
| 3 | 大会堂 |
| 4 | 低沉 |
| 5 | 洪亮 |
| 6 | 金属声 |
| 7 | 磁性 |

### AudioVolumeType

audioVolumeType 的合法值

| 参数 | 说明 |
| --- | --- |
| auto | 自动 |
| media | 媒体音量 |
| voicecall | 通话音量 |

### BeautyStyleType

beautyStyleType 的合法值

| 参数 | 说明 |
| --- | --- |
| smooth | 光滑美颜 |
| nature | 自然美颜 |

### FilterType

filterType 的合法值

| 参数 | 说明 |
| --- | --- |
| standard | 标准 |
| pink | 粉嫩 |
| nostalgia | 怀旧 |
| blues | 蓝调 |
| romantic | 浪漫 |
| cool | 清凉 |
| fresher | 清新 |
| solor | 日系 |
| aestheticism | 唯美 |
| whitening | 美白 |
| cerisered | 樱红 |

### onStateChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | `number` | 状态码 |

### onNetstatusEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| info | `NetStatus` | 网络状态 |

### onErrorEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |
| errCode | string or number | 错误码 |

### onBgmProgressEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| progress | `any` | 进展 |
| duration | `number` | 持续时间 |
