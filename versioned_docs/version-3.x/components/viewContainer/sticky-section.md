---
title: StickySection
sidebar_label: StickySection
---

吸顶布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点。仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-section.html)

## 类型

```tsx
ComponentType<StickySectionProps>
```

## StickySectionProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| pushPinnedHeader | `boolean` | `true` | 否 | 吸顶元素重叠时是否继续上推 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| StickySectionProps.pushPinnedHeader | ✔️ |  |  |  |
