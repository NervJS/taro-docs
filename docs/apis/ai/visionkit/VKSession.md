---
title: VKSession
sidebar_label: VKSession
---

vision kit 会话对象

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| state | `keyof IState` | 会话状态 |
| config | `IConfig` | 会话配置 |
| cameraSize | `ISize` | 相机尺寸 |

### addMarker

添加一个 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.addMarker.html)

```tsx
(path: string) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 图片路径，目前只支持本地用户图片 |

### addOSDMarker

添加一个 OSD marker（one-shot detection marker），要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.addOSDMarker.html)

```tsx
(path: string) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 图片路径，目前只支持本地用户图片 |

### cancelAnimationFrame

取消由 requestAnimationFrame 添加到计划中的动画帧请求

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.cancelAnimationFrame.html)

```tsx
(requestID: number) => void
```

| 参数 | 类型 |
| --- | --- |
| requestID | `number` |

### destroy

销毁会话

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.destroy.html)

```tsx
() => void
```

### detectBody

静态图像人体关键点检测。当 Taro.createVKSession 参数传入 {track: {body: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectBody.html)

```tsx
(option: IDetectBodyOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectBodyOption` |

### detectDepth

深度识别。当 Taro.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectDepth.html)

```tsx
(option: IDetectDepthOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectDepthOption` |

### detectFace

静态图像人脸关键点检测。当 Taro.createVKSession 参数传入 {track: {face: {mode: 2} } } 时可用。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectFace.html)

```tsx
(option: IDetectFaceOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectFaceOption` |

### detectHand

静态图像手势关键点检测。当 Taro.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectHand.html)

```tsx
(option: IDetectHandOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IDetectHandOption` |

### getAllMarker

获取所有 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getAllMarker.html)

```tsx
() => IMarker[]
```

### getAllOSDMarker

获取所有 OSD marker，要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getAllOSDMarker.html)

```tsx
() => IOSDMarker[]
```

### getVKFrame

获取帧对象，每调用一次都会触发一次帧分析过程

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getVKFrame.html)

```tsx
(width: number, height: number) => VKFrame
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### hitTest

触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。

如果需要重新识别其他平面，可以在调用此方法时将 reset 参数置为 true。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.hitTest.html)

```tsx
(x: number, y: number, reset?: boolean) => IHitTestResult[]
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| x | `number` | 相对视窗的横坐标，取值范围为 [0, 1]，0 为左边缘，1 为右边缘 |
| y | `number` | 相对视窗的纵坐标，取值范围为 [0, 1]，0 为上边缘，1 为下边缘 |
| reset | `boolean` | 是否需要重新识别其他平面，v2 版本不再需要此参数 |

### off

取消监听会话事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.off.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

### on

监听会话事件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.on.html)

```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `TaroGeneral.EventCallback` | 事件监听函数 |

### removeMarker

删除一个 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.removeMarker.html)

```tsx
(markerId: number) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |

### removeOSDMarker

删除一个 OSD marker，要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.removeOSDMarker.html)

```tsx
(markerId: number) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |

### requestAnimationFrame

在下次进行重绘时执行。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.requestAnimationFrame.html)

```tsx
(callback: TaroGeneral.TFunc) => number
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `TaroGeneral.TFunc` | 执行函数 |

### runOCR

静态图像 OCR 检测。当 Taro.createVKSession 参数传入 {track: {OCR: {mode: 2} } } 时可用。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.runOCR.html)

```tsx
(option: IRunOCROption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `IRunOCROption` |

### start

开启会话。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.start.html)

```tsx
(callback: (status: keyof IStartStatus) => void) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(status: keyof IStartStatus) => void` | 开启会话回调 |

### stop

停止会话。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.stop.html)

```tsx
() => void
```

### update3DMode

开启 3D 模式

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.update3DMode.html)

```tsx
(open3d: boolean) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| open3d | `boolean` | 是否开启 |

### updateOSDThreshold

更新 OSD 识别精确度，要求调 Taro.createVKSession 时传入的 track.OSD 为 true

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.updateOSDThreshold.html)

```tsx
(threshold: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| threshold | `number` | 阈值 |

## 参数

### IState

state 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 不可用 |
| 1 | 运行中 |
| 2 | 暂停中 |
| 3 | 初始化中 |

### IConfig

会话配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| version | `keyof IVersion` | 不可用 |
| track | `ITrack` | 运行中 |
| marker | `boolean` | marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力 |
| OSD | `boolean` | OSD 跟踪配置 |
| depth | `IDepth` | 深度识别配置 |
| face | `IFace` | 人脸检测配置。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。 |
| OCR | `IOCR` | OCR 检测配置。 |
| body | `IBody` | 人体检测配置。 |
| hand | `IHand` | 手势检测配置。 |
| threeDof | `boolean` | 提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。 |
| gl | `WebGLRenderingContext` | 绑定的 WebGLRenderingContext 对象 |

### IVersion

vision kit 版本

| 参数 | 说明 |
| --- | --- |
| v1 | 旧版本 |
| v2 | v2 版本，目前只有 iOS 基础库 2.22.0 以上支持 |

### ITrack

跟踪配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| plane | `IPlane` | 平面跟踪配置 |

### IPlane

平面跟踪配置

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mode | `keyof IPlaneMode` | 平面跟踪配置模式 |

### IPlaneMode

平面跟踪配置模式合法值

| 参数 | 说明 |
| --- | --- |
| 1 | 检测横向平面 |
| 2 | 检测纵向平面，只有 v2 版本支持 |
| 3 | 检测横向和纵向平面，只有 v2 版本支持 |

### IDepth

深度识别配置

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IDepthMode` |

### IDepthMode

深度识别模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IFace

人脸检测模式

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IFaceMode` |

### IFaceMode

人脸检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IOCR

OCR 检测配置

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IOCRMode` |

### IOCRMode

OCR 检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IBody

人体检测模式

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IBodyMode` |

### IBodyMode

人体检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### IHand

手势检测配置

| 参数 | 类型 |
| --- | --- |
| mode | `keyof IHandMode` |

### IHandMode

手势检测模式

| 参数 | 说明 |
| --- | --- |
| 1 | 通过摄像头实时检测 |
| 2 | 静态图片检测 |

### ISize

相机尺寸

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 宽度 |
| height | `number` | 高度 |

### IDetectBodyOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| frameBuffer | `ArrayBuffer` | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 是 | 图像宽度 |
| height | `number` | 是 | 图像高度 |
| scoreThreshold | `number` | 否 | 评分阈值。正常情况传入 0.8 即可。默认值 0.8 |
| sourceType | `keyof ISourceType` | 否 | 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果。默认值1 |

### ISourceType

图像源类型。

| 参数 | 说明 |
| --- | --- |
| 1 | 表示输入的图片是随机的图片 |
| 0 | 表示输入的图片是来自一个连续视频的每一帧图像 |

### IDetectDepthOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer` | 人需要识别深度的图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 图像宽度 |
| height | `number` | 图像高度 |

### IDetectFaceOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| frameBuffer | `ArrayBuffer` | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 是 | 图像宽度 |
| height | `number` | 是 | 图像高度 |
| scoreThreshold | `number` | 否 | 评分阈值。正常情况传入 0.8 即可。默认值 0.8 |
| sourceType | `keyof ISourceType` | 否 | 图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果。默认值1 |
| modelModel | `keyof IModelModel` | 否 | 算法模型类型。正常情况传入 1 即可。0、1、2 分别表示小、中、大模型，模型越大识别准确率越高，但资源占用也越高。建议根据用户设备性能进行选择。 |

### IModelModel

算法模型类型

| 参数 | 说明 |
| --- | --- |
| 0 | 小模型 |
| 1 | 中模型 |
| 2 | 大模型 |

### IDetectHandOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| frameBuffer | `ArrayBuffer` | 是 | 人脸图像像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 是 | 图像宽度 |
| height | `number` | 是 | 图像高度 |
| scoreThreshold | `number` | 否 | 评分阈值。正常情况传入 0.8 即可。默认值0.8 |
| algoMode | `keyof IAlgoMode` | 否 | 算法检测模式 |

### IAlgoMode

算法检测模式

| 参数 | 说明 |
| --- | --- |
| 0 | 检测模式，输出框和点 |
| 1 | 手势模式，输出框和手势分类 |
| 2 | 结合0和1模式，输出框、点、手势分类 |

### IMarker

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |
| path | `string` | 图片路径 |

### IOSDMarker

OSD marker

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| markerId | `number` | marker id |
| path | `string` | 图片路径 |

### IRunOCROption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| frameBuffer | `ArrayBuffer` | 待识别图像的像素点数据，每四项表示一个像素点的 RGBA |
| width | `number` | 图像宽度 |
| height | `number` | 图像高度 |

### IHitTestResult

hitTest 检测结果

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| transform | `Float32Array` | 包含位置、旋转、放缩信息的矩阵，以列为主序 |

### IStartStatus

start status 的合法值

| 参数 | 说明 |
| --- | --- |
| 0 | 成功 |
| 2000000 | 系统错误 |
| 2000001 | 参数错误 |
| 2000002 | 设备不支持 |
| 2000003 | 系统不支持 |
| 2003000 | 会话不可用 |
| 2003001 | 未开启系统相机权限 |
| 2003002 | 未开启小程序相机权限 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| VKSession | ✔️ |  |  |  |
| VKSession.addMarker | ✔️ |  |  |  |
| VKSession.addOSDMarker | ✔️ |  |  |  |
| VKSession.cancelAnimationFrame | ✔️ |  |  |  |
| VKSession.destroy | ✔️ |  |  |  |
| VKSession.detectBody | ✔️ |  |  |  |
| VKSession.detectDepth | ✔️ |  |  |  |
| VKSession.detectFace | ✔️ |  |  |  |
| VKSession.detectHand | ✔️ |  |  |  |
| VKSession.getAllMarker | ✔️ |  |  |  |
| VKSession.getAllOSDMarker | ✔️ |  |  |  |
| VKSession.getVKFrame | ✔️ |  |  |  |
| VKSession.hitTest | ✔️ |  |  |  |
| VKSession.off | ✔️ |  |  |  |
| VKSession.on | ✔️ |  |  |  |
| VKSession.removeMarker | ✔️ |  |  |  |
| VKSession.removeOSDMarker | ✔️ |  |  |  |
| VKSession.requestAnimationFrame | ✔️ |  |  |  |
| VKSession.runOCR | ✔️ |  |  |  |
| VKSession.start | ✔️ |  |  |  |
| VKSession.stop | ✔️ |  |  |  |
| VKSession.update3DMode | ✔️ |  |  |  |
| VKSession.updateOSDThreshold | ✔️ |  |  |  |
