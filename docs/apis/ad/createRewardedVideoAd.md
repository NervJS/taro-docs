---
title: Taro.createRewardedVideoAd(option)
sidebar_label: createRewardedVideoAd
---

创建激励视频广告组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createRewardedVideoAd.html)

## 类型

```tsx
(option: Option) => RewardedVideoAd
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| adUnitId | `string` |  | 是 | 小程序广告位 ID<br />API 支持度: weapp, tt, swan |
| multiton | `boolean` | `false` | 否 | 是否启用多例模式<br />API 支持度: weapp |
| appSid | `string` |  | 否 | 小程序应用 ID<br />API 支持度: swan<br />swan: 必填 |
