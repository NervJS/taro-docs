"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58322],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33669:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Taro.getLocation(OBJECT)",sidebar_label:"getLocation"},c=void 0,l={unversionedId:"apis/location/getLocation",id:"version-1.x/apis/location/getLocation",title:"Taro.getLocation(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getLocation\uff0ch5\u7aef\u4ec5\u652f\u6301\u5fae\u4fe1\u516c\u4f17\u53f7\uff08API\u4ee5\u5c0f\u7a0b\u5e8f\u4e3a\u51c6\uff09\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/location/getLocation.md",sourceDirName:"apis/location",slug:"/apis/location/getLocation",permalink:"/taro-docs/en/docs/1.x/apis/location/getLocation",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/location/getLocation.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getLocation(OBJECT)",sidebar_label:"getLocation"},sidebar:"version-1.x/API",previous:{title:"selectorQuery.exec",permalink:"/taro-docs/en/docs/1.x/apis/interface/wxml/selectorQuery_exec"},next:{title:"openLocation",permalink:"/taro-docs/en/docs/1.x/apis/location/openLocation"}},p={},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:s};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getLocation.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.getLocation")),"\uff0ch5\u7aef\u4ec5\u652f\u6301",(0,n.kt)("a",o({parentName:"p"},{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115"}),"\u5fae\u4fe1\u516c\u4f17\u53f7"),"\uff08API\u4ee5\u5c0f\u7a0b\u5e8f\u4e3a\u51c6\uff09\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getLocation(params).then(...)\n")))}f.isMDXComponent=!0}}]);