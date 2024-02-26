---
title: Taro.applyAddToMyApps(option)
sidebar_label: applyAddToMyApps
---

申请用户将本小程序添加到下拉页面中“我的小程序”当中，手Q8.9.13及以上版本支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addToMyApps.html#qq-applyaddtomyapps)

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
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| confirm | `boolean` | true 代表用户选择了同意 |
| cancel | `boolean` | true 代表用户选择了不同意 |

## 示例代码

```tsx
Taro.applyAddToMyApps({
  success(res) {
    if (res.confirm) {
      // 用户同意添加
    }
    if (res.cancel) {
      // 用户不同意添加
    }
    // 原则上，confirm和cancel是互斥的
  }
})
```
