---
title: VKMarkerAnchor
sidebar_label: VKMarkerAnchor
---

marker anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKMarkerAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `1` | 类型 |
| transform | `Float32Array` | 包含位置、旋转、放缩信息的矩阵，以列为主序 |
| markerId | `number` | marker id |
| path | `string` | 图片路径 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 1 | marker |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| VKMarkerAnchor | ✔️ |  |  |  |
