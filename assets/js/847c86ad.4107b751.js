"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[20586],{79874:function(t,e,r){r.d(e,{Zo:function(){return f},kt:function(){return m}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},f=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,f=i(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(b,c(c({ref:e},f),{},{components:r})):n.createElement(b,c({ref:e},f))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},12078:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const c={slug:"2018-06-25-the-birth-of-taro",title:"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0",authors:"luckyadam"},i=void 0,u={permalink:"/taro-docs/blog/2018-06-25-the-birth-of-taro",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2018-06-25-the-birth-of-taro.md",source:"@site/blog/2018-06-25-the-birth-of-taro.md",title:"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0",description:"\u4ece\u53bb\u5e74\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u8bde\u751f\uff0c\u5230\u4eca\u5e74\u7684\u9010\u6e10\u706b\u70ed\uff0c\u4ee5\u53ca\u5f02\u519b\u7a81\u8d77\u7684\u8f7b\u5e94\u7528\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7b49\u7684\u51fa\u73b0\uff0c\u524d\u7aef\u53ef\u4ee5\u5ef6\u4f38\u7684\u9886\u57df\u5df2\u7ecf\u8d8a\u6765\u8d8a\u5e7f\uff0c\u5f53\u7136\u4e5f\u610f\u5473\u7740\u4e1a\u52a1\u5728\u4e0d\u65ad\u6269\u5927\u3002\u8fd9\u65f6\u5019\uff0c\u5982\u4f55\u901a\u8fc7\u6280\u672f\u624b\u6bb5\u6765\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u5e94\u5bf9\u4e0d\u65ad\u589e\u957f\u7684\u4e1a\u52a1\uff0c\u5c31\u662f\u4e00\u4e2a\u503c\u5f97\u63a2\u7d22\u7684\u8bdd\u9898\u3002\u672c\u6587\u5c06\u5bf9 Taro \u8bde\u751f\u7684\u6545\u4e8b\uff0c\u8fdb\u884c\u6df1\u5165\u6d45\u51fa\u5730\u4ecb\u7ecd\uff0c\u8bb0\u5f55\u4e0b\u8fd9\u4e2a\u5fd9\u788c\u7684\u6625\u590f\u4e4b\u4ea4\u53d1\u751f\u7684\u6545\u4e8b\u3002",date:"2018-06-25T00:00:00.000Z",formattedDate:"2018\u5e746\u670825\u65e5",tags:[],readingTime:25.295,hasTruncateMarker:!0,authors:[{name:"\u9694\u58c1\u8001\u674e",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/luckyadam",imageURL:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",key:"luckyadam"}],frontMatter:{slug:"2018-06-25-the-birth-of-taro",title:"\u4e3a\u4f55\u6211\u4eec\u8981\u7528 React \u6765\u5199\u5c0f\u7a0b\u5e8f - Taro \u8bde\u751f\u8bb0",authors:"luckyadam"},prevItem:{title:"\u9996\u4e2a\u591a\u7aef UI \u7ec4\u4ef6\u5e93 - Taro UI \u53d1\u5e03",permalink:"/taro-docs/blog/2018-08-24-the-birth-of-taro-ui"},nextItem:{title:"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6 - Taro",permalink:"/taro-docs/blog/2018-06-07-Taro"}},l={authorsImageUrls:[void 0]},f=[],p={toc:f};function s(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4ece\u53bb\u5e74\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u8bde\u751f\uff0c\u5230\u4eca\u5e74\u7684\u9010\u6e10\u706b\u70ed\uff0c\u4ee5\u53ca\u5f02\u519b\u7a81\u8d77\u7684\u8f7b\u5e94\u7528\u3001\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u7b49\u7684\u51fa\u73b0\uff0c\u524d\u7aef\u53ef\u4ee5\u5ef6\u4f38\u7684\u9886\u57df\u5df2\u7ecf\u8d8a\u6765\u8d8a\u5e7f\uff0c\u5f53\u7136\u4e5f\u610f\u5473\u7740\u4e1a\u52a1\u5728\u4e0d\u65ad\u6269\u5927\u3002\u8fd9\u65f6\u5019\uff0c\u5982\u4f55\u901a\u8fc7\u6280\u672f\u624b\u6bb5\u6765\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u5e94\u5bf9\u4e0d\u65ad\u589e\u957f\u7684\u4e1a\u52a1\uff0c\u5c31\u662f\u4e00\u4e2a\u503c\u5f97\u63a2\u7d22\u7684\u8bdd\u9898\u3002\u672c\u6587\u5c06\u5bf9 Taro \u8bde\u751f\u7684\u6545\u4e8b\uff0c\u8fdb\u884c\u6df1\u5165\u6d45\u51fa\u5730\u4ecb\u7ecd\uff0c\u8bb0\u5f55\u4e0b\u8fd9\u4e2a\u5fd9\u788c\u7684\u6625\u590f\u4e4b\u4ea4\u53d1\u751f\u7684\u6545\u4e8b\u3002"))}s.isMDXComponent=!0}}]);