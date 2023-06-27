---
title: 查询相关 API
---

## 类型说明

TWaitforParams：

| 属性                    | 类型                 | 必须 | 默认值                                                                   | 说明            |
| ----------------------- | -------------------- | ---- | ------------------------------------------------------------------------ | --------------- | ---------------- |
| container               | HTMLElement          |      |                                                                          | window.document | 查询的 root 节点 |
| timeout                 | number               |      | 1000                                                                     | 失效时间        |
| interval                | number               |      | 50                                                                       | 查询间隔        |
| mutationObserverOptions | MutationObserverInit |      | {subtree: true, childList: true, attributes: true, characterData: true } | 监听器参数      |

## 按照选择器查询

### querySelector

```typescript
function querySelector(selectors: string): HTMLElement
```

参数：

| 参数      | 类型   | 必须 | 说明                                  |
| --------- | ------ | ---- | ------------------------------------- |
| selectors | string | 是   | 选择器，同 docuemt.querySelector 一致 |

用法：

```js
const btns = testUtils.querySelectorAll('.btns')
```

### querySelectorAll

```typescript
function querySelectorAll(selectors: string): HTMLElement[]
```

参数：

| 参数      | 类型   | 必须 | 说明                                     |
| --------- | ------ | ---- | ---------------------------------------- |
| selectors | string | 是   | 选择器，同 docuemt.querySelectorAll 一致 |

用法：

```js
const btns = testUtils.querySelectorAll('.btns')
```

### waitForQuerySelector

```typescript
async function waitForQuerySelector(selectors: string, params?: TParams): Promise<HTMLElement>
```

参数：

| 参数      | 类型           | 必须 | 说明                                  |
| --------- | -------------- | ---- | ------------------------------------- |
| selectors | string         | 是   | 选择器，同 docuemt.querySelector 一致 |
| params    | TWaitforParams |      | 参数：见 TWaitforParams 说明          |

用法：

```js
const btn = await testUtils.waitForQuerySelector('.async-btn')
```

### waitForQuerySelectorAll

```typescript
async function waitForQuerySelectorAll(selectors: string, params?: TParams): Promise<HTMLElement[]>
```

参数：

| 参数      | 类型           | 必须 | 说明                                     |
| --------- | -------------- | ---- | ---------------------------------------- |
| selectors | string         | 是   | 选择器，同 docuemt.querySelectorAll 一致 |
| params    | TWaitforParams |      | 参数：见 TWaitforParams 说明             |

用法：

```js
const btns = await testUtils.waitForQuerySelectorAll('.async-btns')
```

## 按照文本查询

### queryByText

```typescript
function queryByText(text: string, selector?: string): HTMLElement
```

参数：

| 参数     | 类型   | 必须 | 说明                                  |
| -------- | ------ | ---- | ------------------------------------- |
| text     | string | 是   | 文本内容，部分匹配即可                |
| selector | string |      | 选择器，同 docuemt.querySelector 一致 |

用法：

```js
// <Text>Hello World!!!</Text>
const textView = testUtils.queryByText('Hello World')
```

### queryByTextAll

```typescript
function queryAllByText(text: string, selector?: string): HTMLElement[]
```

参数：

| 参数     | 类型   | 必须 | 说明                                  |
| -------- | ------ | ---- | ------------------------------------- |
| text     | string | 是   | 文本内容，部分匹配即可                |
| selector | string |      | 选择器，同 docuemt.querySelector 一致 |

用法：

```js
// <Text>Hello World!!</Text>
// <View>Hello World!!!</View>
const textViews = testUtils.queryAllByText('Hello World')
```

### waitForQueryByText

```typescript
async function waitForQueryByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement
```

参数：

| 参数     | 类型           | 必须 | 说明                                  |
| -------- | -------------- | ---- | ------------------------------------- |
| text     | string         | 是   | 文本内容，部分匹配即可                |
| selector | string         |      | 选择器，同 docuemt.querySelector 一致 |
| params   | TWaitforParams |      | 参数：见 TWaitforParams 说明          |

用法：

```js
// <Text>Hello World!!!</Text>
const textView = async testUtils.waitForQueryByText("Hello World");
```

### waitForQueryAllByText

```typescript
async function waitForQueryAllByText(text: string, selector?: string, params?: TWaitforParams): HTMLElement[]
```

参数：

| 参数     | 类型           | 必须 | 说明                                  |
| -------- | -------------- | ---- | ------------------------------------- |
| text     | string         | 是   | 文本内容，部分匹配即可                |
| selector | string         |      | 选择器，同 docuemt.querySelector 一致 |
| params   | TWaitforParams |      | 参数：见 TWaitforParams 说明          |

用法：

```js
// <Text>Hello World!!</Text>
// <View>Hello World!!!</View>
const textViews = async testUtils.waitForQueryAllByText("Hello World");
```

## 按照 Placeholder 查询

### queryByPlaceholder

```typescript
function queryByPlaceholder(text: string): HTMLElement
```

参数：

| 参数 | 类型   | 必须 | 说明             |
| ---- | ------ | ---- | ---------------- |
| text | string | 是   | placeholder 内容 |

用法：

```js
// <input placeholder="hello" />
const input = testUtils.queryByPlaceholder('hello')
```

### queryAllByPlaceholder

```typescript
function queryAllByPlaceholder(text: string): HTMLElement[]
```

参数：

| 参数 | 类型   | 必须 | 说明             |
| ---- | ------ | ---- | ---------------- |
| text | string | 是   | placeholder 内容 |

用法：

```js
// <input placeholder="hello" />
// <input placeholder="hello" />
const inputs = testUtils.queryAllByPlaceholder('hello')
```

### waitForQueryByPlaceholder

```typescript
async function waitForQueryByPlaceholder(text: string, params?: TParams): Promise<HTMLElement>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| text   | string         | 是   | placeholder 内容             |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <input placeholder="async-placeholde" />
const input = await testUtils.waitForQueryByPlaceholder('async-placeholder')
```

### waitForQueryAllByPlaceholder

```typescript
async function waitForQueryAllByPlaceholder(text: string, params?: TParams): Promise<HTMLElement[]>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| text   | string         | 是   | placeholder 内容             |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <input placeholder="async-placeholde" />
// <input placeholder="async-placeholde" />
const inputs = await testUtils.waitForQueryAllByPlaceholder('async-placeholder')
```

## 按照属性查询

### queryByAttribute

```typescript
function queryByAttribute(attr: string, value: any): HTMLElement
```

参数：

| 参数  | 类型   | 必须 | 说明       |
| ----- | ------ | ---- | ---------- |
| attr  | string | 是   | 属性 key   |
| value | any    | 是   | 属性 value |

用法：

```js
// <div key="value" />
const view = testUtils.queryByAttribute('key', 'value')
```

### queryAllByAttribute

```typescript
function queryAllByAttribute(attr: string, value: any): HTMLElement[]
```

参数：

| 参数  | 类型   | 必须 | 说明       |
| ----- | ------ | ---- | ---------- |
| attr  | string | 是   | 属性 key   |
| value | any    | 是   | 属性 value |

用法：

```js
// <div key="value" />
// <div key="value" />
const view = testUtils.queryAllByAttribute('key', 'value')
```

### waitForQueryByAttribute

```typescript
async function waitForQueryByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| attr   | string         | 是   | 属性 key                     |
| value  | any            | 是   | 属性 value                   |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <div key="value" />
const view = await testUtils.waitForQueryByAttribute('key', 'value')
```

### waitForQueryAllByAttribute

```typescript
async function waitForQueryAllByAttribute(attr: string, value: string, params?: TParams): Promise<HTMLElement[]>
```

参数：

| 参数   | 类型           | 必须 | 说明                         |
| ------ | -------------- | ---- | ---------------------------- |
| attr   | string         | 是   | 属性 key                     |
| value  | any            | 是   | 属性 value                   |
| params | TWaitforParams |      | 参数：见 TWaitforParams 说明 |

用法：

```js
// <div key="value" />
// <div key="value" />
const inputs = await testUtils.waitForQueryAllByAttribute('key', 'value')
```
