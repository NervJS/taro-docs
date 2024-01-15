---
title: Taro.setOfficialDress(option)
sidebar_label: setOfficialDress
---

QQ美化平台内测阶段，仅被邀请的商户可使用此接口。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/personalize.html#qq-setofficialdress)

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
| action | `string` | 是 | 方法名，设置头像填"setAvatar"，其他方法后续开放 |
| uin | `string` | 是 | openid，给自己设置头像填"self" |
| item_id | `string` | 否 | 物品id |
| busi_info | `string` | 否 | 设置头像"setAvatar"此处不用填 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.setOfficialDress({
  action: "setAvatar",
  uin: "self",
  item_id: "2740",
  success(res) {
    console.log("success"+res);
  },
  fail(res) {
    console.log("fail"+res);
  }
})
```
