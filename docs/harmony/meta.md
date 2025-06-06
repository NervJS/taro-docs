---
title: 元服务
---

### 元服务

#### 转换为 ASCF 元服务

##### ASCF 介绍
ASCF（Application Service Component Framework）是面向鸿蒙生态的元服务开发框架，提供轻量化服务能力：
- **包体更小**：最大包体限制10MB（小程序为20MB）
- **启动更快**：毫秒级服务卡片加载
- **深度集成**：支持系统级服务卡片、语音唤醒等鸿蒙特性

##### 开发前准备
1. **注册账号**：
   - 访问 [ASCF开发者平台](https://developer.ascf.harmonyos.com) 注册账号
   - 完成企业实名认证（个人开发者仅支持测试环境）

2. **环境配置**：
   ```bash
   # 安装ASCF编译插件
   npm install @tarojs/plugin-platform-ascf --save-dev

##### 开发第一个 ASCF 元服务

1. **创建Taro项目**：
    ```bash
    taro init my-ascf-app

2. **添加元服务页面**：

```diff
export default function Index() {
  return (
    <View className="container">
      <Text>Hello ASCF 元服务!</Text>
      <Button onClick={() => ascf.navigateTo({ url: '/pages/detail' })}>
        查看详情
      </Button>
    </View>
  )
}
```

3. **启动开发模式**：
    ```bash
    taro build --type ascf --watch

##### 修改编译配置

在项目根目录创建 project.ascf.json：
```diff
{
  "appid": "YOUR_ASCF_APPID",
  "projectname": "我的元服务",
  "minPlatformVersion": "3.0.0",
  "serviceCards": [{
    "name": "mainCard",
    "src": "/pages/index"
  }]
}
```

##### 编译运行

1. **完整编译**：
    ```bash
    taro build --type ascf

 
 2. **输出目录**：   
    ```bash
    dist/ascf

##### 预览&调试
1.使用 ASCF DevTools 导入 dist/ascf 目录

2.扫码预览服务卡片效果：

3.真机调试命令：
    ```bash
    ascf debug --device YOUR_DEVICE_ID

#### 注意事项

##### 与小程序的差异

| 特性         | 小程序               |   ASCF元服务    | 说明                |
| -------------- | -----------------| --------------|------------------|
| 包体大小      | <= 20MB           |      <= 10MB    |需精简资源 |
| 启动方式      | 扫码/搜索          |    服务卡片/语音  |需配置serviceCards  |
| 路由层级      | 无限制             |    最多5级       |避免深层嵌套      |
| 全局样式      | 支持               |    部分支持       |需添加-ascf-前缀 |



##### 常见问题

1. **样式兼容问题**：
        ```bash
    .container {
        -ascf-flex-direction: column;
    }

2. **API调用差异**：
    ```diff

    // 小程序方式 (不支持)
    wx.request({...})

    // ASCF方式
    ascf.request({...})

    ```
###### 不支持云开发

当前版本无法使用微信云开发/支付宝云能力，需自建后端服务

###### 不支持插件

无法直接使用小程序插件，需重写为ASCF组件：
    ```diff
    export default function CustomPicker({ options }) {
      return (
        <ascf-picker options={options} />
     )
 }
    ```

###### 不支持独立分包
所有代码必须打包到主包中，需优化首包体积：
    ```bash
    # 分析包体积
    npx taro asc analyze --type ascf


### HarmonyOS 应用

鸿蒙与小程序

鸿蒙 Stage 模型支持使用 ArkTS 来声明式地开发 UI（ArkUI）。ArkTS 是 HarmonyOS 优选的主力应用开发语言。ArkTS 围绕应用开发 TypeScript（简称 TS）生态基础上做了进一步扩展，继承了 TS 的所有特性，是 TS 的超集。

鸿蒙 ArkUI 与小程序写法的主要异同

1.开发语言
鸿蒙的开发语言 ArkTS 在语法方面由于是 TypeScript 的超集，因此能完美兼容小程序上的 JavaScript/TypeScript 语法。

2.渲染 UI
小程序可以通过 template 模板来动态地拼接和生成页面的 UI，而鸿蒙可以通过系统提供的自定义组件来递归地渲染出页面 UI。

配置鸿蒙环境

首先要准备鸿蒙运行所需的环境，根据参考文档提示的步骤在 HUAWEI DevEco Studio 的 IDE 中完成 MyApplication 项目的创建，熟悉鸿蒙开发者工具的预览查看等功能。

1. 安装、配置 DevEco Studio

（1）登录  HarmonysOS 应用开发门户，点击右上角注册按钮，注册开发者帐号。

（2）进入  HUAWEI DevEco Studio 下载中心，点击立即下载按钮，下载最新版本的 DevEco Studio IDE。

2. 创建 Harmony 主项目

（1）创建新项目，选择需要开发的设备，根据应用配置所需的信息，点击 Finish 按钮，一个新的项目就被创建出来了。

（2）关注目录 entry/src/main/ets/pages/Index.ets 下面的文件，熟悉文件结构。pages 目录下为页面入口，新建项目的页面目录会包含若干个 .ets 文件，应用级配置信息位于 build-profile.json5，当前的模块信息 、编译信息配置项位于 entry/build-profile.json5。项目结构详情。

3. 预览 & 调试

（1）DevEco Studio 支持下述方式查看运行效果，链接到鸿蒙官网查看具体步骤

a. 使用预览器 previewer 该功能与真机效果可能存在差异，主要用于 UI 样式的预览，主要用于预览 ArkTS 侧经过 @Component 修饰的 UI 组件，在 Taro For Harmony 的开发中无法使用，可以暂时忽略。

b. 使用模拟器 使用 DevEco Studio 提供的模拟器功能，即可正常调试 Taro 打包出来的鸿蒙应用程序，除了无法使用 IDE 提供的 Profiler 来测量性能外，其余功能和真机并无太大差异，推荐没有真机的开发者优先考虑这种调试方式。

c. 使用本地真机 用户真机与电脑相连，打开开发者模式，即可在真机看到效果，这里需要注意的是，真机需要使用纯鸿蒙系统的手机，能够体验到完整的鸿蒙系统功能。

(2) DevEco Studio 真机进行调试

链接上真机后，选择好对应的入口模块，在项目代码中打上断点等信息，在编译器中启动调试即可。

