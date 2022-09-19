---
title: Taro.Component
---

`Taro.Component` is an abstract base class, so the direct reference `Taro.Component` almost meaningless. Instead, you often inherit from it, and at least define a `render()` method.

Usually you define a `Taro` component is equivalent to a pure `JavaScript` class:

```jsx
class Welcome extends Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

> Taro and React different here is that no exposed a `createClass` method, you can only use the ES6 class class to create the Taro components.

## Component lifecycle

Each component has a few you can be rewritten to make the code in certain period operation of the link of the "life cycle method. Method with the prefix `will` is called before a specific link, and contain the prefix `did` method will be invoked after a particular link.

#### Loading (Mounting)

These methods will be in a component instance is created and inserted into the DOM is called:

* `constructor()`
* `componentWillMount()`
* `render()`
* `componentDidMount()`

#### Update (Updating)

Attributes, or change of state will trigger an update. When a component is to render, these methods will be called:

* `componentWillReceiveProps()`
* `shouldComponentUpdate()`
* `componentWillUpdate()`
* `render()`
* `componentDidUpdate()`

#### Uninstall (Unmounting)

When a component is removed from the DOM, this method is called:

* `componentWillUnmount()`

#### Other apis

Each component also provides other API:

* `setState()`
* `forceUpdate()`

#### Class attribute

* `defaultProps`

#### Instance attributes

* `props`
* `state`
* `config`(mini-app exclusive)

## 参考

### render()

`render()` method is a must.

When is invoked, `render` method must return a Taro components (can be built-in component can also be custom components) or a [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) value.

`render()` function should be pure, means that it should not change the state of the components, its each invocation should return the same result, at the same time does not directly interact with the browser/mini-apps. If need to interact with the browser/mini-apps, put the task in `componentDidMount` stage or other method of life cycle. Keep `render()` method pure components are more likely to think.

> In the React/Nerv `render()` can return to a variety of data structure, but the Taro temporarily only supports two kinds. Because Taro must compile JSX into WeChat mini-app templates. When the return value is `falsy`, actually will be compiled into mini-apps `wx:if` label.

### constructor()

```jsx
constructor(props)
```

Taro component constructor will be invoked before assembly. As for a `Taro.Component` definition subclass constructor, you should be called before any other expression `super(props)`. Otherwise, enclosing props is not defined in the constructor, and may raise an exception.

The right location constructor is initialized state. If you don't initialize state and is not binding approach, Taro components that you don't need for you to define a constructor.

> In Taro, even if you don't write constructor (), compiled into WeChat mini-app will automatically give you add, because the Taro runtime framework needs to be in the constructor (in) to do more.

Can be initialized state based on the attribute. This effectively "separation" (forks) and according to the initial attribute set state.

### `static getDerivedStateFromProps()`

> Since v1.3.0 available

```jsx
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` will call before invoking render method, and the initial mount and the subsequent updates will be invoked. It should return an object to update the state, if return null is not updated any content.

And `componentWillReceiveProps`, `getDerivedStateFromProps` will in each `render` triggered before this method, and `componentWillReceiveProps` will call when the parent component rendering.

```jsx
export default class ButtonSelectable extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isSelected: props.selected
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selected !== state.isSelected) {
      return {
        isSelected: props.selected
      };
    }

    return null;
  }

  handleClick = event => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  render() {
    return (
      <Button
        className={`B-selectable ${
          this.state.isSelected ? "button-selectable-selected" : ""
        }`}
        onClick={this.handleClick}
      >
        {this.state.isSelected ? "Selected!" : "Not selected..."}
      </Button>
    );
  }
}

```

> Please note:
> getDerivedStateFromProps() If there is `componentWillReceiveProps`、`componentWillMount` or `componentWillUpdate` will not call.
> When you need more than in the old life cycle setState, we recommend you to use more getDerivedStateFromProps method, because it can reduce an update overhead.

### getSnapshotBeforeUpdate()

> Since v1.3.0 available

```jsx
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` in the latest rendering output (submitted to the DOM node) before the call. It makes the components can be changed before capture some information in the DOM (for example, the scroll position). The life cycle of any return value will be passed as a parameter `componentDidUpdate()`。

Should return the value of the snapshot (or null).

> Please note:
> getSnapshotBeforeUpdate() If there is `componentWillReceiveProps`、`componentWillMount` or `componentWillUpdate` will not call.
> When you need more than in the old life cycle setState, we recommend you to use `getSnapshotBeforeUpdate` method, because it can reduce an update overhead.

### componentWillMount()

```jsx
componentWillMount()
```

`componentWillMount()` In front of the components in the loading is called immediately.

Avoid introducing any side effects in the method or subscription. For these usage scenarios, we recommend using the constructor () instead.

This is the only on the service side rendering the life cycle of the hook function.

> componentWillMount() In a mini-app is the corresponding life cycle `onLoad`

### componentDidMount()

```jsx
componentDidMount()
```

componentDidMount() is called immediately after loading. Initialize the DOM node should be here. If you need to load data from the far end, this is a right place to realize network request. In this method ` setState () ` will trigger a rendering.

### componentWillReceiveProps()

```jsx
componentWillReceiveProps(nextProps)
```

`componentWillReceiveProps()` before already loaded component receives a new attribute calls. If you need to update the status response properties change, you may need to contrast `this.props` and `nextProps` and used in the method `this.setState()` processing state changes.

Note even if the property no change, Taro may also call the method, so if you want to have to deal with change, please ensure that a value of the current and after.

During loading, Taro won't call with initial attribute `componentWillReceiveProps` method. Call `this.setState` usually don't trigger `componentWillReceiveProps`.

### shouldComponentUpdate()

```jsx
shouldComponentUpdate(nextProps, nextState)
```

Using `shouldComponentUpdate()` let Taro know whether or not the output of the component is not affected by the state or props of the current change. The default behavior is to render when every time the state changes, and in most cases, you should rely on the default behavior.

When receiving the new props or state, `shouldComponentUpdate()` is called before rendering. Returns true, by default for the initial (first) rendering or use `forceUpdate()`, this method is called.

Return `false` will not prevent child components in the state changes to rendering.

### componentWillUpdate()

```jsx
componentWillUpdate(nextProps, nextState)
```

When receiving the new props or state, `componentWillUpdate()` before rendering is called immediately. In the update before using this method can be used as a ready to update a good opportunity. This method in the rendering for the first time will not be invoked.

Note that call is not allowed here `this.setState()` . If you need to update the state in response to props change, please use `componentWillReceiveProps()` .

If you need to update the state to respond to the change of the props, can be used `componentWillReceiveProps()` instead.

### componentDidUpdate()

```jsx
componentDidUpdate(prevProps, prevState)
```

`componentDidUpdate()`  In the update immediately after is invoked. This method in the rendering for the first time will not be invoked.

### componentWillUnmount()

```jsx
componentWillUnmount()
```

`componentWillUnmount()` In a component is unloaded (unmounted) and destruction is called immediately before (destroyed). In this method to perform any necessary cleanup, such as disable timer, cancel the network request, remove some events may lead to memory leaks, etc.

> In a mini-app, a hanging on to the ` Page ` components of components will not perform ` componentWillUnmount ` () method, only when he mounted Page component was destroyed, the component will execute ` componentWillUnmount ` () method.

### setState()

## Class attribute

### defaultProps

`defaultProps` can be defined as an attribute of the component class that is used to set default properties for the class. This useful for undefined (undefined) properties, for the set to null (null) properties and useless. Such as:

```jsx
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
}
```

If not set `props.Color`, its will be set the default value is "blue" :

```jsx
render () {
  return <CustomButton /> // props.color will be set to blue
}
```

If props. The color is set to null, the value is null:

```jsx
render() {
  return <CustomButton color={null} />  // props.color will remain null
}
```

## Instance attributes

### props

`this.props` Contains the components of the attributes of the definition of the caller. To view [component & Props](../../render-props.md) information about the properties.

### state

State is the component of specific data, it may change several times. State defined by the user, and it should be pure JavaScript object.

If you are not `render()` methods used in it, that it should not be placed in the state. For example, you can directly put the timer IDs on the instance.

To view [lifecycle & State](../../state.md) for more information about the status.

Never change `this.state`, because call `setState()` will replace before you do change. Will `this.state` as immutable.
