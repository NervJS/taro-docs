---
title: Taro.connectWifi(option)
sidebar_label: connectWifi
---

连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.WifiError>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| SSID | `string` |  | 是 | Wi-Fi 设备 SSID |
| password | `string` |  | 是 | Wi-Fi 设备密码 |
| BSSID | `string` |  | 否 | Wi-Fi 设备 BSSID |
| maunal | `boolean` | `false` | 否 | 跳转到系统设置页进行连接 |
| partialInfo | `boolean` | `false` | 否 | 是否需要返回部分 Wi-Fi 信息，仅安卓生效 |
| complete | `(res: TaroGeneral.WifiError) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.WifiError) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.WifiError) => void` |  | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.connectWifi({
  SSID: '',
  BSSID: '',
  success: function (res) {
    console.log(res.errMsg)
  }
})
```
