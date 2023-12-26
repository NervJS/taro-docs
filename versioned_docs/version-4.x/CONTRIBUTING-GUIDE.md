---
title: 贡献指南
---

## 贡献文档

当阅读时遇到明显的错误，开发者可以点击每篇文档最下方的 `Edit this page` 按钮，即会打开 Github 的编辑界面。开发者对文档进行编辑后，就可以提交一个 Pull Request。

如果是较复杂的修改，可以按以下步骤进行操作：

#### 1. fork & clone

1. fork [taro-docs](https://github.com/NervJS/taro-docs) 仓库
2. clone 个人仓库的 taro-docs 至本地：

```bash
git clone https://github.com/{your github name}/taro-docs.git
```

#### 2. 编译预览

```bash
$ pnpm install
$ pnpm run start
```

#### 3. 修改、新增对应文档

> 文档支持 `md` 和 `mdx` 后缀，语法详见 [Docusaurus 官网](https://docusaurus.io/docs/next/markdown-features)

1. 修改文档

进入 `docs` 目录，找到对应的文件进行编辑。（必须，对应**下个版本**的相关文档）

进入 `versioned_docs/version-3.x` 目录，找到对应的文件进行编辑。（可选，对应**3.x 版本**的相关文档。不修改则需要等待 Taro 团队更新文档版本后，才会同步到文档的 `3.x` 版本）

2. 新增文档

新增文档和修改文档类似，首先分别到 `docs` 和 `versioned_docs/version-3.x` 目录新增一个文件。然后在 `sidebars.js` 和 `versioned_sidebars/version-3.x-sidebars.json` 文件中添加上述新增文件的路径。

#### 4. 提交 Pull Request

## 贡献代码

### 环境准备

:::note
需要安装 [Node.js](https://nodejs.org/en/)（建议安装 `16.20.0` 及以上版本）及 [pnpm](https://pnpm.io/zh/installation)

各版本 pnpm 与各版本 Node.js 之间的支持情况见 [pnpm 兼容性](https://pnpm.io/zh/installation#%E5%85%BC%E5%AE%B9%E6%80%A7)
:::

首先把 Taro 仓库 fork 一份到自己的 Github，然后从个人仓库把项目 clone 到本地，项目默认是 `next` 分支。

然后依次运行以下命令：

```bash
$ pnpm install
$ pnpm run build
```

运行完上述命令后，环境已经准备好，此时可以新拉一条分支进行开发。

### 调试

#### 编译时

调试**编译时**的代码，请参考 [《单步调测》](./debug-config)。

#### 运行时

调试**运行时**的代码，一般会使用 link 的方式把需要调试的包软链到一个测试项目中后便可直接断点调试。可以根据测试项目的包管理器以及自己的喜好选择使用 [npm link](https://docs.npmjs.com/cli/v7/commands/npm-link) 或 [yarn link](https://yarnpkg.com/cli/link) 或 [pnpm link](https://pnpm.io/zh/cli/link) 。使用 pnpm link 的具体示例如下:

1. 初始化 Demo 项目，以 webpack5 + pnpm（V7.17.0） 的项目为例

```bash
$ taro init testapp
$ pnpm install
```

2. link 要调试的包，这里分两种情况：
   - 项目中直接被引用的包，如 @tarojs/components
   ```bash
   # 在Demo项目下link源代码
   pnpm link /Users/.../taro/packages/taro-components
   # 源码中增加 debugger 并开启实时编译
   pnpm --filter @tarojs/components run dev
   # 运行项目即可断点
   pnpm dev:h5
   ```
   - 被其他内部包使用的包，如 @tarojs/taro、@tarojs/runtime、@tarojs/plugin-framework-react、@tarojs/plugin-platform-weapp 被 @tarojs/webpack5-runner 使用。
     1. Demo 项目下 package.json 中新增 pnpm 配置并应用依赖。
     ```json
       "pnpm": {
         "overrides": {
           "@tarojs/runtime": "/Users/.../taro/packages/taro-runtime"
         }
       },
     ```
     ```bash
     # 应用依赖
     pnpm install
     ```
     2. 在 Demo 项目的 Taro DEV 配置文件中关闭依赖预编译，以便可以调试到实时编译的最新代码。
     ```json
       // /testapp/config/dev.js
       compiler: {
         type: "webpack5",
         prebundle: {
           enable: false,
         }
       },
     ```
     3. 源码中增加 debugger 并开启实时编译，然后运行代码即可断点
     ```bash
     pnpm --filter @tarojs/runtime run dev # taro 根目录
     pnpm dev:weapp # Demo 项目
     ```

:::note

1. 示例中使用的 `pnpm link <dir>` 也可更换为 `pnpm link --global` 的方式，详见 [pnpm link](https://pnpm.io/zh/cli/link)
2. 如果清楚包之间的调用关系，在 package.json 中新增 pnpm 配置的方式也可换为直接 link @tarojs/webpack5-runner 的方式，步骤和 link @tarojs/components 相同。其根本原因是 pnpm link 不支持递归，详见 [Feature request: pnpm link -r](https://github.com/pnpm/pnpm/issues/3026)，所以要 link 最终使用它的那个包。
   :::

### 单元测试

目前这些包配备了单元测试：

- `babel-preset-taro`
- `@tarojs/cli`
- `@tarojs/components`
- `@tarojs/react`
- `@tarojs/webpack-runner`
- `@tarojs/mini-runner`
- `@tarojs/runtime`
- `@tarojs/taro-rn`
- `@tarojs/components-rn`

开发者在修改上述包后，请务必运行 `pnpm --filter [包名] run test:ci`，检查测试用例是否都能通过。

同时，在开发一些重要功能后，也请抽时间补上对应的测试用例。

:::note
注意：`@tarojs/mini-runner`、`@tarojs/webpack-runner` 使用了 `snapshot`（测试结果快照），在修改这两个包或其它一些包时，有可能导致这些快照失效，从而通过不了测试。当你修改了这两个包、或 CI 提示这两个包的测试用例出错时，请运行 `pnpm --filter [包名] run test:ci -u` 更新 snapshot 后重新提交。
:::

### 代码风格

- `JavaScript`：遵从 [JavaScript Standard Style](https://github.com/standard/standard)，详情请看根目录的 `.eslintrc.js`。
- `TypeScript`：遵从基于 [JavaScript Standard Style](https://github.com/standard/standard) 的变种，详情请看根目录的 `.eslintrc.js` 和相关包目录下的 `tsconfig.json`。
- 样式：遵循相关包目录下的 `.stylelintrc` 风格。

### commit 规范

在输入 `commit message` 的时候请务必遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 规范。

### 文档

当提交涉及新增特性、Breaking Changes 或重要修改时，请新增、修改对应的文档。

关于文档的开发请阅读[《修改文档》](./CONTRIBUTING#修改文档)。

### 提交 Pull Request

> 如果对 PR（Pull Request）不了解，请阅读 [《About Pull Requests》](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

完成开发后，推送到自己的 Taro 仓库，就可以准备提交 Pull Request 了。

提交 PR 前请阅读以下注意事项：

1. 保证 `npm run build` 能够编译成功。
2. 保证代码能通过 ESLint 测试。
3. 当相关包含有 `npm test:ci` 命令时，必须保证所有测试用例都能够通过；
4. 当相关包有测试用例时，请给你提交的代码也添加相应的测试用例；
5. 保证 commit 信息需要遵循 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)。
6. 如果提交到代码非常多或功能复杂，可以把 PR 分成几个 commit 一起提交。我们在合并时会会根据情况 squash。
7. PR 作者可以选择加入到 Taro 开发者微信群，方便合并 PR 和技术交流。
