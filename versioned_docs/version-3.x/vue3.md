---
title: Vue3
---

Taro 可以使用 Vue 3 进行开发，开发者可以使用 `taro init` 命令创建 Vue3 的模版，包括 **default**、 **vuex** 以及 [NutUI](https://nutui.jd.com/) 。我们推荐使用 NutUI4.0 模版进行开发。

具体用法可以参考 Taro Vue 系列文档。

开发者可以自行选择使用 options 式配置或 [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) 组织逻辑，浏览 [Vue 3 文档](https://v3.vuejs.org/) 以了解更多的 Vue3 改动。

## JSX

我们可以直接使用 JSX 编写 Vue3 组件，相关注意事项：

- 小程序的 `bindtap` 事件在 JSX 中需要绑定为 `onClick`。
- 事件名命名规范为 **onCamelcase**，如小程序的事件名为 `bindtouchstart`，JSX 中需要绑定为 `onTouchstart`。
- Taro `v3.4.5+` 开始支持在 H5 中使用 JSX。

例子：

```jsx
import { reactive } from 'vue'
import { View, Text, Button } from '@tarojs/components'

export default {
  name: 'Index',
  components: {
    View,
    Text,
    Button,
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI 开发小程序',
      msg2: '你成功了～',
    })

    const handleClick = (msg) => {
      state.msg = msg
    }

    return () => {
      return (
        <View>
          <View>
            <Text>{state.msg}</Text>
          </View>
          <Button onTouchstart={() => handleClick(state.msg2)}>Confirm</Button>
        </View>
      )
    }
  },
}
```

使用 `ts` 用户可以在 `tsconfig.json` 中引入组件的类型提示：

```json
{
  "compilerOptions": {
    "types": ["@tarojs/components/vue3"]
  }
}
```

## vueLoaderOption

:::info
Taro v3.4.8 开始支持
:::

传递给 VueLoader 的编译配置，编译配置细节请参阅 [vue-loader 文档](https://vue-loader.vuejs.org/options.html)。

Taro 中可以通过修改 `@tarojs/plugin-framework-vue3` 的配置项去设置 vueLoader 的配置项：

```js title="config/index.js"
const config = {
  plugins: [
    [
      '@tarojs/plugin-framework-vue3',
      {
        vueLoaderOption: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('ec-canvas'),
            whitespace: 'preserve',
            // ...
          },
          reactivityTransform: true, // 开启vue3响应性语法糖
        },
      },
    ],
  ],
  // ...
}
```

## 其它限制

- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。[#6662](https://github.com/NervJS/taro/issues/6662)
- 不能在页面组件的 DOM 树之外插入元素，因此不支持 `<teleport>`
- Vue 3 内部实现使用了 Proxy ，在 iOS 9 及以下操作系统无法运行。但 Vue 官方团队在正式版发布后会推出兼容版本。
- 小程序端非类似 HTML 表单标签规范的表单组件，如 Picker，暂不兼容 v-model。Vue3 的 v-model 绑定属性改为了 modelValue，事件绑定改为了 update:modelValue。对于 HTML 表单标签会自动对接表单的值与事件，例如 input 会自动对应 modelValue 与 value、update:modelValue 与 @input。但对于 Picker 这种小程序特有表单则无法对应，建议这种情况不使用 v-model。
- VirtualList 组件需升级至 v3.6+ 版本
- 在 H5 端使用 ref 获取基础组件的 DOM 节点，现在只能得到适配层的 Vue 组件实例，而不是对应的 webComponent 根节点。在 Vue2 里可以通过修改父元素的 refs 属性实现，但 Vue3 中组件间初始化顺序有变化，因此暂时不能支持。（自 Taro v3.4.5 起，不再存在此限制，[#11537](https://github.com/NervJS/taro/pull/11537)）

## 相关阅读

Vue3 新特性可参阅 [Vue3 文档](https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features)。

Taro 是如何兼容 Vue3 的，可参阅 [Taro RFC](https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0001-vue-3-support.md)。

[《使用 Vue3 开发小程序》](https://taro-club.jd.com/topic/2267/%E4%BD%BF%E7%94%A8-vue3-%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F) by lillian。

[ NutUI 开发示例 ](https://github.com/jdf2e/nutui-demo/tree/master/taro) by jdf2e。
