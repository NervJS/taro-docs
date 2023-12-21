---
title: Snapshot
sidebar_label: Snapshot
---

Snapshot 实例，可通过 SelectorQuery 获取。

Snapshot 通过 id 跟一个 snapshot 组件绑定，操作对应的 snapshot 组件。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/Snapshot.html)

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| width | `number` | 画布宽度 |
| height | `number` | 画布高度 |

### takeSnapshot

对 snapshot 组件子树进行截图

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/Snapshot.takeSnapshot.html)

```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

## 参数

### TakeSnapshot

#### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| type | `string` | 是 | 截图导出类型，'file' 保存到临时文件目录或 'arraybuffer' 返回图片二进制数据，默认值为 'file' |
| format | `string` | 是 | 截图文件格式，'rgba' 或 'png'，默认值为 'png' |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 截图保存的临时文件路径，当 type 为 file 该字段生效 |
| data | `string` | 截图对应的二进制数据，当 type 为 arraybuffer 该字段生效 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| Snapshot | ✔️ |  |  |  |
