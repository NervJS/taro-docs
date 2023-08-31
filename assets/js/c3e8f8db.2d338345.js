"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[43803],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||s[u]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95113:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(93106),r=n(4706),l="tabItem_xXVp";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function c({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},78288:function(e,t,n){n.d(t,{Z:function(){return P}});var a=n(93106),r=n(4706),l=n(45388),i=n(24755),c=n(89476),o=n(26779),p=n(57191);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){var t,n;return null!==(n=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a})))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:s(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u({value:e,tabValues:t}){return t.some((t=>t.value===e))}function k({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,c._X)(r),o=(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){m(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[r,n]);return[l,o]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,c]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const a=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,m]=k({queryString:n,groupId:r}),[s,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,p.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),h=(()=>{const e=null!=o?o:s;return u({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),g(e)}),[m,g,l]),tabValues:l}}var h=n(87650),v="tabList_ulmA",N="tabItem_Zt3y";function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function b({className:e,block:t,selectedValue:n,selectValue:i,tabValues:c}){const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=o.indexOf(t),r=c[a].value;r!==n&&(p(t),i(r))},s=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;var n;t=null!==(n=o[a])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;var a;t=null!==(a=o[n])&&void 0!==a?a:o[o.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},c.map((({value:e,label:t,attributes:l})=>a.createElement("li",f({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>o.push(e),onKeyDown:s,onClick:m},l,{className:(0,r.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:n}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",v)},a.createElement(b,f({},e,t)),a.createElement(y,f({},e,t)))}function P(e){const t=(0,h.Z)();return a.createElement(w,f({key:String(t)},e))}},2071:function(e,t,n){n.d(t,{gQ:function(){return i},hn:function(){return r},p6:function(){return l}});var a=n(93106);const r=()=>a.createElement("span",{className:"footer_link_connect_wrap"},a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.createElement("span",{className:"wechat_qrcode_icon"},a.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),a.createElement("span",{className:"footer_link_wechat_img inline"},a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function l({version:e=""}){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:"#4fc08d"}},"Vue",e?` ${e}`:""))}function i(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},49156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});n(93106);var a=n(79874),r=n(2071),l=n(78288),i=n(95113);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"PickerView",sidebar_label:"PickerView"},m=void 0,s={unversionedId:"components/forms/picker-view",id:"version-3.x/components/forms/picker-view",title:"PickerView",description:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",source:"@site/versioned_docs/version-3.x/components/forms/picker-view.md",sourceDirName:"components/forms",slug:"/components/forms/picker-view",permalink:"/taro-docs/docs/components/forms/picker-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/picker-view.md",tags:[],version:"3.x",frontMatter:{title:"PickerView",sidebar_label:"PickerView"},sidebar:"components",previous:{title:"Picker",permalink:"/taro-docs/docs/components/forms/picker"},next:{title:"PickerViewColumn",permalink:"/taro-docs/docs/components/forms/picker-view-column"}},d={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"PickerViewProps",id:"pickerviewprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3}],k={toc:u};function g(e){var{components:t}=e,p=o(e,["components"]);return(0,a.kt)("wrapper",c({},k,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668\n\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e picker-view-column \u7ec4\u4ef6\uff0c\u5176\u5b83\u8282\u70b9\u4e0d\u4f1a\u663e\u793a"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(55899).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(68525).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:n(58939).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(30174).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:n(92207).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",c({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",c({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"ComponentType<PickerViewProps>\n")),(0,a.kt)("h2",c({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(r.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(r.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"export default class Picks extends Component {\n\n  constructor () {\n    super(...arguments)\n    const date = new Date()\n    const years = []\n    const months = []\n    const days = []\n    for (let i = 1990; i <= date.getFullYear(); i++) {\n      years.push(i)\n    }\n    for (let i = 1; i <= 12; i++) {\n      months.push(i)\n    }\n    for (let i = 1; i <= 31; i++) {\n      days.push(i)\n    }\n    this.state = {\n      years: years,\n      year: date.getFullYear(),\n      months: months,\n      month: 2,\n      days: days,\n      day: 2,\n      value: [9999, 1, 1]\n    }\n  }\n\n  onChange = e => {\n    const val = e.detail.value\n    this.setState({\n      year: this.state.years[val[0]],\n      month: this.state.months[val[1]],\n      day: this.state.days[val[2]],\n      value: val\n    })\n  }\n\n  render() {\n    return (\n      <View>\n        <View>{this.state.year}\u5e74{this.state.month}\u6708{this.state.day}\u65e5</View>\n        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>\n          <PickerViewColumn>\n            {this.state.years.map(item => {\n              return (\n                <View>{item}\u5e74</View>\n              );\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.months.map(item => {\n              return (\n                <View>{item}\u6708</View>\n              )\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.days.map(item => {\n              return (\n                <View>{item}\u65e5</View>\n              )\n            })}\n          </PickerViewColumn>\n        </PickerView>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="taro-example">\n  <view>{{year}}\u5e74{{month}}\u6708{{day}}\u65e5</view>\n  <picker-view indicator-style="height: 30px;" style="width: 100%; height: 300px;" :value="value" @change="onChange">\n    <picker-view-column>\n      <view v-for="(item, index) in years" :key="index">{{item}}\u5e74</view>\n    </picker-view-column>\n    <picker-view-column>\n      <view v-for="(item, index) in months" :key="index">{{item}}\u6708</view>\n    </picker-view-column>\n    <picker-view-column>\n      <view v-for="(item, index) in days" :key="index">{{item}}\u65e5</view>\n    </picker-view-column>\n  </picker-view>\n</view>\n</template>\n\n<script>\n  export default {\n    name: "Index",\n    data() {\n      const date = new Date()\n      const years = []\n      const months = []\n      const days = []\n      for (let i = 1990; i <= date.getFullYear(); i++) {\n        years.push(i)\n      }\n      for (let i = 1; i <= 12; i++) {\n        months.push(i)\n      }\n      for (let i = 1; i <= 31; i++) {\n        days.push(i)\n      }\n      return {\n        years: years,\n        year: date.getFullYear(),\n        months: months,\n        month: 2,\n        days: days,\n        day: 2,\n        value: [3, 1, 1]\n      }\n    },\n\n    methods: {\n      onChange: function(e) {\n        const val = e.detail.value\n        console.log(val)\n        this.year = this.years[val[0]]\n        this.month = this.months[val[1]]\n        this.day = this.days[val[2]]\n      }\n    }\n  }\n<\/script>\n')))),(0,a.kt)("h2",c({},{id:"pickerviewprops"}),"PickerViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number[]")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u4f9d\u6b21\u8868\u793a picker-view \u5185\u7684 picker-view-column \u9009\u62e9\u7684\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0c\u6570\u5b57\u5927\u4e8e picker-view-column \u53ef\u9009\u9879\u957f\u5ea6\u65f6\uff0c\u9009\u62e9\u6700\u540e\u4e00\u9879\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"indicatorStyle"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u6837\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"indicatorClass"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u7c7b\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"maskStyle"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8499\u5c42\u7684\u6837\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"maskClass"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8499\u5c42\u7684\u7c7b\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"immediateChange"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u662f\u5426\u5728\u624b\u6307\u677e\u5f00\u65f6\u7acb\u5373\u89e6\u53d1 change \u4e8b\u4ef6\u3002\u82e5\u4e0d\u5f00\u542f\u5219\u4f1a\u5728\u6eda\u52a8\u52a8\u753b\u7ed3\u675f\u540e\u89e6\u53d1 change \u4e8b\u4ef6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\u6807\u9898\uff0c\u5efa\u8bae\u6807\u9898\u63a7\u5236\u5728 12 \u4e2a\u4e2d\u6587\u6c49\u5b57\u957f\u5ea6\u5185\uff0c\u907f\u514d\u51fa\u73b0\u622a\u65ad\u73b0\u8c61, \u622a\u65ad\u90e8\u5206\u5c06\u4ee5 ... \u5f62\u5f0f\u5c55\u793a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ariaLabel"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onChange"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onChangeEventDetail>")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\uff0cvalue \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = {value: value}\uff1bvalue\u4e3a\u6570\u7ec4\uff0c\u8868\u793a picker-view \u5185\u7684 picker-view-column \u5f53\u524d\u9009\u62e9\u7684\u662f\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onPickStart"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\u5f00\u59cb\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"onPickEnd"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\u7ed3\u675f\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6")))),(0,a.kt)("h3",c({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u6296\u97f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.value"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.indicatorStyle"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.indicatorClass"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.maskStyle"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.maskClass"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.immediateChange"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.title"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.ariaLabel"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.onChange"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickStart"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickEnd"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"})),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",c({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number[]"))))))}g.isMDXComponent=!0},68525:function(e,t,n){t.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(e,t,n){t.Z=n.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},30174:function(e,t,n){t.Z=n.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(e,t,n){t.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58939:function(e,t,n){t.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);