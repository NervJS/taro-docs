---
title: AnimationView
sidebar_label: AnimationView
---

Lottie 动画

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/animation-view-Lottie/)

## 类型

```tsx
ComponentType<AnimationViewProps>
```

## AnimationViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| path | `string` |  | 否 | 动画资源地址，目前只支持绝对路径 |
| loop | `boolean` | `false` | 否 | 动画是否循环播放 |
| autoplay | `boolean` | `true` | 否 | 动画是否自动播放 |
| action | "play" or "pause" or "stop" | `"play"` | 否 | 动画操作，可取值 play、pause、stop |
| hidden | `boolean` | `true` | 否 | 是否隐藏动画 |
| onEnded | `CommonEventFunction` |  | 否 | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发） |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AnimationViewProps.path |  | ✔️ |  |  |  |
| AnimationViewProps.loop |  | ✔️ |  |  |  |
| AnimationViewProps.autoplay |  | ✔️ |  |  |  |
| AnimationViewProps.action |  | ✔️ |  |  |  |
| AnimationViewProps.hidden |  | ✔️ |  |  |  |
| AnimationViewProps.onEnded |  | ✔️ |  |  |  |
