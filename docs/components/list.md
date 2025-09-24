---
title: List
sidebar_label: List
---

## 类型

```tsx
ComponentType<PropsWithChildren<ListProps>>
```

## ListProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| upperThresholdCount | `number` | `50` | 否 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件 |
| lowerThresholdCount | `number` | `50` | 否 | 距底部/右边多远时（单位px），触发 scrolltolower 事件 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony | Harmony hybrid |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ListProps.upperThresholdCount | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
| ListProps.lowerThresholdCount | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |
