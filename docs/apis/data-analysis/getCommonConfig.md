---
title: Taro.getCommonConfig(option)
sidebar_label: getCommonConfig
---

给定实验参数数组，获取对应的实验参数值

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getCommonConfig.html)

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
| keys | `string[]` | 否 | 需要获取的数据指标的对象数组，每个string的格式约定：配置类型_分表key |
| mode | 0 or 1 | 是 | 0：通用配置模式 1：实验模式, 参数与返回结果的使用等效于接口wx.getExptInfoSync |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errcode | `number` | 错误码 |
| errmsg | `string` | 错误信息 |
| conf_type | `number` | 配置类型, 1-表类型 2-kv类型 |
| conf | `string` | 根据conf_type来确定conf内容, conf_type为1时conf是一个json数组, 类似"[{xxx},{xxx}]", 每一项对应表类型每一行配置内容, 其中conf_type为2时conf是一个json对象，类似"{xxxx}" |
| expire_sec | `number` | 过期时间,单位秒. 0表示当次有效 |

## 示例代码

```tsx
Taro.getCommonConfig({
  keys:["key1", "key2"],
  mode: 0,
  success: (res) => {
    console.log("success")
    console.log(res)
  },
  fail: (res) => {
    console.log("fail")
    console.log(res)
  }
})
```
