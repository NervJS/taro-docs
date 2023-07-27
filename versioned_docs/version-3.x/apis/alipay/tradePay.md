---
title: Taro.tradePay(Option)
sidebar_label: tradePay
---

此接口是用于发起支付的 API，此 API 暂仅支持企业支付宝小程序使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/api/openapi-pay)

## 类型

```tsx
(Option: Option) => Promise<SuccessCallbackResult>
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tradeNO | `string` | 否 | 接入小程序支付时传入此参数。此参数为支付宝交易号，注意参数有大小写区分（调用 小程序支付 时必填） |
| orderStr | `string` | 否 | 完整的支付参数拼接成的字符串，从服务端获取（调用 支付宝预授权 时必填） |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### ResultCode

| 参数 | 说明 |
| --- | --- |
| 4 | 无权限调用（N22104） |
| 9000 | 订单处理成功 |
| 8000 | 正在处理中。支付结果未知（有可能已经支付成功） |
| 4000 | 订单处理失败 |
| 6001 | 用户中途取消 |
| 6002 | 网络连接出错 |
| 6004 | 处理结果未知（有可能已经成功） |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| response | `{ resultCode: ResultCode; }` | success 回调函数会携带一个 Object 类型的对象，其属性如下： |
