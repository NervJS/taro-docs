---
title: AnimationVideo
sidebar_label: AnimationVideo
---

透明视频动画

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/animation-video/)

## 类型

```tsx
ComponentType<AnimationVideoProps>
```

## AnimationVideoProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| resourceWidth | `number` | `800` | 否 | 组件使用的 video 视频资源的宽度（单位：px） |
| resourceHeight | `number` | `400` | 否 | 组件使用的 video 视频资源的高度（单位：px） |
| canvasStyle | `string` | `"width: 400px;height: 400px"` | 否 | 用于设置动画画布的 CSS 样式 |
| path | `string` |  | 否 | 动画资源地址，支持相对路径以及远程地址。如果是远程路径，注意 response header 里需要设置 Access-Control-Allow-Origin 来防止跨域问题 |
| loop | `boolean` | `false` | 否 | 动画是否循环播放 |
| autoplay | `boolean` | `false` | 否 | 动画是否自动播放 |
| alphaDirection | `string` | `"left"` | 否 | 视频资源中 alpha 通道的方向，left 表示 alpha 通道在资源的左边，right 表示 alpha 通道在资源的右边。详情请参考透明视频设计资源示例 |
| onStarted | `CommonEventFunction` |  | 否 | 动画开始播放的回调 |
| onEnded | `CommonEventFunction` |  | 否 | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及暂停动画不会触发） |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AnimationVideoProps.resourceWidth |  | ✔️ |  |  |  |
| AnimationVideoProps.resourceHeight |  | ✔️ |  |  |  |
| AnimationVideoProps.canvasStyle |  | ✔️ |  |  |  |
| AnimationVideoProps.path |  | ✔️ |  |  |  |
| AnimationVideoProps.loop |  | ✔️ |  |  |  |
| AnimationVideoProps.autoplay |  | ✔️ |  |  |  |
| AnimationVideoProps.alphaDirection |  | ✔️ |  |  |  |
| AnimationVideoProps.onStarted |  | ✔️ |  |  |  |
| AnimationVideoProps.onEnded |  | ✔️ |  |  |  |
