---
title: Vue2 Vuex
---

Taro Vue2 支持使用 [Vuex](https://vuex.vuejs.org/) 进行状态管理。

## 安装

首先请安装 `vuex` 的 3.x 版本：

```bash
$ yarn add vuex@^3
# 或者使用 npm
$ npm install vuex@^3
```

## 例子

- 运行 `taro init` 命令时选择 Vue -> vuex 即可创建 vue2-redux 模板项目。

## 使用

在项目中新建 `src/store/index.js` 文件用来配置 `store`，根据需求设置 `state`、`mutations`、`actions`、`getters`：

```js title="src/store/index.js"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
```

为了在组件中可以通过 `this.$store` 获取到 store，我们需要把 store 注入到 Vue 实例中：

```js title="src/app.js"
import Vue from 'vue'
import store from './store'

const App = {
  store,
  render(h) {
    return h('block', this.$slots.default)
  },
}

export default App
```

接下来即可以在 Vue 组件中使用 store 了，如：

```js
this.$store.dispatch('addNumber', 1)
```
