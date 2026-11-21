---
title: Taro.updateShareMenu(option)
sidebar_label: updateShareMenu
---

更新转发属性

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html)

## 类型

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| withShareTicket | `boolean` | `false` | 否 | 是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
| isUpdatableMessage | `boolean` | `false` | 否 | 是否是动态消息，详见[动态消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message.html) |
| activityId | `string` |  | 否 | 动态消息的 activityId。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api/share/errorupdatableMessage.createActivityId)) 接口获取 |
| toDoActivityId | `string` |  | 否 | 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api/share/errorupdatableMessage.createActivityId) 接口获取。详见[群待办消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html |
| templateInfo | `UpdatableMessageFrontEndTemplateInfo` |  | 否 | 动态消息的模板信息 |
| isPrivateMessage | `boolean` |  | 否 | 是否是私密消息。详见 [小程序私密消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/private-message.html) |
| participant | `string[]` | `[]` | 否 | 参与用户此聊天室下的 group_openid 列表 |
| useForChatTool | `boolean` | `false` | 否 | 聊天工具模式特殊动态消息 |
| chooseType | `number` | `1` | 否 | 指定成员的方式 |
| success | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### UpdatableMessageFrontEndTemplateInfo

动态消息的模板信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| parameterList | `UpdatableMessageFrontEndParameter[]` | 参数列表 |
| templateId | `string` | 模板ID |

### UpdatableMessageFrontEndParameter

参数列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 参数名 |
| value | `string` | 参数值 |

## 示例代码

```tsx
Taro.updateShareMenu({
  withShareTicket: true,
  success () { }
})
```
