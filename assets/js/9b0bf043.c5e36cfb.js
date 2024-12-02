"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26319],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(93106);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55256:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(93106),r=t(4706),l={tabItem:"tabItem_NDii"};function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function p({children:e,hidden:n,className:t}){return a.createElement("div",s({role:"tabpanel",className:(0,r.Z)(l.tabItem,t)},{hidden:n}),e)}},51417:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(93106),r=t(4706),l=t(76075),s=t(27907),p=t(48505),o=t(29136),i=t(6099);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){return function(e){var n,t;return null!==(t=null===(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}(e).map((({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a})))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:u(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function k({queryString:e=!1,groupId:n}){const t=(0,s.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),l=(0,p._X)(r),o=(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){c(e,n,t[n])}))}return e}({},t.location,{search:n.toString()}))}),[r,t]);return[l,o]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=d(e),[s,p]=(0,a.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const a=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,c]=k({queryString:t,groupId:r}),[u,f]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,i.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),g=(()=>{const e=null!=o?o:u;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&p(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var g=t(27614),N={tabList:"tabList_Bmzj",tabItem:"tabItem_buHS"};function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function b({className:e,block:n,selectedValue:t,selectValue:s,tabValues:p}){const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),r=p[a].value;r!==t&&(i(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;var t;n=null!==(t=o[a])&&void 0!==t?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;var a;n=null!==(a=o[t])&&void 0!==a?a:o[o.length-1];break}}null==n||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},p.map((({value:e,label:n,attributes:l})=>a.createElement("li",v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>o.push(e),onKeyDown:u,onClick:c},l,{className:(0,r.Z)("tabs__item",N.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function h({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function y(e){const n=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",N.tabList)},a.createElement(b,v({},e,n)),a.createElement(h,v({},e,n)))}function C(e){const n=(0,g.Z)();return a.createElement(y,v({key:String(n)},e))}},57488:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});t(93106);var a=t(79874),r=t(55256),l=t(51417);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const o={title:"\u4f7f\u7528 CSS-in-JS"},i=void 0,c={unversionedId:"css-in-js",id:"version-3.x/css-in-js",title:"\u4f7f\u7528 CSS-in-JS",description:"linaria",source:"@site/versioned_docs/version-3.x/css-in-js.mdx",sourceDirName:".",slug:"/css-in-js",permalink:"/taro-docs/docs/3.x/css-in-js",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/css-in-js.mdx",tags:[],version:"3.x",frontMatter:{title:"\u4f7f\u7528 CSS-in-JS"},sidebar:"docs",previous:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro-docs/docs/3.x/css-modules"},next:{title:"\u4f7f\u7528 Tailwind CSS",permalink:"/taro-docs/docs/3.x/tailwindcss"}},u={},d=[{value:"linaria",id:"linaria",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3},{value:"Panda",id:"panda",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:3},{value:"pandacss \u5b89\u88c5\u548c\u914d\u7f6e",id:"pandacss-\u5b89\u88c5\u548c\u914d\u7f6e",level:4},{value:"0. \u5b89\u88c5\u548c\u521d\u59cb\u5316 pandacss",id:"0-\u5b89\u88c5\u548c\u521d\u59cb\u5316-pandacss",level:5},{value:"1. \u914d\u7f6e postcss",id:"1-\u914d\u7f6e-postcss",level:5},{value:"2. \u68c0\u67e5\u4f60\u7684 panda.config.ts",id:"2-\u68c0\u67e5\u4f60\u7684-pandaconfigts",level:5},{value:"3. \u4fee\u6539 package.json \u811a\u672c",id:"3-\u4fee\u6539-packagejson-\u811a\u672c",level:5},{value:"4. \u5168\u5c40 css \u6ce8\u518c pandacss",id:"4-\u5168\u5c40-css-\u6ce8\u518c-pandacss",level:5},{value:"5. \u914d\u7f6e\u7684\u4f18\u5316\u4e0e\u522b\u540d",id:"5-\u914d\u7f6e\u7684\u4f18\u5316\u4e0e\u522b\u540d",level:5},{value:"weapp-pandacss \u914d\u7f6e",id:"weapp-pandacss-\u914d\u7f6e",level:4},{value:"0. \u56de\u5230 postcss \u8fdb\u884c\u6ce8\u518c",id:"0-\u56de\u5230-postcss-\u8fdb\u884c\u6ce8\u518c",level:5},{value:"1. \u56de\u5230 package.json \u6dfb\u52a0\u751f\u6210\u811a\u672c",id:"1-\u56de\u5230-packagejson-\u6dfb\u52a0\u751f\u6210\u811a\u672c",level:5},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898-1",level:3},{value:"\u8de8\u5e73\u53f0\u6ce8\u610f\u4e8b\u9879",id:"\u8de8\u5e73\u53f0\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u5c0f\u7a0b\u5e8f\u9884\u89c8\u4e8b\u9879",id:"\u5c0f\u7a0b\u5e8f\u9884\u89c8\u4e8b\u9879",level:4},{value:"\u9ad8\u7ea7\u914d\u7f6e\u6587\u4ef6",id:"\u9ad8\u7ea7\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u53c2\u8003\u793a\u4f8b",id:"\u53c2\u8003\u793a\u4f8b",level:3},{value:"Fower",id:"fower",level:2}],m={toc:d},k="wrapper";function f(e){var{components:n}=e,t=p(e,["components"]);return(0,a.kt)(k,s({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",s({},{id:"linaria"}),"linaria"),(0,a.kt)("p",null,"\u5728 React \u793e\u533a\u6709\u4e00\u4e2a\u8457\u540d\u7684 CSS-in-JS \u89e3\u51b3\u65b9\u6848: ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/styled-components/styled-components"}),"styled-components"),"\u3002\u4f46\u9057\u61be\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"styled-components")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," \u6807\u7b7e\u6765\u52a8\u6001\u5730\u63a7\u5236\u6837\u5f0f\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u7c7b\u4f3c\u7684\u65b9\u6848\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/callstack/linaria"}),"linaria")," \u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"linaria")," \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd1\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"styled-components")," \u7684 API"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u7684 TypeScript \u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u96f6\u8fd0\u884c\u65f6")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"linaria")," \u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u9996\u5148\u901a\u8fc7 NPM \u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"$ pnpm i @linaria/core @linaria/react @linaria/babel-preset @linaria/webpack-loader\n")),(0,a.kt)("p",null,"\u5176\u6b21\u914d\u7f6e\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: [\n    [\n      'taro',\n      {\n        framework: 'react',\n        ts: true,\n      },\n    ],\n    '@linaria', // \u6dfb\u52a0\u5230 babel-preset\n  ],\n}\n")),(0,a.kt)("p",null,"\u4e4b\u540e\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"config/index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader \u9009\u9879\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('@linaria/webpack-loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    },\n  },\n  h5: {\n    webpackChain(chain, webpack) {\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('@linaria/webpack-loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    },\n  },\n}\n")),(0,a.kt)("p",null,"\u6700\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"linaria.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'title="linaria.config.js"',title:'"linaria.config.js"'}),"// linaria \u914d\u7f6e\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options\nmodule.exports = {\n  rules: [\n    {\n      action: require('@linaria/shaker').default,\n    },\n    {\n      test: /node_modules[\\/\\\\](?!@tarojs)/,\n      action: 'ignore',\n    },\n  ],\n}\n")),(0,a.kt)("p",null,"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,a.kt)(l.Z,{defaultValue:"JS",values:[{label:"JavaScript",value:"JS"},{label:"TypeScript",value:"TS"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx"}),"import { styled } from '@linaria/react'\nimport { View } from '@tarojs/components'\nimport React from 'react'\n\nconst Title = styled(View)`\n  color: ${(props) => props.color};\n`\n\nconst Index = () => {\n  return <Title color=\"red\">Hello World!</Title>\n}\n\nexport default Index\n"))),(0,a.kt)(r.Z,{value:"TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-tsx"}),"import { styled } from '@linaria/react'\nimport { View, ViewProps } from '@tarojs/components'\n\nimport React from 'react'\nimport './index.scss'\n\ndeclare type Component<TProps> =\n  | ((props: TProps) => any)\n  | {\n      new (props: TProps): any\n    }\n\ntype VPS = ViewProps & { style?: React.CSSProperties }\ntype TP = VPS & { color: string }\nconst Title = styled<TP, VPS, Component<TP>>(View)`\n  color: ${(props) => props.color};\n`\nconst Index: React.FC = () => {\n  return <Title color=\"red\">Hello World!</Title>\n}\n\nexport default Index\n")))),(0,a.kt)("h3",s({},{id:"\u5e38\u89c1\u95ee\u9898"}),"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Linaria \u8bbe\u7f6e\u7ec4\u4ef6\u6837\u5f0f\u540e\uff0c\u8be5\u7ec4\u4ef6\u4e0a\u7684\u5c5e\u6027\u4e0d\u751f\u6548\uff0c",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/11664"}),"#11664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"styled(View)")," \u5199\u6cd5\u4f1a\u4ea7\u751f\u7c7b\u578b\u9519\u8bef\uff0c",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/8883"}),"#8883")),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u76f4\u64ad\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"live-player-plugin")," \u5171\u7528\u65f6\u62a5\u9519\uff0c",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7389"}),"#7389"))),(0,a.kt)("h2",s({},{id:"panda"}),"Panda"),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"https://panda-css.com/"}),(0,a.kt)("inlineCode",{parentName:"a"},"pandacss"))," \u662f\u4e2a\u65b0\u5174\u7684\u4f18\u79c0 ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS")," \u7f16\u8bd1\u65f6\u6846\u67b6\uff0c\u76f8\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"linaria"),"\uff0c\u5b83\u7684\u914d\u7f6e\u66f4\u52a0\u7b80\u5355\uff0c\u667a\u80fd\u63d0\u793a\u597d\uff0c\u5f00\u53d1\u8005\u4f53\u9a8c\u4e5f\u66f4\u597d\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\u5b83\u4e5f\u5438\u6536\u4e86\u8bb8\u591a ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwindcss")," \u7684\u4f18\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u7684\u914d\u7f6e\u6211\u4eec\u7684\u4e3b\u9898\u4e0e\u6837\u5f0f\uff0c\u4e14\u539f\u5b50\u5316\u7684\u7c7b\u540d\u4e5f\u66f4\u5bb9\u6613\u8fdb\u884c\u81ea\u7531\u7ec4\u5408\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/sonofmagic/weapp-pandacss"}),(0,a.kt)("inlineCode",{parentName:"a"},"weapp-pandacss"))," \u5c31\u662f\u8ba9\u4f60\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("h3",s({},{id:"\u5feb\u901f\u5f00\u59cb"}),"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h4",s({},{id:"pandacss-\u5b89\u88c5\u548c\u914d\u7f6e"}),"pandacss \u5b89\u88c5\u548c\u914d\u7f6e"),(0,a.kt)("h5",s({},{id:"0-\u5b89\u88c5\u548c\u521d\u59cb\u5316-pandacss"}),"0. \u5b89\u88c5\u548c\u521d\u59cb\u5316 pandacss"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"@pandacss/dev")," \u8fd9\u4e9b\u90fd\u5b89\u88c5\u548c\u914d\u7f6e\u597d\uff0c\u8fd9\u91cc\u6211\u4eec\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"tarojs")," \u9879\u76ee\u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm install -D @pandacss/dev weapp-pandacss postcss # \u6216\u8005 yarn / pnpm\nnpx panda init\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"panda.config.ts")," \u548c\u4e00\u4e2a\u5305\u542b\u5927\u91cf\u6587\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-system"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"panda.config.ts")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss")," \u7684\u914d\u7f6e\u6587\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"styled-system")," \u6587\u4ef6\u5939\u91cc\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss")," \u7684\u8fd0\u884c\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u3002")),(0,a.kt)("p",null,"\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-system")," \u52a0\u5165\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," \u4e2d\u53bb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"}),"# .gitignore\n+ styled-system\n")),(0,a.kt)("h5",s({},{id:"1-\u914d\u7f6e-postcss"}),"1. \u914d\u7f6e postcss"),(0,a.kt)("p",null,"\u63a5\u7740\u5728\u6839\u76ee\u5f55\u91cc\uff0c\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss.config.cjs")," \u6587\u4ef6\uff0c\u5199\u5165\u4ee5\u4e0b\u4ee3\u7801\u6ce8\u518c ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugins: {\n    '@pandacss/dev/postcss': {}\n  }\n}\n")),(0,a.kt)("h5",s({},{id:"2-\u68c0\u67e5\u4f60\u7684-pandaconfigts"}),"2. \u68c0\u67e5\u4f60\u7684 panda.config.ts"),(0,a.kt)("p",null,"\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u5927\u6982\u957f\u4e0b\u9762\u8fd9\u6837\uff0c\u5c24\u5176\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," \u662f\u7528\u6765\u544a\u8bc9 ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss")," \u4ece\u54ea\u4e9b\u6587\u4ef6\u4e2d\u63d0\u53d6\u539f\u5b50\u7c7b\u7684\uff0c\u6240\u4ee5\u8fd9\u4e2a\u914d\u7f6e\u4e00\u5b9a\u8981\u51c6\u786e"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),'import { defineConfig } from "@pandacss/dev"\n\nexport default defineConfig({\n  // \u5c0f\u7a0b\u5e8f\u4e0d\u9700\u8981\n  preflight: process.env.TARO_ENV === \'h5\',\n  // \u26a0\ufe0f\u8fd9\u91cc\uff0c\u5047\u5982\u4f60\u4f7f\u7528 vue\uff0c\u8bb0\u5f97\u628a vue \u6587\u4ef6\u683c\u5f0f\u5305\u62ec\u8fdb\u6765\uff01\uff01\uff01\n  include: ["./src/**/*.{js,jsx,ts,tsx}"],\n  exclude: [],\n  theme: {\n    extend: {}\n  },\n  outdir: "styled-system",\n})\n')),(0,a.kt)("h5",s({},{id:"3-\u4fee\u6539-packagejson-\u811a\u672c"}),"3. \u4fee\u6539 package.json \u811a\u672c"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u6dfb\u52a0\u4e0b\u65b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," \u811a\u672c\u5728\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," \u5757\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"}),'{\n  "scripts": {\n+    "prepare": "panda codegen",\n  }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u6bcf\u6b21\u91cd\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i/yarn/pnpm i")," \u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u6267\u884c\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u91cd\u65b0\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-system"),"\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run prepare")," \u76f4\u63a5\u6267\u884c\u8fd9\u4e2a\u811a\u672c\u3002"),(0,a.kt)("h5",s({},{id:"4-\u5168\u5c40-css-\u6ce8\u518c-pandacss"}),"4. \u5168\u5c40 css \u6ce8\u518c pandacss"),(0,a.kt)("p",null,"\u7136\u540e\u5728\u6211\u4eec\u7684\u5168\u5c40\u6837\u5f0f\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app.scss")," \u4e2d\u6ce8\u518c ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-css"}),"@layer reset, base, tokens, recipes, utilities;\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u597d\u4e86\u4e4b\u540e\uff0c\u6b64\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"h5")," \u5e73\u53f0\u5df2\u7ecf\u751f\u6548\u4e86\uff0c\u4f60\u53ef\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev:h5")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"h5")," \u5e73\u53f0\u521d\u6b65\u4f7f\u7528\u4e86\uff0c\u4f46\u662f\u4e3a\u4e86\u5f00\u53d1\u4f53\u9a8c\uff0c\u6211\u4eec\u8fd8\u6709\u4e00\u4e9b\u4f18\u5316\u9879\u8981\u505a\u3002"),(0,a.kt)("h5",s({},{id:"5-\u914d\u7f6e\u7684\u4f18\u5316\u4e0e\u522b\u540d"}),"5. \u914d\u7f6e\u7684\u4f18\u5316\u4e0e\u522b\u540d"),(0,a.kt)("p",null,"\u6765\u5230\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6dfb\u52a0:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"}),'{\n  "compilerOptions": {\n    "paths": {\n      "@/*": [\n        "src/*"\n      ],\n+      "styled-system/*": [\n+        "styled-system/*"\n+      ]\n    }\n  },\n  "include": [\n    "./src",\n    "./types",\n    "./config",\n+    "styled-system"\n  ],\n}\n')),(0,a.kt)("p",null,"\u63a5\u7740\u6765\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"config/index.ts")," \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"alias"),"(",(0,a.kt)("a",s({parentName:"p"},{href:"./config-detail#alias"}),"\u53c2\u8003\u94fe\u63a5"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"import path from 'path'\n\n{\n  alias: {\n    'styled-system': path.resolve(__dirname, '..', 'styled-system')\n  },\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u4e0d\u9700\u8981\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u6765\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss")," \u4e86\uff0c\u540c\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts")," \u667a\u80fd\u63d0\u793a\u4e5f\u6709\u4e86\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\u5b83:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),'import { View, Text } from "@tarojs/components";\nimport { css } from "styled-system/css";\n\nconst styles = css({\n  bg: "yellow.200",\n  rounded: "9999px",\n  fontSize: "90px",\n  p: "10px 15px",\n  color: "pink.500",\n});\n\nexport default function Index() {\n  return (\n    <View className={styles}>\n      <Text>Hello world!</Text>\n    </View>\n  );\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u90e8\u5206\u53c2\u8003\u7684\u5b98\u65b9\u94fe\u63a5 ",(0,a.kt)("a",s({parentName:"p"},{href:"https://panda-css.com/docs/installation/postcss"}),"https://panda-css.com/docs/installation/postcss"))),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-pandacss")," \u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u4e0d\u7528\u62c5\u5fc3\uff0c\u76f8\u6bd4\u524d\u9762\u90a3\u4e9b\u7e41\u7410\u7684\u6b65\u9aa4\uff0c\u8fd9\u4e2a\u53ef\u7b80\u5355\u591a\u4e86\u3002"),(0,a.kt)("h4",s({},{id:"weapp-pandacss-\u914d\u7f6e"}),"weapp-pandacss \u914d\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bb0\u5f97\u5b89\u88c5\u597d ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-pandacss")," !")),(0,a.kt)("h5",s({},{id:"0-\u56de\u5230-postcss-\u8fdb\u884c\u6ce8\u518c"}),"0. \u56de\u5230 postcss \u8fdb\u884c\u6ce8\u518c"),(0,a.kt)("p",null,"\u56de\u5230\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss.config.cjs")," \u6ce8\u518c ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-pandacss"),"\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"}),"module.exports = {\n  plugins: {\n    '@pandacss/dev/postcss': {},\n+   'weapp-pandacss/postcss': {}\n  }\n}\n")),(0,a.kt)("h5",s({},{id:"1-\u56de\u5230-packagejson-\u6dfb\u52a0\u751f\u6210\u811a\u672c"}),"1. \u56de\u5230 package.json \u6dfb\u52a0\u751f\u6210\u811a\u672c"),(0,a.kt)("p",null,"\u7136\u540e\u53bb ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4f60\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," \u811a\u672c\u7684\u5730\u65b9\uff0c\u52a0\u70b9\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"}),'{\n  "scripts": {\n-    "prepare": "panda codegen",\n+    "prepare": "panda codegen && weapp-panda codegen",\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u5fc5\u987b\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," \u800c\u4e0d\u80fd\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"&")," \u4efb\u52a1\u6267\u884c\u4f1a\u5e76\u884c\u4e0d\u4f1a\u7b49\u5f85\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," \u4f1a\u7b49\u5f85\u524d\u4e00\u4e2a\u6267\u884c\u5b8c\u6210\u518d\u6267\u884c\u540e\u4e00\u6761\u547d\u4ee4")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u518d\u624b\u52a8\u6267\u884c\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"npm run prepare\n")),(0,a.kt)("p",null,"\u6765\u91cd\u65b0\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-system"),", \u6b64\u65f6\u4f60\u4f1a\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"pandacss")," \u7684\u547d\u4ee4\u884c\u8f93\u51fa\u4e2d\u591a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," \u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-diff"}),"\u2714\ufe0f `src/styled-system/css`: the css function to author styles\n\u2714\ufe0f `src/styled-system/tokens`: the css variables and js function to query your tokens\n\u2714\ufe0f `src/styled-system/patterns`: functions to implement apply common layout patterns\n\u2714\ufe0f `src/styled-system/jsx`: styled jsx elements for react\n+ \u2714\ufe0f `src/styled-system/weapp-panda`: the core escape function for weapp\n+ \u2714\ufe0f `src/styled-system/helpers.mjs`: inject escape function into helpers\n")),(0,a.kt)("p",null,"\u8fd9\u4ee3\u8868\u7740\u5c0f\u7a0b\u5e8f\u76f8\u5173\u7684\u8f6c\u4e49\u903b\u8f91\u5df2\u7ecf\u88ab\u6ce8\u5165\u8fdb\u53bb\uff0c\u6b64\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"panda css")," \u751f\u6210\u7684\u7c7b\u5c31\u517c\u5bb9\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5566\uff0c\u662f\u4e0d\u662f\u5f88\u7b80\u5355?"),(0,a.kt)("p",null,"\u5f53\u7136\u4e3a\u4e86\u9632\u6b62\u4f60\u914d\u7f6e\u5931\u8d25\uff0c\u6211\u4e5f\u7ed9\u51fa\u4e86\u53c2\u8003\u9879\u76ee: ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/sonofmagic/taro-react-pandacss-template"}),"taro-react-pandacss-template")," \u65b9\u4fbf\u8fdb\u884c\u6392\u67e5\u7ea0\u9519\u3002"),(0,a.kt)("h3",s({},{id:"\u5e38\u89c1\u95ee\u9898-1"}),"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h4",s({},{id:"\u8de8\u5e73\u53f0\u6ce8\u610f\u4e8b\u9879"}),"\u8de8\u5e73\u53f0\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u540c\u65f6\u5f00\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5c0f\u7a0b\u5e8f")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"h5")," \u5e73\u53f0\uff0c\u4f46\u662f\u4f60\u53d1\u73b0\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-pandacss")," \u4e4b\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"h5")," \u5e73\u53f0\u4f3c\u4e4e\u5c31\u4e0d\u884c\u4e86\uff1f"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u4f60\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"process.env.TARO_ENV === 'h5'")," \u7684\u65f6\u5019\uff0c\u4e0d\u53bb\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-pandacss/postcss")," (\u6839\u636e\u73af\u5883\u53d8\u91cf\u52a8\u6001\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss")," \u63d2\u4ef6)"),(0,a.kt)("p",null,"\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-panda rollback")," \u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," \u65b9\u6cd5\u8fdb\u884c\u56de\u6eda\u5230\u6700\u539f\u59cb\u9002\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"h5")," \u5e73\u53f0\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\u4f60\u6062\u590d\u5230\u5c0f\u7a0b\u5e8f\u7248\u672c\u4e5f\u53ea\u9700\u8981\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-panda codegen")," \u5c31\u4f1a\u91cd\u65b0\u6ce8\u5165\u4e86\u3002"),(0,a.kt)("h4",s({},{id:"\u5c0f\u7a0b\u5e8f\u9884\u89c8\u4e8b\u9879"}),"\u5c0f\u7a0b\u5e8f\u9884\u89c8\u4e8b\u9879"),(0,a.kt)("p",null,"\u5f53\u5c0f\u7a0b\u5e8f\u9884\u89c8\u65f6\u4f1a\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: \u975e\u6cd5\u7684\u6587\u4ef6\uff0c\u9519\u8bef\u4fe1\u606f\uff1ainvalid file: pages/index/index.js, 565:24, SyntaxError: Unexpected token . if (variants[key]?.[value])")," \u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"panda")," \u751f\u6210\u7684\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"cva.mjs")," \u4f7f\u7528\u4e86 ",(0,a.kt)("a",s({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}),(0,a.kt)("inlineCode",{parentName:"a"},"Optional chaining (?.)")),"\u8bed\u6cd5\uff0c\u8fd9\u4e2a\u8bed\u6cd5\u5c0f\u7a0b\u5e8f\u539f\u751f\u4e0d\u652f\u6301\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u5f00\u542f\u52fe\u9009 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5c06JS\u7f16\u8bd1\u6210ES5")," \u529f\u80fd\u518d\u8fdb\u884c\u9884\u89c8\uff0c\u6216\u8005\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel")," \u9884\u5148\u8fdb\u884c\u5904\u7406\u518d\u4e0a\u4f20\u9884\u89c8\u3002"),(0,a.kt)("h3",s({},{id:"\u9ad8\u7ea7\u914d\u7f6e\u6587\u4ef6"}),"\u9ad8\u7ea7\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx weapp-panda init")," \u547d\u4ee4\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"weapp-pandacss.config.ts")," \u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u7528\u6765\u63a7\u5236\u8f6c\u4e49\u4ee3\u7801\u7684\u751f\u6210\u548c\u4e00\u90e8\u5206 ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss")," \u63d2\u4ef6\u7684\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"import { defineConfig } from 'weapp-pandacss'\n\nexport default defineConfig({\n  postcss: {\n    // \u8f6c\u4e49\u63d2\u4ef6\u662f\u5426\u751f\u6548\uff0c\u8fd9\u53ea\u80fd\u63a7\u5236\u6838\u5fc3\u63d2\u4ef6\u7684\u751f\u6548\u60c5\u51b5,\u800c\u6838\u5fc3\u63d2\u4ef6\u53ea\u662f\u4e00\u90e8\u5206\n    // \u5047\u5982\u4f60\u60f3\u8ba9\u6574\u4e2a\u63d2\u4ef6\u771f\u6b63\u4e0d\u751f\u6548\uff0c\u8bf7\u5728 `postcss.config.cjs` \u91cc\u8fdb\u884c\u52a8\u6001\u52a0\u8f7d\u5224\u65ad\n    disabled: false,\n    // \u6570\u7ec4merge\u9ed8\u8ba4\u884c\u4e3a\u662f\u76f4\u63a5concat \u5408\u5e76\uff0c\u6240\u4ee5\u4f20\u4e00\u4e2a\u7a7a\u6570\u7ec4\u662f\u4f7f\u7528\u7684\u9ed8\u8ba4\u6570\u7ec4\n    // \u8f6c\u4e49\u66ff\u6362\u5bf9\u8c61\n    selectorReplacement: {\n      root: [],\n      universal: [],\n      cascadeLayers: 'a'\n    },\n    removeNegationPseudoClass: true\n  },\n  // \u751f\u6210\u4e0a\u4e0b\u6587\n  context: {\n    // \u8f6c\u4e49\u6ce8\u5165\u5224\u65ad\u6761\u4ef6\uff0c\u66f4\u6539\u540e\u9700\u8981\u91cd\u65b0\u751f\u6210\u4ee3\u7801\n    escapePredicate: `process.env.TARO_ENV !== 'h5' && process.env.TARO_ENV !== 'rn'`,\n    // \u63d2\u4ef6\u7684 pandaConfig \u5bfb\u627e\u914d\u7f6e\n    pandaConfig: {\n      cwd: process.cwd(),\n      file: 'path/to/your-panda-config-file'\n    }\n  }\n})\n")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u66f4\u6539\u76f8\u5173\u7684\u914d\u7f6e\u9879\u4e4b\u540e\uff0c\u8981\u91cd\u65b0\u6267\u884c\u4e00\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run prepare")," \u6765\u751f\u6210\u65b0\u7684\u6ce8\u5165\u8f6c\u4e49\u4ee3\u7801\u3002"),(0,a.kt)("h3",s({},{id:"\u53c2\u8003\u793a\u4f8b"}),"\u53c2\u8003\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/sonofmagic/taro-react-pandacss-template"}),"taro-react-pandacss-template")),(0,a.kt)("h2",s({},{id:"fower"}),"Fower"),(0,a.kt)("p",null,"\u793e\u533a\u8fd8\u6709\u53e6\u4e00\u4e2a\u65b9\u6848 ",(0,a.kt)("strong",{parentName:"p"},"Fower"),"\uff0c",(0,a.kt)("a",s({parentName:"p"},{href:"https://fower.vercel.app/docs/use-with-taro"}),"\u6587\u6863")))}f.isMDXComponent=!0}}]);