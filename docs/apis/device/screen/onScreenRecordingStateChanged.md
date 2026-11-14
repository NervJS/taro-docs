---
title: Taro.onScreenRecordingStateChanged(callback)
sidebar_label: onScreenRecordingStateChanged
---

监听用户录屏事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onScreenRecordingStateChanged.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 用户录屏事件的监听函数 |

### ScreenRecordingState

| 参数 | 说明 |
| --- | --- |
| start | 开始录屏 |
| stop | 结束录屏 |

### Callback

用户录屏事件的监听函数

```tsx
(state: keyof ScreenRecordingState) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| state | `keyof ScreenRecordingState` | 录屏状态 |

## 示例代码

```tsx
// 监听用户录屏事件
const handler = function (res) {
    console.log(res.state)
}
Taro.onScreenRecordingStateChanged(handler)
```
