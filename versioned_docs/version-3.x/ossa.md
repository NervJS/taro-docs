---
title: 使用 OSSA(React) UI组件库
---

> 注意：OSSA 目前必须使用 taro 3.x 版本 + **React 技术栈** 进行开发。

[OSSA](https://ossa.miaode.com/) 提供了 30+ 组件涵盖了日常业务开发使用的大部分组件。

## 预览体验

<img src='https://yanxuan.nosdn.127.net/static-union/1656314230833368.png' width='200' height='200' alt='OSSA DEMO' />
<img src='https://yanxuan.nosdn.127.net/static-union/16594970359a4f1b.png' width='200' height='200' alt='OSSA DEMO' />

## 如何使用

### 安装

- 通过 Npm 或 Yarn 安装

#### 安装 Taro 脚手架

```bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现 sass 相关的安装错误，请在安装 mirror-config-china 后重试。

```bash
npm install -g mirror-config-china
```

#### 检查是否安装成功

```bash
taro -v
```

#### 项目初始化

使用命令创建模板：

```bash
taro init myApp
```

#### 安装 OSSA

```bash
npm install ossaui
```

### 使用

#### 全量引入

1. 在入口文件中引入样式文件

```javascript
// app.tsx
import 'ossaui/dist/style/index.scss'

// 或者在app.scss中引入
@import 'ossaui/dist/style/index.scss'
```

2. 在页面中引入`OSSA`组件

```javascript title="page/index.tsx"
import { OsButton } from 'ossaui'

const demo = () => {
  return (
    <OsButton type="primary" onClick={() => handleClick()}>
      按钮
    </OsButton>
  )
}
```

#### 按需引入

全量引用会导致所有组件都打包进最终的产物中，所以更推荐按需引入

> 注意，目前组件库的按需引入需要借助一个 babel 插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)来实现

1. 安装插件

```bash
npm i babel-plugin-import -D
```

2. 添加配置：

```javascript title="babel.config.js"
{
  // ...
  plugins: [
    [
      'import',
      {
        libraryName: 'ossaui',
        customName: (name) => `ossaui/lib/components/${name.replace(/^os-/, '')}`,
        customStyleName: (name) => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`,
      },
      'ossaui',
    ],
  ]
}
```

3. 在页面中使用`OSSA`组件

```javascript title="page/index.tsx"
import { OsButton } from 'ossaui'

const demo = () => {
  return (
    <OsButton type="primary" onClick={() => handleClick()}>
      按钮
    </OsButton>
  )
}
```

#### 关闭组件库的 prebundle

:::tip
在 taro3.5 之后的版本中，在开启 prebundle(默认开启)的情况下，会导致`ossaui`所引用的`@taro/components`组件没有被打进最终的 bundle 中，导致页面表现异常。
:::

为了解决上述问题，可以手动将`ossaui`排除在 prebundle 列表之外。

```javascript title="config/index.js"
module.exports = {
  // ...
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['ossaui'],
    },
  },
}
```

#### 输出 H5 时编译组件

:::tip
在输出 H5 时，组件的尺寸可能会表现异常
:::
为了解决上述问题，可以配在在输出 H5 时，对`ossaui`进行 postcss 处理。

```javascript title="config/index.js"
module.exports = {
  // ...
  h5: {
    // ...
    esnextModules: ['ossaui'],
  },
}
```

#### 定制化主题

创建定制化主题样式文件 `src/styles/variables.scss` ，样式变量覆盖表参考 [OSSA UI variables](https://github.com/NeteaseYanxuan/OSSA/blob/main/packages/ossa/src/style/_variable.scss)

```scss title="src/styles/variables.scss"
$--text-color-base: #333;
$--color-border-base: #d9d9d9;
```

然后需要在 `config/index.js` 文件中配置 `scss` 文件全局覆盖如：

```javascript
const path = require('path');
const config = {
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/styles/variables.scss')
    ]
  },
  // ...
```

### 预览

详细的 Taro 项目预览可参考[Taro 文档](https://docs.taro.zone/docs/GETTING-STARTED#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C)

```bash
// 微信小程序预览
npm run dev:weapp

// h5预览
npm run dev:h5
```
