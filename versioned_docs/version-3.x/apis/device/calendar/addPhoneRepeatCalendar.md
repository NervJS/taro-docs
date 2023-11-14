---
title: Taro.addPhoneRepeatCalendar(option)
sidebar_label: addPhoneRepeatCalendar
---

向系统日历添加重复事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneRepeatCalendar.html)

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
| title | `string` |  | 是 | 日历事件标题 |
| startTime | `number` |  | 是 | 开始时间的 unix 时间戳 (1970年1月1日开始所经过的秒数) |
| allDay | `boolean` | `false` | 否 | 是否全天事件 |
| description | `string` |  | 否 | 事件说明 |
| location | `string` |  | 否 | 事件位置 |
| endTime | `string` |  | 否 | 结束时间的 unix 时间戳，默认与开始时间相同 |
| alarm | `boolean` | `true` | 否 | 是否提醒 |
| alarmOffset | `number` | `0` | 否 | 提醒提前量，单位秒，默认 0 表示开始时提醒 |
| repeatInterval | `keyof RepeatInterval` | `"month"` | 否 | 重复周期，默认 month 每月重复 |
| repeatEndTime | `number` |  | 否 | 重复周期结束时间的 unix 时间戳，不填表示一直重复 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| success | `(result: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用成功的回调函数 |

### RepeatInterval

| 参数 | 说明 |
| --- | --- |
| day | 每天重复 |
| week | 每周重复 |
| month | 每月重复。该模式日期不能大于 28 日 |
| year | 每年重复 |
