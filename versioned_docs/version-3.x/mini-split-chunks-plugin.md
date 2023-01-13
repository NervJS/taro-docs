---
title: 智能提取分包依赖
---

在开发小程序时，Taro 编译器依赖 SplitChunksPlugin 插件抽取公共文件，默认主包、分包依赖的 module 都会打包到根目录 vendors.js 文件中（有一个例外，当只有分包里面有且只有一个页面依赖 module 时，会打包到分包中依赖页面源码中），直接影响到小程序主包大小，很容易超出 2M 的限制大小。

### SplitChunks 默认配置

> 可通过 [mini.commonChunks](/docs/next/config-detail#minicommonchunks) 配置进行修改。

```json title="SplitChunks 默认配置"
{
  chunks: 'all',
  maxInitialRequests: Infinity,
  minSize: 0,
  cacheGroups: {
    common: {
      name: config.isBuildPlugin ? 'plugin/common' : 'common',
      minChunks: 2,
      priority: 1
    },
    vendors: {
      name: config.isBuildPlugin ? 'plugin/vendors' : 'vendors',
      minChunks: 2, // 当大于 2 个依赖时，才打包到 vendors.js 中
      test: module => {
        return /[\\/]node_modules[\\/]/.test(module.resource)
      },
      priority: 10
    },
    taro: {
      name: config.isBuildPlugin ? 'plugin/taro' : 'taro',
      test: module => {
        return taroBaseReg.test(module.context)
      },
      priority: 100
    }
  }
}
```

那么应该如何对分包公共依赖的进行抽取，减少主包大小呢？

### 优化思路

感谢 [@huangcj](https://github.com/huangcj99) 提交的 miniSplitChunksPlugin 插件，在打包时通过继承 SplitChunksPlugin 进行相关 module 依赖树分析，过滤出主包中无依赖但分包独自依赖的 module 提取成 sub vendor chunks，过滤出主包中无依赖但多个分包共同依赖的 module 为 sub common chunks，利用 SplitChunksPlugin 的 cacheGroup 功能，将相关分包依赖进行文件 split。抽取出的目录文件如下：

- 分包根目录/sub-vendors.(js|wxss)

  - 如果该 module 只被单个分包内的多个 page 引用，则提取到该分包根目录的 sub-vendors 文件中。

  ![sub-venders](https://img13.360buyimg.com/imagetools/jfs/t1/205404/34/21044/222198/6256e36cE62a6c078/93671ab13f3df367.png)

- 分包根目录/sub-common/\*.(js|wxss)

  - 如果该 module 被多个分包内的 page 引用，正常情况下会被提取到主包的公共模块中，这里为了保证主包的体积最优，则会先提取成一个公共模块，然后分别复制到对应分包的 sub-common 文件夹下**（因为小程序无法跨分包引入文件，所以这里需要每个分包都复制一份）**，需要注意的是，这样会导致总包的体积变大一些。

  ![sub-common](https://img12.360buyimg.com/imagetools/jfs/t1/136245/21/26437/256225/6256e36dE6a1c438f/43dfcf54cf443ca0.png)

### 使用方法

1 将 Taro 升级到 **3.3.11** 及以上版本

```shell title="升级版本"
# 使用Taro 升级命令更新CLI版本到最新版本
$ taro update self [版本号]
# 使用Taro 升级命令更新CLI版本到指定版本
$ taro update self
# 使用Taro 升级命令将项目依赖升级到与@tarojs/cli一致的版本
$ taro update project
# 使用Taro 升级命令将项目依赖升级到指定版本
$ taro update project [版本号]
```

2 修改配置文件

通过配置 [mini.optimizeMainPackage.enable](/docs/next/config-detail#minioptimizemainpackage) 为 true，即可开启智能提取分包依赖插件。

```js title="开启智能提取分包依赖"
// config/index.js
config = {
  // ...
  mini: {
    // ...
    optimizeMainPackage: {
      enable: true,
    },
  },
}
```

3 排除不想抽取的 module
如果依赖的 module 不想走分包提取逻辑，可以配置 exclude 属性，支持字符串（字符串需写文件完整绝对路径名）和函数数组，匹配到的 module 依旧按默认提取到主包中。

```js title="开启智能提取分包依赖"
// config/index.js
config = {
  // ...
  mini: {
    // ...
    optimizeMainPackage: {
      enable: true,
      exclude: [
        path.resolve(__dirname, '../src/utils/moduleName.js'),
        (module) => module.resource?.indexOf('moduleName') >= 0,
      ],
    },
  },
}
```

4.目前只支持微信小程序，默认支持 .wxss、.json、.js、.wxml、.wxs 5 种文件格式。

### 效果展示

[Demo 工程](https://github.com/NervJS/taro/tree/feat/webpack5/examples/mini-split-chunks-plugin)

```bash title="源文件工程目录"
src
├── app.config.js
├── app.js
├── app.scss
├── index.html
├── packageA // 分包 A
│   ├── common
│   │   └── index.scss // 分包 A 公共样式
│   └── pages
│       ├── cat
│       │   ├── index.config.js
│       │   ├── index.jsx // 依赖 taro-ui 和分包公共样式文件
│       │   └── index.scss
│       └── dog
│           ├── index.config.js
│           ├── index.jsx // 依赖 miniprogram-sm-crypto、 taro-ui 和分包公共样式文件
│           └── index.scss
├── packageB // 分包 B
│   └── pages
│       ├── apple
│       │   ├── index.config.js
│       │   ├── index.jsx // 依赖 miniprogram-sm-crypto
│       │   └── index.scss
│       └── banana
│           ├── index.config.js
│           ├── index.jsx
│           └── index.scss
└── pages // 主包
    └── index
        ├── index.config.js
        ├── index.jsx
        └── index.scss
```

```bash title="输出工程目录"
dist
├── app.js
├── app.js.LICENSE.txt
├── app.json
├── app.wxss
├── base.wxml
├── comp.js
├── comp.json
├── comp.wxml
├── custom-wrapper.js
├── custom-wrapper.json
├── custom-wrapper.wxml
├── packageA
│   ├── pages
│   │   ├── cat
│   │   │   ├── index.config.wxss
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   └── dog
│   │       ├── index.config.wxss
│   │       ├── index.js
│   │       ├── index.json
│   │       ├── index.wxml
│   │       └── index.wxss
│   ├── sub-common
│   │   ├── 34299ff0bdffe7d50742f6fc2ed88f06.js // miniprogram-sm-crypto 依赖模块 jsbn 源码
│   │   └── a223b12dc801f51582835c16be379976.js // miniprogram-sm-crypto 源码
│   ├── sub-vendors.js // taro-ui AtButton组件源码
│   ├── sub-vendors.js.LICENSE.txt
│   └── sub-vendors.wxss // taro-ui AtButton组件样式及分包公共样式源码
├── packageB
│   ├── pages
│   │   ├── apple
│   │   │   ├── index.config.wxss
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   └── banana
│   │       ├── index.config.wxss
│   │       ├── index.js
│   │       ├── index.json
│   │       ├── index.wxml
│   │       └── index.wxss
│   └── sub-common
│       ├── 34299ff0bdffe7d50742f6fc2ed88f06.js // miniprogram-sm-crypto 依赖模块 jsbn 源码
│       └── a223b12dc801f51582835c16be379976.js // miniprogram-sm-crypto 源码
├── pages
│   └── index
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── project.config.json
├── runtime.js
├── taro.js
├── taro.js.LICENSE.txt
├── utils.wxs
├── vendors.js // 公共JS文件
└── vendors.js.LICENSE.txt
```

### 注意事项

因为 sub-common 会在每个分包目录下分别复制一份，所以会增大小程序包整体大小，使用时需根据具体场景具体分析，采用适合自己的性能最优方案。
