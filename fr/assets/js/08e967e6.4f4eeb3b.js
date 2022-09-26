"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:d,groupId:b,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==x&&!g.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,r.useState)(x),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=h[b];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,a=N.indexOf(t),n=g[a].value;n!==w&&(T(t),O(n),null!=b&&k(b,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},2868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_position:4},s="R\xe9cup\xe9rer des bo\xeetes mail",u={unversionedId:"tutorial/get-mailboxes",id:"tutorial/get-mailboxes",title:"R\xe9cup\xe9rer des bo\xeetes mail",description:"Pour pouvoir utiliser les mails et les bo\xeetes mail, tu dois conna\xeetre le nom des bo\xeetes mail.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorial/get-mailboxes.md",sourceDirName:"tutorial",slug:"/tutorial/get-mailboxes",permalink:"/imap-mailbox-doc/fr/docs/tutorial/get-mailboxes",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/tutorial/get-mailboxes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/imap-mailbox-doc/fr/docs/tutorial/configuration"},next:{title:"Utiliser une bo\xeete mail",permalink:"/imap-mailbox-doc/fr/docs/tutorial/use-mailbox"}},p={},c=[{value:"R\xe9cup\xe9rer les bo\xeetes mail",id:"r\xe9cup\xe9rer-les-bo\xeetes-mail",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"r\xe9cup\xe9rer-des-bo\xeetes-mail"},"R\xe9cup\xe9rer des bo\xeetes mail"),(0,r.kt)("p",null,"Pour pouvoir utiliser les mails et les bo\xeetes mail, tu dois conna\xeetre le nom des bo\xeetes mail."),(0,r.kt)("p",null,"Si tu les connais (comme ",(0,r.kt)("inlineCode",{parentName:"p"},"INBOX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Sent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Trash"),", ...), tu peux passer \xe0 l'\xe9tape suivante."),(0,r.kt)("h2",{id:"r\xe9cup\xe9rer-les-bo\xeetes-mail"},"R\xe9cup\xe9rer les bo\xeetes mail"),(0,r.kt)("p",null,"Tu peux simplement r\xe9cup\xe9rer les bo\xeetes mail avec ce code :"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Imap from 'imap-mailbox';\nimport { config } from './imap-config'; // ImapConfig\n\nconst imap = new Imap(config);\nawait imap.start(); // Connexion au serveur IMAP\n\nconst mailboxes = await imap.getMailboxes();\n\nconsole.log(mailboxes); // Log une map d'objets Mailbox\n"))),(0,r.kt)(l.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Imap = require('imap-mailbox').default;\nconst { config } = require('./imap-config'); // ImapConfig\n\nasync function run() {\n    const imap = new Imap(config);\n    await imap.start(); // Connexion au serveur IMAP\n\n    const mailboxes = await imap.getMailboxes();\n\n    console.log(mailboxes); // Log une map d'objets Mailbox\n}\n\nrun();\n")))),(0,r.kt)("p",null,"La variable ",(0,r.kt)("inlineCode",{parentName:"p"},"mailboxes")," contiens une map de ",(0,r.kt)("a",{parentName:"p",href:"/docs/documentation/mailbox"},(0,r.kt)("inlineCode",{parentName:"a"},"Mailbox")),", sur lesquelles tu peux utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"Mailbox.path")," pour r\xe9cup\xe9rer le nom de la bo\xeete mail."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Toujours attendre ",(0,r.kt)("inlineCode",{parentName:"p"},"await imap.start()")," avant de faire quelconque op\xe9ration sur l'objet Imap (sauf pour la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"imap.on()"),").")),(0,r.kt)("p",null,"Maintenant que tu as le nom des bo\xeetes mail, tu peux r\xe9cup\xe9rer les mails \xe0 l'int\xe9rieur."),(0,r.kt)("p",null,"Ce que l'on va voir dans l'\xe9tape suivante."))}d.isMDXComponent=!0}}]);