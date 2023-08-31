"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78366],{79874:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return i}});var l=a(93106);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),k=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=k(e.components);return l.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=k(a),i=r,h=s["".concat(d,".").concat(i)]||s[i]||u[i]||n;return a?l.createElement(h,o(o({ref:t},c),{},{components:a})):l.createElement(h,o({ref:t},c))}));function i(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var k=2;k<n;k++)o[k]=a[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},87452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});a(93106);var l=a(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"UploadTask",sidebar_label:"UploadTask"},p=void 0,d={unversionedId:"apis/network/upload/UploadTask",id:"version-3.x/apis/network/upload/UploadTask",title:"UploadTask",description:"Listens on the upload progress change event and cancels upload tasks.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/network/upload/UploadTask.md",sourceDirName:"apis/network/upload",slug:"/apis/network/upload/UploadTask",permalink:"/taro-docs/en/docs/apis/network/upload/UploadTask",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/network/upload/UploadTask.md",tags:[],version:"3.x",frontMatter:{title:"UploadTask",sidebar_label:"UploadTask"},sidebar:"API",previous:{title:"uploadFile",permalink:"/taro-docs/en/docs/apis/network/upload/uploadFile"},next:{title:"sendSocketMessage",permalink:"/taro-docs/en/docs/apis/network/websocket/sendSocketMessage"}},k={},c=[{value:"Methods",id:"methods",level:2},{value:"abort",id:"abort",level:3},{value:"API Support",id:"api-support",level:4},{value:"offHeadersReceived",id:"offheadersreceived",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"offProgressUpdate",id:"offprogressupdate",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"onHeadersReceived",id:"onheadersreceived",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"headersReceived",id:"headersreceived",level:3},{value:"onProgressUpdate",id:"onprogressupdate",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"progress",id:"progress",level:3},{value:"Parameters",id:"parameters",level:2},{value:"OffHeadersReceivedCallback",id:"offheadersreceivedcallback",level:3},{value:"OffProgressUpdateCallback",id:"offprogressupdatecallback",level:3},{value:"OnHeadersReceivedCallback",id:"onheadersreceivedcallback",level:3},{value:"OnProgressUpdateCallback",id:"onprogressupdatecallback",level:3},{value:"OnHeadersReceivedCallbackResult",id:"onheadersreceivedcallbackresult",level:3},{value:"OnProgressUpdateCallbackResult",id:"onprogressupdatecallbackresult",level:3},{value:"API Support",id:"api-support-5",level:2}],u={toc:c};function s(e){var{components:t}=e,a=n(e,["components"]);return(0,l.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Listens on the upload progress change event and cancels upload tasks."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"methods"}),"Methods"),(0,l.kt)("h3",r({},{id:"abort"}),"abort"),(0,l.kt)("p",null,"Aborts upload tasks."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.abort.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,l.kt)("h4",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.abort"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"offheadersreceived"}),"offHeadersReceived"),(0,l.kt)("p",null,"Listens on HTTP Response Header event, which will be earlier than the request completion event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.offHeadersReceived.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OffHeadersReceivedCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OffHeadersReceivedCallback")),(0,l.kt)("td",null,"The callback function for the HTTP Response Header event.")))),(0,l.kt)("h4",r({},{id:"api-support-1"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.offHeadersReceived"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"offprogressupdate"}),"offProgressUpdate"),(0,l.kt)("p",null,"Un-listens on the upload progress change event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.offProgressUpdate.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OffProgressUpdateCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OffProgressUpdateCallback")),(0,l.kt)("td",null,"The callback function for the upload progress change event.")))),(0,l.kt)("h4",r({},{id:"api-support-2"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.offProgressUpdate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"onheadersreceived"}),"onHeadersReceived"),(0,l.kt)("p",null,"Listens on HTTP Response Header event, which will be earlier than the request completion event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.onHeadersReceived.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnHeadersReceivedCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnHeadersReceivedCallback")),(0,l.kt)("td",null,"The callback function for the HTTP Response Header event.")))),(0,l.kt)("h4",r({},{id:"api-support-3"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.onHeadersReceived"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"headersreceived"}),"headersReceived"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnHeadersReceivedCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnHeadersReceivedCallback")),(0,l.kt)("td",null,"The callback function for the HTTP Response Header event")))),(0,l.kt)("h3",r({},{id:"onprogressupdate"}),"onProgressUpdate"),(0,l.kt)("p",null,"Listens on the upload progress change event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.onProgressUpdate.html"}),"Reference"))),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnProgressUpdateCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnProgressUpdateCallback")),(0,l.kt)("td",null,"The callback function for the upload progress change event.")))),(0,l.kt)("h4",r({},{id:"api-support-4"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.onProgressUpdate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"progress"}),"progress"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: OnProgressUpdateCallback) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnProgressUpdateCallback")),(0,l.kt)("td",null,"The callback function for the upload progress change event.")))),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"offheadersreceivedcallback"}),"OffHeadersReceivedCallback"),(0,l.kt)("p",null,"The callback function for the HTTP Response Header event"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"res"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",r({},{id:"offprogressupdatecallback"}),"OffProgressUpdateCallback"),(0,l.kt)("p",null,"The callback function for the upload progress change event."),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"res"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",r({},{id:"onheadersreceivedcallback"}),"OnHeadersReceivedCallback"),(0,l.kt)("p",null,"The callback function for the HTTP Response Header event."),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnHeadersReceivedCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnHeadersReceivedCallbackResult"))))),(0,l.kt)("h3",r({},{id:"onprogressupdatecallback"}),"OnProgressUpdateCallback"),(0,l.kt)("p",null,"The callback function for the upload progress change event."),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: OnProgressUpdateCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnProgressUpdateCallbackResult"))))),(0,l.kt)("h3",r({},{id:"onheadersreceivedcallbackresult"}),"OnHeadersReceivedCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"header"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",null,"HTTP Response Header returned by the developer server")))),(0,l.kt)("h3",r({},{id:"onprogressupdatecallbackresult"}),"OnProgressUpdateCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"progress"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Upload progress percentage")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"totalBytesExpectedToSend"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The length of data expected to be uploaded, in bytes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"totalBytesSent"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The length of uploaded data, in bytes")))),(0,l.kt)("h2",r({},{id:"api-support-5"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.abort"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.offHeadersReceived"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.offProgressUpdate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.onHeadersReceived"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"UploadTask.onProgressUpdate"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);