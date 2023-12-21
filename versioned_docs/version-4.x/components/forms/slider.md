---
title: Slider
sidebar_label: Slider
---

滑动选择器

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html)

## 类型

```tsx
ComponentType<SliderProps>
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
        <Text>设置 step</Text>
        <Slider step={1} value={50}/>
        <Text>显示当前 value</Text>
        <Slider step={1} value={50} showValue/>
        <Text>设置最小/最大值</Text>
        <Slider step={1} value={100} showValue min={50} max={200}/>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="components-page">
    <text>设置 step</text>
    <slider step="1" value="50"/>
    <text>显示当前 value</text>
    <slider step="1" value="50" :show-value="true" />
    <text>设置最小/最大值</text>
    <slider step="1" value="100" :show-value="true" min="50" max="200"/>
  </view>
</template>
```
</TabItem>
</Tabs>

## SliderProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| min | `number` | `0` | 否 | 最小值 |
| max | `number` | `100` | 否 | 最大值 |
| step | `number` | `1` | 否 | 步长，取值必须大于 0，并且可被(max - min)整除 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| value | `number` | `0` | 否 | 当前取值 |
| color | `string` | `"#e9e9e9"` | 否 | 背景条的颜色（请使用 backgroundColor） |
| selectedColor | `string` | `"#1aad19"` | 否 | 已选择的颜色（请使用 activeColor） |
| activeColor | `string` | `"#1aad19"` | 否 | 已选择的颜色 |
| backgroundColor | `string` | `"#e9e9e9"` | 否 | 背景条的颜色 |
| blockSize | `number` | `28` | 否 | 滑块的大小，取值范围为 12 - 28 |
| blockColor | `string` | `"#ffffff"` | 否 | 滑块的颜色 |
| showValue | `boolean` | `false` | 否 | 是否显示当前 value |
| name | `string` |  | 否 | 组件名字，用于表单提交获取数据。 |
| trackSize | `string` | `4` | 否 | 轨道线条高度。 |
| handleSize | `string` | `22` | 否 | 滑块大小。 |
| handleColor | `string` |  | 否 | 滑块填充色，同 CSS 色值。 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 完成一次拖动后触发的事件 |
| onChanging | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 拖动过程中触发的事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SliderProps.min | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.max | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.step | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.color | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  |  |
| SliderProps.selectedColor | ✔️ |  |  | ✔️ | ✔️ | ✔️ |  |  |  |
| SliderProps.activeColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.backgroundColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.blockSize | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  |  |
| SliderProps.blockColor | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.showValue | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.name |  |  | ✔️ |  |  |  |  |  |  |
| SliderProps.trackSize |  |  | ✔️ |  |  |  |  |  |  |
| SliderProps.handleSize |  |  | ✔️ |  |  |  |  |  |  |
| SliderProps.handleColor |  |  | ✔️ |  |  |  |  |  |  |
| SliderProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |
| SliderProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SliderProps.onChanging | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |

### onChangeEventDetail
