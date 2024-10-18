---
title: 安装及使用
---

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

## 安装

Taro 项目基于 node，请确保已具备较新的 node 环境（>=16.20.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

### CLI 工具安装

首先，你需要使用 npm 或者 yarn 全局安装 `@tarojs/cli`，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

<Tabs
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'yarn', value: 'yarn'},
{label: 'pnpm', value: 'pnpm'}
]}>
<TabItem value="npm">

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
```

</TabItem>

<TabItem value="yarn">

```bash
# 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
```

</TabItem>

<TabItem value="pnpm">

```bash
# 使用 pnpm 安装 CLI
$ pnpm install -g @tarojs/cli
```

</TabItem>
</Tabs>

:::caution 请注意
由于 Taro 部分能力使用 Rust 开发，在 Windows 上，请确保安装了 Microsoft Visual C++ Redistributable。请查看：https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist

:::

#### 查看 Taro 全部版本信息

可以使用 `npm info` 查看 Taro 版本信息，在这里你可以看到当前最新版本

```bash
npm info @tarojs/cli
```

![npm info @tarojs/cli screenshot](https://img13.360buyimg.com/ling/jfs/t1/144770/7/20011/138415/5fe40491Ed0883578/11236962a3e672db.png)

由图第 1 行可知最新版本，如果你用的是 beta 或者 canary 你可以通过 `dist-tags:` 下面那行看到最新的版本。

## 项目初始化

使用命令创建模板项目：

```bash
$ taro init myApp
```

$ npx taro build --type kwai --watch
$ npx taro build --type kwai

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type kwai --watch # CMD
$ NODE_ENV=production taro build --type kwai --watch # Bash
```

#### 小程序开发者工具

下载并打开[快手小程序开发者工具](https://mp.kuaishou.com/docs/develop/guide/introduction.html)，然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。

### H5

#### 编译命令

```bash
# yarn
$ yarn dev:h5
$ yarn build:h5

# npm script
$ npm run dev:h5
$ npm run build:h5

# 仅限全局安装
$ taro build --type h5 --watch
$ taro build --type h5

# npx 用户也可以使用
$ npx taro build --type h5 --watch
$ npx taro build --type h5
```

### React Native

> Taro v3.2+ 开始支持

请参考 [React Native 端开发流程](./react-native)

### Harmony-hybrid

> Taro v3.6.24+ 开始支持

#### 编译命令

```bash
# yarn
$ yarn dev:harmony-hybrid
$ yarn build:harmony-hybrid

# npm script
$ npm run dev:harmony-hybrid
$ npm run build:harmony-hybrid

# 仅限全局安装
$ taro build --type harmony-hybrid --watch
$ taro build --type harmony-hybrid

# npx 用户也可以使用
$ npx taro build --type harmony-hybrid --watch
$ npx taro build --type harmony-hybrid
```

#### DevEco Studio 鸿蒙应用开发工具

下载并使用 DeEco Studio NEXT Developer Preview1（通过 [HarmonyOS NEXT 开发者预览版 Beta 招募](https://developer.huawei.com/consumer/cn/activityDetail/harmonyos-next-preview/) 申请获的）新建应用工程，并进行如下配置：

- 在 `oh-package.json5` 文件中配置 `dependencies`, 引入 `@hybrid/web-container` 模块。
- 在 `src/main/module.json5` 文件中增加权限配置，如：

```js
{
  requestPermissions: [
    {
      name: 'ohos.permission.INTERNET',
    },
  ]
}
```

- 把 Taro 项目目录下的 `dist` 目录的编译产物复制到鸿蒙应用的 `src/main/resources/rawfile` 目录下，编译运行鸿蒙应用进行开发调试。

## 渐进式入门教程

我们提供了一个由浅入深的实战教程，请参考[《教程》](./guide)。

## 常见问题

### 保持 CLI 的版本与各端依赖版本一致

在使用 Taro 进行多端开发中，请保持 Taro CLI 的版本与你项目的依赖版本一致，否则可能会出现编译错误或者运行时错误。

如果发现不一致的情况可以使用 Taro 升级命令 taro update self [版本号] 和 taro update project [版本号]来分别将 CLI 和项目依赖升级到指定版本；
或者也可以手动安装相应版本 CLI，修改 package.json 依赖版本号，然后重装依赖来解决。

```bash
# 使用Taro 升级命令更新CLI版本到最新版本
$ taro update self
# 使用Taro 升级命令更新CLI版本到指定版本
$ taro update self [版本号]
# 使用Taro 升级命令将项目依赖升级到与@tarojs/cli一致的版本
$ taro update project
# 使用Taro 升级命令将项目依赖升级到指定版本
$ taro update project [版本号]
```

如果你所使用的 Taro CLI 版本为 3.0.9，而项目里使用的依赖版本为 3.0.10，则有可能会出现问题，这时请将你的 Taro CLI 版本更新至项目依赖版本号相同的版本，如果还是出现问题，请向我们提出 [Issue](https://nervjs.github.io/taro-issue-helper/)。

### Taro 多版本共存问题

很多开发者曾经使用 Taro 旧版本开发过项目，已经在全局安装了 Taro，但是想同时体验到 Taro 3，应该如何进行操作？

我们提供了两种思路：

- 如果是需要新创建 Taro 3 项目，可以使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，通过安装不同 node 版本来安装不同版本的 Taro CLI，从而解决 Taro 多版本共存的问题
- 如果是部分已有项目需要升级到 Taro 3，可以在这些项目本地安装相应版本的 Taro CLI，这样通过 `yarn` 或者 `npm` 执行命令的话就会直接使用本地安装的 Taro CLI，安装方式 `yarn add @tarojs/cli`

### 回到某个版本

需要安装某个固定版本，或者回到某个版本，例如我们要安装 `1.3.9` ， 则如下：

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli@1.3.9
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli@1.3.9
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli@1.3.9
```
