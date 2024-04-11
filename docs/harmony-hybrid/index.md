---
title: Harmony Hybrid
---

:::info
Taro v3.6.8+ 开始支持
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

### 壳工程编译运行
@华为-漆灿

## 集成到现有鸿蒙工程

### 简单集成（TaroWebContainer）
@华为-漆灿

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

### 小程序内置及热更新 (待完善)
 待完善
#### 方案简介

动态下开发台吗，在不发布新版本的情况下修复`bug`和发布新功能，绕开应用商店的审核机制，避免长时间审核以及多次被拒绝造成的成本问题，缩短用户取得新版本的流程，改善用户体验。

#### 具体实现

##### 1、资源拦截并加载本地资源

在业务较为复杂的场景时，项目通常分为多个`bundle`，热更新模块能够支持更新单独某个`bundle`服务。在`web`组件的`onInterceptRequest`中，可以进行资源拦截。通过`url`解析出`path`后，通过`path`获取对应的`bundle`信息，进而构建相应的响应返回给`web`组件。`MiniRawFileDataSource.getBizByPath`可以获取本地缓存中的`bundle`信息，`MiniLocalFileDataSource.fileExist`可以根据位置判断资源是否存在。

```ts
path = path.split('#')[0]
wbLogger.debug('TaroWeb', 'intercepter path=%{public}s', path)
let biz = MiniRawFileDataSource.getBizByPath(path) //获取业务标识
const lastVerInfo = LocalUpdateManagerInstance.getLastVersionInfo(biz)
if (lastVerInfo?.diskCachePath) { // 走本地缓存
    if (!path || !MiniLocalFileDataSource.fileExist(lastVerInfo?.diskCachePath, path)) {
          return null;
     }
     wbLogger.debug('TaroWeb', 'useLocalCacheResource path=%{public}s', path)
     return MiniLocalFileDataSource.getFileOnResponseWeb(lastVerInfo?.diskCachePath, path)
 }
```

##### 入口函数--`updateMiniOnLaunch`

入口函数`updateMiniOnLaunch`接收一个`context`，首先初始化了基类`UpdateManager`，然后获取了`rawfile`目录下的文件内容，并传入到了`updateAllMini`中进行逻辑处理。

```ts
updateMiniOnLaunch(context: AppContext.UIAbilityContext) {
    this.reset(context)
    wbLogger.debug('LocalUpdateManager',`update start`);
    this.updateAllMini(context,this.miniRepository.getMiniRawList(context)).then((result: Array<LocalVersionInfo>) => {
      if (result) {
        wbLogger.debug('LocalUpdateManager',`update success ${result}`);
      }
    }).catch((error: Error) => {
      wbLogger.error('LocalUpdateManager','update Error :', error);
    })
}
```



##### 1、获取`rawfile`文件信息--`getMiniRawList`

从全局存储中拿出初始化时存储的`rawfile`文件名，根据该文件名称，获取该文件夹下所有的文件信息。

```ts
getRawMiniList(context: common.Context): Array<string>{
    let rawFile = GlobalThis.getInstance().getRawFile();
    return context.resourceManager.getRawFileListSync(rawFile);
}
```

##### 2、更新所有的资源包信息---`updateAllMini`

该函数接收一个`context`和`rawfile`文件信息，返回一个`Promise`对象。通过`rawfile`文件信息，构建`LocalVersionInfo`实例对象，该对象存储了对应文件的版本号、业务标识`biz`， 以及`rawfile`路径，将其存储到`UpdateConfig`单例的`Map`对象中，这样在资源拦截时可以从该`Map`中通过相应的业务标识获取到对应资源的信息。`rawfile`目录下的资源可能不是最新的，需要与本地缓存进行对比，如果本地缓存中没有任何资源，则需要将`rawfile`的资源复制到本地沙箱相应位置中，这样可以通过字节码优化，能提高性能。由于`rawfile`文件复制到了沙箱，这样沙箱资源一直都是最新的，所以需要更新存储在`UpdateConfig`单例的`Map`对象的资源信息。

```ts
  async updateAllMini(context: AppContext.UIAbilityContext,miniList:Array<string>) : Promise<Array<LocalVersionInfo>>{
    return new Promise((resolve, reject) => {
      let miniArray = new Array<LocalVersionInfo>()
      try {
        if (miniList) {
          for (let index = 0; index < miniList.length; index++) {
            const element = miniList[index];
            let splits = FileUtils.checkMiniFileNameFormat(element)
            let miniInfo: LocalVersionInfo | null = null
            if (splits) {
              miniInfo = new LocalVersionInfo(splits[1], splits[0],'',this.miniRepository.getRawCachePath(element))
              UpdateConfig.getInstance().setOrReplaceMiniInfo(miniInfo.biz, miniInfo)
            }
            if (miniInfo) {
              if (GlobalThis.getInstance().getDiskUpdateEnable()) {
                this.updateDiskSingleMini(context, miniInfo)
              }
              wbLogger.debug('LocalUpdateManager',`VersionInfo miniInfo:${miniInfo.localVersion},biz:${miniInfo.biz},diskCachePath:${miniInfo.diskCachePath},rawCachePath:${miniInfo.rawCachePath}`);
              miniArray.push(miniInfo)
            }
          }
          //TODO-JasonZhang 热更新接口请求
        }
        resolve(miniArray)
      } catch (err) {
        reject(err)
      }
    })
  }
  updateDiskSingleMini(context: AppContext.UIAbilityContext,versionInfo:LocalVersionInfo){
      // 获取本地最新的版本号
      let localVersionInfo = this.miniRepository.readDiskLastMiniBizInfo(context,versionInfo.biz)
      // 本地无内置版本，则迁移RawFile小程序资源到磁盘缓存目录为初始版本
      if (localVersionInfo && (localVersionInfo?.diskCachePath==''|| localVersionInfo?.localVersion < versionInfo.localVersion)) {
          let result = this.miniRepository.copyMiniRawUnzipDisk(context,versionInfo)
          if (result) {
            versionInfo.localVersion = result.localVersion
            versionInfo.diskCachePath = result.diskCachePath
          }
          wbLogger.debug('LocalUpdateManager',`copied success ${result}`);
      }else{
        versionInfo.localVersion  = localVersionInfo.localVersion
        versionInfo.diskCachePath  = localVersionInfo.diskCachePath
      }
  }
```

#### 使用说明

##### `arkts`端配置

热更新配置分为三步，首先需要配置`rawfile`内资源顶层文件夹名称，以壳工程资源为例`rawfile/spa/`，需要配置`spa`名称；其次，需要配置云端资源信息的`url`生成函数，这样当资源需要更新时可以从该地址获取相应信息；最后，启动热更新模块。

```tsx
onCreate(want: Want) {
    // ... other code
    GlobalThis.getInstance().setRawFile('spa')
    UpdateConfig.getInstance().
    LocalUpdateManagerInstance.updateMiniOnLaunch(this.context)
  }
```

###### 1、配置位置

热更新的启动位置，一般放在某个页面的`aboutToAppear`或者应用被打开时的`onCreate`中，热更新涉及有`http`请求，尽量减少热更新模块的执行。

###### 2、导入包

需要导入`LocalUpdateManagerInstance`实例，以及配置热更新模块的对象`UpdateConfig`

``` tsx
import {LocalUpdateManagerInstance, UpdateConfig} from '@ohos/web-container'
```

###### 3、热更新初始配置

在执行入口函数前，需要对热更新模块进行配置初始化。`UpdateConfig`对象可以配置四个参数，**第一个参数和第二个参数为必须配置参数，第三个和第四个参数为选配**。其中第一个参数为最新离线资源配置的地址，需要用户按照字段配置好；第二个参数为初始的版本号(可以是`rawfile`路径下资源的版本)，该版本号将会与第一个参数进行拼接，形成完成的`url`。原生端根据形成的`url`发起请求以获取服务端离线资源配置信息，服务端依据相关规则将字段返回，分两种情况，**需要更新离线资源和本地资源是最新的**。**后续的更新与该版本号无关，只与服务端最新离线资源配置相关。**

```tsx
const updateConfig = new UpdateConfig('http://127.0.0.1:8080:/apis/config?local_version=', '0')
LocalUpdateManagerInstance.setUpdateConfig(updateConfig)
```

**1、需要更新离线资源**

假设初始版本号为`0`，服务端的最新离线资源版本为`1`，则需要更新。服务端收到原生端的请求后，获取`local_version`字段进行对比，根据相关规则将字段传回原生端。服务端配置字段可以参照如下所示：

```json
{"code": 200, "message": "request OK", "data": {"mini_download_url": "http://127.0.0.1/mpharmony/mpharmony.zip", "mini_version": 1}}
```

服务端需要配置上述四个字段，其中，`data`字段中的`mini_download_url`字段表示需要下载离线资源路径，热更新模块依据这个路径进行下载最新配置。

**注意：这里的`0`只是用例，后续的更新与该版本号无关，只与服务端最新离线资源配置相关。**

**2、本地资源是最新的**

假设初始版本号为`1`，服务端的最新离线资源版本为`1`，则不需要更新。服务端收到原生端的请求后，获取`local_version`字段进行对比，根据相关规则将字段传回原生端，服务端配置字段可以参照如下所示：

```json
{"code": "300", "message": "latest version"}
```

**注意：这里的`1`只是用例，后续的更新与该版本号无关，只与服务端最新离线资源配置相关。**

###### 4、排序算法配置（选配）

此外，热更新模块会保留两个历史版本，会在下次启动时删除多余版本。此时需要对离线版本进行排序，默认支持的排序算法是`2.1.0 < 11.0.1`。用户可以自己实现排序算法用以适配不同的版本号，伪代码如下所示：

```ts
/**
 *
 * @param v1
 * @param v2
 * @returns {boolean} is v1 bigger than v2
 */

function versionCompare(v1: string, v2: string) {
    if (v1 > v2){
        return true
    }
    return false
}
```

热更新模块配置如下所示：

```tsx
const updateConfig = new UpdateConfig('http://127.0.0.1:8080:/apis/config?local_version=', '0', true, versionCompare)
LocalUpdateManagerInstance.setUpdateConfig(updateConfig)
```

第三个参数为是否开启自定义排序算法配置，默认为`false`，`false`会执行默认的排序算法

4、启动，启动热更新模块入口函数时需要传递当前页面的上下文，下载的离线资源会依据上下文存储。

```tsx
LocalUpdateManagerInstance.updateMiniOnLaunch(this.context)
```

##### `js`端配置

**注意：因为该配置实现的方法需要在原生端被调用，所以需要这些方法要在热更新模块启动前进行配置，如果放在热更新启动后，可能无法生效**

热更新模块提供了一个对象，注入到了`js`端，这样用户可以依据业务来决定是否需要更新。

注入到`js`端的方法如下所示：

```tsx
applyUpdate(){}
onCheckForUpdate(listener: (hasUpdate: boolean)=>void){}
onUpdateReady(listener: (updatedPath: string)=>void){}
onUpdateFailed(listener: ()=>void){}
```

用户可以在`js`端通过预先注入的代理对象`native`调用这些方法，用以实现相应的业务，实现例子如下所示：

```ts
const updateManager = Taro.getUpdateManager()
updateManager.onCheckForUpdate(function listener(hasUpdate: boolean){
    if (!hasUpdate){
        return
    }
    updateManager.onUpdateReady(function listener(updatedPath: string){
        updateManager.applyUpdate()
    })
})
updateManager.onUpdateFailed(function listener(){
    console.log("UpdateFailed")
})
```

该例子实现的功能是：调用原生端注入到`js`的的`getUpdateManager`方法，获取`LocalUpdateManagerInstance`实例，通过该实例调用了`onCheckForUpdate`方法，传递了一个参数`listener`，该参数为一个函数，里面包含了业务逻辑。

### 扩展原生Api
@58-孔校军

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



