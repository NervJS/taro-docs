---
title: OpenHarmony React Native 开发流程
---

:::tip Taro v4.0.0-beta.0+ 开始支持  
:::
// todo 具体版本待定
随着鸿蒙系统的日渐完善，鸿蒙与 React Native 进行合作，React Native 会推出对鸿蒙的适配。

## 配置鸿蒙环境

### 1.安装、配置 DevEco Studio

（1）登录  [HarmonysOS 应用开发门户](https://developer.harmonyos.com/cn/home)，点击右上角注册按钮，注册开发者帐号。

（2）进入  [HUAWEI DevEco Studio 套件货架中心](https://developer.harmonyos.com/deveco-developer-suite/)，申请白名单，由于目前最新版本的 OpenHarmony SDK 和 IDE 仍未对外开发，因此个人开发者若想尝鲜，需要先申请白名单成为合作伙伴后才能继续进行下面的步骤。

（3）白名单申请通过后，进入货架下载开发套件具体版本请查看软件要求。

（4）下载完成后，打开 IDE 安装包进行安装，安装成功后启动 DevEco Studio，根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)解压套件里附带的 SDK 压缩包，并根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)在 IDE 中配置好 SDK 的使用路径。

### 2.软件要求

(1) IDE 版本: 4.1.3.700 或更高的版本

(2) SDK 版本: HarmonyOS S NEXT Developer Preview2

(3) Node.js 版本：V18.14.1（可使用 DevEco Studio 安装的 Node.js）

### 3.下载 Harmony 项目

（1）由于鸿蒙提供的 React Native 依赖都是内部版本，需要跟鸿蒙有合作才能使用，开发者可以下载
[taro-project-templates](https://github.com/NervJS/taro-project-templates/tree/v4.0/react-native)提供的 harmony 工程

（2）下载 [Taro Playground](https://github.com/wuba/taro-playground) 项目对应的 harmony 工程

## 使用 Taro 开发鸿蒙 RN

### 1. 安装 Taro v4.0.0-beta.0+

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

### JS 工程运行

```
 yarn dev:rn
```

### harmony 工程运行

使用 DevEco Studio 运行下载的 harmony 工程

### 连接手机或者模拟器

执行

```
hdc rport tcp:8081 tcp:8081
```

## 常见问题

### App 启动后没有加载 bundle

端口映射没有成功

```
hdc rport tcp:8081 tcp:8081
```

### 第三方库未生效

会看到信息：**No harmony-specific third-party packages have been detected pnpm install** 等操作，导致 node_modules 修改被覆盖。查看**node_modules/react-native-harmony/metro.config.js** **lstatSync** 是否改成了**statSync**。

<!-- ## 问题：

<!-- 步骤 2	新建文件夹，分别命名为react-native-harmony和react-native-harmony-cli。
 是直接给放在安装包里边还是
 --> -->
