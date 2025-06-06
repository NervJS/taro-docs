---
title: Taro.getImageInfo(option)
sidebar_label: getImageInfo
---

获取图片信息。网络图片需先配置download域名才能生效。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)

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
| src | `string` | 是 | 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| height | `number` |  | 图片原始高度，单位px。不考虑旋转。 |
| orientation | `keyof Orientation` | `"up"` | [拍照时设备方向](http://sylvana.net/jpegcrop/exif_orientation.html) |
| path | `string` |  | 图片的本地路径 |
| type | `string` |  | 图片格式 |
| width | `number` |  | 图片原始宽度，单位px。不考虑旋转。 |
| errMsg | `string` |  | 调用结果 |

### Orientation

| 参数 | 说明 |
| --- | --- |
| up | 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。 |
| up-mirrored | 同 up，但镜像翻转，对应 Exif 中的 2 |
| down | 旋转180度，对应 Exif 中的 3 |
| down-mirrored | 同 down，但镜像翻转，对应 Exif 中的 4 |
| left-mirrored | 同 left，但镜像翻转，对应 Exif 中的 5 |
| right | 顺时针旋转90度，对应 Exif 中的 6 |
| right-mirrored | 同 right，但镜像翻转，对应 Exif 中的 7 |
| left | 逆时针旋转90度，对应 Exif 中的 8 |

## 示例代码

```tsx
Taro.getImageInfo({
  src: 'images/a.jpg',
  success: function (res) {
    console.log(res.width)
    console.log(res.height)
  }
})
Taro.chooseImage({
  success: function (res) {
    Taro.getImageInfo({
      src: res.tempFilePaths[0],
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})
```
