---
title: 单步调测配置
---

> 通过本身 `VSCode` 提供的跨平台代码单步调测能力，能够极大提升基于 `Taro` 开发框架的应用开发速度，因其他平台已有比较成熟的工具可以使用，着重降低 Windows 平台配置复杂度。

## 一、开发环境搭建

首先准备 `Taro` 在 Windows 下的基础开发环境，详情如下(已有开发环境可略过）：

### 1. 安装 Node.js

建议安装 `16.20.0` 及以上版本，官方下载地址：[Node.js](https://nodejs.org/dist/v16.20.0/node-v16.20.0-x64.msi 'node.js')

### 2. 安装 VSCode

安装完最新 `VSCode` 后，建议安装如下插件:

- `ESlint` — 代码规范
- `TSlint` — 语法检查

### 3. Taro 源码下载

下载地址：[Taro](https://github.com/NervJS/taro.git 'Taro')，默认为 `next` 分支。

### 4. 源码依赖安装

1.使用 `VSCode` 打开 `Taro` 源码目录，在根目录下执行 `pnpm i` ，安装项目所需依赖库（首次安装所花时间较长，请耐心等待）

2.执行 `pnpm build` 编译所有模块

## 二、单步调试

### 1. 配置 VSCode 调试参数

:::note
launch.json 的详细配置请见 [VSCode 文档](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)
:::

在 VSCode 中打开 Taro 源码根目录的 **.vscode** 文件夹，编辑 **launch.json**。

修改步骤：

- 修改 `cwd` 选项为需要调试的目标工作目录
- 修改 `args` 为需要调试的命令参数

```json title="launch.json" {10-16}
{
  // ...
  "configurations": [
    //...
    {
      "type": "node",
      "request": "launch",
      "name": "CLI debug",
      "program": "${workspaceFolder}/packages/taro-cli/bin/taro",
      // "cwd": "${project absolute path}",
      // "args": [
      //   "build",
      //   "--type",
      //   "weapp",
      //   "--watch"
      // ],
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

#### 例子

##### 1) 调试 taro-build

假设需要调试 test 项目的 `taro build --weapp --watch` 命令。

可以这样配置 launch.json：

```json title="launch.json"
{
  // ...
  "configurations": [
    //...
    {
      // ...
      "cwd": "/Users/User/Desktop/test",
      "args": ["build", "--type", "weapp", "--watch"]
    }
  ]
}
```

##### 2) 调试 taro-init

假设需要调试 `taro init projectName` 命令。

可以这样配置 launch.json：

```json title="launch.json"
{
  // ...
  "configurations": [
    //...
    {
      // ...
      "cwd": "/Users/User/Desktop",
      "args": ["init", "projectName"]
    }
  ]
}
```

### 2. 编译子包

调试某一个子包时，如果希望能调试修改后的代码，请先进入对应子包的根目录开启 watch 模式编译。

例如调试 `@tarojs/mini-runner`，先进入 `packages/mini-runner/`，然后在此目录下对运行 `npm run dev`（各子包编译命令可能有所不同，详情请见各子包的 **package.json**）。这样我们就能对每次修改后的代码进行调试。

### 3.链接未发布的库

如果当前开发的子包依赖于其它子包，可以把其它子包 link 过来使用。

如果需要为当前子包增加其它子包作为依赖，可以在 Taro 源码根目录执行 `pnpm --filter=[target] add [package] [--save-dev]`，之后 pnpm 会自动创建好软链。

例如为 `@tarojs/cli` 增加 `@tarojs/webpack-runner` 作为 devDependencies：

`pnpm --filter=@tarojs/cli add "@tarojs/webpack-runner@workspace:*" --save-dev`

### 4.启动调试

按下图操作即可开始单步调试，详细调试操作可参考 VSCode 文档。

![debug](https://storage.jd.com/cjj-pub-images/WX20200602-221337.png)

:::note
目前 Taro 项目的子包一般编译都会产生 `source-map`，所以一般都能够直接在源码位置使用断点。如果某些包编译时没有开启 `source-map`，可手动开启然后提交 `Pull Requests`。
:::
