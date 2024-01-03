---
title: 鸿蒙 & OpenHarmony
---

:::info
Taro v4.0.0-beta.0+ 开始支持
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

建议开发前首先阅读 [《鸿蒙应用开发导读》](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/start-with-ets-stage-0000001477980905-V3?catalogVersion=V3) 部分，有助于对鸿蒙整体结构有一定了解。

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

（1）登录  [HarmonysOS 应用开发门户](https://developer.huawei.com/consumer/cn/)，点击右上角注册按钮，注册开发者帐号。

（2）进入  [HUAWEI DevEco Studio 套件货架中心](https://developer.harmonyos.com/deveco-developer-suite/)，申请白名单，由于目前最新版本的 OpenHarmony SDK 和 IDE 仍未对外开发，因此个人开发者若想尝鲜，需要先申请白名单成为合作伙伴后才能继续进行下面的步骤。

（3）白名单申请通过后，进入货架，下载 **IDE 版本为 DevEco Studio 4.0.3.700 的 DevEcoStudio4.0-API10** 开发套件。

（4）下载完成后，打开 IDE 安装包进行安装，安装成功后启动 DevEco Studio，根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)解压套件里附带的 SDK 压缩包，并根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)在 IDE 中配置好 SDK 的使用路径。

（5）SDK 配置成功后，看到设置面板中各个 SDK 的版本号与下面的图片中相同，则标识配置成功了。

![](https://img20.360buyimg.com/img/jfs/t1/185512/33/41206/63059/6544a44dFf833680e/4f8bbc23804e737a.png)

### 2. 创建 Harmony 主项目

（1）创建新项目，选择需要开发的设备，然后 `Mode` 选择 `Stage` 模型，`Compile SDK` 选择 `4.0.0(API 10)`，按照引导操作后一个新的项目就被创建出来了。

（2）关注目录 `entry/src/main/ets/pages/Index.ets` 下面的文件，熟悉文件结构。`pages` 目录下为页面入口，新建项目的页面目录会包含若干个 `.ets` 文件，应用级配置信息位于 `build-profile.json5`，当前的模块信息 、编译信息配置项位于 `entry/build-profile.json5`。[项目结构详情](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V2/start-with-ets-stage-0000001558077129-V2)。

（3） 创建好项目后，根据[配置插件指引](https://developer.harmonyos.com/cn/docs/documentation/doc-releases-V2/import-plugin-0000001515948586-V2)，将下载的套件附带的插件配置在项目配置中。

### 3. 预览 & 调试

（1）DevEco Studio 支持下述方式查看运行效果，链接到鸿蒙官网查看具体步骤

a. [使用预览器 previewer](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/ide_debug_previewer-0000001658306077-V4?catalogVersion=V4) 该功能与真机效果可能存在差异，主要用于 UI 样式的预览，开发时不推荐使用。

b. [使用模拟器](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/ide_debug_emulator-0000001115721921-V4?catalogVersion=V4)

c. [使用本地真机](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/ide_debug_device-0000001053822404-V4?catalogVersion=V4) 用户真机与电脑相连，打开开发者模式，即可在真机看到效果，这里需要注意的是，真机需要使用华为侧提供的测试机，测试机中会安装纯鸿蒙的系统镜像，能够体验到完整的鸿蒙系统功能，纯鸿蒙应用目前还不能完美地在 HarmonyOS 4.0 的商用机侧跑起来。

(2) DevEco Studio 真机进行调试

链接上真机后，选择好对应的入口模块，在项目代码中打上断点等信息，在编译器中启动调试即可。

![示例图](https://img20.360buyimg.com/img/jfs/t1/102571/34/33232/150214/6582b637F9d4860f7/4cf399a59a316520.png)

### 相关阅读

- [《DevEco Studio 使用指南》](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/tools-overview-0000001558763037-V4)
- [《构建第一个 ArkTS 应用（stage 模型）》](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/start-with-ets-stage-0000001477980905-V3?catalogVersion=V3)

## 使用 Taro 开发鸿蒙 ArkUI

### 1. 安装 Taro v4.0.0-beta.0

#### CLI

安装 `v4.0.0-beta.x` 版本的 Taro CLI：

```bash
npm i -g @tarojs/cli@beta
```

#### 项目依赖

如您是新项目，创建项目时推荐创建编译器为 `vite` 的模板，若创建项目选择了 `webpack` 或 `webpack5` 的模板，则需要手动安装 `vite`、`terser` 以及 `@tarojs/vite-runner`;

```bash
$ npm i vite@^4.2.0
$ npm i terser@^5.4.0
$ npm i @tarojs/vite-runner@beta
```

旧项目需要把  `package.json`  文件中 Taro 相关依赖的版本修改为  `~4.0.0-beta.0`，再重新安装依赖，并添加上述三个和 `vite` 相关的依赖。

> 如果安装失败或打开项目失败，可以删除  **node_modules**、**yarn.lock**、**package-lock.json**  后重新安装依赖再尝试。

### 2. 安装 Taro 适配鸿蒙插件

```bash
$ npm i @tarojs/plugin-platform-harmony-ets@beta
```

### 3. 修改 Taro 编译配置

```js title="config/index.ts"
config = {
  // 配置使用插件
  plugins: ['@tarojs/plugin-platform-harmony-ets'],
  // harmony 相关配置
  harmony: {
    // 将编译方式设置为使用 Vite 编译
    compiler: 'vite',
    // 【必填】鸿蒙主应用的绝对路径，例如：
    projectPath: path.resolve(process.cwd(), '../MyApplication'),
    // 【可选】HAP 的名称，默认为 'entry'
    hapName: 'entry',
    // 【可选】modules 的入口名称，默认为 'default'
    name: 'default',
  },
}
```

### 4. 修改鸿蒙主项目的权限配置

根据项目需要在鸿蒙主项目 `entry/src/main/module.json5` 中所需要使用到的机器权限。

```json
{
  //...
  "requestPermissions": [
    {
      "name": "ohos.permission.VIBRATE"
    },
    {
      "name": "ohos.permission.GET_WIFI_INFO"
    },
    {
      "name": "ohos.permission.GET_NETWORK_INFO"
    },
    {
      "name": "ohos.permission.SET_NETWORK_INFO"
    },
    {
      "name": "ohos.permission.INTERNET"
    },
    {
      "name": "ohos.permission.GET_BUNDLE_INFO"
    },
    {
      "name": "ohos.permission.LOCATION"
    },
    {
      "name": "ohos.permission.APPROXIMATELY_LOCATION"
    },
    {
      "name": "ohos.permission.LOCATION_IN_BACKGROUND"
    }
  ]
}
```

### 5. 编译运行

在 `package.json` 里添加以下的 `scripts` 命令，运行命令，Taro 可将打包结果生成到配置的鸿蒙主项目路径中。

```json
"scripts": {
    "build:harmony": "taro build --type harmony",
    "dev:harmony": "npm run build:harmony -- --watch"
}
```

### 6. 预览 & 调试

开发者可根据上面运行鸿蒙 demo 项目的方式进行预览与调试

## 注意事项

### 样式

#### 布局

鸿蒙没有实现盒子模型，因此目前在实现上是使用鸿蒙的 `Flex` 和 `Column` 实现的，

#### 尺寸单位

目前 Taro 转鸿蒙只支持使用 `px` 作为数据的单位，诸如 `rem`、`em`、`vw`、`vh` 等单位则暂时不支持。

### 调试

#### 真机调试

当前，真机调试需要使用华为侧提供的测试机，测试机中会安装纯鸿蒙的系统镜像，能够体验到完整的鸿蒙系统功能，纯鸿蒙应用目前还不能完美地在 HarmonyOS 4.0 的商用机侧跑起来。

#### SDK 版本问题

由于鸿蒙侧迭代 SDK 的速度较快，目前 Taro 适配的 SDK 版本为最新的 API 10 版本，对于 API 版本为 9 的鸿蒙项目可能会存在组件和 API 的不兼容和不支持。

### 与小程序的差异

当下，虽然 Taro 适配鸿蒙 ArkTS 的工作已经基本完成，但在适配过程中，我们也发现了一些暂时无法解决或者计划后续解决的遗留问题。

#### 组件和 API

由于鸿蒙平台和小程序平台本身就存在着较大的差异，因此一些小程序的组件和 API 规范，在鸿蒙平台会没有办法重新实现，如与登录和账号信息相关的 API 以及 live-player 等和直播相关的组件。

#### 样式解析存在一定的限制

由于在 ArkTS 中，会使用声明式 UI 来对 UI 的样式进行描述，因此不存在 sass 和 css 等样式文件，因此 Taro 在适配鸿蒙 ArkTS 时，会在编译时去解析这些样式文件。并将这些样式以内联的方式写入到组件的 TS/JS 代码中。

正常的样式基于 W3C 规范，存在着**类名级联**和**样式继承**的行为，由于开发者在代码中的写法各异，Taro 没有办法在编译时获取准确的节点结构以及节点类名信息，因此无法支持这两种行为。

另外，由于样式的解析是基于组件文件的纬度的，因此样式文件只能应用于被其引用的组件文件中，而**不能跨文件应用，并且样式文件也只支持类选择器。**
