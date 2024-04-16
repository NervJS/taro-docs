---
title: Render Props
---

> Since 1.3.5 support

`render props` refers to a Taro between components using a value for the function of prop to share code simple technology.

With render prop components to receive a function, the function returns a Taro element and call it rather than to realize his own rendering logic.

For example, suppose we have a component, it can present a picture of a cat chasing mouse on the screen. We may use `<Cat mouse={{ x, y }} prop />` to tell the coordinates of the cursor components to let it know where the picture should be on the screen.

We can provide with a function of the prop `<Mouse>` components, it can dynamically decide what needs to be rendered, rather than `<Cat>` hardcoded into `<Mouse>` components, and effectively change the rendering results.

```jsx
// cat.js
import catImage from './cat.jpg'
class Cat extends Taro.Component {
  static defaultProps = {
    mouse: {
      x: 0,
      y: 0,
    },
  }

  render() {
    const { mouse } = this.props
    return <Image src={catImage} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  }
}

// mouse.js
class Mouse extends Taro.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleClick.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleClick(event) {
    const { x, y } = event.detail
    this.setState({
      x,
      y,
    })
  }

  render() {
    return (
      <View style={{ height: '100%' }} onClick={this.handleClick}>
        {/*
          We can put the prop as a function, dynamically adjust the rendering content.
        */}
        {this.props.renderCat(this.state)}
      </View>
    )
  }
}

// MouseTracker.js
class MouseTracker extends Taro.Component {
  render() {
    return (
      <View>
        <View>点击鼠标!</View>
        {/*
          Mouse 如何渲染由 MouseTracker 的状态控制
        */}
        <Mouse renderCat={(mouse) => <Cat mouse={mouse} />} />
      </View>
    )
  }
}
```

Now, we have provided a render method let `<Mouse>` can dynamically decide what needs to render, rather than cloning `<Mouse>` components and then hard-coded to solve specific cases.

More specifically, **render prop is a component to tell what you need to render content function prop**.

The technology to make our Shared behavior is very easy. To get this behavior, as long as the rendering with a render the prop `<Mouse>` components will be able to tell it to the current Mouse coordinates (x, y) what to render.

### announcements

**`render props` is based on the mini-app `slot` mechanism.** So it is limited by the and restrictions as much of the `children and composition`, the more details, please check the document[children and combination](./children.md#announcements).
