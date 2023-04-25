import{r as e,h as s,H as a}from"./p-ee0b9025.js";import"./p-f3f2f442.js";import{e as t}from"./p-d17a08e5.js";import"./p-f1ec68ec.js";import"./p-a3b5bd35.js";import"./p-6f3ac5fa.js";import"./p-82db2ff5.js";import"./p-949334ec.js";import"./p-88678d9c.js";import{T as l}from"./p-96c5f56a.js";import{c as i}from"./p-bc995f78.js";import{c as r}from"./p-6cc453a9.js";import{S as n}from"./p-e7abd395.js";import{i as o}from"./p-98ec5185.js";import{r as c}from"./p-4a75a7a1.js";import{l as d}from"./p-62312a9a.js";import{p}from"./p-32ba7510.js";import{F as u,t as y}from"./p-7aa9135d.js";import"./p-80de33dc.js";import"./p-83f217d4.js";import"./p-ec6778d3.js";let m=null;const h=async function(e){if(m)return m;const s=await r(e);return m={secretsApi:{list:async()=>(await s.get("v1/secrets")).data,save:async e=>(await s.post("v1/secrets",e)).data,delete:async e=>{await s.delete(`v1/secrets/${e}`)}}},m};let g=class{constructor(s){e(this,s),this.secrets=[],this.onSecretPicked=async e=>{const s=this.newSecret(e);await this.showSecretEditorInternal(s,!1)}}async componentWillLoad(){await this.loadSecrets(),t.on(n.SecretPicked,this.onSecretPicked),t.on(n.UpdateSecret,this.onUpdateSecret),t.on(n.SecretUpdated,(()=>this.loadSecrets()))}async onUpdateSecret(e){const s=await h(this.serverUrl);await s.secretsApi.save(e),this.secrets=await s.secretsApi.list()}async onSecretEdit(e,s){const a={id:s.id,displayName:s.displayName,name:s.name,type:s.type,properties:this.mapProperties(s.properties)};await this.showSecretEditorInternal(a,!0)}mapProperties(e){return e.map((e=>({expressions:{Literal:e.expressions.Literal},name:e.name})))}async showSecretEditorInternal(e,s){await t.emit(n.SecretsEditor.Show,this,e,s)}newSecret(e){const s={type:e.type,displayName:e.displayName,properties:[]};for(const a of e.inputProperties)s.properties[a.name]={syntax:"",expression:""};return s}async onDeleteClick(e,s){if(!await this.confirmDialog.show("Delete Secret","Are you sure you wish to permanently delete this secret?"))return;const a=await h(this.serverUrl);await a.secretsApi.delete(s.id),await this.loadSecrets()}async loadSecrets(){const e=await h(this.serverUrl);this.secrets=await e.secretsApi.list()}render(){const e=this.secrets;return s("div",null,s("div",{class:"elsa-align-middle elsa-inline-block elsa-min-w-full elsa-border-b elsa-border-gray-200"},s("table",{class:"elsa-min-w-full"},s("thead",null,s("tr",{class:"elsa-border-t elsa-border-gray-200"},s("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},s("span",{class:"lg:elsa-pl-2"},"Name")),s("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},"Type"),s("th",{class:"elsa-pr-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-right elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"}))),s("tbody",{class:"elsa-bg-white elsa-divide-y elsa-divide-gray-100"},null==e?void 0:e.map((e=>{const a=s("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},s("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),s("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})),t=s("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},s("path",{stroke:"none",d:"M0 0h24v24H0z"}),s("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),s("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),s("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),s("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),s("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}));return s("tr",null,s("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900"},s("div",{class:"elsa-flex elsa-items-center elsa-space-x-3 lg:elsa-pl-2"},e.name)),s("td",{class:"elsa-px-6 elsa-py-3 elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-font-medium"},s("div",{class:"elsa-flex elsa-items-center elsa-space-x-3 lg:elsa-pl-2"},e.type)),s("td",{class:"elsa-pr-6"},s("elsa-context-menu",{history:this.history,menuItems:[{text:"Edit",clickHandler:s=>this.onSecretEdit(s,e),icon:a},{text:"Delete",clickHandler:s=>this.onDeleteClick(s,e),icon:t}]})))}))))),s("elsa-confirm-dialog",{ref:e=>this.confirmDialog=e}))}};l.injectProps(g,["serverUrl","culture","basePath"]);const{state:b}=i({secretsDescriptors:[]});let f=class{constructor(s){e(this,s),this.renderProps={},this.timestamp=new Date,this.t=e=>this.i18next.t(e),this.onSubmit=async e=>{e.preventDefault();const s=new FormData(e.target);this.updateSecret(s),await t.emit(n.UpdateSecret,this,this.secretModel),await this.hide(!0),await t.emit(n.SecretUpdated,this,this.secretModel)},this.onShowSecretEditor=async(e,s)=>{this.secretModel=JSON.parse(JSON.stringify(e)),this.secretDescriptor=b.secretsDescriptors.find((s=>s.type==e.type)),this.formContext=new u(this.secretModel,(e=>this.secretModel=e)),this.timestamp=new Date,this.renderProps={},await this.show(s)},this.show=async e=>await this.dialog.show(e),this.hide=async e=>await this.dialog.hide(e),this.onKeyDown=async e=>{e.ctrlKey&&"Enter"===e.key&&this.dialog.querySelector('button[type="submit"]').click()}}connectedCallback(){t.on(n.SecretsEditor.Show,this.onShowSecretEditor)}disconnectedCallback(){t.detach(n.SecretsEditor.Show,this.onShowSecretEditor)}async componentWillLoad(){await o("build/assets/js/monaco-editor/min"),this.i18next=await d(this.culture,c)}updateSecret(e){const s=this.secretModel,a=this.secretDescriptor.inputProperties;for(const t of a)p.update(s,t,e)}async componentWillRender(){const e=this.secretDescriptor||{displayName:"",type:"",outcomes:[],category:"",browsable:!1,inputProperties:[],description:"",customAttributes:{}},s=e.inputProperties.filter((e=>!e.category||0==e.category.length));this.renderProps={secretDescriptor:e,secretModel:this.secretModel||{type:"",id:"",properties:[]},defaultProperties:s}}async onCancelClick(){await this.hide(!0)}render(){const e=this.renderProps.secretDescriptor,t=this.secretModel;return s(a,{class:"elsa-block"},s("elsa-modal-dialog",{ref:e=>this.dialog=e},s("div",{slot:"content",class:"elsa-py-8 elsa-pb-0"},s("form",{onSubmit:e=>this.onSubmit(e),key:this.timestamp.getTime().toString(),onKeyDown:this.onKeyDown,class:"activity-editor-form"},s("div",{class:"elsa-flex elsa-px-8"},s("div",{class:"elsa-space-y-8 elsa-divide-y elsa-divide-gray-200 elsa-w-full"},s("div",null,s("div",null,s("h3",{class:"elsa-text-lg elsa-leading-6 elsa-font-medium elsa-text-gray-900"},e.type),s("p",{class:"elsa-mt-1 elsa-text-sm elsa-text-gray-500"},e.description)),s("div",{class:"elsa-mt-8"},this.renderProperties(t))))),s("div",{class:"elsa-pt-5"},s("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},s("button",{type:"submit",class:"elsa-ml-3 elsa-inline-flex elsa-justify-center elsa-py-2 elsa-px-4 elsa-border elsa-border-transparent elsa-shadow-sm elsa-text-sm elsa-font-medium elsa-rounded-md elsa-text-white elsa-bg-blue-600 hover:elsa-bg-blue-700 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500"},"Save"),s("button",{type:"button",onClick:()=>this.onCancelClick(),class:"elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-mt-0 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},"Cancel"))))),s("div",{slot:"buttons"})))}renderProperties(e){const a=this.renderProps.defaultProperties,t=this.formContext;if(0==a.length)return;const l=`secret-settings:${e.id}`;return s("div",null,s("div",{class:"elsa-w-full"},y(t,"name","Name",e.name,"Secret's name","secretName"),y(t,"type","Type",e.displayName,"Secret's type","secretDisplayName",!0)),s("div",{class:"elsa-mt-6"},s("div",{key:l,class:"elsa-grid elsa-grid-cols-1 elsa-gap-y-6 elsa-gap-x-4 sm:elsa-grid-cols-6"},a.map((s=>this.renderPropertyEditor(e,s))))))}renderPropertyEditor(e,a){const t=`secret-property-input:${e.id}:${a.name}`,l=p.display(e,a);return s("elsa-control",{key:t,id:`${a.name}Control`,class:"sm:elsa-col-span-6",content:l})}};const w=e=>{const s=e.color||"sky";return`<span class="elsa-rounded-lg elsa-inline-flex elsa-p-3 elsa-bg-${s}-50 elsa-text-${s}-700 elsa-ring-4 elsa-ring-white">\n      <svg class="elsa-h-6 elsa-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">\n        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="21 12 17 12 14 20 10 4 7 12 3 12"/>\n      </svg>\n    </span>`},x={category:"AMPQ",customAttributes:{},description:"AMPQ connection data",displayName:"AMPQ secret",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Hostname",name:"hostname",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Port",name:"port",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"User",name:"user",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"password",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Transport Type",name:"transport_type",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"AMPQ"},S={category:"Sql",customAttributes:{},description:"Sql connection data",displayName:"PostgreSql secret",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Host",name:"Host",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Port",name:"Port",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Database",name:"Database",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Username",name:"Username",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"Password",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"PostgreSql"},v={category:"Sql",customAttributes:{},description:"Sql connection data",displayName:"MSSQL Server secret",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Data Source",name:"Data Source",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Initial Catalog",name:"Initial Catalog",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Integrated Security",name:"Integrated Security",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Encrypt",name:"Encrypt",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"MultipleActiveResultSets",name:"MultipleActiveResultSets",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Password",name:"Password",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"User ID",name:"User ID",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.Int64",uiHint:"single-line"},{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Connection Timeout",name:"Connection Timeout",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"MSSQLServer"},k={category:"Http",customAttributes:{},description:"Authorization token secret",displayName:"Authorization",inputProperties:[{disableWorkflowProviderSelection:!1,isBrowsable:!0,isReadOnly:!1,label:"Authorization",name:"Authorization",order:0,supportedSyntaxes:["JavaScript","Liquid"],type:"System.String",uiHint:"single-line"}],type:"Authorization"};let P=class{constructor(s){e(this,s),this.selectedTrait=7,this.selectedCategory="All",this.categories=[],this.filteredSecretsDescriptorDisplayContexts=[],this.onShowSecretsPicker=async()=>{await this.dialog.show(!0)}}connectedCallback(){t.on(n.ShowSecretsPicker,this.onShowSecretsPicker)}disconnectedCallback(){t.detach(n.ShowSecretsPicker,this.onShowSecretsPicker)}componentWillRender(){const e=[x,S,v,k];b.secretsDescriptors=e,this.categories=["All",...e.map((e=>e.category)).distinct().sort()];const a=this.searchText?this.searchText.toLowerCase():"";let t=e;t=a.length>0?t.filter((e=>{const s=e.description||"",t=e.displayName||"",l=e.type||"";return(e.category||"").toLowerCase().indexOf(a)>=0||s.toLowerCase().indexOf(a)>=0||t.toLowerCase().indexOf(a)>=0||l.toLowerCase().indexOf(a)>=0})):this.selectedCategory&&"All"!=this.selectedCategory?t.filter((e=>e.category==this.selectedCategory)):t,this.filteredSecretsDescriptorDisplayContexts=t.map((e=>({secretDescriptor:e,secretIcon:s(w,{color:"rose"})})))}selectTrait(e){this.selectedTrait=e}selectCategory(e){this.selectedCategory=e}onTraitClick(e,s){e.preventDefault(),this.selectTrait(s)}onCategoryClick(e,s){e.preventDefault(),this.selectCategory(s)}onSearchTextChange(e){this.searchText=e.target.value}async onCancelClick(){await this.dialog.hide(!0)}async onSecretClick(e,s){e.preventDefault(),t.emit(n.SecretPicked,this,s),await this.dialog.hide(!1)}render(){const e=this.filteredSecretsDescriptorDisplayContexts,t=this.categories;return s(a,{class:"elsa-block"},s("elsa-modal-dialog",{ref:e=>this.dialog=e},s("div",{slot:"content",class:"elsa-py-8"},s("div",{class:"elsa-flex"},s("div",{class:"elsa-px-8"},s("nav",{class:"elsa-space-y-1","aria-label":"Sidebar"},t.map((e=>s("a",{href:"#",onClick:s=>this.onCategoryClick(s,e),class:(e==this.selectedCategory?"elsa-bg-gray-100 elsa-text-gray-900 elsa-flex":"elsa-text-gray-600 hover:elsa-bg-gray-50 hover:elsa-text-gray-900")+" elsa-text-gray-600 hover:elsa-bg-gray-50 hover:elsa-text-gray-900 elsa-flex elsa-items-center elsa-px-3 elsa-py-2 elsa-text-sm elsa-font-medium elsa-rounded-md"},s("span",{class:"elsa-truncate"},e)))))),s("div",{class:"elsa-flex-1 elsa-pr-8"},s("div",{class:"elsa-p-0 elsa-mb-6"},s("div",{class:"elsa-relative elsa-rounded-md elsa-shadow-sm"},s("div",{class:"elsa-absolute elsa-inset-y-0 elsa-left-0 elsa-pl-3 elsa-flex elsa-items-center elsa-pointer-events-none"},s("svg",{class:"elsa-h-6 elsa-w-6 elsa-text-gray-400",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},s("path",{stroke:"none",d:"M0 0h24v24H0z"}),s("circle",{cx:"10",cy:"10",r:"7"}),s("line",{x1:"21",y1:"21",x2:"15",y2:"15"}))),s("input",{type:"text",value:this.searchText,onInput:e=>this.onSearchTextChange(e),class:"form-input elsa-block elsa-w-full elsa-pl-10 sm:elsa-text-sm sm:elsa-leading-5 focus:elsa-ring-blue-500 focus:elsa-border-blue-500 elsa-rounded-md elsa-border-gray-300",placeholder:"Search secrets"}))),s("div",{class:"elsa-max-w-4xl elsa-mx-auto elsa-p-0"},t.map((a=>{const t=e.filter((e=>e.secretDescriptor.category==a));if(0!=t.length)return s("div",null,s("h2",{class:"elsa-my-4 elsa-text-lg elsa-leading-6 elsa-font-medium"},a),s("div",{class:"elsa-divide-y elsa-divide-gray-200 sm:elsa-divide-y-0 sm:elsa-grid sm:elsa-grid-cols-2 sm:elsa-gap-px"},t.map((e=>s("a",{href:"#",onClick:s=>this.onSecretClick(s,e.secretDescriptor),class:"elsa-relative elsa-rounded elsa-group elsa-p-6 focus-within:elsa-ring-2 focus-within:elsa-ring-inset focus-within:elsa-ring-blue-500"},s("div",{class:"elsa-flex elsa-space-x-10"},s("div",{class:"elsa-flex elsa-flex-0 elsa-items-center"},s("div",{innerHTML:e.secretIcon})),s("div",{class:"elsa-flex-1 elsa-mt-2"},s("h3",{class:"elsa-text-lg elsa-font-medium"},s("a",{href:"#",class:"focus:elsa-outline-none"},s("span",{class:"elsa-absolute elsa-inset-0","aria-hidden":"true"}),e.secretDescriptor.displayName)),s("p",{class:"elsa-mt-2 elsa-text-sm elsa-text-gray-500"},e.secretDescriptor.description))))))))})))))),s("div",{slot:"buttons"},s("div",{class:"elsa-bg-gray-50 elsa-px-4 elsa-py-3 sm:elsa-px-6 sm:elsa-flex sm:elsa-flex-row-reverse"},s("button",{type:"button",onClick:()=>this.onCancelClick(),class:"elsa-mt-3 elsa-w-full elsa-inline-flex elsa-justify-center elsa-rounded-md elsa-border elsa-border-gray-300 elsa-shadow-sm elsa-px-4 elsa-py-2 elsa-bg-white elsa-text-base elsa-font-medium elsa-text-gray-700 hover:elsa-bg-gray-50 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-mt-0 sm:elsa-ml-3 sm:elsa-w-auto sm:elsa-text-sm"},"Cancel")))))}};export{g as elsa_credential_manager_list_screen,f as elsa_secret_editor_modal,P as elsa_secrets_picker_modal}