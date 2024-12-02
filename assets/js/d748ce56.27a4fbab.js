"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85950],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51208:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"Taro.getBLEMTU(option)",sidebar_label:"getBLEMTU"},o=void 0,p={unversionedId:"apis/device/bluetooth-ble/getBLEMTU",id:"version-3.x/apis/device/bluetooth-ble/getBLEMTU",title:"Taro.getBLEMTU(option)",description:"\u83b7\u53d6\u84dd\u7259\u4f4e\u529f\u8017\u7684\u6700\u5927\u4f20\u8f93\u5355\u5143\u3002\u9700\u5728 Taro.createBLEConnection \u8c03\u7528\u6210\u529f\u540e\u8c03\u7528\u3002",source:"@site/versioned_docs/version-3.x/apis/device/bluetooth-ble/getBLEMTU.md",sourceDirName:"apis/device/bluetooth-ble",slug:"/apis/device/bluetooth-ble/getBLEMTU",permalink:"/taro-docs/docs/3.x/apis/device/bluetooth-ble/getBLEMTU",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/device/bluetooth-ble/getBLEMTU.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBLEMTU(option)",sidebar_label:"getBLEMTU"},sidebar:"API",previous:{title:"notifyBLECharacteristicValueChange",permalink:"/taro-docs/docs/3.x/apis/device/bluetooth-ble/notifyBLECharacteristicValueChange"},next:{title:"getBLEDeviceServices",permalink:"/taro-docs/docs/3.x/apis/device/bluetooth-ble/getBLEDeviceServices"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"WriteType",id:"writetype",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:u},d="wrapper";function m(t){var{components:e}=t,i=l(t,["components"]);return(0,a.kt)(d,r({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u84dd\u7259\u4f4e\u529f\u8017\u7684\u6700\u5927\u4f20\u8f93\u5355\u5143\u3002\u9700\u5728 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/apis/device/bluetooth-ble/createBLEConnection"}),"Taro.createBLEConnection")," \u8c03\u7528\u6210\u529f\u540e\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u7a0b\u5e8f\u4e2d MTU \u4e3a ATT_MTU\uff0c\u5305\u542b Op-Code \u548c Attribute Handle \u7684\u957f\u5ea6\uff0c\u5b9e\u9645\u53ef\u4ee5\u4f20\u8f93\u7684\u6570\u636e\u957f\u5ea6\u4e3a ATT_MTU - 3"),(0,a.kt)("li",{parentName:"ul"},"iOS \u7cfb\u7edf\u4e2d MTU \u4e3a\u56fa\u5b9a\u503c\uff1b\u5b89\u5353\u7cfb\u7edf\u4e2d\uff0cMTU \u4f1a\u5728\u7cfb\u7edf\u534f\u5546\u6210\u529f\u4e4b\u540e\u53d1\u751f\u6539\u53d8\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/apis/device/bluetooth-ble/onBLEMTUChange"}),"Taro.onBLEMTUChange")," \u76d1\u542c\u3002")),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(41524).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(79046).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(24238).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(34208).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(20303).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(83025).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEMTU.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",r({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"deviceId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u84dd\u7259\u8bbe\u5907 id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"writeType"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof WriteType")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},'"write"')),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5199\u6a21\u5f0f \uff08iOS \u7279\u6709\u53c2\u6570\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.BluetoothError) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"mtu"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6700\u5927\u4f20\u8f93\u5355\u5143")))),(0,a.kt)("h3",r({},{id:"writetype"}),"WriteType"),(0,a.kt)("p",null,"\u5199\u6a21\u5f0f\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"write"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6709\u56de\u590d\u5199")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"writeNoResponse"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u65e0\u56de\u590d\u5199")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getBLEMTU({\n  deviceId: '',\n  writeType: 'write',\n  success (res) {\n    console.log(res)\n  }\n})\n")))}m.isMDXComponent=!0},79046:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},34208:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},24238:function(t,e,n){e.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},20303:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},41524:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);