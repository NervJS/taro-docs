---
title: Taro.requestDeviceVoIP(option)
sidebar_label: requestDeviceVoIP
---

请求用户授权与设备（组）间进行音视频通话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/device-voip/wx.requestDeviceVoIP.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| sn | `string` | 是 | 设备唯一序列号。由厂商分配，长度不能超过128字节。字符只接受数字，大小写字母，下划线（_）和连字符（-） |
| snTicket | `string` | 是 | 设备票据，5分钟内有效 |
| modelId | `string` | 是 | 设备型号 id。通过微信公众平台注册设备获得。 |
| deviceName | `string` | 是 | 设备名称，将显示在授权弹窗内（长度不超过13）。授权框中「设备名字」= 「deviceName」 + 「modelId 对应设备型号」 |
| isGroup | `boolean` | 否 | 是否为授权设备组，默认 false |
| groupId | `string` | 是 | 设备组的唯一标识 id 。isGroup 为 true 时只需要传该参数，isGroup 为 false 时不需要传该参数，但需要传 sn、snTicket、modelId、deviceName 。 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
// 授权单台设备
Taro.requestDeviceVoIP({
  sn: 'xxxx',
  snTicket: 'xxxxx',
  modelId: 'xxx',
  deviceName: 'xxx',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})

// 批量授权（授权设备组）
Taro.requestDeviceVoIP({
  isGroup: true,
  groupId: '设备组 ID',
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  }
})
```
