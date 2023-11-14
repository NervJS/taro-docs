---
title: Taro.interceptorify(promiseifyApi)
sidebar_label: interceptorify
---

包裹 promiseify api 的洋葱圈模型

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="京东小程序" src={require('@site/static/img/platform/jd.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="快应用" src={require('@site/static/img/platform/quickapp.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform" width="25px"/>

## 类型

```tsx
<T, R>(promiseifyApi: promiseifyApi<T, R>) => Interceptorify<T, R>
```

## 参数

### promiseifyApi

```tsx
(requestParams: T) => Promise<R>
```

| 参数 | 类型 |
| --- | --- |
| requestParams | `T` |

### InterceptorifyChain

| 参数 | 类型 |
| --- | --- |
| requestParams | `T` |
| proceed | `promiseifyApi<T, R>` |

### InterceptorifyInterceptor

```tsx
(chain: InterceptorifyChain<T, R>) => Promise<R>
```

| 参数 | 类型 |
| --- | --- |
| chain | `InterceptorifyChain<T, R>` |

### Interceptorify

#### request

```tsx
(requestParams: T) => Promise<R>
```

| 参数 | 类型 |
| --- | --- |
| requestParams | `T` |

#### addInterceptor

```tsx
(interceptor: InterceptorifyInterceptor<T, R>) => void
```

| 参数 | 类型 |
| --- | --- |
| interceptor | `InterceptorifyInterceptor<T, R>` |

#### cleanInterceptors

```tsx
() => void
```

## 示例代码

### 示例 1

```tsx
// 创建实例
const modalInterceptorify = interceptorify(taro.showModal)
// 添加拦截器
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
// 使用
modalInterceptorify.request({})
```

### 示例 2

```tsx
// 创建实例
const fetchDataInterceptorify = interceptorify(taro.request)
// 添加拦截器
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
// 使用
fetchDataInterceptorify.request({
  url: '/ip'
}).then((res) => {
  // log my ip
  console.log(res.origin)
})
```
