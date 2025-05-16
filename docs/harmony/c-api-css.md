---
title: Harmony-CPP CSS 属性支持
---

:::info
本文档列出了 Harmony 平台支持的 CSS 属性及其可选值
:::

## 选择器

### 基本选择器

| 选择器         | 示例               | 说明                          |
| -------------- | ------------------ | ----------------------------- |
| 类选择器       | `.class`           | 选择所有具有指定 class 的元素 |
| 后代选择器     | `.parent .child`   | 选择指定元素内的所有后代元素  |
| 直接后代选择器 | `.parent > .child` | 选择指定元素的直接子元素      |
| 多类选择器     | `.class1.class2`   | 选择同时具有多个 class 的元素 |

### 伪元素

| 选择器  | 示例              | 说明                 |
| ------- | ----------------- | -------------------- |
| :before | `.element:before` | 在元素内容前插入内容 |
| :after  | `.element:after`  | 在元素内容后插入内容 |

### 伪类

| 选择器       | 示例                    | 说明                       |
| ------------ | ----------------------- | -------------------------- |
| :nth-child   | `.parent :nth-child(2)` | 选择父元素的第 n 个子元素  |
| :first-child | `.parent :first-child`  | 选择父元素的第一个子元素   |
| :last-child  | `.parent :last-child`   | 选择父元素的最后一个子元素 |
| :empty       | `.element:empty`        | 选择没有子元素的元素       |

### 使用示例

```css
/* 类选择器 */
.class {
  color: red;
}

/* 后代选择器 */
.parent .child {
  margin: 10px;
}

/* 直接后代选择器 */
.parent > .child {
  padding: 5px;
}

/* 多类选择器 */
.class1.class2 {
  background-color: blue;
}

/* 伪元素 */
.element:before {
  content: '前缀';
}

.element:after {
  content: '后缀';
}

/* 伪类 */
.parent :nth-child(2) {
  font-weight: bold;
}

.parent :first-child {
  color: green;
}

.parent :last-child {
  color: blue;
}

.element:empty {
  display: none;
}
```

:::warning
暂不支持 CSS 属性继承，所有属性都需要显式设置
:::

## 布局属性

### Flex 布局

| 属性            | 默认值       | 可选值                                                                              | 说明                                    |
| --------------- | ------------ | ----------------------------------------------------------------------------------- | --------------------------------------- |
| display         | 'flex'       | 'flex', 'none', 'block', 'box'                                                      | 设置元素的显示类型，不支持 inline-block |
| flex-wrap       | 'nowrap'     | 'nowrap', 'wrap', 'wrap-reverse'                                                    | 设置 flex 元素是否换行                  |
| flex-direction  | 'row'        | 'row', 'row-reverse', 'column', 'column-reverse'                                    | 设置 flex 元素的主轴方向                |
| align-items     | 'flex-start' | 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'                           | 设置 flex 元素在交叉轴上的对齐方式      |
| align-content   | 'flex-start' | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly' | 设置多行 flex 元素在交叉轴上的对齐方式  |
| justify-content | 'flex-start' | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly' | 设置 flex 元素在主轴上的对齐方式        |
| flex            | '0 1 auto'   | flexGrow, flexShrink, flexBasis                                                     | 设置 flex 元素的伸缩性                  |
| flex-grow       | 0            | Number                                                                              | 设置 flex 元素的放大比例                |
| flex-shrink     | 1            | Number                                                                              | 设置 flex 元素的缩小比例                |
| flex-basis      | 'auto'       | Length                                                                              | 设置 flex 元素在主轴上的初始大小        |
| align-self      | 'auto'       | 'flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'auto'                   | 设置单个 flex 元素在交叉轴上的对齐方式  |

### 定位

| 属性     | 默认值     | 可选值                          | 说明                                                                                         |
| -------- | ---------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| position | 'relative' | 'relative', 'absolute', 'fixed' | 设置元素的定位方式                                                                           |
| top      | 'auto'     | Length                          | 设置元素的上边距                                                                             |
| bottom   | 'auto'     | Length                          | 设置元素的下边距                                                                             |
| left     | 'auto'     | Length                          | 设置元素的左边距                                                                             |
| right    | 'auto'     | Length                          | 设置元素的右边距                                                                             |
| z-index  | 'auto'     | Number                          | 设置元素的堆叠顺序，注意：z-index 仅在相同层级元素之间生效，跨层级元素之间的堆叠顺序不受影响 |

### 盒模型

:::info
盒模型默认使用 `box-sizing: border-box`，即元素的宽度和高度包含内边距和边框
:::

| 属性           | 默认值 | 可选值                    | 说明               |
| -------------- | ------ | ------------------------- | ------------------ |
| margin         | 0      | Length（可设置 1~4 个值） | 设置元素的外边距   |
| margin-left    | 0      | Length                    | 设置元素的左外边距 |
| margin-right   | 0      | Length                    | 设置元素的右外边距 |
| margin-top     | 0      | Length                    | 设置元素的上外边距 |
| margin-bottom  | 0      | Length                    | 设置元素的下外边距 |
| padding        | 0      | Length（可设置 1~4 个值） | 设置元素的内边距   |
| padding-left   | 0      | Length                    | 设置元素的左内边距 |
| padding-right  | 0      | Length                    | 设置元素的右内边距 |
| padding-top    | 0      | Length                    | 设置元素的上内边距 |
| padding-bottom | 0      | Length                    | 设置元素的下内边距 |
| width          | 'auto' | Length                    | 设置元素的宽度     |
| min-width      | 'auto' | Length                    | 设置元素的最小宽度 |
| max-width      | 'none' | Length                    | 设置元素的最大宽度 |
| height         | 'auto' | Length                    | 设置元素的高度     |
| min-height     | 'auto' | Length                    | 设置元素的最小高度 |
| max-height     | 'none' | Length                    | 设置元素的最大高度 |

### 边框

| 属性                       | 默认值  | 可选值                                         | 说明                 |
| -------------------------- | ------- | ---------------------------------------------- | -------------------- |
| border                     | '0'     | Length（可设置 1~4 个值）                      | 设置元素的边框       |
| border-width               | '0'     | Length                                         | 设置元素的边框宽度   |
| border-left-width          | '0'     | Length                                         | 设置元素的左边框宽度 |
| border-right-width         | '0'     | Length                                         | 设置元素的右边框宽度 |
| border-top-width           | '0'     | Length                                         | 设置元素的上边框宽度 |
| border-bottom-width        | '0'     | Length                                         | 设置元素的下边框宽度 |
| border-color               | 'black' | Color（可设置 1~4 个值）                       | 设置元素的边框颜色   |
| border-left-color          | 'black' | Color                                          | 设置元素的左边框颜色 |
| border-right-color         | 'black' | Color                                          | 设置元素的右边框颜色 |
| border-top-color           | 'black' | Color                                          | 设置元素的上边框颜色 |
| border-bottom-color        | 'black' | Color                                          | 设置元素的下边框颜色 |
| border-style               | 'solid' | 'dotted', 'dashed', 'solid'（可设置 1~4 个值） | 设置元素的边框样式   |
| border-left-style          | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的左边框样式 |
| border-right-style         | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的右边框样式 |
| border-top-style           | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的上边框样式 |
| border-bottom-style        | 'solid' | 'dotted', 'dashed', 'solid'                    | 设置元素的下边框样式 |
| border-radius              | '0'     | Length（可设置 1~4 个值）                      | 设置元素的边框圆角   |
| border-top-left-radius     | '0'     | Length                                         | 设置元素的左上角圆角 |
| border-top-right-radius    | '0'     | Length                                         | 设置元素的右上角圆角 |
| border-bottom-left-radius  | '0'     | Length                                         | 设置元素的左下角圆角 |
| border-bottom-right-radius | '0'     | Length                                         | 设置元素的右下角圆角 |

## 文本属性

| 属性                  | 默认值         | 可选值                                          | 说明                               |
| --------------------- | -------------- | ----------------------------------------------- | ---------------------------------- |
| color                 | 'black'        | Color                                           | 设置文本颜色，不会继承             |
| font-size             | '14vp'         | Length                                          | 设置字体大小，不会继承             |
| text-align            | 'left'         | 'center', 'left', 'right'                       | 设置文本对齐方式，不会继承         |
| font-weight           | 'normal'       | 100~900, 'bold', 'bolder', 'lighter', 'normal'  | 设置字体粗细，不会继承             |
| vertical-align        | 'baseline'     | 'middle', 'top', 'bottom'                       | 设置垂直对齐方式，不会继承         |
| letter-spacing        | 'normal'       | Length                                          | 设置字符间距，不会继承             |
| text-overflow         | 'clip'         | 'ellipsis', 'clip'                              | 设置文本溢出时的处理方式，不会继承 |
| -webkit-line-clamp    | 'none'         | Number                                          | 设置文本显示的行数，不会继承       |
| word-break            | 'normal'       | 'break-all', 'keep-all', 'normal'               | 设置文本换行方式，不会继承         |
| text-decoration       | 'none'         | -                                               | 设置文本装饰，不会继承             |
| text-decoration-color | 'currentColor' | Color                                           | 设置文本装饰颜色，不会继承         |
| text-decoration-style | 'solid'        | 'dotted', 'dashed', 'solid'                     | 设置文本装饰样式，不会继承         |
| text-decoration-line  | 'none'         | 'line-through', 'underline', 'overline', 'none' | 设置文本装饰线，不会继承           |
| white-space           | 'normal'       | 'nowrap', 'normal'                              | 设置空白处理方式，不会继承         |

## 背景属性

| 属性                  | 默认值        | 可选值                                                                       | 说明                                                  |
| --------------------- | ------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------- |
| background            |               |                                                                              | 设置背景，内联样式暂不支持颜色名称（如 red、blue 等） |
| background-color      | 'transparent' | Color                                                                        | 设置背景颜色                                          |
| background-image      | 'none'        | 'src(xxx)', 'linear-gradient(xxx)', 'radial-gradient(xxx)'                   | 设置背景图片或渐变                                    |
| background-size       | 'auto'        | 'cover', 'contain', Length(x y), Length(x) Length(y)                         | 设置背景图片大小                                      |
| background-repeat     | 'repeat'      | 'repeat', 'no-repeat', 'repeat-x', 'repeat-y'                                | 设置背景图片重复方式                                  |
| background-position   | '0% 0%'       | 'center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y) | 设置背景图片位置                                      |
| background-position-x | '0%'          | 'center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y) | 设置背景图片水平位置                                  |
| background-position-y | '0%'          | 'center', 'top', 'bottom', 'left', 'right', Length(x y), Length(x) Length(y) | 设置背景图片垂直位置                                  |

## 变换和动画

### 变换

| 属性      | 默认值 | 可选值                                                                                                                                                                  | 说明               |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| transform | 'none' | 'translate', 'translateX', 'translateY', 'translateZ', 'translate2d', 'translate3d', 'scale', 'scaleX', 'scaleY', 'scale3d', 'rotate', 'rotateX', 'rotateY', 'rotate3d' | 设置元素的变换效果 |

### 动画

| 属性                      | 默认值   | 可选值                                                                                                        | 说明                               |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| animation                 |          |                                                                                                               | 设置动画，暂不支持内联样式         |
| animation-name            | 'none'   | String                                                                                                        | 设置动画名称，暂不支持内联样式     |
| animation-duration        | '0s'     | Number                                                                                                        | 设置动画持续时间，暂不支持内联样式 |
| animation-delay           | '0s'     | Number                                                                                                        | 设置动画延迟时间，暂不支持内联样式 |
| animation-fill-mode       | 'none'   | 'none', 'forwards', 'backwards', 'both'                                                                       | 设置动画填充模式，暂不支持内联样式 |
| animation-iteration-count | '1'      | Number                                                                                                        | 设置动画重复次数，暂不支持内联样式 |
| animation-timing-function | 'ease'   | 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier()', 'steps()' | 设置动画时间函数，暂不支持内联样式 |
| animation-direction       | 'normal' | 'normal', 'reverse', 'alternate', 'alternate-reverse'                                                         | 设置动画方向，暂不支持内联样式     |

### 过渡

| 属性                       | 默认值 | 可选值                                                                                                        | 说明                               |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| transition                 |        |                                                                                                               | 设置过渡，暂不支持内联样式         |
| transition-property        | 'all'  | all，支持属性：height, width, margin, padding, border, color, background-color, transform, opacity            | 设置过渡属性，暂不支持内联样式     |
| transition-duration        | '0s'   | Number                                                                                                        | 设置过渡持续时间，暂不支持内联样式 |
| transition-delay           | '0s'   | Number                                                                                                        | 设置过渡延迟时间，暂不支持内联样式 |
| transition-timing-function | 'ease' | 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier()', 'steps()' | 设置过渡时间函数，暂不支持内联样式 |

## 其他属性

| 属性              | 默认值    | 可选值                                | 说明                     |
| ----------------- | --------- | ------------------------------------- | ------------------------ |
| box-shadow        | 'none'    | -                                     | 设置元素阴影             |
| box-shadow-color  | 'black'   | Color                                 | 设置阴影颜色             |
| box-shadow-offset | '0 0'     | Length(x y), Length(x) Length(y)      | 设置阴影偏移             |
| box-shadow-blur   | '0'       | Length                                | 设置阴影模糊半径         |
| overflow          | 'visible' | 'hidden', 'visible', 'scroll', 'auto' | 设置内容溢出时的处理方式 |
| visibility        | 'visible' | 'hidden', 'visible'                   | 设置元素可见性           |
| opacity           | '1'       | Number                                | 设置元素透明度           |

## 媒体查询

### 支持的媒体特性

| 特性                | 说明       |
| ------------------- | ---------- |
| width               | 视口宽度   |
| height              | 视口高度   |
| aspect-ratio        | 视口宽高比 |
| orientation         | 视口方向   |
| device-width        | 设备宽度   |
| device-height       | 设备高度   |
| device-aspect-ratio | 设备宽高比 |
| resolution          | 设备分辨率 |

### 支持的复合查询

| 操作符 | 说明     |
| ------ | -------- |
| not    | 否定查询 |
| and    | 逻辑与   |
| or     | 逻辑或   |

### 使用示例

```css
/* 设备宽度大于等于 768px */
@media (min-width: 768px) {
  /* 样式 */
}

/* 设备方向为横屏 */
@media (orientation: landscape) {
  /* 样式 */
}

/* 设备宽度在 768px 到 1024px 之间 */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 样式 */
}

/* 设备宽度小于 768px 或大于 1024px */
@media (max-width: 768px), (min-width: 1024px) {
  /* 样式 */
}
```

## 说明

### 长度单位

| 单位   | 说明             | 示例                       |
| ------ | ---------------- | -------------------------- |
| px     | 像素             | `10px`                     |
| vp     | 虚拟像素         | `10vp`                     |
| %      | 百分比           | `50%`                      |
| vw     | 视口宽度的百分比 | `50vw`                     |
| vh     | 视口高度的百分比 | `50vh`                     |
| calc() | 计算表达式       | `calc(100% - 20px)`        |
| env()  | 环境变量         | `env(safe-area-inset-top)` |

### 颜色值

| 格式     | 说明                  | 示例                   |
| -------- | --------------------- | ---------------------- |
| 十六进制 | 6 位或 8 位十六进制数 | `#FF0000`, `#FF0000FF` |
| RGB      | RGB 颜色值            | `rgb(255, 0, 0)`       |
| RGBA     | 带透明度的 RGB 颜色值 | `rgba(255, 0, 0, 0.5)` |
| 颜色名称 | 预定义的颜色名称      | `red`, `blue`, `green` |

### 支持的动画和过渡属性

| 属性             | 说明     |
| ---------------- | -------- |
| height           | 高度     |
| width            | 宽度     |
| margin           | 外边距   |
| padding          | 内边距   |
| border           | 边框     |
| color            | 颜色     |
| background-color | 背景颜色 |
| transform        | 变换     |
| opacity          | 透明度   |
