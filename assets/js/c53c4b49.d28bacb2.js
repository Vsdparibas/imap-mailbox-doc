"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=o,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||r;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),o=a(7294),r=a(6010),l=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:b,groupId:d,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=b??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=x[d];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,a=N.indexOf(t),n=v[a].value;n!==w&&(T(t),O(n),null!=d&&k(d,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,l.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},5612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162);const i={sidebar_position:4},s="Get mailboxes",u={unversionedId:"tutorial/get-mailboxes",id:"tutorial/get-mailboxes",title:"Get mailboxes",description:"In order to deal with mails and mailboxes, you need to get mailboxes names (path).",source:"@site/docs/tutorial/get-mailboxes.md",sourceDirName:"tutorial",slug:"/tutorial/get-mailboxes",permalink:"/docs/tutorial/get-mailboxes",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/tutorial/get-mailboxes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/tutorial/configuration"},next:{title:"Use a mailbox",permalink:"/docs/tutorial/use-mailbox"}},c={},m=[{value:"Getting mailboxes",id:"getting-mailboxes",level:2}],p={toc:m};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-mailboxes"},"Get mailboxes"),(0,o.kt)("p",null,"In order to deal with mails and mailboxes, you need to get mailboxes names (path)."),(0,o.kt)("p",null,"If you know them (like ",(0,o.kt)("inlineCode",{parentName:"p"},"INBOX"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Sent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Trash"),", ...), you don't need to get mailboxes and can skip this step."),(0,o.kt)("h2",{id:"getting-mailboxes"},"Getting mailboxes"),(0,o.kt)("p",null,"You can get mailboxes simply with this code :"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Imap from 'imap-mailbox';\nimport { config } from './imap-config'; // ImapConfig\n\nconst imap = new Imap(config);\nawait imap.start(); // Connect to IMAP server\n\nconst mailboxes = await imap.getMailboxes();\n\nconsole.log(mailboxes); // Log a map of Mailbox objects\n"))),(0,o.kt)(l.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Imap = require('imap-mailbox').default;\nconst { config } = require('./imap-config'); // ImapConfig\n\nasync function run() {\n    const imap = new Imap(config);\n    await imap.start(); // Connect to IMAP server\n\n    const mailboxes = await imap.getMailboxes();\n\n    console.log(mailboxes); // Log a map of Mailbox objects\n}\n\nrun();\n")))),(0,o.kt)("p",null,"Variable ",(0,o.kt)("inlineCode",{parentName:"p"},"mailboxes")," contains ",(0,o.kt)("inlineCode",{parentName:"p"},"Mailbox")," objects, where you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Mailbox.path")," to get a mailbox name (path)."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Always wait for ",(0,o.kt)("inlineCode",{parentName:"p"},"await imap.start()")," before any operation on Imap object (except for ",(0,o.kt)("inlineCode",{parentName:"p"},"imap.on()")," method).")),(0,o.kt)("p",null,"Now that you have the name of your mailboxes, you can get mails from them."),(0,o.kt)("p",null,"We will see that in the next step."))}b.isMDXComponent=!0}}]);