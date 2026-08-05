---
title: Taro.batchSetStorageSync(option)
sidebar_label: batchSetStorageSync
---

将数据批量存储在本地缓存中指定的 key 中。
会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。
单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html)

## 类型

```tsx
(option: { key: string; value: any; }[]) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `{ key: string; value: any; }[]` |

## 示例代码

```tsx
try {
  Taro.batchSetStorageSync([{key: 'key', value: 'value'}])
} catch (e) { }
```
