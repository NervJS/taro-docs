---
title: Form
sidebar_label: Form
---

表单。将组件内的用户输入的 switch input checkbox slider radio picker 提交。

当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)

## 类型

```tsx
ComponentType<FormProps>
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
class App extends Component {

  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }

  render () {
    return (
      <Form onSubmit={this.formSubmit} onReset={this.formReset} >
        <View className='example-body'>
          <Switch name='switch' className='form-switch'></Switch>
        </View>
      </Form>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <form @submit="formSubmit" @reset="formReset" >
      <view class="taro-example-body">
        <switch name="switch" class="form-switch"></Switch>
      </view>
      <view class="taro-example-btns">
        <button form-type="submit">Submit</button>
        <button type="default" form-type="reset">Reset</button>
    </view>
  </form>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    formSubmit (e) {
      console.log(e)
    },

    formReset (e) {
      console.log(e)
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## FormProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| reportSubmit | `boolean` | `false` | 否 | 是否返回 `formId` 用于发送模板消息。 |
| reportSubmitTimeout | `number` | `0` | 否 | 等待一段时间（毫秒数）以确认 `formId` 是否生效。<br />如果未指定这个参数，`formId` 有很小的概率是无效的（如遇到网络失败的情况）。<br />指定这个参数将可以检测 `formId` 是否有效，<br />以这个参数的时间作为这项检测的超时时间。<br />如果失败，将返回 `requestFormId:fail` 开头的 `formId`。 |
| reportType | `string` | `'default'` | 否 | 模板消息的类型，report-submit 为 true 时填写有效<br />取值：default / subscribe |
| templateId | string or string[] |  | 否 | 发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取<br />当参数类型为 Array 时，可传递 1~3 个模板库标题 ID （注：此处填写模板库id。示例：BD0001） |
| subscribeId | `string` |  | 否 | 发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br />注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id |
| conversionTarget | `number` | `0` | 否 | 用于分发目的。取值：0 或 1，其中 0 表示默认，1 表示留资目标，需要和留资分发配置一起使用，详情见留资分发配置 |
| clueComponentId | `string` | `""` | 否 | 用于分发目的。开发者在【小程序开发者后台 -> 进入目标小程序 -> 运营 -> 流量配置 -> 抖音 -> 留资分发配置】复制创建的配置 ID，需要和留资分发配置一起使用，详情见留资分发配置 |
| onSubmit | `CommonEventFunction<onSubmitEventDetail>` |  | 否 | 携带 form 中的数据触发 submit 事件 |
| onReset | `CommonEventFunction` |  | 否 | 表单重置时会触发 reset 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| FormProps.reportSubmit | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |
| FormProps.reportSubmitTimeout | ✔️ |  |  |  |  |  |  |  |  |
| FormProps.reportType |  | ✔️ |  |  |  |  |  |  |  |
| FormProps.templateId |  | ✔️ |  |  |  |  |  |  |  |
| FormProps.subscribeId |  | ✔️ |  |  |  |  |  |  |  |
| FormProps.conversionTarget |  |  |  | ✔️ |  |  |  |  |  |
| FormProps.clueComponentId |  |  |  | ✔️ |  |  |  |  |  |
| FormProps.onSubmit | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| FormProps.onReset | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |

### onSubmitEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| value | `{ [formItemName: string]: any; }` | 否 | 当点击 `<form>` 表单中 `form-type` 为 `submit` 的 `<button>` 组件时，<br />会将表单组件中的 `value` 值进行提交，<br />需要在表单组件中加上 `name` 来作为 `key`。 |
| formId | `string` | 否 | 当 `reportSubmit` 为 `true` 时，返回 `formId` 用于发送模板消息。 |
