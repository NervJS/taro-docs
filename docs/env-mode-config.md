---
title: 模式和环境变量
---

:::info
Taro v3.5.10 开始支持，之前的版本可参考 [taro-plugin-environment](https://github.com/bigmeow/taro-plugin-environment)
:::

`模式` 在 `Taro cli` 中，是用于给环境变量分组并加载其分组下的环境变量，它是一组环境变量的 `name`。
它参考了 [vue-cli 中的模式和环境变量加载方式](https://cli.vuejs.org/zh/guide/mode-and-env.html) , 所以若你之前使用过 `vue-cli`，可以更快掌握用法。

## 默认行为

默认情况下, `模式` `Taro cli` 有 2 个模式：

- `development` 模式用于开发时 `taro build --type weapp --watch`，它等价于 `taro build --type weapp --watch --mode development`
- `production` 模式用于生产时 `taro build --type weapp`， ，它等价于 `taro build --type weapp --mode production`

可以发现，默认情况下 `模式` 的值，取决于 `NODE_ENV` 的值（但是反过来说模式的值无法改变 `NODE_ENV` 的值）。

假设你有`开发`和`生产`2 个环境，你可以在项目根目录下新建两个`env`环境文件：

```
.env.development     # 在 development 模式时被载入
.env.production      # 在 production 模式时被载入
```

环境文件只包含环境变量的“键=值”对：

```
TARO_APP_API="https://api.tarojs.com"
```

:::warning 限制
请注意，只有以 `TARO_APP_` 开头的变量将通过 `webpack.DefinePlugin` 静态地嵌入到客户端侧的代码中。这是为了避免和系统内置环境变量冲突。
:::

被载入的环境变量我们可以在所有 `taro` 插件、 `config/index.ts`配置文件 以及 `src` 目录下面的项目文件中使用, 例如：

```ts
// src/service/request.ts
const request = axios.create({
  baseURL: process.env.TARO_APP_API
};
export default request
```

在构建过程中，`process.env.TARO_APP_API` 将会被相应的值所取代。在 `TARO_APP_API="https://api.tarojs.com"` 的情况下，它会被替换为 "https://api.tarojs.com"

## 自定义模式

若默认的模式满足不了需求，你可以在命令上使用参数 `--mode 模式名` 的方式来指定模式名，以加载某一组环境变量，例如：

```bash
taro build --type weapp --mode uat
```

以上命令表示在构建时会加载 `.env.uat` 文件中的环境变量.

mode 具体载入规则：

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

:::info 环境文件加载优先级

为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。

.env 环境文件是通过运行 `taro` 命令载入的，因此环境文件发生变化，你需要重启服务。
:::

## 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 `.env.local` 文件取而代之。本地环境文件默认会被忽略，且出现在 `.gitignore` 中。

`.local` 也可以加在指定模式的环境文件上，比如 `.env.development.local` 将会在 `development` 模式下被载入，且被 `git` 忽略。

## 自定义环境变量前缀

前面提到，默认只加载 `.env` 文件中以 `TARO_APP_` 前缀开头的环境变量，你可能想改成自己公司的英文名称作为前缀，`@tarojs/cli` 提供了 `--env-prefix` 参数来实现这一需求：

```sh
taro build --type weapp --mode development --env-prefix JD_APP_
```

此时 `.env` 文件中能被加载的环境变量只能是 `JD_APP_` 前缀开头的：

```
TARO_APP_API="https://api.tarojs.com"    # 不满足前缀，不加载

JD_APP_TEST="foo"                        # 满足前缀，加载
```

但是，有个特殊的环境变量不受自定义前缀配置的影响，始终会被加载，那就是 `TARO_APP_ID`。

## 特殊环境变量 `TARO_APP_ID`

:::info
Taro v3.6.9 开始支持
:::

`TARO_APP_ID` 是专门针对小程序的 `appid` 设计的，在构建输出 `dist/project.config.json` 文件前， 会将 `dist/project.config.json` 文件中的 `appid` 字段，修改为 `TARO_APP_ID` 的值。 在不同环境配置不同的小程序 `appid` 时，它特别有用，还能免去开发者在开发者工具上手动修改 `appid` 的麻烦。

![免去开发者工具修改appid](@site/static/img/update-appid.png)
