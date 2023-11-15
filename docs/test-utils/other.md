---
title: 辅助类 API
---

## html

```ts
function html(): string
```

将页面表现的文档内容进行格式化输出，通常用作快照对比、调试

用法：

```js
import testUtils from '@tarojs/test-utils-react' // react
// import testUtils from '@tarojs/test-utils-vue3' // vue3
describe('测试mount', () => {
  test('View', async () => {
    const testUtils = new TestUtils()
    await testUtils.mount(View)
    const htmlString = testUtils.html() // 输出文档字符串内容
    expect(htmlString).toMatchSnapshot() // 可以用于快照对比
  })
})
```

## act

```ts
async function act(): Promise
```

**React**同`react-dom/test-utils`提供的`act`，**Vue**则使用的是`await nextTick`回调进行封装

用法：

```js
import testUtils from '@tarojs/test-utils-react' // react
// import testUtils from '@tarojs/test-utils-vue3' // vue3
describe('Testing', () => {
  test('test', async () => {
    const testUtils = new TestUtils()
    await testUtils.mount(View)
    // 等待回调执行完成，并且更新结束
    await testUtils.act(() => {
      testUtils.fireEvent.click(testUtils.queries.querySelector('.btn'))
    })
  })
})
```
