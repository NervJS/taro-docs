---
title: Taro.getClipboardData(res)
sidebar_label: getClipboardData
---

获取系统剪贴板内容

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html)

## 类型

```tsx
(res?: Option) => Promise<Promised>
```

## 参数

### Promised

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>errMsg</td>
      <td><code>string</code></td>
      <td>调用信息</td>
    </tr>
    <tr>
      <td>data</td>
      <td><code>string</code></td>
      <td>剪贴板的内容</td>
    </tr>
  </tbody>
</table>

### Option

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th style={{ textAlign: "center"}}>必填</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>complete</td>
      <td><code>(res: CallbackResult) =&gt; void</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>接口调用结束的回调函数（调用成功、失败都会执行）</td>
    </tr>
    <tr>
      <td>fail</td>
      <td><code>(res: CallbackResult) =&gt; void</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>接口调用失败的回调函数</td>
    </tr>
    <tr>
      <td>success</td>
      <td><code>(res: SuccessCallbackOption) =&gt; void</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>接口调用成功的回调函数</td>
    </tr>
  </tbody>
</table>

### SuccessCallbackOption

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>类型</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td><code>string</code></td>
      <td>剪贴板的内容</td>
    </tr>
  </tbody>
</table>

## 示例代码

```tsx
Taro.getClipboardData({
  success: function (res){
    console.log(res.data)
  }
})
```

## API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| Taro.getClipboardData | ✔️ | ✔️(部分实现) | ✔️ |
