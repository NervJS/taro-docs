---
title: 事件相关 API
---

## fireEvent

`@tarojs/test-utils`目的是关注组件的**用户行为和外部表现，而不是内部实现细节**，所以无论是**vue**还是**react**，本质都是在渲染完成后，通过触发元素的事件，从而响应到内部实现的回调函数。
`fireEvent`内置了常用的事件触发器，通过获取元素 => 触发事件 => 事件响应 来对测试结果进行断言。

### 内置事件

```js
// 获取元素
const ele = testUtils.queries.querySelector('input')
// 触发keyPress事件
testUtils.fireEvent.keyPress(ele, {
  key: 'A',
  code: 'A',
})
```

```ts
export interface FireEvent {
  // Clipboard Events
  copy(ele: Element, params?: ClipboardEventInit): void
  cut(ele: Element, params?: ClipboardEventInit): void
  paste(ele: Element, params?: ClipboardEventInit): void
  // Composition Events
  compositionEnd(ele: Element, params?: CompositionEventInit): void
  compositionStart(ele: Element, params?: CompositionEventInit): void
  compositionUpdate(ele: Element, params?: CompositionEventInit): void
  // Keyboard Events
  keyDown(ele: Element, params?: KeyboardEventInit): void
  keyPress(ele: Element, params?: KeyboardEventInit): void
  keyUp(ele: Element, params?: KeyboardEventInit): void
  // Focus Events
  focus(ele: Element, params?: FocusEventInit): void
  blur(ele: Element, params?: FocusEventInit): void
  focusIn(ele: Element, params?: FocusEventInit): void
  focusOut(ele: Element, params?: FocusEventInit): void
  // Form Events
  change(ele: Element, params?: EventInit): void
  input(ele: Element, params?: InputEventInit): void
  invalid(ele: Element, params?: EventInit): void
  submit(ele: Element, params?: EventInit): void
  reset(ele: Element, params?: EventInit): void
  // Mouse Events
  click(ele: Element, params?: MouseEventInit): void
  contextMenu(ele: Element, params?: MouseEventInit): void
  dblClick(ele: Element, params?: MouseEventInit): void
  doubleClick(ele: Element, params?: MouseEventInit): void
  drag(ele: Element, params?: MouseEventInit): void
  dragEnd(ele: Element, params?: MouseEventInit): void
  dragEnter(ele: Element, params?: MouseEventInit): void
  dragExit(ele: Element, params?: MouseEventInit): void
  dragLeave(ele: Element, params?: MouseEventInit): void
  dragOver(ele: Element, params?: MouseEventInit): void
  drop(ele: Element, params?: MouseEventInit): void
  mouseDown(ele: Element, params?: MouseEventInit): void
  mouseEnter(ele: Element, params?: MouseEventInit): void
  mouseLeave(ele: Element, params?: MouseEventInit): void
  mouseMove(ele: Element, params?: MouseEventInit): void
  mouseOut(ele: Element, params?: MouseEventInit): void
  mouseOver(ele: Element, params?: MouseEventInit): void
  mouseUp(ele: Element, params?: MouseEventInit): void
  // Selection Events
  select(ele: Element, params?: EventInit): void
  // Touch Events
  touchCancel(ele: Element, params?: TouchEventInit): void
  touchEnd(ele: Element, params?: TouchEventInit): void
  touchMove(ele: Element, params?: TouchEventInit): void
  touchStart(ele: Element, params?: TouchEventInit): void
  // UI Events
  resize(ele: Element, params?: UIEventInit): void
  scroll(ele: Element, params?: UIEventInit): void
  // Wheel Events
  wheel(ele: Element, params?: WheelEventInit): void
  // Media Events
  abort(ele: Element, params?: EventInit): void
  canPlay(ele: Element, params?: EventInit): void
  canPlayThrough(ele: Element, params?: EventInit): void
  durationChange(ele: Element, params?: EventInit): void
  emptied(ele: Element, params?: EventInit): void
  encrypted(ele: Element, params?: EventInit): void
  ended(ele: Element, params?: EventInit): void
  loadedData(ele: Element, params?: EventInit): void
  loadedMetadata(ele: Element, params?: EventInit): void
  loadStart(ele: Element, params?: ProgressEventInit): void
  pause(ele: Element, params?: EventInit): void
  play(ele: Element, params?: EventInit): void
  playing(ele: Element, params?: EventInit): void
  progress(ele: Element, params?: ProgressEventInit): void
  rateChange(ele: Element, params?: EventInit): void
  seeked(ele: Element, params?: EventInit): void
  seeking(ele: Element, params?: EventInit): void
  stalled(ele: Element, params?: EventInit): void
  suspend(ele: Element, params?: EventInit): void
  timeUpdate(ele: Element, params?: EventInit): void
  volumeChange(ele: Element, params?: EventInit): void
  waiting(ele: Element, params?: EventInit): void
  // Events
  load(ele: Element, params?: EventInit): void
  error(ele: Element, params?: EventInit): void
  // Animation Events
  animationStart(ele: Element, params?: AnimationEventInit): void
  animationEnd(ele: Element, params?: AnimationEventInit): void
  animationIteration(ele: Element, params?: AnimationEventInit): void
  // Transition Events
  transitionCancel(ele: Element, params?: TransitionEventInit): void
  transitionEnd(ele: Element, params?: TransitionEventInit): void
  transitionRun(ele: Element, params?: TransitionEventInit): void
  transitionStart(ele: Element, params?: TransitionEventInit): void
  // pointer events
  pointerOver(ele: Element, params?: PointerEventInit): void
  pointerEnter(ele: Element, params?: PointerEventInit): void
  pointerDown(ele: Element, params?: PointerEventInit): void
  pointerMove(ele: Element, params?: PointerEventInit): void
  pointerUp(ele: Element, params?: PointerEventInit): void
  pointerCancel(ele: Element, params?: PointerEventInit): void
  pointerOut(ele: Element, params?: PointerEventInit): void
  pointerLeave(ele: Element, params?: PointerEventInit): void
  gotPointerCapture(ele: Element, params?: PointerEventInit): void
  lostPointerCapture(ele: Element, params?: PointerEventInit): void
  // history events
  popState(ele: Element, params?: PopStateEventInit): void
  // window events
  offline(ele: Element, params?: EventInit): void
  online(ele: Element, params?: EventInit): void
}
```

### 构造事件

除了上述的内置事件外，我们也可以通过`new Event()`来构造一个新的事件类型

```ts
function fireEvent(ele: Element, event: Event)
```

使用案例：

```js
// 获取元素
const ele = testUtils.queries.querySelector('.text')
// 触发一个心的事件
testUtils.fireEvent(ele, new Event())
testUtils.fireEvent(ele, new PointerEvent())
```
