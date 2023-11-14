---
title: CoverView
sidebar_label: CoverView
---

覆盖在原生组件之上的文本视图。可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher 只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)

## 类型

```tsx
ComponentType<CoverViewProps>
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
// js
class App extends Components {
  render () {
    return (
      <View className='container'>
        <Video id='myVideo' src='src'>
          <CoverView className='controls'>
            <CoverView className='play' onClick='play'>
              <CoverImage className='img' src='src' />
            </CoverView>
          </CoverView>
        </Video>
      </View>
    )
  }
}
// css
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>
    </video>
    <cover-view class='controls'>
      <cover-view class='play' @tap='play'>
        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />
      </cover-view>
    </cover-view>
  </view>
</template>

<style>
.container {
  position: relative;
}
.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 225px;
  transform: translate(-50%, -50%);
}
</style>
```
</TabItem>
</Tabs>

## CoverViewProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| scrollTop | `number` |  | 否 | 设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效 |
| fixedTop | `string` |  | 否 | 设置与容器顶部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 top 值，该属性优先级高于 fixed-bottom，CSS 设置的 position、top、bottom 值 |
| fixedRight | `string` |  | 否 | 设置与容器右侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 right 值，该属性优先级高于 CSS 设置的 position、left、right 值 |
| fixedBottom | `string` |  | 否 | 设置与容器底部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 bottom 值，该属性优先级高于 CSS 设置的 position、top、bottom 值 |
| fixedLeft | `string` |  | 否 | 设置与容器左侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 left 值，该属性优先级高于 fixed-right，CSS 设置的 position、left、right 值 |
| ariaRole | `string` |  | 否 | 无障碍访问，（角色）标识元素的作用 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| scrollX | `boolean` | `false` | 否 | 允许横向滚动。 |
| scrollY | `boolean` | `false` | 否 | 允许纵向滚动。 |
| upperThreshold | `number` | `50` | 否 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件。 |
| lowerThreshold | `number` | `50` | 否 | 距底部/右边多远时（单位px），触发 scrolltolower 事件。 |
| scrollLeft | `number` |  | 否 | 设置横向滚动条位置。 |
| scrollIntoView | `string` |  | 否 | 滚动到子元素，值应为某子元素的 id。当滚动到该元素时，元素顶部对齐滚动区域顶部。<br />说明：scroll-into-view 的优先级高于 scroll-top。 |
| scrollWithAnimation | `boolean` | `false` | 否 | 在设置滚动条位置时使用动画过渡。 |
| scrollAnimationDuration | `number` |  | 否 | 当 scroll-with-animation设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位 ms。 |
| enableBackToTop | `boolean` | `false` | 否 | 当点击 iOS 顶部状态栏或者双击 Android 标题栏时，滚动条返回顶部，只支持竖向。 |
| trapScroll | `boolean` | `false` | 否 | 纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动。 |
| disableLowerScroll | `string` |  | 否 | 发生滚动前，对滚动方向进行判断，当方向是顶部/左边时，如果值为 always 将始终禁止滚动，如果值为 out-of-bounds 且当前已经滚动到顶部/左边，禁止滚动。 |
| disableUpperScroll | `string` |  | 否 | 发生滚动前，对滚动方向进行判断，当方向是底部/右边时，如果值为 always 将始终禁止滚动，如果值为 out-of-bounds 且当前已经滚动到底部/右边，禁止滚动。 |
| onScrollToUpper | `CommonEventFunction` |  | 否 | 滚动到顶部/左边，会触发 scrolltoupper 事件。 |
| onScrollToLower | `CommonEventFunction` |  | 否 | 滚动到底部/右边，会触发 scrolltolower事件。 |
| onScroll | `CommonEventFunction` |  | 否 | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}。 |
| onTouchStart | `CommonEventFunction` |  | 否 | 触摸动作开始。 |
| onTouchMove | `CommonEventFunction` |  | 否 | 触摸后移动。 |
| onTouchEnd | `CommonEventFunction` |  | 否 | 触摸动作结束。 |
| onTouchCancel | `CommonEventFunction` |  | 否 | 触摸动作被打断，如来电提醒、弹窗。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CoverViewProps.scrollTop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| CoverViewProps.fixedTop |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.fixedRight |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.fixedBottom |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.fixedLeft |  | ✔️ |  |  |  |  |  |  |
| CoverViewProps.ariaRole |  |  |  | ✔️ |  |  |  |  |
| CoverViewProps.ariaLabel |  |  |  | ✔️ |  |  |  |  |
| CoverViewProps.scrollX |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.scrollY |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.upperThreshold |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.lowerThreshold |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.scrollLeft |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.scrollIntoView |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.scrollWithAnimation |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.scrollAnimationDuration |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.enableBackToTop |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.trapScroll |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.disableLowerScroll |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.disableUpperScroll |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onScrollToUpper |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onScrollToLower |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onScroll |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onTouchStart |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onTouchMove |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onTouchEnd |  |  | ✔️ |  |  |  |  |  |
| CoverViewProps.onTouchCancel |  |  | ✔️ |  |  |  |  |  |
