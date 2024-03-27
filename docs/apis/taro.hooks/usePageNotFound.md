---
title: Taro.usePageNotFound(callback)
sidebar_label: usePageNotFound
---

小程序要打开的页面不存在时触发的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> H5: 多页面模式不支持该方法

## 类型

```tsx
(callback: (res: { [key: string]: any; path: string; query: Record<any, any>; isEntryPage: boolean; }) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(res: { [key: string]: any; path: string; query: Record<any, any>; isEntryPage: boolean; }) => void` |
