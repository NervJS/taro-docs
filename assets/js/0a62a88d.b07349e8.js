"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91400],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Taro.useDidShow(callback)",sidebar_label:"useDidShow"},c=void 0,s={unversionedId:"apis/taro.hooks/useDidShow",id:"apis/taro.hooks/useDidShow",title:"Taro.useDidShow(callback)",description:"\u9875\u9762\u5c55\u793a\u65f6\u7684\u56de\u8c03\u3002",source:"@site/docs/apis/taro.hooks/useDidShow.md",sourceDirName:"apis/taro.hooks",slug:"/apis/taro.hooks/useDidShow",permalink:"/taro-docs/docs/apis/taro.hooks/useDidShow",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/taro.hooks/useDidShow.md",tags:[],version:"current",frontMatter:{title:"Taro.useDidShow(callback)",sidebar_label:"useDidShow"},sidebar:"API",previous:{title:"General",permalink:"/taro-docs/docs/apis/General"},next:{title:"useDidHide",permalink:"/taro-docs/docs/apis/taro.hooks/useDidHide"}},l={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(f,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9875\u9762\u5c55\u793a\u65f6\u7684\u56de\u8c03\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(41524).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(26443).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(79046).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(24997).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(49182).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(24238).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(34208).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(20303).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"\u5feb\u5e94\u7528",src:n(87018).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(83025).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony hybrid",src:n(46315).Z,className:"icon_platform",width:"25px"})),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (options?: getLaunchOptionsSync.LaunchOptions) => void) => void\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"callback"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"(options?: getLaunchOptionsSync.LaunchOptions) => void"))))))}d.isMDXComponent=!0},79046:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},34208:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},83025:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},46315:function(e,t,n){t.Z=n.p+"assets/images/harmonyHybrid-6863e1846520e53fd5c12455c07147cd.png"},24238:function(e,t,n){t.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},49182:function(e,t,n){t.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},87018:function(e,t,n){t.Z=n.p+"assets/images/quickapp-9d223aa6970cfc9a18ddf09a125a3c09.png"},20303:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},26443:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},24997:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},41524:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);