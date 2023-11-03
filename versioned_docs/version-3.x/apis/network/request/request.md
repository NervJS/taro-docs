---
title: Taro.request(option)
sidebar_label: request
---

发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。

**data 参数说明**
最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
- 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
- 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
- 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="百度小程序" src={require('@site/static/img/platform/swan.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="QQ 小程序" src={require('@site/static/img/platform/qq.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## 类型

```tsx
<T = any, U = any>(option: Option<T, U>) => RequestTask<T>
```

## 参数

| 参数 | 类型 |
| --- | --- |
| option | `T` |

### Option

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| url | `string` |  | 是 | 开发者服务器接口地址 |
| data | `U` |  | 否 | 请求的参数 |
| header | `TaroGeneral.IAnyObject` |  | 否 | 设置请求的 header，header 中不能设置 Referer。<br /><br />`content-type` 默认为 `application/json` |
| timeout | `number` | `2000` | 否 | 超时时间，单位为毫秒<br />API 支持度: weapp, h5, tt, alipay |
| method | `keyof Method` | `"GET"` | 否 | HTTP 请求方法 |
| dataType | `string` |  | 否 | 返回的数据格式 |
| responseType | `keyof ResponseType` |  | 否 | 响应的数据类型 |
| enableHttp2 | `boolean` | `false` | 否 | 开启 http2<br />API 支持度: weapp |
| enableQuic | `boolean` | `false` | 否 | 开启 quic<br />API 支持度: weapp |
| enableCache | `boolean` | `false` | 否 | 开启 cache<br />API 支持度: weapp, tt |
| enableHttpDNS | `boolean` | `false` | 否 | 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS<br />API 支持度: weapp |
| httpDNSServiceId | `string` |  | 否 | HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS<br />API 支持度: weapp |
| enableChunked | `boolean` | `false` | 否 | 开启 transfer-encoding chunked。<br />API 支持度: weapp |
| forceCellularNetwork | `boolean` | `false` | 否 | wifi下使用移动网络发送请求<br />API 支持度: weapp |
| enableCookie | `boolean` | `false` | 否 | headers 中设置 cookie 字段是否生效。如果为 false，则 headers 中的 cookie 字段将被忽略，请求头中将包含服务端上一次返回的 cookie（如果有）。<br />API 支持度: alipay 支付宝: 10.2.33+ |
| referrerStrategy | `keyof ReferrerStrategy` | `"querystring"` | 否 | referer 策略，用于控制当前请求 header 对象中 referer 字段格式。该参数默认值可通过 app.json 中的配置进行修改。<br />API 支持度: alipay 支付宝: 10.3.50+ APPX: 2.8.7 开发者工具: 3.5.1<br />[参考地址](https://opendocs.alipay.com/mini/api/owycmh#referrerStrategy%20%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E) |
| success | `(result: SuccessCallbackResult<T>) => void` |  | 否 | 接口调用成功的回调函数 |
| fail | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用失败的回调函数 |
| complete | `(res: TaroGeneral.CallbackResult) => void` |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| jsonp | string or boolean | `false` | 否 | 设置是否使用 jsonp 方式获取数据<br />API 支持度: h5 |
| jsonpCache | `RequestCache` |  | 否 | 设置 jsonp 请求 url 是否需要被缓存<br />API 支持度: h5 |
| mode | `keyof CorsMode` | `"same-origin"` | 否 | 设置是否允许跨域请求<br />API 支持度: h5 |
| credentials | `keyof Credentials` | `"omit"` | 否 | 设置是否携带 Cookie<br />API 支持度: h5 |
| cache | `keyof Cache` | `"default"` | 否 | 设置缓存模式<br />API 支持度: h5 |
| retryTimes | `number` | `2` | 否 | 设置请求重试次数<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| backup | string or string[] |  | 否 | 设置请求的兜底接口<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| signal | `AbortSignal` |  | 否 | 设置请求中止信号<br />API 支持度: h5 |
| dataCheck | `() => boolean` |  | 否 | 设置请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| useStore | `boolean` | `false` | 否 | 设置请求是否使用缓存<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| storeCheckKey | `string` |  | 否 | 设置请求缓存校验的 key<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| storeSign | `string` |  | 否 | 设置请求缓存签名<br />API 支持度: h5<br />h5: 仅在 jsonp 模式下生效 |
| storeCheck | `() => boolean` |  | 否 | 设置请求校验函数，一般不需要设置<br />API 支持度: h5 |

### SuccessCallbackResult

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `T` | 是 | 开发者服务器返回的数据 |
| header | `TaroGeneral.IAnyObject` | 是 | 开发者服务器返回的 HTTP Response Header |
| statusCode | `number` | 是 | 开发者服务器返回的 HTTP 状态码 |
| errMsg | `string` | 是 | 调用结果 |
| cookies | `string[]` | 否 | cookies |

### DataType

返回的数据格式

| 参数 | 说明 |
| --- | --- |
| json | 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse<br />其他: 不对返回的内容进行 JSON.parse |
| text | 返回的数据为文本字符串<br />API 支持度: alipay |
| base64 | 返回的数据将转换为 base64 格式字符串<br />API 支持度: alipay |
| arraybuffer | 返回的数据将保持 ArrayBuffer 数据<br />API 支持度: alipay 支付宝: 10.1.70+ |

### Method

HTTP 请求方法

| 参数 | 说明 |
| --- | --- |
| OPTIONS | HTTP 请求 OPTIONS |
| GET | HTTP 请求 GET |
| HEAD | HTTP 请求 HEAD |
| POST | HTTP 请求 POST |
| PUT | HTTP 请求 PUT |
| PATCH | HTTP 请求 PATCH |
| DELETE | HTTP 请求 DELETE |
| TRACE | HTTP 请求 TRACE |
| CONNECT | HTTP 请求 CONNECT |

### ResponseType

响应的数据类型

| 参数 | 说明 |
| --- | --- |
| text | 响应的数据为文本 |
| arraybuffer | 响应的数据为 ArrayBuffer |

### CorsMode

跨域策略

| 参数 | 说明 |
| --- | --- |
| no-cors | 跨域请求将获取不透明的响应 |
| cors | 允许跨域请求 |
| same-origin | 请求总是向当前的源发起的 |

### Credentials

证书

| 参数 | 说明 |
| --- | --- |
| include | 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息 |
| same-origin | 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息 |
| omit | 从不发送cookies |

### Cache

缓存策略

| 参数 | 说明 |
| --- | --- |
| default | 浏览器从HTTP缓存中寻找匹配的请求 |
| no-cache | 浏览器在其HTTP缓存中寻找匹配的请求 |
| reload | 浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存 |
| force-cache | 浏览器在其HTTP缓存中寻找匹配的请求 |
| only-if-cached | 浏览器在其HTTP缓存中寻找匹配的请求 |

### ReferrerStrategy

referer 策略

| 参数 | 说明 |
| --- | --- |
| index | referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html |
| page | 保留 page（pages/xxx/yyy），referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page} |
| querystring | 默认值。会将发起请求时所在页面的 URL 作为 referer 值，会保留 page（pages/xxx/yyy）和 querystring（x=1&y=2）并可能有框架添加的其他参数，referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}?{querysrtring}{框架其他参数} |

## 示例代码

### 示例 1

```tsx
Taro.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success: function (res) {
    console.log(res.data)
  }
})
```

### 示例 2

async/await 用法：

```tsx
const res = await Taro.request(params)
```
