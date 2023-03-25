---
title: CommentList
sidebar_label: CommentList
---

评论列表

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://smartprogram.baidu.com/docs/develop/extended/component-content/comment-list/)

## 类型

```tsx
ComponentType<CommentListProps>
```

## CommentListProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| commentParam | `ICommentParam` |  | 是 | 评论核心参数 |
| toolbarConfig | `IToolbarConfig` |  | 否 | 底部 toolbar 的相关配置 |
| isPageScroll | `boolean` | `true` | 否 | 滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 false |
| needToolbar | `boolean` | `true` | 否 | 是否需要底部 toolbar ，若使用开发者自定义的底部 toolbar ，该参数需设为 false |
| addComment | `boolean` | `false` | 否 | 用于调起评论发布器发布评论，发布成功插入列表第一条，且滚动到列表顶部 |
| detailPath | `string` |  | 否 | 点击单条评论跳转的详情页页面 path ，若没有配置则不会发生跳转；配置的前提是列表与详情均是页面级 |
| isFolded | `boolean` | `false` | 否 | 是否折叠列表，默认全展示 |
| foldNum | `number` | `3` | 否 | 折叠后列表展示最大条数，默认 3 条，最多 10 条 |
| viewMorePath | `string` |  | 否 | 传入放置评论组件的页面路径，如'/pages/list/index'，组件内部会触发跳转逻辑 |
| viewMoreStyle | `IViewMoreStyle` |  | 否 | 『全部 xx 条』的样式，目前只支持开发者自定义字体颜色 |
| onClickComment | `CommonEventFunction` |  | 否 | 绑定点击单条评论的事件，点击单条评论时触发，返回数据为{status, data:{srid}} |
| onViewMore | `CommonEventFunction` |  | 否 | 绑定点击更多事件，若除了页面跳转还需要其他操作，可通过该回调执行；若为浮层，也可使用该回调自定义交互逻辑 |
| onReply | `CommonEventFunction` |  | 否 | 评论发布成功时触发，返回数据为 {status, data:{srid}} |

### API 支持度

| API | 微信小程序 | 百度小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| CommentListProps.commentParam |  | ✔️ |  |  |  |
| CommentListProps.toolbarConfig |  | ✔️ |  |  |  |
| CommentListProps.isPageScroll |  | ✔️ |  |  |  |
| CommentListProps.needToolbar |  | ✔️ |  |  |  |
| CommentListProps.addComment |  | ✔️ |  |  |  |
| CommentListProps.detailPath |  | ✔️ |  |  |  |
| CommentListProps.isFolded |  | ✔️ |  |  |  |
| CommentListProps.foldNum |  | ✔️ |  |  |  |
| CommentListProps.viewMorePath |  | ✔️ |  |  |  |
| CommentListProps.viewMoreStyle |  | ✔️ |  |  |  |
| CommentListProps.onClickComment |  | ✔️ |  |  |  |
| CommentListProps.onViewMore |  | ✔️ |  |  |  |
| CommentListProps.onReply |  | ✔️ |  |  |  |

### ICommentParam

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| snid | `string` |  | 是 | 被点赞的文章的 id，与 path 参数一一对应<br />example: "20200101" |
| title | `string` |  | 是 | 文章标题 |
| path | `string` |  | 是 | 智能小程序内页链接，最长不能超过 194 字符<br />example: "/pages/index/index" |
| images | `string[]` | `['https://b.bdstatic.com/miniapp/images/demo-dog.png']` | 否 | 数组第一项用于收藏功能的展示图片 |

### IToolbarConfig

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| placeholder | `string` |  | 否 | 输入框提示文字 |
| moduleList | `string` | `['comment', 'like', 'favor', 'share']` | 否 | 显示的互动模块，对应默认值分别是：评论数、点赞、收藏、分享 |
| share | `IShare` |  | 否 | 若 moduleList 里配置了 share 模块，该参数为必填 |

### IShare

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| title | `string` | 是 | 分享标题 |
| content | `string` | 否 | 分享内容 |
| imageUrl | `string` | 否 | 分享图标 |
| path | `string` | 否 | 页面 path ，必须是以 / 开头的完整路径，如果 path 中参数包含中文字符，需对中文字符进行编码 |

### IViewMoreStyle

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| color | `string` | `"#3388ff"` | 否 | 『全部 xx 条』的字体颜色，默认为视觉提供色号，开发者可传入自定义色号 |
