"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78393],{79874:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return s}});var n=a(93106);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=d(a),s=l,b=k["".concat(u,".").concat(s)]||k[s]||i[s]||r;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55357:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});a(93106);var n=a(79874);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const o={title:"UpdateManager",sidebar_label:"UpdateManager"},p=void 0,u={unversionedId:"apis/base/update/UpdateManager",id:"version-2.x/apis/base/update/UpdateManager",title:"UpdateManager",description:"UpdateManager \u5bf9\u8c61\uff0c\u7528\u6765\u7ba1\u7406\u66f4\u65b0\uff0c\u53ef\u901a\u8fc7 Taro.getUpdateManager \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002",source:"@site/versioned_docs/version-2.x/apis/base/update/UpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/UpdateManager",permalink:"/taro-docs/docs/2.x/apis/base/update/UpdateManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/base/update/UpdateManager.md",tags:[],version:"2.x",frontMatter:{title:"UpdateManager",sidebar_label:"UpdateManager"},sidebar:"version-2.x/API",previous:{title:"getUpdateManager",permalink:"/taro-docs/docs/2.x/apis/base/update/getUpdateManager"},next:{title:"getLaunchOptionsSync",permalink:"/taro-docs/docs/2.x/apis/base/weapp/life-cycle/getLaunchOptionsSync"}},d={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"applyUpdate",id:"applyupdate",level:3},{value:"onCheckForUpdate",id:"oncheckforupdate",level:3},{value:"onUpdateFailed",id:"onupdatefailed",level:3},{value:"onUpdateReady",id:"onupdateready",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"OnCheckForUpdateCallback",id:"oncheckforupdatecallback",level:3},{value:"OnCheckForUpdateResult",id:"oncheckforupdateresult",level:3}],i={toc:c};function k(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",l({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"UpdateManager \u5bf9\u8c61\uff0c\u7528\u6765\u7ba1\u7406\u66f4\u65b0\uff0c\u53ef\u901a\u8fc7 Taro.getUpdateManager \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",l({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",l({},{id:"applyupdate"}),"applyUpdate"),(0,n.kt)("p",null,"\u5f3a\u5236\u5c0f\u7a0b\u5e8f\u91cd\u542f\u5e76\u4f7f\u7528\u65b0\u7248\u672c\u3002\u5728\u5c0f\u7a0b\u5e8f\u65b0\u7248\u672c\u4e0b\u8f7d\u5b8c\u6210\u540e\uff08\u5373\u6536\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"onUpdateReady")," \u56de\u8c03\uff09\u8c03\u7528\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h3",l({},{id:"oncheckforupdate"}),"onCheckForUpdate"),(0,n.kt)("p",null,"\u76d1\u542c\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u3002\u5fae\u4fe1\u5728\u5c0f\u7a0b\u5e8f\u51b7\u542f\u52a8\u65f6\u81ea\u52a8\u68c0\u67e5\u66f4\u65b0\uff0c\u4e0d\u9700\u7531\u5f00\u53d1\u8005\u4e3b\u52a8\u89e6\u53d1\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCheckForUpdateCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnCheckForUpdateCallback")),(0,n.kt)("td",null,"\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",l({},{id:"onupdatefailed"}),"onUpdateFailed"),(0,n.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u5931\u8d25\u4e8b\u4ef6\u3002\u5c0f\u7a0b\u5e8f\u6709\u65b0\u7248\u672c\uff0c\u5ba2\u6237\u7aef\u4e3b\u52a8\u89e6\u53d1\u4e0b\u8f7d\uff08\u65e0\u9700\u5f00\u53d1\u8005\u89e6\u53d1\uff09\uff0c\u4e0b\u8f7d\u5931\u8d25\uff08\u53ef\u80fd\u662f\u7f51\u7edc\u539f\u56e0\u7b49\uff09\u540e\u56de\u8c03"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u5931\u8d25\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",l({},{id:"onupdateready"}),"onUpdateReady"),(0,n.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u6709\u7248\u672c\u66f4\u65b0\u4e8b\u4ef6\u3002\u5ba2\u6237\u7aef\u4e3b\u52a8\u89e6\u53d1\u4e0b\u8f7d\uff08\u65e0\u9700\u5f00\u53d1\u8005\u89e6\u53d1\uff09\uff0c\u4e0b\u8f7d\u6210\u529f\u540e\u56de\u8c03"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u6709\u7248\u672c\u66f4\u65b0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",l({},{id:"oncheckforupdatecallback"}),"OnCheckForUpdateCallback"),(0,n.kt)("p",null,"\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(result: OnCheckForUpdateResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnCheckForUpdateResult"))))),(0,n.kt)("h3",l({},{id:"oncheckforupdateresult"}),"OnCheckForUpdateResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"hasUpdate"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",null,"\u662f\u5426\u6709\u65b0\u7248\u672c")))))}k.isMDXComponent=!0}}]);