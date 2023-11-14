---
title: CommentDetail
sidebar_label: CommentDetail
---

评论详情

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/comment-detail/)

## 类型

```tsx
ComponentType<CommentDetailProps>
```

## CommentDetailProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| commentParam | `ICommentParam` |  | 是 | 评论核心参数 |
| srid | `string` |  | 是 | 评论 ID |
| isPageScroll | `boolean` | `true` | 否 | 滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 false |
| needToolbar | `boolean` | `true` | 否 | 是否需要底部 toolbar，若使用开发者自定义的底部 toolbar，该参数需设为 false |
| needLikeBtn | `boolean` | `true` | 否 | 是否需要详情顶部父级评论的点赞按钮，默认显示 |
| backListAfterDelete | `boolean` | `true` | 否 | 删除详情后是否返回列表项，默认一站式逻辑。若使用浮层，请设置改属性为 false |
| addComment | `boolean` | `false` | 否 | 用于调起评论发布器发布评论 |
| onDelete | `CommonEventFunction` |  | 否 | 删除整体详情内容时触发，返回数据为{status, data:{srid}} |
| onReply | `CommonEventFunction` |  | 否 | 评论发布成功时触发，返回数据为 {status, data:{srid}} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CommentDetailProps.commentParam |  | ✔️ |  |  |  |
| CommentDetailProps.srid |  | ✔️ |  |  |  |
| CommentDetailProps.isPageScroll |  | ✔️ |  |  |  |
| CommentDetailProps.needToolbar |  | ✔️ |  |  |  |
| CommentDetailProps.needLikeBtn |  | ✔️ |  |  |  |
| CommentDetailProps.backListAfterDelete |  | ✔️ |  |  |  |
| CommentDetailProps.addComment |  | ✔️ |  |  |  |
| CommentDetailProps.onDelete |  | ✔️ |  |  |  |
| CommentDetailProps.onReply |  | ✔️ |  |  |  |

### ICommentParam

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| snid | `string` | 被点赞的文章的 id，与 path 参数一一对应<br />example: "20200101" |
| title | `string` | 文章标题 |
| path | `string` | 智能小程序内页链接，最长不能超过 194 字符<br />example: "/pages/index/index" |
