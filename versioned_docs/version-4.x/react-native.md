---
title: React Native 端开发流程
---

> 本篇主要讲解 Taro React Native 端开发流程，React Native 开发前注意事项请看 [开发前注意](./react-native-remind.md)。
>
> Taro3.x 跨端（h5、weapp、rn）开发可参考项目：[Taro 跨平台 demo（React Native + Weapp + h5）](https://github.com/wuba/Taro-Mortgage-Calculator)
>
> Taro React Native APP 开发调试工具，请查看 [Taro Playground](https://github.com/wuba/taro-playground) 项目。

## 简介

Taro 移动端的开发基于 Facebook 的开源项目 [React Native](https://github.com/facebook/react-native)。选择 **React** 框架开发的 Taro 项目，经过适配可以编译成 React Native 的 bundle 文件，再通过对应平台的工具可编译为 Android 及 iOS APP。

整体设计如下：

![image](https://pic8.58cdn.com.cn/nowater/frs/n_v287a918607dea4ac7b28471aef4fc8b6f.pic)

## 开发前准备

为了更顺利地进行开发，我们强烈地建议您，先对 React Native 开发进行学习。学习资料可在 [React Native 中文网](https://reactnative.cn/docs/getting-started)中找到，也可到 [React Native 官网](https://reactnative.dev/docs/getting-started)中查看。

完成基础知识的学习后，建议上手完成环境搭建，并确保能够顺利运行。环境搭建参考 [React Native 中文网的文档](https://reactnative.cn/docs/environment-setup) 及 [React Native 官网的文档](https://reactnative.dev/docs/environment-setup)。

## 开发模式

Taro 开发 React Native APP，提供了两种模式：

0. 集成模式：JS、iOS、Android 在同一仓库，通过 `taro init` 生成且选择 react-native 模板的项目，会采用此模式。与 `npx react-native init AwesomeProject` 生成的项目结构基本一致。**入门开发者推荐使用此模式**。
1. 分离模式：JS 代码在一个仓库，iOS 和 Android 代码在另外一个仓库（也称壳工程）。JS 代码可通过 `taro init` 选择任意模板生成。壳工程代码可 fork [Taro Native Shell 项目](https://github.com/NervJS/taro-native-shell)。

## Taro 对 React Native 的版本兼容情况

我们将以 React Native 最新版为主要适配对象，并及时跟进社区发展。

| React Native 版本 | 兼容情况                                                                                                                           | 壳工程分支                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| < 0.60.0          | 不兼容，可考虑使用 Taro 1.x/2.x 版本                                                                                               | -                                                                                                  |
| 0.60.x            | <= 3.4.2 兼容，但未全面测试，有问题请提供 issue                                                                                    | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)，更改 react-native 版本为 0.60.0 |
| 0.61.x            | <= 3.4.2 兼容，但未全面测试，有问题请提供 issue                                                                                    | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)，更改 react-native 版本为 0.61.0 |
| 0.62.x            | <= 3.4.2 兼容，但未全面测试，有问题请提供 issue                                                                                    | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)，更改 react-native 版本为 0.62.0 |
| 0.63.x            | >= 3.2.0，但 3.2.13 版本以后，需手动添加配置，参考 [PR](https://github.com/NervJS/taro/pull/9540)                                  | [0.63.2](https://github.com/NervJS/taro-native-shell/tree/0.63.2)                                  |
| 0.64.x            | >= 3.2.0                                                                                                                           | [0.64.0](https://github.com/NervJS/taro-native-shell/tree/0.64.0)                                  |
| 0.65.x            | >= 3.3.10                                                                                                                          | -                                                                                                  |
| 0.66.x            | >= 3.3.10                                                                                                                          | [0.66.0](https://github.com/NervJS/taro-native-shell/tree/0.66.0)                                  |
| 0.67.x            | >= 3.3.10, unimodules                                                                                                              | [0.67.0](https://github.com/NervJS/taro-native-shell/tree/0.67.0)                                  |
| 0.67.x            | >= 3.3.10, expo                                                                                                                    | [0.67.0-expo](https://github.com/NervJS/taro-native-shell/tree/0.67.0-expo)                        |
| 0.68.x            | >= 3.5.0，但 3.5.6 版本以后，需要使用 expo-av@~11.2.3 react@17，参考[Discussion](https://github.com/NervJS/taro/discussions/12133) | [0.68.0](https://github.com/NervJS/taro-native-shell/tree/0.68.0)                                  |
| 0.69.x            | >= 3.5.6                                                                                                                           | [0.69.0](https://github.com/NervJS/taro-native-shell/tree/0.69.0)                                  |
| 0.70.x            | >= 3.6.0                                                                                                                           | [0.70.0](https://github.com/NervJS/taro-native-shell/tree/0.70.0)                                  |

## 集成模式

使用 `taro init` 命令进行初始化，选择 `react-native` 模板。**完成后执行 `yarn upgradePeerdeps` 进行依赖初始化**。

查看[演示视频](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4)。

> 如果需要初始化历史版本的 React-Native 项目，可在 [taro-project-templates](https://github.com/NervJS/taro-project-templates) 仓库中，找到对应版本的分支。
>
> 使用 `taro init --template-source github:NervJS/taro-project-templates#v3.5-RN-0.68` 命令，进行初始化。

### 常用命令

```shell
# 更新相关依赖。在初始化完成后或 Taro 版本更新后执行，用于同步 peerDependencies。
$ yarn upgradePeerdeps

# 打包 js bundle 及静态资源。在初始化完成后执行，用于打包默认使用的 bundle。platform 可选 ios, android
$ yarn build:rn --platform ios

# 启动 bundle server
$ yarn start

# 启动 iOS
$ yarn ios

# 启动安卓
$ yarn android
```

## 分离模式

使用 `taro init` 命令进行初始化，选择默认模板。fork 壳工程代码 [Taro Native Shell 项目](https://github.com/NervJS/taro-native-shell)。

### 配置 output

由于分离模式下，需要将 JS 工程产物输出到壳工程，合并完成打包工作。
可通过修改配置 `./config/index.js` 指定资源输出目录，如

```js
{
  rn: {
    output: {
      iosSourceMapUrl: '', // sourcemap 文件url
      iosSourcemapOutput: '../taro-native-shell/ios/main.map', // sourcemap 文件输出路径
      iosSourcemapSourcesRoot: '', // 将 sourcemap 资源路径转为相对路径时的根目录
      androidSourceMapUrl: '',
      androidSourcemapOutput: '../taro-native-shell/android/app/src/main/assets/index.android.map',
      androidSourcemapSourcesRoot: '',
      ios: '../taro-native-shell/ios/main.jsbundle',
      iosAssetsDest: '../taro-native-shell/ios',
      android: '../taro-native-shell/android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: '../taro-native-shell/android/app/src/main/res'
    },
  }
}
```

### JS 工程常用命令

```shell
# 启动 bundle server
$ yarn dev:rn

# 打包 js bundle 及静态资源。platform 可选 ios, android
$ yarn build:rn --platform ios
```

### 壳工程常用命令

```shell
# 更新相关依赖。Taro 版本更新后执行，用于同步 peerDependencies。
$ yarn upgradePeerdeps

# 启动 iOS
$ yarn ios

# 启动安卓
$ yarn android
```

## 使用 Taro Playground APP 进行调试

为方便没有原生开发经验的开发者对 Taro 进行体验，我们提供了高度集成的开发环境 [Taro Playground](https://github.com/wuba/taro-playground)。开发者仅需要正常运行 JS 工程，即可进行 APP 调试。

同时 Taro Playground APP 项目提供了参考代码，供学习。

查看[演示视频](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/09efc622c1f3fa25574d874314f4a421.mp4)。

### 开发调试

运行如下命令，启动 metro server，并打印二维码：

```shell
yarn dev:rn --qr
```

打开 Taro Playground APP，扫描二维码或在输入框中输入 `ip:port`，加载 dev bundle 进行调试。

### release 调试

运行如下命令，启动 http server，并打印二维码：

```shell
yarn build:rn --qr --platform ios
```

打开 Taro Playground APP，扫描二维码，加载 release bundle 进行调试。注意 Android 和 ios 需要分别验证。

### 分享 release bundle

利用 Taro Playground APP + GitHub Action + jsdelivr，我们可以将自己的 APP 通过二维码分享出来，使用方法参考 [taro-react-native-release 项目](https://github.com/zhiqingchen/taro-react-native-release)。

查看[演示视频](https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/4c2ea6b807331f319c5fca2a673b454b.mp4)。

## 打包发布安卓包

先学习 [React Native 如何打包发布安卓包](https://www.react-native.cn/docs/signed-apk-android)。Taro 提供的 React Native 模板中集成了 GitHub Action，可使用 GitHub 进行打包，参考 [assemble_android_release](https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_android_release.yml)。

主要包含如下步骤：

1. `yarn`
2. `yarn build:rn --platform android`
3. linux: `sudo apt install -y ruby-bundler`, mac: `gem install bundler`
4. `cd android && bundle update && bundle exec fastlane assemble`

不使用 CI 工具：

1. `yarn`
2. `yarn build:rn --platform android`
3. `cd android && ./gradlew assembleRelease` 或使用 Android Studio 打包

## 打包发布到 APP Store

先学习 [React Native 如何打包发布 iOS 包](https://www.react-native.cn/docs/publishing-to-app-store)。Taro 提供的 React Native 模板中集成了 GitHub Action，可使用 GitHub 进行打包，参考 [assemble_ios_release](https://github.com/wuba/taro-playground/blob/main/.github/workflows/assemble_ios_release.yml)。

主要包含如下步骤：

1. 证书导入
2. `yarn`
3. `yarn build:rn --platform ios`
4. `npx pod-install`
5. `export SKIP_BUNDLING=1`
6. `cd ios && bundle update && bundle exec fastlane build_release`

不使用 CI 工具：

1. `yarn`
2. `yarn build:rn --platform ios`
3. 使用 Xcode 打包

## 进阶教程

### 自定义原生依赖

Taro 对相关依赖做了按需加载，不需要的原生依赖可以不进行安装，以降低 APP 包大小。如 APP 中不涉及音视频，可直接删除 expo-av 依赖。

### 自定义 metro 配置

Taro 使用了 metro 中的 transformer 与 resolver，可与用户配置进行合并，开发者如需对 metro 做配置，可在项目根目录新建 `metro.config.js` 文件进行配置。

Taro 的默认配置为 `const { defaultConfig } = require('@tarojs/rn-runner/dist/config')`，可参考源码进行深入定制。

## 常见问题

### 通过 yarn start 或 yarn dev:rn 启动，如何判断是否成功？

- 启动后在终端可以看到 `React-Native Dev server is running on port: 8081` 等信息
- 在浏览器中输入 http://127.0.0.1:8081/status ，可以看到 packager-status:running
- 在浏览器中输入 http://127.0.0.1:8081/index.bundle?platform=ios&dev=true 会触发构建，此时可以在终端看到以下信息：

BUNDLE ./index ░░░░░░░░░░░░░░░░ 0.0% (0/173)

过程中如果有报错会在终端中提示，如无报错则显示绿色的信息：

BUNDLE ./index

以上三步都正常，说明 metro server 启动正常。

### yarn ios 运行报错：main.jsbundle: No such file or directory

```
yarn build:rn --platform ios
```

### 更新 `app.config` 文件，但发现未更新成功。

metro 缓存导致，尝试 `yarn dev:rn --reset-cache`

### requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager.

通常为部分依赖未安装，尝试 `yarn upgradePeerdeps`，或检查是否有依赖遗漏。

### yarn upgradePeerdeps 执行不成功

手动执行 `install-peerdeps @tarojs/taro-rn -o -Y && install-peerdeps @tarojs/components-rn -o -Y && install-peerdeps @tarojs/router-rn -o -Y && pod-install`

### install-peerdeps 也执行不成功

查看 [@tarojs/taro-rn](https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json)、[@tarojs/router-rn](https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json)、[@tarojs/components-rn](https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json) 的 peerDependencies，手动进行安装。

或者与 [Taro Native Shell](https://github.com/NervJS/taro-native-shell) 的 `package.json` 文件中的 `dependencies` 进行对齐。

### Invariant Violation: Tried to register two views with the same name RNCWebView

此类问题，通常是因为安装了多个版本的原生依赖导致。先通过`yarn why xxx`，例子中对应的命令为 `yarn why react-native-webview`，检查为何安装了多个版本。通过 resolutions 锁定需要的版本，建议使用 [@tarojs/taro-rn](https://github.com/NervJS/taro/blob/next/packages/taro-rn/package.json)、[@tarojs/router-rn](https://github.com/NervJS/taro/blob/next/packages/taro-router-rn/package.json)、[@tarojs/components-rn](https://github.com/NervJS/taro/blob/next/packages/taro-components-rn/package.json) 中的版本。

### packager Not Available

使用 Taro Playground 扫码后提示 packager Not Available，通常为网络问题，检查手机与电脑是否属于同一局域网下。

### Invariant Violation: "taroDemo" has not been registered.

检查 `config/index.js` 文件是否修改了 appName，默认使用 `taroDemo`。

```js
{
  rn: {
    appName: 'taroDemo',
  }
}
```

### 如何修改 appName？

0. 修改 `config/index.js` 中的 `rn.appName`
1. 修改 `MainActivity.java` 中 `getMainComponentName` 方法的返回值
2. 修改 `AppDelegate.m` 中 `RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"taroDemo" initialProperties:nil];` 的 `moduleName`
3. `yarn dev:rn --reset-cache`

### Library not found for -IDoubleConversion

使用 XCode 编译时，需要打开的文件是 `ios/taroDemo.xcworkspace`

### Entry file index.js does not exist. If you use another file as your entry point, pass ENTRY_FILE=myindex.js

Taro React Native 的 jdbundle 文件由 Taro 进行打包（yarn build:rn），如果使用 React Native 自带命令进行打包（react-native bundle），则会出现如上错误。因此我们需要跳过 React Native 原有的打包阶段。

react-native/ios/taroDemo.xcodeproj/project.pbxproj

```diff
-			shellScript = "set -e\n\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n";
+			shellScript = "set -e\n\nexport NODE_BINARY=node\nexport SKIP_BUNDLING=1\n../node_modules/react-native/scripts/react-native-xcode.sh\n";
```

android/app/build.gradle

```diff
-apply from: "../../node_modules/react-native/react.gradle"
+// apply from: "../../node_modules/react-native/react.gradle"
```
