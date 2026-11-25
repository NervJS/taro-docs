---
title: OpenEmbeddedAtomicservice
sidebar_label: OpenEmbeddedAtomicservice
---

OpenEmbeddedAtomicservice

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/components-open-embedded-atomicservice)

## 类型

```tsx
ComponentType<OpenEmbeddedAtomicserviceProps>
```

## OpenEmbeddedAtomicserviceProps

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| appid | `string` | 是 | 需要半屏跳转的元服务的AppId参数。 |
| path | `string` | 否 | 打开的页面路径。<br />路径后可以带参数，参数与路径之间用?分隔，参数与键值用=相连，多个参数用&分隔。<br />在元服务的App.onLaunch、App.onShow和Page.onLoad的回调函数中可以获得参数query。<br /> - path为空或无效值时，则打开首页。<br /> - path不为空，则之前的路径应为在app.json中定义的代码包路径。<br />例如，在app.json中定义了页面: "page/path/index"，则有效应用内页面路径为："page/path/index?key1=value1&key2=value2"。<br />注意： 该字段仅当目标元服务是ASCF框架开发的元服务时可直接使用，对于ArkTS开发的元服务，需双方自行约定实现，参数将通过目标元服务的Want对象的parameters字段进行传递。 |
| wantParam | `object` | 否 | 需要传递给目标元服务的数据。<br /> - 若被半屏打开的是ASCF框架开发的元服务，请通过ascfPara.extraData字段传入业务数据。例如：{ascfPara: {extraData: {data: "test"}}}<br /> - 若被半屏打开的是ArkTS开发的元服务，直接以平铺键值对形式传参，例如：{ data: "test" }。<br />注意： subPackageName为系统保留字段，请勿使用。 |
| onTerminated | `CommonEventFunction` | 否 | 退出的回调事件。<br />被半屏打开的元服务正常退出时触发，event.detail = { params }，其中params为元服务退出时返回的数据。<br /> - 若被半屏打开的是ArkTS开发的元服务，在目标元服务内通过调用terminateSelfWithResult或terminateSelf正常退出时，触发本回调函数。<br /> - 若被半屏打开的是ASCF框架开发的元服务，从1.0.18开始，在目标元服务内通过调用has.terminateSelf退出时，触发本回调函数。 |
| onError | `CommonEventFunction<onErrorEventDetail>` | 否 | 异常的回调事件。 |

### API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| OpenEmbeddedAtomicserviceProps.appid |  |  |  |  |
| OpenEmbeddedAtomicserviceProps.path |  |  |  |  |
| OpenEmbeddedAtomicserviceProps.wantParam |  |  |  |  |
| OpenEmbeddedAtomicserviceProps.onTerminated |  |  |  |  |
| OpenEmbeddedAtomicserviceProps.onError |  |  |  |  |

### onErrorEventDetail

| 参数 | 类型 |
| --- | --- |
| errMsg | `string` |
| errCode | `number` |
