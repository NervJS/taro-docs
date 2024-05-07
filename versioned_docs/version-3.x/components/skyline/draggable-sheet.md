---
title: DraggableSheet
sidebar_label: DraggableSheet
---

半屏可拖拽组件
该组件需配合 DraggableSheetContext 接口使用。 目前仅在 Skyline 渲染引擎下支持。
页面内拖拽是一种常见的交互效果，开发者可通过手势系统灵活实现。draggable-sheet 组件封装了常见的交互逻辑，实现起来更加简单。
该组件需结合 scroll-view 使用。scroll-view 组件声明 associative-container 属性后，可与 draggable-sheet 关联起来。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html)

## 类型

```tsx
ComponentType<DraggableSheetProps>
```

## DraggableSheetProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| initialChildSize | `number` | `0.5` | 否 | 初始时占父容器的比例 |
| minChildSize | `number` | `0.25` | 否 | 最小时占父容器的比例 |
| maxChildSize | `number` | `1.0` | 否 | 最大时占父容器的比例 |
| snap | `boolean` | `false` | 否 | 拖拽后是否自动对齐关键点 |
| snapSizes | `any[]` | `[]` | 否 | 拖拽后对齐的关键点，无需包含最小和最大值 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| DraggableSheetProps.initialChildSize | ✔️ |  |  |  |
| DraggableSheetProps.minChildSize | ✔️ |  |  |  |
| DraggableSheetProps.maxChildSize | ✔️ |  |  |  |
| DraggableSheetProps.snap | ✔️ |  |  |  |
| DraggableSheetProps.snapSizes | ✔️ |  |  |  |
