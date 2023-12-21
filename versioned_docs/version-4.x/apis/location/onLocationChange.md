---
title: Taro.onLocationChange(callback)
sidebar_label: onLocationChange
---

监听实时地理位置变化事件，需结合 Taro.startLocationUpdateBackground、Taro.startLocationUpdate 使用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `Callback` | 实时地理位置变化事件的回调函数 |

### Callback

实时地理位置变化事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| accuracy | `number` | 是 | 位置的精确度 |
| altitude | `number` | 是 | 高度，单位 m |
| horizontalAccuracy | `number` | 是 | 水平精度，单位 m |
| latitude | `number` | 是 | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | `number` | 是 | 经度，范围为 -180~180，负数表示西经 |
| speed | `number` | 是 | 速度，单位 m/s |
| verticalAccuracy | `number` | 是 | 垂直精度，单位 m（Android 无法获取，返回 0） |
| street | `string` | 否 | 街道名称<br />API 支持度: swan |
| cityCode | `string` | 否 | 城市编码<br />API 支持度: swan |
| city | `string` | 否 | 城市名称<br />API 支持度: swan, tt<br />tt: iOS 不支持 |
| country | `string` | 否 | 国家<br />API 支持度: swan |
| countryCode | `string` | 否 | 国家代码<br />API 支持度: swan |
| province | `string` | 否 | 省份<br />API 支持度: swan |
| streetNumber | `string` | 否 | 街道号码<br />API 支持度: swan |
| district | `string` | 否 | 区<br />API 支持度: swan |
| isFullAccuracy | `boolean` | 否 | 是不是精确定位信息<br />API 支持度: swan |

## 示例代码

```tsx
const _locationChangeFn = function (res) {
 console.log('location change', res)
}
Taro.onLocationChange(_locationChangeFn)
Taro.offLocationChange(_locationChangeFn)
```
