---
title: Taro.requestSubscribeMessage(option)
sidebar_label: requestSubscribeMessage
---

请求订阅消息

注意：[2.8.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)

## 类型

```tsx
(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tmplIds | `string[]` | 是 | 需要订阅的消息模板的id的集合（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置<br />API 支持度: weapp, tt |
| entityIds | `string[]` | 是 | 需要订阅的消息模板 id 集合（注意：1、一次性模板 id 和长期性模板 id 不可同时使用，2、一次最多传入三个模板 id<br />API 支持度: alipay |
| thirdTypeAppId | `string` | 否 | 模板小程序 appId，仅在服务商代调用场景下需要传入<br />API 支持度: alipay |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(result: FailCallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### FailCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errCode | `number` | 接口调用失败错误码 |
| errMsg | `string` | 接口调用失败错误信息 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| [TEMPLATE_ID] | "accept" or "reject" or "ban" | 是 | 动态的键，即模板id |
| behavior | `string` | 否 | 用户订阅操作结果。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or subscribe or 订阅成功 or<br />API 支持度: alipay |
| keep | `boolean` | 否 | 一次性订阅，是否勾选 总是保持以上选择，不再询问。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or true or 勾选 or<br />or false or 未勾选 or<br />API 支持度: alipay |
| refuse | `boolean` | 否 | 长期性订阅，是否点击 拒绝，不再询问。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or true or 点击 or<br />or false or 未点击 or<br />API 支持度: alipay |
| result | `ISubscribeResult` | 否 | 订阅数据<br />API 支持度: alipay |
| show | `boolean` | 否 | 本次订阅过程是否弹出了订阅面板。<br /><br />or 枚举值 or 描述 or<br />or --- or ---- or<br />or true or 弹出 or<br />or false or 未弹出 or<br />API 支持度: alipay |
| errMsg | `string` | 是 | 接口调用成功时errMsg值为'requestSubscribeMessage:ok' |

#### 示例代码

表示用户同意订阅 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE 这条消息

```json
{
  "errMsg": "requestSubscribeMessage:ok",
  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"
}
```

### ISubscribeResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| subscribeEntityIds | `string[]` | 订阅成功的模板列表 |
| subscribedEntityIds | `string[]` | 最终订阅成功的模板列表 |
| unsubscribedEntityIds | `string[]` | 未订阅的模板列表 |
| currentSubscribedEntityIds | `string[]` | 本次新增订阅成功的模板列表 |

### TemplateReflex

模版消息订阅类型

| 参数 | 说明 |
| --- | --- |
| accept | 表示用户同意订阅该条id对应的模板消息<br />API 支持度: weapp, alipay, tt |
| reject | 表示用户拒绝订阅该条id对应的模板消息<br />API 支持度: weapp, alipay, tt |
| ban | 表示已被后台封禁<br />API 支持度: weapp, tt |
| filter | 表示该模板因为模板标题同名被后台过滤<br />API 支持度: weapp |
| fail | 表示该条 id 对应的模版消息授权失败<br />API 支持度: tt |

## 示例代码

```tsx
Taro.requestSubscribeMessage({
  tmplIds: [''],
  success: function (res) { }
})
```
