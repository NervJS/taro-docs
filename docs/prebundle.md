---
title: 依赖预加载
---

> 版本要求 3.5+

编译优化有很多可供选择的方案，通过 webpack5 我们可以实现很多有意思的特性，而依赖预加载就是其中之一。受 [UmiJS mfsu](https://umijs.org/zh-CN/docs/mfsu) 特性的启发，可以预先把项目的 node_modules 依赖打包为一个**模块联邦（Module Federation）** remote 应用，再次编译时 Webpack 则无需再对依赖进行编译，从而提升编译速度。

## 开启 PreBundle 配置

对于很多大型项目编译是非常耗时的事情，很多细小的变更都需要全量编译会带来很高的损耗。通过依赖预编译跳过部分编译，开发环境热更新占用内存可以大大降低，热更新所需时间也将大幅减少；生产模式也可以通过提前编译依赖，大幅提升部署效率。

> 通过 [compiler.prebundle](/docs/next/config-detail#compilerprebundle) 配置开启依赖预编译特性。

```jsx
/** config/index.js */
const config = {
  compiler: {
    type: 'webpack5',
    // 仅 webpack5 支持依赖预编译配置
    prebundle: {
      enable: true
    }
  }
}
```

需要注意的是，Taro 遵循 Webpack **“编译安全比编译速度重要”** 的理念，默认情况下 Taro 并不会启用依赖预编译，虽然我们相信依赖预编译可以带给开发者更好的体验，但编译安全仍然是需要考虑的重要因素。

## 特性实现

依赖预编译可以分为三步：

1. 收集依赖
2. 打包依赖
3. 打包 Module Federation Remote 应用

Taro 参考 [Vite](https://cn.vitejs.dev/) 使用了 esbuild 收集用户使用到的第三方依赖，并分别进行打包。打包后的模块会作为 Webpack 的 entry，最终打包为模块联邦 Remote 应用，供主应用（Host）消费。实现细节请参考 [RFC 文档](https://github.com/NervJS/taro/discussions/11533)。

Taro 会在小程序环境的 dev 模式下默认开启依赖预编译功能。首次编译时，因为使用了 esbuild 打包第三方依赖，所以会比普通编译稍快。二次编译时，Taro 能直接复用 Remote App，Webpack 只需编译业务代码，因此根据不同项目会有不同的编译提速效果。

依赖预编译的流程图：

![https://storage.360buyimg.com/cjj-pub-images/prebundle.png](https://storage.360buyimg.com/cjj-pub-images/prebundle.png)

## 提速效果

以 [NutUI 组件示例库](https://github.com/jdf2e/nutui/tree/next/src/sites/mobile-taro/vue)为例，分别测试 dev 与 prod 环境下编译微信小程序的编译提速效果：

![compile-speed_dev](https://storage.jd.com/cjj-pub-images/compile-speed_dev.png)

![compile-speed_prod](https://storage.jd.com/cjj-pub-images/compile-speed_prod.png)

可以看出：

1. 在 dev 环境下因为 Taro 默认开启了依赖预编译，因此 Webpack5 首次编译速度比 Webpack4 稍快。而 prod 环境没有默认开启依赖预编译，因此两者速度相当（而且 Webpack5 需要写入缓存，可能会比 Webpack4 稍慢）。
2. 无论是 dev 还是 prod 环境，在完全命中缓存的最优情况下，Webpack5 的编译速度都能得到极大提升。即使是修改源码导致了部分缓存失效时，编译速度仍然比首次编译快得多。

## 注意事项

目前该特性仅支持 h5 和小程序编译，后续会拆分出来 webpack5 插件供非 Taro 项目使用。
