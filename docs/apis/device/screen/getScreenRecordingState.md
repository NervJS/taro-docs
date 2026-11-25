---
title: Taro.getScreenRecordingState(option)
sidebar_label: getScreenRecordingState
---

查询用户是否在录屏

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenRecordingState.html)

## 类型

```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(option: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### ScreenRecordingState

| 参数 | 说明 |
| --- | --- |
| on | 开启 |
| off | 关闭 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| state | `keyof ScreenRecordingState` | 录屏状态 |

## 示例代码

```tsx
Taro.getScreenRecordingState({
    success: function (res) {
        console.log(res.state)
    },
})
```
