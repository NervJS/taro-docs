---
title: Taro.getLocation(option)
sidebar_label: getLocation
---

获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。

**注意**
- 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
- 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| altitude | `boolean` | `false` | 否 | 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| highAccuracyExpireTime | `number` |  | 否 | 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果 |
| isHighAccuracy | `boolean` | `false` | 否 | 开启高精度定位 |
| success | `(result: SuccessCallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| type | `string` | `"wgs84"` | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标 |
| needFullAccuracy | `boolean` | `false` | 否 | 针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。<br />传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框<br />API 支持度: swan |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| accuracy | `number` | 是 | 位置的精确度 |
| altitude | `number` | 是 | 高度，单位 m |
| horizontalAccuracy | `number` | 是 | 水平精度，单位 m |
| latitude | `number` | 是 | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | `number` | 是 | 经度，范围为 -180~180，负数表示西经 |
| speed | `number` | 是 | 速度，单位 m/s |
| verticalAccuracy | `number` | 是 | 垂直精度，单位 m（Android 无法获取，返回 0） |
| street | `string` | 否 | 城市名称<br />API 支持度: swan |
| cityCode | `string` | 否 | 国家代码<br />API 支持度: swan |
| city | `string` | 否 | 城市名称<br />API 支持度: swan, tt |
| country | `string` | 否 | 国家<br />API 支持度: swan |
| countryCode | `string` | 否 | 国家代码<br />API 支持度: swan |
| province | `string` | 否 | 省份<br />API 支持度: swan |
| streetNumber | `string` | 否 | 街道号码<br />API 支持度: swan |
| district | `string` | 否 | 区<br />API 支持度: swan |
| isFullAccuracy | `boolean` | 否 | 是不是精确定位信息<br />API 支持度: swan |
| errMsg | `string` | 是 | 调用结果 |

## 示例代码

 ```tsx
Taro.getLocation({
 type: 'wgs84',
 success: function (res) {
   const latitude = res.latitude
   const longitude = res.longitude
   const speed = res.speed
   const accuracy = res.accuracy
 }
})
```
