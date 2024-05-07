---
title: Taro.showActionSheet(option)
sidebar_label: showActionSheet
---

显示操作菜单

**注意**
- Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
- Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)

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
| alertText | `string` | 否 | 警示文案 |
| itemList | `string[]` | 是 | 按钮的文字数组，数组长度最大为 6 |
| complete | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| itemColor | `string` | 否 | 按钮的文字颜色 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tapIndex | `number` | 用户点击的按钮序号，从上到下的顺序，从0开始 |
| errMsg | `string` | 调用结果 |

## 示例代码

```tsx
Taro.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success: function (res) {
    console.log(res.tapIndex)
  },
  fail: function (res) {
    console.log(res.errMsg)
  }
})
```
