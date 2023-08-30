---
title: 使用 Tailwind CSS
---

`Tailwind CSS` 是目前世界上**最**流行的原子化 `CSS` 框架。它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样语义化的类名。我们开发者能直接在各种脚本标记语言中编写它们，并把它们组合起来，构建出任何的设计。

同时自从 `3.x` 大版本开始，`Tailwind CSS` 把引擎升级为 `Just in Time(jit)`。这使得我们能够编写代码的同时，实时生成各种 `CSS`，真正的做到了所写即所得。比如我们能够编写 `pt-[19.5px]`, `text-[#123456]` ，`bg-[url('/img/hero-pattern.svg')]` 这样的语义化的类名，它们生成的`CSS`结果一目了然。

所以，熟悉 `Tailwind CSS` 之后，可以大幅度的加快我们应用的开发速度，提升代码的可维护性，接下来让我们看看如何在 `tarojs` 应用中使用它吧。

## 安装与配置 tailwindcss

首先我们要把 `tailwindcss` 安装和配置好。这里我们参考 `tailwindcss` 官网中，`postcss` 的使用方式进行安装 ([参考链接](https://tailwindcss.com/docs/installation/using-postcss))：

### 1. 使用包管理器安装 `tailwindcss`

```bash
# 使用你喜欢的宝管理器 npm / yarn / pnpm
npm install -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
```

:::info
`tailwindcss` 最新版本(`3.x`)对应的 `postcss` 大版本为 `8`，其中 `tarojs` 里已经内置了 `postcss` 和 `autoprefixer` 了。
:::

### 2. 创建 `postcss.config.js` 并注册 `tailwindcss`

```js
// postcss.config.js
// postcss 插件是 object 方式注册的话，是按照由上到下的顺序执行的，相关实现见 postcss-load-config
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. 配置 `tailwind.config.js`

`tailwind.config.js` 是 `tailwindcss` 的配置文件，我们可以在里面配置 `tailwindcss` 的各种行为。[配置项 link](https://tailwindcss.com/docs/configuration)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里给出了一份 taro 通用示例，具体要根据你自己项目的目录结构进行配置
  // 比如你使用 vue3 项目，你就需要把 vue 这个格式也包括进来
  // 不在 content glob表达式中包括的文件，在里面编写tailwindcss class，是不会生成对应的css工具类的
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  // 其他配置项 ...
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
    preflight: false,
  },
}
```

### 4. 引入 `tailwindcss`

在你的项目入口文件里引入 `tailwindcss`，比如 `taro app` 的 `app.scss`

```scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
// 不使用 sass 就这么写
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
```

然后在 `app.ts` 里引入这个样式文件即可。这样 `tailwindcss` 的安装与配置就完成了，接下来让我们进入第二个环节：配置 `rem` 单位转化。

## rem 转 rpx (或 px)

### 为什么要配置这一步呢？

这是因为 `tailwindcss` 里面工具类的长度单位，默认都是 `rem`，比如:

```css
.m-4 {
  margin: 1rem;
}
.h-4 {
  height: 1rem;
}
/*......*/
```

`rem`这个单位在 `h5` 环境下自适应良好。但小程序环境下，我们大部分情况都是使用 `rpx` 这个单位来进行自适应，所以就需要把默认的 `rem` 单位转化成 `rpx`。

### 配置 tailwindcss 单位转化

首先我们安装插件:

```bash
# npm / yarn / pnpm 任意
npm i -D postcss-rem-to-responsive-pixel
```

安装好之后，把它注册进你的 `postcss.config.js` 即可:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-rem-to-responsive-pixel': {
      // 32 意味着 1rem = 32rpx
      rootValue: 32,
      // 默认所有属性都转化
      propList: ['*'],
      // 转化的单位,可以变成 px / rpx
      transformUnit: 'rpx',
    },
  },
}
```

:::tip
在使用 `tarojs` 的时候，不要把 `tailwindcss` 配置在 `config/index.js` 的 `postcss` 配置项中。

因为 `config/index.js` 里的这个 `postcss` 配置，只是用来配置 `tarojs` **内置的** `postcss` 插件参数的。

要使用 `tailwindcss`，你需要在项目根目录，新建一个 `postcss.config.js`，然后把上面的代码写入进去。

还有 `postcss-rem-to-responsive-pixel` 这个插件会把项目里所有你编写的，或者引入的第三方包里的 `rem` 单位，全部转化为 `rpx`，想限定范围，你需要使用插件的配置项，来帮助你进行更加细致的操作。又或者是开发多端的场景，你也需要按照环境变量去按需加载这个 `postcss` 插件。
:::

## 安装和配置 `weapp-tailwindcss`

什么是 `weapp-tailwindcss` ？它是一个让你在小程序环境中，使用 `tailwindcss` 大部分特性的一个 `webpack`, `vite`, `gulp`, `postcss` 插件集合。它支持目前上几乎所有主流的多端小程序框架和使用 `webpack` / `gulp` 的原生小程序开发打包方式。

总的来说 `weapp-tailwindcss` 使得你很容易在各个框架，或者原生开发中集成 `tailwindcss`。

执行下列命令安装插件:

```bash
# npm / yarn /pnpm
npm i -D weapp-tailwindcss
# 执行一下 patch 方法
npx weapp-tw patch
```

然后把下列脚本，添加进你的 `package.json` 的 `scripts` 字段里:

```diff
"scripts": {
+ "postinstall": "weapp-tw patch"
}
```

> 添加这段的用途是，每次安装包后，都会自动执行一遍 `weapp-tw patch` 这个脚本。

### 配置你的 `tarojs` 应用

> 这个配置同时支持 `tarojs` 的 `react` / `preact` / `vue2` / `vue3` 等等所有框架

:::tip
**在使用 Taro 时，需要把 `config/index` 的配置项中的 `compiler` 设置为 'webpack5'**

另外假如你使用了 [`taro-plugin-compiler-optimization`](https://www.npmjs.com/package/taro-plugin-compiler-optimization) 记得把它注释掉。因为和它一起使用时，它会使整个打包结果变得混乱。[issues/123](https://github.com/sonofmagic/weapp-tailwindcss/issues/123) [issues/131](https://github.com/sonofmagic/weapp-tailwindcss/issues/131)
:::

在项目的配置文件 `config/index` 中注册:

```js
// config/index
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack')
// ts 版本
// import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack'
{
  mini: {
    webpackChain(chain, webpack) {
      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [{
              appType: 'taro'
            }]
          }
        }
      })
    }
  }
}
```

然后正常运行项目即可，如果配置不成功，可以参考配置好的模板项目 [taro-react-tailwind-vscode-template](https://github.com/sonofmagic/taro-react-tailwind-vscode-template) 进行排错。

### 和 NutUI 一起使用（可选）

`tarojs` 使用 [NutUI](https://nutui.jd.com) 的注意点:

[NutUI](https://nutui.jd.com) 需要配合 `@tarojs/plugin-html` 一起使用，

然而在和 `@tarojs/plugin-html` 一起使用时，默认配置下它会移除整个 `tailwindcss` 注入的 `css var` 区域块，这会造成所有 `tw-*` 相关`CSS`变量找不到，导致样式大量挂掉的问题。

此时可以使用 [`injectAdditionalCssVarScope`](https://weapp-tw.icebreaker.top/docs/api/interfaces/UserDefinedOptions#injectadditionalcssvarscope) 配置项，把它设为 `true`，这能在插件内部重新注入 `tailwindcss css var` 区域块。

另外也可以通过配置 `postcss-html-transform` 这个插件，来关闭它的 `removeCursorStyle` 选项。

```js
// config/index.js
config = {
  // ...
  mini: {
    // ...
    postcss: {
      htmltransform: {
        enable: true,
        // 设置成 false 表示 不去除 * 相关的选择器区块
        // 假如开启这个配置，它会把 tailwindcss 整个 css var 的区域块直接去除掉
        config: {
          removeCursorStyle: false,
        },
      },
    },
  },
}
```

相关的[taro 官方文档](./use-h5#%E6%8F%92%E4%BB%B6-postcss-%E9%85%8D%E7%BD%AE%E9%A1%B9), 讨论详情见 [issues/155](https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin/issues/155)

## 大功告成

现在我们尝试写下`tsx`模板:

```tsx
<View className="text-[#acc855] text-[100px]">Hello world!</View>
```

然后使用 `npm run dev:weapp` 开启我们的 `Tailwind CSS` 之旅吧！

## 参考项目和文档链接

想了解更多场景和阅读常见问题，可以参考下列链接:

`tailwindcss` ([官网](https://tailwindcss.com/)) ([Github](https://github.com/tailwindlabs/tailwindcss))

`weapp-tailwindcss` ([官网](https://weapp-tw.icebreaker.top/)) ([Github](https://github.com/sonofmagic/weapp-tailwindcss))
