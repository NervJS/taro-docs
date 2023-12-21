---
title: Taro.getOpenUserInfo(Option)
sidebar_label: getOpenUserInfo
---

此接口可获取支付宝会员的基础信息（头像图片地址、昵称、性别、国家码、省份、所在市区），接入方法请参考 获取会员基础信息介绍。如需获取支付宝会员标识（user_id），请调用 my.getAuthCode 和 alipay.system.oauth.token 接口。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://docs.alipay.com/mini/api/ch8chh)

## 类型

```tsx
(Option: Option) => Promise<SuccessCallbackResult>
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| response | `string` | 返回一个 Object 类型的对象 res。使用 JSON.parse(res.response).response 解析 |
