---
title: router
sidebar_label: router
---

## 类型

```tsx
router
```

## 参数

### CustomRouteBuilder

```tsx
(routeContext: CustomRouteContext,routeOptions: Record<string, any>) => CustomRouteConfig
```

| 参数 | 类型 |
| --- | --- |
| routeContext | `CustomRouteContext` |
| routeOptions | `Record<string, any>` |

### SharedValue

| 参数 | 类型 |
| --- | --- |
| value | `T` |

### CustomRouteContext

| 参数 | 类型 |
| --- | --- |
| primaryAnimation | `SharedValue<number>` |
| primaryAnimationStatus | `SharedValue<number>` |
| secondaryAnimation | `SharedValue<number>` |
| secondaryAnimationStatus | `SharedValue<number>` |
| userGestureInProgress | `SharedValue<number>` |
| startUserGesture | `() => void` |
| stopUserGesture | `() => void` |
| didPop | `() => void` |

### CustomRouteConfig

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| opaque | `boolean` | 否 |
| maintainState | `boolean` | 否 |
| transitionDuration | `number` | 否 |
| reverseTransitionDuration | `number` | 否 |
| barrierColor | `string` | 否 |
| barrierDismissible | `boolean` | 否 |
| barrierLabel | `string` | 否 |
| canTransitionTo | `boolean` | 否 |
| canTransitionFrom | `boolean` | 否 |
| handlePrimaryAnimation | `RouteAnimationHandler` | 否 |
| handleSecondaryAnimation | `RouteAnimationHandler` | 否 |
| handlePreviousPageAnimation | `RouteAnimationHandler` | 否 |
| allowEnterRouteSnapshotting | `boolean` | 否 |
| allowExitRouteSnapshotting | `boolean` | 否 |
| fullscreenDrag | `boolean` | 否 |
| popGestureDirection | "horizontal" or "vertical" or "multi" | 否 |

### RouteAnimationHandler

```tsx
() => { [key: string]: any; }
```

### router

自定义路由

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/wx.router.html)

#### addRouteBuilder

添加自定义路由配置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.addRouteBuilder.html)

```tsx
(routeType: string, routeBuilder: CustomRouteBuilder) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| routeType | `string` | 路由类型 |
| routeBuilder | `CustomRouteBuilder` | 路由动画定义函数 |

#### getRouteContext

获取页面对应的自定义路由上下文对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.getRouteContext.html)

```tsx
(instance: TaroGeneral.IAnyObject) => CustomRouteContext
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| instance | `TaroGeneral.IAnyObject` | 页面/自定义组件实例 |

#### removeRouteBuilder

移除自定义路由配置

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.removeRouteBuilder.html)

```tsx
(routeType: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| routeType | `string` | 路由类型 |
