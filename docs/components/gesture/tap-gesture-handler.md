---
title: TapGestureHandler
sidebar_label: TapGestureHandler
---

点击时触发手势
微信小程序下 skyline 的手势标签，只能在 CompileMode 中使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

## 类型

```tsx
ComponentType<TapGestureHandlerProps>
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
import { View, TapGestureHandler } from '@tarojs/components'

export function Index () {
  return (
    <View compileMode>
      <TapGestureHandler onGestureWorklet="onGesture">
         <View className='circle'></View>
      </TapGestureHandler>
    </View>
  )
}
```
</TabItem>
</Tabs>

## TapGestureHandlerProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| tag | `string` | 否 | 声明手势协商时的组件标识 |
| onGestureWorklet | `string` | 否 | 手势识别成功的回调 |
| shouldResponseOnMoveWorklet | `string` | 否 | 手指移动过程中手势是否响应 |
| shouldAcceptGestureWorklet | `string` | 否 | 手势是否应该被识别 |
| simultaneousHandlers | `string[]` | 否 | 声明可同时触发的手势节点 |
| nativeView | `string` | 否 | 代理的原生节点类型 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| TapGestureHandlerProps.tag | ✔️ |  |  |  |
| TapGestureHandlerProps.onGestureWorklet | ✔️ |  |  |  |
| TapGestureHandlerProps.shouldResponseOnMoveWorklet | ✔️ |  |  |  |
| TapGestureHandlerProps.shouldAcceptGestureWorklet | ✔️ |  |  |  |
| TapGestureHandlerProps.simultaneousHandlers | ✔️ |  |  |  |
| TapGestureHandlerProps.nativeView | ✔️ |  |  |  |
