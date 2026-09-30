---
title: Taro.getRandomValues(option)
sidebar_label: getRandomValues
---

获取密码学安全随机数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 示例代码

```tsx
Taro.getRandomValues({
  length: 6 // 生成 6 个字节长度的随机数
}).then(res => {
  console.log(Taro.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
})
```
