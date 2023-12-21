---
title: RtcRoomItem
sidebar_label: RtcRoomItem
---

实时音视频通话画面

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/component/media_rtc-room-item/)

## 类型

```tsx
ComponentType<RtcRoomItemProps>
```

## RtcRoomItemProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| id | `string` | 否 | rtc-room-item 组件的唯一标识符 |
| type | `string` | 否 | 指定 item 展示本地 / 远端画面，有效值：local、remote ，不可动态变更 |
| userId | `number` | 否 | item 展示画面的用户 id |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| RtcRoomItemProps.id |  | ✔️ |  |  |  |
| RtcRoomItemProps.type |  | ✔️ |  |  |  |
| RtcRoomItemProps.userId |  | ✔️ |  |  |  |
