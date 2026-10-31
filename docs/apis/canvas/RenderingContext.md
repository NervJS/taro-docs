---
title: RenderingContext
sidebar_label: RenderingContext
---

Canvas 绘图上下文。

****

- 通过 Canvas.getContext('2d') 接口可以获取 CanvasRenderingContext2D 对象，实现了 [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) 定义的属性、方法。
- 通过 Canvas.getContext('webgl') 或 OffscreenCanvas.getContext('webgl') 接口可以获取 WebGLRenderingContext 对象，实现了 [WebGL 1.0](https://www.khronos.org/registry/webgl/specs/latest/1.0/) 定义的所有属性、方法、常量。
- CanvasRenderingContext2D 的 drawImage 方法 2.10.0 起支持传入通过 SelectorQuery 获取的 video 对象，2.29.0 起支持传入开启了自定义渲染的 LivePusherContext 对象。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="抖音小程序" src={require('@site/static/img/platform/tt.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html)
