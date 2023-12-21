---
title: Taro.startBeaconDiscovery(option)
sidebar_label: startBeaconDiscovery
---

开始搜索附近的 iBeacon 设备

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.IBeaconError>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| uuids | `string[]` |  | 是 | iBeacon 设备广播的 uuid 列表 |
| complete | `(res: TaroGeneral.IBeaconError) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.IBeaconError) => void` |  | 否 | 接口调用失败的回调函数 |
| ignoreBluetoothAvailable | `boolean` | `false` | 否 | 是否校验蓝牙开关，仅在 iOS 下有效 |
| success | `(res: TaroGeneral.IBeaconError) => void` |  | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.startBeaconDiscovery({
  success: function (res) { }
})
```
