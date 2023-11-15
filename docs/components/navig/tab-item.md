---
title: TabItem
sidebar_label: TabItem
---

标签栏子项

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/tab-item/)

## 类型

```tsx
ComponentType<TabItemProps>
```

## TabItemProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| label | `string` | `无` | 否 | tab-item 内显示的文字 |
| name | `string` | `无` | 否 | tab-item 对应的 name 值 |
| badgeType | `string` | `无` | 否 | 徽标类型 badge-type 分为圆点“dot”和文本“text”，不设置 badge-type 则不显示徽标 |
| badgeText | `string` | `无` | 否 | badge-type 为 text 的时候，徽标内的数字，为空时badge-type="text"不生效 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| TabItemProps.label |  | ✔️ |  |  |  |
| TabItemProps.name |  | ✔️ |  |  |  |
| TabItemProps.badgeType |  | ✔️ |  |  |  |
| TabItemProps.badgeText |  | ✔️ |  |  |  |
