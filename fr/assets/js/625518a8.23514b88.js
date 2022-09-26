"use strict";(self.webpackChunkimap_mailbox_doc=self.webpackChunkimap_mailbox_doc||[]).push([[559],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3360:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:6},i="ImapFlowOptions",o={unversionedId:"documentation/imap-flow-options",id:"documentation/imap-flow-options",title:"ImapFlowOptions",description:"Propri\xe9t\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/documentation/imap-flow-options.md",sourceDirName:"documentation",slug:"/documentation/imap-flow-options",permalink:"/fr/docs/documentation/imap-flow-options",draft:!1,editUrl:"https://github.com/Vsdparibas/imap-mailbox-doc/tree/master/docs/documentation/imap-flow-options.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ImapConfig",permalink:"/fr/docs/documentation/imap-config"},next:{title:"ImapFlowTls",permalink:"/fr/docs/documentation/imap-flow-tls"}},p={},d=[{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"imapflowoptions"},"ImapFlowOptions"),(0,r.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attributs"),(0,r.kt)("th",{parentName:"tr",align:null},"D\xe9faut"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Nom d'h\xf4te du serveur IMAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Num\xe9ro de port du serveur IMAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"La connexion doit-elle \xeatre \xe9tablie via TLS. Si ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", la connexion est mise \xe0 niveau vers TLS \xe0 l'aide de l'extension STARTTLS avant l'authentification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/imap-flow-auth"},(0,r.kt)("inlineCode",{parentName:"a"},"ImapFlowAuth"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Informations d'authentification. L'authentification est demand\xe9e automatiquement lors de start()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"servername"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Nom du serveur pour SNI (ou lorsque l'h\xf4te est d\xe9fini sur une adresse IP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableCompression"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," alors le client n'essaie pas d'utiliser l'extension COMPRESS=DEFLATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientInfo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/id-info-object"},(0,r.kt)("inlineCode",{parentName:"a"},"IdInfoObject"))),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Informations d'identification du client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableAutoIdle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," alors IDLE n'est pas d\xe9marr\xe9 automatiquement. Utile si vous avez seulement besoin d'effectuer des t\xe2ches sp\xe9cifiques via la connexion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tls"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/imap-flow-tls"},(0,r.kt)("inlineCode",{parentName:"a"},"ImapFlowTls"))),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Options TLS suppl\xe9mentaires (voir ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/tls.html#tls_tls_connect_options_callback"},"Node.js TLS connect")," pour toutes les options disponibles)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/documentation/imap-flow-logger"},(0,r.kt)("inlineCode",{parentName:"a"},"ImapFlowLogger"))," ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Instance de logs personnalis\xe9 ou ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logRaw"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," alors log les donn\xe9es lues et \xe9crites dans le socket encod\xe9 en base64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emitLogs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," alors en plus d'envoyer des donn\xe9es to logger, ImapFlow \xe9met des \xe9v\xe9nements 'log' avec les m\xeames donn\xe9es")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"verifyOnly"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," alors se d\xe9connecte automatiquement apr\xe8s une authentification r\xe9ussie")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URL proxy facultative. Prend en charge les proxys HTTP CONNECT (",(0,r.kt)("inlineCode",{parentName:"td"},"http://"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"https://"),") et SOCKS (",(0,r.kt)("inlineCode",{parentName:"td"},"socks://"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"socks4://"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"socks5://"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"qresync"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", active la prise en charge de QRESYNC. Les notifications EXPUNGE incluront la propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"td"},"uid")," au lieu de ",(0,r.kt)("inlineCode",{parentName:"td"},"seq"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxIdleTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"S'il est d\xe9fini, interrompt et red\xe9marre IDLE chaque maxIdleTime ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableBinary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Si ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ignore l'extension BINARY lors des appels FETCH et APPEND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableAutoEnable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"<","optional",">"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Ne pas activer les extensions prises en charge par d\xe9faut")))))}u.isMDXComponent=!0}}]);