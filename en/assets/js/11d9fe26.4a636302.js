"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78760],{79874:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(93106);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(g,s(s({ref:e},u),{},{components:t})):r.createElement(g,s({ref:e},u))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a.mdxType="string"==typeof n?n:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14029:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});t(93106);var r=t(79874);function i(){return i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},i.apply(this,arguments)}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}const s={title:"\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56"},a=void 0,l={unversionedId:"mini-split-chunks-plugin",id:"mini-split-chunks-plugin",title:"\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56",description:"\u5728\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\uff0cTaro \u7f16\u8bd1\u5668\u4f9d\u8d56 SplitChunksPlugin \u63d2\u4ef6\u62bd\u53d6\u516c\u5171\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3b\u5305\u3001\u5206\u5305\u4f9d\u8d56\u7684 module \u90fd\u4f1a\u6253\u5305\u5230\u6839\u76ee\u5f55 vendors.js \u6587\u4ef6\u4e2d\uff08\u6709\u4e00\u4e2a\u4f8b\u5916\uff0c\u5f53\u53ea\u6709\u5206\u5305\u91cc\u9762\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u9875\u9762\u4f9d\u8d56 module \u65f6\uff0c\u4f1a\u6253\u5305\u5230\u5206\u5305\u4e2d\u4f9d\u8d56\u9875\u9762\u6e90\u7801\u4e2d\uff09\uff0c\u76f4\u63a5\u5f71\u54cd\u5230\u5c0f\u7a0b\u5e8f\u4e3b\u5305\u5927\u5c0f\uff0c\u5f88\u5bb9\u6613\u8d85\u51fa 2M \u7684\u9650\u5236\u5927\u5c0f\u3002",source:"@site/docs/mini-split-chunks-plugin.md",sourceDirName:".",slug:"/mini-split-chunks-plugin",permalink:"/taro-docs/en/docs/next/mini-split-chunks-plugin",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/mini-split-chunks-plugin.md",tags:[],version:"current",frontMatter:{title:"\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56"},sidebar:"docs",previous:{title:"\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u4f18\u5316\u6307\u5357",permalink:"/taro-docs/en/docs/next/compile-optimized"},next:{title:"\u4f9d\u8d56\u9884\u52a0\u8f7d",permalink:"/taro-docs/en/docs/next/prebundle"}},p={},u=[{value:"SplitChunks \u9ed8\u8ba4\u914d\u7f6e",id:"splitchunks-\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"\u4f18\u5316\u601d\u8def",id:"\u4f18\u5316\u601d\u8def",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}],c={toc:u};function m(n){var{components:e}=n,t=o(n,["components"]);return(0,r.kt)("wrapper",i({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u5c0f\u7a0b\u5e8f\u65f6\uff0cTaro \u7f16\u8bd1\u5668\u4f9d\u8d56 SplitChunksPlugin \u63d2\u4ef6\u62bd\u53d6\u516c\u5171\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3b\u5305\u3001\u5206\u5305\u4f9d\u8d56\u7684 module \u90fd\u4f1a\u6253\u5305\u5230\u6839\u76ee\u5f55 vendors.js \u6587\u4ef6\u4e2d\uff08\u6709\u4e00\u4e2a\u4f8b\u5916\uff0c\u5f53\u53ea\u6709\u5206\u5305\u91cc\u9762\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u9875\u9762\u4f9d\u8d56 module \u65f6\uff0c\u4f1a\u6253\u5305\u5230\u5206\u5305\u4e2d\u4f9d\u8d56\u9875\u9762\u6e90\u7801\u4e2d\uff09\uff0c\u76f4\u63a5\u5f71\u54cd\u5230\u5c0f\u7a0b\u5e8f\u4e3b\u5305\u5927\u5c0f\uff0c\u5f88\u5bb9\u6613\u8d85\u51fa 2M \u7684\u9650\u5236\u5927\u5c0f\u3002"),(0,r.kt)("h3",i({},{id:"splitchunks-\u9ed8\u8ba4\u914d\u7f6e"}),"SplitChunks \u9ed8\u8ba4\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u901a\u8fc7 ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/next/config-detail#minicommonchunks"}),"mini.commonChunks")," \u914d\u7f6e\u8fdb\u884c\u4fee\u6539\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-json",metastring:'title="SplitChunks \u9ed8\u8ba4\u914d\u7f6e"',title:'"SplitChunks','\u9ed8\u8ba4\u914d\u7f6e"':!0}),"{\n  chunks: 'all',\n  maxInitialRequests: Infinity,\n  minSize: 0,\n  cacheGroups: {\n    common: {\n      name: config.isBuildPlugin ? 'plugin/common' : 'common',\n      minChunks: 2,\n      priority: 1\n    },\n    vendors: {\n      name: config.isBuildPlugin ? 'plugin/vendors' : 'vendors',\n      minChunks: 2, // \u5f53\u5927\u4e8e 2 \u4e2a\u4f9d\u8d56\u65f6\uff0c\u624d\u6253\u5305\u5230 vendors.js \u4e2d\n      test: module => {\n        return /[\\\\/]node_modules[\\\\/]/.test(module.resource)\n      },\n      priority: 10\n    },\n    taro: {\n      name: config.isBuildPlugin ? 'plugin/taro' : 'taro',\n      test: module => {\n        return taroBaseReg.test(module.context)\n      },\n      priority: 100\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u5e94\u8be5\u5982\u4f55\u5bf9\u5206\u5305\u516c\u5171\u4f9d\u8d56\u7684\u8fdb\u884c\u62bd\u53d6\uff0c\u51cf\u5c11\u4e3b\u5305\u5927\u5c0f\u5462\uff1f"),(0,r.kt)("h3",i({},{id:"\u4f18\u5316\u601d\u8def"}),"\u4f18\u5316\u601d\u8def"),(0,r.kt)("p",null,"\u611f\u8c22 ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/huangcj99"}),"@huangcj")," \u63d0\u4ea4\u7684 miniSplitChunksPlugin \u63d2\u4ef6\uff0c\u5728\u6253\u5305\u65f6\u901a\u8fc7\u7ee7\u627f SplitChunksPlugin \u8fdb\u884c\u76f8\u5173 module \u4f9d\u8d56\u6811\u5206\u6790\uff0c\u8fc7\u6ee4\u51fa\u4e3b\u5305\u4e2d\u65e0\u4f9d\u8d56\u4f46\u5206\u5305\u72ec\u81ea\u4f9d\u8d56\u7684 module \u63d0\u53d6\u6210 sub vendor chunks\uff0c\u8fc7\u6ee4\u51fa\u4e3b\u5305\u4e2d\u65e0\u4f9d\u8d56\u4f46\u591a\u4e2a\u5206\u5305\u5171\u540c\u4f9d\u8d56\u7684 module \u4e3a sub common chunks\uff0c\u5229\u7528 SplitChunksPlugin \u7684 cacheGroup \u529f\u80fd\uff0c\u5c06\u76f8\u5173\u5206\u5305\u4f9d\u8d56\u8fdb\u884c\u6587\u4ef6 split\u3002\u62bd\u53d6\u51fa\u7684\u76ee\u5f55\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u5305\u6839\u76ee\u5f55/sub-vendors.(js|wxss)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5 module \u53ea\u88ab\u5355\u4e2a\u5206\u5305\u5185\u7684\u591a\u4e2a page \u5f15\u7528\uff0c\u5219\u63d0\u53d6\u5230\u8be5\u5206\u5305\u6839\u76ee\u5f55\u7684 sub-vendors \u6587\u4ef6\u4e2d\u3002")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",i({parentName:"p"},{src:"https://img13.360buyimg.com/imagetools/jfs/t1/205404/34/21044/222198/6256e36cE62a6c078/93671ab13f3df367.png",alt:"sub-venders"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5206\u5305\u6839\u76ee\u5f55/sub-common/","*",".(js|wxss)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5 module \u88ab\u591a\u4e2a\u5206\u5305\u5185\u7684 page \u5f15\u7528\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u88ab\u63d0\u53d6\u5230\u4e3b\u5305\u7684\u516c\u5171\u6a21\u5757\u4e2d\uff0c\u8fd9\u91cc\u4e3a\u4e86\u4fdd\u8bc1\u4e3b\u5305\u7684\u4f53\u79ef\u6700\u4f18\uff0c\u5219\u4f1a\u5148\u63d0\u53d6\u6210\u4e00\u4e2a\u516c\u5171\u6a21\u5757\uff0c\u7136\u540e\u5206\u522b\u590d\u5236\u5230\u5bf9\u5e94\u5206\u5305\u7684 sub-common \u6587\u4ef6\u5939\u4e0b",(0,r.kt)("strong",{parentName:"li"},"\uff08\u56e0\u4e3a\u5c0f\u7a0b\u5e8f\u65e0\u6cd5\u8de8\u5206\u5305\u5f15\u5165\u6587\u4ef6\uff0c\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u6bcf\u4e2a\u5206\u5305\u90fd\u590d\u5236\u4e00\u4efd\uff09"),"\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u603b\u5305\u7684\u4f53\u79ef\u53d8\u5927\u4e00\u4e9b\u3002")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",i({parentName:"p"},{src:"https://img12.360buyimg.com/imagetools/jfs/t1/136245/21/26437/256225/6256e36dE6a1c438f/43dfcf54cf443ca0.png",alt:"sub-common"}))))),(0,r.kt)("h3",i({},{id:"\u4f7f\u7528\u65b9\u6cd5"}),"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,"1 \u5c06 Taro \u5347\u7ea7\u5230 ",(0,r.kt)("strong",{parentName:"p"},"3.3.11")," \u53ca\u4ee5\u4e0a\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell",metastring:'title="\u5347\u7ea7\u7248\u672c"',title:'"\u5347\u7ea7\u7248\u672c"'}),"# \u4f7f\u7528Taro \u5347\u7ea7\u547d\u4ee4\u66f4\u65b0CLI\u7248\u672c\u5230\u6700\u65b0\u7248\u672c\n$ taro update self [\u7248\u672c\u53f7]\n# \u4f7f\u7528Taro \u5347\u7ea7\u547d\u4ee4\u66f4\u65b0CLI\u7248\u672c\u5230\u6307\u5b9a\u7248\u672c\n$ taro update self\n# \u4f7f\u7528Taro \u5347\u7ea7\u547d\u4ee4\u5c06\u9879\u76ee\u4f9d\u8d56\u5347\u7ea7\u5230\u4e0e@tarojs/cli\u4e00\u81f4\u7684\u7248\u672c\n$ taro update project\n# \u4f7f\u7528Taro \u5347\u7ea7\u547d\u4ee4\u5c06\u9879\u76ee\u4f9d\u8d56\u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c\n$ taro update project [\u7248\u672c\u53f7]\n")),(0,r.kt)("p",null,"2 \u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/next/config-detail#minioptimizemainpackage"}),"mini.optimizeMainPackage.enable")," \u4e3a true\uff0c\u5373\u53ef\u5f00\u542f\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="\u5f00\u542f\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56"',title:'"\u5f00\u542f\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56"'}),"// config/index.js\nconfig = {\n  // ...\n  mini: {\n    // ...\n    optimizeMainPackage: {\n      enable: true,\n    },\n  },\n}\n")),(0,r.kt)("p",null,"3 \u6392\u9664\u4e0d\u60f3\u62bd\u53d6\u7684 module\n\u5982\u679c\u4f9d\u8d56\u7684 module \u4e0d\u60f3\u8d70\u5206\u5305\u63d0\u53d6\u903b\u8f91\uff0c\u53ef\u4ee5\u914d\u7f6e exclude \u5c5e\u6027\uff0c\u652f\u6301\u5b57\u7b26\u4e32\uff08\u5b57\u7b26\u4e32\u9700\u5199\u6587\u4ef6\u5b8c\u6574\u7edd\u5bf9\u8def\u5f84\u540d\uff09\u548c\u51fd\u6570\u6570\u7ec4\uff0c\u5339\u914d\u5230\u7684 module \u4f9d\u65e7\u6309\u9ed8\u8ba4\u63d0\u53d6\u5230\u4e3b\u5305\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="\u5f00\u542f\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56"',title:'"\u5f00\u542f\u667a\u80fd\u63d0\u53d6\u5206\u5305\u4f9d\u8d56"'}),"// config/index.js\nconfig = {\n  // ...\n  mini: {\n    // ...\n    optimizeMainPackage: {\n      enable: true,\n      exclude: [\n        path.resolve(__dirname, '../src/utils/moduleName.js'),\n        (module) => module.resource?.indexOf('moduleName') >= 0,\n      ],\n    },\n  },\n}\n")),(0,r.kt)("p",null,"4.\u76ee\u524d\u53ea\u652f\u6301\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff0c\u9ed8\u8ba4\u652f\u6301 .wxss\u3001.json\u3001.js\u3001.wxml\u3001.wxs 5 \u79cd\u6587\u4ef6\u683c\u5f0f\u3002"),(0,r.kt)("h3",i({},{id:"\u6548\u679c\u5c55\u793a"}),"\u6548\u679c\u5c55\u793a"),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/NervJS/taro/tree/feat/webpack5/examples/mini-split-chunks-plugin"}),"Demo \u5de5\u7a0b")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash",metastring:'title="\u6e90\u6587\u4ef6\u5de5\u7a0b\u76ee\u5f55"',title:'"\u6e90\u6587\u4ef6\u5de5\u7a0b\u76ee\u5f55"'}),"src\n\u251c\u2500\u2500 app.config.js\n\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 app.scss\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 packageA // \u5206\u5305 A\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u2502   \u2514\u2500\u2500 index.scss // \u5206\u5305 A \u516c\u5171\u6837\u5f0f\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 cat\n\u2502       \u2502   \u251c\u2500\u2500 index.config.js\n\u2502       \u2502   \u251c\u2500\u2500 index.jsx // \u4f9d\u8d56 taro-ui \u548c\u5206\u5305\u516c\u5171\u6837\u5f0f\u6587\u4ef6\n\u2502       \u2502   \u2514\u2500\u2500 index.scss\n\u2502       \u2514\u2500\u2500 dog\n\u2502           \u251c\u2500\u2500 index.config.js\n\u2502           \u251c\u2500\u2500 index.jsx // \u4f9d\u8d56 miniprogram-sm-crypto\u3001 taro-ui \u548c\u5206\u5305\u516c\u5171\u6837\u5f0f\u6587\u4ef6\n\u2502           \u2514\u2500\u2500 index.scss\n\u251c\u2500\u2500 packageB // \u5206\u5305 B\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 apple\n\u2502       \u2502   \u251c\u2500\u2500 index.config.js\n\u2502       \u2502   \u251c\u2500\u2500 index.jsx // \u4f9d\u8d56 miniprogram-sm-crypto\n\u2502       \u2502   \u2514\u2500\u2500 index.scss\n\u2502       \u2514\u2500\u2500 banana\n\u2502           \u251c\u2500\u2500 index.config.js\n\u2502           \u251c\u2500\u2500 index.jsx\n\u2502           \u2514\u2500\u2500 index.scss\n\u2514\u2500\u2500 pages // \u4e3b\u5305\n    \u2514\u2500\u2500 index\n        \u251c\u2500\u2500 index.config.js\n        \u251c\u2500\u2500 index.jsx\n        \u2514\u2500\u2500 index.scss\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash",metastring:'title="\u8f93\u51fa\u5de5\u7a0b\u76ee\u5f55"',title:'"\u8f93\u51fa\u5de5\u7a0b\u76ee\u5f55"'}),"dist\n\u251c\u2500\u2500 app.js\n\u251c\u2500\u2500 app.js.LICENSE.txt\n\u251c\u2500\u2500 app.json\n\u251c\u2500\u2500 app.wxss\n\u251c\u2500\u2500 base.wxml\n\u251c\u2500\u2500 comp.js\n\u251c\u2500\u2500 comp.json\n\u251c\u2500\u2500 comp.wxml\n\u251c\u2500\u2500 custom-wrapper.js\n\u251c\u2500\u2500 custom-wrapper.json\n\u251c\u2500\u2500 custom-wrapper.wxml\n\u251c\u2500\u2500 packageA\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 cat\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.config.wxss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.wxml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.wxss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 dog\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.config.wxss\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.json\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.wxml\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.wxss\n\u2502\xa0\xa0 \u251c\u2500\u2500 sub-common\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 34299ff0bdffe7d50742f6fc2ed88f06.js // miniprogram-sm-crypto \u4f9d\u8d56\u6a21\u5757 jsbn \u6e90\u7801\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 a223b12dc801f51582835c16be379976.js // miniprogram-sm-crypto \u6e90\u7801\n\u2502\xa0\xa0 \u251c\u2500\u2500 sub-vendors.js // taro-ui AtButton\u7ec4\u4ef6\u6e90\u7801\n\u2502\xa0\xa0 \u251c\u2500\u2500 sub-vendors.js.LICENSE.txt\n\u2502\xa0\xa0 \u2514\u2500\u2500 sub-vendors.wxss // taro-ui AtButton\u7ec4\u4ef6\u6837\u5f0f\u53ca\u5206\u5305\u516c\u5171\u6837\u5f0f\u6e90\u7801\n\u251c\u2500\u2500 packageB\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 apple\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.config.wxss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.wxml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.wxss\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 banana\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.config.wxss\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.json\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 index.wxml\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.wxss\n\u2502\xa0\xa0 \u2514\u2500\u2500 sub-common\n\u2502\xa0\xa0     \u251c\u2500\u2500 34299ff0bdffe7d50742f6fc2ed88f06.js // miniprogram-sm-crypto \u4f9d\u8d56\u6a21\u5757 jsbn \u6e90\u7801\n\u2502\xa0\xa0     \u2514\u2500\u2500 a223b12dc801f51582835c16be379976.js // miniprogram-sm-crypto \u6e90\u7801\n\u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2514\u2500\u2500 index\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 index.wxml\n\u2502\xa0\xa0     \u2514\u2500\u2500 index.wxss\n\u251c\u2500\u2500 project.config.json\n\u251c\u2500\u2500 runtime.js\n\u251c\u2500\u2500 taro.js\n\u251c\u2500\u2500 taro.js.LICENSE.txt\n\u251c\u2500\u2500 utils.wxs\n\u251c\u2500\u2500 vendors.js // \u516c\u5171JS\u6587\u4ef6\n\u2514\u2500\u2500 vendors.js.LICENSE.txt\n")),(0,r.kt)("h3",i({},{id:"\u6ce8\u610f\u4e8b\u9879"}),"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u56e0\u4e3a sub-common \u4f1a\u5728\u6bcf\u4e2a\u5206\u5305\u76ee\u5f55\u4e0b\u5206\u522b\u590d\u5236\u4e00\u4efd\uff0c\u6240\u4ee5\u4f1a\u589e\u5927\u5c0f\u7a0b\u5e8f\u5305\u6574\u4f53\u5927\u5c0f\uff0c\u4f7f\u7528\u65f6\u9700\u6839\u636e\u5177\u4f53\u573a\u666f\u5177\u4f53\u5206\u6790\uff0c\u91c7\u7528\u9002\u5408\u81ea\u5df1\u7684\u6027\u80fd\u6700\u4f18\u65b9\u6848\u3002"))}m.isMDXComponent=!0}}]);