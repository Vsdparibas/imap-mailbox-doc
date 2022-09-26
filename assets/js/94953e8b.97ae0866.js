"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[916],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(t),b=l,d=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return t?n.createElement(d,r(r({ref:a},c),{},{components:t})):n.createElement(d,r({ref:a},c))}));function b(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var m=2;m<o;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),l=t(6010);const o="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(7462),l=t(7294),o=t(6010),r=t(2389),i=t(7392),s=t(7094),m=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var a;const{lazy:t,block:r,defaultValue:p,values:b,groupId:d,className:f}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=b??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,i.l)(v,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===p?p:p??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==x&&!v.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[w,I]=(0,l.useState)(x),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,m.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&v.some((a=>a.value===e))&&I(e)}const N=e=>{const a=e.currentTarget,t=O.indexOf(a),n=v[t].value;n!==w&&(T(a),I(n),null!=d&&k(d,String(n)))},P=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},v.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>O.push(e),onKeyDown:P,onFocus:N,onClick:N},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function b(e){const a=(0,r.Z)();return l.createElement(p,(0,n.Z)({key:String(a)},e))}},4365:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),o=t(5488),r=t(5162);const i={sidebar_position:5},s="Use a mailbox",m={unversionedId:"tutorial/use-mailbox",id:"tutorial/use-mailbox",title:"Use a mailbox",description:"With IMAP mailbox, you can use all your mailboxes.",source:"@site/docs/tutorial/use-mailbox.md",sourceDirName:"tutorial",slug:"/tutorial/use-mailbox",permalink:"/imap-mailbox-doc/docs/tutorial/use-mailbox",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/tutorial/use-mailbox.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Get mailboxes",permalink:"/imap-mailbox-doc/docs/tutorial/get-mailboxes"},next:{title:"Watch a mailbox",permalink:"/imap-mailbox-doc/docs/tutorial/watch-mailbox"}},c={},u=[{value:"Get mails",id:"get-mails",level:2},{value:"Delete mails",id:"delete-mails",level:2}],p={toc:u};function b(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"use-a-mailbox"},"Use a mailbox"),(0,l.kt)("p",null,"With IMAP mailbox, you can use all your mailboxes."),(0,l.kt)("p",null,"You can get, delete, see and unsee mails."),(0,l.kt)("h2",{id:"get-mails"},"Get mails"),(0,l.kt)("p",null,"There is a code example to get mails from mailbox ",(0,l.kt)("inlineCode",{parentName:"p"},"INBOX")," :"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Imap from 'imap-mailbox';\nimport { config } from './imap-config'; // ImapConfig\n\nconst imap = new Imap(config);\nawait imap.start(); // Connect to IMAP server\n\nconst mailboxPath = 'INBOX'; // Mailbox path (name)\nconst mails = await imap.getAllMails(mailboxPath);\n\nconsole.log(mails); // Log an array of Mail\n"))),(0,l.kt)(r.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const Imap = require('imap-mailbox').default;\nconst { config } = require('./imap-config'); // ImapConfig\n\nasync function run() {\n    const imap = new Imap(config);\n    await imap.start(); // Connect to IMAP server\n\n    const mailboxPath = 'INBOX'; // Mailbox path (name)\n    const mails = await imap.getAllMails(mailboxPath);\n\n    console.log(mails); // Log an array of Mail\n}\n\nrun();\n")))),(0,l.kt)("h2",{id:"delete-mails"},"Delete mails"),(0,l.kt)("p",null,"There is a code example to delete mails from mailbox ",(0,l.kt)("inlineCode",{parentName:"p"},"INBOX")," :"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Imap from 'imap-mailbox';\nimport { config } from './imap-config'; // ImapConfig\n\nconst imap = new Imap(config);\nawait imap.start(); // Connect to IMAP server\n\nconst mailboxPath = 'INBOX'; // Mailbox path (name)\nconst mails = await imap.getAllMails(mailboxPath);\n    \nawait imap.deleteMails(mailboxPath, { mails });\n"))),(0,l.kt)(r.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const Imap = require('imap-mailbox').default;\nconst { config } = require('./imap-config'); // ImapConfig\n\nasync function run() {\n    const imap = new Imap(config);\n    await imap.start(); // Connect to IMAP server\n\n    const mailboxPath = 'INBOX'; // Mailbox path (name)\n    const mails = await imap.getAllMails(mailboxPath);\n    \n    await imap.deleteMails(mailboxPath, { mails });\n}\n\nrun();\n")))),(0,l.kt)("p",null,"Now that you can manage a mailbox, we can continue to watching inboxes in the next step."))}b.isMDXComponent=!0}}]);