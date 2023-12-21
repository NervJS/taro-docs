---
title: Taro.onAppShow(callback)
sidebar_label: onAppShow
---

监听小程序切前台事件。该事件与 [`App.onShow`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object) 的回调参数一致。

**返回有效 referrerInfo 的场景**

| 场景值 | 场景                            | appId含义  |
| ------ | ------------------------------- | ---------- |
| 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
| 1035   | 公众号自定义菜单                | 来源公众号 |
| 1036   | App 分享消息卡片                | 来源App    |
| 1037   | 小程序打开小程序                | 来源小程序 |
| 1038   | 从另一个小程序返回              | 来源小程序 |
| 1043   | 公众号模板消息                  | 来源公众号 |

**注意**

部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html)

## 类型

```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: CallbackResult) => void` | 小程序切前台事件的回调函数 |

### CallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| path | `string` | 是 | 小程序切前台的路径 |
| query | `TaroGeneral.IAnyObject` | 是 | 小程序切前台的 query 参数 |
| shareTicket | `string` | 是 | shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
| scene | `number` | 是 | 小程序切前台的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) |
| referrerInfo | `ResultReferrerInfo` | 是 | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |
| forwardMaterials | `ForwardMaterial[]` | 否 | 打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数 |
| chatType | `keyof ChatType` | 否 | 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 |
| apiCategory | `keyof ApiCategory` | 否 | API 类别 |

### ResultReferrerInfo

来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| appId | `string` | 否 | 来源小程序、公众号或 App 的 appId |
| extraData | `TaroGeneral.IAnyObject` | 否 | 来源小程序传过来的数据，scene=1037或1038时支持 |

### ForwardMaterial

ChatType 类型合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `string` | 文件的mimetype类型 |
| name | `string` | 文件名 |
| path | `string` | 文件路径（如果是webview则是url） |
| size | `number` | 文件大小 |

### ChatType

ChatType 类型合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 微信联系人单聊 |
| 2 | 企业微信联系人单聊 |
| 3 | 普通微信群聊 |
| 4 | 企业微信互通群聊 |

### ApiCategory

API 类别合法值

| 参数 | 说明 |
| --- | --- |
| default | 默认类别 |
| nativeFunctionalized | 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序 |
| browseOnly | 仅浏览，朋友圈快照页等场景打开的小程序 |
| embedded | 内嵌，通过打开半屏小程序能力打开的小程序 |
