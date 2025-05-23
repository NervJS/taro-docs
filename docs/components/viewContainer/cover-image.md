---
title: CoverImage
sidebar_label: CoverImage
---

覆盖在原生组件之上的图片视图。可覆盖的原生组件同cover-view，支持嵌套在cover-view里。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html)

## 类型

```tsx
ComponentType<CoverImageProps>
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

## CoverImageProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| src | `string` | 是 | 图标路径，支持临时路径、网络地址、云文件ID。暂不支持base64格式。 |
| referrerPolicy | "origin" or "no-referrer" | 否 | 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本； |
| fixedTop | `string` | 否 | 设置与容器顶部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 top 值，该属性优先级高于 fixed-bottom，CSS 设置的 position、top、bottom 值 |
| fixedRight | `string` | 否 | 设置与容器右侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 right 值，该属性优先级高于 CSS 设置的 position、left、right 值 |
| fixedBottom | `string` | 否 | 设置与容器底部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 bottom 值，该属性优先级高于 CSS 设置的 position、top、bottom 值 |
| fixedLeft | `string` | 否 | 设置与容器左侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 left 值，该属性优先级高于 fixed-right，CSS 设置的 position、left、right 值 |
| ariaRole | `string` | 否 | 无障碍访问，（角色）标识元素的作用 |
| ariaLabel | `string` | 否 | 无障碍访问，（属性）元素的额外描述 |
| onLoad | `CommonEventFunction` | 否 | 图片加载成功时触发 |
| onError | `CommonEventFunction` | 否 | 图片加载失败时触发 |
| onTap | `CommonEventFunction` | 否 | 点击事件回调。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CoverImageProps.src | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| CoverImageProps.referrerPolicy | ✔️ |  |  |  |  |  |  |  |  |
| CoverImageProps.fixedTop |  | ✔️ |  |  |  |  |  |  |  |
| CoverImageProps.fixedRight |  | ✔️ |  |  |  |  |  |  |  |
| CoverImageProps.fixedBottom |  | ✔️ |  |  |  |  |  |  |  |
| CoverImageProps.fixedLeft |  | ✔️ |  |  |  |  |  |  |  |
| CoverImageProps.ariaRole |  |  |  | ✔️ |  |  |  |  |  |
| CoverImageProps.ariaLabel |  |  |  | ✔️ |  |  |  |  |  |
| CoverImageProps.onLoad | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| CoverImageProps.onError | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |
| CoverImageProps.onTap |  |  | ✔️ |  |  |  |  |  |  |
