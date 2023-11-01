---
title: Map
sidebar_label: Map
---

地图。相关api Taro.createMapContext。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/map.html#map)

## 类型

```tsx
ComponentType<MapProps>
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
  onTap () {}
  render () {
    return (
      <Map onClick={this.onTap} />
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <map
    id="map"
    style="width: 100%; height: 300px;"
    longitude="113.324520"
    latitude="23.099994"
    scale="14"
    :markers="markers"
    :polyline="polyline"
    :show-location="true"
    @regionchange="regionchange"
    @markertap="markertap"
  />
</template>

<script>
export default {
  data() {
    return {
      markers: [{
        iconPath: "https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color:"#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    }
  },
  methods: {
    regionchange(e) {
      console.log(e.type)
    },
    markertap(e) {
      console.log("markertap:", e.detail.markerId)
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## MapProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| longitude | `number` |  | 是 | 中心经度 |
| latitude | `number` |  | 是 | 中心纬度 |
| scale | `number` | `16` | 否 | 缩放级别，取值范围为 3-20 |
| minScale | `number` | `3` | 否 | 最小缩放级别 3-20 |
| maxScale | `number` | `20` | 否 | 最大缩放级别 3-20 |
| markers | `marker[]` |  | 否 | 标记点 |
| covers | `any[]` |  | 否 | **即将移除，请使用 markers**<br />**不推荐使用** |
| polyline | `polyline[]` |  | 否 | 路线 |
| circles | `circle[]` |  | 否 | 圆 |
| controls | `control[]` |  | 否 | 控件（即将废弃，建议使用 cover-view 代替）<br />**不推荐使用** |
| includePoints | `point[]` |  | 否 | 缩放视野以包含所有给定的坐标点 |
| showLocation | `boolean` | `false` | 否 | 显示带有方向的当前定位点 |
| polygons | `polygon[]` |  | 否 | 多边形 |
| subkey | `string` |  | 否 | 个性化地图使用的 key |
| layerStyle | `number` | `1` | 否 | 个性化地图配置的 style，不支持动态修改 |
| rotate | `number` | `0` | 否 | 旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角 |
| skew | `number` | `0` | 否 | 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角 |
| showCompass | `boolean` | `false` | 否 | 显示指南针 |
| showScale | `boolean` | `false` | 否 | 显示比例尺 |
| enableOverlooking | `boolean` | `false` | 否 | 开启俯视 |
| enableZoom | `boolean` | `true` | 否 | 是否支持缩放 |
| enableScroll | `boolean` | `true` | 否 | 是否支持拖动 |
| enableRotate | `boolean` | `false` | 否 | 是否支持旋转 |
| enableSatellite | `boolean` | `false` | 否 | 是否开启卫星图 |
| enableTraffic | `boolean` | `false` | 否 | 是否开启实时路况 |
| setting | MapProps or { [key: string]: any; } |  | 否 | 配置项<br /><br />提供 setting 对象统一设置地图配置。同时对于一些动画属性如 rotate 和 skew，通过 setData 分开设置时无法同时生效，需通过 settting 统一修改。 |
| includePadding | { left: string or number; right: string or number; top: string or number; bottom: string or number; } |  | 否 | 视野在地图 padding 范围内展示 |
| groundOverlays | `groundOverlays[]` |  | 否 | 覆盖物，自定义贴图 |
| tileOverlay | `tileOverlay` |  | 否 | 覆盖物，网格贴图 |
| enablePoi | `boolean` | `true` | 否 | 是否展示 POI 点 |
| enableBuilding | `boolean` | `true` | 否 | 是否展示建筑物 |
| polygon | `polygon[]` |  | 否 | 覆盖物，多边形。 |
| customMapStyle | `string` |  | 否 | 设置地图样式。<br /><br />default：默认样式<br />light：精简样式 |
| panels | `panels[]` |  | 否 | 基于 map 高级定制渲染，设置覆盖在地图上的 view。 |
| theme | `string` |  | 否 | 否 |
| optimize | `boolean` | `false` | 否 | 保持缩放比例不变 |
| enableAutoMaxOverlooking | `boolean` | `false` | 否 | 开启最大俯视角，俯视角度从 45 度拓展到 75 度 |
| enable3D | `boolean` | `false` | 否 | 展示3D楼块 |
| onTap | `CommonEventFunction` |  | 否 | 点击地图时触发 |
| onMarkerTap | `CommonEventFunction<onMarkerTapEventDetail>` |  | 否 | 点击标记点时触发，e.detail = {markerId} |
| onLabelTap | `CommonEventFunction<onLabelTapEventDetail>` |  | 否 | 点击label时触发，e.detail = {markerId} |
| onControlTap | `CommonEventFunction<onControlTapEventDetail>` |  | 否 | 点击控件时触发，e.detail = {controlId} |
| onCalloutTap | `CommonEventFunction<onCalloutTapEventDetail>` |  | 否 | 点击标记点对应的气泡时触发，e.detail = {markerId} |
| onUpdated | `CommonEventFunction` |  | 否 | 在地图渲染更新完成时触发 |
| onRegionChange | CommonEventFunction<onRegionEventDetail<"begin"> or onRegionEventDetail<"end">> |  | 否 | 视野发生变化时触发 |
| onPoiTap | `CommonEventFunction<onPoiTapEventDetail>` |  | 否 | 点击地图poi点时触发，e.detail = {name, longitude, latitude} |
| onPolylineTap | `CommonEventFunction<onPolylineTapEventDetail>` |  | 否 | 点击地图路线时触发，e.detail = {longitude, latitude} |
| onAbilitySuccess | `CommonEventFunction<onAbilityEventDetail>` |  | 否 | 地图能力生效时触发，e.detail = {ability, errCode, errMsg} |
| onAbilityFailed | `CommonEventFunction<onAbilityEventDetail>` |  | 否 | 地图能力失败时触发，e.detail = {ability, errCode, errMsg} |
| onAuthSuccess | `CommonEventFunction<{ errCode: number; errMsg: string; }>` |  | 否 | 地图鉴权结果成功时触发，e.detail = {errCode, errMsg} |
| onInterpolatePoint | `CommonEventFunction<onInterpolatePointEventDetail>` |  | 否 | MapContext.moveAlong 插值动画时触发。e.detail = {markerId, longitude, latitude, animationStatus: "interpolating" or "complete"} |
| onError | `CommonEventFunction<point>` |  | 是 | 组件错误时触发，例如创建或鉴权失败，e.detail = {longitude, latitude} |
| onCallOutTap | `CommonEventFunction<onCalloutTapEventDetail>` |  | 否 | 点击标记点对应的气泡时触发e.detail = {markerId} |
| onAnchorPointTap | `CommonEventFunction<point>` |  | 否 | 点击定位标时触发，e.detail = {longitude, latitude} |
| onPanelTap | `CommonEventFunction<{ panelId: any; layoutId: any; }>` |  | 否 | 点击 panel 时触发。 |
| onInitComplete | `CommonEventFunction` |  | 否 | 地图初始化完成即将开始渲染第一帧时触发。 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| MapProps.longitude | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.latitude | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.scale | ✔️ | ✔️(取值范围为4-21) | ✔️(取值范围为5-18) | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.minScale | ✔️ |  |  | ✔️ |  |  |  |  |  |
| MapProps.maxScale | ✔️ |  |  | ✔️ |  |  |  |  |  |
| MapProps.markers | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.covers | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.polyline | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.circles | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.controls | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |  |  |
| MapProps.includePoints | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.showLocation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.polygons | ✔️ | ✔️ |  | ✔️ | ✔️ |  |  |  |  |
| MapProps.subkey | ✔️ |  |  |  | ✔️ |  |  |  |  |
| MapProps.layerStyle | ✔️ |  |  |  | ✔️ |  |  |  |  |
| MapProps.rotate | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.skew | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.showCompass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.showScale | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.enableOverlooking | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.enableZoom | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.enableScroll | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.enableRotate | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.enableSatellite | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.enableTraffic | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| MapProps.setting | ✔️ |  | ✔️ |  | ✔️ |  |  |  |  |
| MapProps.includePadding |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.groundOverlays |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.tileOverlay |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.enablePoi | ✔️ |  | ✔️ | ✔️ |  |  |  |  |  |
| MapProps.enableBuilding | ✔️ |  | ✔️ | ✔️ |  |  |  |  |  |
| MapProps.polygon |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.customMapStyle |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.panels |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.theme |  |  |  |  |  | ✔️ |  |  |  |
| MapProps.optimize |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.enableAutoMaxOverlooking | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.enable3D | ✔️ | ✔️ |  | ✔️ | ✔️ |  |  |  |  |
| MapProps.onTap | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.onMarkerTap | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.onLabelTap | ✔️ |  |  | ✔️ |  |  |  |  |  |
| MapProps.onControlTap | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |  |  |
| MapProps.onCalloutTap |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.onUpdated | ✔️ | ✔️ |  | ✔️ | ✔️ |  |  |  |  |
| MapProps.onRegionChange | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| MapProps.onPoiTap | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |
| MapProps.onPolylineTap | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |
| MapProps.onAbilitySuccess | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.onAbilityFailed | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.onAuthSuccess | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.onInterpolatePoint | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.onError | ✔️ |  |  |  |  |  |  |  |  |
| MapProps.onCallOutTap | ✔️ | ✔️ |  | ✔️ |  | ✔️ |  |  |  |
| MapProps.onAnchorPointTap | ✔️ |  |  | ✔️ |  |  |  |  |  |
| MapProps.onPanelTap |  |  | ✔️ |  |  |  |  |  |  |
| MapProps.onInitComplete |  |  | ✔️ |  |  |  |  |  |  |

### marker

标记点用于在地图上显示标记的位置

| 参数 | 类型 | 必填 | 说明 | 备注 |
| --- | --- | :---: | --- | --- |
| id | `number` | 否 | 标记点id | `marker 点击事件回调会返回此id。建议为每个 marker 设置上 Number 类型 id，保证更新 marker 时有更好的性能。` |
| latitude | `number` | 是 | 纬度 | `浮点数，范围 -90 ~ 90` |
| longitude | `number` | 是 | 经度 | `浮点数，范围 -180 ~ 180` |
| title | `string` | 否 | 标注点名 | `点击时显示，callout 存在时将被忽略` |
| zIndex | `number` | 否 | 显示层级 |  |
| iconPath | `string` | 是 | 显示的图标 | `项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片` |
| rotate | `number` | 否 | 旋转角度 | `顺时针旋转的角度，范围 0 ~ 360，默认为 0` |
| alpha | `number` | 否 | 标注的透明度 | `默认1，无透明，范围 0 ~ 1` |
| width | string or number | 否 | 标注图标宽度 | `默认为图片实际宽度` |
| height | string or number | 否 | 标注图标高度 | `默认为图片实际高度` |
| callout | `callout` | 否 | 标记点上方的气泡窗口 | `支持的属性见下表，可识别换行符。` |
| customCallout | `customCallout` | 否 | 自定义气泡窗口 | `支持的属性见下表，可识别换行符。` |
| label | `label` | 否 | 为标记点旁边增加标签 | `支持的属性见下表` |
| anchor | `{ x: number; y: number; }` | 否 | 经纬度在标注图标的锚点，默认底边中点 | `{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点` |
| ariaLabel | `string` | 否 | 无障碍访问，（属性）元素的额外描述 |  |

### callout

marker 上的气泡 callout

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| content | `string` | 文本 |
| color | `string` | 文本颜色 |
| fontSize | `number` | 文字大小 |
| anchorX | `number` | 横向偏移量，向右为正数 |
| anchorY | `number` | 纵向偏移量，向下为正数 |
| borderRadius | `number` | 边框圆角 |
| borderWidth | `number` | 边框宽度 |
| borderColor | `string` | 边框颜色 |
| bgColor | `string` | 背景色 |
| padding | `number` | 文本边缘留白 |
| display | "BYCLICK" or "ALWAYS" | 'BYCLICK':点击显示; 'ALWAYS':常显 |
| textAlign | "left" or "right" or "center" | 文本对齐方式。有效值: left, right, center |

### customCallout

marker 上的自定义气泡 customCallout

`customCallout` 存在时将忽略 `callout` 与 `title` 属性。自定义气泡采用采用 `cover-view` 定制，灵活度更高。

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| display | `string` | 'BYCLICK':点击显示; 'ALWAYS':常显 |
| anchorX | `number` | 横向偏移量，向右为正数 |
| anchorY | `number` | 纵向偏移量，向下为正数 |

### label

marker 上的气泡 label

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| content | `string` | 文本 |
| color | `string` | 文本颜色 |
| fontSize | `number` | 文字大小 |
| anchorX | `number` | label的坐标，原点是 marker 对应的经纬度 |
| anchorY | `number` | label的坐标，原点是 marker 对应的经纬度 |
| borderWidth | `number` | 边框宽度 |
| borderColor | `string` | 边框颜色 |
| borderRadius | `number` | 边框圆角 |
| bgColor | `string` | 背景色 |
| padding | `number` | 文本边缘留白 |
| textAlign | "left" or "right" or "center" | 文本对齐方式。有效值: left, right, center |

### polyline

指定一系列坐标点，从数组第一项连线至最后一项

| 参数 | 类型 | 必填 | 说明 | 备注 |
| --- | --- | :---: | --- | --- |
| points | `point[]` | 是 | 经纬度数组 | `[{latitude: 0, longitude: 0}]` |
| color | `string` | 否 | 线的颜色 | `十六进制` |
| width | `number` | 否 | 线的宽度 |  |
| dottedLine | `boolean` | 否 | 是否虚线 | `默认 false` |
| arrowLine | `boolean` | 否 | 带箭头的线 | `默认 false，开发者工具暂不支持该属性` |
| arrowIconPath | `string` | 否 | 更换箭头图标 | `在 arrowLine 为 true 时生效` |
| borderColor | `string` | 否 | 线的边框颜色 |  |
| borderWidth | `number` | 否 | 线的厚度 |  |

### polygon

指定一系列坐标点，根据 points 坐标数据生成闭合多边形

| 参数 | 类型 | 默认值 | 必填 | 说明 | 备注 |
| --- | --- | :---: | :---: | --- | --- |
| dashArray | `number[]` | `[0,0]` | 否 | 边线虚线 | `默认值 [0, 0] 为实线，[10, 10]表示十个像素的实线和十个像素的空白（如此反复）组成的虚线` |
| points | `point[]` |  | 是 | 经纬度数组 | `[{latitude: 0, longitude: 0}]` |
| color | `string` |  | 否 | 线的颜色，用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA。 | `当前 Android 与 iOS 上此属性默认值存在差异（分别为 transparent 与 #ff0000ff ），建议在代码中统一显式设置。` |
| strokeWidth | `number` |  | 否 | 描边的宽度 |  |
| strokeColor | `string` |  | 否 | 描边的颜色 | `十六进制` |
| fillColor | `string` |  | 否 | 填充颜色 | `十六进制` |
| width | `number` |  | 否 | 线的宽度 | `当前 Android 与 iOS 上此属性默认值存在差异（分别为 0 与 5），建议在代码中统一显式设置。` |
| zIndex | `number` |  | 否 | 设置多边形Z轴数值 |  |
| level | `string` |  | 否 | 压盖关系 | `默认为 abovelabels` |
| displayRanges | `[{ from: number; to: number; }]` |  | 否 | 标明在特定地图缩放级别下展示。 | `[{ from: 12, to: 17}]` |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| polygon.dashArray | ✔️ |  |  |  |  |
| polygon.color |  | ✔️ |  |  |  |
| polygon.width |  | ✔️ |  |  |  |
| polygon.level | ✔️ |  |  |  |  |
| polygon.displayRanges |  | ✔️ |  |  |  |

### circle

在地图上显示圆

| 参数 | 类型 | 必填 | 说明 | 备注 |
| --- | --- | :---: | --- | --- |
| latitude | `number` | 是 | 纬度 | `浮点数，范围 -90 ~ 90` |
| longitude | `number` | 否 | 经度 | `浮点数，范围 -180 ~ 180` |
| color | `string` | 否 | 描边的颜色 | `十六进制` |
| fillColor | `string` | 否 | 填充颜色 | `十六进制` |
| radius | `number` | 是 | 半径 |  |
| strokeWidth | `number` | 否 | 描边的宽度 |  |

### control

在地图上显示控件，控件不随着地图移动。即将废弃，请使用 cover-view

| 参数 | 类型 | 必填 | 说明 | 备注 |
| --- | --- | :---: | --- | --- |
| id | `number` | 否 | 控件id | `在控件点击事件回调会返回此id` |
| position | `position` | 是 | 控件在地图的位置 | `控件相对地图位置` |
| iconPath | `string` | 是 | 显示的图标 | `项目目录下的图片路径，支持本地路径、代码包路径` |
| clickable | `boolean` | 否 | 是否可点击 | `默认不可点击` |

### point

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| longitude | `number` | 经度 |
| latitude | `number` | 纬度 |

### position

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| left | `number` | `0` | 距离地图的左边界多远 |
| top | `number` | `0` | 距离地图的上边界多远 |
| width | `number` | `图片宽度` | 控件宽度 |
| height | `number` | `图片宽度` | 控件高度 |

### groundOverlays

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 刷新的时候需要变更id值 |
| include-points | `[{ latitude: number; longitude: number; }, { latitude: number; longitude: number; }]` | 右上 左下 |
| image | `string` |  |
| alpha | `number` |  |
| zIndex | `number` |  |

### tileOverlay

| 参数 | 类型 |
| --- | --- |
| url | `string` |
| type | `number` |
| tileWidth | `number` |
| tileHeight | `number` |
| zIndex | `number` |

### panels

| 参数 | 类型 |
| --- | --- |
| id | `number` |
| layout | `{ src: string; }` |
| position | `position` |

### onMarkerTapEventDetail

| 参数 | 类型 |
| --- | --- |
| markerId | string or number |

### onLabelTapEventDetail

| 参数 | 类型 |
| --- | --- |
| markerId | string or number |

### onControlTapEventDetail

| 参数 | 类型 |
| --- | --- |
| controlId | string or number |

### onCalloutTapEventDetail

| 参数 | 类型 |
| --- | --- |
| markerId | string or number |

### RegionChangeDetail

#### type

#### CausedByBegin

| 参数 | 说明 |
| --- | --- |
| gesture | 手势触发 |
| update | 接口触发 |

#### CausedByEnd

| 参数 | 说明 |
| --- | --- |
| drag | 拖动导致 |
| scale | 缩放导致 |
| update | 调用更新接口导致 |

### onRegionEventDetail

| 参数 | 类型 | 说明 | 备注 |
| --- | --- | --- | --- |
| type | `T` | 视野变化开始、结束时触发 | `视野变化开始为begin，结束为end` |
| causedBy | `keyof (T extends "begin" ? CausedByBegin : CausedByEnd)` | 导致视野变化的原因 | `有效值为 gesture（手势触发）、update（接口触发或调用更新接口导致）、drag（拖动导致）、scale（缩放导致）` |
| detail | `regionChangeDetail<type>` | 视野改变详情 |  |

### regionChangeDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rotate | `number` | 旋转角度 |
| skew | `number` | 倾斜角度 |
| causedBy | `keyof (T extends "begin" ? CausedByBegin : CausedByEnd)` |  |
| type | string or T |  |
| scale | `number` |  |
| centerLocation | `point` |  |
| region | `{ northeast: point; southeast: point; }` |  |

### onPoiTapEventDetail

| 参数 | 类型 |
| --- | --- |
| name | `string` |
| longitude | `number` |
| latitude | `number` |

### onPolylineTapEventDetail

| 参数 | 类型 |
| --- | --- |
| polylineId | `number` |
| longitude | `number` |
| latitude | `number` |

### onAbilityEventDetail

| 参数 | 类型 |
| --- | --- |
| ability | `string` |
| errCode | `number` |
| errMsg | `string` |

### onInterpolatePointEventDetail

| 参数 | 类型 |
| --- | --- |
| markerId | `number` |
| longitude | `number` |
| latitude | `number` |
| animationStatus | "interpolating" or "complete" |
