"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60111],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),k=r,g=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51262:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"\u751f\u547d\u5468\u671f API"},i=void 0,p={unversionedId:"test-utils/life-cycle",id:"version-4.x/test-utils/life-cycle",title:"\u751f\u547d\u5468\u671f API",description:'\u751f\u547d\u5468\u671f\u76d1\u542c\uff0c\u8fd9\u91cc\u4f1a\u5728\u5bf9\u5e94\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4e0b\u6b21\u6e32\u67d3\u524d\u6267\u884c\uff0c\u8bf4\u767d\u4e86\u5c31\u662f\u4e00\u4e2a"after lifecycle"\u7684\u94a9\u5b50',source:"@site/versioned_docs/version-4.x/test-utils/life-cycle.md",sourceDirName:"test-utils",slug:"/test-utils/life-cycle",permalink:"/taro-docs/docs/4.x/test-utils/life-cycle",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/test-utils/life-cycle.md",tags:[],version:"4.x",frontMatter:{title:"\u751f\u547d\u5468\u671f API"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u76f8\u5173 API",permalink:"/taro-docs/docs/4.x/test-utils/fire-event"},next:{title:"\u8f85\u52a9\u7c7b API",permalink:"/taro-docs/docs/4.x/test-utils/other"}},u={},d=[{value:"AppLifecycle",id:"applifecycle",level:2},{value:"onLaunch",id:"onlaunch",level:3},{value:"onShow",id:"onshow",level:3},{value:"onHide",id:"onhide",level:3},{value:"onError",id:"onerror",level:3},{value:"onPageNotFound",id:"onpagenotfound",level:3},{value:"onUnhandledRejection",id:"onunhandledrejection",level:3},{value:"PageLifecycle",id:"pagelifecycle",level:2}],c={toc:d},m="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)(m,r({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u751f\u547d\u5468\u671f\u76d1\u542c\uff0c\u8fd9\u91cc\u4f1a\u5728\u5bf9\u5e94",(0,a.kt)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4e0b\u6b21\u6e32\u67d3\u524d\u6267\u884c"),'\uff0c\u8bf4\u767d\u4e86\u5c31\u662f\u4e00\u4e2a"after lifecycle"\u7684\u94a9\u5b50'),(0,a.kt)("h2",r({},{id:"applifecycle"}),"AppLifecycle"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"APP \u751f\u547d\u5468\u671f")),(0,a.kt)("p",null,"\u5bf9\u5e94\u751f\u547d\u5468\u671f\u7684\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/react-entry"}),"\u4f20\u9001\u95e8")),(0,a.kt)("h3",r({},{id:"onlaunch"}),"onLaunch"),(0,a.kt)("p",null,"\u76d1\u542c onLaunch \u751f\u547d\u5468\u671f\u6267\u884c\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function onLaunch(): Promise<void>\n")),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// \u7b49\u5f85onLaunch\u54cd\u5e94\u5b8c\u6210\nawait testUtils.AppLifecycle.onLaunch()\n")),(0,a.kt)("h3",r({},{id:"onshow"}),"onShow"),(0,a.kt)("p",null,"\u7a0b\u5e8f\u542f\u52a8\uff0c\u6216\u5207\u524d\u53f0\u65f6\u89e6\u53d1"),(0,a.kt)("p",null,"\u76d1\u542c onShow / componentDidShow \u751f\u547d\u5468\u671f\u6267\u884c\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function onShow(): Promise<void>\n")),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// \u7b49\u5f85onShow\u54cd\u5e94\u5b8c\u6210\nawait testUtils.AppLifecycle.onShow()\n")),(0,a.kt)("h3",r({},{id:"onhide"}),"onHide"),(0,a.kt)("p",null,"\u7a0b\u5e8f\u5207\u540e\u53f0\u65f6\u89e6\u53d1"),(0,a.kt)("p",null,"\u76d1\u542c onHide / componentDidHide \u751f\u547d\u5468\u671f\u6267\u884c\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function onHide(): Promise<void>\n")),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// \u7b49\u5f85onHide\u54cd\u5e94\u5b8c\u6210\nawait testUtils.AppLifecycle.onHide()\n")),(0,a.kt)("h3",r({},{id:"onerror"}),"onError"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53d1\u751f\u811a\u672c\u9519\u8bef\u6216 API \u8c03\u7528\u62a5\u9519\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function onError(): Promise<Error>\n")),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// \u7b49\u5f85onError\u54cd\u5e94\u5b8c\u6210\nawait testUtils.AppLifecycle.onError()\n")),(0,a.kt)("h3",r({},{id:"onpagenotfound"}),"onPageNotFound"),(0,a.kt)("p",null,"\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function onPageNotFound(): Promise<{ path: string; query: object; isEntryPage: boolean }>\n")),(0,a.kt)("p",null,"\u56de\u8c03\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"isEntryPage"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")))),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// \u7b49\u5f85onPageNotFound\u54cd\u5e94\u5b8c\u6210\nawait testUtils.AppLifecycle.onPageNotFound()\n")),(0,a.kt)("h3",r({},{id:"onunhandledrejection"}),"onUnhandledRejection"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u6709\u672a\u5904\u7406\u7684 Promise \u62d2\u7edd\u65f6\u89e6\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"function onUnhandledRejection(): Promise<{ reason: string; promise: Promise<unknown> }>\n")),(0,a.kt)("p",null,"\u56de\u8c03\u53c2\u6570\uff1a\n<<<<<<< HEAD"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"reason"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u62d2\u7edd\u539f\u56e0\uff0c\u4e00\u822c\u662f\u4e00\u4e2a Error \u5bf9\u8c61")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"promise"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Promise"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u88ab\u62d2\u7edd\u7684 Promise \u5bf9\u8c61")))),(0,a.kt)("p",null,"=======\n| \u5c5e\u6027 | \u7c7b\u578b | \u8bf4\u660e |\n| ------- | ------- | ------------------------------- |\n| reason | string | \u62d2\u7edd\u539f\u56e0\uff0c\u4e00\u822c\u662f\u4e00\u4e2a Error \u5bf9\u8c61 |\n| promise | Promise | \u88ab\u62d2\u7edd\u7684 Promise \u5bf9\u8c61 |"),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"master")))))))),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// \u7b49\u5f85onUnhandledRejection\u54cd\u5e94\u5b8c\u6210\nawait testUtils.AppLifecycle.onUnhandledRejection()\n")),(0,a.kt)("h2",r({},{id:"pagelifecycle"}),"PageLifecycle"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Page \u751f\u547d\u5468\u671f")),(0,a.kt)("p",null,"\u9875\u9762\u7ea7\u522b\u7684\u751f\u547d\u5468\u671f\u4f7f\u7528\u65b9\u5f0f\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"AppLifecycle"),"\u7c7b\u4f3c\uff0c\u9664\u4e86\u7528\u4e8e\u76d1\u542c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"onXXX"),"\u5916\uff0c\u9875\u9762\u7ea7\u522b\u7684\u751f\u547d\u5468\u671f api \u8fd8\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"triggerXXX"),"\u7528\u4e8e\u6a21\u62df\u89e6\u53d1\u4e00\u4e9b\u7279\u5b9a\u7684\u751f\u547d\u5468\u671f\u3002\n\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"onReachBottom"),"\uff0c\u9700\u8981\u89e6\u53d1\u5b83\u7684\u6761\u4ef6\u9700\u8981\u76d1\u542c\u7528\u6237\u4e0a\u62c9\u89e6\u5e95\u7684\u4e8b\u4ef6\uff0c\u6211\u4eec\u5199\u4e8b\u4ef6\u53bb\u6a21\u62df\u6bd4\u8f83\u9ebb\u70e6\uff0c\u6240\u4ee5\u6211\u4eec\u5e72\u8106\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"triggerReachBottom"),"\u7ed9\u7528\u6237\u5728\u6d4b\u8bd5\u65f6\u53ef\u76f4\u63a5\u89e6\u53d1\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"onReachBottom"),"\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u3002"),(0,a.kt)("p",null,"\u5bf9\u5e94\u751f\u547d\u5468\u671f\u7684\u8bf4\u660e\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51\uff1a",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.taro.zone/docs/react-page"}),"\u4f20\u9001\u95e8")),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// \u7b49\u5f85pages/index/index\u8fd9\u4e2a\u8def\u7531\u9875\u9762\u5c55\u793a\nawait testUtils.PageLifecycle.onShow('pages/index/index')\n// \u624b\u52a8\u89e6\u53d1onReachBottom\u4e8b\u4ef6\ntestUtils.PageLifecycle.triggerReachBottom()\n// \u7b49\u5f85onReachBottom\u54cd\u5e94\u5b8c\u6210\nawait testUtils.PageLifecycle.onReachBottom()\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u65b9\u6cd5"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onLoad(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u6b64\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7\u8bbf\u95ee options \u53c2\u6570\u6216\u8c03\u7528 getCurrentInstance().router\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u9875\u9762\u8def\u7531\u53c2\u6570\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onUnload(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u5bf9\u5e94\u9875\u9762\u7684 onUnload\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onShow(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9875\u9762\u663e\u793a/\u5207\u5165\u524d\u53f0\u65f6\u89e6\u53d1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onHide(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9875\u9762\u9690\u85cf/\u5207\u5165\u540e\u53f0\u65f6\u89e6\u53d1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onReady(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4ece\u6b64\u751f\u547d\u5468\u671f\u5f00\u59cb\u53ef\u4ee5\u4f7f\u7528 createCanvasContext \u6216 createSelectorQuery \u7b49 API \u8bbf\u95ee\u5c0f\u7a0b\u5e8f\u6e32\u67d3\u5c42\u7684 DOM \u8282\u70b9\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onPullDownRefresh(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u7528\u6237\u4e0b\u62c9\u52a8\u4f5c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerPullDownRefresh(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onPullDownRefresh"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onReachBottom(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u7528\u6237\u4e0a\u62c9\u89e6\u5e95\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerReachBottom(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onReachBottom"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onPageScroll(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u7528\u6237\u6ed1\u52a8\u9875\u9762\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerPageScroll(path: string, opt: PageScrollObject)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onPageScroll"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onAddToFavorites(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u6536\u85cf\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u6536\u85cf\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerAddToFavorites(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onAddToFavorites"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onShareAppMessage(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u7528\u6237\u70b9\u51fb\u9875\u9762\u5185\u8f6c\u53d1\u6309\u94ae\uff08Button \u7ec4\u4ef6 openType='share'\uff09\u6216\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u8f6c\u53d1\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u8f6c\u53d1\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerShareAppMessage(path: string, opt: ShareAppMessageObject)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onShareAppMessage"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onShareTimeline(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u53f3\u4e0a\u89d2\u83dc\u5355\u201c\u5206\u4eab\u5230\u670b\u53cb\u5708\u201d\u6309\u94ae\u7684\u884c\u4e3a\uff0c\u5e76\u81ea\u5b9a\u4e49\u5206\u4eab\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerShareTimeline(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onShareTimeline"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onResize(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u76d1\u542c\u5c4f\u5e55\u65cb\u8f6c\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerResize(path: string, opt: PageResizeObject)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onResize"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onTabItemTap(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u70b9\u51fb tab \u65f6\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerTabItemTap(path: string, opt: TabItemTapObject)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onTabItemTap"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onSaveExitState(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6bcf\u5f53\u5c0f\u7a0b\u5e8f\u53ef\u80fd\u88ab\u9500\u6bc1\u4e4b\u524d\uff0c\u9875\u9762\u56de\u8c03\u51fd\u6570 onSaveExitState \u4f1a\u88ab\u8c03\u7528\uff0c\u53ef\u4ee5\u8fdb\u884c\u9000\u51fa\u72b6\u6001\u7684\u4fdd\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerSaveExitState(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onSaveExitState"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onTitleClick(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u70b9\u51fb\u6807\u9898\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerTitleClick(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onTitleClick"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onOptionMenuClick(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u70b9\u51fb\u5bfc\u822a\u680f\u989d\u5916\u56fe\u6807\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerOptionMenuClick(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onOptionMenuClick"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onPopMenuClick(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerPopMenuClick(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onPopMenuClick"),"\u751f\u547d\u5468\u671f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onPullIntercept(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4e0b\u62c9\u622a\u65ad\u65f6 onPullIntercept \u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"triggerPullIntercept(path: string)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u89e6\u53d1",(0,a.kt)("inlineCode",{parentName:"td"},"onPageScroll"),"\u751f\u547d\u5468\u671f")))))}k.isMDXComponent=!0}}]);