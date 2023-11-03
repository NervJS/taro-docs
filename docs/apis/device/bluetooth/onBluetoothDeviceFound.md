---
title: Taro.onBluetoothDeviceFound(callback)
sidebar_label: onBluetoothDeviceFound
---

监听寻找到新设备的事件

**注意**
- 若在 Taro.onBluetoothDeviceFound 回调了某个设备，则此设备会添加到 Taro.getBluetoothDevices 接口获取到的数组中。
- 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 寻找到新设备的事件的回调函数 |

### Callback

寻找到新设备的事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| devices | `CallbackResultBlueToothDevice[]` | 新搜索到的设备列表 |

### CallbackResultBlueToothDevice

新搜索到的设备

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| RSSI | `number` | 是 | 当前蓝牙设备的信号强度，单位 dBm |
| advertisData | `ArrayBuffer` | 是 | 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 |
| advertisServiceUUIDs | `string[]` | 是 | 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 |
| deviceId | `string` | 是 | 用于区分设备的 id |
| localName | `string` | 是 | 当前蓝牙设备的广播数据段中的 LocalName 数据段 |
| name | `string` | 是 | 蓝牙设备名称，某些设备可能没有 |
| serviceData | `TaroGeneral.IAnyObject` | 是 | 当前蓝牙设备的广播数据段中的 ServiceData 数据段 |
| connectable | `boolean` | 否 | 当前蓝牙设备是否可连接（ Android 8.0 以下不支持返回该值 ） |

## 示例代码

```tsx
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function(bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}
Taro.onBluetoothDeviceFound(function (res) {
  var devices = res.devices;
  console.log('new device list has founded')
  console.dir(devices)
  console.log(ab2hex(devices[0].advertisData))
})
```
