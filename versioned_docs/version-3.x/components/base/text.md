---
title: Text
sidebar_label: Text
---

文本

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)

## 类型

```tsx
ComponentType<TextProps>
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
  state = {
    contents: [],
    contentsLen: 0
  }

  add = () => {
    this.setState(prev => {
      const cot = prev.contents.slice()
      cot.push({ text: 'hello world' })
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }

  remove = () => {
    this.setState(prev => {
      const cot = prev.contents.slice()
      cot.pop()
      return {
        contents: cot,
        contentsLen: cot.length
      }
    })
  }

  render () {
    return (
      <View className='container'>
        {this.state.contents.map((item, index) => (
          <Text key={index}>{item.text}</Text>
        ))}
        <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>
        <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

``` html
<template>
  <view class="container">
    <view v-for="(item, index) in contents">
      <text>{{item.text}} line {{index + 1}}</text>
    </view>
    <button class="btn-max-w button_style" :plain="true" type="default" @tap="add">add line</button>
    <button class="btn-max-w button_style" :plain="true" type="default" :disabled="contentsLen ? false : true" @tap="remove">remove line</button>
</template>

<script>
export default {
  data() {
    return {
      contents: [],
      contentsLen: 0
    }
  },
  methods: {
    add () {
      const cot = this.contents.slice()
      cot.push({ text: 'hello world' })
      this.contents = cot
      this.contentsLen = cot.length
    },

    remove () {
      const cot = this.contents.slice()
      cot.pop()
      this.contents = cot
      this.contentsLen = cot.length
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## TextProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| selectable | `boolean` | `false` | 否 | 文本是否可选 |
| userSelect | `boolean` | `false` | 否 | 文本是否可选，该属性会使文本节点显示为 inline-block |
| space | `keyof TSpace` |  | 否 | 显示连续空格 |
| decode | `boolean` | `false` | 否 | 是否解码 |
| numberOfLines | `number` |  | 否 | 多行省略，值须大于等于 1，表现同 css 的 -webkit-line-clamp 属性一致。 |
| overflow | `keyof Overflow` | `'visible'` | 否 | 文本溢出处理 |
| maxLines | `number` |  | 否 | 限制文本最大行数 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| TextProps.selectable | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| TextProps.userSelect | ✔️ |  |  |  |  |  | ✔️ |  |  | ✔️ |
| TextProps.space | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| TextProps.decode | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | (默认解码，不支持设置) |  |  |  |
| TextProps.numberOfLines |  |  | ✔️ |  |  |  |  |  |  |  |
| TextProps.overflow |  |  |  |  |  |  |  |  |  |  |
| TextProps.maxLines | ✔️ |  |  |  |  |  |  |  |  |  |

### TSpace

space 的合法值

| 参数 | 说明 |
| --- | --- |
| ensp | 中文字符空格一半大小 |
| emsp | 中文字符空格大小 |
| nbsp | 根据字体设置的空格大小 |

### Overflow

| 参数 | 说明 |
| --- | --- |
| clip | 修剪文本 |
| fade | 淡出 |
| ellipsis | 显示省略号 |
| visible | 文本不截断 |
