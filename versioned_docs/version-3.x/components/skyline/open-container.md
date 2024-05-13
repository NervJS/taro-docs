---
title: OpenContainer
sidebar_label: OpenContainer
---

容器转场动画组件
点击 OpenContainer 组件，当使用 wx.navigateTo 跳转下一页面时，对其子节点和下一个页面进行过渡。
下个页面从 OpenContainer 所在位置大小渐显放大，同时 OpenContainer 内容渐隐，过渡效果包含背景色、圆角和阴影。
源页面 OpenContainer 为 closed 状态，转场动画后为 open 状态。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/open-container.html)

## 类型

```tsx
ComponentType<OpenContainerProps>
```

## OpenContainerProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| transitionType | "fade" or "fadeThrough" | `"fade"<br /><br />可选值:<br />- fade: 将传入元素淡入传出元素之上<br />- fadeThrough: 首先淡出传出元素，并在传出元素完全淡出后开始淡入传入元素` | 动画类型 |
| transitionDuration | `number` | `300` | 动画时长 |
| closedColor | `string` | `"white"` | 初始容器背景色 |
| closedElevation | `number` | `0` | 初始容器影深大小 |
| closeBorderRadius | `number` | `0` | 初始容器圆角大小 |
| middleColor | `string` | `""` | fadeThrough 模式下的过渡背景色 |
| openColor | `string` | `"white"` | 打开状态下容器背景色 |
| openElevation | `number` | `0` | 打开状态下容器影深大小 |
| openBorderRadius | `number` | `0` | 打开状态下容器圆角大小 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| OpenContainerProps.transitionType | ✔️ |  |  |  |
| OpenContainerProps.transitionDuration | ✔️ |  |  |  |
| OpenContainerProps.closedColor | ✔️ |  |  |  |
| OpenContainerProps.closedElevation | ✔️ |  |  |  |
| OpenContainerProps.closeBorderRadius | ✔️ |  |  |  |
| OpenContainerProps.middleColor | ✔️ |  |  |  |
| OpenContainerProps.openColor | ✔️ |  |  |  |
| OpenContainerProps.openElevation | ✔️ |  |  |  |
| OpenContainerProps.openBorderRadius | ✔️ |  |  |  |
