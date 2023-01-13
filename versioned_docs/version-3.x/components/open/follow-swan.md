---
title: FollowSwan
sidebar_label: FollowSwan
---

关注小程序

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/follow-swan/)

## 类型

```tsx
ComponentType<FollowSwanProps>
```

## FollowSwanProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| size | `string` | `"default"` | 否 | 组件大小 |
| type | `string` | `"primary"` | 否 | 组件样式 |
| onFavorStatusChange | `CommonEventFunction` |  | 否 | 关注和取消关注成功的回调，返回关注状态 {isFavor: trueorfalse} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| FollowSwanProps.size |  | ✔️ |  |  |  |
| FollowSwanProps.type |  | ✔️ |  |  |  |
| FollowSwanProps.onFavorStatusChange |  | ✔️ |  |  |  |
