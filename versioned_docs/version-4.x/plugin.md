---
title: 使用插件
---

Taro 引入了插件化机制，目的是为了让开发者能够通过编写插件的方式来为 Taro 拓展更多功能或为自身业务定制个性化功能。

## 插件集合

### 官方插件

- [@tarojs/plugin-mini-ci](./plugin-mini-ci)，小程序持续集成插件。感谢 [@bigmeow](https://github.com/bigmeow) 的贡献！
- [@tarojs/plugin-mock](https://github.com/NervJS/taro-plugin-mock)，一个简易的数据 mock 插件。

### 社区优质插件

- [编译提速插件](treasures#插件)
- [骨架屏插件](treasures#插件)
- [tailwindcss 插件](treasures#插件)
- [动态加载代码插件](treasures#插件)
- [命令行创建组件/页面插件](treasures#插件)
- [兼容 wsl 插件](treasures#插件)

## 如何引入插件

你可以从 npm 或者本地中引入插件，引入方式主要通过 [编译配置](./config-detail)中的 `plugins` 和 `presets`，使用如下

### plugins

插件在 Taro 中，一般通过[编译配置](./config-detail)中的 `plugins` 字段进行引入。

`plugins` 字段取值为一个数组，配置方式如下：

```js title="/config/index.js"
const config = {
  plugins: [
    // 引入 npm 安装的插件
    '@tarojs/plugin-mock',
    // 引入 npm 安装的插件，并传入插件参数
    [
      '@tarojs/plugin-mock',
      {
        mocks: {
          '/api/user/1': {
            name: 'judy',
            desc: 'Mental guy',
          },
        },
      },
    ],
    // 从本地绝对路径引入插件，同样如果需要传入参数也是如上
    '/absulute/path/plugin/filename',
  ],
}
```

### presets

如果你有一系列插件需要配置，而他们通常是组合起来完成特定的事儿，那你可以通过**插件集** `presets` 来进行配置。

配置[编译配置](./config-detail)中的 `presets` 字段，如下。

```js title="/config/index.js"
const config = {
  presets: [
    // 引入 npm 安装的插件集
    '@tarojs/preset-sth',
    // 引入 npm 安装的插件集，并传入插件参数
    [
      '@tarojs/plugin-sth',
      {
        arg0: 'xxx',
      },
    ],
    // 从本地绝对路径引入插件集，同样如果需要传入参数也是如上
    '/absulute/path/preset/filename',
  ],
}
```
