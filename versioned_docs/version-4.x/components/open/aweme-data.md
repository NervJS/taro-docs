---
title: AwemeData
sidebar_label: AwemeData
---

直播间状态组件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/open-capacity/aweme-data/)

## 类型

```tsx
ComponentType<AwemeDataProps>
```

## AwemeDataProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| awemeId | `string` |  | 否 | 用户的抖音号，可以进入抖音 App 用户个人主页查看 |
| type | `string` | `"avatar"` | 否 | 类型，可以选择头像或昵称 |
| disableDefault | `boolean` | `false` | 否 | 禁用默认行为。点击头像时，如果用户处于直播状态下默认会跳转到直播间，非直播状态下跳转到个人主页。如果为 true，点击头像时不会有默认行为。 |
| defaultAvatar | `string` |  | 否 | 获取信息失败时显示的默认头像 url |
| defaultText | `string` |  | 否 | 获取信息失败时显示的默认昵称文本 |
| onError | `CommonEventFunction` |  | 否 | 当错误发生时触发 |

### API 支持度

| API | 微信小程序 | 抖音小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| AwemeDataProps.awemeId |  | ✔️ |  |  |  |
| AwemeDataProps.type |  | ✔️ |  |  |  |
| AwemeDataProps.disableDefault |  | ✔️ |  |  |  |
| AwemeDataProps.defaultAvatar |  | ✔️ |  |  |  |
| AwemeDataProps.defaultText |  | ✔️ |  |  |  |
| AwemeDataProps.onError |  | ✔️ |  |  |  |
