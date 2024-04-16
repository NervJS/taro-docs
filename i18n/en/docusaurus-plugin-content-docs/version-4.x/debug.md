---
title: The Debug guide
---

Like all frameworks, Taro there are likely to be a bug. When do you think of your code is no problem, the problem is the Taro, can according to the content of this chapter for debugging.

When you debug in Taro, please make sure all process has been completed:

1. ESLint has open and no error;
2. After a roughly time including [best practices](./best-practice.md) document, and there is no corresponding document a description of the problem;
3. Search related issue, the issue did not mention relevant solution;
4. According to the project use Taro version upgrade to see [changelog](https://github.com/NervJS/taro/blob/master/CHANGELOG.md), no opinion in the changelog repair issues related to submit;

A lot of times as long as you go again, all the above four process problems will be readily solved. As a crafty framework, Taro has very many modules, when problems occur Taro also need module debugging, and then we will give some sample has solved the bug, we debug the thinking of the bug:

## Installation

### Using yarn installed CLI error

[Due](https://github.com/tj/commander.js/issues/786) to the [commander.js](https://github.com/tj/commander.js), under the Mac using yarn CLI installation, carry out orders to the occasional error

```bash
taro-init(1) does not exist, try --help
```

At that time, you can choose to use NPM or CNPM reinstall the CLI, or CLI [added to the environment variables to solve](https://github.com/NervJS/taro/issues/2034)。

### Project rely on has been installed

Because of Taro `@tarojs/webpack-runner` package default depends on the `node-sass`, but sometimes can't rely on has been installed, here, suggest use taobao directly [cnpm](https://npm.taobao.org/) for installation, or try [this package](https://github.com/gucong3000/mirror-config-china)

## mini-app

### There is no error, but shows results than expected

#### Filtering is diff logic

This problem occurred in the page or component **update**.

Before the call setData method of mini-apps, Taro could do the state and the data once [diff](/docs/2.x/optimized-practice#小程序数据-diff).

If a property value from the state and the data did not change, probably won't setData again this property, cause the page do not have the right to update or components.

This kind of problem appears more in small application form components, such as the following two issue: [#1981](https://github.com/NervJS/taro/issues/1981)、[#2257](https://github.com/NervJS/taro/issues/2257). Because some form components is a mini-app controlled components, form update, corresponding to the value of the value of the data will not be updated, is leading the data value and initial value. SetState again if this attribute is the initial value, because the diff logic attribute values did not change, not setData this attribute, view results in no update. The correct approach is in the form components update events setData value for the current value, ensure data consistent with the display value form.

##### debug diff

开发者可以在开发者工具中找到 taro 运行时库，在 diff 方法前后打断点或 log，观察 **state**、**小程序 data** 和 **diff 后将要被 setData 的数据**，这种排查有助定位很多**视图更新**问题。
Developers can be found in the developer tools taro runtime library, or log in diff method before and after the break point, observe the **state**、**mini-app data** and **will be setData data**, after the diff view **update the screening** will help locate many.

![qq20190305-151951](https://user-images.githubusercontent.com/11807297/53787956-514bb280-3f5b-11e9-9faf-f73ccd005222.png)

##### WeChat mini-apps, increase the array elements cannot be correctly update the array length

Increase the array elements, after the diff will be updated according to the path. But because of bug WeChat applet itself, according to the path update array, array length will not update correctly. As shown in the [#882](https://github.com/NervJS/taro/issues/882)

This problem only appear in WeChat applet, [WeChat official statement is not fixed](https://developers.weixin.qq.com/community/develop/doc/000c8a7eeb45e8b018b72f01356800)。

The recommendation is open a new state values to synchronous length change.

#### Compile the template error

This time is likely to be compiled template appeared error. For example, [#2285](https://github.com/NervJS/taro/issues/2258) , Lord wrote two nested loops, unable to correctly in the second loop access to the first loop statement `index` variables:

```jsx
// Assume that the source code in the src/pages/index/index.js
rooms.map((room, index) => (
  <View key={room.id}>
    <View>The room</View>
    <View className="men">
      {room.checkInMen.map(man => (
        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>
          {man.name}
        </View>
      ))}
    </View>
  </View>
);
```

And compiled `.wxml` will be:

```html
<!-- The compiled code will generate at least three files, respectively: -->
<!-- dist/pages/index/index.js，dist/pages/index/index.wxml，dist/pages/index/index.json -->
<view wx:for="{{loopArray0}}" wx:for-item="room" wx:for-index="index">
  <view>The room</view>
    <view class="men">
      <view  data-e-tap-a-b="{{index}}" bindtap="handleRemoveMan" wx:for="{{room.$anonymousCallee__0}}" wx:for-item="man" data-e-tap-so="this" data-e-tap-a-a="{{man.$original.id}}">{{man.$original.name}}
      </view>
    </view>
  </view>
</view>
```

Were observed before and after compiled file, we can find that: because of the second loop is not specified `index` variable names, Taro compile cycle also does not specify `index` variable names. But the problem is WeChat mini-app when do not specify a `index`, will implicitly injection, a `index` variable name as `index`. So this code in the second loop access `index`, is actually the current loop `index`, rather than superior cycle `index`.

When we understand the problem, it is easy to solve problem, as long as in the second loop explicitly exposed loop of the second variable, the source code can be amended as:

```jsx
rooms.map((room, index) => (
  <View key={room.id}>
    <View>The room</View>
    <View className="men">
      {room.checkInMen.map((man, _) => (
        <View onClick={this.handleRemoveMan.bind(this, man.id, index)}>
          {man.name}
        </View>
      ))}
    </View>
  </View>
);
```

### When running in a small developer tool error

Sometimes we will meet at runtime errors like this:

![debug.png](https://i.loli.net/2019/02/27/5c765b5bc1915.png)

Debugging this problem is also very simple, just click on the call stack a link to the top from the call stack, point in we can find that it's the code:

![debug2.png](https://i.loli.net/2019/02/28/5c77517c622e3.png)

Then we can find this mistake because the variable `url` the call `Object.assign()` find a variable a function, we can look at the source code:

```jsx
// If you run times wrong file path is: dist/pages/test/test.js
// You can determine the source in: src/pages/test/test.js
// The compiled js file after Babel compiled already, but still can one-to-one function basically
// besides `render()` function will correspond to the `_createData()` function, like `renderTest` function corresponding to `createTestData` function
render () {
  let dom = null
  if (this.props.visable) {
      const url = 'https://...'
      dom = <Image src={url} />
  }

  return <Container>
    {dom}
  </Container>
}
```

By observing the compiled code, we can find the source code without any problems, but the Taro version in this problem didn't handle the if expression within the scope of variables, called `Object.assign()` function `url` variable does not exist in `render` function scope. In order to solve this problem, we can modify the source code, manual put `url` variables also `render` function scope:

```jsx
render () {
  let dom = null
  let url = ''
  if (this.props.visable) {
      url = 'https://...'
      dom = <Image src={url} />
  }

  return <Container>
    {dom}
  </Container>
}
```

Most runtime errors can be through a mini-app built-in Chrome DevTools to find the cause of the error, if the current call stack had not found the problem, can to debug step by step up the call stack. Chrome DevTools related documents please check: [Chrome developer tools](https://developers.google.com/web/tools/chrome-devtools/)

### Lifecycle/routing/setState error

In [#1814](https://github.com/NervJS/taro/issues/1814) mentioned in the `this.$router.path`(the current page routing path) sometimes cannot be accessed. Through the survey found that is because of the function of the Taro access path in the mini-app `onLoad` function, rather than every component can call to this function. And the solution to this problem is also very simple, if the current page is component can be directly through the `this.$scope.route` access, more universal method by `getCurrentPages` sample function to access to the current page, and then visit instance `route` or `__route__` access routing path to the current page.

Through this example, we easily find out that the life cycle of Taro/routing and `setState` on mini-app is packaged into the React of the API layer of syntactic sugar, we call this layer of packaging Taro runtime framework. Almost all the Taro provide apis and syntactic sugar were eventually is to provide API is implemented through a mini-app itself, that is to say, when occurrence problem of Taro runtime framework, basic can you use the API provided by the mini-app itself to achieve the same requirements, including but not limited to:

1. Use `this.$scope.triggerEvent` call by props transfer function;
2. Through `this.$scope.selectComponent` and `wx.createSelectorQuery` implementation `ref`;
3. Through `getCurrentPages` related methods, such as access route;
4. Modifying the compiled file `createComponent` function creates the object

Although a mini-app that use native methods can do a lot of the same thing, but problems arise when run Taro framework, we strongly recommend that developers to official Taro [submit issue](https://github.com/NervJS/taro/issues/new/choose), the friends can also have the ability to developers [submit PR](https://github.com/NervJS/taro/pulls). On the one hand, using a Taro API implementation can help you with multiterminal differences, on the other hand to find even fix bugs can also help strengthen your understanding of Taro and small application layer.

### WeChat small application form components

WeChat small application form components not controlled components, when a user operation form view will **immediately change**, but the form of the value that the value is not changed.

If the form is `onChange`, `the onInput` such value change in the callback setState value for the user to change the form before the value of the operation, Taro diff logic will judge setState value value and the current data. The value is consistent, then **give up setData**, cause we do not have the right to update the view.

Solution:

Input component can pass in a callback return values to update the view needs to change. As shown in the [#2642](https://github.com/NervJS/taro/issues/2642)

mini-app Input component documents screenshots:

![inputdoc](https://user-images.githubusercontent.com/11807297/55405139-fcb44b00-558b-11e9-845f-afbc73863b48.png)

Other components need immediately `setState({ value: e.detail.value })` To update immediately synchronized data. The value value, then setState really needed to form the value to change. As shown in the [#1981](https://github.com/NervJS/taro/issues/1981)、[#2257](https://github.com/NervJS/taro/issues/2257)

### API problem

#### API calls the result is not in line with expectations

Taro mini-app on the API is just on the mini-app native API simply promise, didn't do anything additional operations. So developers when meeting this kind of situation can try a mini-app that directly using the API, as WeChat program directly using `wx.xxx`. If you have the same error that is a mini-app issues. It could be the problem of Taro, can you give us the related issue.

#### API calls an error

Assume that developers at some API calls `Taro.xxx`, appear similar to the following error:

![image](https://user-images.githubusercontent.com/11807297/59170450-45324b00-8b71-11e9-8e25-1169b425040c.png)

Prove that Taro is not compatible with this API, such as a small application platform API of the latest update. When can you give us issue require to add, or modify the file [native-apis.js](https://github.com/NervJS/taro/blob/master/packages/taro/src/native-apis.js) after, give us to raise PR.

## H5

### Runtime DOM related errors

In [#1804](https://github.com/NervJS/taro/issues/1804) , as long as you use the `Block` components and has a variable control it explicitly, is bound to an error:

```jsx
export default class Index extends Component {
  config = {
    navigationBarTitleText: 'Home Page',
  }

  state = {
    num: 1,
  }

  componentDidMount() {
    console.log('did')
    setTimeout(() => {
      this.setState({
        num: 0,
      })
    }, 2000)
  }

  render() {
    const { num } = this.state
    return (
      <View className="container">
        {num === 0 && <View>sold out</View>}
        {num > 0 && (
          <Block>
            <View>on sale</View>
            <View>buy now</View>
          </Block>
        )}
        {/* {num > 0 && <View>on sale</View>} */}
      </View>
    )
  }
}
```

This time we can locate the problem to the `Block` component, we can see `Block` component source code in `@tarojs/components`:

```jsx
const Block = (props) => props.children
export default Block
```

That is when the variable `num > 0`, `Block` components `children` displays, and when `Block` components `children` is an array, `View.container` of `children` becomes `[a View component, [an array]]`, rendering such data structures need `React.Fragment` package to render. And Taro there is currently no support `React.Fragment` syntax, so written as an error. The solution to this problem is also very simple, only need to modify the `Block` components, with an element live `children` can:

```jsx
const Block = (props) => <div>{props.children}</div>
```

When you have a related problems, we have prepared a quick start sandbox tools, you can directly in this tool for editing, debugging, recurring problems:

[![Edit Taro sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/50nzv622z4?fontsize=14)

## component

### jsEnginScriptError

`Component is not found in path "xxx/xxx/xxx"` solution:

1. check for compiler error

2. check the compiled files are correct

3. step 1 and step 2 if the check is no problem, restart the developer tools, or jump to step 4

4. provide specific compiler error message and compiled file information screenshot

## Other resources

This paper lists some Taro has solve bug example, expounds the thinking of the debug in Taro, but in practice if you can understand more deeply the implementation principle of Taro, that whether the use of Taro or debug will have a big help. The following resources from all aspects introduces the implementation of Taro principle:

- Blog: [Taro were born](https://aotu.io/notes/2018/06/25/the-birth-of-taro/)
- Public speaking: [multiterminal project using Taro fast development](https://share.weiyun.com/5nUKYfy)
- Public speaking: [on the basis of Taro multiterminal ⽬ item practice](https://share.weiyun.com/5lZXV1G)
- The nuggets small volumes: [Taro multiterminal development principle and actual combat](https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d) (Off shelve, only available to purchased users)
