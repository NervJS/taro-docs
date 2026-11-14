---
title: Switch
sidebar_label: Switch
---

开关选择器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html)

## 类型

```tsx
ComponentType<SwitchProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }, { label: <VueIcon />, value: "Vue" }]}>
<TabItem value="React">

```tsx
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <Text>默认样式</Text>
        <Switch checked/>
        <Switch/>
        <Text>推荐展示样式</Text>
        <Switch checked/>
        <Switch/>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class='components-page'>
    <text>默认样式</text>
    <switch :checked="true" />
    <switch />
    <text>推荐展示样式</text>
    <switch :checked="true" />
    <switch />
  </view>
</template>
```
</TabItem>
</Tabs>

## SwitchProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| checked | `boolean` | `false` | 否 | 是否选中 |
| defaultChecked | `boolean` |  | 否 | 设置在 React 非受控状态下，当前是否选中 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| type | "switch" or "checkbox" | `"switch"` | 否 | 样式，有效值：switch, checkbox |
| color | `string` | `"#04BE02"` | 否 | switch 的颜色，同 css 的 color |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| name | `string` |  | 否 | 组件名字，用于表单提交获取数据。 |
| controlled | `string` | `false` | 否 | 是否为受控组件，为 true 时，checked 会完全受 setData 控制。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | checked 改变时触发 change 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SwitchProps.checked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.defaultChecked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| SwitchProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.type | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.color | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| SwitchProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  | ✔️ |
| SwitchProps.name |  |  | ✔️ |  |  |  |  |  |  |  |
| SwitchProps.controlled |  |  | ✔️ |  |  |  |  |  |  |  |
| SwitchProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |
| SwitchProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |

### onChangeEventDetail

| 参数 | 类型 |
| --- | --- |
| value | `boolean` |
