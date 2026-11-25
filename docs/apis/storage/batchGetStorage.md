---
title: Taro.batchGetStorage(option)
sidebar_label: batchGetStorage
---

从本地缓存中异步批量获取指定 key 的内容。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorage.html)

## 类型

```tsx
<T = any>(option: Option<T>) => Promise<SuccessCallbackResult<T>>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `T` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| keyList | `string[]` | 是 | 本地缓存中指定的 keyList |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: SuccessCallbackResult<T>) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| dataList | `T[]` | keyList 中各个 key 对应的内容，顺序与 keyList 一致 |

## 示例代码

```tsx
Taro.batchGetStorage({
  keyList: ['key'],
  success(res) {
    console.log(res.dataList)
  }
})
```
