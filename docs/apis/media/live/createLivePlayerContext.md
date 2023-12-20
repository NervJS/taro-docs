---
title: Taro.createLivePlayerContext(id, component)
sidebar_label: createLivePlayerContext
---

创建 [live-player](/docs/components/media/live-player) 上下文 [LivePlayerContext](/docs/apis/media/live/LivePlayerContext) 对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html)

## 类型

```tsx
(id: string, component?: TaroGeneral.IAnyObject) => LivePlayerContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | [live-player](/docs/components/media/live-player) 组件的 id |
| component | `TaroGeneral.IAnyObject` | 在自定义组件下，当前组件实例的this，以操作组件内 [live-player](/docs/components/media/live-player) 组件 |
