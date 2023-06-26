---
title: 概述
---

> 对 Taro 进行组件/应用级别的单元测试

该测试工具**更加关注组件的用户行为和外部表现，而不是内部实现细节**

Github 地址：[传送门](https://github.com/NervJS/taro-test-utils)

## 安装

在 Taro 项目根目录下安装

```bash
# React:
npm i @tarojs/test-utils-react --save
# Vue3:
npm i @tarojs/test-utils-vue3 --save
# Vue2:
npm i @tarojs/test-utils-vue --save
```

⚠️ `@tarojs/plugin-platform-h5`为前置 peerDependencies，请勿删除该依赖申明

## 使用

### 安装 Jest

```bash
npm i jest --save
```

### 配置 Jest

在 Taro 项目根目录添加文件`jest.config.js`。配置文件如下：

```js
// react
const defineJestConfig = require('@tarojs/test-utils-react/dist/jest.js').default
// vue3
// const defineJestConfig = require("@tarojs/test-utils-vue3/dist/jest.js").default;
// vue2
// const defineJestConfig = require("@tarojs/test-utils-vue/dist/jest.js").default;

module.exports = defineJestConfig({
  // testEnvironment: 'jsdom',  // 测试使用的环境
  // testMatch: ['<rootDir>/__test__/**/*.test.{js,ts}'],  // 测试文件匹配
})
```

`defineJestConfig` 已内置了部分初始化配置，需要修改可自行配置覆盖
配置文件参考 Jest 官网：[Configuring Jest](https://jestjs.io/docs/configuration)

### 编写测试用例

#### 组件级别

```javascript
// __test__/main/index.test.js
import TestUtils from '@tarojs/test-utils-react'
import Hello from '../../src/components/Hello.tsx'
const testUtils = new TestUtils()
describe('App', () => {
  it('RenderComponent', async () => {
    // React跟Vue相同用法
    await testUtils.mount(Hello, {
      props: {
        // 配置项
        a: 1,
      },
    })
    // 等待页面出现.btn这个节点
    const btn = await testUtils.queries.waitForQuerySelector('.btn')
    // 等待react的渲染更新完成
    await testUtils.act(() => {
      // 触发点击事件
      testUtils.fireEvent.click(btn)
    })
    // 打印渲染结果
    expect(testUtils.html()).toMatchSnapshot()
    // <div class="hello">...
  })
})
```

#### 运行测试

```bash
# package.json
# scripts: {
#   "test": "jest",
# }
npm run test
```

#### 应用级别

```javascript
// __test__/main/index.test.js
import TestUtils from '@tarojs/test-utils-react'
import Taro from '@tarojs/taro'
import App from '../../src/app.ts'
const testUtils = new TestUtils()
describe('App', () => {
  it('RenderApp', async () => {
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
})
```

## 多端

对于小程序的测试，我们提供了环境变量对 Jest 环境进行区分：`TARO_ENV_JEST`，我们可以在调用 jest 测试时设置对应的环境变量

```js
// package.json
scripts: {
  "test": "jest",
   "test:weapp": "export TARO_ENV_JEST=weapp && jest"
}
```

这里会有几点差异：

- **环境差异**

这里会将运行代码中的`process.env.TARO_ENV`切换为`TARO_ENV_JEST`的值，主要用于一些"环境判断"比如下面的代码将会在`test:weapp`执行:

```js
if (process.env.TARO_ENV === 'weapp') {
  // ....setState(....)
  console.log('this is weapp')
}
```

- **标签差异**

除此之外`html()`输出的节点内容也会改变，将以小程序标签的形式输出，例如:

```html
<!-- h5 -->
<taro-core-view className="cls">
  <taro-image-view src="xxx">
    <img src="xxx" />
  </taro-image-view>
</taro-core-view>

<!-- weapp -->
<view className="cls">
  <image src="xxx" />
</view>
```

---

因为这是一个在线运行的测试工具，主要目的也是对用户行为和外部表现进行测试断言，**在测试环境使用的还是以 h5 的形式来模拟整个程序的运行**，对于其他小程序特有的生命周期和 API，我们推荐以下做法：

- **生命周期**： 使用`PageLifecycle`的`triggerXxxxx`进行生命周期的触发
- **API**： 使用`jest`提供的`mock`方法来模拟`@tarojs/taro`的 api，模拟小程序的返回值
