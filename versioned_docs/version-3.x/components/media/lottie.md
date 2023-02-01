---
title: Lottie
sidebar_label: Lottie
---

Lottie

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://opendocs.alipay.com/mini/component/lottie)

## 类型

```tsx
ComponentType<LottieProps>
```

## LottieProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| autoplay | `boolean` | `false` | 否 | 是否自动播放。 |
| path | `string` |  | 否 | Lottie 资源地址。包含近端（包内地址）和远端（网络）的 JSON 文件地址。<br />与 djangoId 二选一。 |
| speed | `number` | `1.0` | 否 | 播放速度。正数为正向播放，负数负向播放。 |
| repeatCount | `number` | `0` | 否 | 循环次数。<br /><br />如果是负数表示无限次。<br />如果是 0 表示不循环，播放一次。<br />如果是 1 表示循环一次，播放两次。 |
| autoReverse | `boolean` | `false` | 否 | 是否自动回播。 |
| assetsPath | `string` |  | 否 | 资源地址。"/" 表明是小程序根目录。 |
| placeholder | `string` |  | 否 | 兜底图或者降级图地址。<br /><br />1. 支持本地资源，案例：'/image/lottie/lottie2_default.png'。<br />支持 http 的 cdn 地址、近端地址。<br />小程序场景不支持 djangoId。 |
| md5 | `string` |  | 否 | 在线资源的 md5 校验。<br />djangoId=https://b.zip。<br />可以使用 b.zip 加密 获取 md5 值<br />md5="77c6c86fc89ba94cc0a9271b77ae77d2" |
| optimize | `boolean` | `false` | 否 | 降级。降级是指如遇低端设备，Lottie 会降级展示为 placeholder。<br />当 optimize 为 true ，并且传入了 placeholder 时，在低端设备上只会展示 placeholder，不展示 Lottie。<br />低端设备如下所示：<br /><br />iOS ：小于等于 iPhone6P<br />Android：内存容量小于 3G |
| onDataReady | `CommonEventFunction` |  | 否 | 当数据下载+视图创建完成时触发。 |
| onDataFailed | `CommonEventFunction` |  | 否 | 数据加载失败时触发。 |
| onAnimationStart | `CommonEventFunction` |  | 否 | 动画开始时触发。 |
| onAnimationEnd | `CommonEventFunction` |  | 否 | 动画结束时触发。 |
| onAnimationRepeat | `CommonEventFunction` |  | 否 | 动画一次重播结束。 |
| onAnimationCancel | `CommonEventFunction` |  | 否 | 动画取消。业务调用 Cancel 时回调。 |
| onDataLoadReady | `CommonEventFunction` |  | 否 | 参数化时，数据准备完成，等待业务传入参数化值。 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| LottieProps.autoplay |  | ✔️ |  |  |  |
| LottieProps.path |  | ✔️ |  |  |  |
| LottieProps.speed |  | ✔️ |  |  |  |
| LottieProps.repeatCount |  | ✔️ |  |  |  |
| LottieProps.autoReverse |  | ✔️ |  |  |  |
| LottieProps.assetsPath |  | ✔️ |  |  |  |
| LottieProps.placeholder |  | ✔️ |  |  |  |
| LottieProps.md5 |  | ✔️ |  |  |  |
| LottieProps.optimize |  | ✔️ |  |  |  |
| LottieProps.onDataReady |  | ✔️ |  |  |  |
| LottieProps.onDataFailed |  | ✔️ |  |  |  |
| LottieProps.onAnimationStart |  | ✔️ |  |  |  |
| LottieProps.onAnimationEnd |  | ✔️ |  |  |  |
| LottieProps.onAnimationRepeat |  | ✔️ |  |  |  |
| LottieProps.onAnimationCancel |  | ✔️ |  |  |  |
| LottieProps.onDataLoadReady |  | ✔️ |  |  |  |
