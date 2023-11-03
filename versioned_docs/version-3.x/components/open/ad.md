---
title: Ad
sidebar_label: Ad
---

Banner 广告

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html)

## 类型

```tsx
ComponentType<AdProps>
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
      <Ad
        unitId=''
        adIntervals={60}
        onLoad={() => console.log('ad onLoad')}
        onError={() => console.log('ad onError')}
        onClose={() => console.log('ad onClose')}
      />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <ad
    unit-id=""
    ad-intervals="60"
    @load="onLoad"
    @error="onError"
    @close="onClose"
  />
</template>
```
</TabItem>
</Tabs>

## AdProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| unitId | `string` |  | 是 | 广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com/)的流量主模块新建 |
| adIntervals | `number` |  | 否 | 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新） |
| adType | "banner" or "video" or "grid" |  | 否 | 广告类型，默认为展示`banner`，可通过设置该属性为`video`展示视频广告, `grid`为格子广告 |
| adTheme | "white" or "black" |  | 否 | 广告主题样式设置 |
| appid | `string` |  | 否 | 小程序应用 ID |
| apid | `string` |  | 否 | 小程序广告位 ID |
| type | `string` | `feed` | 否 | 广告类型：banner、feed ，需和百青藤平台上的代码位类型相匹配 |
| updatetime | `string` |  | 否 | 更改该属性，可以触发广告刷新 |
| fixed | `string` |  | 否 | 广告是否在屏幕中固定展示 |
| scale | `string` | `100` | 否 | 广告的缩放比例，100 为标准尺寸 |
| adLeft | `string` |  | 否 | type 为 feeds 时广告左边距（px），必须大于 0 |
| adTop | `string` |  | 否 | type 为 feeds 时广告上边距（px），必须大于 0 |
| adWidth | `string` |  | 否 | type 为 feeds 时广告宽度（px），默认 100%，最大值为屏幕宽度，最小值为 265 |
| adHeight | `string` |  | 否 | type 为 feeds 时广告高度（px），最小 85，最大 160 |
| blockSize | `string` | `1` | 否 | type 为 block 时请求积木广告数量（展示以实际拉取广告数量为准） |
| blockOrientation | "vertical" or "landscape" | `landscape` | 否 | type 为 block 时请求积木广告排列方向 |
| testBannerType | "one" or "three" | `three` | 否 | 开发者工具下，type 为 banner 时，指定 banner 广告展示三图文还是单图 |
| onLoad | `CommonEventFunction` |  | 否 | 广告加载成功的回调 |
| onError | `CommonEventFunction<onErrorEventDetail>` |  | 否 | 当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因，事件对象 event.detail = {errCode: 1002} |
| onClose | `CommonEventFunction` |  | 否 | 广告关闭的回调 |
| onStatus | `CommonEventFunction` |  | 否 | 贴片类型广告播放期间触发 |
| onSize | `CommonEventFunction<onSizeEventDetail>` |  | 否 | type 为 feeds 时广告实际宽高回调 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| AdProps.unitId | ✔️ |  | ✔️ | ✔️ |  |  |  |
| AdProps.adIntervals | ✔️ |  | ✔️ |  |  |  |  |
| AdProps.adType | ✔️ |  |  |  |  |  |  |
| AdProps.adTheme | ✔️ |  |  |  |  |  |  |
| AdProps.appid |  | ✔️ |  |  |  |  |  |
| AdProps.apid |  | ✔️ |  |  |  |  |  |
| AdProps.type |  | ✔️(支持 banner、feed) | ✔️ | ✔️(支持 banner、card、feeds、block) |  |  |  |
| AdProps.updatetime |  | ✔️ |  |  |  |  |  |
| AdProps.fixed |  |  | ✔️ |  |  |  |  |
| AdProps.scale |  |  | ✔️ |  |  |  |  |
| AdProps.adLeft |  |  |  | ✔️ |  |  |  |
| AdProps.adTop |  |  |  | ✔️ |  |  |  |
| AdProps.adWidth |  |  |  | ✔️ |  |  |  |
| AdProps.adHeight |  |  |  | ✔️ |  |  |  |
| AdProps.blockSize |  |  |  | ✔️ |  |  |  |
| AdProps.blockOrientation |  |  |  | ✔️ |  |  |  |
| AdProps.testBannerType |  |  |  | ✔️ |  |  |  |
| AdProps.onLoad | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| AdProps.onError | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| AdProps.onClose | ✔️ | ✔️ | ✔️ |  |  |  |  |
| AdProps.onStatus |  | ✔️ |  |  |  |  |  |
| AdProps.onSize |  |  |  | ✔️ |  |  |  |

### onErrorEventDetail

| 参数 | 类型 |
| --- | --- |
| errCode | `keyof AdErrCode` |

### AdErrCode

广告错误码

错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。

| 参数 | 异常情况 | 理由 | 解决方案 |
| --- | :---: | :---: | :---: |
| 1000 | `后端错误调用失败` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1001 | `参数错误` | `使用方法错误` | `可以前往 developers.weixin.qq.com 确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。` |
| 1002 | `广告单元无效` | `可能是拼写错误、或者误用了其他APP的广告ID` | `请重新前往 mp.weixin.qq.com 确认广告位ID。` |
| 1003 | `内部错误` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1004 | `无合适的广告` | `广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告` | `属于正常情况，且开发者需要针对这种情况做形态上的兼容。` |
| 1005 | `广告组件审核中` | `你的广告正在被审核，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1006 | `广告组件被驳回` | `你的广告审核失败，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1007 | `广告组件被封禁` | `你的广告能力已经被封禁，封禁期间无法展现广告` | `请前往 mp.weixin.qq.com 确认小程序广告封禁状态。` |
| 1008 | `广告单元已关闭` | `该广告位的广告能力已经被关闭` | `请前往 mp.weixin.qq.com 重新打开对应广告位的展现。` |

### onSizeEventDetail

| 参数 | 类型 |
| --- | --- |
| width | `number` |
| height | `number` |
