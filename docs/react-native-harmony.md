---
title: OpenHarmony React Native 开发流程
---

:::tip Taro v4.0.0-beta.36+ 开始支持  
:::
// todo 具体版本待定
随着鸿蒙系统的日渐完善，鸿蒙与 React Native 进行合作，React Native 会推出对鸿蒙的适配。

## 配置鸿蒙环境

### 1.安装、配置 DevEco Studio

（1）登录  [HarmonysOS 应用开发门户](https://developer.harmonyos.com/cn/home)，点击右上角注册按钮，注册开发者帐号。

（2）进入  [HUAWEI DevEco Studio 套件货架中心](https://developer.harmonyos.com/deveco-developer-suite/)，申请白名单，由于目前最新版本的 OpenHarmony SDK 和 IDE 以及 React Native 需要的 npm 包 和 SDK 仍未对外开发，因此个人开发者若想尝鲜，需要先申请白名单成为合作伙伴后才能继续进行下面的步骤。

（3）白名单申请通过后，进入货架下载开发套件具体版本请查看**软件要求**。

（4）下载完成后，打开 IDE 安装包进行安装，安装成功后启动 DevEco Studio，根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)解压套件里附带的 SDK 压缩包，并根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)在 IDE 中配置好 SDK 的使用路径。

### 2.软件要求

(1) IDE 版本: 4.1.3.400

(2) SDK 版本: HarmonyOS S NEXT Developer Preview1

(3) Node.js 版本：V18.14.1（可使用 DevEco Studio 安装的 Node.js）

## 使用 Taro 开发鸿蒙 RN

### 1. JS 工程

#### 1.1 通过 CLI 创建 JS 工程

```bash
npx @tarojs/cli@beta init
```

#### 1.2 模版选择

选择**react-native-harmony**

#### 1.3 手动修改代码

##### 1.3.1 添加 harmony 依赖

JS 工程项目同级需要 **react-native-harmony** 、**react-native-harmony-cli** 两个目录（由于目前鸿蒙暂未开源，需跟根据环境配置所述申请白名单，下载对对应的开发套件）

##### 1.3.2 修改 metro.config.js

本修改只针对**pnpm** 包管理的开发者,对于使用**npm**、**yarn**的可发这可忽略

将 metro.config.js 中 fs.lstatSync 修改成 fs.statSync

```bash
/**node_modules/react-native-harmony/metro.config.js**/

function hasNodeModulePathHarmonyCode(nodeModulePath) {
  if (!fs.lstatSync(nodeModulePath).isDirectory()) return false;
  const nodeModuleContentNames = fs.readdirSync(nodeModulePath);
}
```

#### 1.4 运行 JS 工程

```bash
 pnpm start --reset-cache
```

#### 1.5 检查 bundle server 是否正常

可以通过在浏览器中访问 [http://localhost:8081/index.bundle?platform=harmony](http://localhost:8081/index.bundle?platform=harmony) 检查 bundle server 是否正常

### 2. 原生工程

#### 2.1 创建工程

根据**《ReactNative for OpenHarmony 开发使用指导》** 新建鸿蒙工程

#### 2.2 安装第三方依赖

| 包名                                      | 地址                                                                                                 |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| @react-native-async-storage/async-storage | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-async-storage-async-storage |
| @react-native-camera-roll/camera-roll     | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-cameraroll                  |
| @react-native-clipboard/clipboard         | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-clipboard-clipboard         |
| @react-native-community/geolocation       | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-geolocation                 |
| @react-native-community/netinfo           | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-netinfo           |
| @react-native-community/slider            | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-slider            |
| react-native-gesture-handler              | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-gesture-handler             |
| react-native-pager-view                   | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-pager-view                  |
| react-native-safe-area-context            | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-safe-area-context           |
| react-native-screens                      | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-screens                     |
| react-native-webview                      | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-webview                     |
| react-native-svg                          | https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-svg                         |

更多第三库的安装请参考 [React Native OpenHarmony](https://react-native-oh-library.gitee.io/usage-docs/#/)

#### 2.3 连接手机或模拟器

启动手机模拟器后如果没有执行 bundle 加载 需执行一下命令进行端口映射

```bash
hdc rport tcp:8081 tcp:8081
```

#### 2.4 修改 moduleName

原生工程中使用的 moduleName 需要与 config 中的 rn.appName 保持一致，如'taroDemo'

```bash
private moduleName = 'taroDemo'
```

## 常见问题

### 1.暂不支持的 api 和组件

由于**taro reactnative** 的部分**api** 和**组件**依赖了原生的支持(主要集中在 expo 类型的依赖),目前鸿蒙暂时没有提供支持，所以使用上会有报错

#### 1.1 组件

| 组件名称 | 组件描述 |
| -------- | -------- |
| Video    | 视频组件 |
| Camera   | 拍摄组件 |

#### 1.2 api

| api 名称                   | api 描述                   |
| -------------------------- | -------------------------- |
| getSetting                 | 获取设置                   |
| openSetting                | 打开设置                   |
| authorize                  | 用户授权                   |
| saveImageToPhotosAlbum     | 保存图片到系统相册         |
| downLoadFIle               | 下载                       |
| chooseVideo                | 选择视频                   |
| chooseMedia                | 选择媒体类型               |
| createCameraContext        | 创建 camera 上下文         |
| getScreenBrightness        | 获取屏幕亮度               |
| setScreenBrightness        | 设置屏幕亮度               |
| onAccelerometerChange      | 监听加速度数据             |
| offAccelerometerChange     | 取消监听加速度数据事件     |
| startAccelerometer         | 开始监听加速度数据         |
| onDeviceMotionChange       | 监听设备方向变化事件       |
| offDeviceMotionChange      | 取消监听设备方向变化事件   |
| startDeviceMotionListening | 开始监听设备方向的变化     |
| stopDeviceMotionListening  | 停止监听设备方向的变化     |
| onGyroscopeChange          | 监听陀螺仪数据变化事件     |
| offGyroscopeChange         | 取消监听陀螺仪数据变化事件 |
| startGyroscope             | 开始监听陀螺仪数据         |
| stopGyroscope              | 停止监听陀螺仪数据         |
| scanCode                   | 调起客户端扫码界面         |
| vibrateShort               | 使手机发生较短时间的振动   |
| vibrateLong                | 使手机发生较长时间的振动   |

### 2.App 启动后没有加载 bundle

端口映射没有成功

```
hdc rport tcp:8081 tcp:8081
```

### 3.第三方库未生效

会看到信息：**No harmony-specific third-party packages have been detected pnpm install** 等操作，导致 node_modules 修改被覆盖。查看**node_modules/react-native-harmony/metro.config.js** **lstatSync** 是否改成了**statSync**。
