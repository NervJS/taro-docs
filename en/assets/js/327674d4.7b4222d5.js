"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46795],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Operating environment"},p=void 0,u={unversionedId:"apis/about/env",id:"version-3.x/apis/about/env",title:"Operating environment",description:"Taro.ENV_TYPE",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/about/env.md",sourceDirName:"apis/about",slug:"/apis/about/env",permalink:"/taro-docs/en/docs/apis/about/env",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/about/env.md",tags:[],version:"3.x",frontMatter:{title:"Operating environment"},sidebar:"API",previous:{title:"API Introduction",permalink:"/taro-docs/en/docs/apis/about/desc"},next:{title:"Event mechanism",permalink:"/taro-docs/en/docs/apis/about/events"}},l={},c=[{value:"Taro.ENV_TYPE",id:"taroenv_type",level:2},{value:"Taro.getEnv()",id:"tarogetenv",level:2}],s={toc:c};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"taroenv_type"}),"Taro.ENV_TYPE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," WeChat Mini-Program"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," Baidu Smart-Program"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," Alipay Mini-Program"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," ByteDance Mini-Program"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.QUICKAPP")," Quick-App"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.QQ")," QQ Mini-Program"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.JD")," Jingdong Mini-Program"),(0,r.kt)("h2",o({},{id:"tarogetenv"}),"Taro.getEnv()"),(0,r.kt)("p",null,"Gets the current environment value and returns the value as above."))}f.isMDXComponent=!0}}]);