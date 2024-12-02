"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[54468],{79874:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63983:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={title:"CLI \u547d\u4ee4"},i=void 0,p={unversionedId:"cli",id:"cli",title:"CLI \u547d\u4ee4",description:"\u5e38\u7528\u7684 Taro CLI \u547d\u4ee4\u3002",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/taro-docs/docs/cli",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/cli.md",tags:[],version:"current",frontMatter:{title:"CLI \u547d\u4ee4"},sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/taro-docs/docs/folder"},next:{title:"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",permalink:"/taro-docs/docs/env-mode-config"}},c={},s=[{value:"\u67e5\u770b Taro \u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9",id:"\u67e5\u770b-taro-\u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9",level:3},{value:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b",id:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b",level:3},{value:"Taro Doctor",id:"taro-doctor",level:3},{value:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762",id:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:4},{value:"\u5feb\u901f\u521b\u5efa\u63d2\u4ef6\u6a21\u7248",id:"\u5feb\u901f\u521b\u5efa\u63d2\u4ef6\u6a21\u7248",level:3},{value:"CLI \u914d\u7f6e",id:"cli-\u914d\u7f6e",level:3},{value:"\u5168\u5c40\u63d2\u4ef6\u6216\u63d2\u4ef6\u96c6\u914d\u7f6e",id:"\u5168\u5c40\u63d2\u4ef6\u6216\u63d2\u4ef6\u96c6\u914d\u7f6e",level:3}],u={toc:s},m="wrapper";function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(m,o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e38\u7528\u7684 Taro CLI \u547d\u4ee4\u3002"),(0,r.kt)("h3",o({},{id:"\u67e5\u770b-taro-\u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9"}),"\u67e5\u770b Taro \u6240\u6709\u547d\u4ee4\u53ca\u5e2e\u52a9"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro --help\n")),(0,r.kt)("h3",o({},{id:"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b"}),"\u73af\u5883\u53ca\u4f9d\u8d56\u68c0\u6d4b"),(0,r.kt)("p",null,"Taro \u63d0\u4f9b\u4e86\u547d\u4ee4\u6765\u4e00\u952e\u68c0\u6d4b Taro \u73af\u5883\u53ca\u4f9d\u8d56\u7684\u7248\u672c\u7b49\u4fe1\u606f\uff0c\u65b9\u4fbf\u5927\u5bb6\u67e5\u770b\u9879\u76ee\u7684\u73af\u5883\u53ca\u4f9d\u8d56\uff0c\u6392\u67e5\u73af\u5883\u95ee\u9898\u3002\u5728\u63d0 issue \u7684\u65f6\u5019\uff0c\u8bf7\u9644\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"taro info")," \u6253\u5370\u7684\u4fe1\u606f\uff0c\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro info\n\ud83d\udc7d Taro v3.0.7\n\n\n\n  Taro CLI 3.0.7 environment info:\n    System:\n      OS: macOS High Sierra 10.13.6\n      Shell: 5.3 - /bin/zsh\n    Binaries:\n      Node: 13.14.0 - ~/.nvm/versions/node/v13.14.0/bin/node\n      Yarn: 1.22.4 - ~/.nvm/versions/node/v13.14.0/bin/yarn\n      npm: 6.14.4 - ~/.nvm/versions/node/v13.14.0/bin/npm\n    npmPackages:\n      @tarojs/components: 1.3.27 => 1.3.27\n      @tarojs/router: 1.3.27 => 1.3.27\n      @tarojs/taro: 1.3.27 => 1.3.27\n      @tarojs/taro-h5: 1.3.27 => 1.3.27\n      @tarojs/webpack-runner: 1.3.27 => 1.3.27\n      eslint-config-taro: 1.3.27 => 1.3.27\n      eslint-plugin-taro: 1.3.27 => 1.3.27\n      nerv-devtools: 1.5.5 => 1.5.5\n      nervjs: 1.5.5 => 1.5.5\n\n")),(0,r.kt)("h3",o({},{id:"taro-doctor"}),"Taro Doctor"),(0,r.kt)("p",null,"Taro Doctor \u5c31\u50cf\u4e00\u4e2a\u533b\u751f\u4e00\u6837\uff0c\u53ef\u4ee5\u8bca\u65ad\u9879\u76ee\u7684\u4f9d\u8d56\u3001\u8bbe\u7f6e\u3001\u7ed3\u6784\uff0c\u4ee5\u53ca\u4ee3\u7801\u7684\u89c4\u8303\u662f\u5426\u5b58\u5728\u95ee\u9898\uff0c\u5e76\u5c1d\u8bd5\u7ed9\u51fa\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,"\u4f46\u548c\u771f\u6b63\u7684\u533b\u751f\u4e0d\u4e00\u6837\uff0cTaro Doctor \u4e0d\u9700\u8981\u6392\u961f\u6302\u53f7\uff0c\u4e5f\u4e0d\u7528\u82b1\u94b1\u3002\u4f60\u53ea\u9700\u8981\u5728\u7ec8\u7aef\u8fd0\u884c\u547d\u4ee4\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"taro doctor"),"\uff0c\u5c31\u50cf\u56fe\u91cc\u4e00\u6837\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",o({parentName:"p"},{src:"https://img10.360buyimg.com/ling/jfs/t1/46613/36/5573/202581/5d357d14E6f0df7e1/fc026be7dc69dcf2.png",alt:"Taro Doctor \u8bca\u65ad\u7ed3\u679c\u56fe"}))),(0,r.kt)("h3",o({},{id:"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762"}),"\u5feb\u901f\u521b\u5efa\u65b0\u9875\u9762"),(0,r.kt)("p",null,"Taro create --name ","[\u9875\u9762\u540d\u79f0]"," --dir ","[\u8def\u5f84]"," --subpkg ","[\u5206\u5305\u8def\u5f84]","  \u80fd\u591f\u5728\u5f53\u524d\u9879\u76ee\u7684\u6307\u5b9a\u76ee\u5f55\u4e0b\u5feb\u901f\u751f\u6210\u65b0\u7684\u9875\u9762\u6587\u4ef6\uff0c\u5e76\u586b\u5145\u57fa\u7840\u4ee3\u7801\uff0c\u662f\u4e00\u4e2a\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u7684\u5229\u5668\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"taro \u4f1a\u5c1d\u8bd5\u540c\u6b65\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"subPackages")," \u5b57\u6bb5\u3002")),(0,r.kt)("h4",o({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,r.kt)("p",null,"\u5047\u8bbe\u5f53\u524d\u5f53\u524d\u8ddf\u8def\u5f84\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/project/root"),"\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u521b\u5efa\u4e3b\u5305\u9875\u9762\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro create newPage --dir pages/mydir\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/project/root/src/pages/mydir")," \u76ee\u5f55\u4e0b\u751f\u6210\u65b0\u7684\u9875\u9762\uff0c\u5e76\u4e14\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js")," \u4e2d\u81ea\u52a8\u8865\u9f50 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," \u5b57\u6bb5\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u521b\u5efa\u5206\u5305\u9875\u9762\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro create newPage --subpkg mysubpages\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/project/root/src/mysubpages")," \u76ee\u5f55\u4e0b\u751f\u6210\u65b0\u7684\u9875\u9762\uff0c\u5e76\u4e14\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js")," \u4e2d\u81ea\u52a8\u8865\u9f50 ",(0,r.kt)("inlineCode",{parentName:"p"},"subPackages")," \u5b57\u6bb5\u3002"),(0,r.kt)("h3",o({},{id:"\u5feb\u901f\u521b\u5efa\u63d2\u4ef6\u6a21\u7248"}),"\u5feb\u901f\u521b\u5efa\u63d2\u4ef6\u6a21\u7248"),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",o({parentName:"p"},{href:"/taro-docs/docs/plugin-custom"}),"\u63d2\u4ef6\u7f16\u5199")),(0,r.kt)("h3",o({},{id:"cli-\u914d\u7f6e"}),"CLI \u914d\u7f6e"),(0,r.kt)("p",null,"Taro \u4f1a\u5728\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u521b\u5efa .taro \u6587\u4ef6\u5939\uff0c\u5176\u4e2d .taro/index.json \u7528\u4e8e\u5b58\u653e CLI \u76f8\u5173\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"taro config")," \u547d\u4ee4\u5bf9\u914d\u7f6e\u9879\u8fdb\u884c\u4e00\u7cfb\u5217\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u7528\u6cd5\n$ taro config --help\n# \u8bbe\u7f6e\u914d\u7f6e\u9879<key>\u7684\u503c\u4e3a<value>\n$ taro config set <key> <value>\n# \u8bfb\u53d6\u914d\u7f6e\u9879<key>\n$ taro config get <key>\n# \u5220\u9664\u914d\u7f6e\u9879<key>\n$ taro config delete <key>\n# \u6253\u5370\u6240\u6709\u914d\u7f6e\u9879\n$ taro config list [--json]\n")),(0,r.kt)("h3",o({},{id:"\u5168\u5c40\u63d2\u4ef6\u6216\u63d2\u4ef6\u96c6\u914d\u7f6e"}),"\u5168\u5c40\u63d2\u4ef6\u6216\u63d2\u4ef6\u96c6\u914d\u7f6e"),(0,r.kt)("p",null,"Taro \u4f1a\u5728\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u521b\u5efa .taro-global-config \u6587\u4ef6\u5939\uff0c\u7528\u4e8e\u5728\u6267\u884c CLI \u9636\u6bb5\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u83b7\u53d6\u5230\u9879\u76ee\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u4ece\u8be5\u6587\u4ef6\u5939\u4e0b\u8bfb\u53d6\u5168\u5c40\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u5f00\u53d1\u4e86 \u63d2\u4ef6\uff08plugins\uff09\u548c \u63d2\u4ef6\u96c6\uff08presets\uff09\u8fd9\u4e24\u4e2a\u53ef\u914d\u7f6e\u9879\u3002\n\u6709\u4e86\u8fd9\u4e00\u914d\u7f6e\uff0cTaro \u5c06\u652f\u6301\u5728\u6ca1\u6709\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u53bb\u6267\u884c\u4e00\u4e9b\u63d2\u4ef6\u3002\u8fd9\u4e9b\u63d2\u4ef6\u5927\u90e8\u5206\u662f\u4e00\u4e9b\u81ea\u5b9a\u4e49\u547d\u4ee4\u7c7b\u578b\u7684\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"taro global-config")," \u547d\u4ee4\u5bf9\u914d\u7f6e\u9879\u8fdb\u884c\u4e00\u7cfb\u5217\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u7528\u6cd5\n$ taro global-config --help\n# \u6dfb\u52a0\u5168\u5c40\u63d2\u4ef6\n$ taro global-config add-plugin [pluginName]\n# \u5220\u9664\u5168\u5c40\u63d2\u4ef6\n$ taro global-config remove-plugin [pluginName]\n# \u6dfb\u52a0\u5168\u5c40\u63d2\u4ef6\u96c6\n$ taro global-config add-preset [presetName]\n# \u5220\u9664\u5168\u5c40\u63d2\u4ef6\u96c6\n$ taro global-config remove-preset [presetName]\n# \u91cd\u7f6e .taro-global-config \u6587\u4ef6\u5939\n$ taro global-config reset\n")),(0,r.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6bd4\u5982\u6709\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u6a21\u7248\u6e90\uff0c\u5982\u679c\u76f4\u63a5\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"taro init")," \u547d\u4ee4\uff0c\u5728\u6bcf\u6b21\u521d\u59cb\u5316\u65f6\u90fd\u5f97\u4f20\u5165\u5927\u91cf\u7684\u53c2\u6570\u624d\u5f97\u4ee5\u5b8c\u6210\u9879\u76ee\u7684\u521d\u59cb\u5316\u6784\u5efa\u3002\u8fd9\u65f6\u5019\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u5f00\u53d1\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u521d\u59cb\u5316\u63d2\u4ef6\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"const TEMPLATE_SOURCE = 'your template source'\nexport default (ctx: IPluginContext) => {\n  ctx.registerCommand({\n    // \u547d\u4ee4\u540d\n    name: 'custom-init',\n    optionsMap: {\n      '--name': '\u9879\u76ee\u540d\u79f0',\n      '--description': '\u9879\u76ee\u63cf\u8ff0',\n    },\n    // \u6267\u884c taro custom-init --help \u65f6\u8f93\u51fa\u7684\u4f7f\u7528\u4f8b\u5b50\u7684\u4fe1\u606f\n    synopsisList: ['taro custom-init <projectName> --description <description>'],\n    // \u547d\u4ee4\u94a9\u5b50\n    async fn() {\n      const name = ctx?.runOpts?._[1] || ctx?._.name\n      const description = ctx?.runOpts?.options?.description\n      //\u4f7f\u7528 taro cli \u5185\u90e8\u547d\u4ee4\u63d2\u4ef6\u5df2\u901a\u8fc7\u6b64\u65b9\u6cd5\u66b4\u9732\u51fa\u6765\n      ctx.applyCliCommandPlugin(['init'])\n      ctx.applyPlugins({\n        name: 'init',\n        opts: {\n          options: {\n            typescript: true,\n            templateSource: TEMPLATE_SOURCE,\n            css: 'none',\n            framework: 'react',\n            compiler: 'webpack5',\n            description: description,\n            projectName: name,\n          },\n        },\n      })\n    },\n  })\n}\n")),(0,r.kt)("p",null,"\u4e4b\u540e\uff0c\u53ef\u4ee5\u628a\u8be5\u63d2\u4ef6\u4f5c\u4e3a\u5168\u5c40\u63d2\u4ef6\u5b89\u88c5\uff0c\u5047\u8bbe\u8be5\u63d2\u4ef6\u540d\u4e3a taro-custom-init\uff0c\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro global-config add-plugin taro-custom-init\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u53ea\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5373\u53ef\u5b8c\u6210\u4f60\u7684\u81ea\u5b9a\u4e49 Taro \u9879\u76ee\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ taro custom-init <projectName> --description <description>\n")))}d.isMDXComponent=!0}}]);