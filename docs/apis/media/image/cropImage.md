---
title: Taro.cropImage(option)
sidebar_label: cropImage
---

裁剪图片接口

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.cropImage.html)

## 类型

```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| src | `string` | 是 | 图片路径，图片的路径，支持本地路径、代码包路径 |
| cropScale | `keyof CropScale` | 是 | 裁剪比例 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 剪裁后图片的临时文件路径 (本地路径) |

### CropScale

| 参数 | 说明 |
| --- | --- |
| 1:1 | 宽高比为1比1 |
| 3:4 | 宽高比为3比4 |
| 4:3 | 宽高比为4比3 |
| 4:5 | 宽高比为4比5 |
| 5:4 | 宽高比为5比4 |
| 9:16 | 宽高比为9比16 |
| 16:9 | 宽高比为19比6 |

## 示例代码

```tsx
Taro.cropImage({
  src: '', // 图片路径
  cropScale: '1:1', // 裁剪比例
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    var tempFilePaths = res.tempFilePaths
  }
})
```
