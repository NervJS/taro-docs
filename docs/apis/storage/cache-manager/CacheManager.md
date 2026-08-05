---
title: CacheManager
sidebar_label: CacheManager
---

## 方法

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| mode | `keyof Mode` | 当前缓存模式 |
| origin | `string` | 全局 origin |
| maxAge | `number` | 全局缓存有效时间 |
| state | `keyof State` | 当前缓存管理器状态 |

### addRule

添加规则

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.addRule.html)

```tsx
(option: AddRuleOption) => string
```

| 参数 | 类型 |
| --- | --- |
| option | `AddRuleOption` |

#### 示例代码

```tsx
const ruleId = cacheManager.addRule({
  id: 'haha-rule',
  method: 'GET',
  url: '/haha',
  maxAge: 123455,
  dataSchema: [
    // data 字段的匹配，默认为空，表示不匹配
    // 类型可以是：string、number、boolean、null、object、any（表示任意类型均可），以及这些类型的数组表示方式
    {name: 'aaa', schema: {type: 'string'}}, // 类型为 string
    {name: 'bbb', schema: [{type: 'number'}, {type: 'string'}]}, // 类型为 number, string
    {name: 'ccc', schema: {type: 'string', value: 'abc'}}, // 值为 abc
    {name: 'ddd', schema: {type: 'string', value: /(abc|cba)/ig}}, // 值符合该正则匹配，如果该值不是字符串类型，则会被尝试转成字符串后再进行比较
    {name: 'ddd', schema: {type: 'string', value: val => val === '123'}}, // 传入函数来校验值
    {name: 'eee', schema: {type: 'object', value: [{ // 类型为对象，则通过嵌套的方式来逐层校验
      name: 'aaa', schema: {type: 'string'},
      // ...
      // 嵌套 dataSchema，同上面的方式一样来匹配嵌套的对象
    }]}},
    {name: 'fff', schema: {type: 'string[]'}}, // 类型为 string 数组
    {name: 'ggg', schema: {type: 'any'}}, // 类型为任意类型
    {name: 'hhh', schema: {type: 'any[]'}}, // 类型为任意类型的数组
  ]
})
```

### addRules

批量添加规则

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.addRules.html)

```tsx
(option: AddRulesOption) => string[]
```

| 参数 | 类型 |
| --- | --- |
| option | `AddRulesOption` |

### clearCaches

清空所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.clearCaches.html)

```tsx
() => void
```

### clearRules

清空所有规则，同时会删除对应规则下所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.clearRules.html)

```tsx
() => void
```

### deleteCache

删除缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteCache.html)

```tsx
(id: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 缓存 id |

### deleteCaches

批量删除缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteCaches.html)

```tsx
(ids: string[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ids | `string[]` | 缓存 id 列表 |

### deleteRule

删除规则，同时会删除对应规则下所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteRule.html)

```tsx
(id: string) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 规则 id |

### deleteRules

批量删除规则，同时会删除对应规则下所有缓存

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.deleteRules.html)

```tsx
(ids: string[]) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ids | `string[]` | 规则 id 列表 |

### match

匹配命中的缓存规则，一般需要和 request 事件搭配使用

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.match.html)

```tsx
(option: MatchOption) => MatchResult
```

| 参数 | 类型 |
| --- | --- |
| option | `MatchOption` |

### off

取消事件监听

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.off.html)

```tsx
(eventName: string, handler: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| handler | `TaroGeneral.EventCallback` | 事件监听函数 |

### on

监听事件

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.on.html)

```tsx
(eventName: keyof OnEventName, handler: TaroGeneral.EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `keyof OnEventName` | 事件名称 |
| handler | `TaroGeneral.EventCallback` | 事件监听函数 |

### start

开启缓存，仅在 mode 为 none 时生效，调用后缓存管理器的 state 会置为 1

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.start.html)

```tsx
() => void
```

### stop

关闭缓存，仅在 mode 为 none 时生效，调用后缓存管理器的 state 会置为 0

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/CacheManager.stop.html)

```tsx
() => void
```

## 参数

### Mode

| 参数 | 说明 |
| --- | --- |
| weakNetwork | 默认值，弱网/离线使用缓存返回 |
| always | 总是使用缓存返回 |
| none | 不开启，后续可手动开启/停止使用缓存返回 |

### State

| 参数 | 说明 |
| --- | --- |
| 0 | 不使用缓存返回 |
| 1 | 使用缓存返回 |
| 2 | 未知 |

### DataSchema

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| type | `string` | 是 | 需要匹配的 data 对象的参数类型<br />string、number、boolean、null、object、any（表示任意类型），<br />同时支持数组模式（数组模式则在类型后面加 []，如 string[] 表示字符串数组） |
| value | string or Function or RegExp or DataRule[] | 否 | 需要匹配的 data 对象的参数值<br />当 type 为基本类型时，可以用 string/regexp 来匹配固定的值，<br />也可以通过 function 来确定值是否匹配，<br />如果传入的 type 是 object，那么表示需要嵌套匹配值是否正确，可以传入 Array |

### DataRule

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 需要匹配的参数名 |
| schema | DataSchema or DataSchema[] |  |

### RuleObject

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | :---: | --- |
| id | `string` |  | 规则 id，如果不填则会由基础库生成 |
| method | `string` |  | 请求方法，可选值 GET/POST/PATCH/PUT/DELETE，如果为空则表示前面提到的所有方法都能被匹配到 |
| url | `any` |  | uri 匹配规则，可参考规则字符串写法和正则写法 |
| maxAge | `number` | `7 * 24 * 60 * 60 * 1000` | 缓存有效时间，单位为 ms，不填则默认取缓存管理器全局的缓存有效时间 |
| dataSchema | `DataRule[]` |  | 匹配请求参数 |

### Rule

### AddRuleOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rule | `Rule` | 规则 |

### AddRulesOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rules | `Rule[]` | 规则列表 |

### MatchOption

| 参数 | 说明 |
| --- | --- |
| evt | request 事件对象 |

### MatchResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| ruleId | `string` | 命中的规则id |
| cacheId | `string` | 缓存id |
| data | `any` | 缓存内容，会带有 fromCache 标记，方便开发者区分内容是否来自缓存 |
| createTime | `number` | 缓存创建时间 |
| maxAge | `number` | 缓存有效时间 |

### OnEventName

| 参数 | 说明 |
| --- | --- |
| request | 发生 wx.request 请求，只在缓存管理器开启阶段会触发 |
| enterWeakNetwork | 进入弱网/离线状态 |
| exitWeakNetwork | 离开弱网/离线状态 |

## API 支持度

| API | 微信小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: |
| CacheManager.addRule | ✔️ |  |  |  |
| CacheManager.addRules | ✔️ |  |  |  |
| CacheManager.clearCaches | ✔️ |  |  |  |
| CacheManager.clearRules | ✔️ |  |  |  |
| CacheManager.deleteCache | ✔️ |  |  |  |
| CacheManager.deleteCaches | ✔️ |  |  |  |
| CacheManager.deleteRule | ✔️ |  |  |  |
| CacheManager.deleteRules | ✔️ |  |  |  |
| CacheManager.match | ✔️ |  |  |  |
| CacheManager.off | ✔️ |  |  |  |
| CacheManager.on | ✔️ |  |  |  |
| CacheManager.start | ✔️ |  |  |  |
| CacheManager.stop | ✔️ |  |  |  |
