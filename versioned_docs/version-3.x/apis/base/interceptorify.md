---
title: Taro.interceptorify(promiseifyApi)
sidebar_label: interceptorify
---

封装 promise API 洋葱圈模型拦截器，方法返回的实例拥有独立的洋葱圈模型，互相不影响

## 类型

```tsx
type promiseifyApi<T, R> = (requestParams: T) => Promise<R>
interface InterceptorifyChain<T, R> {
  requestParams: T
  proceed: promiseifyApi<T, R>
}
type InterceptorifyInterceptor<T, R> = (chain: InterceptorifyChain<T, R>) => Promise<R>
interface Interceptorify<T, R> {
  request(requestParams: T): Promise<R>
  addInterceptor( interceptor: InterceptorifyInterceptor<T, R>): void
  cleanInterceptors(): void
}

interceptorify<T, R>(promiseifyApi: promiseifyApi<T, R>): Interceptorify<T, R>
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| promiseifyApi | `(requestParams: any) => Promise<any>` | 返回为 promise 的方法 |

## 子方法

| 子方法 | 类型 | 说明 |
| --- | --- | --- |
| request | `(requestParams: any) => Promise<any>` | 调用洋葱圈模型 |
| addInterceptor | `(interceptor: InterceptorifyInterceptor) => void` | 添加拦截器 |
| cleanInterceptors | `() => void` | 清除当前实例上全部拦截器 |

## 示例代码

### 示例 1

```tsx
const fetchDataInterceptorify = interceptorify(taro.request)
fetchDataInterceptorify.addInterceptor(async function (chain) {
  taro.showLoading({
    title: 'Loading...'
  })
  const res = await chain.proceed(chain.requestParams)
  taro.hideLoading()
  return res
})
fetchDataInterceptorify.addInterceptor(async function (chain) {
  const params = chain.requestParams
  const res = await chain.proceed({
    url: 'http://httpbin.org' + params.url,
  })
  return res.data
})

fetchDataInterceptorify.request({
  url: '/ip'
}).then((res) => {
  // log my ip
  console.log(res.origin)
})
```

### 示例 2

```tsx
const modalInterceptorify = interceptorify(taro.showModal)
modalInterceptorify.addInterceptor(async function (chain) {
  const res = await chain.proceed({
    ...chain.requestParams,
    title: 'interceptor1'
  })
  return res
})
modalInterceptorify.addInterceptor(async function (chain) {
  const res = await chain.proceed({
    ...chain.requestParams,
    content: 'interceptor2'
  })
  return res
})

modalInterceptorify.request({})
```

### 示例 3

```tsx
const navToInterceptorify = interceptorify(taro.navigateTo)
navToInterceptorify.addInterceptor(async function (chain) {
  if (chain.requestParams.url == 'detail') {
    return await chain.proceed({
      ...chain.requestParams,
      url: `/pages/detail/index?interceptor=interceptor1`,
    })
  }
  return {
    errMsg: 'Invalid Page',
  }
})

// 拦截 404 页面
navToInterceptorify.request({
  url: '404'
}).then(({ errMsg }) => {
  if (errMsg != 'ok') {
    taro.showToast({
      title: errMsg,
      icon: 'error',
    })
  }
})

// 正常跳转
navToInterceptorify.request({
  url: 'detail'
}).then(({ errMsg }) => {
  if (errMsg != 'ok') {
    // taro.showToast({
    //   title: errMsg,
    //   icon: 'error',
    // })
  }
})
```