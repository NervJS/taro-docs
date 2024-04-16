---
title: 使用 harmony-hybrid 平台插件开发鸿蒙应用
authors: [tangcq, guoenxuan]
tags: [v3]
description: '基于 web 的混合开发模式 -- harmony-hybrid 平台发布'
---

## 一、背景

HarmonyOS NEXT Developer Preview 版本发布在即，越来越多的厂商加快产品鸿蒙化进程。如何把已有产品快速迁移至鸿蒙原生是大部分厂商亟待解决的问题之一。在此背景下， Taro `harmony-hybrid` 平台插件提供基于 Web 开发鸿蒙原生应用的迁移方案。该插件继承 H5 平台，并注入部分鸿蒙原生能力接口，扩展了 Web 应用操作设备的能力，助力厂商的产品快速鸿蒙化。

## 二、harmony-hybrid 平台

### 1. 简介

Taro `harmony-hybrid` 平台插件和鸿蒙三方模块 [@hybrid/web-container](https://ohpm.openharmony.cn/#/cn/detail/@hybrid%2Fweb-container) 是上述方案的两大组成部分。该方案创建的鸿蒙应用的打包部署形态如下图所示：

![运行框架](https://img14.360buyimg.com/ling/jfs/t1/244964/1/2934/36138/65a88701Fc20a552c/7d44450501db4b57.png)

编译 Taro 工程生成 harmony-hybrid 平台的 Web 资源，由 Web 服务器加载运行；鸿蒙应用使用 TaroWebContainer 组件加载网站资源，借助该组件提供的 Taro API 实现来达到业务访问原生与使用硬件的能力。

### 2. 基于 harmony-hybrid 开发鸿蒙应用

#### 编译 Taro 工程生成 harmony-hybrid 应用资源

通过 Taro CLI 工具基于 `默认模板` 创建 Taro 工程，使用如下编译命令生成 harmony-hybrid 平台的 Web 资源：

```shell
# yarn
$ yarn build:harmony-hybrid

# npm script
$ npm run build:harmony-hybrid

# pnpm script
$ pnpm build:harmony-hybrid
```

生成的 Web 资源使用 Web 服务器加载运行或者内置于鸿蒙应用的 `resources/rawfile` 目录下。

#### 创建鸿蒙应用

`@hybrid/web-container` 三方模块提供自定义鸿蒙组件 `TaroWebContainer`，为运行其中的 harmony-hybrid 应用提供运行时访问系统设备的能力。

在鸿蒙应用中使用 `TaroWebContainer` 组件的示例代码如下：

- entry/oh-package.json5 配置

```json
"dependencies": {
  "@hybrid/web-container": "1.0.0"
}
```

- 页面中使用 `TaroWebContainer` 组件：

```ts
import { TaroWebContainer, HostPageState, TaroWebController } from '@hybrid/web-container';

@Entry
@Component
struct HarmonyHybridSample {
  @State pageState: HostPageState = HostPageState.PageInit;
  @State taroWebController: TaroWebController = new TaroWebController();

  build() {
    Column() {
      TaroWebContainer({
        webUrl: 'https://域名/index.html',
        webUrlPrefix: 'https://域名/',
        taroWebController: this.taroWebController,
        pageState: this.pageState,
      })
      .width('100%')
      .height('100%')
    }
  }
}
```

具体的使用方式可以参考 `@hybrid/web-container` 的 `README.md` 文档。

#### 环境要求

- Taro: 3.6.24 以上版本
- 鸿蒙集成开发环境: `DevEco Studio NEXT Developer Preview1` 及以上版本

## 三、转换补充说明

对于具备小程序版本的产品，可以使用 [@tarojs/cli-convertor](https://docs.taro.zone/docs/taroize/) 命令行工具转化成 Taro 项目，再编译成 `harmony-hybrid` 来加快适配流程。

## 最后

后续我们会继续完善对 `harmony-hybrid` 平台的适配工作，并根据最新鸿蒙系统能力来补齐和完善 `harmony-hybrid` 平台能力，同时也希望广大的开发者和参与到 Taro 开源生态共建的同学们，能够一起参与`harmony-hybrid` 平台的构建和完善，助力鸿蒙生态和 Taro 开源生态的发展。

### 相关阅读

- [《华为开发者工具 DevEco Studio》](https://developer.harmonyos.com/cn/develop/deveco-studio)

- [《鸿蒙开发文档》](https://developer.harmonyos.com/cn/documentation)
