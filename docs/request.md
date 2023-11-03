---
title: 跨端请求库
---

本篇介绍如何在 Taro 中使用 web 生态下的网络请求库, 这里以 `axios` 为例。

## 原理

我们通过 [@tarojs/plugin-http](https://github.com/NervJS/taro/tree/next/packages/taro-plugin-http) 插件，在小程序环境下 runtime 注入模拟实现的 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) , 从而支持在小程序环境中使用 web 生态下的各种网络请求库。至此，你可以在 h5、小程序、react native 中畅快使用 [axios](https://axios-http.com/) 库作为请求库。

理论上， 任何底层基于 XMLHttpRequest 开发的 web 库你都可以自由使用。

## 插件使用

安装

```bash
npm i @tarojs/plugin-http axios
```

配置

```typescript
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-http'],
}
```

代码引入

```typescript
import axios from "axios";

const request = axios.create({
    baseURL: ""
});


export request;
```

## 插件完整配置参数

| 参数名           | 默认值 | 说明                                                                                          |
| :--------------- | :----- | :-------------------------------------------------------------------------------------------- |
| enableCookie     | false  | (是否)注入相关代码，支持 `document.cookie` 、 通过后端返回 `Set-Cookie` 响应头来设置 `cookie` |
| disabledFormData | true   | (是否)禁用掉 FormData 全局对象                                                                |
| disabledBlob     | true   | (是否)禁用掉 Blob 全局对象                                                                    |

## 限制

:::danger 限制

- 暂不支持上传，且插件默认会将全局 `FormData` 、 `Blob` 对象替换成 `undefined`（仅针对小程序环境）
- 本插件需搭配 taro 主包 3.6.0 及其以上版本使用
- webpack4 用户需升级插件版本为 `3.6.6` 及其以上

:::

## 插件发布记录

- `3.6.0` 插件首次发布
- `3.6.6` [fix: @tarojs/plugin-http 对 webpack4 的兼容](https://github.com/NervJS/taro/pull/13699)
- `3.6.7` 优化事件属性的实现， [#13824](https://github.com/NervJS/taro/issues/13824)
- `3.6.8` 修复发送请求时未正确携带包含 `httpOnly` 的 `cookie` 的问题，[#13941](https://github.com/NervJS/taro/issues/13941)
