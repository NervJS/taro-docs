---
title: Taro.batchGetStorageSync(keyList)
sidebar_label: batchGetStorageSync
---

从本地缓存中同步批量获取指定 key 的内容。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html)

## 类型

```tsx
<T = any>(keyList: string[]) => T[]
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| keyList | `T` | 本地缓存中指定的 key 数组 |

## 示例代码

```tsx
try {
  var valueList = Taro.batchGetStorageSync(['key'])
  if (valueList) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
```
