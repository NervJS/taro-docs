---
title: Taro.chooseLocation(option)
sidebar_label: chooseLocation
---

打开地图选择位置。

`chooseLocation` api功能是依赖于腾讯位置服务，所以需要使用 api 密钥。如果您没有，可以前往腾讯位置服务[开发者控制台](https://lbs.qq.com/console/mykey.html?console=mykey)进行申请。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)

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
| latitude | `number` | 否 | 目标地纬度 |
| longitude | `number` | 否 | 目标地经度 |
| mapOpts | `Record<string, unknown>` | 否 | 地图选点组件参数<br />API 支持度: h5<br />h5: 仅支持 H5 使用<br />[参考地址](https://lbs.qq.com/webApi/component/componentGuide/componentPicker) |
| title | `string` | 否 | 页面显示标题<br />API 支持度: alipay<br />alipay: 安卓默认值为 位置，iOS、IDE 默认值为 你在哪里?<br />[参考地址](https://opendocs.alipay.com/mini/api/location?pathHash=951b46a1) |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| address | `string` | 是 | 详细地址 |
| latitude | `number` | 是 | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 |
| longitude | `number` | 是 | 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 |
| name | `string` | 是 | 位置名称 |
| adCode | `number` | 否 | 区县代码<br />API 支持度: alipay |
| adName | `string` | 否 | 区县名称<br />API 支持度: alipay |
| cityCode | `string` | 否 | 城市代码<br />API 支持度: alipay |
| cityName | `string` | 否 | 城市名称<br />API 支持度: alipay |
| provinceCode | `number` | 否 | 省份代码<br />API 支持度: alipay |
| provinceName | `string` | 否 | 省份名称<br />API 支持度: alipay |
| errMsg | `string` | 是 | 调用结果 |

## 示例代码

```tsx
// config/index.js

// 获得 api 密钥后，您需要将它填入项目的常量配置`defineConstants.LOCATION_APIKEY`中：
const config = {
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')
  },
  // ...
}
```
