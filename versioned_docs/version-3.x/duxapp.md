---
title: 使用模块化项目开发框架
---

[duxapp](http://duxapp.cn)是基于 Taro 二次开发的模块化开发框架

使用这个框架，结合框架提供的 UI 库和工具库，能帮助你快速且高质量的完成项目，且能实现同时开发小程序、H5、APP（React Native），并且保证各个端的一致性

随着 Taro4.0 的推出和完善，duxapp 也将逐步完善对鸿蒙的支持

:::info

- 需要注意的是 duxapp 框架虽然是基于 Taro 开发的，但是他不能使用在你现有的项目中，因为 duxapp 对 Taro 的结构做了许多修改，你需要通过 duxapp 提供的 CLI 创建项目，而不是使用 Taro 的 CLI
- 这篇文档仅介绍 duxapp 框架的特性，要使用 duxapp 框架请查看完整文档[duxapp.cn](http://duxapp.cn)

:::

## 什么是模块化

就像 npm 包一样，我们可以将一些通用的功能或页面编写在一个模块内，提供给多个项目来使用，以提高代码的复用性。

模块的概念在很多后端框架中很常见，它们可以在应用商店通过安装应用的方式来获得新功能，在前端框架中确很少见到类似的设计方案，当然你其实也可以理解为发布到 npm 就是一种模块化的设计，但是在 Taro 中很多功能他并不能发布到 npm 中，例如页面。页面需要放在项目中，当发布到 npm 之后就会无法使用

在 duxapp 框架中的模块化设计原理，和 npm 的依赖关系是类似的，每个模块有一个配置文件`app.json`，里面的依赖字段`dependencies`，用来填写我要用到的依赖，就像下面`ui库示例`这个模块的配置

```jsx
{
  "name": "duxuiExample",
  "description": "ui库示例",
  "version": "1.0.13",
  "dependencies": [
    "duxui",
    "duxcms",
    "amap",
    "echarts",
    "wechat"
  ]
}
```

和 npm 依赖不一样的是，这里的依赖不包含版本信息。因为页面等限制条件，你一个项目中，同一个模块无法存在两个不同的版本，因此并未设计指定版本号的功能

依赖关系是逐层查找的，就像 npm 一样，例如这里依赖的`duxui`模块，他的模块配置文件是这样的

```json
{
  "name": "duxui",
  "description": "DUXUI库",
  "version": "1.0.42",
  "dependencies": ["duxapp"],
  "npm": {
    "dependencies": {
      "b-validate": "^1.5.3",
      "react-native-view-shot": "~3.8.0",
      "react-native-fast-shadow": "~0.1.1",
      "array-tree-filter": "^2.1.0"
    }
  }
}
```

在 duxui 模块中他又使用了`duxapp`这个依赖，通过每个模块都去查找，我们最终整理出这样的依赖关系图

![dependencies](data:image/png;base64,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)

那么最终当我们使用下面的命令编译`duxuiExample`模块的时候

```bash
# 调试小程序
yarn dev:weapp --app=duxuiExample
# 调试h5
yarn dev:h5 --app=duxuiExample
```

实际被编译的模块就包含下面这些

- duxuiExample
- duxcms
- amap
- echarts
- wechat
- duxui
- duxappReactNative
- duxapp

模块你可以将它当做项目、组件库、工具库，甚至是对某个第三方插件的封装，就像上面依赖里面的 `wechat`，他就是对微信插件的封装，这个模块在不同的端进行了不同的封装

- 小程序：未使用第三方插件 封装了小程序的分享等功能
- H5 封装了 JSSDK，你可以使用 jssdk 的功能，也封装了公众号分享
- APP 封装了 `react-native-wechat-lib` 插件，用来实现微信相关功能

那么当我们需要用到微信相关功能时，我们只需要在我们的模块依赖中添加 `wechat` 模块，重新编译就可以使用了

:::info
在 RN 端，当以依赖了 wechat 模块时，重新编译，会自动将 `react-native-wechat-lib` 这个原生插件打包到你的安装包中，你需要做的是在项目配置文件中配置微信插件需要的参数，如 APPID 等
:::

在 duxapp 提供的基础模块中还提供了很多基础组件和功能，像下面这些

- [支持拦截器的网络请求](https://duxapp.cn/docs/course/started/net)
- [支持拦截器的路由封装](https://duxapp.cn/docs/course/started/route)
- [跨模块渲染钩子](https://duxapp.cn/docs/course/app/renderHook)
- [多种方案的全局状态管理](https://duxapp.cn/docs/course/started/globalState)
- [快速完成分页的列表组件](https://duxapp.cn/docs/course/started/list)
- [主题系统](https://duxapp.cn/docs/course/app/theme)

## 开发 APP(React Native)

duxapp 还针对 APP 开发（React Native）做了大量优化，大大降低了 APP 发开的难度

Taro 的 React Native 端开发提供了两种开发方式，一种是将壳和代码分离，一种是将壳和代码合并在一起开发

duxapp 中更进一步，你不需要太关注壳子什么的，你只需要安装好安卓和 ios 的编译环境，用一个命令就能编译 apk 或者 ios，并且这个编译的过程和 duxapp 的模块化理念高度绑定，通过指定 `--app=` 指定不同的入口，就能打包出不同的项目，就像下面这样

```bash
# 编译 duxuiExample 的安卓调试版本
yarn android --app=duxuiExample

# 编译 duxuiExample 的IOS调试版本
yarn ios --app=duxuiExample

# 编译成功后启动Metro代码编译服务
yarn start --app=duxuiExample
```

我们通过模块化+配置化来解决 RN 开发

### 配置化

对于 Taro 的壳子，或者原生 React Native，都会存在 `android` `ios`这两个文件夹，而在 duxapp 中，这些文件夹的内容是自动生成的，那么对于需要在这些文件夹中修改的配置内容，例如包名、版本号、新架构开关等，都通过配置文件的方式配置了，而不需要需修改具体的文件

这个配置文件是项目配置文件夹下的 `configs/duxuiExample/duxapp.js`，其中 duxuiExample 就是我通过`--app=duxuiExample` 指定的入口模块

这个配置文件的内容就像下面这样，可以清晰的看到，对安卓配置了包名、名称、版本号等信息，IOS 同样如此

```js
const config = {
  android: {
    appid: 'com.duxapp.duxui',
    appName: 'duxUI库',
    versionCode: 2,
    versionName: '1.1.0',
    keystore: {
      storeFile: 'duxui.keystore',
      keyAlias: 'duxui',
      storePassword: 'TN62eyasJAKm2ksD',
      keyPassword: 'TN62eyasJAKm2ksD',
    },
  },
  ios: {
    BundleId: 'com.duxapp.duxui',
    appName: 'duxUI库',
    versionCode: 1,
    versionName: '1.0.0',
    team: '',
    plist: {
      'duxapp/Info.plist': {
        NSCameraUsageDescription: 'duxUI库需要拍照用于APP内图片上传更换头像',
        NSContactsUsageDescription: 'duxapp需要访问你的通讯录，将客户信息保存到通讯录中',
        NSLocalNetworkUsageDescription: 'App需要访问你的本地网络，用于和服务器建立连接',
        NSLocationAlwaysAndWhenInUseUsageDescription: '使用你的位置信息用于地图定位和位置选择',
        NSLocationAlwaysUsageDescription: '使用你的位置信息用于地图定位和位置选择',
        NSLocationWhenInUseUsageDescription: '使用你的位置信息用于地图定位和位置选择',
        NSPhotoLibraryAddUsageDescription: 'duxUI库需要保存宣传图到你的相册用于分享',
        NSPhotoLibraryUsageDescription: 'duxUI库需要访问相册用于APP内图片上传更换头像',
      },
    },
  },
}

module.exports = config
```

### 内容复制

上面这个配置文件已经解决了大部分打包需要用到的配置，但是你开发过 RN 的话你会看出来，证书他是一个文件，这里只指定了证书文件名称，但是并未指定证书具体内容，还有打包一个 app，它总是需要一个 app 图标的，包括安卓和 ios 的图标，那么这些内容，可以通过配置文件中的 copy 文件夹，将这些项目文件复制到安卓或者 ios 对应的文件位置

[查看这个文档获取更多内容复制的信息](https://duxapp.cn/blog/react-native#%E5%86%85%E5%AE%B9%E5%A4%8D%E5%88%B6)

### 三方插件

你的项目或多或少都要用一些第三方的插件，`React Native`基础模块中已经包含了很多基础常用插件，你可以通过[三方模块](http://duxapp.cn/docs/app/duxappReactNative/start#三方模块)查看到，包含的基础插件

传统的方法是将他们添加到 `package.json` 依赖中，然后根据文档内容修改安卓或者 ios 文件夹对应的内容，在 duxapp 中提供了另外一种方式来实现第三方插件的使用

像这个`react-native-view-shot`安装方式很简单的插件，他只要求你将他添加到 `package.json` 的依赖中就可以使用了

那么我们结合模块，在你需要用到这个功能的模块配置文件中，一样的添加上这个依赖即可，像下面这个`duxui`模块的配置文件一样

```json
{
  "name": "duxui",
  "description": "DUXUI库",
  "version": "1.0.42",
  "dependencies": ["duxapp"],
  "npm": {
    "dependencies": {
      "b-validate": "^1.5.3",
      "react-native-view-shot": "~3.8.0",
      "react-native-fast-shadow": "~0.1.1",
      "array-tree-filter": "^2.1.0"
    }
  }
}
```

其实开源的大多数第三方插件都是这样的，只需要添加到依赖中，重新打包就能用了，但是很少数的插件，他就是要改一些安卓或者 ios 里面的原生内容，像微信插件，它需要的改动还挺多的

你可以阅读这边文档，来了解微信插件是如何封装的 [三方模块](http://duxapp.cn/blog/react-native#%E4%B8%89%E6%96%B9%E6%A8%A1%E5%9D%97)

## 多端 UI 库

duxui 是 duxapp 官方开发的一款兼容多端的 UI 组件库，兼容小程序、H5、React Native，库中提供了 60+的组件，覆盖大部分使用场景

它能帮助你通过统一的组件样式，快速完成多端应用的开发，包括 React Native 端的 APP 开发

如果你想看到这些组件的展示效果，请根据不同的端进行查看

- 小程序  
  ![小程序](https://duxapp.cn/assets/images/weapp-be9fc343794749aa3f8469086c263007.jpg)
- APP [https://app.share.dux.plus/cn.duxapp.duxui](https://app.share.dux.plus/cn.duxapp.duxui)
- H5 [https://duxui.duxapp.cn](https://duxui.duxapp.cn)

如果你想通过项目来查看这些组件的运行效果或者组件源码，使用下面这个命令创建一个 UI 库的示例代码

```bash
npx duxapp-cli create projectName duxuiExample
```

其中的 `projectName` 是要创建的项目名称，创建之后根命令行据提示进行下一步操作

UI 库开发文档[http://duxapp.cn/docs/duxui/start](http://duxapp.cn/docs/duxui/start)
