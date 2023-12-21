---
title: Children with combination
---

> For test, as a result of WeChat applet `<slot />` can't be used in a loop, so Children and combination in WeChat mini-app, you cannot use this in a loop. Baidu mini-apps, pay treasure to mini-apps, H5, React Native can use this feature in the loop.

## Children

When we design components, some components are usually don't know what will your child components content, such as `Sidebar` and `Dialog` such container components.

We suggest that in such a situation using `this.props.children` child elements to convey:

```jsx
class Dialog extends Component {
  render() {
    return (
      <View className="dialog">
        <View className="header">Welcome!</View>
        <View className="body">{this.props.children}</View>
        <View className="footer">-- divider --</View>
      </View>
    )
  }
}
```

So you can allow other components in the JSX passed to anyon nested components `Dialog`:

```jsx
class App extends Component {
  render() {
    return (
      <View className="container">
        <Dialog>
          <View className="dialog-message">Thank you for using Taro.</View>
        </Dialog>
      </View>
    )
  }
}
```

In `<Dialog /> ` JSX any content within the tag as its child elements (Children) will be passed to its components.

### announcements

**Please don't take `this.props.children` for any operation**. Taro in a mini-app to realize the function using a mini-app [`slot`](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html) function, that is to say, you can put the `this.props.children` understood as `slot` syntactic sugar, `this.props.children` not React in the Taro `ReactElement` object, So like `this.props.children && this.props.children`、`this.props.children[0]` is illegal in Taro.

**`this.props.children` can't use `defaultProps` set the default content**. Due to the limitation of mini-apps, Taro cannot know whether consumers of the component content of the incoming, so can't apply the default content.

**Cannot put `this.props.children` decomposition as a variable to use again**. Because ordinary `props` has a definite value, so when you put them into the variable runtime can handle, `this.props.children` can not do this operation, you must explicitly `this.props.children` all write full to achieve its function.

## combination

> Since the `1.1.9` began to support

In some cases you just need to deliver a child only component, may need a lot of a "placeholder". For example in the `Dialog` component, you not only need to custom it `body`, you hope it `header` and `footer` are to `Dialog` component user customization. This kind of situation can do it:

```jsx
class Dialog extends Component {
  render() {
    return (
      <View className="dialog">
        <View className="header">{this.props.renderHeader}</View>
        <View className="body">{this.props.children}</View>
        <View className="footer">{this.props.renderFooter}</View>
      </View>
    )
  }
}

class App extends Component {
  render() {
    return (
      <View className="container">
        <Dialog
          renderHeader={<View className="welcome-message">Welcome!</View>}
          renderFooter={<Button className="close">Close</Button>}
        >
          <View className="dialog-message">Thank you for using Taro.</View>
        </Dialog>
      </View>
    )
  }
}
```

In our statement `Dialog` component, `header` and `footer` part increased our `this.props.renderHeader` and `this.props.renderFooter` as a placeholder. Accordingly, we use `Dialog` component, can give `renderHeader` and `renderFooter` incoming JSX elements, respectively the two incoming JSX elements will populate them in `Dialog` components in place - just like in `Dialog` JSX written content in the label, will fill to `this.props.children` position.

### announcements

**The combination of components to follow `this.props.children` all rules**. Combine this function and `this.props.children` by `slot`, i.e. `this.props.children` limit are also apply for a component combinations.

**All the combination must use `render` beginning, and follow the camel nomenclature**. And our event specification to `on` beginning, component combination `render` beginning.

**Portfolios are introduced into a single JSX elements, can't spread to any other type**. When you need to do some condition judgment or complex logic operation, can use a `Block` wrapped in elements, and then in `Block` filling other complex logic elements.
