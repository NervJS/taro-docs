---
title: DraggableSheetContext
sidebar_label: DraggableSheetContext
---

DraggableSheet 实例，可通过 Taro.createSelectorQuery 的 NodesRef.node 方法获取。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="ASCF元服务" src={require('@site/static/img/platform/ascf.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.html)

## 方法

### scrollTo

滚动到指定位置。size 取值 [0, 1]，size = 1 时表示撑满 draggable-sheet 组件。size 和 pixels 同时传入时，仅 size 生效。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.scrollTo.html)

```tsx
(option: Option) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 参数

### scrollTo

#### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| size | `number` |  | 否 | 相对目标位置 |
| pixels | `number` |  | 否 | 绝对目标位置 |
| animated | `boolean` | `true` | 否 | 是否启用滚动动画 |
| duration | `number` | `300` | 否 | 滚动动画时长（ms) |
| easingFunction | `string` | `ease` | 否 | 缓动函数 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony | ASCF元服务 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| DraggableSheetContext | ✔️ |  |  |  |  |
