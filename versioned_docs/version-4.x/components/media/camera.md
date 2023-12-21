---
title: Camera
sidebar_label: Camera
---

系统相机

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)

## 类型

```tsx
ComponentType<CameraProps>
```

## CameraProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| mode | `keyof Mode` | `"normal"` | 否 | 模式，有效值为normal, scanCode |
| resolution | `keyof Resolution` | `"medium"` | 否 | 分辨率，不支持动态修改 |
| devicePosition | `keyof DevicePosition` | `"back"` | 否 | 摄像头朝向 |
| flash | `keyof Flash` | `"auto"` | 否 | 闪光灯 |
| frameSize | `keyof FrameSize` | `"medium"` | 否 | 指定期望的相机帧数据尺寸 |
| outputDimension | "360P" or "540P" or "720P" or "1080P" or "max" | `"720P"` | 否 | 相机拍照，录制的分辨率。 |
| onStop | `CommonEventFunction` |  | 否 | 摄像头在非正常终止时触发，<br />如退出后台等情况 |
| onError | `CommonEventFunction` |  | 否 | 用户不允许使用摄像头时触发 |
| onInitDone | `CommonEventFunction<onInitDoneEventDetail>` |  | 否 | 相机初始化完成时触发 |
| onReady | `CommonEventFunction<onInitDoneEventDetail>` |  | 否 | 相机初始化成功时触发。 |
| onScanCode | `CommonEventFunction<onScanCodeEventDetail>` |  | 否 | 在成功识别到一维码时触发，<br />仅在 mode="scanCode" 时生效 |

### API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 抖音小程序 | QQ 小程序 | 京东小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| CameraProps.mode | ✔️ |  | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| CameraProps.resolution | ✔️ |  |  | ✔️ |  |  |  |  |  |
| CameraProps.devicePosition | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| CameraProps.flash | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| CameraProps.frameSize | ✔️ |  | ✔️ | ✔️ |  |  |  |  |  |
| CameraProps.outputDimension |  |  | ✔️ |  |  |  |  |  |  |
| CameraProps.onStop | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| CameraProps.onError | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |  | ✔️ |  |
| CameraProps.onInitDone | ✔️ |  |  | ✔️ |  |  |  | ✔️ |  |
| CameraProps.onReady |  |  | ✔️ |  |  |  |  |  |  |
| CameraProps.onScanCode | ✔️ |  | ✔️ | ✔️ | ✔️ |  |  | ✔️ |  |

### Mode

mode 的合法值

| 参数 | 说明 |
| --- | --- |
| normal | 相机模式 |
| scanCode | 扫码模式 |

### Resolution

resolution 的合法值

| 参数 | 说明 |
| --- | --- |
| low | 低 |
| medium | 中 |
| high | 高 |

### DevicePosition

device-position 的合法值

| 参数 | 说明 |
| --- | --- |
| front | 前置 |
| back | 后置 |

### Flash

flash 的合法值

| 参数 | 说明 |
| --- | --- |
| auto | 自动 |
| on | 打开 |
| off | 关闭 |
| torch | 常亮 |

### FrameSize

frame-size 的合法值

| 参数 | 说明 |
| --- | --- |
| small | 小尺寸帧数据 |
| medium | 中尺寸帧数据 |
| large | 大尺寸帧数据 |

### onInitDoneEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| maxZoom | `number` | 最大变焦 |

### onScanCodeEventDetail

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| charSet | `string` | 字符集 |
| rawData | `string` | 原始数据 |
| type | `string` | 码类型 |
| result | `string` | 识别结果 |
| fullResult | `string` | 识别结果(完整) |

#### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| onScanCodeEventDetail.rawData | ✔️ |  |  |  |  |
| onScanCodeEventDetail.fullResult |  | ✔️ |  |  |  |
