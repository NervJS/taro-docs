---
title: VKHandAnchor
sidebar_label: VKHandAnchor
---

手势 anchor

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKHandAnchor.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 唯一标识 |
| type | `7` | 类型 |
| detectId | `number` | 识别序号 |
| size | `ISize` | 相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| origin | `IOrigin` | 相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘 |
| confidence | `number[]` | 关键点的置信度 |
| points | `IPoint[]` | 关键点 |
| score | `number` | 总体置信值 |
| gesture | keyof IGesture or -1 | 手势分类, 返回整数 -1 到 18, -1 表示无效手势 |

## 参数

### IType

类型

| 参数 | 说明 |
| --- | --- |
| 7 | 手势 |

### ISize

相对视窗的尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IOrigin

相对视窗的位置信息

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### IPoint

关键点

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 横坐标 |
| y | `number` | 纵坐标 |

### IGesture

手势分类

| 参数 | 说明 |
| --- | --- |
| 0 | 单手比心 |
| 1 | 布（数字5） |
| 2 | 剪刀（数字2） |
| 3 | 握拳 |
| 4 | 数字1 |
| 5 | 热爱 |
| 6 | 点赞 |
| 7 | 数字3 |
| 8 | 摇滚 |
| 9 | 数字6 |
| 10 | 数字8 |
| 11 | 双手抱拳（恭喜发财） |
| 12 | 数字4 |
| 13 | 比ok |
| 14 | 不喜欢（踩） |
| 15 | 双手比心 |
| 16 | 祈祷（双手合十） |
| 17 | 双手抱拳 |
| 18 | 无手势动作 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| VKHandAnchor | ✔️ |  |  |  |
