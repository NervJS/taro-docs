---
title: OpenData
sidebar_label: OpenData
---

用于展示平台开放的数据

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)

## 类型

```tsx
ComponentType<OpenDataProps>
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
      <OpenData type='userAvatarUrl'/>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <open-data type="userAvatarUrl" />
</template>
```
</TabItem>
</Tabs>

## OpenDataProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| type | `keyof Type` |  | 是 | 开放数据类型 |
| openGid | `string` |  | 否 | 当 type="groupName" 时生效, 群id |
| lang | `keyof Lang` | `"en"` | 否 | 当 type="user*" 时生效，以哪种语言展示 userInfo |
| defaultText | `string` |  | 否 | 数据为空时的默认文案 |
| defaultAvatar | `string` |  | 否 | 用户头像为空时的默认图片，支持相对路径和网络图片路径 |
| useEmptyValue | `string` |  | 否 | 当数据为空且未设置默认值时，是否显示官方默认值 |
| shareTicket | `string` |  | 否 | 当 type=groupCloudStorage 时有效，群分享对应的 shareTicket |
| keyList | `string` |  | 否 | 当 type=*CloudStorage 时有效，指定要拉取的 key 列表 |
| componentData | `string` |  | 否 | 当 type=*CloudStorage 时有效，从主域透传给开放数据域的数据，会自动注入到自定义开放数据域组件的 properties 中 |
| onError | `CommonEventFunction` |  | 否 | 群名称或用户信息为空时触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| OpenDataProps.type | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |
| OpenDataProps.openGid | ✔️ |  |  |  |  |  |  |
| OpenDataProps.lang | ✔️ |  |  | ✔️ |  |  |  |
| OpenDataProps.defaultText | ✔️ |  | ✔️ |  |  |  |  |
| OpenDataProps.defaultAvatar | ✔️ |  | ✔️ |  |  |  |  |
| OpenDataProps.useEmptyValue |  |  | ✔️ |  |  |  |  |
| OpenDataProps.shareTicket |  |  |  | ✔️ |  |  |  |
| OpenDataProps.keyList |  |  |  | ✔️ |  |  |  |
| OpenDataProps.componentData |  |  |  | ✔️ |  |  |  |
| OpenDataProps.onError | ✔️ |  | ✔️ | ✔️ |  |  |  |

### Type

type 的合法值

| 参数 | 说明 |
| --- | --- |
| groupName | 拉取群名称 |
| userNickName | 用户昵称 |
| userAvatarUrl | 用户头像 |
| userGender | 用户性别 |
| userCity | 用户所在城市 |
| userProvince | 用户所在省份 |
| userCountry | 用户所在国家 |
| userLanguage | 用户的语言 |

### Lang

lang 的合法值

| 参数 | 说明 |
| --- | --- |
| en | 英文 |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |
