---
title: 长列表组件使用教程
---

:::info
Taro v4.1.0+ 开始支持
:::

长列表场景是大部分业务中都会出现的高频场景，因此在 Taro For Harmony 中，我们针对长列表场景提供了针对性的组件，来解决长列表节点的渲染和性能问题。

## 瀑布流组件

针对瀑布流类型的组件，我们提供了 `WaterFlow`、 `FlowItem` 以及 `FlowSection` 三个组件供开发者组合使用。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250414165912.63171312108464795647082673503454:50001231000000:2800:841C788EAF028DF00289E424717ADD26AE6C1E63ABB113D71D98ADAD1B05169B.png)

### WaterFlow 组件

#### 功能描述

瀑布流布局容器，由"行"和"列"分割的单元格所组成，通过容器自身的排列规则，将不同大小的"项目"自上而下，如瀑布般紧密布局，仅支持 FlowSection 子组件，使用时需要给 WaterFlow 一个固定高度。

#### 参数说明

WaterFlow 的参数是 scroll-view 参数的子集，支持 scroll-view 除横向布局相关的参数和事件，WaterFlow 专有参数如下:

| 参数                | 类型   | 默认值 | 必填 | 说明                                                   |
| ------------------- | ------ | ------ | ---- | ------------------------------------------------------ |
| upperThresholdCount | number | 0      | 否   | 距顶部/左边多少个 FlowItem 时，触发 scrolltoupper 事件 |
| lowerThresholdCount | number | 0      | 否   | 距底部/右边多少个 FlowItem 时，触发 scrolltolower 事件 |
| cacheCount          | number | 1      | 否   | 设置预加载的 Item 条数                                 |

### FlowItem 组件

#### 功能描述

FlowSection 的子组件，用来展示瀑布流具体 item，支持单个子组件。

### FlowSection 组件

#### 功能描述

设置 FlowItem 分组配置信息，实现同一个瀑布流组件内部各分组使用不同列数混合布局，仅支持 FlowItem 子组件，且该组件的父组件只能是 WaterFlow。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250414170230.61245438925165538889632558324147:50001231000000:2800:4FDAFD38F8F20503C14BACB79EBC17D69DD408FD1441B66B0238E87862F12EAB.png)

#### 参数说明

| 参数      | 类型          | 默认值 | 必填 | 说明                                                                                                          |
| --------- | ------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------- |
| column    | number        | 1      | 否   | 纵向布局为列数，横向布局为行数。设置当前分组布局列/行数，该属性会将父组件 WaterFlow 的宽/高度均分成 column 份 |
| rawGap    | number/String | -      | 否   | 该分组的行间距，单位:vp                                                                                       |
| columnGap | number/String | -      | 否   | 该分组的列间距，单位:vp                                                                                       |

#### 使用示例

```jsx
import { View, WaterFlow, FlowItem, FlowSection } from '@tarojs/components'

export default function Index() {
  reutrn(
    <WaterFlow
      className="waterflow"
      lowerThresholdCount={20}
      scrollTop={scrollTop}
      showScrollbar={false}
      onScroll={scrollHandle}
      onScrollToLower={updateFeeds}
    >
      <FlowSection column={2} columnGap={Taro.pxTransform(20)} className="rcd-feeds">
        {FeedsRender}
      </FlowSection>
      <FlowSection column={1}>
        {isError && (
          <FlowItem>
            <View className="fcd-page-error">
              <View className="fcd-page-error__tip">网络不给力哦~请检查您的网络</View>
              <View className="fcd-page-error__refresh-btn" onClick={loadData}>
                刷新重试
              </View>
            </View>
          </FlowItem>
        )}
        {isLoading && !feedsData.isCache && (
          <FlowItem>
            <View className="feed-loading">
              <Image
                src="https://img13.360buyimg.com/img/jfs/t1/157587/2/39477/464436/65fcfe10F62450166/08cbf710d5be450d.gif"
                className="feed-loading-icon"
              ></Image>
            </View>
          </FlowItem>
        )}
        {isFeedsEnd && (
          <FlowItem>
            <View className="feeds-end">到底了</View>
          </FlowItem>
        )}
      </FlowSection>
    </WaterFlow>
  )
}
```

## 吸顶长列表组件

### List 组件

#### 功能描述

列表布局容器，仅支持 StickySection，ListItem 子组件，使用时需要给 List 一个固定高度。

#### 参数说明

List 的参数是 scroll-view 参数的子集，支持 scroll-view 的部分参数和事件，List 专有参数如下:

| 参数                | 类型          | 默认值 | 必填 | 说明                                                                                                                                                    |
| ------------------- | ------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| upperThresholdCount | number        | 0      | 否   | 距顶部/左边多少个 item 时，触发 scrolltoupper 事件                                                                                                      |
| lowerThresholdCount | number        | 0      | 否   | 距底部/右边多少个 item 时，触发 scrolltolower 事件                                                                                                      |
| cacheCount          | number        | 1      | 否   | item 预加载数                                                                                                                                           |
| stickyHeader        | boolean       | -      | 否   | List 包含子组件 StickySection，StickySection 有子组件 StickyHeader 时，该属性用于控制 StickyHeader 是否吸顶                                             |
| space               | number/String | 0      | 否   | 子组件主轴方向的间隔，单位:vp。说明：该字段只作用与 List 的直接子组件，对于 List 的子组件为 StickySection 的场景，该字段对 StickySection 子组件并不生效 |

:::tip
如果不需要吸顶能力，推荐直接使用 List 套 ListItem 的结构。
:::

### ListItem 组件

#### 功能描述

List，StickySection 的子组件，用来展示列表布局容器具体 item，支持单个子组件。

### StickyHeader 组件

#### 功能描述

StickySection 的子组件，设置 StickySection 的头部组件。当 List 组件 stickyHeader 属性为 true，且 StickySection 设置了 StickyHeader 时，该组件具有吸顶的能力。

### StickySection 组件

#### 功能描述

以分组的形式展示列表 item 分组，仅支持 ListItem，StickyHeader 子组件，且必须配合 List 组件使用。

#### 参数说明

| 参数  | 类型          | 默认值 | 必填 | 说明                                                                                                           |
| ----- | ------------- | ------ | ---- | -------------------------------------------------------------------------------------------------------------- |
| space | number/String | 0      | 否   | 列表项间距。只作用于 ListItem 与 ListItem 之间，不作用于 header 与 ListItem、footer 与 ListItem 之间。单位：vp |

#### 使用示例

```jsx
import { View, List, StickySection, StickyHeader, ListItem } from '@tarojs/components'

export default function Index() {
  reutrn(
    <List
      stickyHeader
      showScrollbar={false}
      className={styles.scrollV}
      scrollY={canScroll}
      onScroll={onScroll}
      scrollTop={scrollTopValue}
      onScrollToLower={srollToLowerHandler}
      lowerThreshold={100}
    >
      <StickySection className={styles.section}>
        <ListItem className={styles.listItem}>{floorItemsSections.floorItemsBeforeSticky}</ListItem>
      </StickySection>
      <StickySection className={`${styles.section} ${styles.sectionMain}`}>
        <StickyHeader>{floorItemsSections.stickyFloorItems}</StickyHeader>
        {feedItems.map((item, index) => {
          return (
            <ListItem key={`feed${index}`} className={styles.listItem}>
              {item}
            </ListItem>
          )
        })}
        <ListItem className={styles.listItem}>
          {searchStateInfo.showLoading ? <Loading /> : null}
          {searchStateInfo.showNoMore ? <PageFooter /> : null}
          {searchStateInfo.showNetError ? <NetErrorTip onRetry={retry} /> : null}
          {searchStateInfo.showPagIndicator ? (
            <Pagination pageInfo={pagIndicatorInfo} onPageChange={onPageChange} />
          ) : null}
        </ListItem>
      </StickySection>
    </List>
  )
}
```
