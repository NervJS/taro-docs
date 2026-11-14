---
title: Taro.createMediaRecorder(canvas, option)
sidebar_label: createMediaRecorder
---

创建 WebGL 画面录制器，可逐帧录制在 WebGL 上渲染的画面并导出视频文件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html)

## 类型

```tsx
(canvas?: any, option?: Option) => MediaRecorder
```

## 参数

| 参数 | 类型 |
| --- | --- |
| canvas | `any` |
| option | `Option` |

### Option

createMediaRecorder Option

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html)

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| duration | `number` | `600` | 否 | 指定录制的时长（s)，到达自动停止。最大 7200，最小 5 |
| videoBitsPerSecond | `number` | `1000` | 否 | 视频比特率（kbps），最小值 600，最大值 3000 |
| gop | `number` | `12` | 否 | 视频关键帧间隔 |
| fps | `number` | `24` | 否 | 视频 fps |
