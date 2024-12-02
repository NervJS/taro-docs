"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76283],{79874:function(t,a,e){e.d(a,{Zo:function(){return k},kt:function(){return g}});var n=e(93106);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),i=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},k=function(t){var a=i(t.components);return n.createElement(m.Provider,{value:a},t.children)},N="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=i(e),o=r,g=N["".concat(m,".").concat(o)]||N[o]||u[o]||l;return e?n.createElement(g,p(p({ref:a},k),{},{components:e})):n.createElement(g,p({ref:a},k))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=o;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=t,d[N]="string"==typeof t?t:r,p[1]=d;for(var i=2;i<l;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}o.displayName="MDXCreateElement"},1355:function(t,a,e){e.r(a),e.d(a,{assets:function(){return i},contentTitle:function(){return d},default:function(){return o},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});e(93106);var n=e(79874);function r(){return r=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},r.apply(this,arguments)}function l(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}const p={title:"Color",sidebar_label:"Color"},d=void 0,m={unversionedId:"apis/canvas/Color",id:"apis/canvas/Color",title:"Color",description:"The color. The following methods can be used to express the colors used on the canvas:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/canvas/Color.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/Color",permalink:"/taro-docs/en/docs/apis/canvas/Color",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/canvas/Color.md",tags:[],version:"current",frontMatter:{title:"Color",sidebar_label:"Color"},sidebar:"API",previous:{title:"CanvasGradient",permalink:"/taro-docs/en/docs/apis/canvas/CanvasGradient"},next:{title:"Image",permalink:"/taro-docs/en/docs/apis/canvas/Image"}},i={},k=[{value:"API Support",id:"api-support",level:2}],N={toc:k},u="wrapper";function o(t){var{components:a}=t,e=l(t,["components"]);return(0,n.kt)(u,r({},N,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The color. The following methods can be used to express the colors used on the canvas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RGB color, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"'rgb(255, 0, 0)'")),(0,n.kt)("li",{parentName:"ul"},"RGBA color, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"'rgba(255, 0, 0, 0.3)'")),(0,n.kt)("li",{parentName:"ul"},"Hex color, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"'#FF0000'")),(0,n.kt)("li",{parentName:"ul"},"Predefined color, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"'red'"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/Color.html"}),"Reference"))),(0,n.kt)("p",null,"The following 148 colors are predefined: ",(0,n.kt)("em",{parentName:"p"},"Note"),": The color names are not case sensitive."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Color Name"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"HEX"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"AliceBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F0F8FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"AntiqueWhite"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FAEBD7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Aqua"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00FFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Aquamarine"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#7FFFD4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Azure"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F0FFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Beige"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F5F5DC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Bisque"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFE4C4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Black"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BlanchedAlmond"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFEBCD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#0000FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BlueViolet"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#8A2BE2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Brown"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#A52A2A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"BurlyWood"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DEB887")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CadetBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#5F9EA0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chartreuse"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#7FFF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Chocolate"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#D2691E")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Coral"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF7F50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"CornflowerBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#6495ED")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cornsilk"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFF8DC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Crimson"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DC143C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cyan"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00FFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00008B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkCyan"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#008B8B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkGoldenRod"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#B8860B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkGray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#A9A9A9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkGrey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#A9A9A9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#006400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkKhaki"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#BDB76B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkMagenta"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#8B008B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkOliveGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#556B2F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkOrange"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF8C00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkOrchid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#9932CC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkRed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#8B0000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkSalmon"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#E9967A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkSeaGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#8FBC8F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkSlateBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#483D8B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkSlateGray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#2F4F4F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkSlateGrey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#2F4F4F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkTurquoise"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00CED1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DarkViolet"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#9400D3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DeepPink"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF1493")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DeepSkyBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00BFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DimGray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#696969")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DimGrey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#696969")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DodgerBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#1E90FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"FireBrick"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#B22222")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"FloralWhite"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFAF0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ForestGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#228B22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fuchsia"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF00FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Gainsboro"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DCDCDC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"GhostWhite"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F8F8FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Gold"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFD700")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"GoldenRod"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DAA520")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Gray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#808080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Grey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#808080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Green"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#008000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"GreenYellow"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#ADFF2F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"HoneyDew"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F0FFF0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"HotPink"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF69B4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"IndianRed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#CD5C5C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Indigo"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#4B0082")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Ivory"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFFF0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Khaki"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F0E68C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lavender"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#E6E6FA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LavenderBlush"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFF0F5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LawnGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#7CFC00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LemonChiffon"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFACD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#ADD8E6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightCoral"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F08080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightCyan"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#E0FFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightGoldenRodYellow"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FAFAD2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightGray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#D3D3D3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightGrey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#D3D3D3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#90EE90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightPink"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFB6C1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightSalmon"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFA07A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightSeaGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#20B2AA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightSkyBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#87CEFA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightSlateGray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#778899")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightSlateGrey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#778899")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightSteelBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#B0C4DE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LightYellow"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFFE0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Lime"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00FF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"LimeGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#32CD32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Linen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FAF0E6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Magenta"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF00FF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maroon"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#800000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumAquaMarine"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#66CDAA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#0000CD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumOrchid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#BA55D3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumPurple"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#9370DB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumSeaGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#3CB371")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumSlateBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#7B68EE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumSpringGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00FA9A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumTurquoise"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#48D1CC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MediumVioletRed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#C71585")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MidnightBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#191970")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MintCream"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F5FFFA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MistyRose"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFE4E1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Moccasin"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFE4B5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"NavajoWhite"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFDEAD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Navy"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#000080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OldLace"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FDF5E6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Olive"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#808000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OliveDrab"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#6B8E23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Orange"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFA500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OrangeRed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF4500")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Orchid"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DA70D6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PaleGoldenRod"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#EEE8AA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PaleGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#98FB98")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PaleTurquoise"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#AFEEEE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PaleVioletRed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DB7093")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PapayaWhip"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFEFD5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PeachPuff"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFDAB9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Peru"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#CD853F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Pink"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFC0CB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Plum"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#DDA0DD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PowderBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#B0E0E6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Purple"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#800080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"RebeccaPurple"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#663399")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Red"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF0000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"RosyBrown"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#BC8F8F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"RoyalBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#4169E1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SaddleBrown"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#8B4513")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Salmon"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FA8072")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SandyBrown"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F4A460")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SeaGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#2E8B57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SeaShell"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFF5EE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Sienna"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#A0522D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Silver"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#C0C0C0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SkyBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#87CEEB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SlateBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#6A5ACD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SlateGray"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#708090")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SlateGrey"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#708090")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Snow"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFAFA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SpringGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#00FF7F")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"SteelBlue"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#4682B4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tan"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#D2B48C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Teal"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#008080")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Thistle"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#D8BFD8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tomato"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FF6347")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Turquoise"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#40E0D0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Violet"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#EE82EE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Wheat"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F5DEB3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"White"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFFFF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WhiteSmoke"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#F5F5F5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Yellow"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#FFFF00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"YellowGreen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"#9ACD32")))),(0,n.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Color"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);