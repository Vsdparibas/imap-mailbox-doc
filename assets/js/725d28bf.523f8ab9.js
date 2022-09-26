"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[283],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),u=p(a),s=l,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||r;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:l,i[1]=m;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9757:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1},i="Imap",m={unversionedId:"documentation/imap",id:"documentation/imap",title:"Imap",description:"Imap",source:"@site/docs/documentation/imap.mdx",sourceDirName:"documentation",slug:"/documentation/imap",permalink:"/imap-mailbox-doc/docs/documentation/imap",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/documentation/imap.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/imap-mailbox-doc/docs/category/documentation"},next:{title:"Mail",permalink:"/imap-mailbox-doc/docs/documentation/mail"}},o={},p=[{value:"Imap",id:"imap-1",level:2},{value:"new Imap(config)",id:"new-imapconfig",level:3},{value:"imap.run()",id:"imaprun",level:3},{value:"imap.on(event, callback)",id:"imaponevent-callback",level:3},{value:"imap.deleteMails(mailboxPath, toDelete) \u21d2 <code>boolean</code>",id:"imapdeletemailsmailboxpath-todelete--boolean",level:3},{value:"imap.seeMails(mailboxPath, toSee) \u21d2 <code>boolean</code>",id:"imapseemailsmailboxpath-tosee--boolean",level:3},{value:"imap.unseeMails(mailboxPath, toUnsee) \u21d2 <code>boolean</code>",id:"imapunseemailsmailboxpath-tounsee--boolean",level:3},{value:"imap.getUnseenMails(mailboxPath) \u21d2 <code>Array.&lt;Mail&gt;</code>",id:"imapgetunseenmailsmailboxpath--arraymail",level:3},{value:"imap.getSeenMails(mailboxPath) \u21d2 <code>Array.&lt;Mail&gt;</code>",id:"imapgetseenmailsmailboxpath--arraymail",level:3},{value:"imap.getAllMails(mailboxPath) \u21d2 <code>Array.&lt;Mail&gt;</code>",id:"imapgetallmailsmailboxpath--arraymail",level:3},{value:"imap.getMailboxes() \u21d2 <code>Map.&lt;string, Mailbox&gt;</code>",id:"imapgetmailboxes--mapstring-mailbox",level:3}],d={toc:p};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"imap"},"Imap"),(0,l.kt)("a",{name:"Imap"}),(0,l.kt)("h2",{id:"imap-1"},"Imap"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap"},"Imap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_Imap_new"},"new Imap(config)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+run"},".run()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+on"},".on(event, callback)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+deleteMails"},".deleteMails(mailboxPath, toDelete)")," \u21d2 ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+seeMails"},".seeMails(mailboxPath, toSee)")," \u21d2 ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+unseeMails"},".unseeMails(mailboxPath, toUnsee)")," \u21d2 ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+getUnseenMails"},".getUnseenMails(mailboxPath)")," \u21d2 ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"li",href:"/docs/documentation/mail"},"Mail"),">")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+getSeenMails"},".getSeenMails(mailboxPath)")," \u21d2 ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"li",href:"/docs/documentation/mail"},"Mail"),">")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+getAllMails"},".getAllMails(mailboxPath)")," \u21d2 ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"li",href:"/docs/documentation/mail"},"Mail"),">")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Imap+getMailboxes"},".getMailboxes()")," \u21d2 ",(0,l.kt)("code",null,"Map.","<","string, ",(0,l.kt)("a",{parentName:"li",href:"/docs/documentation/mailbox"},"Mailbox"),">"))))),(0,l.kt)("a",{name:"new_Imap_new"}),(0,l.kt)("h3",{id:"new-imapconfig"},"new Imap(config)"),(0,l.kt)("p",null,"Await run() method before any action on this object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"/docs/documentation/imap-config"},"ImapConfig"))),(0,l.kt)("td",{parentName:"tr",align:null},"Imap configuration")))),(0,l.kt)("a",{name:"Imap+run"}),(0,l.kt)("h3",{id:"imaprun"},"imap.run()"),(0,l.kt)("p",null,"Run IMAP service\nYou should await this method before any action on Imap object"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),"  "),(0,l.kt)("a",{name:"Imap+on"}),(0,l.kt)("h3",{id:"imaponevent-callback"},"imap.on(event, callback)"),(0,l.kt)("p",null,"Use callback when event is emitted"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'newMail'")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"'loadedMail'")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"'deletedMail'")),(0,l.kt)("td",{parentName:"tr",align:null},"Event to target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(mail) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"Callback function to execute when event is emitted")))),(0,l.kt)("a",{name:"Imap+deleteMails"}),(0,l.kt)("h3",{id:"imapdeletemailsmailboxpath-todelete--boolean"},"imap.deleteMails(mailboxPath, toDelete) \u21d2 ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,"Delete mails from uids or mail objects"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"boolean")," - true if mails are deleted  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Mailbox path where mails to delete are")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toDelete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"/docs/documentation/uids-list"},"UidsList"))),(0,l.kt)("td",{parentName:"tr",align:null},"Mails or uids of mails to delete")))),(0,l.kt)("a",{name:"Imap+seeMails"}),(0,l.kt)("h3",{id:"imapseemailsmailboxpath-tosee--boolean"},"imap.seeMails(mailboxPath, toSee) \u21d2 ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,"Mark mails as seen from uids or mail object"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"boolean")," - true if mails are marked seen  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Mailbox path where mails to see are")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toSee"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"/docs/documentation/uids-list"},"UidsList"))),(0,l.kt)("td",{parentName:"tr",align:null},"Mails or uids of mails to see")))),(0,l.kt)("a",{name:"Imap+unseeMails"}),(0,l.kt)("h3",{id:"imapunseemailsmailboxpath-tounsee--boolean"},"imap.unseeMails(mailboxPath, toUnsee) \u21d2 ",(0,l.kt)("code",null,"boolean")),(0,l.kt)("p",null,"Mark mails as unseen from uids or mail object"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"boolean")," - true if mails are marked unseen  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Mailbox path where mails to unsee are")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toUnsee"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{parentName:"td",href:"/docs/documentation/uids-list"},"UidsList"))),(0,l.kt)("td",{parentName:"tr",align:null},"Mails or uids of mails to unsee")))),(0,l.kt)("a",{name:"Imap+getUnseenMails"}),(0,l.kt)("h3",{id:"imapgetunseenmailsmailboxpath--arraymail"},"imap.getUnseenMails(mailboxPath) \u21d2 ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"h3",href:"/docs/documentation/mail"},"Mail"),">")),(0,l.kt)("p",null,"Get a list of unseen mails from a mailbox"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"p",href:"/docs/documentation/mail"},"Mail"),">")," - List of mails  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to mailbox (or name)")))),(0,l.kt)("a",{name:"Imap+getSeenMails"}),(0,l.kt)("h3",{id:"imapgetseenmailsmailboxpath--arraymail"},"imap.getSeenMails(mailboxPath) \u21d2 ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"h3",href:"/docs/documentation/mail"},"Mail"),">")),(0,l.kt)("p",null,"Get a list of seen mails from a mailbox"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"p",href:"/docs/documentation/mail"},"Mail"),">")," - List of mails  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to mailbox (or name)")))),(0,l.kt)("a",{name:"Imap+getAllMails"}),(0,l.kt)("h3",{id:"imapgetallmailsmailboxpath--arraymail"},"imap.getAllMails(mailboxPath) \u21d2 ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"h3",href:"/docs/documentation/mail"},"Mail"),">")),(0,l.kt)("p",null,"Get all the mails from a mailbox"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Array.","<",(0,l.kt)("a",{parentName:"p",href:"/docs/documentation/mail"},"Mail"),">")," - List of mails  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mailboxPath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to mailbox (or name)")))),(0,l.kt)("a",{name:"Imap+getMailboxes"}),(0,l.kt)("h3",{id:"imapgetmailboxes--mapstring-mailbox"},"imap.getMailboxes() \u21d2 ",(0,l.kt)("code",null,"Map.","<","string, ",(0,l.kt)("a",{parentName:"h3",href:"/docs/documentation/mailbox"},"Mailbox"),">")),(0,l.kt)("p",null,"Get list of mailboxes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.kt)("a",{parentName:"p",href:"#Imap"},(0,l.kt)("code",null,"Imap")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Map.","<","string, ",(0,l.kt)("a",{parentName:"p",href:"/docs/documentation/mailbox"},"Mailbox"),">")," - Map of mailboxes"))}k.isMDXComponent=!0}}]);