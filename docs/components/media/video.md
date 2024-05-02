---
title: Video
sidebar_label: Video
---

视频。相关api：Taro.createVideoContext

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)

## 类型

```tsx
ComponentType<VideoProps>
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
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <Video
          id='video'
          src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime={0}
          controls={true}
          autoplay={false}
          loop={false}
          muted={false}
        />
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <video
    id="video"
    src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
    initial-time="0"
    :controls="true"
    :autoplay="false"
    :loop="false"
    :muted="false"
  />
</template>
```
</TabItem>
</Tabs>

## VideoProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| src | `string` |  | 是 | 要播放视频的资源地址 |
| duration | `number` |  | 否 | 指定视频时长 |
| controls | `boolean` | `true` | 否 | 是否显示默认播放控件（播放/暂停按钮、播放进度、时间） |
| danmuList | `any[]` |  | 否 | 弹幕列表 |
| danmuBtn | `boolean` | `false` | 否 | 是否显示弹幕按钮，只在初始化时有效，不能动态变更 |
| enableDanmu | `boolean` | `false` | 否 | 是否展示弹幕，只在初始化时有效，不能动态变更 |
| autoplay | `boolean` | `false` | 否 | 是否自动播放 |
| loop | `boolean` | `false` | 否 | 是否循环播放 |
| muted | `boolean` | `false` | 否 | 是否静音播放 |
| initialTime | `number` |  | 否 | 指定视频初始播放位置 |
| pageGesture | `boolean` | `false` | 否 | 在非全屏模式下，是否开启亮度与音量调节手势 |
| direction | `number` |  | 否 | 设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度） |
| showProgress | `boolean` | `true` | 否 | 若不设置，宽度大于240时才会显示 |
| showFullscreenBtn | `boolean` | `true` | 否 | 是否显示全屏按钮 |
| showPlayBtn | `boolean` | `true` | 否 | 是否显示视频底部控制栏的播放按钮 |
| showCenterPlayBtn | `boolean` | `true` | 否 | 是否显示视频中间的播放按钮 |
| enableProgressGesture | `boolean` | `true` | 否 | 是否开启控制进度的手势 |
| objectFit | `keyof ObjectFit` | `"contain"` | 否 | 当视频大小与 video 容器大小不一致时，视频的表现形式 |
| poster | `string` |  | 否 | 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效 |
| showMuteBtn | `boolean` | `false` | 否 | 是否显示静音按钮 |
| title | `string` |  | 否 | 视频的标题，全屏时在顶部展示 |
| playBtnPosition | `keyof PlayBtnPosition` | `'bottom'` | 否 | 播放按钮的位置<br />- `bottom`: controls bar 上<br />- `center`: 视频中间 |
| enablePlayGesture | `boolean` | `false` | 否 | 是否开启播放手势，即双击切换播放/暂停 |
| autoPauseIfNavigate | `boolean` | `true` | 否 | 当跳转到其它小程序页面时，是否自动暂停本页面的视频 |
| autoPauseIfOpenNative | `boolean` | `true` | 否 | 当跳转到其它微信原生页面时，是否自动暂停本页面的视频 |
| vslideGesture | `boolean` | `false` | 否 | 在非全屏模式下，是否开启亮度与音量调节手势（同 `page-gesture`） |
| vslideGestureInFullscreen | `boolean` | `true` | 否 | 在全屏模式下，是否开启亮度与音量调节手势 |
| adUnitId | `string` |  | 否 | 视频前贴广告单元ID，更多详情可参考开放能力[视频前贴广告](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/video-patch-ad.html) |
| posterForCrawler | `string` |  | 否 | 用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址 |
| showCastingButton | `boolean` |  | 否 | 显示投屏按钮。只安卓且同层渲染下生效，支持 DLNA 协议 |
| pictureInPictureMode | "" or "push" or "pop" or ("push" or "pop")[] |  | 否 | 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） |
| enableAutoRotation | `boolean` |  | 否 | 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效 |
| showScreenLockButton | `boolean` |  | 否 | 是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作 |
| showSnapshotButton | `boolean` |  | 否 | 是否显示截屏按钮，仅在全屏时显示 |
| showBackgroundPlaybackButton | `boolean` |  | 否 | 是否展示后台音频播放按钮 |
| backgroundPoster | `string` |  | 否 | 进入后台音频播放后的通知栏图标（Android 独有） |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| showBottomProgress | `boolean` | `true` | 否 | 是否展示底部进度条 |
| pictureInPictureShowProgress | `string` |  | 否 | 是否在小窗模式下显示播放进度 |
| referrerPolicy | "origin" or "no-referrer" |  | 否 | 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； |
| isDrm | `boolean` |  | 否 | 是否是 DRM 视频源 |
| provisionUrl | `string` |  | 否 | DRM 设备身份认证 url，仅 is-drm 为 true 时生效 (Android) |
| certificateUrl | `string` |  | 否 | DRM 设备身份认证 url，仅 is-drm 为 true 时生效 (iOS) |
| licenseUrl | `string` |  | 否 | DRM 获取加密信息 url，仅 is-drm 为 true 时生效 |
| posterSize | `string` |  | 否 | 当 poster 高宽比跟视频高宽不匹配时，如何显示 poster，设置规则同 background-size 一致。 |
| showThinProgressBar | `string` |  | 否 | 当底部工具条隐藏时，是否显示细进度条（controls=false 时设置无效）。 |
| mobilenetHintType | `number` |  | 否 | 移动网络提醒样式。<br /><br />0 - 不提醒<br />1 - tip 提醒<br />2 - 阻塞提醒(无消耗流量大小)<br />3 - 阻塞提醒(有消耗流量大小提醒) |
| floatingMode | `string` |  | 否 | 浮窗设置。暂时不支持全局浮窗。<br />可选值：<br /><br />none：无浮窗。<br />page：页面内浮窗。 |
| showNoWifiTip | `string` |  | 否 | 非 wifi 环境下是否显示继续播放浮层 |
| showLockBtn | `string` |  | 否 | 全屏模式下，是否显示锁屏按钮 |
| showRateBtn | `string` |  | 否 | 是否显示倍速播放按钮 |
| showVslideBtnInFullscreen | `string` |  | 否 | 全屏模式下，是否显示侧边栏控制按钮 |
| silentPlay | `string` |  | 否 | 是否进入无声视频模式，进入无声视频模式后，视频将静音播放且不响应系统物理音量变化，点击播放器提示无声视频，手势调节失效 |
| preRollUnitId | `string` |  | 否 | 前贴广告的 unit id |
| postRollUnitId | `string` |  | 否 | 后贴广告的 unit id |
| showPlaybackRateBtn | `string` |  | 否 | 是否显示倍速控件，点击倍速控件后可选择倍速，可选值： 0.75/1.0/1.25/1.5/2 |
| enablePlayInBackground | `string` |  | 否 | video 播放时宿主退出后台后开启小窗播放，iOS 14 及以上版本支持。开启时首次退出后台后给予弹窗提示用户授权，授权完成后可以到小程序「设置」中重设。支持场景见后台小窗播放 |
| signature | `string` |  | 否 | 设置署名水印 |
| preferredPeakBitRate | `number` |  | 否 | 指定码率上界，单位为比特每秒 |
| isLive | `boolean` |  | 否 | 是否为直播源 |
| definition | `string` |  | 否 | 清晰度，设置清晰度列表和默认播放的清晰度。切换清晰度按钮仅在全屏时展示，属性说明详见 Definition 类型说明。需要保证 src 和 definition 中有一个为必填，若同时设置了 src 和 definition，definition 优先级高于 src |
| onPlay | `CommonEventFunction` |  | 否 | 当开始/继续播放时触发 play 事件 |
| onPause | `CommonEventFunction` |  | 否 | 当暂停播放时触发 pause 事件 |
| onEnded | `CommonEventFunction` |  | 否 | 当播放到末尾时触发 ended 事件 |
| onTimeUpdate | `CommonEventFunction<onTimeUpdateEventDetail>` |  | 否 | 播放进度变化时触发, 触发频率 250ms 一次 |
| onFullscreenChange | `CommonEventFunction<onFullscreenChangeEventDetail>` |  | 否 | 当视频进入和退出全屏时触发 |
| onWaiting | `CommonEventFunction<onWaitingEventDetail>` |  | 否 | 视频出现缓冲时触发 |
| onError | `CommonEventFunction` |  | 否 | 视频播放出错时触发 |
| onProgress | `CommonEventFunction<onProgressEventDetail>` |  | 否 | 加载进度变化时触发，只支持一段加载 |
| onLoadedMetaData | `CommonEventFunction<onLoadedMetaDataEventDetail>` |  | 否 | 视频元数据加载完成时触发 |
| onEnterPictureInPicture | `CommonEventFunction` |  | 否 | 播放器进入小窗 |
| onLeavePictureInPicture | `CommonEventFunction` |  | 否 | 播放器退出小窗 |
| onSeekComplete | `CommonEventFunction` |  | 否 | seek 完成时触发 |
| onFullScreenChange | `CommonEventFunction<onFullscreenChangeEventDetail>` |  | 否 | 视频进入和退出全屏时触发 |
| onControlsToggle | `CommonEventFunction<onControlsToggleEventDetail>` |  | 否 | 切换 controls 显示隐藏时触发。 |
| onLoading | `CommonEventFunction` |  | 否 | 视频出现缓冲时触发。 |
| onTap | `CommonEventFunction<onTapEventDetail>` |  | 否 | 点击视频 view 时触发 |
| onUserAction | `CommonEventFunction<onUserActionEventDetail>` |  | 否 | 用户操作事件 |
| onStop | `CommonEventFunction` |  | 否 | 视频播放终止。 |
| onRenderStart | `CommonEventFunction` |  | 否 | 当视频加载完真正开始播放时触发。 |
| onAdStart | `CommonEventFunction<onAdTypeCommonEventDetail>` |  | 否 | 贴片广告开始播放时触发 |
| onAdEnded | `CommonEventFunction<onAdTypeCommonEventDetail>` |  | 否 | 贴片广告播放结束时触发 |
| onAdClose | `CommonEventFunction<onAdTypeCommonEventDetail>` |  | 否 | 贴片广告非自然结束时触发，如：用户关闭广告或广告播放过程中 video 组件被销毁 |
| onAdError | `CommonEventFunction<onAdTypeCommonEventDetail>` |  | 否 | 贴片广告加载失败时触发 |
| onPlayBackRateChange | `CommonEventFunction<{ playbackRate: string; }>` |  | 否 | 视频倍速改变完成时触发。返回改变后的倍速值 |
| onMuteChange | `CommonEventFunction<{ isMuted: boolean; }>` |  | 否 | 静音状态改变完成时触发。返回当前是否静音 |
| onControlTap | `CommonEventFunction<{ controlType: any; }>` |  | 否 | 点击控件时触发。返回当前点击的控件类型 |
| onEnterBackground | `CommonEventFunction` |  | 否 | 进入小窗播放时触发 |
| onCloseBackground | `CommonEventFunction` |  | 否 | 关闭小窗播放时触发 |
| onLeaveBackground | `CommonEventFunction` |  | 否 | 离开小窗进入 app 事件时触发 |
| onLoadedData | `CommonEventFunction` |  | 否 | 否 |
| onLoadStart | `CommonEventFunction` |  | 否 | 否 |
| onSeeked | `CommonEventFunction` |  | 否 | 否 |
| onSeeking | `CommonEventFunction` |  | 否 | 否 |
| onAdLoad | `CommonEventFunction` |  | 否 | 贴片广告加载成功时触发，event.detail = { adType: 'preRollAd' or 'postRollAd' } |
| onCastingUserSelect | `CommonEventFunction` |  | 否 | 用户选择投屏设备时触发 detail = { state: "success"/"fail" } |
| onCastingStateChange | `CommonEventFunction` |  | 否 | 投屏成功/失败时触发 detail = { type, state: "success"/"fail" } |
| onCastingInterrupt | `CommonEventFunction` |  | 否 | 投屏被中断时触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| VideoProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.duration | ✔️ |  | ✔️ |  | ✔️ |  | ✔️ | ✔️ |  | ✔️ |
| VideoProps.controls | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.danmuList | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.danmuBtn | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.enableDanmu | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.autoplay | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.loop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.muted | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.initialTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.pageGesture | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |
| VideoProps.direction | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |  |
| VideoProps.showProgress | ✔️ | ✔️ |  |  | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.showFullscreenBtn | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.showPlayBtn | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.showCenterPlayBtn | ✔️ | ✔️ | ✔️ |  | ✔️ |  | ✔️ | ✔️ |  | ✔️ |
| VideoProps.enableProgressGesture | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.objectFit | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| VideoProps.poster | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.showMuteBtn | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.title | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |
| VideoProps.playBtnPosition | ✔️ |  |  | ✔️ | ✔️ |  |  |  |  |  |
| VideoProps.enablePlayGesture | ✔️ | ✔️ |  | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.autoPauseIfNavigate | ✔️ |  |  |  | ✔️ |  |  |  |  |  |
| VideoProps.autoPauseIfOpenNative | ✔️ |  |  |  | ✔️ |  |  |  |  |  |
| VideoProps.vslideGesture | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |  |  | ✔️ |
| VideoProps.vslideGestureInFullscreen | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |  |  | ✔️ |
| VideoProps.adUnitId | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.posterForCrawler | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.showCastingButton | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.pictureInPictureMode | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.enableAutoRotation | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.showScreenLockButton | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.showSnapshotButton | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.showBackgroundPlaybackButton | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.backgroundPoster | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |
| VideoProps.showBottomProgress | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.pictureInPictureShowProgress | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.referrerPolicy | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.isDrm | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.provisionUrl | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.certificateUrl | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.licenseUrl | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.posterSize |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.showThinProgressBar |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.mobilenetHintType |  |  | ✔️ |  |  | ✔️ |  |  |  |  |
| VideoProps.floatingMode |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.showNoWifiTip |  | ✔️ |  |  |  |  |  |  |  |  |
| VideoProps.showLockBtn |  | ✔️ |  |  |  |  |  |  |  |  |
| VideoProps.showRateBtn |  | ✔️ |  |  |  |  |  |  |  |  |
| VideoProps.showVslideBtnInFullscreen |  | ✔️ |  |  |  |  |  |  |  |  |
| VideoProps.silentPlay |  | ✔️ |  |  |  |  |  |  |  |  |
| VideoProps.preRollUnitId |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.postRollUnitId |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.showPlaybackRateBtn |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.enablePlayInBackground |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.signature |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.preferredPeakBitRate | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.isLive | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.definition |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onPlay | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.onPause | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.onEnded | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.onTimeUpdate | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.onFullscreenChange |  |  | ✔️ |  |  |  | ✔️ | ✔️ |  | ✔️ |
| VideoProps.onWaiting | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| VideoProps.onError | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| VideoProps.onProgress | ✔️ |  |  | ✔️ | ✔️ |  | ✔️ |  |  | ✔️ |
| VideoProps.onLoadedMetaData | ✔️ | ✔️ |  | ✔️ |  | ✔️ |  | ✔️ |  |  |
| VideoProps.onEnterPictureInPicture | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.onLeavePictureInPicture | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.onSeekComplete | ✔️ |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onFullScreenChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| VideoProps.onControlsToggle | ✔️ | ✔️ |  |  |  |  |  |  |  |  |
| VideoProps.onLoading |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.onTap |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.onUserAction |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.onStop |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.onRenderStart |  |  | ✔️ |  |  |  |  |  |  |  |
| VideoProps.onAdStart |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onAdEnded |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onAdClose |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onAdError |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onPlayBackRateChange |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onMuteChange |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onControlTap |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onEnterBackground |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onCloseBackground |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onLeaveBackground |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onLoadedData |  |  |  |  |  | ✔️ |  |  |  |  |
| VideoProps.onLoadStart |  |  |  |  |  | ✔️ |  |  |  |  |
| VideoProps.onSeeked |  |  |  |  |  | ✔️ |  |  |  |  |
| VideoProps.onSeeking |  |  |  |  |  | ✔️ |  |  |  |  |
| VideoProps.onAdLoad |  |  |  | ✔️ |  |  |  |  |  |  |
| VideoProps.onCastingUserSelect | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.onCastingStateChange | ✔️ |  |  |  |  |  |  |  |  |  |
| VideoProps.onCastingInterrupt | ✔️ |  |  |  |  |  |  |  |  |  |

### direction

direction 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 正常竖向 |
| 90 | 屏幕逆时针90度 |
| -90 | 屏幕顺时针90度 |

### ObjectFit

objectFit 的合法值

| 参数 | 说明 |
| --- | --- |
| contain | 包含 |
| fill | 填充 |
| cover | 覆盖 |

### PlayBtnPosition

playBtnPosition 的合法值

| 参数 | 说明 |
| --- | --- |
| bottom | controls bar上 |
| center | 视频中间 |

### onTimeUpdateEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| currentTime | `number` | 当前时间 |
| duration | `number` | 持续时间 |
| userPlayDuration | `number` | 用户实际观看时长 |
| videoDuration | `number` | 视频总时长 |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| onTimeUpdateEventDetail.userPlayDuration |  | ✔️ |  |  |  |
| onTimeUpdateEventDetail.videoDuration |  | ✔️ |  |  |  |

### onFullscreenChangeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| direction | "vertical" or "horizontal" | 方向 |
| fullScreen | number or boolean | 全屏 |

### onWaitingEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| direction | "vertical" or "horizontal" | 方向 |
| fullScreen | number or boolean | 全屏 |

### onProgressEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| buffered | `number` | 百分比 |

### onLoadedMetaDataEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 视频宽度 |
| height | `number` | 视频高度 |
| duration | `number` | 持续时间 |

### onControlsToggleEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| show | `boolean` | 是否显示 |

### onTapEventDetail

| 参数 | 类型 |
| --- | --- |
| ptInView | `{ x: number; y: number; }` |

### onUserActionEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tag | `string` | 用户操作的元素 |
| value | `number` |  |

### UserActionTag

| 参数 | 说明 |
| --- | --- |
| play | 底部播放按钮 |
| centerplay | 中心播放按钮 |
| mute | 静音按钮 |
| fullscreen | 全屏按钮 |
| retry | 重试按钮 |
| mobilenetplay | 网络提醒的播放按钮 |

### onAdTypeCommonEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| adType | "preRollAd" or "postRollAd" | 广告类型 |
