---
title: InferenceSession
sidebar_label: InferenceSession
---

## 方法

### destroy

销毁 InferenceSession 实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.destroy.html)

```tsx
() => void
```

### offError

取消监听模型加载失败事件. 传入指定回调函数则只取消指定回调，不传则取消所有回调

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.offError.html)

```tsx
(callback?: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### offLoad

取消监听模型加载完成事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.offLoad.html)

```tsx
(callback?: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### onError

监听模型加载失败事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.onError.html)

```tsx
(callback: OnErrorCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnErrorCallback` |

### onLoad

监听模型加载完成事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.onLoad.html)

```tsx
(callback: OnLoadCallback) => void
```

| 参数 | 类型 |
| --- | --- |
| callback | `OnLoadCallback` |

### run

运行推断
需要在 session.onLoad 回调后使用。接口参数为 Tensors 对象，返回 Promise。
一个 InferenceSession 被创建完成后可以重复多次调用 InferenceSession.run(), 直到调用 session.destroy() 进行销毁。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/InferenceSession.destroy.html)

```tsx
(option: Tensors) => Promise<Tensors>
```

| 参数 | 类型 |
| --- | --- |
| option | `Tensors` |

## 参数

### Type

### Tensor

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| shape | `number[]` | Tensor shape （Tensor 形状，例如 [1, 3, 224, 224] 即表示一个4唯Tensor，每个维度的长度分别为1, 3, 224, 224） |
| data | `ArrayBuffer` | Tensor 值，一段 ArrayBuffer |
| type | `keyof Type` | ArrayBuffer 值的类型，合法值有 uint8, int8, uint32, int32, float32 |

### Tensors

| 参数 | 类型 |
| --- | --- |
| __index | `__index` |

### OnErrorCallback

模型加载失败回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

### OnLoadCallback

模型加载完成回调函数

```tsx
(res: TaroGeneral.CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `TaroGeneral.CallbackResult` |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| InferenceSession.destroy | ✔️ |  |  |  |
| InferenceSession.offError | ✔️ |  |  |  |
| InferenceSession.offLoad | ✔️ |  |  |  |
| InferenceSession.onError | ✔️ |  |  |  |
| InferenceSession.onLoad | ✔️ |  |  |  |
| InferenceSession.run | ✔️ |  |  |  |
