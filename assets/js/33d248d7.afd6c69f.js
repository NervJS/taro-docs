"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[9850],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40046:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},p=void 0,i={unversionedId:"apis/base/weapp/app-event/onPageNotFound",id:"apis/base/weapp/app-event/onPageNotFound",title:"Taro.onPageNotFound(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onPageNotFound \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002",source:"@site/docs/apis/base/weapp/app-event/onPageNotFound.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onPageNotFound",permalink:"/taro-docs/docs/apis/base/weapp/app-event/onPageNotFound",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/weapp/app-event/onPageNotFound.md",tags:[],version:"current",frontMatter:{title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},sidebar:"API",previous:{title:"onThemeChange",permalink:"/taro-docs/docs/apis/base/weapp/app-event/onThemeChange"},next:{title:"onError",permalink:"/taro-docs/docs/apis/base/weapp/app-event/onError"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Result",id:"result",level:3},{value:"Callback",id:"callback",level:3}],s={toc:u},m="wrapper";function d(e){var{components:t}=e,l=o(e,["components"]);return(0,a.kt)(m,r({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onpagenotfoundobject-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"App.onPageNotFound"))," \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u56de\u8c03\u4e2d\u8fdb\u884c\u9875\u9762\u91cd\u5b9a\u5411\uff0c\u4f46\u5fc5\u987b\u5728\u56de\u8c03\u4e2d",(0,a.kt)("strong",{parentName:"li"},"\u540c\u6b65"),"\u5904\u7406\uff0c\u5f02\u6b65\u5904\u7406\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u5f02\u6b65\u6267\u884c\uff09\u65e0\u6548\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u5f00\u53d1\u8005\u6ca1\u6709\u8c03\u7528 ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/apis/base/weapp/app-event/onPageNotFound"}),"Taro.onPageNotFound")," \u7ed1\u5b9a\u76d1\u542c\uff0c\u4e5f\u6ca1\u6709\u58f0\u660e ",(0,a.kt)("inlineCode",{parentName:"li"},"App.onPageNotFound"),"\uff0c\u5f53\u8df3\u8f6c\u9875\u9762\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u63a8\u5165\u5fae\u4fe1\u5ba2\u6237\u7aef\u539f\u751f\u7684\u9875\u9762\u4e0d\u5b58\u5728\u63d0\u793a\u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u56de\u8c03\u4e2d\u53c8\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u9875\u9762\uff0c\u5c06\u63a8\u5165\u5fae\u4fe1\u5ba2\u6237\u7aef\u539f\u751f\u7684\u9875\u9762\u4e0d\u5b58\u5728\u63d0\u793a\u9875\u9762\uff0c\u5e76\u4e14\u4e0d\u518d\u7b2c\u4e8c\u6b21\u56de\u8c03\u3002")),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(41524).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(24997).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(34208).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony hybrid",src:n(46315).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Callback"))))),(0,a.kt)("h3",r({},{id:"result"}),"Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"isEntryPage"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")))),(0,a.kt)("h3",r({},{id:"callback"}),"Callback"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(res: Result) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"res"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Result"))))))}d.isMDXComponent=!0},34208:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(e,t,n){t.Z=n.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},20303:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},24997:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);