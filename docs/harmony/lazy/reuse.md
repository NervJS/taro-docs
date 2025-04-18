---
title: Harmony 长列表节点复用
---

:::info
Taro v4.1.0+ 开始支持
:::

## 节点复用原理

节点复用是一种优化长列表性能的技术，通过复用已经创建的组件节点来减少不必要的创建和销毁操作，从而提升列表的渲染性能。

![复用使用方法和支持节点范围](https://img13.360buyimg.com/img/jfs/t1/277802/9/22633/55038/6800770dF346fb5f4/648bbe871c65ecfd.png)

## 使用方法

为支持节点复用，Taro 框架引入了一个新的属性 `reuseId`，表示以当前节点为根节点的子组件树可以被复用。开发者可以根据业务场景和 Item 结构特点，灵活地标记出具有相似性的子组件树。

### 支持复用的组件范围

当前支持复用的子组件如下表，上层业务在使用该特性的时候要保证可复用子组件树的所有子组件都在下表范围内，如果有要支持复用其他组件的需求，待 Taro 评估后决定是否提供。

| 组件名称    | 说明                                      |
| ----------- | ----------------------------------------- |
| View        | 基础视图组件                              |
| Text        | 文本组件                                  |
| Image       | 图片组件                                  |
| FlowItem    | 瀑布流 Item 组件                          |
| listItem    | 吸顶列表 Item 组件                        |
| MovableArea | 可移动区域组件，用于包裹 MovableView 组件 |
| MovableView | 可移动视图组件，可以在 MovableArea 中移动 |
| Input       | 输入框组件                                |

### reuseId 参数说明

| 参数    | 类型   | 默认值 | 必填 | 说明                                       |
| ------- | ------ | ------ | ---- | ------------------------------------------ |
| reuseId | string | 无     | 否   | 标识以当前节点为根节点的子组件树可以被复用 |

需要注意：

1. 如果该子组件树内部也包含 reuseId，则内部的 reuseId 会被忽略
2. 为最大程度发挥复用性能，上层业务要保证同一 reuseId 的子组件树尽量保持结构一致
3. 没有设置 reuseId 默认不复用

### 使用示例

```jsx
import React, { Fragment } from 'react'
import { FlowItem } from '@tarojs/components'

function Index(props) {
  const { allFeedsData } = props

  return (
    <>
      {allFeedsData
        .map((itemI, itemX) => {
          if (['Goods', 'Shop', 'Market', 'Video'].indexOf(itemI.tpl) === -1) return null

          const IS_VIDEO = itemI.tpl === 'Video'

          return (
            <FlowItem key={itemI.ikey} reuseId={IS_VIDEO ? '' : itemI.tpl}>
              <Fragment>
                {itemI.tpl === 'Goods' && <Goods item={itemI} index={itemI._index} />}
                {itemI.tpl === 'Shop' && <Shop item={itemI} index={itemI._index} />}
                {itemI.tpl === 'Market' && <Market item={itemI} index={itemI._index} />}
                {itemI.tpl === 'Video' && (
                  <TaroVideo
                    item={itemI}
                    index={itemI._index}
                    loca="right"
                    playVideoId={playVideoId}
                    playOrStopNextVideo={playOrStopNextVideo}
                  />
                )}
              </Fragment>
            </FlowItem>
          )
        })
        .filter((item) => !!item)}
    </>
  )
}
```
