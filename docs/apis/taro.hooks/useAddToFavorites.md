---
title: Taro.useAddToFavorites(callback)
sidebar_label: useAddToFavorites
---

用户点击右上角菜单“收藏”按钮时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
(callback: (payload: AddToFavoritesObject) => AddToFavoritesReturnObject) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(payload: AddToFavoritesObject) => AddToFavoritesReturnObject` |
