---
title: 渲染相关 API
---

## mount

> 组件挂载

```js
async mount(component, params);
```

| 参数      | 类型                                | 必须 | 说明           |
| --------- | ----------------------------------- | ---- | -------------- |
| component | FunctionComponent \| ClassComponent | 是   | 需要挂载的组件 |
| params    | TParams                             |      | 参数           |

params 类型 `TParams`

| 参数        | 类型        | 必须 | 默认值        | 说明           | 备注     |
| ----------- | ----------- | ---- | ------------- | -------------- | -------- |
| props       | Object      |      | {}            | props 入参     |
| slots       | Object      |      | {}            | slots 入参     | vue 特有 |
| container   | HTMLElement |      | div           | 挂载容器节点   |
| baseElement | HTMLElement |      | document.body | 打印出来的节点 |
| baseElement | HTMLElement |      | document.body | 打印出来的节点 |

用法：

```js
import testUtils from '@tarojs/test-utils-react' // react
// import testUtils from '@tarojs/test-utils-vue3' // vue3
describe('测试mount', () => {
  test('View', async () => {
    const testUtils = new TestUtils()
    await testUtils.mount(View, {
      props: {
        className: 'className',
        children: 'Child Text!',
      },
      // Vue插入插槽
      // slots: {
      //   default: 'Child Text!'
      // }
    })
  })
})
```

## unmount

> 组件卸载

```js
unmount()
```

将组件进行卸载，会触发组件的卸载生命周期

用法：

```js
await testUtils.mount(View)
// 挂载完成 => 卸载组件
testUtils.unmount()
```

## createApp

> 构建应用

```js
await createApp()
```

该 api 主要用于测试**完整应用的表现功能**，从入口开始进行渲染。
将会根据 Taro 项目入口进行应用渲染，读取`app.config.(ts|js)`配置内容，包括如 router 相关信息。

⚠️ **注意：这与真实表现可能存在差异，因为 createApp 为运行时渲染，而非渲染编译产物，所以一些编译插件对运行时的影响降无效**

```js
test('createApp', async () => {
  await testUtils.createApp()
  // 监听/pages/index/index这个页面路由的onShow生命周期触发
  await testUtils.PageLifecycle.onShow('/pages/index/index')
  // 跳转到第二个页面
  Taro.navigateTo({ url: '/pages/second/index' })
  // 监听/pages/second/index这个页面路由的onShow生命周期触发
  await testUtils.PageLifecycle.onShow('/pages/second/index')
  // 当/pages/second/index触发onShow后，打印页面内容
  expect(testUtils.html()).toMatchSnapshot()
  // <body><div class="taro_router" id="app">...
})
```
