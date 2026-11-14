---
title: Taro.getDeviceVoIPList(option)
sidebar_label: getDeviceVoIPList
---

查询当前用户授权的音视频通话设备（组）信息

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/device-voip/wx.getDeviceVoIPList.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
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
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 |
| --- | --- |
| list | `DeviceVoIP[]` |

### DeviceVoIP

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| sn | `string` | 设备唯一序列号。（仅单台设备时） |
| model_id | `string` | 设备型号 id。通过微信公众平台注册设备获得。（仅单台设备时） |
| group_id | `string` | 设备组的唯一标识 id（仅设备组时） |
| status | `number` | 设备（组）授权状态。0：未授权；1：已授权 |

## 示例代码

```tsx
Taro.getDeviceVoIPList({
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})
```
