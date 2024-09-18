---
title: Button
sidebar_label: Button
---

按钮

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)

## 类型

```tsx
ComponentType<ButtonProps>
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
export default class PageButton extends Component {
  state = {
    btn: [
      {
        text: '页面主操作 Normal',
        size: 'default',
        type: 'primary'
      },
      {
        text: '页面主操作 Loading',
        size: 'default',
        type: 'primary',
        loading: true,
      },
      {
        text: '页面主操作 Disabled',
        size: 'default',
        type: 'primary',
        disabled: true,
      },
      {
        text: '页面次要操作 Normal',
        size: 'default',
        type: 'default'
      },
      {
        text: '页面次要操作 Disabled',
        size: 'default',
        type: 'default',
        disabled: true,
      },
      {
        text: '警告类操作 Normal',
        size: 'default',
        type: 'warn'
      },
      {
        text: '警告类操作 Disabled',
        size: 'default',
        type: 'warn',
        disabled: true,
      }
    ]
  }
  render () {
    return (
      <View className='container'>
        {this.state.btn.map(item => {
          return (
            <Button
              size={item.size ? item.size : ''}
              type={item.type ? item.type : ''}
              loading={item.loading ? item.loading : false}
              disabled={item.disabled ? item.disabled : false}
            >
              {item.text}
            </Button>
          )
        })}
        <Button className='btn-max-w' plain type='primary'>按钮</Button>
        <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
        <Button className='btn-max-w' plain >按钮</Button>
        <Button className='btn-max-w' plain disabled >按钮</Button>
        <Button size='mini' type='primary'>按钮</Button>
        <Button size='mini' >按钮</Button>
        <Button size='mini' type='warn'>按钮</Button>
        <Button openType='getPhoneNumber' onGetPhoneNumber="callback">按钮</Button>
      </View>
    )
  }
}
```
</TabItem>
<TabItem value="Vue">

```html
<template>
  <view class="container">
    <button
      v-for="item in btn"
      :size="item.size ? item.size : ''"
      :type="item.type ? item.type : ''"
      :loading="item.loading ? item.loading : false"
      :disabled="item.disabled ? item.disabled : false"
    >
      {{ item.text }}
    </button>
    <button class="btn-max-w" :plain="true" type="primary">按钮</button>
    <button class="btn-max-w" :plain="true" type="primary" :disabled="true">不可点击的按钮</button>
    <button class="btn-max-w" :plain="true">按钮</button>
    <button class="btn-max-w" :plain="true" :disabled="true">按钮</button>
    <button size="mini" type="primary">按钮</button>
    <button size="mini" >按钮</button>
    <button size="mini" type="warn">按钮</button>
    <button open-type="getPhoneNumber" @getphonenumber="callback">按钮</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      btn: [
        {
          text: '页面主操作 Normal',
          size: 'default',
          type: 'primary'
        },
        {
          text: '页面主操作 Loading',
          size: 'default',
          type: 'primary',
          loading: true,
        },
        {
          text: '页面主操作 Disabled',
          size: 'default',
          type: 'primary',
          disabled: true,
        },
        {
          text: '页面次要操作 Normal',
          size: 'default',
          type: 'default'
        },
        {
          text: '页面次要操作 Disabled',
          size: 'default',
          type: 'default',
          disabled: true,
        },
        {
          text: '警告类操作 Normal',
          size: 'default',
          type: 'warn'
        },
        {
          text: '警告类操作 Disabled',
          size: 'default',
          type: 'warn',
          disabled: true,
        }
      ]
    }
  }
}
</script>
```
</TabItem>
</Tabs>

## ButtonProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| size | `keyof Size` | `default` | 否 | 按钮的大小 |
| type | `keyof Type` | `default` | 否 | 按钮的样式类型 |
| plain | `boolean` | `false` | 否 | 按钮是否镂空，背景色透明 |
| disabled | `boolean` | `false` | 否 | 是否禁用 |
| loading | `boolean` | `false` | 否 | 名称前是否带 loading 图标 |
| formType | `keyof FormType` |  | 否 | 用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件 |
| openType | `OpenType` |  | 否 | 微信开放能力 |
| hoverClass | `string` | `button-hover` | 否 | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 |
| hoverStyle | `StyleProp<ViewStyle>` | `none` | 否 | 由于 RN 不支持 hoverClass，故 RN 端的 Button 组件实现了 `hoverStyle`属性，写法和 style 类似，只不过 `hoverStyle` 的样式是指定按下去的样式。 |
| hoverStopPropagation | `boolean` | `false` | 否 | 指定是否阻止本节点的祖先节点出现点击态 |
| hoverStartTime | `number` | `20` | 否 | 按住后多久出现点击态，单位毫秒 |
| hoverStayTime | `number` | `70` | 否 | 手指松开后点击态保留时间，单位毫秒 |
| lang | `keyof Lang` |  | 否 | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。<br /><br />生效时机: `open-type="getUserInfo"` |
| sessionFrom | `string` |  | 否 | 会话来源<br /><br />生效时机：`open-type="contact"` |
| sendMessageTitle | `string` | `当前标题` | 否 | 会话内消息卡片标题<br /><br />生效时机：`open-type="contact"` |
| sendMessagePath | `string` | `当前标题` | 否 | 会话内消息卡片点击跳转小程序路径<br /><br />生效时机：`open-type="contact"` |
| sendMessageImg | `string` | `截图` | 否 | 会话内消息卡片图片<br /><br />生效时机：`open-type="contact"` |
| appParameter | `string` |  | 否 | 打开 APP 时，向 APP 传递的参数<br /><br />生效时机：`open-type="launchApp"` |
| scope | "userInfo" or "phoneNumber" |  | 否 | 支付宝小程序 scope<br /><br />生效时机：`open-type="getAuthorize"` |
| showMessageCard | `boolean` | `false` | 否 | 显示会话内消息卡片<br /><br />生效时机：`open-type="contact"` |
| publicId | `string` |  | 否 | 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。 |
| templateId | string or string[] |  | 否 | 发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取<br />当参数类型为 Array 时，可传递 1~3 个模板库标题 ID |
| subscribeId | `string` |  | 否 | 发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景<br />注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-id |
| groupId | `string` |  | 否 | 群聊 id |
| guildId | `string` |  | 否 | 打开频道页面时，传递的频道号 |
| shareType | `string` | `27` | 否 | 分享类型集合，请参考下面share-type有效值说明。share-type后续将不再维护，请更新为share-mode |
| shareMode | `string` | `['qq', 'qzone']` | 否 | 分享类型集合，请参考下面share-mode有效值说明 |
| ariaLabel | `string` |  | 否 | 无障碍访问，（属性）元素的额外描述 |
| openId | `string` |  | 否 | 添加好友时，对方的 openid |
| shareMessageFriendInfo | `string` |  | 否 | 发送对象的 FriendInfo |
| shareMessageTitle | `string` |  | 否 | 转发标题，不传则默认使用当前小程序的昵称。 FriendInfo |
| shareMessageImg | `string` |  | 否 | 转发显示图片的链接，可以是网络图片路径（仅 QQ CDN 域名路径）或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4FriendInfo |
| dataAwemeId | `string` |  | 否 | 跳转抖音号个人页，只支持小程序绑定的品牌号、员工号、合作号 |
| dataIsHalfPage | `boolean` |  | 否 | 是否开启半屏模式 |
| onGetUserInfo | `CommonEventFunction<onGetUserInfoEventDetail>` |  | 否 | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与 Taro.getUserInfo 返回的一致<br /><br />生效时机: `open-type="getUserInfo"` |
| onGetAuthorize | `CommonEventFunction` |  | 否 | 支付宝获取会员基础信息授权回调<br /><br />生效时机：`open-type="getAuthorize"` |
| onContact | `CommonEventFunction<onContactEventDetail>` |  | 否 | 客服消息回调<br /><br />生效时机：`open-type="contact"` |
| onGetPhoneNumber | `CommonEventFunction<onGetPhoneNumberEventDetail>` |  | 否 | 获取用户手机号回调<br /><br />生效时机：`open-type="getPhoneNumber"` |
| onGetRealTimePhoneNumber | `CommonEventFunction<onGetRealTimePhoneNumberEventDetail>` |  | 否 | 手机号实时验证回调，`open-type="getRealtimePhoneNumber"` 时有效 |
| onError | `CommonEventFunction` |  | 否 | 当使用开放能力时，发生错误的回调<br /><br />生效时机：`open-type="launchApp"` |
| onOpenSetting | `CommonEventFunction<onOpenSettingEventDetail>` |  | 否 | 在打开授权设置页后回调<br /><br />生效时机：`open-type="openSetting"` |
| onLaunchApp | `CommonEventFunction` |  | 否 | 打开 APP 成功的回调<br /><br />生效时机：`open-type="launchApp"` |
| onChooseAvatar | `CommonEventFunction` |  | 否 | 获取用户头像回调<br /><br />生效时机：`open-type="chooseAvatar"` |
| onAgreePrivacyAuthorization | `CommonEventFunction` |  | 否 | 用户同意隐私协议事件回调，`open-type="agreePrivacyAuthorization"`时有效 |
| onTap | `CommonEventFunction` |  | 否 | 点击。<br />说明： 每点击一次会触发一次事件，建议自行使用代码防止重复点击,可以使用 js 防抖和节流实现。 |
| onFollowLifestyle | CommonEventFunction<{ followStatus: true or 1 or 2 or 3; }> |  | 否 | 当 open-type 为 lifestyle 时有效。<br />当点击按钮时触发。<br />event.detail = { followStatus }，followStatus 合法值有 1、2、3，其中 1 表示已关注。2 表示用户不允许关注。3 表示发生未知错误；<br />已知问题：基础库 1.0，当用户在点击按钮前已关注生活号，event.detail.followStatus 的值为 true。 |
| onChooseAddress | `CommonEventFunction` |  | 否 | 用户点击该按钮时，调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，从返回参数的 detail 中获取，和 swan.chooseAddress 一样的。和 open-type 搭配使用，使用时机：open-type="chooseAddress" |
| onChooseInvoiceTitle | `CommonEventFunction` |  | 否 | 用户点击该按钮时，选择用户的发票抬头，和 swan.chooseInvoiceTitle 一样的。和 open-type 搭配使用，使用时机：open-type="chooseInvoiceTitle" |
| onLogin | `CommonEventFunction` |  | 否 | 登录回调，和 open-type 搭配使用，使用时机：open-type="login"。可以通过返回参数的 detail 判断是否登录成功，当 errMsg 为'login:ok'时即为成功。如想获取登录凭证请使用 swan.getLoginCode |
| onSubscribe | `CommonEventFunction` |  | 否 | 订阅消息授权回调，和 open-type 搭配使用，使用时机：open-type="subscribe" |
| onAddFriend | `CommonEventFunction` |  | 否 | 添加好友的回调 |
| onAddGroupApp | `CommonEventFunction` |  | 否 | 添加群应用的回调。errCode 错误码：41004（当前用户非管理员或群主，无权操作），41005（超过可添加群应用的群数量） |
| onOpenAwemeUserProfile | `CommonEventFunction` |  | 否 | 监听跳转抖音号个人页的回调<br /><br />生效时机：`open-type="openAwemeUserProfile"` |
| onJoinGroup | `CommonEventFunction<{ errMsg: string; errNo: number; }>` |  | 否 | 加群后触发 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ButtonProps.size | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| ButtonProps.type | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.plain | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.disabled | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.loading | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| ButtonProps.formType | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |
| ButtonProps.openType | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.hoverClass | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️(支持 hoverStyle 属性，但框架未支持 hoverClass) |  | ✔️ |
| ButtonProps.hoverStyle |  |  |  |  |  |  |  | ✔️ |  |  |
| ButtonProps.hoverStopPropagation | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.hoverStartTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| ButtonProps.hoverStayTime | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| ButtonProps.lang | ✔️ |  |  |  | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.sessionFrom | ✔️ | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.sendMessageTitle | ✔️ | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.sendMessagePath | ✔️ | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.sendMessageImg | ✔️ | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.appParameter | ✔️ |  |  |  | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.scope |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.showMessageCard | ✔️ | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.publicId |  |  | ✔️ |  | ✔️ |  |  |  |  |  |
| ButtonProps.templateId |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.subscribeId |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.groupId |  |  |  | ✔️(通过创建聊天群、查询群信息获取) | ✔️(打开群资料卡时，传递的群号) |  |  |  |  |  |
| ButtonProps.guildId |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.shareType |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.shareMode |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.ariaLabel |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.openId |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.shareMessageFriendInfo |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.shareMessageTitle |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.shareMessageImg |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.dataAwemeId |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.dataIsHalfPage |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.onGetUserInfo | ✔️ | ✔️ | ✔️ |  | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.onGetAuthorize |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.onContact | ✔️ | ✔️ |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.onGetPhoneNumber | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |  |  |  |
| ButtonProps.onGetRealTimePhoneNumber | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onError | ✔️ |  | ✔️ |  | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.onOpenSetting | ✔️ | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  |  |  |
| ButtonProps.onLaunchApp | ✔️ |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.onChooseAvatar | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onAgreePrivacyAuthorization | ✔️ |  |  |  |  |  |  |  |  |  |
| ButtonProps.onTap |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.onFollowLifestyle |  |  | ✔️ |  |  |  |  |  |  |  |
| ButtonProps.onChooseAddress |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onChooseInvoiceTitle |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onLogin |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onSubscribe |  | ✔️ |  |  |  |  |  |  |  |  |
| ButtonProps.onAddFriend |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.onAddGroupApp |  |  |  |  | ✔️ |  |  |  |  |  |
| ButtonProps.onOpenAwemeUserProfile |  |  |  | ✔️ |  |  |  |  |  |  |
| ButtonProps.onJoinGroup |  |  |  | ✔️ |  |  |  |  |  |  |

### Size

size 的合法值

| 参数 | 说明 |
| --- | --- |
| default | 默认大小 |
| mini | 小尺寸 |

### Type

type 的合法值

| 参数 | 说明 |
| --- | --- |
| primary | 绿色 |
| default | 白色 |
| warn | 红色 |

### FormType

form-type 的合法值

| 参数 | 说明 |
| --- | --- |
| submit | 提交表单 |
| reset | 重置表单 |

### OpenType

open-type 的合法值

### openTypeKeys

open-type 的合法值

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| weapp | { contact: any; share: any; getPhoneNumber: any; getRealtimePhoneNumber: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; chooseAvatar: any; agreePrivacyAuthorization: any; "getPhoneNumberoragreePrivacyAuthorization": any; "getRealtimePhoneNumberoragreePrivacyAuthorization": any; "getUserInfoorag... |  |
| alipay | `{ share: any; getAuthorize: any; contactShare: any; lifestyle: any; }` | 支付宝小程序专属的 open-type 合法值<br />[参考地址](https://opendocs.alipay.com/mini/component/button) |
| qq | `{ share: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; openGroupProfile: any; addFriend: any; addColorSign: any; openPublicProfile: any; addGroupApp: any; shareMessageToFriend: any; }` | QQ 小程序专属的 open-type 合法值<br />[参考地址](https://q.qq.com/wiki/develop/miniprogram/component/form/button.html) |
| tt | `{ share: any; getPhoneNumber: any; im: any; platformIm: any; navigateToVideoView: any; openAwemeUserProfile: any; openWebcastRoom: any; addCalendarEvent: any; addShortcut: any; joinGroup: any; privateMessage: any; authorizePrivateMessage: any; }` | TT 小程序专属的 open-type 合法值<br />[参考地址](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/list/button/#open-type-%E7%9A%84%E5%90%88%E6%B3%95%E5%80%BC) |

### Lang

lang 的合法值

| 参数 | 说明 |
| --- | --- |
| en | 英文 |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |

### onGetUserInfoEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| userInfo | `{ nickName: string; avatarUrl: string; avatar: string; gender: keyof Gender; province: string; city: string; country: string; }` | 是 |  |
| rawData | `string` | 是 | 不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名 |
| signature | `string` | 是 | 使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息 |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据 |
| iv | `string` | 是 | 加密算法的初始向量 |
| errMsg | `string` | 是 |  |
| cloudID | `string` | 否 | 敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud) |

### Gender

性别的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 未知 |
| 1 | 男 |
| 2 | 女 |

### onContactEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` |  |
| path | `string` | 小程序消息指定的路径 |
| query | `Record<string, any>` | 小程序消息指定的查询参数 |

### onGetPhoneNumberEventDetail

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| errMsg | `string` | 是 |  |
| encryptedData | `string` | 是 | 包括敏感数据在内的完整用户信息的加密数据 |
| iv | `string` | 是 | 加密算法的初始向量 |
| code | `string` | 否 | 动态令牌。可通过动态令牌换取用户手机号。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95) |
| sign | `string` | 是 | 签名信息，如果在开放平台后台配置了加签方式后有此字段 |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| onGetPhoneNumberEventDetail.sign |  | ✔️ |  |  |  |

### onGetRealTimePhoneNumberEventDetail

| 参数 | 类型 |
| --- | --- |
| code | `string` |

### onOpenSettingEventDetail

| 参数 | 类型 |
| --- | --- |
| errMsg | `string` |
| authSetting | `Record<string, boolean>` |
