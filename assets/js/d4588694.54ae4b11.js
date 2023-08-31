"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16739],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34493:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",authors:"yuche",tags:["v1"]},l=void 0,u={permalink:"/taro-docs/blog/2019-06-13-taro-1-3",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2019-06-13-taro-1-3.md",source:"@site/blog/2019-06-13-taro-1-3.md",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",description:"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002",date:"2019-06-13T00:00:00.000Z",formattedDate:"2019\u5e746\u670813\u65e5",tags:[{label:"v1",permalink:"/taro-docs/blog/tags/v-1"}],readingTime:13.49,hasTruncateMarker:!0,authors:[{name:"yuche",title:"Taro \u8363\u8a89\u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/yuche",imageURL:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",key:"yuche"}],frontMatter:{slug:"2019-06-13-taro-1-3",title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",authors:"yuche",tags:["v1"]},prevItem:{title:"Taro \u300c\u7269\u6599\u5e02\u573a\u300d\u53ca\u300c\u4ea4\u6d41\u793e\u533a\u300d \u60ca\u559c\u4e0a\u7ebf",permalink:"/taro-docs/blog/2019-06-21-taro-ext-club"},nextItem:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",permalink:"/taro-docs/blog/2019-03-12-mini-program-framework-full-review"}},i={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 Taro 1.2 \u53d1\u5e03\u4e4b\u540e\uff0cTaro \u5728\u4e1a\u754c\u6536\u83b7\u4e86\u5de8\u5927\u7684\u8d5e\u8a89\u548c\u5173\u6ce8\uff1aGitHub \u4e0a Star \u6570\u91cf\u8d85\u8fc7 19000 \u7c92\uff0cNPM \u4e0b\u8f7d\u91cf\u4e5f\u7a33\u5c45\u540c\u7c7b\u5f00\u53d1\u6846\u67b6\u4e4b\u9996\uff0c\u540c\u65f6 Taro \u56e2\u961f\u4e5f\u548c\u817e\u8baf\u3001\u767e\u5ea6\u3001\u534e\u4e3a\u7b49\u6570\u5341\u5bb6\u4e1a\u754c\u5de8\u5934\u7684\u7814\u53d1\u56e2\u961f\u5c55\u5f00\u4e86\u6df1\u5165\u548c\u6709\u6548\u7684\u5408\u4f5c\u3002"),(0,n.kt)("p",null,"Taro 1.3 \u662f\u6211\u4eec\u915d\u917f\u6700\u4e45\u7684\u7248\u672c\uff1a\u7ecf\u5386\u4e86\u6a2a\u8de8 6 \u4e2a\u6708\u7684\u5f00\u53d1\u65f6\u95f4\uff0c\u8fd1 2000 \u6b21\u7684\u4ee3\u7801\u63d0\u4ea4\uff0c\u8fd1\u767e\u4f4d\u5f00\u53d1\u8005\u7684\u5171\u540c\u53c2\u4e0e\u3002\u6211\u4eec\u7ec8\u4e8e\u5728\u4eca\u5929\u9a84\u50b2\u5730\u53d1\u5e03\u4e86 Taro 1.3\u3002"),(0,n.kt)("p",null,"Taro 1.3 \u7684\u7279\u6027\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u5feb\u5e94\u7528\u548c QQ \u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1"),(0,n.kt)("li",{parentName:"ul"},"\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c React Hooks"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u5e45\u63d0\u9ad8 H5 \u6027\u80fd\u548c\u53ef\u7528\u6027"),(0,n.kt)("li",{parentName:"ul"},"Taro Doctor")))}f.isMDXComponent=!0}}]);