---
title: 编译配置
---

编译配置存放于项目根目录下的 `config` 目录中，只要确保 `config/index.js` 或者 `config/index.ts` 文件存在，可以作为用户自定义编译配置导出即可。你也可以选择拆分成三个文件（具体见默认配置）：

- `index.js` 是通用配置
- `dev.js` 是项目预览时的配置
- `prod.js` 是项目打包时的配置

详细的编译配置文档请查阅：[编译配置详情](./config-detail)

> 从 Taro v3.6.5 开始， `config/index.ts` 支持使用 `ts` 文件(`react native` 暂不支持)

## 默认配置

```js title="config/index.js"
const config = {
  // 项目名称
  projectName: 'Awesome Next',
  // 项目创建日期
  date: '2020-6-2',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目产出目录
  outputRoot: 'dist',
  // Taro 插件配置
  plugins: [],
  // 全局变量设置
  defineConstants: {},
  // 文件 copy 配置
  copy: {
    patterns: [],
    options: {},
  },
  // 框架，react，nerv，vue, vue3 等
  framework: 'react',
  // 小程序端专用配置
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 10240,
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    // 自定义 Webpack 配置
    webpackChain(chain, webpack) {},
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    // 自定义 Webpack 配置
    webpackChain(chain, webpack) {},
    devServer: {},
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
```

## defineConfig 辅助函数

:::info
Taro v3.6.9 开始支持

react native 暂不支持
:::

开发者可以导入 `defineConfig` 函数包裹配置对象， 以获得 类型提示 和 自动补全.

### 基础配置

```ts
// config/index.ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig({
  // ...Taro 配置
})
```

同时 `config/index.ts` 支持直接导出对象：

```ts
// 直接导出对象
import type { UserConfigExport } from '@tarojs/cli'

export default {
  // ...Taro 配置
} satisfies UserConfigExport
```

### 异步配置

如果配置需要调用一个异步函数，也可以转而导出一个异步函数：

```ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig(async (mergin, { command, mode }) => {
  const data = await asyncFunction()
  return {
    // Taro 配置
  }
})
```

### 情景配置

如果配置文件需要基于 命令 或者不同的 [模式](./env-mode-config.md) 来决定选项，则可以选择导出这样一个函数：

```ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig((mergin, { command, mode }) => {
  // mergin 为webpack-mergin, 兼容以前的配置
  // 假如执行的命令为: "taro build --type weapp --mode test"
  // 则 command 的值为 build, mode 的值为 test
  if (mode === 'development') {
    return {
      // dev 独有配置
    }
  } else if (mode === 'test') {
    return {
      // test 独有配置
    }
  } else {
    return {
      // build 独有配置
    }
  }
})
```
