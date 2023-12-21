---
title: Taro.getFuzzyLocation(option)
sidebar_label: getFuzzyLocation
---

获取当前的模糊地理位置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html)

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
| type | `keyof Type` | 否 | wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Type

| 参数 | 说明 |
| --- | --- |
| wgs84 | 返回 gps 坐标 |
| gcj02 | 返回 gcj02 坐标 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| latitude | `number` | 纬度，范围为 -90~90，负数表示南纬 |
| longitude | `number` | 经度，范围为 -180~180，负数表示西经 |

## 示例代码

```tsx
Taro.getFuzzyLocation({
  type: 'wgs84',
  success (res) {
    const latitude = res.latitude
    const longitude = res.longitude
  },
})
```
