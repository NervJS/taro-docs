"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31015],{79874:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return k}});var r=a(93106);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,p(p({ref:e},c),{},{components:a})):r.createElement(k,p({ref:e},c))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:n,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52131:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const p={title:"UserCryptoManager",sidebar_label:"UserCryptoManager"},i=void 0,o={unversionedId:"apis/base/crypto/UserCryptoManager",id:"apis/base/crypto/UserCryptoManager",title:"UserCryptoManager",description:"\u7528\u6237\u52a0\u5bc6\u6a21\u5757",source:"@site/docs/apis/base/crypto/UserCryptoManager.md",sourceDirName:"apis/base/crypto",slug:"/apis/base/crypto/UserCryptoManager",permalink:"/taro-docs/en/docs/apis/base/crypto/UserCryptoManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/crypto/UserCryptoManager.md",tags:[],version:"current",frontMatter:{title:"UserCryptoManager",sidebar_label:"UserCryptoManager"},sidebar:"API",previous:{title:"getUserCryptoManager",permalink:"/taro-docs/en/docs/apis/base/crypto/getUserCryptoManager"},next:{title:"getRandomValues",permalink:"/taro-docs/en/docs/apis/base/crypto/getRandomValues"}},s={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"getLatestUserKey",id:"getlatestuserkey",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"getRandomValues",id:"getrandomvalues",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"getLatestUserKey",id:"getlatestuserkey-1",level:3},{value:"Option",id:"option",level:4},{value:"SuccessCallbackResult",id:"successcallbackresult",level:4},{value:"getRandomValues",id:"getrandomvalues-1",level:3},{value:"Option",id:"option-1",level:4},{value:"SuccessCallbackResult",id:"successcallbackresult-1",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],m={toc:c},u="wrapper";function d(t){var{components:e}=t,p=l(t,["components"]);return(0,r.kt)(u,n({},m,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7528\u6237\u52a0\u5bc6\u6a21\u5757"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",n({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",n({},{id:"getlatestuserkey"}),"getLatestUserKey"),(0,r.kt)("p",null,"\u83b7\u53d6\u6700\u65b0\u7684\u7528\u6237\u52a0\u5bc6\u5bc6\u94a5"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getLatestUserKey.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h4",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"const userCryptoManager = Taro.getUserCryptoManager()\nuserCryptoManager.getLatestUserKey({\n  success: res => {\n    const { encryptKey, iv, version, expireTime } = res\n    console.log(encryptKey, iv, version, expireTime)\n  }\n})\n")),(0,r.kt)("h3",n({},{id:"getrandomvalues"}),"getRandomValues"),(0,r.kt)("p",null,"\u83b7\u53d6\u5bc6\u7801\u5b66\u5b89\u5168\u968f\u673a\u6570"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:a(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:a(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:a(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,r.kt)("h4",n({},{id:"\u793a\u4f8b\u4ee3\u7801-1"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"Taro.getUserCryptoManager().getRandomValues({\n  length: 6 // \u751f\u6210 6 \u4e2a\u5b57\u8282\u957f\u5ea6\u7684\u968f\u673a\u6570,\n  success: res => {\n    console.log(Taro.arrayBufferToBase64(res.randomValues)) // \u8f6c\u6362\u4e3a base64 \u5b57\u7b26\u4e32\u540e\u6253\u5370\n  }\n})\n")),(0,r.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",n({},{id:"getlatestuserkey-1"}),"getLatestUserKey"),(0,r.kt)("h4",n({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: SuccessCallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: SuccessCallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("h4",n({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"encryptKey"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u7528\u6237\u52a0\u5bc6\u5bc6\u94a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"iv"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5bc6\u94a5\u521d\u59cb\u5411\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"version"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5bc6\u94a5\u7248\u672c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"expireTime"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u5bc6\u94a5\u8fc7\u671f\u65f6\u95f4")))),(0,r.kt)("h3",n({},{id:"getrandomvalues-1"}),"getRandomValues"),(0,r.kt)("h4",n({},{id:"option-1"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"length"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u662f"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u6574\u6570\uff0c\u751f\u6210\u968f\u673a\u6570\u7684\u5b57\u8282\u6570\uff0c\u6700\u5927 1048576")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: SuccessCallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"fail"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"complete"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(res: SuccessCallbackResult) => void")),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("h4",n({},{id:"successcallbackresult-1"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"randomValues"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"\u968f\u673a\u6570\u5185\u5bb9\uff0c\u957f\u5ea6\u4e3a\u4f20\u5165\u7684\u5b57\u8282\u6570")))),(0,r.kt)("h2",n({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"UserCryptoManager"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"UserCryptoManager.getLatestUserKey"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"UserCryptoManager.getRandomValues"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0},34208:function(t,e,a){e.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,a){e.Z=a.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},20303:function(t,e,a){e.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(t,e,a){e.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);