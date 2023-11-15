---
title: 编写插件
---

## 快速开始

```bash
# 生成用于扩展命令行的插件模版
$ taro create plugin-name --type=plugin-command
# 生成用于扩展编译时的插件模版
$ taro create plugin-name --type=plugin-build
# 生成用于扩展自定义页面模版的插件模版
$ taro create plugin-name --type=plugin-template
```

### 代码结构

Taro 的插件都具有固定的代码结构，通常由一个函数组成，示例如下：

```typescript
export default (ctx, options) => {
  // plugin 主体
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
  ctx.onBuildFinish(() => {
    console.log('Webpack 编译结束！')
  })
  ctx.onBuildComplete(() => {
    console.log('Taro 构建完成！')
  })
}
```

插件函数可以接受两个参数：

- ctx：插件当前的运行环境信息，包含插件相关的 API、当前运行参数、辅助方法等等
- options：为插件调用时传入的参数

在插件主体代码部分可以按照自己的需求编写相应代码。

### Typings

建议使用 typescript 来编写插件，这样你就会获得很棒的智能提示，使用方式如下：

```typescript
import { IPluginContext } from '@tarojs/service'
export default (ctx: IPluginContext, pluginOpts) => {
  // 接下来使用 ctx 的时候就能获得智能提示了
  ctx.onBuildStart(() => {
    console.log('编译开始！')
  })
}
```

## 插件功能

### 命令行扩展

你可以通过编写插件来为 Taro 拓展命令行的命令，在之前版本的 Taro 中，命令行的命令是固定的，如果你要进行扩展，那你得直接修改 Taro 源码，而如今借助插件功能，你可以任意拓展 Taro 的命令行。

这个功能主要通过 `ctx.registerCommand` API 来进行实现，例如，增加一个上传的命令，将编译后的代码上传到服务器：

```typescript
export default (ctx) => {
  ctx.registerCommand({
    // 命令名
    name: 'upload',
    // 执行 taro upload --help 时输出的 options 信息
    optionsMap: {
      '--remote': '服务器地址',
    },
    // 执行 taro upload --help 时输出的使用例子的信息
    synopsisList: ['taro upload --remote xxx.xxx.xxx.xxx'],
    async fn() {
      const { remote } = ctx.runOpts
      await uploadDist()
    },
  })
}
```

将这个插件配置到中项目之后，就可以通过 `taro upload --remote xxx.xxx.xxx.xxx` 命令将编译后代码上传到目标服务器。

### 编译过程扩展

同时你也可以通过插件对代码编译过程进行拓展。

正如前面所述，针对编译过程，有 `onBuildStart`、`onBuildFinish`、`onBuildComplete` 三个钩子来分别表示编译开始，编译结束和构建完成，而除此之外也有更多 API 来对编译过程进行修改，如下：

- `ctx.onBuildStart(() => void)`，编译开始，接收一个回调函数
- `ctx.modifyWebpackChain(args: { chain: any }) => void)`，编译中修改 webpack 配置，在这个钩子中，你可以对 webpackChain 作出想要的调整，等同于配置 [`webpackChain`](./config-detail#miniwebpackchain)
- `ctx.modifyBuildAssets(args: { assets: any }) => void)`，修改编译后的结果
- `ctx.onBuildFinish(() => void)`，编译结束，接收一个回调函数。在每次 Webpack 编译后都会被触发。如果是在 watch 模式下，那么每当有文件改变触发 Webpack 编译时，都会触发 `onBuildFinish` 钩子。
- `ctx.onBuildComplete(() => void)`，构建完成，接收一个回调函数。在 Taro 构建命令结束后被触发，与 `onBuildFinish` 钩子的区别在于其只会被触发一次。

### 编译平台拓展

参考[扩展编译平台](./platform-plugin)

### 创建页面自定义模版扩展

通过 `ctx.modifyCreateTemplate(setCustomTemplateConfig:TSetCustomTemplateConfig)` 这个钩子，可以对 taro create 创建出来的页面模版进行修改。

`setCustomTemplateConfig` 是一个回调函数，其类行为：

```typescript
type TSetCustomTemplateConfig = (customTemplateConfig: TCustomTemplateInfo) => void
type TCustomTemplateInfo = {
  customTemplatePath?: string
  css: 'none' | 'sass' | 'stylus' | 'less'
  typescript?: boolean
  compiler?: 'webpack4' | 'webpack5' | 'vite'
  template?: string
}
```

只需要按照 taro 模版的格式，编写好需要的模版（模版编写参考[模版格式](./template)，静态模版与动态模版均支持），并且下载到电脑本地任意一个目录下，把该目录的绝对路径赋值给 `customTemplateConfig.customTemplatePath`，如果是动态模版，那么可以根据编写的模版的 template_creator.js，配置需要的其他参数，最后生成完整的 `customTemplateConfig` 对象，作为参数调用 `setCustomTemplateConfig` 即可。

通过运行 `taro create plugin-name --type=plugin-template` 会生成一个插件示例，可根据具体需求进行修改。

## API

通过以上内容，我们已经大致知道 Taro 插件可以实现哪些特性并且可以编写一个简单的 Taro 插件了，但是，为了能够编写更加复杂且标准的插件，我们需要了解 Taro 插件机制中的具体 API 用法。

### 插件环境变量

#### ctx.paths

包含当前执行命令的相关路径，所有的路径如下（并不是所有命令都会拥有以下所有路径）：

- `ctx.paths.appPath`，当前命令执行的目录，如果是 `build` 命令则为当前项目路径
- `ctx.paths.configPath`，当前项目配置目录，如果 `init` 命令，则没有此路径
- `ctx.paths.sourcePath`，当前项目源码路径
- `ctx.paths.outputPath`，当前项目输出代码路径
- `ctx.paths.nodeModulesPath`，当前项目所用的 node_modules 路径

#### ctx.runOpts

获取当前执行命令所带的参数，例如命令 `taro upload --remote xxx.xxx.xxx.xxx`，则 `ctx.runOpts` 值为：

```js
{
  _: ['upload'],
  options: {
    remote: 'xxx.xxx.xxx.xxx'
  },
  isHelp: false
}
```

#### ctx.helper

为包 `@tarojs/helper` 的快捷使用方式，包含其所有 API。

#### ctx.initialConfig

获取项目配置。

#### ctx.plugins

获取当前所有挂载的插件。

### 插件方法

Taro 的插件架构基于 [Tapable](https://github.com/webpack/tapable)。

#### ctx.register(hook: IHook)

注册一个可供其他插件调用的钩子，接收一个参数，即 Hook 对象。

一个 Hook 对象类型如下：

```typescript
interface IHook {
  // Hook 名字，也会作为 Hook 标识
  name: string
  // Hook 所处的 plugin id，不需要指定，Hook 挂载的时候会自动识别
  plugin: string
  // Hook 回调
  fn: Function
  before?: string
  stage?: number
}
```

通过 `ctx.register` 注册过的钩子需要通过方法 `ctx.applyPlugins` 进行触发。

我们约定，按照传入的 Hook 对象的 `name` 来区分 Hook 类型，主要为以下三类：

- 事件类型 Hook，Hook name 以 `on` 开头，如 `onStart`，这种类型的 Hook 只管触发而不关心 Hook 回调 fn 的值，Hook 的回调 fn 接收一个参数 `opts` ，为触发钩子时传入的参数
- 修改类型 Hook，Hook name 以 `modify` 开头，如 `modifyBuildAssets`，这种类型的 Hook 触发后会返回做出某项修改后的值，Hook 的回调 fn 接收两个参数 `opts` 和 `arg` ，分别为触发钩子时传入的参数和上一个回调执行的结果
- 添加类型 Hook，Hook name 以 `add` 开头，如 `addConfig`，这种类型 Hook 会将所有回调的结果组合成数组最终返回，Hook 的回调 fn 接收两个参数 `opts` 和 `arg` ，分别为触发钩子时传入的参数和上一个回调执行的结果

如果 Hook 对象的 `name` 不属于以上三类，则该 Hook 表现情况类似事件类型 Hook。

钩子回调可以是异步也可以是同步，同一个 Hook 标识下一系列回调会借助 Tapable 的 AsyncSeriesWaterfallHook 组织为异步串行任务依次执行。

#### ctx.registerMethod(arg: string | { name: string, fn?: Function }, fn?: Function)

向 `ctx` 上挂载一个方法可供其他插件直接调用。

主要调用方式：

```typescript
ctx.registerMethod('methodName')
ctx.registerMethod('methodName', () => {
  // callback
})
ctx.registerMethod({
  name: 'methodName',
})
ctx.registerMethod({
  name: 'methodName',
  fn: () => {
    // callback
  },
})
```

其中方法名必须指定，而对于回调函数则存在两种情况。

##### 指定回调函数

则直接往 `ctx` 上进行挂载方法，调用时 `ctx.methodName` 即执行 `registerMethod` 上指定的回调函数。

##### 不指定回调函数

则相当于注册了一个 `methodName` 钩子，与 `ctx.register` 注册钩子一样需要通过方法 `ctx.applyPlugins` 进行触发，而具体要执行的钩子回调则通过 `ctx.methodName` 进行指定，可以指定多个要执行的回调，最后会按照注册顺序依次执行。

内置的编译过程中的 API 如 `ctx.onBuildStart` 等均是通过这种方式注册。

#### ctx.registerCommand(hook: ICommand)

注册一个自定义命令。

```typescript
interface ICommand {
  // 命令别名
  alias?: string
  // 执行 taro <command> --help 时输出的 options 信息
  optionsMap?: {
    [key: string]: string
  }
  // 执行 taro <command> --help 时输出的使用例子的信息
  synopsisList?: string[]
}
```

使用方式：

```typescript
ctx.registerCommand({
  name: 'create',
  fn() {
    const { type, name, description } = ctx.runOpts
    const { chalk } = ctx.helper
    const { appPath } = ctx.paths
    if (typeof name !== 'string') {
      return console.log(chalk.red('请输入需要创建的页面名称'))
    }
    if (type === 'page') {
      const Page = require('../../create/page').default
      const page = new Page({
        pageName: name,
        projectDir: appPath,
        description,
      })
      page.create()
    }
  },
})
```

#### ctx.registerPlatform(hook: IPlatform)

注册一个编译平台。

```typescript
interface IFileType {
  templ: string
  style: string
  script: string
  config: string
}
interface IPlatform extends IHook {
  // 编译后文件类型
  fileType: IFileType
  // 编译时使用的配置参数名
  useConfigName: String
}
```

使用方式：

```typescript
ctx.registerPlatform({
  name: 'alipay',
  useConfigName: 'mini',
  async fn({ config }) {
    const { appPath, nodeModulesPath, outputPath } = ctx.paths
    const { npm, emptyDirectory } = ctx.helper
    emptyDirectory(outputPath)
    // 准备 miniRunner 参数
    const miniRunnerOpts = {
      ...config,
      nodeModulesPath,
      buildAdapter: config.platform,
      isBuildPlugin: false,
      globalObject: 'my',
      fileType: {
        templ: '.awml',
        style: '.acss',
        config: '.json',
        script: '.js',
      },
      isUseComponentBuildPage: false,
    }
    // build with webpack
    const miniRunner = await npm.getNpmPkg('@tarojs/mini-runner', appPath)
    await miniRunner(appPath, miniRunnerOpts)
  },
})
```

#### ctx.applyPlugins(args: string | { name: string, initialVal?: any, opts?: any })

触发注册的钩子。

传入的钩子名为 `ctx.register` 和 `ctx.registerMethod` 指定的名字。

这里值得注意的是如果是**修改类型**和**添加类型**的钩子，则拥有返回结果，否则不用关心其返回结果。

使用方式：

```typescript
ctx.applyPlugins('onStart')
const assets = await ctx.applyPlugins({
  name: 'modifyBuildAssets',
  initialVal: assets,
  opts: {
    assets,
  },
})
```

#### ctx.addPluginOptsSchema(schema: Function)

为插件入参添加校验，接受一个函数类型参数，函数入参为 joi 对象，返回值为 joi schema。

使用方式：

```typescript
ctx.addPluginOptsSchema((joi) => {
  return joi.object().keys({
    mocks: joi.object().pattern(joi.string(), joi.object()),
    port: joi.number(),
    host: joi.string(),
  })
})
```

#### ctx.writeFileToDist({ filePath: string, content: string })

向编译结果目录中写入文件，参数：

- filePath: 文件放入编译结果目录下的路径
- content: 文件内容

#### ctx.generateFrameworkInfo({ platform: string })

生成编译信息文件 .frameworkinfo，参数：

- platform: 平台名

#### ctx.generateProjectConfig({ srcConfigName: string, distConfigName: string })

根据当前项目配置，生成最终项目配置，参数：

- srcConfigName: 源码中配置名
- distConfigName: 最终生成的配置名
