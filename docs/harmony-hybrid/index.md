---
title: Harmony Hybrid
---

:::info
Taro v3.6.24+ 开始支持
:::

## 简介
@华为-漆灿
@58-刘阳 Done

Taro Harmony Hybrid容器是为让Taro小程序代码可以完整的运行在鸿蒙单内核系统里，在Taro H5平台的基础上，基于原生壳工程的jsbridge能力，扩展H5平台不支持的小程序Api能力，让Taro小程序0成本运行在鸿蒙系统。

此方案不同于Taro的Harmony原生方案，其运行时还是Webview，重点解决Api切换的问题。

![taroharmonyhybrid](@site/static/img/taroharmonyhybrid.jpg)


## 快速编译运行

### H5侧编译运行
@华为-漆灿

Taro CLI 依赖于 Node.js 环境，所以在你的机器上需要安装 Node.js 环境。请确保已具备较新的 node 环境（>=16.20.0）。当你的机器已经存在了 Node.js 环境，可以通过在终端输入命令 npm i -g `@tarojs/cli` 安装 Taro CLI。安装完毕之后，在终端输入命令 taro，如果出现类似内容就说明安装成功了：

```shell
👽 Taro v3.6.25
Usage: taro <command> [options]
Options:
  -V, --version       output the version number
  -h, --help          output usage information
```

安装好 Taro CLI 之后可以通过 taro init 命令创建一个全新的项目，你可以根据你的项目需求填写各个选项，一个最小版本的 Taro 项目会包括以下文件：

```
├── babel.config.js             # Babel 配置
├── .eslintrc.js                # ESLint 配置
├── config                      # 编译配置目录
│   ├── dev.js                  # 开发模式配置
│   ├── index.js                # 默认配置
│   └── prod.js                 # 生产模式配置
├── package.json                # Node.js manifest
├── dist                        # 打包目录
├── project.config.json         # 小程序项目配置
├── src # 源码目录
│   ├── app.config.js           # 全局配置
│   ├── app.css                 # 全局 CSS
│   ├── app.js                  # 入口组件
│   ├── index.html              # H5 入口 HTML
│   └── pages                   # 页面组件
│       └── index
│           ├── index.config.js # 页面配置
│           ├── index.css       # 页面 CSS
│           └── index.jsx       # 页面组件，如果是 Vue 项目，此文件为 index.vue
```

通过 Taro CLI 工具基于`默认模板`创建 Taro 工程，使用如下编译命令生成 harmony-hybrid 平台的 Web 资源：

```shell
# yarn
$ yarn build:harmony-hybrid
# npm script
$ npm run build:harmony-hybrid
# pnpm script
$ pnpm build:harmony-hybrid
```

生成的产物在 `dist` 目录下

### 壳工程编译运行
@华为-漆灿

Taro `harmony-hybrid` 平台产物需要结合鸿蒙壳工程一起编译运行才能实现完整的功能。`@hybrid/web-container` 三方库模块提供了鸿蒙 `TaroWebContainer` 等组件和 API，支持开发者快速构建运行环境。鸿蒙壳工程使用 `@hybrid/web-container` 模块的方式如下：

- 使用DevEco Studio开发工具（ >= 5.0.3.100 ）新建应用工程，选择Empty Ability模板，API >= 11, 其他配置使用默认值。
- 在 `entry/oh-package.json5` 文件中添加 `@hybrid/web-container` 模块的依赖并点击Sync进行同步：
```json
{
  "license": "ISC",
  "devDependencies": {},
  "name": "entry",
  "description": "演示如何使用TaroWebContainer组件",
  "version": "1.0.0",
  "dependencies": {
    "@hybrid/web-container": "2.0.0-rc.1"
  }
}
```
- 使用 `@hybrid/web-container`
```typescript
import { TaroWebContainer } from '@hybrid/web-container';
```
具体使用方式请参考下个章节：集成到现有鸿蒙工程

- 最后点击菜单 `Build` -- `Rebuild Project` 编译项目。

## 集成到现有鸿蒙工程

### 简单集成（TaroWebContainer）
@华为-漆灿

`TaroWebContainer` 组件提供加载单页面 Web 应用能力，并提供部分 Taro API 鸿蒙版本。

**使用方法：**
```typescript
// entry/src/main/ets/pages/Index.ets
import Want from '@ohos.app.ability.Want';
import Url from '@ohos.url';
import { TaroWebContainer, InjectObject, HostPageState, TaroWebController, Logger, LoggerLevel, wbLogger } from '@hybrid/web-container';
const SAMPLE_INDEX_TAG = 'SampleIndex';
@Component
struct TaroMpharmonySample {
  @State pageState: HostPageState = HostPageState.PageInit;
  @State taroWebController: TaroWebController = new TaroWebController();
  // 用户可以自定义对象注入到Web环境中，使用native.sayHello格式进行调用
  nativeObj: InjectObject = {
    sayHello: () => console.log('Hello World'),
  }
  onBackPress() {
    if (this.taroWebController.accessBackward()) {
      this.taroWebController.backward();
      return true;
    }
    return false;
  }
  aboutToAppear() {
    Logger.setLogLevel(LoggerLevel.LOG_DEBUG);
  }
  onPageShow() {
    this.pageState = HostPageState.PageOnShow;
  }
  onPageHide() {
    this.pageState = HostPageState.PageOnHide;
  }
  webUrl(): string {
    // 开发阶段可以把网站静态资源文件放置到src/main/resources/rawfile/目录下
    // 生产环境下可以把部分网页静态资源放置到web服务器, 这里填写实际的网站地址url
    return 'resource://rawfile/index.html';
  }
  webUrlPrefix() {
    try {
        const url = Url.URL.parseURL(this.webUrl());
        return `${url.protocol}//${url.host}/`;
    } catch (err) {
        wbLogger.error(SAMPLE_INDEX_TAG, `Invalid webUrl: ${this.webUrl()}`);
        return '';
    }
  }
  build() {
    Column() {
      TaroWebContainer({
        pageState: this.pageState, // 页面状态同步到组件
        webUrl: this.webUrl(), // 初始Url
        webUrlPrefix: this.webUrlPrefix(),
        useCache: true,
        taroWebController: this.taroWebController,
        isFullScreen: true, // 是否全屏显示
        injectObj: this.nativeObj, // 注入对象
      })
        .width('100%')
        .height('100%')
    }
  }
}
```

**构造参数说明：**

| 参数名称              | 类型                | 描述                                                    | 必填                    |
|-------------------|-------------------|-------------------------------------------------------|-----------------------|
| taroWebController | TaroWebController | TaroWebContainer组件的控制器                                | 是                     |
| webUrl            | string            | 资源入口url                                               | 是                     |
| webUrlPrefix      | string            | 资源入口url的前缀，一般是 `${webUrl.protocol}://${webUrl.host}/` | 是                     |
| pageState         | HostPageState     | 传递页面状态                                                | 是                     |
| useCache          | boolean           | 是否优先使用应用内置的Web资源                                      | 否，默认值： true           |
| want              | Want              | 传递EntryAbility中`onCreate`和`onNewWant`保存的want信息        | 否，默认值： { }            |
| isFullScreen      | boolean           | 是否全屏显示应用                                              | 否，默认值： true           |
| injectObj         | ESObject          | 注入ets对象到Web环境                                         | 否：默认值：undefined       |
| showCapsule       | boolean           | 是否显示胶囊按钮                                              | 否：默认值：true            |
| capsulePage       | string            | 点击胶囊按钮跳转的页面                                           | 否：默认值：`pages/Capsule` |
| enableWebDebug    | boolean           | [开启Web调试功能][Web调试devtools配置]                          | 否：默认值：true            |
| navigationInitVisible | boolean       | 控制导航栏初始显示状态                                          | 否：默认值：true            |


### 多容器和容器共用集成（TaroHybrid）
@58-刘阳 Done

**使用方法：**
```typescript
// windowStage.loadContent里初始化 和 预加载
windowStage.loadContent('xxx', storage, (err, data) => {
    // 全局初始化
    TaroHybridManager.init({
        uiAbilityContex: this.context,
        domain: 'https://customer.domain.com', // 小程序的域名，注意：此处不添加/结尾
        injectNativeMethod: (uiAbilityContext: common.UIAbilityContext) => { // 扩展原生API
            ...
        }
    })
    // 预加载，可选，不是必须
    TaroHybridManager.preLoader(
        windowStage.getMainWindowSync().getUIContext(),
        "/xx/index.html", // html的path路由
        "/pages/index/index" // Taro小程序的Page路径
    )
})

// 创建TaroHybrid页面（例子是基于Entry实现）
export interface TaroHybridRouterParams {
    indexHtmlPath: string,
    taroPath: string
}
export const RouterToTaroHybrid = (params: TaroHybridRouterParams) => {
    // 跳转之前先加载url，目的是为了提升新页面的打开速度
    TaroHybridManager.loadUrl(params.indexHtmlPath, params.taroPath);

    setTimeout(()=>{
        router.pushUrl({
            url: 'xxx/TaroHybridPage', // 鸿蒙原生Page的路径，不是Taro小程序的Page
            params: params
        }, router.RouterMode.Standard)
    }, 200)
}

@Entry
@Component
struct TaroHybridPage {
  @State pageState: HostPageState = HostPageState.PageInit;
  private indexHtmlPath: string = (router.getParams() as TaroHybridRouterParams).indexHtmlPath
  private taroPath: string = (router.getParams() as TaroHybridRouterParams).taroPath

  onPageShow(): void {
    this.pageState = HostPageState.PageOnShow
  }
  onPageHide(): void {
    this.pageState = HostPageState.PageOnHide
  }
  onBackPress(): boolean | void {
    const instance = TaroHybridManager.getCoreInstance(this.indexHtmlPath)
    if (!instance) {
      return false;
    }
    return TaroHybridManager.onBack(instance.builderData.taroWebController)
  }

  build() {
    Stack({alignContent: Alignment.TopStart}){
      SafeArea(){
        TaroHybrid({
          indexHtmlPath: this.indexHtmlPath,
          taroPath: this.taroPath,
          pageState: this.pageState
        })
      }
    }
  }
}

```

**TaroHybrid的设计思路：** 
1. 多容器的判断依据：html的Path路径为判断依赖，相同则共用，不同则新建载体页
2. 容器共用的思路：通过鸿蒙的NodeContainer + NodeController实现
3. 注意：
   1. 容器共用存在一个问题：相邻两个原生Page之间如何共用容器，页面切换动画时，会有一个页面白屏，进入和退出时都会出现，尽量避免相邻两个原生Page之间共用容器。

## 进阶教程

### 混合路由
@58-刘阳 Done

在原生与TaroHybrid混合鸿蒙应用中，如果使用了容器共用，用户的路由栈会比较复杂，当在Taro Hybrid页面时，用户使用原生的物理返回时，需要区分是Web容器的返回，还是原生的返回。

TaroHybrid组件已经解决了此问题，其思路为：
1. 原生跳转打开的taro页面，添加query参数from=native
2. 原生的onBackPress逻辑里，获取当前url，判断有没有参数from=native，如果有则走原生路由返回，如果没有则走Web组件的backward逻辑

```typescript
static onBack(taroWebController: TaroWebController): boolean {
    let curUrl = taroWebController.webController.getUrl();

    if (curUrl?.endsWith('?from=native')) {  //web回退到原生
      // Web先返回
      if (taroWebController.accessBackward()) {
        setTimeout(()=>{
          taroWebController.backward();
        }, 200)
      }
      // 回退到原生
      return false;
    }
    if (taroWebController?.accessBackward()) { // web回退
      taroWebController?.backward();
      // 保留在当前Web页面
      return true;
    }
    // 回退到原生
    return false;
  }
```

### 小程序内置及热更新
@58-张志新

### 扩展原生Api

当Taro API不满足业务需求时，可以扩展原生API，实现小程序端调用原生功能。先由原生部分实现JSBridge方法，再由小程序部分注册该方法并调用。

#### 原生部分

##### 定义InjectObject

示例代码如下：

```typescript

interface LoginOptions {
  username: string
  password: string
  success: (t: string | null | undefined) => void
  error: (error: BusinessError<LoginResultBean>) => void
}

export const nativeObj:InjectObject = {
  customLogin:(options: LoginOptions) => {
    // 登录...
    options.success("xxx")
  }
}
```

##### 初始化注入InjectObject

```typescript
TaroHybridManager.init({
        uiAbilityContex: this.context,
        domain: 'https://xxx.xxx.com',  // 注意：此处不添加/结尾
        injectNativeMethod: (uiAbilityContext: common.UIAbilityContext) => {
          return nativeObj
        }
      })
```

##### 注意事项

1. 扩展的方法中只能定义一个参数，上面的例子中我们定义LoginOptions接口来封装全部参数。
2. 扩展的方法参数中只要最上层可以包含方法，嵌套的对象中不能包含方法，上面的例子中LoginOptions中包含了success和error方法，如果把success和error方法放到一个单独的Callback interface中就不可行了。

#### 小程序部分

##### 方法声明

通过@window.MethodChannel.jsBridgeMode装饰器声明方法，具体代码如下：

```typescript
// @proxyClassSign('')
class NativeApi {

  // @ts-ignore
  @window.MethodChannel.jsBridgeMode({ isAsync: true, autoRelease: true })
  customLogin (option: any) {
    return option//这里固定返回option即可
  }
}

const native = new NativeApi()

export default native
```

参数说明：

isAsync：如果参数option中定义了回调方法则为true，否则为false
autoRelease：如果option中有回调方法且回调方法可能会调用多次则设置为false，否则就为true

##### 方法调用

```typescript

import { native } from './NativeApi';

native.customLogin({
  username: 'xxx',
  password: 'xxx',
  success: () => {
    console.log('Login success!')
  },
  error: (e) => {
    console.error('Login error.', e)
  }
})

```

### 鸿蒙一多适配指导

#### 鸿蒙折叠屏适配指导
@58-刘阳 Done

默认情况下，设计尺寸是750px，Taro适配不同手机分辨率的方式是等比缩放，在鸿蒙折叠屏展开的状态下，等比放大的效果不满足华为应用商店上架要求。

**建议的适配方案：**
1. 最大放大比例不超过1.2倍
2. 宽度不基于750px来布局，基于flex自适应

最大放大比例不超过1.1倍的配置：
```javascript
// 修改config/index.js
export default defineConfig(async (merge, { command, mode }) => {
  const baseConfig = {
    // ....
    h5: {
      // ....
      postcss: {
        pxtransform: {
          enable: true,
          config: {
            baseFontSize: 20,
            maxRootSize: 24, // 最大不超过1.2倍
            minRootSize: 10, // 最小不超过0.5倍
          }
        },
        // ....
      }
    },
    // ....
  }
  // ....
})
```


### 沉浸式适配指导
@58-刘阳 Done

[鸿蒙官方适配指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/arkts-develop-apply-immersive-effects-0000001820435461-V5#section231547103814)提供了两个种方案：窗口全屏布局方案 及 组件安全区方案

建议使用“窗口全屏布局方案”，默认全屏模式，再处理状态栏及导航条的避让。

**全屏模式下的状态样的避让：** 通过原生创建一个SafeArea组件实现，而不通过JS实现
```typescript
// 在UIAbility里，全局保存状态栏的安全高度
const systemAvoidArea = windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
const topRectHeight = systemAvoidArea.topRect.height
AppStorage.setOrCreate('topRectHeight', `${topRectHeight}px`);

// 自定义SafeArea组件
@Component
export struct SafeArea {
  @StorageProp('topRectHeight') topRectHeight: string = '0px'

  @BuilderParam child: ()=>void

  build() {
    Column() {
       Row()
         .width('100%')
         .height(this.topRectHeight)
         .backgroundColor(0xFFFFFF)
      Column(){
        this.child()
      }
      .width('100%')
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
  }
}

// Taro Hybrid的布局
@Entry
@Component
struct TaroHybridPage {
  build() {
    Stack(){
      SafeArea(){
        TaroHybrid()
      }
    }
  }
}
```

**全屏模式下的导航条的避让：** 通过鸿蒙Web组件支持安全边界，给H5的底部bar设置margin
```css
padding-bottom: env( safe-area-inset-bottom);
```

`注意：` 支持安全区域的鸿蒙单内核系统暂未发布


### 访问控制权限二次弹窗指导
@华为-漆灿

### 性能优化：同步调用走缓存
taro的NativeApi，是taro暴露给鸿蒙实现的原生方法。使得Taro具备调用原生的能力。

对于NativeApi中的同步方法，每次调用都要执行原生代码逻辑，频繁调用必然导致系统开销增加和耗时增加。所以taro内部对同步方法增加了缓存机制。比如"getSystemSetting"、"getWindowInfo"等。
如果应用层想扩展，对额外的同步方法使用缓存机制以提高执行效率，则可以通过如下步骤扩展使用缓存的方法：

#### 明确使用缓存的方法名
```
let list = new ArrayList<string>();
list.add("youMethodName1")
list.add("youMethodName2")

TaroHybridManager.setCacheSyncMethods(list)
```

list是一个方法名的列表，用于标识哪些NativeApi中的方法使用缓存。这里的youMethodName1、youMethodName2为要使用缓存的方法名。

#### 监听数据变化更新缓存
同步方法使用缓存机制可以极大加快api响应速度，但是需要及时更新缓存中的数据。开发者需要在合适的时机监听数据变化，并通过如下方法更新数据


```
nativeUpdater.update(p: NativeApiPair, v?: any)
```
举例说明：

1. youMethodName1方法执行全量数据更新（无入参的情况）：

```
nativeUpdater.update(new NativeApiPair("YouMethodName1",[]))
```


2. youMethodName1方法执行全量数据更新（有入参的情况）：

```
nativeUpdater.update(new NativeApiPair("youMethodName1",["param1",123]))
```
3. youMethodName1方法执行局部数据更新（仅更新其中某个字段：myField）：

```
nativeUpdater.update(new NativeApiPair("youMethodName1",["param1",123],"myField"),"newData")
```
#### 注意
1. 使用缓存机制的方法，必须是同步方法。
2. 使用缓存机制的方法，在数据发生变化时必须及时更新缓存，并且对数据发生变化的场景做全方位覆盖。否则会带来获取到的数据不是最新的问题。


### Taro.request请求方式选择（原生/js）
@华为-漆灿

### 同层渲染
@华为-漆灿

`@hybrid/web-container` 提供 `sameLayerManager.registerNativeComponentBuilders` 方法来注册同层渲染组件。

**参数说明：**

| 参数名称       | 类型                                               | 描述                  | 必填                |
|---------------|----------------------------------------------------|----------------------|---------------------|
| componentName | string | 对应embed标签type属性，去掉 `native/` 前缀                         | 是                  |
| builder       | (...args: ESObject[]) => void | 使用 `@Builder` 注解的原生组件builder函数   | 是                  |


**使用方法：**
- 壳工程中，注册自定义组件：

```typescript
import { sameLayerManager } from '@hybrid/web-container'

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    sameLayerManager.registerNativeComponentBuilders('hos-video', NativeVideoBuilder)
  }
  // ...
}

```
- Video 自定义组件实现参考

```typescript
import { sameLayerManager } from '@hybrid/web-container';

@Observed
export class VideoParams {
  width: number // 组件宽度
  height: number // 组件高度
  componentId: string // 组件ID
  src: string // 要播放视频的资源地址
  controls?: boolean // 是否显示播放控件
  muted?: boolean // 是否静音
  loop?: boolean
  autoPlay?: boolean
  onPlay?: (res?: string) => void
  onPause?: (res?: string) => void

  constructor() {
    this.width = 0;
    this.height = 0;
    this.componentId = '';
    this.src = '';
  }
}

@Component
export struct NativeVideo {
  @ObjectLink params: VideoParams
  videoController: VideoController = new VideoController();

  build() {
    Column() {
      Video({
        src: this.params.src,
        controller: this.videoController
      })
        .objectFit(ImageFit.Fill)
        .autoPlay(this.params.autoPlay ?? true)
        .muted(this.params.muted ?? false)
        .loop(this.params.loop ?? false)
        .controls(this.params.controls ?? true)
        .onClick((event) => {
          console.log('NativeEmbed video onClick.')
        })
        .onStart(() => {
          console.log('NativeEmbed video onPlay.', this.params.height)
          const callJsOnPlay: Function | undefined = (sameLayerManager.getSameLayerArgs(this.params.componentId) as VideoParams)?.onPlay
          callJsOnPlay && callJsOnPlay('Native Video playing.')
        })
        .onPause(() => {
          console.log('NativeEmbed video onPause.')
          const callJsOnPause: Function | undefined = (sameLayerManager.getSameLayerArgs(this.params.componentId) as VideoParams)?.onPause
          callJsOnPause && callJsOnPause('Native Video paused.')
        })
    }
    .width(this.params.width)
    .height(this.params.height)
  }
}

@Builder
export function NativeVideoBuilder(params: VideoParams) {
  NativeVideo({ params: params })
    .backgroundColor(Color.Green)
}

```

- 前端代码中，使用 `react` 框架实现的代码如下：
```typescript
import React from 'react'
import classNames from 'classnames'

import './index.scss'

let videoId = 0

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  controls?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  onPlay?: (res: any) => void
  onPause?: (res: any) => void
}

export default class HosVideo extends React.Component<IProps> {
  private componentId: string

  constructor (props: IProps | Readonly<IProps>) {
    super(props)
    this.componentId = `video_${videoId++}`
  }

  componentDidMount () {
    this.transferVideoProps()
  }

  componentDidUpdate (_prevProps: IProps, _prevState: any) {
    // 组件更新时重新传输数据
    this.transferVideoProps()
  }  

  transferVideoProps () {
    // 同层渲染video组件数据
    const {  
      src,  
      controls,  
      autoplay,  
      loop,  
      muted,  
      onPlay,  
      onPause  
    } = this.props 
  
    const properties = {
      componentId: this.componentId,
      src: src,
      controls: controls,
      autoPlay: autoplay,
      loop: loop,
      muted: muted,
      onPlay: onPlay,
      onPause: onPause
    }
  
    // @ts-ignore  调用JSB方法传递原生组件数据
    window.JSBridge && window.JSBridge.transferSameLayerArgs(properties)
  }

  render () {
    const {
      style,
      className
    } = this.props

    return (
      <div style={style} className={className ? className : classNames('taro-video-container')}>
        <embed className='taro-video-video' id={this.componentId} type='native/hos-video'/>
      </div>
    )
  } 
}
```


## FAQ

### 原生导航条影响Fixed布局
@58-刘阳：Done

**原因：** Web容器与原生导航栏之间是层叠布局，为了不影响H5页面的内容展示，Taro Harmony给每个Page设置了一个padding-top值，其值来自原生注入的一个变量

```typescript
// Web组件加载时，原生会给js侧注入的代码：
var navigationHeight = ${this.navigationBarHeight};

// 使用方法
window.navigationHeight
```

当存在原生导航栏时，fixed布局需要添加一个top值，其值为window.navigationHeight

[Web调试devtools配置]: https://gitee.com/openharmony/docs/blob/master/zh-cn/application-dev/web/web-debugging-with-devtools.md