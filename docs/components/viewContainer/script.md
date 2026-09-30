---
title: Script
sidebar_label: Script
---

script 类似微信小程序的 wxs 标签，支持引用各种小程序的 xs 文件
只能在 CompileMode 中使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
ComponentType<ScriptProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }]}>
<TabItem value="React">

```tsx
import { Component } from 'react'
import { View, Script } from '@tarojs/components'

export function Index () {
  return (
    <View compileMode>
      <Script src="./logic.wxs" module="logic"></Script>
      <Text>Hello, {logic.name}!</Text>
    </View>
  )
}
```
</TabItem>
</Tabs>

## ScriptProps

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| src | `string` | xs 文件的相对路径 |
| module | `string` | xs 模块名 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ScriptProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| ScriptProps.module | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
