---
title: Taro.requestCommonPayment(option)
sidebar_label: requestCommonPayment
---

> 最低 Taro 版本: 2.19.2

发起通用支付。目前仅支持 B2b 支付类型

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestCommonPayment.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| mode | `Mode` | 是 | 支付的类型 |
| signData | `string` | 是 | 具体支付参数。该参数需要序列化为字符串传递 |
| paySig | `string` | 是 | 支付签名，详见微信官方文档《签名详解》 |
| signature | `string` | 是 | 用户态签名，详见微信官方文档《签名详解》 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: FailCallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### Mode

支付类型：B2b 支付、间接支付、合单支付或多渠道 B2b 支付

```tsx
"retail_pay_goods" | "retail_pay_indirect_goods" | "retail_pay_combined_goods" | "retail_pay_goods_new"
```

### SuccessCallbackResult

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errno | `number` | 错误码 |

## 示例代码

```tsx
Taro.requestCommonPayment({
  mode: 'retail_pay_goods',
  signData: JSON.stringify({
    mchid: '1234567890',
    out_trade_no: 'test1244',
    description: '测试订单',
    amount: {
      order_amount: 1,
      currency: 'CNY'
    },
    env: 0
  }),
  paySig: '',
  signature: '',
  success (res) { },
  fail (res) { }
})
```
