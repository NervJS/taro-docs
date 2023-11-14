---
title: Taro.onUserCaptureScreen(callback)
sidebar_label: onUserCaptureScreen
---

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 用户主动截屏事件的回调函数 |

### Callback

用户主动截屏事件的回调函数

```tsx
(result: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `TaroGeneral.CallbackResult` |

## 示例代码

```tsx
Taro.onUserCaptureScreen(function (res) {
    console.log('用户截屏了')
})
```
