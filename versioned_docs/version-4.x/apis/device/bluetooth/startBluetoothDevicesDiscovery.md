---
title: Taro.startBluetoothDevicesDiscovery(option)
sidebar_label: startBluetoothDevicesDiscovery
---

开始搜寻附近的蓝牙外围设备。**此操作比较耗费系统资源，请在搜索并连接到设备后调用 Taro.stopBluetoothDevicesDiscovery 方法停止搜索。**

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)

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
| allowDuplicatesKey | `boolean` | 否 | 是否允许重复上报同一设备。如果允许重复上报，则 Taro.onBlueToothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。 |
| complete | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用失败的回调函数 |
| interval | `number` | 否 | 上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。 |
| services | `string[]` | 否 | 要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。 |
| powerLevel | `keyof PowerLevel` | 否 | 扫描模式，越高扫描越快，也越耗电。仅安卓微信客户端 7.0.12 及以上支持。 |
| success | `(res: TaroGeneral.BluetoothError) => void` | 否 | 接口调用成功的回调函数 |

### PowerLevel

| 参数 | 说明 |
| --- | --- |
| low | 低 |
| medium | 中 |
| high | 高 |

## 示例代码

```tsx
// 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
Taro.startBluetoothDevicesDiscovery({
  services: ['FEE7'],
  success: function (res) {
    console.log(res)
  }
})
```
