---
title: 全局配置
---

根目录下的 `app.config.js` 文件用来对小程序进行全局配置，配置项遵循**微信小程序规范**，并且对所有平台进行统一。

**注意：**

1. **Taro v3.4** 之前，`app.config.js` 里引用的 JS 文件**没有经过 Babel 编译**。(**Taro v3.4** 开始支持）
2. 多端差异化逻辑可以使用 `process.env.TARO_ENV` 变量作条件判断来实现。
3. `app.config.js` 不支持多端文件的形式，如 `app.weapp.js` 这样是不起作用的。

## defineAppConfig 宏函数

:::info
Taro v3.4+ 支持
:::

开发者可以使用**编译时宏函数** `defineAppConfig` 包裹配置对象，以获得**类型提示**和**自动补全**，如：

```ts title="app.config.ts"
export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
})
```

## 通用配置项

在 H5、React Native、所有小程序均支持的配置。

| 属性                        | 类型         | 必填 | 描述               |
| :-------------------------- | :----------- | :--- | :----------------- |
| [pages](#pages)             | String Array | 是   | 页面路径列表       |
| [window](#window)           | Object       | 否   | 全局的默认窗口表现 |
| [tabBar](#tabbar)           | Object       | 否   | 底部 tab 栏的表现  |
| [subPackages](#subpackages) | Object Array | 否   | 分包结构配置       |

### pages

用于指定小程序由哪些页面组成，每一项都对应一个页面的 `路径 + 文件名` 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的文件进行处理。

**数组的第一项代表小程序的初始页面（首页）。小程序中新增/减少页面，都需要对 pages 数组进行修改。**

如开发目录为：

    ├── app.js
    ├── app.json
    ├── app.wxss
    ├── pages
    │   │── index
    │   │   ├── index.wxml
    │   │   ├── index.js
    │   │   ├── index.json
    │   │   └── index.wxss
    │   └── logs
    │       ├── logs.wxml
    │       └── logs.js
    └── utils

则需要在入口文件配置中写

```jsx title="app.config.js"
export default {
  pages: ['pages/index/index', 'pages/logs/logs'],
}
```

### window

用于设置小程序的状态栏、导航条、标题、窗口背景色，其配置项如下。

| 属性                         | 类型                       | 默认值   | 描述                                                                                  |
| ---------------------------- | -------------------------- | -------- | ------------------------------------------------------------------------------------- |
| navigationBarBackgroundColor | HexColor（十六进制颜色值） | #000000  | 导航栏背景颜色，如 #000000                                                            |
| navigationBarTextStyle       | String                     | white    | 导航栏标题颜色，仅支持 black / white                                                  |
| navigationBarTitleText       | String                     |          | 导航栏标题文字内容                                                                    |
| navigationStyle              | String                     | default  | 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮 |
| backgroundColor              | String                     |          | 窗口的背景色                                                                          |
| backgroundTextStyle          | String                     | dark     | 下拉 loading 的样式，仅支持 dark / light                                              |
| backgroundColorTop           | String                     | #ffffff  | 顶部窗口的背景色，仅 iOS 支持                                                         |
| backgroundColorBottom        | String                     | #ffffff  | 底部窗口的背景色，仅 iOS 支持                                                         |
| enablePullDownRefresh        | boolean                    | false    | 是否开启当前页面的下拉刷新。                                                          |
| onReachBottomDistance        | Number                     | 50       | 页面上拉触底事件触发时距页面底部距离，单位为 px                                       |
| pageOrientation              | String                     | portrait | 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化                  |

#### 各端支持程度如下

| 属性                         | 微信                                | 百度                       | 字节跳动 | 支付宝 | H5  | RN  |
| ---------------------------- | ----------------------------------- | -------------------------- | -------- | ------ | --- | --- |
| navigationBarBackgroundColor | ✔️                                  | ✔️                         | ✔️       | ✔️     | ✔️  | ✔️  |
| navigationBarTextStyle       | ✔️                                  | ✔️                         | ✔️       | ✘      | ✔️  | ✔️  |
| navigationBarTitleText       | ✔️                                  | ✔️                         | ✔️       | ✔️     | ✔️  | ✔️  |
| navigationStyle              | ✔️（微信客户端 6.6.0）              | ✔️（百度 App 版本 11.1.0） | ✔️       | ✘      | ✘   | ✘   |
| backgroundColor              | ✔️                                  | ✔️                         | ✔️       | ✘      | ✘   | ✘   |
| backgroundTextStyle          | ✔️                                  | ✔️                         | ✔️       | ✘      | ✘   | ✘   |
| backgroundColorTop           | ✔️（微信客户端 6.5.16）             | ✘                          | ✔️       | ✘      | ✘   | ✘   |
| backgroundColorBottom        | ✔️（微信客户端 6.5.16）             | ✘                          | ✔️       | ✘      | ✘   | ✘   |
| enablePullDownRefresh        | ✔️                                  | ✔️                         | ✔️       | ✔️     | ✘   | ✘   |
| onReachBottomDistance        | ✔️                                  | ✔️                         | ✔️       | ✘      | ✘   | ✘   |
| pageOrientation              | ✔️ 2.4.0 (auto) / 2.5.0 (landscape) | ✘                          | ✘        | ✘      | ✘   | ✘   |

#### 代码示例

```jsx title="app.config.js"
export default {
  pages: ['pages/index/index', 'pages/logs/logs'],
  window: {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '微信接口功能演示',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
  },
}
```

### tabBar

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

其配置项如下

| 属性            | 类型                       | 必填 | 默认值 | 描述                                                     |
| --------------- | -------------------------- | ---- | ------ | -------------------------------------------------------- |
| color           | HexColor（十六进制颜色值） | 是   |        | tab 上的文字默认颜色，仅支持十六进制颜色                 |
| selectedColor   | HexColor（十六进制颜色值） | 是   |        | tab 上的文字选中时的颜色，仅支持十六进制颜色             |
| backgroundColor | HexColor（十六进制颜色值） | 是   |        | tab 的背景色，仅支持十六进制颜色                         |
| borderStyle     | String                     | 是   | black  | tabbar 上边框的颜色， 仅支持 black / white               |
| list            | Array                      | 是   |        | tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab |
| position        | String                     | 否   | bottom | tabBar 的位置，仅支持 bottom / top                       |
| custom          | Boolean                    | 否   | false  | 自定义 tabBar                                            |

其中 list 接受一个数组，只能配置最少 2 个、最多 5 个 tab。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：

| 属性             | 类型   | 必填 | 描述                                                                                                                       |
| ---------------- | ------ | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| pagePath         | String | 是   | 页面路径，必须在 pages 中先定义                                                                                            |
| text             | String | 是   | tab 上按钮文字                                                                                                             |
| iconPath         | String | 否   | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持网络图片。<br/>当 position 为 top 时，不显示 icon。         |
| selectedIconPath | String | 否   | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，不支持网络图片。<br/>当 position 为 top 时，不显示 icon。 |

#### 各端支持程度如下

| 属性            | 微信                    | 百度 | 字节跳动 | 支付宝 | H5  | RN  |
| --------------- | ----------------------- | ---- | -------- | ------ | --- | --- |
| color           | ✔️                      | ✔️   | ✔️       | ✔️     | ✔️  | ✔️  |
| selectedColor   | ✔️                      | ✔️   | ✔️       | ✔️     | ✔️  | ✔️  |
| backgroundColor | ✔️                      | ✔️   | ✔️       | ✔️     | ✔️  | ✔️  |
| borderStyle     | ✔️                      | ✔️   | ✔️       | ✘      | ✔️  | ✔️  |
| list            | ✔️                      | ✔️   | ✔️       | ✔️     | ✔️  | ✔️  |
| position        | ✔️                      | ✘    | ✔️       | ✘      | ✘   | ✘   |
| custom          | ✔️（基础库 2.5.0 以上） | ✘    | ✘        | ✘      | ✘   | ✘   |

### subPackages

> H5 和 RN 会把 `subPackages` 合入 `pages`

启用[分包加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)时，声明项目分包结构

## 小程序端特有属性

只在部分小程序中支持的属性，H5、RN 均不支持。

| 属性                                                              | 类型         | 描述                                                |
| :---------------------------------------------------------------- | :----------- | :-------------------------------------------------- |
| [networkTimeout](#networktimeout)                                 | Object       | 网络超时时间                                        |
| [debug](#debug)                                                   | Boolean      | 是否开启 debug 模式，默认关闭                       |
| [permission](#permission)                                         | Object       | 小程序接口权限相关设置                              |
| [requiredBackgroundModes](#requiredbackgroundmodes)               | String Array | 需要在后台使用的能力，如「音乐播放」                |
| [preloadRule](#preloadrule)                                       | Object       | 分包预下载规则                                      |
| [entryPagePath](#entrypagepath)                                   | String       | 小程序默认启动首页                                  |
| [workers](#workers)                                               | String       | Worker 代码放置的目录                               |
| [navigateToMiniProgramAppIdList](#navigatetominiprogramappidlist) | String Array | 需要跳转的小程序列表，详见 wx.navigateToMiniProgram |

### networkTimeout

支持情况：<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

各类网络请求的超时时间，单位均为毫秒。

| 属性          | 类型   | 必填 | 默认值 | 描述                                                                                |
| ------------- | ------ | ---- | ------ | ----------------------------------------------------------------------------------- |
| request       | Number | 否   | 60000  | [Taro.request](./apis/network/request/request) 的超时时间，单位：毫秒               |
| connectSocket | Number | 否   | 60000  | [Taro.connectSocket](./apis/network/websocket/connectSocket) 的超时时间，单位：毫秒 |
| uploadFile    | Number | 否   | 60000  | [Taro.uploadFile](./apis/network/upload/uploadFile) 的超时时间，单位：毫秒          |
| downloadFile  | Number | 否   | 60000  | [Taro.downloadFile](./apis/network/download/downloadFile) 的超时时间，单位：毫秒    |

### debug

支持情况：<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

可以在开发者工具中开启 `debug` 模式，在开发者工具的控制台面板，调试信息以 `info` 的形式给出，其信息有 `Page` 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。

### permission

支持情况： <img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

小程序[接口权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)相关设置。字段类型为 `Object`，结构为：

| 属性               | 类型             | 必填 | 默认值 | 描述             |
| ------------------ | ---------------- | ---- | ------ | ---------------- |
| scope.userLocation | PermissionObject | 否   |        | 位置相关权限声明 |

`PermissionObject` 结构：

| 属性 | 类型   | 必填 | 默认值 | 描述                                               |
| ---- | ------ | ---- | ------ | -------------------------------------------------- |
| desc | string | 是   |        | 小程序获取权限时展示的接口用途说明。最长 30 个字符 |

#### 代码示例

```js title="app.config.js"
export default {
  pages: ['pages/index/index', 'pages/logs/logs'],
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示',
    },
  },
}
```

![image](https://img10.360buyimg.com/ling/jfs/t1/132830/23/12399/20429/5f893793Ebafa6939/b5f6a390ac9bfd79.jpg)

### requiredBackgroundModes

支持情况：<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

申明需要后台运行的能力，类型为数组。目前支持以下项目：

- `audio`: 后台音乐播放
- `location`: 后台定位

#### 代码示例

```js title="app.config.js"
export default {
  pages: ['pages/index/index'],
  requiredBackgroundModes: ['audio', 'location'],
}
```

注：在此处申明了后台运行的接口，开发版和体验版上可以直接生效，正式版还需通过审核。

### preloadRule

支持情况：<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/>

声明分包预下载的规则。

- [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)
- [百度小程序文档](https://smartprogram.baidu.com/docs/develop/framework/subpackages/#%E5%88%86%E5%8C%85%E9%A2%84%E4%B8%8B%E8%BD%BD%E8%A7%84%E5%88%99)
- [抖音小程序文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/basic-reference/general-configuration)

### entryPagePath

支持情况：<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/>

指定小程序的默认启动路径（首页），常见情景是从微信聊天列表页下拉启动、小程序列表启动等。如果不填，将默认为 `pages` 列表的第一项。不支持带页面路径参数。

#### 代码示例

```js title="app.config.js"
export default {
  entryPagePath: 'pages/index/index',
}
```

### workers

支持情况：<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录。

- [微信小程序文档 - Worker](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)
- [QQ 小程序文档 - Worker](https://q.qq.com/wiki/develop/miniprogram/frame/basic_ability/basic_multiworker.html)

### navigateToMiniProgramAppIdList

支持情况：<img src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

当小程序需要使用 [Taro.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html) 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个

## 微信小程序特有属性

只在微信小程序中支持的属性。<img src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/>

| 属性                                | 类型    | 描述                                  |
| :---------------------------------- | :------ | :------------------------------------ |
| [functionalPages](#functionalpages) | Boolean | 是否启用插件功能页，默认关闭          |
| [plugins](#plugins)                 | Object  | 使用到的插件                          |
| [resizable](#resizable)             | Boolean | iPad 小程序是否支持屏幕旋转，默认关闭 |
| [usingComponents](#usingcomponents) | Object  | 全局自定义组件配置                    |
| [sitemapLocation](#sitemaplocation) | String  | 指明 sitemap.json 的位置              |
| [style](#style)                     | String  | 指定使用升级后的 weui 样式            |
| [useExtendedLib](#useextendedlib)   | Object  | 指定需要引用的扩展库                  |
| [entranceDeclare](#entrancedeclare) | Object  | 微信消息用小程序打开                  |
| [darkmode](#darkmode)               | boolean | 小程序支持 DarkMode                   |
| [themeLocation](#themelocation)     | String  | 指明 theme.json 的位置                |
| [lazyCodeLoading](#lazycodeloading) | String  | 配置自定义组件代码按需注入            |
| [singlePage](#singlepage)           | Object  | 单页模式相关配置                      |
| [renderer](#renderer)               | String  | 全局默认的渲染后端                    |

### functionalPages

> 基础库 2.1.0 开始支持

插件所有者小程序需要设置这一项来启用[插件功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages.html)。

### plugins

> 基础库 1.9.6 开始支持

声明小程序需要使用的[插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)。

### resizable

> 基础库 2.3.0 开始支持

在 iPad 上运行的小程序可以设置支持[屏幕旋转](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)。
在 PC 上运行的小程序，用户可以按照任意比例拖动窗口大小，也可以在小程序菜单中最大化窗口。

### usingComponents

> 微信开发者工具 1.02.1810190 及以上版本支持

在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。

### sitemapLocation

指明 [sitemap.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html) 的位置；默认为 `sitemap.json` 即在根目录下名字的 `sitemap.json` 文件。

### style

> 基础库 2.8.0 开始支持

微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。`app.json` 中配置 `"style": "v2"` 可表明启用新版的组件样式。

本次改动涉及的组件有 `button` `icon` `radio` `checkbox` `switch` `slider`。可前往小程序示例进行体验。

### useExtendedLib

> 基础库 2.2.1 开始支持

指定需要引用的扩展库。目前支持以下项目：

- weui: WeUI 组件库

指定后，相当于引入了对应扩展库相关的最新版本的 npm 包，同时也不占用小程序的包体积。rc 工具版本支持分包引用。用法如下：

#### 代码示例

```js title="app.config.js"
export default {
  useExtendedLib: {
    weui: true,
  },
}
```

### entranceDeclare

> 微信客户端 7.0.9 及以上版本支持，iOS 暂不支持

聊天位置消息用打车类小程序打开，[详情参考](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/location-message.html)。

#### 代码示例

```js title="app.config.js"
export default {
  entranceDeclare: {
    locationMessage: {
      path: 'pages/index/index',
      query: 'foo=bar',
    },
  },
}
```

### darkmode

> 开发者工具 1.03.2004271 及以上版本支持，基础库 2.11.0 及以上版本支持

微信 iOS 客户端 `7.0.12` 版本、Android 客户端 `7.0.13` 版本正式支持 `DarkMode`，可通过配置 `"darkmode": true` 表示当前小程序可适配 `DarkMode`，所有基础组件均会根据系统主题展示不同的默认样式，`navigation bar` 和 `tab bar` 也会根据开发者的配置自动切换。

配置后，请根据 [DarkMode 适配指南](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html)自行完成基础样式以外的适配工作。

#### 代码示例

```js title="app.config.js"
export default {
  darkmode: true,
}
```

### themeLocation

自定义 [theme.json](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-theme-json) 的路径，当配置 `"darkmode":true` 时，当前配置文件为必填项。

#### 代码示例

```js title="app.config.js"
export default {
  themeLocation: '/path/to/theme.json',
}
```

### lazyCodeLoading

> 基础库 2.11.1 及以上版本支持，2.11.1 以下兼容但无优化效果

通常情况下，在小程序启动期间，所有页面及自定义组件的代码都会进行注入，当前页面没有使用到的自定义组件和页面在注入后其实并没有被使用。

自基础库版本 `2.11.1` 起，小程序支持有选择地注入必要的代码，以降低小程序的启动时间和运行时内存。

#### 代码示例

```js title="app.config.js"
export default {
  lazyCodeLoading: 'requiredComponents',
}
```

### singlePage

> 基础库 2.11.3 及以上版本支持，目前分享到朋友圈 (Beta) 后打开会进入单页模式

单页模式相关配置：

| 属性             | 类型   | 必填 | 默认值                                                                | 描述                                                                                                                          |
| :--------------- | :----- | :--- | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| navigationBarFit | String | 否   | 默认自动调整，若原页面是自定义导航栏，则为 `float`，否则为 `squeezed` | 导航栏与页面的相交状态，值为 `float` 时表示导航栏浮在页面上，与页面相交；值为 `squeezed` 时表示页面被导航栏挤压，与页面不相交 |

### renderer

指定小程序全局的默认渲染后端。

可选值：`webview`, `skyline`

默认值：`webview`

> Taro 提供了 `Taro.getRenderer()` 方法，支持在页面 `onLoad` 生命周期中获取到当前页面的渲染引擎类型。

## 百度小程序特有属性

只在百度小程序中支持的属性。<img src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/>

| 属性                      | 类型         | 描述                     |
| :------------------------ | :----------- | :----------------------- |
| [routes](#routes)         | Array Object | 小程序自定义路由相关设置 |
| [dynamicLib](#dynamiclib) | Object       | 引入动态库               |

### routes

> 基础库 3.160.3 及以上版本支持

更多详见[自定义路由](https://smartprogram.baidu.com/docs/develop/framework/app_service_customroute/)

routes 为一个数组，数组中每一项代表一组路由规则，具体包含字段为：

| 属性 | 类型   | 必填 | 描述                                             | 示例               |
| :--- | :----- | :--- | :----------------------------------------------- | :----------------- |
| path | String | 是   | 访问路径                                         | "home"             |
| page | String | 是   | 页面源码文件路径，从小程序包根目录开始的文件路径 | "pages/home/index" |

#### 代码示例

```js title="app.config.js"
export default {
  pages: ['pages/home/home', 'pages/list/list', 'pages/detail/detail'],
  subPackage: [
    {
      root: 'packageA',
      pages: ['pages/home/home', 'pages/list/list', 'pages/detail/detail'],
    },
  ],
  routes: [
    {
      // 投放入口，scheme中的path
      path: 'home',
      // 真实的物理存储路径
      page: 'pages/home/home',
    },
    {
      path: 'list',
      page: 'pages/list/list',
    },
    {
      path: 'foo/bar',
      page: 'pages/list/list',
    },
  ],
}
```

### dynamicLib

详情请参考[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)

## QQ 小程序特有属性

只在 QQ 小程序中支持的属性。<img src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/>

| 属性                        | 类型          | 描述                       |
| :-------------------------- | :------------ | :------------------------- |
| [groupIdList](#groupidlist) | String Object | 需要打开群资料卡的群号列表 |

### groupIdList

详情请参考 [Button](https://q.qq.com/wiki/develop/miniprogram/component/form/button.html)

需使用可手动新增以下配置，补充 QQ 小程序类型

```ts title="global.d.ts"
/// <reference types="@tarojs/plugin-platform-qq/types/shims-qq" />
```

## 京东小程序特有属性

只在京东小程序中支持的属性。<img src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/>

| 属性                    | 类型   | 描述               |
| :---------------------- | :----- | :----------------- |
| [pageAlias](#pagealias) | Object | 页面 page 别名     |
| [quickMenu](#quickmenu) | Object | 胶囊按钮内菜单配置 |

### pageAlias

页面别名，可以为 `pages` 里面的页面，配置一个别名，用于打开小程序时，`path` 路径未知或者 `path` 路径过长的情况下，需要配合小程序唤起协议 `openapp` 协议使用。

#### 代码示例

```js title="app.config.js"
export default {
  pages: ['pages/index/index', 'pages/my/my'],
  window: {
    navigationBarTitleText: '京东小程序 Demo',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/my/my',
        text: '个人中心',
      },
    ],
  },
  debug: true,
  pageAlias: {
    index: 'pages/index/index',
    my: 'pages/my/my',
  },
}
```

`openapp` 示例如下:

```
openapp.jdmobile://virtual?params={"category":"jump","des":"jdmp","appId":"ao123","vapptype":"1","path":"","pageAlias":"my","param":{}}
```

上面示例将打开 `appId` 为 ao123 的 `pages/my/my` 页面。

注意: `pageAlias` 里面的页面路径，必须在 `pages` 里存在；多个别名可以对应同一个页面地址，别名不可重复。 更多 `openapp` 协议详情，可参考**打开小程序**该功能需要京东 `app` 版本 `9.3.4` 和小程序引擎 `1.10.13` 及以上支持。

### quickMenu

胶囊按钮里面的部分菜单可通过配置开关来显示隐藏，默认是 `true` 显示状态。 可配置的菜单有：

| 属性          | 类型    | 必填 | 默认值 | 说明                               |
| :------------ | :------ | :--- | :----- | :--------------------------------- |
| share         | Boolean | 否   | true   | 是否显示推送给朋友（分享）菜单     |
| favorite      | Boolean | 否   | true   | 是否显示关注菜单                   |
| sendToDesktop | Boolean | 否   | true   | 是否显示发送到桌面菜单，仅安卓有效 |

下面示例中，发送给朋友、关注、发送到桌面三个菜单将都隐藏，不会展示，示例如下：

#### 代码示例

```js title="app.config.js"
export default {
  pages: ['pages/index/index', 'pages/my/my'],
  window: {
    navigationBarTitleText: '京东小程序 Demo',
  },
  quickMenu: {
    share: false,
    favorite: false,
    sendToDesktop: false,
  },
}
```

`quickMenu` 里面的菜单，只有配置布尔值 `false` 的情况下，才能隐藏，并且如果有 API 可控制某些菜单隐藏，则 API 的优先级大于这里的配置，该配置是全局配置，仅支持在 `app.json` 中配置。

## H5 端支持的属性

| 属性                            | 类型                                         | 必填 | 默认值                             | 描述                                 | 最低版本 |
| :------------------------------ | :------------------------------------------- | :--- | :--------------------------------- | :----------------------------------- | :------- |
| [entryPagePath](#entrypagepath) | String                                       | 否   |                                    | 默认启动首页                         | 3.3.17   |
| [appId](#appId)                 | String                                       | 否   | "app"                              | 渲染页面的容器 id                    | 3.3.18   |
| [animation](#animation)         | [`RouterAnimate`](#RouterAnimate)、`boolean` | 否   | `{ "duration": 300, "delay": 50 }` | 是否开启 h5 端路由动画功能，默认开启 | 3.3.18   |

### appId

H5 渲染页面的容器 id，如果修改 Html 文件中的容器 Id，需要同步添加该配置避免编译错误。

#### 代码示例

```html title="index.html"
<!-- ··· -->
<body>
  <div id="app"></div>
</body>
<!-- ··· -->
```

```js title="app.config.js"
export default {
  appId: 'app',
}
```

### animation

指定 H5 端动画配置，可以通过覆盖 CSS 样式调整动画。

#### RouterAnimate

```ts
interface RouterAnimate {
  /**
   * 动画切换时间，单位毫秒
   * @default 300
   */
  duration?: number
  /**
   * 动画切换时间，单位毫秒
   * @default 50
   */
  delay?: number
}
```

#### 代码示例

```js title="app.config.js"
export default {
  animation: false,
}
```

## ASCF 元服务支持的属性

### ASCF支持的全局参数

这些配置需在项目的入口配置文件（如 app.config.js）中声明，以实现对ASCF元服务的适配。

| 属性          | 类型    | 必填 | 默认值 | 说明                               |
| :------------ | :------ | :--- | :----- | :--------------------------------- |
| ascfAppId     | String  | 是   | 无     | ASCF元服务的唯一应用标识，需在ASCF开发者平台申请后填写。     |
| serviceType   | String  | 是   | 无     | 元服务类型，可选值：miniprogram（小程序式元服务）、webapp（轻应用式元服务）。                   |
| enableAuth    | Boolean | 否   | false  | 是否开启ASCF的全局用户鉴权功能，需配合ASCF的API使用。 |
| apiBaseUrl    | String  | 否   | 无     | ASCF后端API的统一请求地址，用于元服务与服务器的通信。 |

#### 代码示例

```js title="app.config.js"
export default {
  pages: ['pages/index/index'],
  window: {
    navigationBarTitleText: 'Taro Demo',
  },

  ascf: {
    ascfAppId: 'ASCF_123456',      
    serviceType: 'miniprogram',    
    enableAuth: true,              
    apiBaseUrl: 'https://api.ascf.com', 
  },
};
```