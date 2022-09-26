"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),s=r,k=c["".concat(m,".").concat(s)]||c[s]||d[s]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="Mail",o={unversionedId:"documentation/mail",id:"documentation/mail",title:"Mail",description:"Un mail depuis une bo\xeete mail",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation/mail.md",sourceDirName:"documentation",slug:"/documentation/mail",permalink:"/fr/docs/documentation/mail",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/documentation/mail.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Imap",permalink:"/fr/docs/documentation/imap"},next:{title:"Mailbox",permalink:"/fr/docs/documentation/mailbox"}},m={},u=[{value:"mail.delete()",id:"maildelete",level:3},{value:"mail.see()",id:"mailsee",level:3},{value:"mail.unsee()",id:"mailunsee",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mail"},"Mail"),(0,r.kt)("a",{name:"Mail"}),(0,r.kt)("p",null,"Un mail depuis une bo\xeete mail"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": classe globale"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Propri\xe9t\xe9s")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"ID unique du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seq"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Nombre de s\xe9quence du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Sujet du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"AddressObject")," ","|"," ",(0,r.kt)("code",null,"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Informations de l'exp\xe9diteur du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Contenu du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Nom de la bo\xeete mail du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parsedMail"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ParsedMail")),(0,r.kt)("td",{parentName:"tr",align:null},"mailparser parsed mail")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Mail"},"Mail"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Mail+delete"},".delete()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Mail+see"},".see()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Mail+unsee"},".unsee()"))))),(0,r.kt)("a",{name:"Mail+delete"}),(0,r.kt)("h3",{id:"maildelete"},"mail.delete()"),(0,r.kt)("p",null,"Supprimer ce mail"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": m\xe9thode d'instance de ",(0,r.kt)("a",{parentName:"p",href:"#Mail"},(0,r.kt)("code",null,"Mail")),"  "),(0,r.kt)("a",{name:"Mail+see"}),(0,r.kt)("h3",{id:"mailsee"},"mail.see()"),(0,r.kt)("p",null,"Marquer ce mail comme vu"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": m\xe9thode d'instance de ",(0,r.kt)("a",{parentName:"p",href:"#Mail"},(0,r.kt)("code",null,"Mail")),"  "),(0,r.kt)("a",{name:"Mail+unsee"}),(0,r.kt)("h3",{id:"mailunsee"},"mail.unsee()"),(0,r.kt)("p",null,"Marquer ce mail comme non vu"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": m\xe9thode d'instance de ",(0,r.kt)("a",{parentName:"p",href:"#Mail"},(0,r.kt)("code",null,"Mail"))))}d.isMDXComponent=!0}}]);