---
title: Taro.getConnectedBluetoothDevices(option)
sidebar_label: getConnectedBluetoothDevices
---

根据 uuid 获取处于已连接状态的设备。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)

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
| services | `string[]` | 是 | 蓝牙设备主 service 的 uuid 列表 |
| complete | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| devices | `BluetoothDeviceInfo[]` | 搜索到的设备列表 |
| errMsg | `string` | 成功：ok，错误：详细信息 |

### BluetoothDeviceInfo

搜索到的设备

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| deviceId | `string` | 用于区分设备的 id |
| name | `string` | 蓝牙设备名称，某些设备可能没有 |

## 示例代码

```tsx
Taro.getConnectedBluetoothDevices({
  success: function (res) {
    console.log(res)
  }
})
```
