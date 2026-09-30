---
title: RootPortal
sidebar_label: RootPortal
---

root-portal
使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果。主要用于制作弹窗、弹出层等。

支持情况：<img title="微信小程序" src={require('@site/static/img/platform/weapp.png').default} className="icon_platform" width="25px"/> <img title="H5" src={require('@site/static/img/platform/h5.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="React Native" src={require('@site/static/img/platform/rn.png').default} className="icon_platform icon_platform--not-support" width="25px"/> <img title="Harmony" src={require('@site/static/img/platform/harmony.png').default} className="icon_platform icon_platform--not-support" width="25px"/>

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html)

## 类型

```tsx
ComponentType<RootPortalProps>
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
import { useState } from 'react'
import { RootPortal, View, Button } from '@tarojs/components'

export default function RootPortalExample {
  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(!show)
  }
  render () {
    return (
      <View>
        <Button onClick={toggle}>显示root-portal</Button>
        {
          show && (<RootPortal><View>content</View></RootPortal>)
        }
      </View>
    )
  }
}
```
</TabItem>
</Tabs>

## RootPortalProps

| 参数 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | :---: | :---: | --- |
| enable | `boolean` | `true` | 否 | 是否从页面中脱离出来 |

### API 支持度

| API | 微信小程序 | 支付宝小程序 | H5 | React Native | Harmony |
| :---: | :---: | :---: | :---: | :---: | :---: |
| RootPortalProps.enable | ✔️ | ✔️ |  |  |  |
