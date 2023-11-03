---
title: ShareElement
sidebar_label: ShareElement
---

共享元素

共享元素是一种动画形式，类似于 [`flutter Hero`](https://flutterchina.club/animations/hero-animations/) 动画，表现为元素像是在页面间穿越一样。该组件需与 [`PageContainer`](/docs/components/viewContainer/page-container) 组件结合使用。
使用时需在当前页放置 `ShareElement` 组件，同时在 `PageContainer` 容器中放置对应的 `ShareElement` 组件，对应关系通过属性值 key 映射。当设置 `PageContainer` `显示时，transform` 属性为 `true` 的共享元素会产生动画。当前页面容器退出时，会产生返回动画。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="支付宝小程序" src={require('@site/static/img/platform/alipay.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html)

## 类型

```tsx
ComponentType<ShareElementProps>
```

## 示例代码

import { ReactIcon, VueIcon } from '@site/static/icons'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  defaultValue="React"
  values={[{ label: <ReactIcon />, value: "React" }]}>
<TabItem value="React">

```tsx
// index.js
import { useState, useCallback } from 'react'
import { View, Button, PageContainer, ShareElement } from '@tarojs/components'

import './index.scss'

const contacts = [
  { id: 1, name: 'Frank', img: 'frank.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 2, name: 'Susan', img: 'susan.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 3, name: 'Emma', img: 'emma.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 4, name: 'Scott', img: 'scott.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 5, name: 'Bob', img: 'bob.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 6, name: 'Olivia', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 7, name: 'Anne', img: 'anne.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
  { id: 8, name: 'sunny', img: 'olivia.png', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' }
]

export default function () {
  const [show, setShow] = useState(false)
  const [contact, setContact] = useState(contacts[0])
  const [transformIdx, setTransformIdx] = useState(0)

  const onBeforeEnter = useCallback((res) => {
    console.log('onBeforeEnter: ', res)
  }, [])
  const onEnter = useCallback((res) => {
    console.log('onEnter: ', res)
  }, [])
  const onAfterEnter = useCallback((res) => {
    console.log('onAfterEnter: ', res)
  }, [])
  const onBeforeLeave = useCallback((res) => {
    console.log('onBeforeLeave: ', res)
  }, [])
  const onLeave = useCallback((res) => {
    console.log('onLeave: ', res)
  }, [])
  const onAfterLeave = useCallback((res) => {
    console.log('onAfterLeave: ', res)
  }, [])

  const showNext = (e, index) => {
    setShow(true)
    setContact(contacts[index])
    setTransformIdx(index)
  }

  const showPrev = useCallback(() => {
    setShow(false)
  }, [])

  return (
    <View>
      <View className="screen screen1">
        {
          contacts.map((item, index) => (
            <View key={item.id} className="contact" onClick={e => showNext(e, index)}>
              <ShareElement duration={300} className="name" key="name" transform={transformIdx === index}>
                {item.name}
              </ShareElement>
              <View className="list">
                <View>Phone: {item.phone}</View>
                <View>Mobile: {item.mobile}</View>
                <View>Email: {item.email}</View>
              </View>
            </View>
          ))
        }
      </View>
      <PageContainer
        show={show}
        overlay={false}
        closeOnSlideDown
        duration={300}
        position='center'
        onBeforeEnter={onBeforeEnter}
        onEnter={onEnter}
        onAfterEnter={onAfterEnter}
        onBeforeLeave={onBeforeLeave}
        onLeave={onLeave}
        onAfterLeave={onAfterLeave}
      >
        <View className="screen screen2">
          <View className="contact">
            <ShareElement className="name" key="name" duration={300} transform>
              {contact.name}
            </ShareElement>
            <View className={`paragraph ${show ? 'enter' : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl enim, sodales non augue efficitur, sagittis
              varius neque. Fusce dolor turpis, maximus eu volutpat quis, pellentesque et ligula. Ut vehicula metus in nibh
              mollis ornare. Etiam aliquam lacinia malesuada. Vestibulum dignissim mollis quam a tristique. Maecenas neque
              mauris, malesuada vitae magna eu, congue consectetur risus. Etiam vitae pulvinar ex. Maecenas suscipit mi ac
              imperdiet pretium. Aliquam velit mauris, euismod quis elementum sed, malesuada non dui. Nunc rutrum sagittis
              ligula in dapibus. Cras suscipit ut augue eget mollis. Donec auctor feugiat ipsum id viverra. Vestibulum eu nisi
              risus. Vestibulum eleifend dignissim.

            </View>
            <Button className="screen2-button" onClick={showPrev} hidden={!show} hoverClass="none">Click Me</Button>
          </View>
        </View>
      </PageContainer>
    </View>
  )
}
```
```scss
\/** index.scss *\/
page {
  color: #333;
  background-color: #ddd;
  overflow: hidden;
}

button {
  border: 0 solid #0010ae;
  background-color: #1f2afe;
  color: #fff;
  font-size: 120%;
  padding: 8px 16px;
  outline-width: 0;
  -webkit-appearance: none;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);
}

.screen {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  -webkit-overflow-scrolling: touch;
}

.contact {
  position: relative;
  padding: 16px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.avatar {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 0;
}

.name {
  height: 65px;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}

.list {
  padding-top: 8px;
  padding-left: 32px;
}

.screen1 {
  overflow-y: scroll;
  padding: 0;
}

.screen1 .contact {
  margin: 16px;
  height: auto;
  width: auto;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.screen2-button {
  display: block;
  margin: 24px auto;
}

.paragraph {
  -webkit-transition: transform ease-in-out 300ms;
  transition: transform ease-in-out 300ms;
  -webkit-transform: scale(0.6);
  transform: scale(0.6);
}

.enter.paragraph {
  transform: none;
}
```
</TabItem>
</Tabs>

## ShareElementProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| key | `string` |  | 否 | 映射标记<br />不推荐: 使用mapkey替换key |
| mapkey | `string` |  | 否 | 映射标记 |
| name | `string` |  | 否 | 映射标记 |
| transform | `boolean` | `false` | 否 | 是否进行动画 |
| duration | `number` | `300` | 否 | 动画时长，单位毫秒 |
| easingFunction | `string` | `ease-out` | 否 | css缓动函数 |
| transitionOnGesture | `boolean` | `false` | 否 | 手势返回时是否进行动画 |
| shuttleOnPush | "from" or "to" | `"to"` | 否 | 指定 push 阶段的飞跃物 |
| shuttleOnPop | `string` | `"to"` | 否 | 指定 pop 阶段的飞跃物 |
| rectTweenType | "materialRectArc" or "materialRectCenterArc" or "linear" or "elasticIn" or "elasticOut" or "elasticInOut" or "bounceIn" or "bounceOut" or "bounceInOut" or "cubic-bezier(x1," | `"materialRectArc"` | 否 | 动画插值曲线 |
| onFrame | `string` |  | 否 | 动画帧回调 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ShareElementProps.key | ✔️ |  |  |  |  |
| ShareElementProps.mapkey | ✔️ |  |  |  |  |
| ShareElementProps.name |  | ✔️ |  |  |  |
| ShareElementProps.transform | ✔️ | ✔️ |  |  |  |
| ShareElementProps.duration | ✔️ | ✔️ |  |  |  |
| ShareElementProps.easingFunction | ✔️ | ✔️ |  |  |  |
| ShareElementProps.transitionOnGesture | ✔️ |  |  |  |  |
| ShareElementProps.shuttleOnPush | ✔️ |  |  |  |  |
| ShareElementProps.shuttleOnPop | ✔️ |  |  |  |  |
| ShareElementProps.rectTweenType | ✔️ |  |  |  |  |
| ShareElementProps.onFrame | ✔️ |  |  |  |  |
