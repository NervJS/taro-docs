"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70922],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),k=a,m=p["".concat(c,".").concat(k)]||p[k]||s[k]||o;return n?r.createElement(m,u(u({ref:t},d),{},{components:n})):r.createElement(m,u({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},14515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={title:"Taro.onBackgroundAudioPause(callback)",sidebar_label:"onBackgroundAudioPause"},i=void 0,c={unversionedId:"apis/media/background-audio/onBackgroundAudioPause",id:"version-3.x/apis/media/background-audio/onBackgroundAudioPause",title:"Taro.onBackgroundAudioPause(callback)",description:"Listens on the event of pausing music playback.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/background-audio/onBackgroundAudioPause.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/onBackgroundAudioPause",permalink:"/taro-docs/en/docs/3.x/apis/media/background-audio/onBackgroundAudioPause",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/background-audio/onBackgroundAudioPause.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onBackgroundAudioPause(callback)",sidebar_label:"onBackgroundAudioPause"},sidebar:"API",previous:{title:"onBackgroundAudioPlay",permalink:"/taro-docs/en/docs/3.x/apis/media/background-audio/onBackgroundAudioPlay"},next:{title:"getBackgroundAudioPlayerState",permalink:"/taro-docs/en/docs/3.x/apis/media/background-audio/getBackgroundAudioPlayerState"}},l={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:d},s="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(s,a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Listens on the event of pausing music playback."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/background-audio/wx.onBackgroundAudioPause.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",null,"The callback function for the event of pausing music playback.")))),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onBackgroundAudioPause"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);