---
title: CLI 命令
---

常用的 Taro CLI 命令。

### 查看 Taro 所有命令及帮助

```bash
$ taro --help
```

### 环境及依赖检测

Taro 提供了命令来一键检测 Taro 环境及依赖的版本等信息，方便大家查看项目的环境及依赖，排查环境问题。在提 issue 的时候，请附上 `taro info` 打印的信息，帮助开发人员快速定位问题。

```bash
$ taro info
👽 Taro v3.0.7



  Taro CLI 3.0.7 environment info:
    System:
      OS: macOS High Sierra 10.13.6
      Shell: 5.3 - /bin/zsh
    Binaries:
      Node: 13.14.0 - ~/.nvm/versions/node/v13.14.0/bin/node
      Yarn: 1.22.4 - ~/.nvm/versions/node/v13.14.0/bin/yarn
      npm: 6.14.4 - ~/.nvm/versions/node/v13.14.0/bin/npm
    npmPackages:
      @tarojs/components: 1.3.27 => 1.3.27
      @tarojs/router: 1.3.27 => 1.3.27
      @tarojs/taro: 1.3.27 => 1.3.27
      @tarojs/taro-h5: 1.3.27 => 1.3.27
      @tarojs/webpack-runner: 1.3.27 => 1.3.27
      eslint-config-taro: 1.3.27 => 1.3.27
      eslint-plugin-taro: 1.3.27 => 1.3.27
      nerv-devtools: 1.5.5 => 1.5.5
      nervjs: 1.5.5 => 1.5.5

```

### Taro Doctor

Taro Doctor 就像一个医生一样，可以诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案。

但和真正的医生不一样，Taro Doctor 不需要排队挂号，也不用花钱。你只需要在终端运行命令：`taro doctor`，就像图里一样：

![Taro Doctor 诊断结果图](https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png)

### 快速创建新页面

Taro create --name [页面名称] --dir [路径] --subpkg [分包路径]  能够在当前项目的指定目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器。

> taro 会尝试同步修改 `app.config.js` 配置文件中的 `pages` 或者 `subPackages` 字段。

#### 例子
假设当前当前跟路径为 `/project/root`。

执行下面命令创建主包页面：
```bash
taro create newPage --dir pages/mydir
```
那么会在 `/project/root/src/pages/mydir` 目录下生成新的页面，并且在 `app.config.js` 中自动补齐 `pages` 字段。

执行下面命令创建分包页面：
```bash
taro create newPage --subpkg mysubpages
```
那么会在 `/project/root/src/mysubpages` 目录下生成新的页面，并且在 `app.config.js` 中自动补齐 `subPackages` 字段。

### 快速创建插件模版

参考 [插件编写](./plugin-custom.md)

### CLI 配置

Taro 会在用户根目录下创建 .taro 文件夹，其中 .taro/index.json 用于存放 CLI 相关配置。

开发者可以使用 `taro config` 命令对配置项进行一系列操作：

```bash
# 查看用法
$ taro config --help
# 设置配置项<key>的值为<value>
$ taro config set <key> <value>
# 读取配置项<key>
$ taro config get <key>
# 删除配置项<key>
$ taro config delete <key>
# 打印所有配置项
$ taro config list [--json]
```

### 全局插件或插件集配置

Taro 会在用户根目录下创建 .taro-global-config 文件夹，用于在执行 CLI 阶段时，如果没有获取到项目的配置文件，可以从该文件夹下读取全局的配置。

目前开发了 插件（plugins）和 插件集（presets）这两个可配置项。
有了这一配置，Taro 将支持在没有项目配置文件时，去执行一些插件。这些插件大部分是一些自定义命令类型的插件。

开发者可以使用 `taro global-config` 命令对配置项进行一系列操作：

```bash
# 查看用法
$ taro global-config --help
# 添加全局插件
$ taro global-config add-plugin [pluginName]
# 删除全局插件
$ taro global-config remove-plugin [pluginName]
# 添加全局插件集
$ taro global-config add-preset [presetName]
# 删除全局插件集
$ taro global-config remove-preset [presetName]
# 重置 .taro-global-config 文件夹
$ taro global-config reset
```

举个例子，比如有一些自定义的模版源，如果直接执行 `taro init` 命令，在每次初始化时都得传入大量的参数才得以完成项目的初始化构建。这时候开发者可以自行开发一个自定义的初始化插件，如下：

```typescript
const TEMPLATE_SOURCE = 'your template source'
export default (ctx: IPluginContext) => {
  ctx.registerCommand({
    // 命令名
    name: 'custom-init',
    optionsMap: {
      '--name': '项目名称',
      '--description': '项目描述',
    },
    // 执行 taro custom-init --help 时输出的使用例子的信息
    synopsisList: ['taro custom-init <projectName> --description <description>'],
    // 命令钩子
    async fn() {
      const name = ctx?.runOpts?._[1] || ctx?._.name
      const description = ctx?.runOpts?.options?.description
      //使用 taro cli 内部命令插件已通过此方法暴露出来
      ctx.applyCliCommandPlugin(['init'])
      ctx.applyPlugins({
        name: 'init',
        opts: {
          options: {
            typescript: true,
            templateSource: TEMPLATE_SOURCE,
            css: 'none',
            framework: 'react',
            compiler: 'webpack5',
            description: description,
            projectName: name,
          },
        },
      })
    },
  })
}
```

之后，可以把该插件作为全局插件安装，假设该插件名为 taro-custom-init，运行：

```bash
$ taro global-config add-plugin taro-custom-init
```

之后只需要运行以下命令，即可完成你的自定义 Taro 项目了：

```bash
$ taro custom-init <projectName> --description <description>
```
