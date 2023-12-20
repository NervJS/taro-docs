---
title: Taro.closeBLEConnection(option)
sidebar_label: closeBLEConnection
---

断开与低功耗蓝牙设备的连接。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html)

## 类型

```tsx
(option: Option) => Promise<Promised>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Promised

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 成功：ok，错误：详细信息 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| deviceId | `string` | 是 | 用于区分设备的 id |
| complete | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.closeBLEConnection({
  deviceId,
  success: function (res) {
    console.log(res)
  }
})
```
