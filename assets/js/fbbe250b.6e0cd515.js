"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={step_position:2},i="Configuration",l={unversionedId:"tutorial/configuration",id:"tutorial/configuration",title:"Configuration",description:"To configure IMAP mailbox, you need to create a ImapConfig object in a file.",source:"@site/docs/tutorial/configuration.md",sourceDirName:"tutorial",slug:"/tutorial/configuration",permalink:"/imap-mailbox-doc/docs/tutorial/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/configuration.md",tags:[],version:"current",frontMatter:{step_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/imap-mailbox-doc/docs/tutorial/installation"},next:{title:"Tutorial - Basics",permalink:"/imap-mailbox-doc/docs/category/tutorial---basics"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To configure IMAP mailbox, you need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ImapConfig")," object in a file."),(0,r.kt)("p",null,"You can name this file as you wish."),(0,r.kt)("p",null,"This is a configuration example, named here ",(0,r.kt)("inlineCode",{parentName:"p"},"imap-config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/imap-config.js"',title:'"/imap-config.js"'},"const config = {\n    host: 'imap.server.domain',\n    port: 993,\n    auth: {\n        user: 'username@server.domain',\n        pass: 'password',\n    }\n    logger: false,\n    logging: true,\n}\n\nexport config;\n// For CommonJS, replace \"export config;\" by :\n// module.exports = { config };\n")),(0,r.kt)("p",null,"For more options, check the ",(0,r.kt)("inlineCode",{parentName:"p"},"ImapConfig")," documentation."),(0,r.kt)("p",null,"Parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"auth"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," are needed."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," parameter set to false disable imapflow (verbose logging), which IMAP mailbox is based on."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logging")," parameter set to true enable IMAP mailbox logging."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For typescript, you can import ",(0,r.kt)("inlineCode",{parentName:"p"},"ImapConfig")," interface with :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ImapConfig } from 'imap-mailbox';\n"))),(0,r.kt)("p",null,"You can finally use IMAP mailbox. We will see how in the next step."))}u.isMDXComponent=!0}}]);