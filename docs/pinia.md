---
title: Vue3 Pinia
---

Taro Vue3 支持使用 [Pinia](https://pinia.vuejs.org/) 进行状态管理。

## 安装 & 配置 Taro 插件

:::info
在小程序环境中，Pinia 存在部分不兼容的代码（[#10696](https://github.com/NervJS/taro/issues/10696)）。感谢 [@keyding](https://github.com/keyding) 提供的 [taro-plugin-pinia](https://github.com/keyding/taro-plugin-pinia) 插件为我们抹平了这些差异。
:::

首先请安装 `pinia` 和 `taro-plugin-pinia`：

```bash
$ yarn add pinia taro-plugin-pinia
# 或者使用 npm
$ npm install pinia taro-plugin-pinia
```

然后配置使用 `taro-plugin-pinia` 插件：

```js title="config/index.js"
const config = {
  plugins: [
    'taro-plugin-pinia'
  ]
  // ...
}
```

## 例子

- 运行 `taro init` 命令时选择 Vue3 -> pinia 即可创建 vue3-pinia 模板项目
- [Todo App](https://github.com/NervJS/taro-todos-pinia)

## 使用

### 创建 Pinia 实例

```js title="src/app.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const App = createApp({})

App.use(createPinia())

export default App
```

### 创建 `store`

在项目中新建 `src/store/index.js` 文件用来配置 `store`：

```js title="src/store/index.js"
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

### 使用 store 定义的数据与方法

```html
<template>
  <view>
    <text>{{ counter.count }}</text>
    <view @tap="onAdd">ADD</view>
  </view>
</template>

<script>
import { useCounterStore } from '../stores'

export default {
  setup() {
    const counter = useCounterStore()

    const onAdd = () => {
      counter.count++
    }

    return {
      counter,
      onAdd
    }
  }
}
</script>
```
