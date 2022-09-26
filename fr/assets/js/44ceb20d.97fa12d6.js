"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[458],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),r=t(7294),l=t(6010),o=t(2389),i=t(7392),u=t(7094),s=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:d,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,i.l)(g,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,u.U)(),[w,T]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=x[f];null!=e&&e!==w&&g.some((n=>n.value===e))&&T(e)}const I=e=>{const n=e.currentTarget,t=N.indexOf(n),a=g[t].value;a!==w&&(O(n),T(a),null!=f&&k(f,String(a)))},j=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},g.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:j,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},3249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),l=t(5488),o=t(5162);const i={sidebar_position:6},u="Surveiller une bo\xeete mail",s={unversionedId:"tutorial/watch-mailbox",id:"tutorial/watch-mailbox",title:"Surveiller une bo\xeete mail",description:"Tu peux surveiller tes bo\xeetes mail, simplement avec un peu de configuration.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorial/watch-mailbox.md",sourceDirName:"tutorial",slug:"/tutorial/watch-mailbox",permalink:"/fr/docs/tutorial/watch-mailbox",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/tutorial/watch-mailbox.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Utiliser une bo\xeete mail",permalink:"/fr/docs/tutorial/use-mailbox"},next:{title:"Documentation",permalink:"/fr/docs/category/documentation"}},c={},m=[{value:"Configurer la surveillance",id:"configurer-la-surveillance",level:2},{value:"Listener de nouveaux mails",id:"listener-de-nouveaux-mails",level:2}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"surveiller-une-bo\xeete-mail"},"Surveiller une bo\xeete mail"),(0,r.kt)("p",null,"Tu peux surveiller tes bo\xeetes mail, simplement avec un peu de configuration."),(0,r.kt)("h2",{id:"configurer-la-surveillance"},"Configurer la surveillance"),(0,r.kt)("p",null,"Pour surveiller une bo\xeete mail, tu dois en informer IMAP mailbox."),(0,r.kt)("p",null,"Pour ce faire, il suffit de le renseigner dans la configuration d'IMAP mailbox."),(0,r.kt)("p",null,"Voici un example de configuration avec surveillance :"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/imap-config.js"',title:'"/imap-config.js"'},"const config = {\n    host: 'imap.server.domain',\n    port: 993,\n    auth: {\n        user: 'username@server.domain',\n        pass: 'password',\n    }\n    logger: false,\n    logging: true,\n    mailboxesToWatch: ['INBOX'],\n    mailboxesToWatchInterval: 1000 * 60,\n}\n\nexport config;\n"))),(0,r.kt)(o.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/imap-config.js"',title:'"/imap-config.js"'},"const config = {\n    host: 'imap.server.domain',\n    port: 993,\n    auth: {\n        user: 'username@server.domain',\n        pass: 'password',\n    }\n    logger: false,\n    logging: true,\n    mailboxesToWatch: ['INBOX'],\n    mailboxesToWatchInterval: 1000 * 60,\n}\n\nmodule.exports = { config };\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mailboxesToWatch")," contient un tableau de nom de bo\xeetes mail \xe0 surveiller (sensible \xe0 la casse)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mailboxesToWatchInterval")," est l'interval de surveillance des bo\xeetes mail."),(0,r.kt)("h2",{id:"listener-de-nouveaux-mails"},"Listener de nouveaux mails"),(0,r.kt)("p",null,"Maintenant que tu as configur\xe9 la surveillance, tu peux utiliser l'\xe9couteur d'\xe9v\xe8nements de l'objet ",(0,r.kt)("a",{parentName:"p",href:"/docs/documentation/imap"},(0,r.kt)("inlineCode",{parentName:"a"},"Imap")),"."),(0,r.kt)("p",null,"Voici un example d'\xe9coute des nouveaux mails :"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",label:"ESM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Imap from 'imap-mailbox';\nimport { config } from './imap-config'; // ImapConfig\n\nfunction onNewMail(mail) {\n    console.log(\"J'ai re\xe7u un mail !\");\n}\n\nconst imap = new Imap(config);\nimap.on('newMail', onNewMail); // Lier la fonction onNewMail \xe0 l'\xe9v\xe8nement newMail\nawait imap.start(); // Connexion au server IMAP apr\xe8s la liaison de l'event listener\n"))),(0,r.kt)(o.Z,{value:"orange",label:"CJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Imap = require('imap-mailbox').default;\nconst { config } = require('./imap-config'); // ImapConfig\n\nfunction onNewMail(mail) {\n    console.log(\"J'ai re\xe7u un mail !\");\n}\n\nasync function run() {\n    const imap = new Imap(config);\n    imap.on('newMail', onNewMail); // Lier la fonction onNewMail \xe0 l'\xe9v\xe8nement newMail\n    await imap.start(); // Connexion au server IMAP apr\xe8s la liaison de l'event listener\n}\n\nrun();\n")))),(0,r.kt)("p",null,"A chaque fois qu'un nouveau mail est d\xe9t\xe9ct\xe9 (dans les bo\xeetes mails renseign\xe9es dans la configuration), la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"onNewMail")," sera d\xe9clanch\xe9e."))}d.isMDXComponent=!0}}]);