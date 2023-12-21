---
title: Radio
sidebar_label: Radio
---

单选项目

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/radio.html)

## 类型

```tsx
ComponentType<RadioProps>
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
export default class PageRadio extends Component {
  state = {
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }
  render () {
    return (
      <View className='container'>
        <Head title='Radio' />
        <View className='page-body'>
          <View className='page-section'>
            <Text>默认样式</Text>
            <Radio value='选中' checked>选中</Radio>
            <Radio style='margin-left: 20rpx' value='未选中'>未选中</Radio>
          </View>
          <View className='page-section'>
            <Text>推荐展示样式</Text>
            <View className='radio-list'>
              <RadioGroup>
                {this.state.list.map((item, i) => {
                  return (
                    <Label className='radio-list__label' for={i} key={i}>
                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                    </Label>
                  )
                })}
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <view class="page-section">
      <text>默认样式</text>
      <radio value="选中" :checked="true">选中</radio>
      <radio style="margin-left: 20rpx;" value="未选中">未选中</radio>
    </view>
    <view class="page-section">
      <text>推荐展示样式(Taro 团队成员):</text>
        <radio-group @change="onChange">
          <label v-for="item in list" class="checkbox-list__label">
            <radio class="checkbox-list__checkbox" :value="item.value" :checked="item.checked">{{ item.text }}</radio>
          </label>
        </radio-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          value: 'yuche',
          text: 'yuche',
          checked: false
        },
        {
          value: 'cjj',
          text: 'cjj',
          checked: false
        },
        {
          value: 'xiexiaoli',
          text: 'xiexiaoli',
          checked: false
        },
        {
          value: 'honly',
          text: 'honly',
          checked: false
        },
        {
          value: 'cs',
          text: 'cs',
          checked: false
        },
        {
          value: 'zhutianjian',
          text: 'zhutianjian',
          checked: false
        },
        {
          value: '隔壁老李',
          text: '隔壁老李',
          checked: true
        }
      ]
    }
  },
  methods: {
    onChange: function(e) {
      console.log(e.detail.value)
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## RadioProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| value | `string` |  | 否 | `<Radio/>` 标识。当该`<Radio/>` 选中时，`<RadioGroup/>`的 change 事件会携带`<Radio/>`的 value |
| checked | `boolean` | `false` | 否 | 当前是否选中 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| color | `string` | `"#09BB07"` | 否 | Radio 的颜色，同 css 的 color |
| name | `string` |  | 否 | Radio 的名字 |
| nativeProps | `Record<string, unknown>` |  | 否 | 用于透传 `WebComponents` 上的属性到内部 H5 标签上 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| onChange | `CommonEventFunction<{ value?: string; }>` |  | 否 | <radio-group/> 中的选中项发生变化时触发 change 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| RadioProps.value | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| RadioProps.checked | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| RadioProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| RadioProps.color | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| RadioProps.name |  |  |  |  |  |  | ✔️ |  | ✔️ |
| RadioProps.nativeProps |  |  |  |  |  |  | ✔️ |  |  |
| RadioProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |
| RadioProps.onChange |  |  |  |  |  |  | ✔️ | ✔️ |  |
