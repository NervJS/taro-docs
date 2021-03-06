---
title: Taro.startGyroscope(option)
sidebar_label: startGyroscope
---

开始监听陀螺仪数据。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html)

## 类型

```tsx
(option: Option) => Promise<CallbackResult>
```

## 参数

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
      <td>interval</td>
      <td><code>&quot;game&quot; | &quot;ui&quot; | &quot;normal&quot;</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>监听陀螺仪数据回调函数的执行频率</td>
    </tr>
    <tr>
      <td>success</td>
      <td><code>(res: CallbackResult) =&gt; void</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>接口调用成功的回调函数</td>
    </tr>
  </tbody>
</table>

### interval

监听陀螺仪数据回调函数的执行频率

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>game</td>
      <td>适用于更新游戏的回调频率，在 20ms/次 左右</td>
    </tr>
    <tr>
      <td>ui</td>
      <td>适用于更新 UI 的回调频率，在 60ms/次 左右</td>
    </tr>
    <tr>
      <td>normal</td>
      <td>普通的回调频率，在 200ms/次 左右</td>
    </tr>
  </tbody>
</table>

## API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| Taro.startGyroscope | ✔️ |  |  |
