"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),b=a,d=u["".concat(p,".").concat(b)]||u[b]||c[b]||r;return n?o.createElement(d,i(i({ref:t},s),{},{components:n})):o.createElement(d,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4},i="Get mailboxes",l={unversionedId:"tutorial/get-mailboxes",id:"tutorial/get-mailboxes",title:"Get mailboxes",description:"In order to deal with mails and mailboxes, you need to get mailboxes names (path).",source:"@site/docs/tutorial/get-mailboxes.md",sourceDirName:"tutorial",slug:"/tutorial/get-mailboxes",permalink:"/imap-mailbox-doc/docs/tutorial/get-mailboxes",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/tutorial/get-mailboxes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/imap-mailbox-doc/docs/tutorial/configuration"},next:{title:"Use a mailbox",permalink:"/imap-mailbox-doc/docs/tutorial/use-mailbox"}},p={},m=[{value:"Getting mailboxes",id:"getting-mailboxes",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-mailboxes"},"Get mailboxes"),(0,a.kt)("p",null,"In order to deal with mails and mailboxes, you need to get mailboxes names (path)."),(0,a.kt)("p",null,"If you know them (like ",(0,a.kt)("inlineCode",{parentName:"p"},"INBOX"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Sent"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Trash"),", ...), you don't need to get mailboxes and can skip this step."),(0,a.kt)("h2",{id:"getting-mailboxes"},"Getting mailboxes"),(0,a.kt)("p",null,"You can get mailboxes simply with this code :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Imap from 'imap-mailbox';\nimport { config } from './imap-config'; // ImapConfig\n\nasync function run() {\n    const imap = new Imap(config);\n    await imap.start(); // Connect to IMAP server\n\n    const mailboxes = await imap.getMailboxes();\n\n    console.log(mailboxes); // Log a map of Mailbox objects\n}\n\nrun();\n")),(0,a.kt)("p",null,"Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"mailboxes")," contains ",(0,a.kt)("inlineCode",{parentName:"p"},"Mailbox")," objects, where you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Mailbox.path")," to get a mailbox name (path)."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Always wait for ",(0,a.kt)("inlineCode",{parentName:"p"},"await imap.start()")," before any operation on Imap object (except for ",(0,a.kt)("inlineCode",{parentName:"p"},"imap.on()")," method).")),(0,a.kt)("p",null,"Now that you have the name of your mailboxes, you can get mails from them."),(0,a.kt)("p",null,"We will see that in the next step."))}c.isMDXComponent=!0}}]);