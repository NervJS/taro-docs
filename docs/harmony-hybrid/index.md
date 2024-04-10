---
title: Harmony Hybrid
---

:::info
Taro v3.6.8+ 开始支持
:::

## 简介
@华为-漆灿，@58-刘阳

## 快速编译运行

### H5侧编译运行
@华为-漆灿

### 壳工程编译运行
@华为-漆灿

## 添加现有鸿蒙工程

### 简单集成（TaroWebContainer）
@华为-漆灿

### 多容器和容器共用集成（TaroHybrid）
@58-刘阳

## 进阶教程

### 混合路由
@58-刘阳

### 小程序内置及热更新
@58-张志新

### 扩展原生Api
@58-孔校军

### 鸿蒙折叠屏适配指导
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



