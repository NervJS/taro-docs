---
title: Lifestyle
sidebar_label: Lifestyle
---

关注生活号

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/component/lifestyle)

## 类型

```tsx
ComponentType<LifestyleProps>
```

## LifestyleProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| publicId | `string` | 否 | 必填，生活号 ID（即生活号 APPID），必须是当前小程序同账号主体且已关联的生活号。 |
| memo | `string` | 否 | 文案。支持商家自定义，最多展示一行。 |
| onFollow | `CommonEventFunction` | 否 | 当用户关注生活号成功后执行。 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LifestyleProps.publicId |  | ✔️ |  |  |  |
| LifestyleProps.memo |  | ✔️ |  |  |  |
| LifestyleProps.onFollow |  | ✔️ |  |  |  |
