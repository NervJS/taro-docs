---
title: Taro.subscribeService(option)
sidebar_label: subscribeService
---

小程序消息订阅服务，包括取消订阅和查询订阅；订阅操作详见 [form 表单](https://smartprogram.baidu.com/docs/develop/component/formlist_form/)。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/api/open/swan-subscribeService/)

## 类型

```tsx
(option: subscribeService.Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `subscribeService.Option` |

## 示例代码

```tsx
Taro.subscribeService({
  templateId: 'BD0003',
  subscribeId: '8026',
  type: 'query',
  success(res) {
    Taro.showModal({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail(err) {
    Taro.showModal({
      title: 'fail',
      content: JSON.stringify(err)
    })
  }
})
```
