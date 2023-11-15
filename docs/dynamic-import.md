---
title: 动态 import
---

在 H5 开发时，我们能够使用动态 import 语法实现异步加载等功能。但在小程序环境是不支持动态 import 的，因此 Taro 默认会把动态 import 语法转换为普通 require 语法。

感谢 [@JiyuShao](https://github.com/JiyuShao) 同学贡献的插件 [taro-dynamic-import-weapp](https://github.com/JiyuShao/taro-dynamic-import-weapp)，让我们能够在微信小程序环境中使用上动态 import。

## 小程序

受小程序环境限制，默认不支持真正的动态 import。此时 `babel-preset-taro` 会启用 `babel-plugin-dynamic-import-node` 插件，**把动态 import 语法转换为 require 语法**。

### 微信小程序

`Webpack4`

借助 [@JiyuShao](https://github.com/JiyuShao) 同学贡献的插件 [taro-dynamic-import-weapp](https://github.com/JiyuShao/taro-dynamic-import-weapp) 可以在微信小程序中使用真正的动态 import 功能，实现动态加载 JS 代码。

:::caution 请注意
由于微信小程序官方社区[规范要求](https://developers.weixin.qq.com/community/minihome/doc/0000ae500e4fd0541f2ea33755b801)限制，该插件方案可能会导致代码审核环节驳回应用。
:::

例如动态加载 React 组件：

```jsx title="pages.jsx"
import { Suspense } from 'react'
import { View, Text } from '@tarojs/components'

export default const Index = () => {
  const DynamicComponent = React.lazy(
    () => import('../../dynamic-import/dynamic-component/index')
  )
  return (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <DynamicComponent />
      </Suspense>
    </View>
  )
}
```

动态加载示例：

![](https://storage.jd.com/cjj-pub-images/taro-demo-dynamic.jpg)

:::info
在 Taro `v3.4.4` 及之前的版本，需要使用 `babel-preset-taro-dynamic-import-weapp` 代替 `babel-preset-taro`，才能取消启用 `babel-plugin-dynamic-import-node` 插件。

Taro `v3.4.5` 开始，`babel-preset-taro` 新增了 `dynamic-import-node` 配置，可以直接配置取消启用 `babel-plugin-dynamic-import-node` 插件。
:::

```js title="babel.config.js" {5,17,20}
// Taro v3.4.4 及以下版本
module.exports = {
  presets: [
    [
      'babel-preset-taro-dynamic-import-weapp',
      {
        // ...
      },
    ],
  ],
}

// Taro v3.4.5+
module.exports = {
  presets: [
    [
      'taro',
      {
        // ...
        'dynamic-import-node': false,
      },
    ],
  ],
}
```

## H5

H5 支持使用动态 import。

如果有需要把动态 import 语法转换为 require 语法时，可以配置 `babel-preset-taro` 启用 `babel-plugin-dynamic-import-node` 插件（Taro v3.4.5+）。

:::caution 请注意
不可与 [prebundle](./prebundle) 搭配使用，这会对依赖的引入造成破坏。
:::

```js title="babel.config.js" {8}
// Taro v3.4.5+
module.exports = {
  presets: [
    [
      'taro',
      {
        // ...
        'dynamic-import-node': true, // 如果使用时遇到问题，可尝试将 devServer 配置项中的 hot 设置为 false
      },
    ],
  ],
}
```
