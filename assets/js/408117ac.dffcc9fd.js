"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13932],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19529:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"\u8de8\u7aef\u8bf7\u6c42\u5e93"},i=void 0,p={unversionedId:"request",id:"version-3.x/request",title:"\u8de8\u7aef\u8bf7\u6c42\u5e93",description:"\u672c\u7bc7\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u4f7f\u7528 web \u751f\u6001\u4e0b\u7684\u7f51\u7edc\u8bf7\u6c42\u5e93, \u8fd9\u91cc\u4ee5 axios \u4e3a\u4f8b\u3002",source:"@site/versioned_docs/version-3.x/request.md",sourceDirName:".",slug:"/request",permalink:"/taro-docs/docs/request",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/request.md",tags:[],version:"3.x",frontMatter:{title:"\u8de8\u7aef\u8bf7\u6c42\u5e93"},sidebar:"docs",previous:{title:"\u8def\u7531\u5e93",permalink:"/taro-docs/docs/router-extend"},next:{title:"\u9759\u6001\u8d44\u6e90\u5f15\u7528",permalink:"/taro-docs/docs/static-reference"}},u={},c=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",level:2},{value:"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570",id:"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55",id:"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55",level:2}],s={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u4f7f\u7528 web \u751f\u6001\u4e0b\u7684\u7f51\u7edc\u8bf7\u6c42\u5e93, \u8fd9\u91cc\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"axios")," \u4e3a\u4f8b\u3002"),(0,n.kt)("h2",a({},{id:"\u539f\u7406"}),"\u539f\u7406"),(0,n.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/tree/next/packages/taro-plugin-http"}),"@tarojs/plugin-http")," \u63d2\u4ef6\uff0c\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e0b runtime \u6ce8\u5165\u6a21\u62df\u5b9e\u73b0\u7684 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest"}),"XMLHttpRequest")," , \u4ece\u800c\u652f\u6301\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u4f7f\u7528 web \u751f\u6001\u4e0b\u7684\u5404\u79cd\u7f51\u7edc\u8bf7\u6c42\u5e93\u3002\u81f3\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728 h5\u3001\u5c0f\u7a0b\u5e8f\u3001react native \u4e2d\u7545\u5feb\u4f7f\u7528 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://axios-http.com/"}),"axios")," \u5e93\u4f5c\u4e3a\u8bf7\u6c42\u5e93\u3002"),(0,n.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c \u4efb\u4f55\u5e95\u5c42\u57fa\u4e8e XMLHttpRequest \u5f00\u53d1\u7684 web \u5e93\u4f60\u90fd\u53ef\u4ee5\u81ea\u7531\u4f7f\u7528\u3002"),(0,n.kt)("h2",a({},{id:"\u63d2\u4ef6\u4f7f\u7528"}),"\u63d2\u4ef6\u4f7f\u7528"),(0,n.kt)("p",null,"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"npm i @tarojs/plugin-http axios\n")),(0,n.kt)("p",null,"\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"// config/index.js\nconfig = {\n  // ...\n  plugins: ['@tarojs/plugin-http'],\n}\n")),(0,n.kt)("p",null,"\u4ee3\u7801\u5f15\u5165"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),'import axios from "axios";\n\nconst request = axios.create({\n    baseURL: ""\n});\n\n\nexport request;\n')),(0,n.kt)("h2",a({},{id:"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570"}),"\u63d2\u4ef6\u5b8c\u6574\u914d\u7f6e\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u540d"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"enableCookie"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"false"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"(\u662f\u5426)\u6ce8\u5165\u76f8\u5173\u4ee3\u7801\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"td"},"document.cookie")," \u3001 \u901a\u8fc7\u540e\u7aef\u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"td"},"Set-Cookie")," \u54cd\u5e94\u5934\u6765\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"td"},"cookie"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"disabledFormData"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"true"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"(\u662f\u5426)\u7981\u7528\u6389 FormData \u5168\u5c40\u5bf9\u8c61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"disabledBlob"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"true"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"(\u662f\u5426)\u7981\u7528\u6389 Blob \u5168\u5c40\u5bf9\u8c61")))),(0,n.kt)("h2",a({},{id:"\u9650\u5236"}),"\u9650\u5236"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301\u4e0a\u4f20\uff0c\u4e14\u63d2\u4ef6\u9ed8\u8ba4\u4f1a\u5c06\u5168\u5c40 ",(0,n.kt)("inlineCode",{parentName:"li"},"FormData")," \u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"Blob")," \u5bf9\u8c61\u66ff\u6362\u6210 ",(0,n.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff08\u4ec5\u9488\u5bf9\u5c0f\u7a0b\u5e8f\u73af\u5883\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u63d2\u4ef6\u9700\u642d\u914d taro \u4e3b\u5305 3.6.0 \u53ca\u5176\u4ee5\u4e0a\u7248\u672c\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"webpack4 \u7528\u6237\u9700\u5347\u7ea7\u63d2\u4ef6\u7248\u672c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"3.6.6")," \u53ca\u5176\u4ee5\u4e0a")),(0,n.kt)("h2",a({},{id:"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55"}),"\u63d2\u4ef6\u53d1\u5e03\u8bb0\u5f55"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"3.6.0")," \u63d2\u4ef6\u9996\u6b21\u53d1\u5e03"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"3.6.6")," ",(0,n.kt)("a",a({parentName:"li"},{href:"https://github.com/NervJS/taro/pull/13699"}),"fix: @tarojs/plugin-http \u5bf9 webpack4 \u7684\u517c\u5bb9"))))}d.isMDXComponent=!0}}]);