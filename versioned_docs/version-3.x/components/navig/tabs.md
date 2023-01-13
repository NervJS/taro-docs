---
title: Tabs
sidebar_label: Tabs
---

标签栏

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/tabs/)

## 类型

```tsx
ComponentType<TabsProps>
```

## TabsProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| tabsBackgroundColor | `string` | `"#fff"` | 否 | tabs 背景色,必须填写十六进制颜色 |
| tabsActiveTextColor | `string` | `"#000"` | 否 | tabs 激活 tab-item 文字颜色 |
| tabsInactiveTextColor | `string` | `"#666"` | 否 | tabs 非激活 tab-item 文字颜色 |
| tabsUnderlineColor | `string` | `"#333"` | 否 | tabs 激活 tab-item 下划线颜色 |
| activeName | `string` | `无` | 否 | 仅用于普通标签栏组件，当前激活 tab-item 的对应的 name 值，须搭配 bindtabchange 一起使用。 |
| urlQueryName | `string` | `无` | 否 | 仅用于可寻址标签栏组件，当前 tab 所改变的 url query 中参数 key，需要通过 tabs 修改页面 url 的时候设置。 |
| maxTabItemAmount | `number` | `5` | 否 | 当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者可根据业务需求调整 |
| onTabChange | `CommonEventFunction` |  | 否 | tab 被点击的回调，可以在 e.detail.name 中取到当前点击的 tab-item 对应的 name 值 |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| TabsProps.tabsBackgroundColor |  | ✔️ |  |  |  |
| TabsProps.tabsActiveTextColor |  | ✔️ |  |  |  |
| TabsProps.tabsInactiveTextColor |  | ✔️ |  |  |  |
| TabsProps.tabsUnderlineColor |  | ✔️ |  |  |  |
| TabsProps.activeName |  | ✔️ |  |  |  |
| TabsProps.urlQueryName |  | ✔️ |  |  |  |
| TabsProps.maxTabItemAmount |  | ✔️ |  |  |  |
| TabsProps.onTabChange |  | ✔️ |  |  |  |
