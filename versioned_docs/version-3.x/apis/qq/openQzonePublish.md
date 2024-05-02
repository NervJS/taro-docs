---
title: Taro.openQzonePublish(option)
sidebar_label: openQzonePublish
---

此接口可打开手Q说说发表界面，并将文字内容和图片/视频内容传递到手Q说说发表界面。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_openQzonePublish.html)

## 类型

```tsx
(option: Option) => void
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `Option` |

### Option

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| text | `string` | 传递的文字内容 |
| media | `Media[]` | 传递的视频/图片内容，显示顺序为元素下标顺序 |
| path | `string` | 说说小尾巴跳转到的页面路径，不填则默认跳到主页 |
| footnote | `string` | 说说小尾巴显示的文案，不填则默认显示小程序的简介文案 |

### Media

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | `MediaType` | 图片填"photo"，视频填"video" |
| path | `string` | 文件路径，必须为本地文件 |

### MediaType

```tsx
"photo" | "video"
```

## 示例代码

```tsx
Taro.openQzonePublish({
  footnote: '使用同款滤镜',
  path: 'pages/index/index',
  text: '我爱中国',
  media: [
    {
      type: 'photo',
      path: 'qqfile://1.png'
    },
    {
      type: 'video',
      path: 'qqfile://2.mp4'
    }
  ]
})
```
