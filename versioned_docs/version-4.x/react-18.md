---
title: React 18
---

:::note
Taro v3.5 开始支持。
:::

从 Taro v3.5 开始，Taro 将默认使用 React 18 版本。你可以在 Taro 使用 React18 中激动人心的新特性了。

### 相关资料

- [React v18.0](https://reactjs.org/blog/2022/03/29/react-v18.html)

## 使用方法

### 创建新项目

```bash
# @tarojs/cli 升级到 v3.5
$ taro init myProject
# 选择「react」框架
```

### 旧项目升级

```bash
$ taro update project 3.5
# 项目 package.json 中 react / react-dom 版本升级为 "^18"
```

:::note
如果升级了 Taro v3.5，但不想使用 React v18，可以将项目 `package.json` 中 `react / react-dom` 版本降级为 `^17` 并重新安装依赖。
:::

## 注意事项

- 开发支付宝小程序时，Webpack4 暂不支持使用 React18，[#12134](https://github.com/NervJS/taro/issues/12134#issuecomment-1197904281)。
- 如果你选择升级到 React 18，那么项目中使用的其他 React 生态库同步也需要支持 React 18 版本，以减少运行时问题，比如 [issue 117](https://github.com/NervJS/taro-docs/issues/117)。
- 受小程序环境限制，诸如新 SSR Suspense 等特性将不能在小程序中使用。
- RN 暂不支持 React v18，需要等待 RN 官方输出支持方案。
