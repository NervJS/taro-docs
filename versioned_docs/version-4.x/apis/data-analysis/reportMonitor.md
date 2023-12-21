---
title: Taro.reportMonitor(name, value)
sidebar_label: reportMonitor
---

自定义业务数据监控上报接口。

**使用说明**
使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportMonitor.html)

## 类型

```tsx
(name: string, value: number) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 监控ID，在「小程序管理后台」新建数据指标后获得 |
| value | `number` | 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量 |

## 示例代码

```tsx
Taro.reportMonitor('1', 1)
```
