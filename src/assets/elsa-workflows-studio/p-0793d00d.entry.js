import{r as e,a as s,h as t,H as a,c as i,d as l,e as o}from"./p-ee0b9025.js";import{l as n}from"./p-62312a9a.js";import{l as r,t as h,e as c}from"./p-fd4270fe.js";import{D as d}from"./p-3bc011d8.js";import{e as u}from"./p-d17a08e5.js";import"./p-f3f2f442.js";import{E as f}from"./p-ec6778d3.js";import"./p-f1ec68ec.js";import"./p-a3b5bd35.js";import{g as p,a as m}from"./p-6f3ac5fa.js";import"./p-82db2ff5.js";import"./p-949334ec.js";import{G as w}from"./p-b0baef6b.js";import{T as g}from"./p-96c5f56a.js";import{a as y}from"./p-d89b071e.js";import{c as b}from"./p-9d0a1097.js";import{t as v}from"./p-9c800894.js";import{a as x,c as k}from"./p-6cc453a9.js";import{f as j}from"./p-f4e44994.js";import{p as C}from"./p-faf758b2.js";import{p as W}from"./p-32ba7510.js";import{A as P}from"./p-1b1f9628.js";import"./p-80de33dc.js";import"./p-fe704386.js";import"./p-83f217d4.js";const D=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),R=e=>e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=e=>e.replace(/([=!:$/()])/g,"\\$1"),O=e=>e&&e.sensitive?"":"i",_=(e,s,t)=>{for(var a=(t=t||{}).strict,i=!1!==t.end,l=R(t.delimiter||"/"),o=t.delimiters||"./",n=[].concat(t.endsWith||[]).map(R).concat("$").join("|"),r="",h=!1,c=0;c<e.length;c++){var d=e[c];if("string"==typeof d)r+=R(d),h=c===e.length-1&&o.indexOf(d[d.length-1])>-1;else{var u=R(d.prefix||""),f=d.repeat?"(?:"+d.pattern+")(?:"+u+"(?:"+d.pattern+"))*":d.pattern;s&&s.push(d),r+=d.optional?d.partial?u+"("+f+")?":"(?:"+u+"("+f+"))?":u+"("+f+")"}}return i?(a||(r+="(?:"+l+")?"),r+="$"===n?"$":"(?="+n+")"):(a||(r+="(?:"+l+"(?="+n+"))?"),h||(r+="(?="+l+"|"+n+")")),new RegExp("^"+r,O(t))},I=(e,s,t)=>e instanceof RegExp?((e,s)=>{if(!s)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var a=0;a<t.length;a++)s.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e})(e,s):Array.isArray(e)?((e,s,t)=>{for(var a=[],i=0;i<e.length;i++)a.push(I(e[i],s,t).source);return new RegExp("(?:"+a.join("|")+")",O(t))})(e,s,t):((e,s,t)=>_(((e,s)=>{for(var t,a=[],i=0,l=0,o="",n=s&&s.delimiter||"/",r=s&&s.delimiters||"./",h=!1;null!==(t=D.exec(e));){var c=t[0],d=t[1],u=t.index;if(o+=e.slice(l,u),l=u+c.length,d)o+=d[1],h=!0;else{var f="",p=e[l],m=t[2],w=t[3],g=t[4],y=t[5];if(!h&&o.length){var b=o.length-1;r.indexOf(o[b])>-1&&(f=o[b],o=o.slice(0,b))}o&&(a.push(o),o="",h=!1);var v=f||n,x=w||g;a.push({name:m||i++,prefix:f,delimiter:v,optional:"?"===y||"*"===y,repeat:"+"===y||"*"===y,partial:""!==f&&void 0!==p&&p!==f,pattern:x?E(x):"[^"+R(v)+"]+?"})}}return(o||l<e.length)&&a.push(o+e.substr(l)),a})(e,t),s,t))(e,s,t),L=(e,s)=>new RegExp("^"+s+"(\\/|\\?|#|$)","i").test(e),M=(e,s)=>L(e,s)?e.substr(s.length):e,$=e=>"/"===e.charAt(e.length-1)?e.slice(0,-1):e,S=e=>"/"===e.charAt(0)?e:"/"+e,T=e=>"/"===e.charAt(0)?e.substr(1):e,A=e=>{const{pathname:s,search:t,hash:a}=e;let i=s||"/";return t&&"?"!==t&&(i+="?"===t.charAt(0)?t:`?${t}`),a&&"#"!==a&&(i+="#"===a.charAt(0)?a:`#${a}`),i},U=e=>"/"===e.charAt(0),H=e=>Math.random().toString(36).substr(2,e),N=(e,s)=>{for(let t=s,a=t+1,i=e.length;a<i;t+=1,a+=1)e[t]=e[a];e.pop()},z=(e,s)=>{if(e===s)return!0;if(null==e||null==s)return!1;if(Array.isArray(e))return Array.isArray(s)&&e.length===s.length&&e.every(((e,t)=>z(e,s[t])));const t=typeof e;if(t!==typeof s)return!1;if("object"===t){const t=e.valueOf(),a=s.valueOf();if(t!==e||a!==s)return z(t,a);const i=Object.keys(e),l=Object.keys(s);return i.length===l.length&&i.every((t=>z(e[t],s[t])))}return!1},B=(e,s,t,a)=>{let i;"string"==typeof e?(i=(e=>{let s=e||"/",t="",a="";const i=s.indexOf("#");-1!==i&&(a=s.substr(i),s=s.substr(0,i));const l=s.indexOf("?");return-1!==l&&(t=s.substr(l),s=s.substr(0,l)),{pathname:s,search:"?"===t?"":t,hash:"#"===a?"":a,query:{},key:""}})(e),void 0!==s&&(i.state=s)):(i=Object.assign({pathname:""},e),i.search&&"?"!==i.search.charAt(0)&&(i.search="?"+i.search),i.hash&&"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash),void 0!==s&&void 0===i.state&&(i.state=s));try{i.pathname=decodeURI(i.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}var l;return i.key=t,a?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=((e,s="")=>{let t,a=s&&s.split("/")||[],i=0;const l=e&&e.split("/")||[],o=e&&U(e),n=s&&U(s),r=o||n;if(e&&U(e)?a=l:l.length&&(a.pop(),a=a.concat(l)),!a.length)return"/";if(a.length){const e=a[a.length-1];t="."===e||".."===e||""===e}else t=!1;for(let e=a.length;e>=0;e--){const s=a[e];"."===s?N(a,e):".."===s?(N(a,e),i++):i&&(N(a,e),i--)}if(!r)for(;i--;i)a.unshift("..");!r||""===a[0]||a[0]&&U(a[0])||a.unshift("");let h=a.join("/");return t&&"/"!==h.substr(-1)&&(h+="/"),h})(i.pathname,a.pathname)):i.pathname=a.pathname:i.pathname||(i.pathname="/"),i.query=(l=i.search||"")?(/^[?#]/.test(l)?l.slice(1):l).split("&").reduce(((e,s)=>{let[t,a]=s.split("=");return e[t]=a?decodeURIComponent(a.replace(/\+/g," ")):"",e}),{}):{},i};let Y=0;const F={},J=(e,s={})=>{"string"==typeof s&&(s={path:s});const{path:t="/",exact:a=!1,strict:i=!1}=s,{re:l,keys:o}=((e,s)=>{const t=`${s.end}${s.strict}`,a=F[t]||(F[t]={}),i=JSON.stringify(e);if(a[i])return a[i];const l=[],o={re:I(e,l,s),keys:l};return Y<1e4&&(a[i]=o,Y+=1),o})(t,{end:a,strict:i}),n=l.exec(e);if(!n)return null;const[r,...h]=n,c=e===r;return a&&!c?null:{path:t,url:"/"===t&&""===r?"/":r,isExact:c,params:o.reduce(((e,s,t)=>(e[s.name]=h[t],e)),{})}};let V=class{constructor(s){e(this,s),this.context={},this.renderer=()=>null}connectedCallback(){null!=this.subscribe&&(this.unsubscribe=this.subscribe(this.el,"context"))}disconnectedCallback(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return s(this)}};const q={en:{default:{Yes:"Yes",No:"No"}},"zh-CN":{default:{Yes:"是",No:"否"}},"nl-NL":{default:{Yes:"Ja",No:"Nee"}},"fa-IR":{default:{Yes:"بله",No:"خیر"}},"de-DE":{default:{Yes:"Ja",No:"Nein"}}};let Q=class{constructor(s){e(this,s)}async show(e,s){return this.caption=e,this.message=s,await this.dialog.show(!0),new Promise(((e,s)=>{this.fulfill=e,this.reject=s}))}async hide(){await this.dialog.hide(!0)}async componentWillLoad(){this.i18next=await n(this.culture,q)}async onDismissClick(){this.fulfill(!1),await this.hide()}async onAcceptClick(){this.fulfill(!0),this.fulfill=null,this.reject=null,await this.hide()}render(){const e=e=>this.i18next.t(e);return t(a,null,t("elsa-modal-dialog",{ref:e=>this.dialog=e},t("div",{slot:"content",class:"elsa-py-8 elsa-px-4"},t("div",{class:"hidden sm:elsa-block elsa-absolute elsa-top-0 elsa-right-0 elsa-pt-4 elsa-pr-4"},t("button",{type:"button",onClick:()=>this.onDismissClick(),class:"elsa-bg-white elsa-rounded-md elsa-text-gray-400 hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},t("span",{class:"elsa-sr-only"},"Close"),t("svg",{class:"elsa-h-6 elsa-w-6","x-description":"Heroicon name: outline/x",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),t("div",{class:"sm:elsa-flex sm:elsa-items-start"},t("div",{class:"elsa-mx-auto elsa-flex-shrink-0 elsa-flex elsa-items-center elsa-justify-center elsa-h-12 elsa-w-12 elsa-rounded-full elsa-bg-red-100 sm:elsa-mx-0 sm:elsa-h-10 sm:elsa-w-10"},t("svg",{class:"elsa-h-6 elsa-w-6 elsa-text-red-600","x-description":"Heroicon name: outline/exclamation",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}))),t("div",{class:"elsa-mt-3 elsa-text-center sm:elsa-mt-0 sm:elsa-ml-4 sm:elsa-text-left"},t("h3",{class:"elsa-text-lg elsa-leading-6 elsa-font-medium elsa-text-gray-900",id:"modal-title"},this.caption),t("div",{class:"elsa-mt-2"},t("p",{class:"elsa-text-sm elsa-text-gray-500"},this.message))))),t("div",{slot:"buttons"},t("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},t("button",{type:"button",onClick:()=>this.onAcceptClick(),class:"elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-transparent elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-red-600 elsa-text-base elsa-font-medium elsa-text-white hover:elsa-bg-red-700 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-red-500 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},e("Yes")),t("button",{type:"button",onClick:()=>this.onDismissClick(),class:"elsa-mt-3 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:ring-indigo-500 sm:elsa-mt-0 sm:elsa-w-auto sm:elsa-text-sm"},e("No"))))))}},G=class{constructor(s){e(this,s),this.itemSelected=i(this,"itemSelected",7),this.btnClass=" elsa-w-full elsa-bg-white elsa-border elsa-border-gray-300 elsa-rounded-md elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-inline-flex elsa-justify-center elsa-text-sm elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500",this.origin=d.TopLeft,this.items=[]}onWindowClicked(e){this.element.contains(e.target)||this.closeContextMenu()}closeContextMenu(){this.contextMenu&&r(this.contextMenu)}toggleMenu(){this.contextMenu&&h(this.contextMenu)}getOriginClass(){switch(this.origin){case d.TopLeft:return"elsa-left-0 elsa-origin-top-left";case d.TopRight:default:return"elsa-right-0 elsa-origin-top-right"}}async onItemClick(e,s){e.preventDefault(),this.itemSelected.emit(s),this.closeContextMenu()}render(){return t("div",{class:"elsa-relative",ref:e=>this.element=e},t("button",{onClick:()=>this.toggleMenu(),type:"button",class:this.btnClass,"aria-haspopup":"true","aria-expanded":"false"},this.renderIcon(),this.text,t("svg",{class:"elsa-ml-2.5 -elsa-elsa-mr-1.5 elsa-h-5 elsa-w-5 elsa-text-gray-400","x-description":"Heroicon name: chevron-down",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}))),this.renderMenu())}renderMenu(){if(0==this.items.length)return;const e=this.getOriginClass();return t("div",{ref:e=>this.contextMenu=e,"data-transition-enter":"elsa-transition elsa-ease-out elsa-duration-100","data-transition-enter-start":"elsa-transform elsa-opacity-0 elsa-scale-95","data-transition-leave":"elsa-transition elsa-ease-in elsa-duration-75","data-transition-leave-start":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave-end":"elsa-transform elsa-opacity-0 elsa-scale-95",class:`hidden ${e} elsa-z-10 elsa-absolute elsa-mt-2 elsa-w-56 elsa-rounded-md elsa-shadow-lg elsa-bg-white elsa-ring-1 elsa-ring-black elsa-ring-opacity-5`},t("div",{class:"elsa-py-1",role:"menu","aria-orientation":"vertical"},this.renderItems()))}renderItems(){return this.items.map((e=>{const s=e.isSelected?"elsa-bg-blue-600 hover:elsa-bg-blue-700 elsa-text-white":"hover:elsa-bg-gray-100 elsa-text-gray-700 hover:elsa-text-gray-900";return e.url?t("stencil-route-link",{onClick:()=>this.closeContextMenu(),url:e.url,anchorClass:`elsa-block elsa-px-4 elsa-py-2 elsa-text-sm ${s} elsa-cursor-pointer`,role:"menuitem"},e.text):t("a",{href:"#",onClick:s=>this.onItemClick(s,e),class:`elsa-block elsa-px-4 elsa-py-2 elsa-text-sm ${s}`,role:"menuitem"},e.text)}))}renderIcon(){if(this.icon)return this.icon}};G.style="";let K=class{constructor(s){e(this,s),this.shown=i(this,"shown",7),this.hidden=i(this,"hidden",7),this.handleDefaultClose=async()=>{await this.hide()}}render(){return this.renderModal()}async show(e=!0){this.showInternal(e)}async hide(e=!0){await u.emit(f.HideModalDialog),this.hideInternal(e)}showInternal(e){this.isVisible=!0,e||(this.overlay.style.opacity="1",this.modal.style.opacity="1"),c(this.overlay),c(this.modal).then(this.shown.emit)}hideInternal(e){e||(this.isVisible=!1),r(this.overlay),r(this.modal).then((()=>{this.isVisible=!1,this.hidden.emit()}))}async handleKeyDown(e){this.isVisible&&"Escape"===e.key&&await this.hide(!0)}renderModal(){return t(a,{class:{hidden:!this.isVisible,"elsa-block":!0}},t("div",{class:"elsa-fixed elsa-z-10 elsa-inset-0 elsa-overflow-y-auto"},t("div",{class:"elsa-flex elsa-items-end elsa-justify-center elsa-min-h-screen elsa-pt-4 elsa-px-4 elsa-pb-20 elsa-text-center sm:elsa-block sm:elsa-p-0"},t("div",{ref:e=>this.overlay=e,onClick:()=>this.hide(!0),"data-transition-enter":"elsa-ease-out elsa-duration-300","data-transition-enter-start":"elsa-opacity-0","data-transition-enter-end":"elsa-opacity-0","data-transition-leave":"elsa-ease-in elsa-duration-200","data-transition-leave-start":"elsa-opacity-0","data-transition-leave-end":"elsa-opacity-0",class:"hidden elsa-fixed elsa-inset-0 elsa-transition-opacity","aria-hidden":"true"},t("div",{class:"elsa-absolute elsa-inset-0 elsa-bg-gray-500 elsa-opacity-75"})),t("span",{class:"hidden sm:elsa-inline-block sm:elsa-align-middle sm:elsa-h-screen","aria-hidden":"true"}),t("div",{ref:e=>this.modal=e,"data-transition-enter":"elsa-ease-out elsa-duration-300","data-transition-enter-start":"elsa-opacity-0 elsa-translate-y-4 sm:elsa-translate-y-0 sm:elsa-scale-95","data-transition-enter-end":"elsa-opacity-0 elsa-translate-y-0 sm:elsa-scale-100","data-transition-leave":"elsa-ease-in elsa-duration-200","data-transition-leave-start":"elsa-opacity-0 elsa-translate-y-0 sm:elsa-scale-100","data-transition-leave-end":"elsa-opacity-0 elsa-translate-y-4 sm:elsa-translate-y-0 sm:elsa-scale-95",class:"hidden elsa-inline-block sm:elsa-align-top elsa-bg-white elsa-rounded-lg elsa-text-left elsa-overflow-visible elsa-shadow-xl elsa-transform elsa-transition-all sm:elsa-my-8 sm:elsa-align-top sm:elsa-max-w-4xl sm:elsa-w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},t("div",{class:"modal-content"},t("slot",{name:"content"})),t("slot",{name:"buttons"},t("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},t("button",{type:"button",onClick:this.handleDefaultClose,class:"elsa-mt-3 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-mt-0 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},"Close")))))))}};const X={en:{default:{WorkflowDefinitions:"Workflow Definitions",WorkflowInstances:"Workflow Instances",WorkflowRegistry:"Workflow Registry",WebhookDefinitions:"Webhook Definitions"}},"zh-CN":{default:{WorkflowDefinitions:"工作流定义",WorkflowInstances:"工作流实例",WorkflowRegistry:"工作流程注册表",WebhookDefinitions:"Webhook定义"}},"nl-NL":{default:{WorkflowDefinitions:"Workflow Definities",WorkflowInstances:"Workflows",WorkflowRegistry:"Workflow Register",WebhookDefinitions:"Webhook Definities"}},"fa-IR":{default:{WorkflowDefinitions:"فرآیندها",WorkflowInstances:"فرآیندهای اجرا شده",WorkflowRegistry:"Workflow Registry",WebhookDefinitions:"مشخصات Webhookها"}},"es-ES":{default:{WorkflowDefinitions:"Definiciones de flujos",WorkflowInstances:"Ejecuciones de flujos",WorkflowRegistry:"Registro de flujos",WebhookDefinitions:"Definiciones de webhooks"},menuItems:{"workflow-definitions":"Definiciones de flujos","workflow-instances":"Ejecuciones de flujos","workflow-registry":"Registro de flujos"}},"de-DE":{default:{WorkflowDefinitions:"Ablaufdefinitionen",WorkflowInstances:"Ablaufinstanzen",WorkflowRegistry:"Ablaufverzeichnis",WebhookDefinitions:"Webhook Definitionen"},menuItems:{"workflow-definitions":"Ablaufdefinitionen","workflow-instances":"Ablaufinstanzen","workflow-registry":"Ablaufverzeichnis"}}};let Z=class{constructor(s){e(this,s),this.basePath="",this.dashboardMenu={data:{menuItems:[["workflow-definitions","Workflow Definitions"],["workflow-instances","Workflow Instances"],["workflow-registry","Workflow Registry"]],routes:[["","elsa-studio-home",!0],["workflow-registry","elsa-studio-workflow-registry",!0],["workflow-registry/:id","elsa-studio-workflow-blueprint-view"],["workflow-definitions","elsa-studio-workflow-definitions-list",!0],["workflow-definitions/:id","elsa-studio-workflow-definitions-edit"],["workflow-instances","elsa-studio-workflow-instances-list",!0],["workflow-instances/:id","elsa-studio-workflow-instances-view"]]}}}async componentWillLoad(){this.i18next=await n(this.culture,X),await u.emit(f.Dashboard.Appearing,this,this.dashboardMenu)}render(){const e=l("./assets/logo.png"),s=this.basePath||"",a=w(this.i18next);let i=(null!=this.dashboardMenu.data?this.dashboardMenu.data.menuItems:[]).map((([e,s])=>this.i18next.exists(`menuItems:${e}`)?[e,this.i18next.t(`menuItems:${e}`)]:[e,s])),o=null!=this.dashboardMenu.data?this.dashboardMenu.data.routes:[];return t("div",{class:"elsa-h-screen elsa-bg-gray-100"},t("nav",{class:"elsa-bg-gray-800"},t("div",{class:"elsa-px-4 sm:elsa-px-6 lg:elsa-px-8"},t("div",{class:"elsa-flex elsa-items-center elsa-justify-between elsa-h-16"},t("div",{class:"elsa-flex elsa-items-center"},t("div",{class:"elsa-flex-shrink-0"},t("stencil-route-link",{url:`${s}/`},t("img",{class:"elsa-h-8 elsa-w-8",src:e,alt:"Workflow"}))),t("div",{class:"hidden md:elsa-block"},t("div",{class:"elsa-ml-10 elsa-flex elsa-items-baseline elsa-space-x-4"},i.map((e=>((e,s)=>t("stencil-route-link",{url:`${s}/${e[0]}`,anchorClass:"elsa-text-gray-300 hover:elsa-bg-gray-700 hover:elsa-text-white elsa-px-3 elsa-py-2 elsa-rounded-md elsa-text-sm elsa-font-medium",activeClass:"elsa-text-white elsa-bg-gray-900"},t(a,{label:`${e[1]}`})))(e,s)))))),t("elsa-user-context-menu",null)))),t("main",null,t("stencil-router",null,t("stencil-route-switch",{scrollTopOffset:0},o.map((e=>((e,s)=>t("stencil-route",{url:`${s}/${e[0]}`,component:`${e[1]}`,exact:e[2]}))(e,s)))))))}static get assetsDirs(){return["assets"]}};g.injectProps(Z,["culture","basePath"]);let ee=class{constructor(s){e(this,s),this.initializing=i(this,"initializing",7),this.initialized=i(this,"initialized",7),this.basePath="",this.onShowConfirmDialog=e=>e.promise=this.confirmDialog.show(e.caption,e.message),this.onHideConfirmDialog=async()=>await this.confirmDialog.hide(),this.onShowToastNotification=async e=>await this.toastNotificationElement.show(e),this.onHideToastNotification=async()=>await this.toastNotificationElement.hide()}async addPlugins(e){C.registerPlugins(e)}async addPlugin(e){C.registerPlugin(e)}workflowChangedHandler(e){u.emit(f.WorkflowModelChanged,this,e.detail)}connectedCallback(){u.on(f.ShowConfirmDialog,this.onShowConfirmDialog),u.on(f.HideConfirmDialog,this.onHideConfirmDialog),u.on(f.ShowToastNotification,this.onShowToastNotification),u.on(f.HideToastNotification,this.onHideToastNotification)}disconnectedCallback(){u.detach(f.ShowConfirmDialog,this.onShowConfirmDialog),u.detach(f.HideConfirmDialog,this.onHideConfirmDialog),u.detach(f.ShowToastNotification,this.onShowToastNotification),u.detach(f.HideToastNotification,this.onHideToastNotification)}async componentWillLoad(){const e=()=>x(this.serverUrl);this.config&&await fetch(`${document.location.origin}/${this.config}`).then((e=>{if(!e.ok)throw new Error("HTTP error "+e.status);return e.json()})).then((e=>{this.featuresConfig=e})).catch((e=>{console.error(e)}));const s=this.elsaStudio={serverUrl:this.serverUrl,basePath:this.basePath,features:this.featuresConfig,serverFeatures:[],serverVersion:null,eventBus:u,pluginManager:C,propertyDisplayManager:W,activityIconProvider:y,confirmDialogService:b,toastNotificationService:v,elsaClientFactory:e,httpClientFactory:()=>k(this.serverUrl),getOrCreateProperty:p,htmlToElement:m};this.initializing.emit(s),C.initialize(s),await u.emit(f.Root.Initializing),W.initialize(s),j.initialize(s);const t=await e();s.serverFeatures=await t.featuresApi.list(),s.serverVersion=await t.versionApi.get()}async componentDidLoad(){this.initialized.emit(this.elsaStudio),await u.emit(f.Root.Initialized)}render(){return t(g.Provider,{state:{serverUrl:this.serverUrl,basePath:this.basePath,serverFeatures:this.elsaStudio.serverFeatures,serverVersion:this.elsaStudio.serverVersion,culture:this.culture,monacoLibPath:this.monacoLibPath}},t("slot",null),t("elsa-confirm-dialog",{ref:e=>this.confirmDialog=e,culture:this.culture}),t("elsa-toast-notification",{ref:e=>this.toastNotificationElement=e}))}},se=class{constructor(s){e(this,s),this.isVisible=!1}async show(e){this.isVisible=!0,c(this.toast),e.autoCloseIn&&setTimeout((async()=>await this.hide()),e.autoCloseIn),this.title=e.title,this.message=e.message}async hide(){r(this.toast).then((()=>this.isVisible=!1))}render(){return this.renderToast()}renderToast(){return t(a,{class:{hidden:!this.isVisible,"elsa-block":!0}},t("div",{class:"elsa-fixed elsa-inset-0 elsa-z-20 elsa-flex elsa-items-end elsa-justify-center elsa-px-4 elsa-py-6 elsa-pointer-events-none sm:elsa-p-6 sm:elsa-items-start sm:elsa-justify-end"},t("div",{ref:e=>this.toast=e,"data-transition-enter":"elsa-transform elsa-ease-out elsa-duration-300 elsa-transition","data-transition-enter-start":"elsa-translate-y-2 elsa-opacity-0 sm:elsa-translate-y-0 sm:elsa-translate-x-2","data-transition-enter-end":"elsa-translate-y-0 elsa-opacity-100 sm:elsa-translate-x-0","data-transition-leave":"elsa-transition elsa-ease-in elsa-duration-100","data-transition-leave-start":"elsa-opacity-0","data-transition-leave-end":"elsa-opacity-0",class:"elsa-max-w-sm elsa-w-full elsa-bg-white elsa-shadow-lg elsa-rounded-lg elsa-pointer-events-auto elsa-ring-1 elsa-ring-black elsa-ring-opacity-5 elsa-overflow-hidden"},t("div",{class:"elsa-p-4"},t("div",{class:"elsa-flex elsa-items-start"},t("div",{class:"elsa-flex-shrink-0"},t("svg",{class:"elsa-h-6 elsa-w-6 elsa-text-green-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))),t("div",{class:"elsa-ml-3 elsa-w-0 elsa-flex-1 elsa-pt-0.5"},this.renderTitle(),t("p",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-500"},this.message)),t("div",{class:"elsa-ml-4 elsa-flex-shrink-0 elsa-flex"},t("button",{class:"elsa-bg-white elsa-rounded-md elsa-inline-flex elsa-text-gray-400 hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},t("span",{class:"elsa-sr-only"},"Close"),t("svg",{class:"elsa-h-5 elsa-w-5","x-description":"Heroicon name: solid/x",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})))))))))}renderTitle(){if(this.title&&0!=this.title.length)return t("p",{class:"elsa-text-sm elsa-font-medium elsa-text-gray-900"},this.title)}},te=class{constructor(s){e(this,s),this.userDetail=null,this.logoutStrategy={OpenIdConnect:function(){window.location.href="v1/ElsaAuthentication/logout"},ServerManagedCookie:function(){window.location.href="v1/ElsaAuthentication/logout"},JwtBearerToken:""}}async componentWillRender(){try{this.userDetail=await await(await x(this.serverUrl)).authenticationApi.getUserDetails(),this.authenticationConfguration=await await(await x(this.serverUrl)).authenticationApi.getAuthenticationConfguration()}catch(e){this.userDetail=null}}async menuItemSelected(e){"logout"==e.value&&this.authenticationConfguration.authenticationStyles.forEach((e=>{this.logoutStrategy[e]()}))}render(){if(null==this.userDetail)return"";const e=[{text:"logout",value:"logout"}].map((e=>({text:e.text,isSelected:!1,value:e.value})));return t("elsa-dropdown-button",{text:this.userDetail.name,items:e,btnClass:"elsa-bg-gray-800 elsa-text-gray-300 elsa-w-full   elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-inline-flex elsa-justify-center elsa-text-sm elsa-font-medium",origin:d.TopRight,onItemSelected:e=>this.menuItemSelected(e.detail)})}};g.injectProps(te,["serverUrl"]);let ae=class{constructor(s){e(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(e){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(e&&!s)return this.previousMatch=this.match,this.match=J(e.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let e={};var s,t;this.history&&this.history.location.hash?e={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(e={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(e):!this.match||(t=this.previousMatch,null==(s=this.match)&&null==t||null!=t&&s&&t&&s.path===t.path&&s.url===t.url&&z(s.params,t.params))||!this.routeViewsUpdated||this.routeViewsUpdated(e)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};P.injectProps(ae,["location","history","historyType","routeViewsUpdated"]),ae.style="";const ie=(e,s,t)=>t(e.confirm(s)),le=(e,s)=>{const t=e[s],a="__storage_test__";try{return t.setItem(a,a),t.removeItem(a),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}};let oe=class{constructor(s){e(this,s),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=J(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(e){var s,t,a;if(!((s=e).metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&this.history&&this.url&&this.root)return e.preventDefault(),this.history.push((a=this.root,"/"==(t=this.url).charAt(0)&&"/"==a.charAt(a.length-1)?a.slice(0,a.length-1)+t:a+t))}render(){let e={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(e.class[this.anchorClass]=!0),"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),t(this.custom,Object.assign({},e),t("slot",null))}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};P.injectProps(oe,["history","location","root"]);const ne=e=>"STENCIL-ROUTE"===e.tagName;let re=class{constructor(s){e(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(e){if(null==e)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(ne).map(((t,a)=>{const i=J(e.pathname,{path:t.url,exact:t.exact,strict:!0});return i&&-1===s&&(s=a),{el:t,match:i}})),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const t=this.subscribers[this.activeIndex];this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=t.match,t.el.componentUpdated=e=>{this.queue.write((()=>{this.subscribers.forEach(((e,s)=>{if(e.el.componentUpdated=void 0,s===this.activeIndex)return e.el.style.display="";this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=null,e.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},e))}}render(){return t("slot",null)}get el(){return s(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};P.injectProps(re,["location","routeViewsUpdated"]);const he=(e,...s)=>{e||console.warn(...s)},ce=()=>{let e,s=[];return{setPrompt:s=>(he(null==e,"A history supports only one prompt at a time"),e=s,()=>{e===s&&(e=null)}),confirmTransitionTo:(s,t,a,i)=>{if(null!=e){const l="function"==typeof e?e(s,t):e;"string"==typeof l?"function"==typeof a?a(l,i):(he(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==l)}else i(!0)},appendListener:e=>{let t=!0;const a=(...s)=>{t&&e(...s)};return s.push(a),()=>{t=!1,s=s.filter((e=>e!==a))}},notifyListeners:(...e)=>{s.forEach((s=>s(...e)))}}},de=(e,s="scrollPositions")=>{let t=new Map;const a=(s,a)=>{if(t.set(s,a),le(e,"sessionStorage")){const s=[];t.forEach(((e,t)=>{s.push([t,e])})),e.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(le(e,"sessionStorage")){const a=e.sessionStorage.getItem(s);t=a?new Map(JSON.parse(a)):t}return"scrollRestoration"in e.history&&(history.scrollRestoration="manual"),{set:a,get:e=>t.get(e),has:e=>t.has(e),capture:s=>{a(s,[e.scrollX,e.scrollY])}}},ue={hashbang:{encodePath:e=>"!"===e.charAt(0)?e:"!/"+T(e),decodePath:e=>"!"===e.charAt(0)?e.substr(1):e},noslash:{encodePath:T,decodePath:S},slash:{encodePath:S,decodePath:S}},fe=(e,s)=>{const t=0==e.pathname.indexOf(s)?"/"+e.pathname.slice(s.length):e.pathname;return Object.assign({},e,{pathname:t})},pe={browser:(e,s={})=>{let t=!1;const a=e.history,i=e.location,l=e.navigator,o=(e=>{const s=e.navigator.userAgent;return(-1===s.indexOf("Android 2.")&&-1===s.indexOf("Android 4.0")||-1===s.indexOf("Mobile Safari")||-1!==s.indexOf("Chrome")||-1!==s.indexOf("Windows Phone"))&&e.history&&"pushState"in e.history})(e),n=!(-1===l.userAgent.indexOf("Trident")),r=de(e),h=null!=s.forceRefresh&&s.forceRefresh,c=null!=s.getUserConfirmation?s.getUserConfirmation:ie,d=null!=s.keyLength?s.keyLength:6,u=s.basename?$(S(s.basename)):"",f=()=>{try{return e.history.state||{}}catch(e){return{}}},p=e=>{e=e||{};const{key:s,state:t}=e,{pathname:a,search:l,hash:o}=i;let n=a+l+o;return he(!u||L(n,u),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+n+'" to begin with "'+u+'".'),u&&(n=M(n,u)),B(n,t,s||H(d))},m=ce(),w=e=>{r.capture(R.location.key),Object.assign(R,e),R.location.scrollPosition=r.get(R.location.key),R.length=a.length,m.notifyListeners(R.location,R.action)},g=e=>{((e,s)=>void 0===s.state&&-1===e.userAgent.indexOf("CriOS"))(l,e)||b(p(e.state))},y=()=>{b(p(f()))},b=e=>{if(t)t=!1,w();else{const s="POP";m.confirmTransitionTo(e,s,c,(t=>{t?w({action:s,location:e}):v(e)}))}},v=e=>{let s=k.indexOf(R.location.key),a=k.indexOf(e.key);-1===s&&(s=0),-1===a&&(a=0);const i=s-a;i&&(t=!0,P(i))},x=p(f());let k=[x.key],j=0,C=!1;const W=e=>u+A(e),P=e=>{a.go(e)},D=s=>{j+=s,1===j?(e.addEventListener("popstate",g),n&&e.addEventListener("hashchange",y)):0===j&&(e.removeEventListener("popstate",g),n&&e.removeEventListener("hashchange",y))},R={length:a.length,action:"POP",location:x,createHref:W,push:(e,s)=>{he(!("object"==typeof e&&void 0!==e.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const t="PUSH",l=B(e,s,H(d),R.location);m.confirmTransitionTo(l,t,c,(e=>{if(!e)return;const s=W(l),{key:n,state:r}=l;if(o)if(a.pushState({key:n,state:r},"",s),h)i.href=s;else{const e=k.indexOf(R.location.key),s=k.slice(0,-1===e?0:e+1);s.push(l.key),k=s,w({action:t,location:l})}else he(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),i.href=s}))},replace:(e,s)=>{he(!("object"==typeof e&&void 0!==e.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const t="REPLACE",l=B(e,s,H(d),R.location);m.confirmTransitionTo(l,t,c,(e=>{if(!e)return;const s=W(l),{key:n,state:r}=l;if(o)if(a.replaceState({key:n,state:r},"",s),h)i.replace(s);else{const e=k.indexOf(R.location.key);-1!==e&&(k[e]=l.key),w({action:t,location:l})}else he(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),i.replace(s)}))},go:P,goBack:()=>P(-1),goForward:()=>P(1),block:(e="")=>{const s=m.setPrompt(e);return C||(D(1),C=!0),()=>(C&&(C=!1,D(-1)),s())},listen:e=>{const s=m.appendListener(e);return D(1),()=>{D(-1),s()}},win:e};return R},hash:(e,s={})=>{let t=!1,a=null,i=0,l=!1;const o=e.location,n=e.history,r=-1===e.navigator.userAgent.indexOf("Firefox"),h=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:c=ie,hashType:d="slash"}=s,u=s.basename?$(S(s.basename)):"",{encodePath:f,decodePath:p}=ue[d],m=()=>{const e=o.href,s=e.indexOf("#");return-1===s?"":e.substring(s+1)},w=e=>{const s=o.href.indexOf("#");o.replace(o.href.slice(0,s>=0?s:0)+"#"+e)},g=()=>{let e=p(m());return he(!u||L(e,u),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+u+'".'),u&&(e=M(e,u)),B(e,void 0,H(h))},y=ce(),b=e=>{Object.assign(E,e),E.length=n.length,y.notifyListeners(E.location,E.action)},v=()=>{const e=m(),s=f(e);if(e!==s)w(s);else{const e=g(),s=E.location;if(!t&&(i=s).pathname===(l=e).pathname&&i.search===l.search&&i.hash===l.hash&&i.key===l.key&&z(i.state,l.state))return;if(a===A(e))return;a=null,x(e)}var i,l},x=e=>{if(t)t=!1,b();else{const s="POP";y.confirmTransitionTo(e,s,c,(t=>{t?b({action:s,location:e}):k(e)}))}},k=e=>{let s=P.lastIndexOf(A(E.location)),a=P.lastIndexOf(A(e));-1===s&&(s=0),-1===a&&(a=0);const i=s-a;i&&(t=!0,D(i))},j=m(),C=f(j);j!==C&&w(C);const W=g();let P=[A(W)];const D=e=>{he(r,"Hash history go(n) causes a full page reload in this browser"),n.go(e)},R=(e,s)=>{i+=s,1===i?e.addEventListener("hashchange",v):0===i&&e.removeEventListener("hashchange",v)},E={length:n.length,action:"POP",location:W,createHref:e=>"#"+f(u+A(e)),push:(e,s)=>{he(void 0===s,"Hash history cannot push state; it is ignored");const t="PUSH",i=B(e,void 0,H(h),E.location);y.confirmTransitionTo(i,t,c,(e=>{if(!e)return;const s=A(i),l=f(u+s);if(m()!==l){a=s,(e=>{o.hash=e})(l);const e=P.lastIndexOf(A(E.location)),n=P.slice(0,-1===e?0:e+1);n.push(s),P=n,b({action:t,location:i})}else he(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),b()}))},replace:(e,s)=>{he(void 0===s,"Hash history cannot replace state; it is ignored");const t="REPLACE",i=B(e,void 0,H(h),E.location);y.confirmTransitionTo(i,t,c,(e=>{if(!e)return;const s=A(i),l=f(u+s);m()!==l&&(a=s,w(l));const o=P.indexOf(A(E.location));-1!==o&&(P[o]=s),b({action:t,location:i})}))},go:D,goBack:()=>D(-1),goForward:()=>D(1),block:(s="")=>{const t=y.setPrompt(s);return l||(R(e,1),l=!0),()=>(l&&(l=!1,R(e,-1)),t())},listen:s=>{const t=y.appendListener(s);return R(e,1),()=>{R(e,-1),t()}},win:e};return E}};let me=class{constructor(s){e(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(e={})=>{if(this.history&&e.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(e.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(e.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=pe[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((e=>{e=fe(e,this.root),this.location=e})),this.location=fe(this.history.location,this.root)}scrollTo(e){const s=this.history;if(null!=e&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write((()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])})):this.queue.write((()=>{s.win.scrollTo(0,e)}))}render(){if(this.location&&this.history)return t(P.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}get el(){return s(this)}};export{V as context_consumer,Q as elsa_confirm_dialog,G as elsa_dropdown_button,K as elsa_modal_dialog,Z as elsa_studio_dashboard,ee as elsa_studio_root,se as elsa_toast_notification,te as elsa_user_context_menu,ae as stencil_route,oe as stencil_route_link,re as stencil_route_switch,me as stencil_router}