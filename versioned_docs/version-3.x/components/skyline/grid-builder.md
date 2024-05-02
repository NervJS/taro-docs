---
title: GridBuilder
sidebar_label: GridBuilder
---

网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点，仅 Skyline 支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html)

## 类型

```tsx
ComponentType<GridBuilderProps>
```

## GridBuilderProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | "aligned" or "masonry" | `"aligned"<br /><br />可选值:<br />- aligned: 每行高度由同一行中最大高度子节点决定<br />- masonry: 瀑布流，根据子元素高度自动布局` | 是 | 布局方式 |
| list | `any[]` | `[]` | 是 | 需要用于渲染的列表 |
| childCount | `number` |  | 否 | 完整列表的长度，如果不传则取 list 的长度作为其值 |
| crossAxisCount | `number` | `2` | 否 | 交叉轴元素数量 |
| maxCrossAxisExtent | `number` | `0` | 否 | 交叉轴元素最大范围 |
| mainAxisGap | `number` | `0` | 否 | 主轴方向间隔 |
| crossAxisGap | `number` | `0` | 否 | 交叉轴方向间隔 |
| padding | `[number, number, number, number]` | `[0, 0, 0, 0]` | 否 | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距 |
| onItemBuild | `CommonEventFunction` |  | 否 | 列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号 |
| onItemDispose | `CommonEventFunction` |  | 否 | 列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| GridBuilderProps.type | ✔️ |  |  |  |
| GridBuilderProps.list | ✔️ |  |  |  |
| GridBuilderProps.childCount | ✔️ |  |  |  |
| GridBuilderProps.crossAxisCount | ✔️ |  |  |  |
| GridBuilderProps.maxCrossAxisExtent | ✔️ |  |  |  |
| GridBuilderProps.mainAxisGap | ✔️ |  |  |  |
| GridBuilderProps.crossAxisGap | ✔️ |  |  |  |
| GridBuilderProps.padding | ✔️ |  |  |  |
| GridBuilderProps.onItemBuild | ✔️ |  |  |  |
| GridBuilderProps.onItemDispose | ✔️ |  |  |  |
