"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34793],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10050:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"\u8f6c\u6362\u6210 React"},l=void 0,p={unversionedId:"convert-to-react",id:"convert-to-react",title:"\u8f6c\u6362\u6210 React",description:"\u4e8c\u6b21\u5f00\u53d1",source:"@site/docs/convert-to-react.md",sourceDirName:".",slug:"/convert-to-react",permalink:"/taro-docs/docs/next/convert-to-react",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/convert-to-react.md",tags:[],version:"current",frontMatter:{title:"\u8f6c\u6362\u6210 React"},sidebar:"docs",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro",permalink:"/taro-docs/docs/next/taroize"},next:{title:"Troubleshooting",permalink:"/taro-docs/docs/next/taroize-troubleshooting"}},c={},d=[{value:"\u4e8c\u6b21\u5f00\u53d1",id:"\u4e8c\u6b21\u5f00\u53d1",level:2},{value:"<code>this.setData</code>",id:"thissetdata",level:3},{value:"<code>this.data</code> \u548c <code>this.properties</code>",id:"thisdata-\u548c-thisproperties",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3}],s={toc:d};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"\u4e8c\u6b21\u5f00\u53d1"}),"\u4e8c\u6b21\u5f00\u53d1"),(0,r.kt)("p",null,"\u539f\u751f\u5c0f\u7a0b\u5e8f\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"Page({\n  data: {\n    text: 'Hello World'\n  }\n})\n\n<view class=\"container\">\n  {{ text }}\n</view>\n")),(0,r.kt)("p",null,"\u8f6c\u6362\u540e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"import { Block, View } from '@tarojs/components'\nimport React from 'react'\nimport Taro from '@tarojs/taro'\nimport withWeapp from '@tarojs/with-weapp'\nimport Title from '../../components/title/index'\nimport './index.scss'\n\n@withWeapp({\n  data: {\n    text: 'Hello World',\n  },\n})\nclass _C extends React.Component {\n  render() {\n    const { text } = this.data\n    return <View className=\"container\">{text}</View>\n  }\n}\n\nexport default _C\n")),(0,r.kt)("p",null,"\u5b83\u770b\u8d77\u6765\u5c31\u50cf\u666e\u901a\u7684 Taro \u7ec4\u4ef6\uff0c\u6700\u91cd\u8981\u7684\u533a\u522b\u5c31\u5728\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@withWeapp()")," \u8fd9\u4e2a\u88c5\u9970\u5668\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u7406\u89e3\u4e3a\u8f6c\u6362\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@withWeapp()")," \u4f1a\u589e\u52a0\u4e00\u4e9b\u539f\u6765 Taro \u6ca1\u6709\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("h3",a({},{id:"thissetdata"}),(0,r.kt)("inlineCode",{parentName:"h3"},"this.setData")),(0,r.kt)("p",null,"\u8f6c\u6362\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setData")," \u7684 API \u76f8\u5f53\u4e8e\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setData")," \u7684 polyfill\uff0c\u4ed6\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState")," \u6700\u5927\u7684\u533a\u522b\u5c31\u5728\u4e8e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"this.setData")," \u4e4b\u540e ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u7684\u6570\u636e\u662f\u540c\u6b65\u66f4\u65b0\uff0c\u800c\u6e32\u67d3\u662f\u5f02\u6b65\u66f4\u65b0\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," \u4e24\u8005\u90fd\u662f\u5f02\u6b65\u7684\u3002"),(0,r.kt)("h3",a({},{id:"thisdata-\u548c-thisproperties"}),(0,r.kt)("inlineCode",{parentName:"h3"},"this.data")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h3"},"this.properties")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this.data")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"this.properties")," \u76f8\u5f53\u4e8e Taro \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.state")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props")," \u7684 alias\uff0c\u5f53\u5b83\u4eec\u7684\u6570\u636e\u66f4\u65b0\u65f6\uff0c\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," \u4e5f\u4f1a\u540c\u6b65\u66f4\u65b0\u3002"),(0,r.kt)("h3",a({},{id:"\u751f\u547d\u5468\u671f"}),"\u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"Taro \u4f1a\u5c06\u539f\u751f\u5c0f\u7a0b\u5e8f\u7684\u751f\u547d\u5468\u671f\u8f6c\u6362\u4e3a Taro \u7684\u751f\u547d\u5468\u671f\uff0c\u5b8c\u6574\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u751f\u547d\u5468\u671f"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Taro \u751f\u547d\u5468\u671f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onShow"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentDidShow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onHide"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentDidHide")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"App.onLaunch"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onLaunch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onLoad"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onLoad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onReady"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onReady")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onUnload"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentWillUnmount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.created"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentWillMount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.attached"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentDidMount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.ready"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Page.onReady")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Component.detached"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"componentWillUnmount")))))}m.isMDXComponent=!0}}]);