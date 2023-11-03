---
title: Taro.getBLEDeviceCharacteristics(option)
sidebar_label: getBLEDeviceCharacteristics
---

获取蓝牙设备某个服务中所有特征值(characteristic)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)

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
| deviceId | `string` | 是 | 蓝牙设备 id |
| serviceId | `string` | 是 | 蓝牙服务 uuid，需要使用 `getBLEDeviceServices` 获取 |
| complete | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| characteristics | `BLECharacteristic[]` | 设备特征值列表 |
| errMsg | `string` | 成功：ok，错误：详细信息 |

### BLECharacteristic

设备特征值列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| properties | `Properties` | 该特征值支持的操作类型 |
| uuid | `string` | 蓝牙设备特征值的 uuid |

### Properties

该特征值支持的操作类型

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| indicate | `boolean` | 该特征值是否支持 indicate 操作 |
| notify | `boolean` | 该特征值是否支持 notify 操作 |
| read | `boolean` | 该特征值是否支持 read 操作 |
| write | `boolean` | 该特征值是否支持 write 操作 |
| writeNoResponse | `boolean` | 该特征是否支持无回复写操作 |
| writeDefault | `boolean` | 该特征是否支持有回复写操作 |

## 示例代码

```tsx
Taro.getBLEDeviceCharacteristics({
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId,
  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
  serviceId,
  success: function (res) {
    console.log('device getBLEDeviceCharacteristics:', res.characteristics)
  }
})
```
