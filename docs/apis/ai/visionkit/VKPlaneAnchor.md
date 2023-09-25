---
title: VKPlaneAnchor
sidebar_label: VKPlaneAnchor
---

平面 anchor，只有 v2 版本支持

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKPlaneAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `0` | 类型 |
| transform | `Float32Array` | 包含位置、旋转、放缩信息的矩阵，以列为主序 |
| size | `ISize` | 尺寸 |
| alignment | `number` | 方向 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 0 | 平面 |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| VKPlaneAnchor | ✔️ |  |  |  |
