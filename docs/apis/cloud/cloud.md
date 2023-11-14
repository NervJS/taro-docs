---
title: cloud
sidebar_label: cloud
---

云开发 SDK 实例

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/Cloud.html)

## 类型

```tsx
cloud & Cloud
```

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| Cloud | `new (options: IOptions) => Cloud` | 声明新的云开发操作实例<br />API 支持度: weapp<br />example: 声明新的操作实例<br /><br />```tsx<br />const c1 = new Taro.cloud.Cloud({<br />  resourceEnv: '我的某个环境ID',<br />})<br />```<br />example: 资源共享时跨账号访问资源<br /><br />```tsx<br />// 声明<br />const c1 = new Taro.cloud.Cloud({<br />  resourceAppid: '资源方 AppID',<br />  resourceEnv: '我的某个环境ID',<br />})<br />// 等待初始化完成<br />await c1.init()<br /><br />// 然后照常访问指定环境下的资源<br />c1.callFunction({<br /> name: '',<br /> data: {},<br />})<br />```<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/utils/Cloud.Cloud.html) |

### init

在调用云开发各 API 前，需先调用初始化方法 init 一次（全局只需一次，多次调用时只有第一次生效）

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/init/client.init.html)

```tsx
(config?: IInitConfig) => void
```

| 参数 | 类型 |
| --- | --- |
| config | `IInitConfig` |

#### 示例代码

```tsx
Taro.cloud.init({
  env: 'test-x1dzi'
})
```

### CloudID

声明字符串为 CloudID（开放数据 ID），该接口传入一个字符串，返回一个 CloudID 特殊对象，将该对象传至云函数可以获取其对应的开放数据。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/open/Cloud.CloudID.html)

```tsx
(cloudID: string) => void
```

| 参数 | 类型 |
| --- | --- |
| cloudID | `string` |

### callFunction

调用云函数

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/functions/Cloud.callFunction.html)

```tsx
{ (param: OQ<CallFunctionParam>): void; (param: RQ<CallFunctionParam>): Promise<CallFunctionResult>; }
```

| 参数 | 类型 |
| --- | --- |
| param | `OQ<CallFunctionParam>` |

#### 示例代码

假设已有一个云函数 add，在小程序端发起对云函数 add 的调用：

```tsx
Taro.cloud.callFunction({
// 要调用的云函数名称
name: 'add',
  // 传递给云函数的event参数
  data: {
    x: 1,
    y: 2,
  }
}).then(res => {
  // output: res.result === 3
}).catch(err => {
  // handle error
})
```

### uploadFile

将本地资源上传至云存储空间，如果上传至同一路径则是覆盖写

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/uploadFile/client.uploadFile.html)

```tsx
{ (param: OQ<UploadFileParam>): Taro.UploadTask; (param: RQ<UploadFileParam>): Promise<UploadFileResult>; }
```

| 参数 | 类型 |
| --- | --- |
| param | `OQ<UploadFileParam>` |

#### 示例代码

##### 示例 1

```tsx
Taro.cloud.uploadFile({
  cloudPath: 'example.png',
  filePath: '', // 文件路径
  success: res => {
    // get resource ID
    console.log(res.fileID)
  },
  fail: err => {
    // handle error
  }
})
```

##### 示例 2

```tsx
Taro.cloud.uploadFile({
  cloudPath: 'example.png',
  filePath: '', // 文件路径
}).then(res => {
  // get resource ID
  console.log(res.fileID)
}).catch(error => {
  // handle error
})
```

### downloadFile

从云存储空间下载文件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/downloadFile/client.downloadFile.html)

```tsx
{ (param: OQ<DownloadFileParam>): DownloadTask; (param: RQ<DownloadFileParam>): Promise<DownloadFileResult>; }
```

| 参数 | 类型 |
| --- | --- |
| param | `OQ<DownloadFileParam>` |

#### 示例代码

##### 示例 1

```tsx
Taro.cloud.downloadFile({
  fileID: 'a7xzcb',
  success: res => {
    // get temp file path
    console.log(res.tempFilePath)
  },
  fail: err => {
    // handle error
  }
})
```

##### 示例 2

```tsx
Taro.cloud.downloadFile({
  fileID: 'a7xzcb'
}).then(res => {
  // get temp file path
  console.log(res.tempFilePath)
}).catch(error => {
  // handle error
})
```

### getTempFileURL

用云文件 ID 换取真实链接，公有读的文件获取的链接不会过期，私有的文件获取的链接十分钟有效期。一次最多取 50 个。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.getTempFileURL.html)

```tsx
{ (param: OQ<GetTempFileURLParam>): void; (param: RQ<GetTempFileURLParam>): Promise<GetTempFileURLResult>; }
```

| 参数 | 类型 |
| --- | --- |
| param | `OQ<GetTempFileURLParam>` |

#### 示例代码

##### 示例 1

```tsx
Taro.cloud.getTempFileURL({
  fileList: [{
    fileID: 'a7xzcb',
    maxAge: 60 * 60, // one hour
  }]
}).then(res => {
  // get temp file URL
  console.log(res.fileList)
}).catch(error => {
  // handle error
})
```

##### 示例 2

```tsx
Taro.cloud.getTempFileURL({
  fileList: ['cloud://xxx', 'cloud://yyy'],
  success: res => {
    // get temp file URL
    console.log(res.fileList)
  },
  fail: err => {
    // handle error
  }
})
```

### deleteFile

从云存储空间删除文件，一次最多 50 个

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.deleteFile.html)

```tsx
{ (param: OQ<DeleteFileParam>): void; (param: RQ<DeleteFileParam>): Promise<DeleteFileResult>; }
```

| 参数 | 类型 |
| --- | --- |
| param | `OQ<DeleteFileParam>` |

#### 示例代码

##### 示例 1

```tsx
.cloud.deleteFile({
  fileList: ['a7xzcb']
}).then(res => {
  // handle success
  console.log(res.fileList)
}).catch(error => {
  // handle error
})
```

##### 示例 2

```tsx
Taro.cloud.deleteFile({
  fileList: ['a7xzcb'],
  success: res => {
    // handle success
    console.log(res.fileList)
  },
  fail: err => {
    // handle error
  },
  complete: res => {
    // ...
  }
})
```

### database

获取数据库实例

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/Cloud.database.html)

```tsx
(config?: IConfig) => Database
```

| 参数 | 类型 |
| --- | --- |
| config | `IConfig` |

#### 示例代码

##### 示例 1

以下调用获取默认环境的数据库的引用：

```tsx
const db = Taro.cloud.database()
```

##### 示例 2

假设有一个环境名为 test-123，用做测试环境，那么可以如下获取测试环境数据库：

```tsx
const testDB = Taro.cloud.database({
  env: 'test-123'
})
```

### callContainer

调用云托管服务

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/container/Cloud.callContainer.html)

```tsx
<R = any, P = any>(params: CallContainerParam<P>) => Promise<CallContainerResult<R>>
```

| 参数 | 类型 |
| --- | --- |
| params | `R` |

#### 示例代码

假设已经初始化了一个叫c1的云开发实例，并发起云托管调用

``` tsx
const r = await c1.callContainer({
  path: '/path/to/container', // 填入容器的访问路径
  method: 'POST',
})
```

## 参数

### CallFunctionResult

云函数通用返回

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| result | `any` | 云函数返回的结果 |
| errMsg | `string` | 调用结果 |

### IApiParam

云函数通用参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| config | `IConfig` | 否 | 配置 |
| success | `(res: T) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(err: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(val: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

### IInitConfig

初始化配置

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| env | string or { database?: string; functions?: string; storage?: string; } | 否 | 默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境 |
| traceUser | `boolean` | 否 | 是否在将用户访问记录到用户管理中，在控制台中可见 |

### IConfig

配置

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| env | `string` | 否 | 使用的环境 ID，填写后忽略 init 指定的环境 |
| traceUser | `boolean` | 否 | 是否在将用户访问记录到用户管理中，在控制台中可见 |

### ICloudAPIParam

云函数 API 通用参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| config | `IConfig` | 否 | 配置 |

### CallFunctionParam

调用云函数参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| name | `string` | 是 | 云函数名 |
| data | `TaroGeneral.IAnyObject` | 否 | 传递给云函数的参数，在云函数中可通过 event 参数获取 |
| slow | `boolean` | 否 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallFunctionResult) => void` | 否 | 接口调用成功的回调函数 |

### UploadFileResult

上传文件结果

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fileID | `string` | 文件 ID |
| statusCode | `number` | 服务器返回的 HTTP 状态码 |
| errMsg | `string` | 调用结果 |

### UploadFileParam

上传文件参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| cloudPath | `string` | 是 | 云存储路径，命名限制见[文件名命名限制](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/guide/storage/naming.html) |
| filePath | `string` | 是 | 要上传文件资源的路径 |
| header | `TaroGeneral.IAnyObject` | 否 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: UploadFileResult) => void` | 否 | 接口调用成功的回调函数 |

### DownloadFileResult

下载文件结果

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tempFilePath | `string` | 临时文件路径 |
| statusCode | `number` | 服务器返回的 HTTP 状态码 |
| errMsg | `string` | 调用结果 |

### DownloadFileParam

下载文件参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| fileID | `string` | 是 | 云文件 ID |
| cloudPath | `string` | 否 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: DownloadFileResult) => void` | 否 | 接口调用成功的回调函数 |

### GetTempFileURLResult

获取临时文件结果

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fileList | `GetTempFileURLResultItem[]` | 文件列表 |
| errMsg | `string` | 调用结果 |

### GetTempFileURLResultItem

临时文件列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fileID | `string` | 云文件 ID |
| tempFileURL | `string` | 临时文件路径 |
| maxAge | `number` |  |
| status | `number` | 状态码 |
| errMsg | `string` | 调用结果 |

### GetTempFileURLParam

获取临时文件参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| fileList | `string[]` | 是 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: GetTempFileURLResult) => void` | 否 | 接口调用成功的回调函数 |

### DeleteFileResult

删除文件结果

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fileList | `DeleteFileResultItem[]` | 文件列表 |
| errMsg | `string` | 调用结果 |

### DeleteFileResultItem

删除文件列表

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fileID | `string` | 云文件 ID |
| status | `number` | 状态码 |
| errMsg | `string` | 调用结果 |

### DeleteFileParam

删除文件参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| fileList | `string[]` | 是 | 文件列表 |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: DeleteFileResult) => void` | 否 | 接口调用成功的回调函数 |

### IOptions

新建云开发操作实例

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| resourceAppid | `string` | 否 | 资源方 AppID, 不填则表示已登录的当前账号（如小程序中） |
| resourceEnv | `string` | 是 | 资源方云环境 ID |

### CallContainerParam

调用云托管参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| path | `string` | 是 | 服务路径 |
| method | string or number or symbol | 否 | HTTP请求方法，默认 GET |
| data | `P` | 否 | 请求数据 |
| header | `TaroGeneral.IAnyObject` | 否 | 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json |
| timeout | `number` | 否 | 超时时间，单位为毫秒 |
| dataType | `request.DataType` | 否 | 返回的数据格式 |
| responseType | "text" or "arraybuffer" | 否 | 响应的数据类型 |
| complete | `(res: any) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: TaroGeneral.CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallFunctionResult) => void` | 否 | 接口调用成功的回调函数 |

### CallContainerResult

调用云托管返回值

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `R` | 是 | 开发者云托管服务返回的数据 |
| header | `TaroGeneral.IAnyObject` | 是 | 开发者云托管返回的 HTTP Response Header |
| statusCode | `number` | 是 | 开发者云托管服务返回的 HTTP 状态码 |
| cookies | `TaroGeneral.IAnyObject` | 否 | 开发者云托管返回的 cookies，格式为字符串数组，仅小程序端有此字段 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| cloud.init | ✔️ |  |  |  |
| cloud.callFunction | ✔️ |  |  |  |
| cloud.uploadFile | ✔️ |  |  |  |
| cloud.downloadFile | ✔️ |  |  |  |
| cloud.getTempFileURL | ✔️ |  |  |  |
| cloud.deleteFile | ✔️ |  |  |  |
| cloud.database | ✔️ |  |  |  |
| cloud.Cloud | ✔️ |  |  |  |
| cloud.callContainer | ✔️ |  |  |  |
