"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[95900],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80695:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"Taro.setNavigationBarColor(option)",sidebar_label:"setNavigationBarColor"},i=void 0,u={unversionedId:"apis/ui/navigation-bar/setNavigationBarColor",id:"version-3.x/apis/ui/navigation-bar/setNavigationBarColor",title:"Taro.setNavigationBarColor(option)",description:"Sets the color of the navigation bar in the page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/navigation-bar/setNavigationBarColor.md",sourceDirName:"apis/ui/navigation-bar",slug:"/apis/ui/navigation-bar/setNavigationBarColor",permalink:"/taro-docs/en/docs/3.x/apis/ui/navigation-bar/setNavigationBarColor",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/ui/navigation-bar/setNavigationBarColor.md",tags:[],version:"3.x",frontMatter:{title:"Taro.setNavigationBarColor(option)",sidebar_label:"setNavigationBarColor"},sidebar:"API",previous:{title:"setNavigationBarTitle",permalink:"/taro-docs/en/docs/3.x/apis/ui/navigation-bar/setNavigationBarTitle"},next:{title:"hideNavigationBarLoading",permalink:"/taro-docs/en/docs/3.x/apis/ui/navigation-bar/hideNavigationBarLoading"}},c={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"AnimationOption",id:"animationoption",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:s},d="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(d,a({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sets the color of the navigation bar in the page."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"backgroundColor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Background color value, whose valid value is hexadecimal color")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"frontColor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"Foreground color values, including colors of button, title, and status bar; only #ffffff and #000000 are supported.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"animation"),(0,r.kt)("td",null,(0,r.kt)("code",null,"AnimationOption")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation effects")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",a({},{id:"animationoption"}),"AnimationOption"),(0,r.kt)("p",null,"object.animation is composed as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation change time (in ms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"timingFunc"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"linear" | "easeIn" | "easeOut" | "easeInOut"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation change mode.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Enum: ",(0,r.kt)("br",null),"- 'linear': The animation keeps the same speed from start to end;",(0,r.kt)("br",null),"- 'easeIn': The animation starts at low speed;",(0,r.kt)("br",null),"- 'easeOut': The animation ends at low speed;",(0,r.kt)("br",null),"- 'easeInOut': The animation starts and ends at low speed;")))),(0,r.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.setNavigationBarColor({\n    frontColor: '#ffffff',\n    backgroundColor: '#ff0000',\n    animation: {\n        duration: 400,\n        timingFunc: 'easeIn'\n    }\n})\n")),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.setNavigationBarColor"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(The ",(0,r.kt)("inlineCode",{parentName:"td"},"animation")," is not supported)")))))}k.isMDXComponent=!0}}]);