"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[630],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(k,d(d({ref:e},m),{},{components:n})):a.createElement(k,d({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,d=new Array(l);d[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var p=2;p<l;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6537:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},d="ParsedMail",i={unversionedId:"documentation/parsed-mail",id:"documentation/parsed-mail",title:"ParsedMail",description:"Param\xe8tres",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation/parsed-mail.md",sourceDirName:"documentation",slug:"/documentation/parsed-mail",permalink:"/imap-mailbox-doc/fr/docs/documentation/parsed-mail",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/documentation/parsed-mail.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Mailbox",permalink:"/imap-mailbox-doc/fr/docs/documentation/mailbox"},next:{title:"ImapConfig",permalink:"/imap-mailbox-doc/fr/docs/documentation/imap-config"}},o={},p=[{value:"Param\xe8tres",id:"param\xe8tres",level:2}],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parsedmail"},"ParsedMail"),(0,r.kt)("h2",{id:"param\xe8tres"},"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attributs"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attachments"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"Attachment[]"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Un tableau de pi\xe8ces jointes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Headers")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Une map d'objets avec les cl\xe9s des headers en minuscules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerLines"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HeaderLines")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Un tableau des headers bruts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"html"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Corps HTML du mail. Vaut ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," quand il n'y a pas de corps HTML.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Le texte en clair du corps du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"textAsHtml"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Le texte en clair du corps du mail formatt\xe9 en HTML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Le sujet du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"references"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Soit un tableau de un ou plusieurs ID de message r\xe9f\xe9renc\xe9es, soit l'ID du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Date")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Un objet Date pour le header ",(0,r.kt)("inlineCode",{parentName:"td"},"Date:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject"))," / ",(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject[]"))," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Un objet AddressObject ou un tableau d'objets AddressObject pour le header ",(0,r.kt)("inlineCode",{parentName:"td"},"To:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject"))," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Un objet AddressObject pour le header ",(0,r.kt)("inlineCode",{parentName:"td"},"From:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject"))," / ",(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject[]"))," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Un objet AddressObject ou un tableau d'objets AddressObject pour le header ",(0,r.kt)("inlineCode",{parentName:"td"},"Cc:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bcc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject"))," / ",(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject[]"))," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Un objet AddressObject ou un tableau d'objets AddressObject pour le header ",(0,r.kt)("inlineCode",{parentName:"td"},"Bcc:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replyTo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/address-object"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressObject"))," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Un object AddressObject pour le header ",(0,r.kt)("inlineCode",{parentName:"td"},"Reply-to:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"L'id du mail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inReplyTo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"La valeur en cha\xeene de charact\xe8res pour In-Reply-To")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'normal'")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"'low'")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"'high'")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Priorit\xe9 du mail")))))}u.isMDXComponent=!0}}]);