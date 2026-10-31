---
title: Taro.getTabBar(page)
sidebar_label: getTabBar
---

获取自定义 TabBar 对应的 React 或 Vue 组件实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
<T>(page: any) => T
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| page | `T` | 小程序页面对象，可以通过 Taro.getCurrentInstance().page 获取<br />param: page 小程序页面对象，可以通过 Taro.getCurrentInstance().page 获取 |
