---
title: Taro.createCacheManager(option)
sidebar_label: createCacheManager
---

创建缓存管理器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/wx.createCacheManager.html)

## 类型

```tsx
(option: Option) => CacheManager
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Mode

| 参数 | 说明 |
| --- | --- |
| weakNetwork | 弱网/离线使用缓存返回 |
| always | 总是使用缓存返回 |
| none | 不开启，后续可手动开启/停止使用缓存返回 |

### Extra

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| apiList | `string[]` | 否 | 需要缓存的 wx api 接口，不传则表示支持缓存的接口全都做缓存处理。返回的如果是缓存数据，开发者可通过 fromCache 标记区分 |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| origin | `string` | 否 | 全局 origin |
| mode | `keyof Mode` | 否 | 缓存模式 |
| maxAge | `number` | 否 | 全局缓存有效时间，单位为毫秒，默认为 7 天，最长不超过 30 天 |
| extra | `Extra` | 否 | 额外的缓存处理 |
