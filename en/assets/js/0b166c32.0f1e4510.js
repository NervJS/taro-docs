"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18794],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91264:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(93106),a=r(4706),o={tabItem:"tabItem_FBI3"};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l({children:e,hidden:t,className:r}){return n.createElement("div",i({role:"tabpanel",className:(0,a.Z)(o.tabItem,r)},{hidden:t}),e)}},8602:function(e,t,r){r.d(t,{Z:function(){return N}});var n=r(93106),a=r(4706),o=r(29369),i=r(27907),l=r(3111),u=r(65009),c=r(42615);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return function(e){var t,r;return null!==(r=null===(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const r=(0,i.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,l._X)(a),u=(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},r.location,{search:t.toString()}))}),[a,r]);return[o,u]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[i,l]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:r,groupId:a}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),v=(()=>{const e=null!=u?u:p;return d({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var v=r(81600),h={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function w({className:e,block:t,selectedValue:r,selectValue:i,tabValues:l}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),s=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[u.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>n.createElement("li",y({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:s},o,{className:(0,a.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function g({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},n.createElement(w,y({},e,t)),n.createElement(g,y({},e,t)))}function N(e){const t=(0,v.Z)();return n.createElement(k,y({key:String(t)},e))}},37524:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});r(93106);var n=r(79874),a=r(8602),o=r(91264);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={title:"SwiperItem",sidebar_label:"SwiperItem"},c=void 0,s={unversionedId:"components/viewContainer/swiper-item",id:"version-4.x/components/viewContainer/swiper-item",title:"SwiperItem",description:"It can be placed only in the swiper component, with the width and height each automatically set to 100%.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-4.x/components/viewContainer/swiper-item.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/swiper-item",permalink:"/taro-docs/en/docs/4.x/components/viewContainer/swiper-item",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/components/viewContainer/swiper-item.md",tags:[],version:"4.x",frontMatter:{title:"SwiperItem",sidebar_label:"SwiperItem"},sidebar:"components",previous:{title:"Swiper",permalink:"/taro-docs/en/docs/4.x/components/viewContainer/swiper"},next:{title:"View",permalink:"/taro-docs/en/docs/4.x/components/viewContainer/view"}},p={},m=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"SwiperItemProps",id:"swiperitemprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"API Support",id:"api-support",level:2},{value:"Note",id:"note",level:2}],d={toc:m},f="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(f,i({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It can be placed only in the swiper component, with the width and height each automatically set to 100%."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/swiper-item.html"}),"Reference"))),(0,n.kt)("h2",i({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SwiperItemProps>\n")),(0,n.kt)("h2",i({},{id:"examples"}),"Examples"),(0,n.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <Swiper\n        className='test-h'\n        indicatorColor='#999'\n        indicatorActiveColor='#333'\n        vertical\n        circular\n        indicatorDots\n        autoplay>\n        <SwiperItem>\n          <View className='demo-text-1'>1</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-2'>2</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-3'>3</View>\n        </SwiperItem>\n      </Swiper>\n    )\n  }\n}\n"))),(0,n.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-html"}),"<template>\n  <swiper\n    class='test-h'\n    indicator-color='#999'\n    indicator-active-color='#333'\n    :vertical=\"true\"\n    :circular=\"true\"\n    :indicator-dots=\"true\"\n    :autoplay=\"true\"\n  >\n    <swiper-item>\n      <view class='demo-text-1'>1</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-2'>2</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-3'>3</view>\n    </swiper-item>\n  </swiper>\n</template>\n")))),(0,n.kt)("h2",i({},{id:"swiperitemprops"}),"SwiperItemProps"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"itemId"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The identifier of the swiper-item ")))),(0,n.kt)("h3",i({},{id:"property-support"}),"Property Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"SwiperItemProps.itemId"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,n.kt)("h2",i({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"SwiperItem"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",i({},{id:"note"}),"Note"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do not set the ",(0,n.kt)("strong",{parentName:"li"},"style")," attribute for ",(0,n.kt)("inlineCode",{parentName:"li"},"SwiperItem"),", you can set the style via class. ",(0,n.kt)("a",i({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7147"}),"7147"))))}b.isMDXComponent=!0}}]);