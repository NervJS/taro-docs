"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[73855],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95113:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93106),a=n(4706),o="tabItem_xXVp";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},78288:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(93106),a=n(4706),o=n(45388),l=n(24755),u=n(89476),c=n(26779),i=n(57191);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const n=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,u._X)(a),c=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[o,c]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=f(e),[l,u]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,s]=d({queryString:n,groupId:a}),[p,v]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,i.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),b=(()=>{const e=null!=c?c:p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var b=n(87650),y="tabList_ulmA",h="tabItem_Zt3y";function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function k({className:e,block:t,selectedValue:n,selectValue:l,tabValues:u}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),s=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==n&&(i(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;var n;t=null!==(n=c[r])&&void 0!==n?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;var r;t=null!==(r=c[n])&&void 0!==r?r:c[c.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:o})=>r.createElement("li",g({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:s},o,{className:(0,a.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function O({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",y)},r.createElement(k,g({},e,t)),r.createElement(O,g({},e,t)))}function j(e){const t=(0,b.Z)();return r.createElement(w,g({key:String(t)},e))}},9905:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});n(93106);var r=n(79874),a=n(95113),o=n(78288);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},i=void 0,s={unversionedId:"components-desc",id:"version-3.x/components-desc",title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e",description:"Taro \u4ee5 \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93 \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 jsx \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002",source:"@site/versioned_docs/version-3.x/components-desc.mdx",sourceDirName:".",slug:"/components-desc",permalink:"/taro-docs/en/docs/components-desc",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components-desc.mdx",tags:[],version:"3.x",frontMatter:{title:"\u7ec4\u4ef6\u5e93\u8bf4\u660e"},sidebar:"components",next:{title:"PageMeta",permalink:"/taro-docs/en/docs/components/page-meta"}},p={},f=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2},{value:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d",level:3},{value:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934",id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934",level:3}],m={toc:f};function d(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro \u4ee5 ",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5e93")," \u4e3a\u6807\u51c6\uff0c\u7ed3\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx")," \u8bed\u6cd5\u89c4\u8303\uff0c\u5b9a\u5236\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\u89c4\u8303\u3002"),(0,r.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u539f\u5219\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\uff0c\u800c\u5728\u5176\u4ed6\u7aef\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5e93\u5b9e\u73b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H5 \u7aef\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components"),"\uff0c\u540c\u65f6\u4e5f\u662f\u9700\u8981\u5f15\u5165\u7684\u9ed8\u8ba4\u6807\u51c6\u7ec4\u4ef6\u5e93")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0cReact \u4e2d\u6211\u4eec\u9700\u8981\u5148\u4ece Taro \u6807\u51c6\u7ec4\u4ef6\u5e93 ",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," \u5f15\u7528\u7ec4\u4ef6\uff0c\u518d\u8fdb\u884c\u4f7f\u7528\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"<View />"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text />")," \u7ec4\u4ef6\uff0c\u800c Vue \u6211\u4eec\u5219\u65e0\u9700\u5f15\u5165"),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render() {\n    return (\n      <View className=\"c\">\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),(0,r.kt)("h2",l({},{id:"\u6ce8\u610f"}),"\u6ce8\u610f"),(0,r.kt)("p",null,"\u5728\u7ec4\u4ef6\u7684\u8be6\u7ec6\u6587\u6863\u4e2d\u5217\u51fa\u4e86\u7ec4\u4ef6\u5728\u4e0d\u540c\u7aef\u7684\u652f\u6301\u7a0b\u5ea6\uff0c\u4ee5\u53ca\u57fa\u672c\u7684\u4f7f\u7528\u793a\u4f8b\u3002 \u90e8\u5206\u672a\u5217\u51fa\u793a\u4f8b\u7684\uff0c\u6807\u660e\u4ec5\u5728\u5c0f\u7a0b\u5e8f\u7aef\u652f\u6301\u7684\u7ec4\u4ef6\u7684\u7528\u6cd5\u53ef\u4ee5\u76f4\u63a5\u53c2\u8003",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/"}),"\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ecd\u9700\u9075\u5faa Taro \u7684\u5f00\u53d1\u89c4\u8303\uff1a"),(0,r.kt)("h3",l({},{id:"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"}),"\u9996\u5b57\u6bcd\u5927\u5199\u4e0e\u9a7c\u5cf0\u5f0f\u547d\u540d"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 H5 \u7aef\u5c1a\u672a\u652f\u6301\u7684 map \u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\n// \u5f15\u5165 map \u7ec4\u4ef6\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap() {}\n  render() {\n    return <Map onClick={this.onTap} />\n  }\n}\n")),(0,r.kt)("h3",l({},{id:"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5-on-\u5f00\u5934"}),"\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u4f20\u9012\u90fd\u8981\u4ee5 on \u5f00\u5934"),(0,r.kt)("p",null,"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d bind \u5f00\u5934\u8fd9\u6837\u7684\u7528\u6cd5\uff0c\u90fd\u9700\u8981\u8f6c\u6210\u4ee5 on \u5f00\u5934\u7684\u5f62\u5f0f\u3002"))}d.isMDXComponent=!0}}]);