---
title: 初始化流程和结构介绍
---

:::info
Taro v4.1.0+ 开始支持
:::

随着鸿蒙系统的日渐完善，众多应用厂商都期待着把自家应用移植到鸿蒙平台上。借助 Taro，可以实现快速开发鸿蒙应用、把小程序快速转换为鸿蒙应用等功能。

## 背景阅读

鸿蒙 & OpenHarmony 相关背景知识简介。

### 鸿蒙与 OpenHarmony

> 摘录自 [《关于规范 HarmonyOS 沟通口径的通知》](https://www.google.com/search?q=%E5%85%B3%E4%BA%8E%E8%A7%84%E8%8C%83HarmonyOS%E6%B2%9F%E9%80%9A%E5%8F%A3%E5%BE%84%E7%9A%84%E9%80%9A%E7%9F%A5&oq=%E5%85%B3%E4%BA%8E%E8%A7%84%E8%8C%83HarmonyOS%E6%B2%9F%E9%80%9A%E5%8F%A3%E5%BE%84%E7%9A%84%E9%80%9A%E7%9F%A5&aqs=chrome..69i57.670j0j4&sourceid=chrome&ie=UTF-8)
>
> 为方便描述，本文档把这三者统一称作“鸿蒙”

1、**鸿蒙操作系统**是华为研发的智能终端操作系统。

2、华为已把该智能终端操作系统的基础能力全部捐献给开放原子开源基金会，由开放原子开源基金会整合其他参与者的贡献，形成 [OpenHarmony](https://gitee.com/openharmony) 开源项目，最新的版本为 OpenHarmony 4.0+。

3、[HarmonyOS](https://developer.harmonyos.com/) 是华为基于开源项目 OpenHarmony 开发的商用版本。

### 鸿蒙应用开发导读

建议开发前首先阅读 [《鸿蒙应用开发导读》](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-with-ets-stage) 部分，有助于对鸿蒙整体结构有一定了解。

鸿蒙应用程序包结构（Stage 模型）：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230821150835.75065627467290629243023494212142:50001231000000:2800:5EB57405CFA7AEA5D52F21AFDFF9B174880C6BB02D98FC4CB34C490B82D97AC1.png?needInitFileName=true?needInitFileName=true)

### 鸿蒙与小程序

鸿蒙 Stage 模型支持使用 ArkTS 来声明式地开发 UI（ArkUI）。ArkTS 是 HarmonyOS 优选的主力应用开发语言。ArkTS 围绕应用开发 [TypeScript](https://www.typescriptlang.org/)（简称 TS）生态基础上做了进一步扩展，继承了 TS 的所有特性，是 TS 的超集。

#### 鸿蒙 ArkUI 与小程序写法的主要异同

1. 开发语言

鸿蒙的开发语言 ArkTS 在语法方面由于是 TypeScript 的超集，因此能完美兼容小程序上的 JavaScript/TypeScript 语法。

2. 渲染 UI

小程序可以通过 `template` 模板来动态地拼接和生成页面的 UI，而鸿蒙可以通过系统提供的自定义组件来递归地渲染出页面 UI。

## 配置鸿蒙环境

首先要准备鸿蒙运行所需的环境，根据参考文档提示的步骤在 HUAWEI DevEco Studio 的 IDE 中完成 MyApplication 项目的创建，熟悉鸿蒙开发者工具的预览查看等功能。

### 1. 安装、配置 DevEco Studio

（1）登录  [HarmonysOS 应用开发门户](https://developer.harmonyos.com/cn/home)，点击右上角注册按钮，注册开发者帐号。

（2）进入  [HUAWEI DevEco Studio 下载中心](https://developer.huawei.com/consumer/cn/deveco-studio/)，点击立即下载按钮，下载最新版本的 DevEco Studio IDE。

### 2. 创建 Harmony 主项目

（1）创建新项目，选择需要开发的设备，根据应用配置所需的信息，点击 Finish 按钮，一个新的项目就被创建出来了。

（2）关注目录 `entry/src/main/ets/pages/Index.ets` 下面的文件，熟悉文件结构。`pages` 目录下为页面入口，新建项目的页面目录会包含若干个 `.ets` 文件，应用级配置信息位于 `build-profile.json5`，当前的模块信息 、编译信息配置项位于 `entry/build-profile.json5`。[项目结构详情](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-package-structure-stage)。

### 3. 预览 & 调试

（1）DevEco Studio 支持下述方式查看运行效果，链接到鸿蒙官网查看具体步骤

a. [使用预览器 previewer](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkts-js) 该功能与真机效果可能存在差异，主要用于 UI 样式的预览，主要用于预览 ArkTS 侧经过 @Component 修饰的 UI 组件，在 Taro For Harmony 的开发中无法使用，可以暂时忽略。

b. [使用模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-emulator) 使用 DevEco Studio 提供的模拟器功能，即可正常调试 Taro 打包出来的鸿蒙应用程序，除了无法使用 IDE 提供的 Profiler 来测量性能外，其余功能和真机并无太大差异，推荐没有真机的开发者优先考虑这种调试方式。

c. [使用本地真机](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device) 用户真机与电脑相连，打开开发者模式，即可在真机看到效果，这里需要注意的是，真机需要使用纯鸿蒙系统的手机，能够体验到完整的鸿蒙系统功能。

(2) DevEco Studio 真机进行调试

链接上真机后，选择好对应的入口模块，在项目代码中打上断点等信息，在编译器中启动调试即可。

![示例图](https://img20.360buyimg.com/img/jfs/t1/102571/34/33232/150214/6582b637F9d4860f7/4cf399a59a316520.png)

### 相关阅读

- [《DevEco Studio 使用指南》](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)
- [《构建第一个 ArkTS 应用（stage 模型）》](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-with-ets-stage)
