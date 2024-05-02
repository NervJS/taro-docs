---
title: Swiper
sidebar_label: Swiper
---

滑块视图容器。其中只可放置 swiper-item 组件，否则会导致未定义的行为。
> 不要为 `SwiperItem` 设置 **style** 属性，可以通过 class 设置样式。[7147](https://github.com/NervJS/taro/issues/7147)

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)

## 类型

```tsx
ComponentType<SwiperProps>
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
  render () {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <swiper
    class='test-h'
    indicator-color='#999'
    indicator-active-color='#333'
    :vertical="true"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item>
      <view class='demo-text-1'>1</view>
    </swiper-item>
    <swiper-item>
      <view class='demo-text-2'>2</view>
    </swiper-item>
    <swiper-item>
      <view class='demo-text-3'>3</view>
    </swiper-item>
  </swiper>
</template>
```
</TabItem>
</Tabs>

## SwiperProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| indicatorDots | `boolean` | `false` | 否 | 是否显示面板指示点 |
| indicatorColor | `string` | `"rgba(0, 0, 0, .3)"` | 否 | 指示点颜色 |
| indicatorActiveColor | `string` | `"#000000"` | 否 | 当前选中的指示点颜色 |
| autoplay | `boolean` | `false` | 否 | 是否自动切换 |
| current | `number` | `0` | 否 | 当前所在滑块的 index |
| currentItemId | `string` | `""` | 否 | 当前所在滑块的 item-id ，不能与 current 被同时指定 |
| interval | `number` | `5000` | 否 | 自动切换时间间隔 |
| duration | `number` | `500` | 否 | 滑动动画时长 |
| circular | `boolean` | `false` | 否 | 是否采用衔接滑动 |
| vertical | `boolean` | `false` | 否 | 滑动方向是否为纵向 |
| previousMargin | `string` | `"0px"` | 否 | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 |
| nextMargin | `string` | `"0px"` | 否 | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 |
| snapToEdge | `boolean` | `false` | 否 | 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素 |
| displayMultipleItems | `number` | `1` | 否 | 同时显示的滑块数量 |
| skipHiddenItemLayout | `boolean` | `false` | 否 | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 |
| easingFunction | `keyof TEasingFunction` | `"default"` | 否 | 指定 swiper 切换缓动动画类型 |
| disableTouch | `boolean` | `false` | 否 | 是否禁止用户 touch 操作 |
| zoom | `boolean` | `false` | 否 | 是否启用缩放 |
| full | `boolean` | `false` | 否 | 是否开启全屏 |
| activeClass | `string` |  | 否 | swiper-item 可见时的 class。 |
| changingClass | `string` |  | 否 | acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的 class。 |
| acceleration | `string` | `false` | 否 | 当开启时，会根据滑动速度，连续滑动多屏。 |
| disableProgrammaticAnimation | `string` | `false` | 否 | 是否禁用代码变动触发 swiper 切换时使用动画。 |
| swipeRatio | `string` |  | 否 | 滑动距离阈值，当滑动距离超过阈值时进行 swiper-item 切换。 |
| swipeSpeed | `string` |  | 否 | 滑动综合速度阈值，当超过阈值时进行 swiper-item 切换，数值越小越敏感。 |
| touchAngle | `string` |  | 否 | 计算用户手势时所依赖的滑动角度。角度根据 touchstart 事件和首次 touchmove 事件的坐标计算得出。数值越小越对用户的滑动方向准确度要求越高。 |
| adjustHeight | "first" or "current" or "highest" or "none" |  | 否 | 自动以指定滑块的高度为整个容器的高度。当 vertical 为 true 时，默认不调整。可选值为： |
| adjustVerticalHeight | `string` |  | 否 | vertical 为 true 时强制使 adjust-height 生效。 |
| disableTouchmove | `string` | `false` | 否 | 是否停止响应用户 touchmove 操作 |
| scrollWithAnimation | `boolean` | `true` | 否 | 改变 current 时使用动画过渡 |
| cacheExtent | `number` | `0` | 否 | 缓存区域大小，值为 1 表示提前渲染上下各一屏区域（swiper 容器大小） |
| onChange | `CommonEventFunction<onChangeEventDetail>` |  | 否 | current 改变时会触发 change 事件 |
| onTransition | `CommonEventFunction<onTransitionEventDetail>` |  | 否 | swiper-item 的位置发生改变时会触发 transition 事件 |
| onAnimationFinish | `CommonEventFunction<onChangeEventDetail>` |  | 否 | 动画结束时会触发 animationfinish 事件 |
| onAnimationEnd | `CommonEventFunction<onCommonEventDetail>` |  | 否 | 动画结束时会触发 animationEnd 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SwiperProps.indicatorDots | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.indicatorColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.indicatorActiveColor | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.autoplay | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.current | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.currentItemId | (deprecated) | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  |  |
| SwiperProps.interval | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.duration | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |
| SwiperProps.circular | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.vertical | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.previousMargin | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |
| SwiperProps.nextMargin | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |
| SwiperProps.snapToEdge | ✔️ |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.displayMultipleItems | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |
| SwiperProps.skipHiddenItemLayout |  |  |  |  | ✔️ | ✔️ |  |  |  |
| SwiperProps.easingFunction | ✔️ |  | ✔️ | ✔️ |  | ✔️ |  |  |  |
| SwiperProps.disableTouch |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.zoom |  |  |  |  |  |  | ✔️ |  |  |
| SwiperProps.full |  |  |  |  |  |  | ✔️ |  |  |
| SwiperProps.activeClass |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.changingClass |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.acceleration |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.disableProgrammaticAnimation |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.swipeRatio |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.swipeSpeed |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.touchAngle |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.adjustHeight |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.adjustVerticalHeight |  |  | ✔️ |  |  |  |  |  |  |
| SwiperProps.disableTouchmove |  | ✔️ |  |  |  |  |  |  |  |
| SwiperProps.scrollWithAnimation | ✔️ |  |  |  |  |  |  |  |  |
| SwiperProps.cacheExtent | ✔️ |  |  |  |  |  |  |  |  |
| SwiperProps.onChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.onTransition | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| SwiperProps.onAnimationFinish | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |
| SwiperProps.onAnimationEnd |  |  | ✔️ |  |  |  |  |  |  |

### TChangeSource

导致变更的原因

| 参数 | 说明 |
| --- | --- |
| autoplay | 自动播放 |
| touch | 用户划动 |
|  | 其它原因 |

### TEasingFunction

指定 swiper 切换缓动动画类型

| 参数 | 说明 |
| --- | --- |
| default | 默认缓动函数 |
| linear | 线性动画 |
| easeInCubic | 缓入动画 |
| easeOutCubic | 缓出动画 |
| easeInOutCubic | 缓入缓出动画 |

### onCommonEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| current | `number` | 当前所在滑块的索引 |
| source | `keyof TChangeSource` | 导致变更的原因 |

### onChangeEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| current | `number` | 是 | 当前所在滑块的索引 |
| source | `keyof TChangeSource` | 是 | 导致变更的原因 |
| currentItemId | `string` | 否 | SwiperItem的itemId参数值 |

### onTransitionEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| dx | `number` | X 坐标 |
| dy | `number` | Y 坐标 |
