---
title: Taro.seekBackgroundAudio(option)
sidebar_label: seekBackgroundAudio
---

控制音乐播放进度。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html)

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
      <td>position</td>
      <td><code>number</code></td>
      <td style={{ textAlign: "center"}}>是</td>
      <td>音乐位置，单位：秒</td>
    </tr>
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
      <td><code>(res: CallbackResult) =&gt; void</code></td>
      <td style={{ textAlign: "center"}}>否</td>
      <td>接口调用成功的回调函数</td>
    </tr>
  </tbody>
</table>

## 示例代码

```tsx
Taro.seekBackgroundAudio({
  position: 30
})
```

## API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| Taro.seekBackgroundAudio | ✔️ |  |  |
