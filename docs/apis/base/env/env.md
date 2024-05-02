---
title: env
sidebar_label: env
---

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony hybrid" src={require('@site/static/img/platform/harmonyHybrid.png').default} className="icon_platform" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/env/envObj.html)

## 类型

```tsx
{ [key: string]: string; FRAMEWORK: "react" | "preact" | "nerv" | "vue" | "vue3"; TARO_ENV: "weapp" | "h5" | "rn" | "swan" | "alipay" | "tt" | "qq" | "jd" | "quickapp"; USER_DATA_PATH?: string; }
```
