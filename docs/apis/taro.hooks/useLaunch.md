---
title: Taro.useLaunch(callback)
sidebar_label: useLaunch
---

小程序初始化完成时的回调。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
(callback: (options: getLaunchOptionsSync.LaunchOptions) => void) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| callback | `(options: getLaunchOptionsSync.LaunchOptions) => void` |
