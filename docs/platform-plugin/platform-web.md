---
title: TaroPlatformWeb
---

我们把编译时常用的逻辑抽象出了一个基类 `TaroPlatformWeb`，开发者可以继承于此基类，从而实现端平台的编译。

例如我们创建一个 H5 平台：

```js title="program.ts"
import { TaroPlatformWeb } from '@tarojs/service'
export default class H5 extends TaroPlatformWeb {
  // ...
}
```

## 方法与属性

### constructor (ctx, config)

构造函数，接受两个参数。

| 参数   | 类型   | 说明           |
| :----- | :----- | :------------- |
| ctx    | object | 插件上下文对象 |
| config | object | Taro 编译配置  |

### ctx

`object`

插件上下文对象。

#### this.ctx.modifyWebpackChain

获取 WebpackChain，例子：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  modifyWebpackChain() {
    // 通过 this.ctx.modifyWepackChain 能获取到 WebpackChain 实例
    this.ctx.modifyWebpackChain(({ chain }) => {
      // chain.xxxx
    })
  }
}
```

### helper

`object`

存放着一系列工具函数，对应 `@tarojs/helper` 包的导出内容。

### config

`object`

编译配置对象。

### (abstract) platform

> 抽象属性，子类必须实现。

`string`

平台名称，如：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  platform = 'h5'
}
```

### (abstract) runtimePath

> 抽象属性，子类必须实现。

`stirng` | `string[]`

Web 端编译的运行时文件的解析路径，如：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  runtimePath = '@tarojs/plugin-platform-h5/dist/runtime'
}
```

### setupTransaction

`setup` 阶段的事务钩子。

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.setupTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}
```

### buildTransaction

`build` 阶段的事务钩子。

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.buildTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}
```

### start ()

插件入口调用 `start` 方法开启编译，如：

```js title="program.ts"
class H5 extends TaroPlatformWeb {
  // ...
}

export default (ctx) => {
  ctx.registerPlatform({
    name: 'h5',
    useConfigName: 'h5',
    async fn({ config }) {
      const program = new H5(ctx, config)
      await program.start()
    },
  })
}
```

## 自定义平台类

接下来将以扩展对 Web 端的编译支持为例，介绍如何创建一个自定义平台类。

### 1. 继承基类

继承 `TaroPlatformWeb` 以实现 `H5` 类，并实现所有抽象属性、可选属性：

```js title="program.ts"
import { TaroPlatformWeb } from '@tarojs/service'

const PACKAGE_NAME = '@tarojs/plugin-platform-h5'

class H5 extends TaroPlatformWeb {
  // 平台名称
  platform = 'h5'
  // Web 端运行时文件的解析路径
  runtimePath = `${PACKAGE_NAME}/dist/runtime`

  constructor (ctx, config) {
    super(ctx, config)

    /**
    * 1. setupTransaction - init
    * 2. setup
    * 3. setupTransaction - close
    * 4. buildTransaction - init
    * 5. build
    * 6. buildTransaction - close
    */

    // 可以在 setup 的不同阶段注入自定义逻辑
    this.setupTransaction.addWrapper({
      init () {}
      close () {}
    })

    // 可以在 build 的不同阶段注入自定义逻辑
    this.buildTransaction.addWrapper({
      init () {}
      close () {}
    })
  }
}

export default H5
```

### 2. 处理 API

在 Web 端环境中增减 API 其实并不难，在之前版本中开发者也可以通过配置为 `@tarojs/taro` 配置 alias 参数实现，在 `@tarojs/plugin-platform-h5` 中也是如此，通过将 runner 中相关的代码抽离实现的这一特性。

```ts
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      const alias = chain.resolve.alias
      alias.set('@tarojs/taro', require.resolve('./runtime/apis'))
    })
  }
```

虽然对 API 修改很容易，但是新增的 API 却不能通过 `Taro.newAPI` 的形式来使用，为此我们需要在插件打包时需要借助 exportNameOnly 插件输出当前插件支持的 API 列表。

```js title="rollup.config.js"
import exportNameOnly from '@tarojs/plugin-platform-h5/build/rollup-plugin-export-name-only'
{
  input: path.join(cwd, 'src/runtime/apis/index.ts'),
  output: {
    file: 'dist/taroApis.js',
    format: 'cjs',
    inlineDynamicImports: true
  },
  plugins: [exportNameOnly()]
}
```

并将 API 列表通过 `babel-plugin-transform-taroapi` 注册，帮助开发者将 `Taro.newAPI` 转换成对应语法使用。

```ts
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      const rules = chain.module.rules
      const script = rules.get('script')
      const babelLoader = script.uses.get('babelLoader')
      babelLoader.set('options', {
        ...babelLoader.get('options'),
        plugins: [
          [require('babel-plugin-transform-taroapi'), {
            packageName: '@tarojs/taro',
            apis: require(resolveSync('./taroApis'))
          }]
        ]
      })
    })
  }
```

### 3. 处理组件

使用 Taro 提供的组件仅仅需要在 runtime 中注册，并通过别名为不同前端 UI 框架配置所需的适配器（@tarojs/components/lib/[framework]）。

```ts
import '@tarojs/components/dist/taro-components/taro-components.css'

import { applyPolyfills, defineCustomElements } from '@tarojs/components/loader'

// Note: 3.6.3 开始，不再需要手动调用 applyPolyfills 和 defineCustomElements
applyPolyfills().then(function () {
  defineCustomElements(window)
})
```

如果需要新增组件可以考虑与 Taro 一样使用 stencil 或者其他 web-components 方案，当然也可以仅为单一框架提供组件库（例如 useHtmlComponents 模式，将组件库替换为 @tarojs/components-react）。需要注意的是，如果仅替换部分又不希望注册全部组件，可以手动注册所需组件并导出，比如 taro-pull-to-refresh 提供了下拉刷新的特性，如果未注册会导致相关特性无法使用。

```ts title="src/runtime/index.ts"
import { defineCustomElement } from '@tarojs/components/dist/components/taro-pull-to-refresh'

// Note: 3.6.3 开始，组件会自动注册，不需要手动调用 defineCustomElement
defineCustomElement()
```

对于下拉组件，也可以通过为 appConfig 新增 PullDownRefresh 配置替换使用，对于插件来说可以参考以下写法。

```ts
  modifyWebpackConfig () {
    this.ctx.modifyWebpackChain(({ chain }) => {
      chain.plugin('mainPlugin')
        .tap(args => {
          args[0].loaderMeta ||= {
            extraImportForWeb: '',
            execBeforeCreateWebApp: ''
          }
          args[0].loaderMeta.extraImportForWeb += `import { PullDownRefresh } from '@tarojs/components'\n`
          args[0].loaderMeta.execBeforeCreateWebApp += `config.PullDownRefresh = PullDownRefresh\n`
          return args
        })
    })
  }
```
