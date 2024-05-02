---
title: NestedScrollBody
sidebar_label: NestedScrollBody
---

嵌套 scroll-view 场景中属于里层 scroll-view 的节点，
仅支持作为 `<scroll-view type="nested">` 模式的直接子节点。
不支持复数子节点，渲染时会取其第一个子节点来渲染。具体用法可参考 scroll-view

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/nested-scroll-body.html)

## 类型

```tsx
ComponentType<NestedScrollBodyProps>
```

## NestedScrollBodyProps
