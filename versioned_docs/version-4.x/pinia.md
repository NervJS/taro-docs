---
title: Vue3 Pinia
---

Taro Vue3 支持使用 [Pinia](https://pinia.vuejs.org/) 进行状态管理。

## 安装

```bash
$ yarn add pinia
# 或者使用 npm
$ npm install pinia
```

> pinia@2.0.22 已经解决了这个问题（[#967](https://github.com/vuejs/pinia/pull/967)）, 所以你可能不再需要这个插件

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
    },
  },
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
        onAdd,
      }
    },
  }
</script>
```
