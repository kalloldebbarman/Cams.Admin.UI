import{r as e,h as s}from"./p-ee0b9025.js";import{l}from"./p-62312a9a.js";import{T as t}from"./p-96c5f56a.js";import"./p-83f217d4.js";const a={en:{default:{Title:"Workflow Registry",CreateButton:"Create Workflow"}},"zh-CN":{default:{Title:"工作流程注册表",CreateButton:"创建工作流程"}},"nl-NL":{default:{Title:"Workflow Register",CreateButton:"Nieuwe Workflow"}},"fa-IR":{default:{Title:"لیست فرآیندها",CreateButton:"ایجاد فرآیند"}},"de-DE":{default:{Title:"Ablaufverzeichnis",CreateButton:"Ablauf erstellen"}}};let r=class{constructor(s){e(this,s)}async componentWillLoad(){this.i18next=await l(this.culture,a)}render(){const e=this.basePath,l=e=>this.i18next.t(e);return s("div",null,s("div",{class:"elsa-border-b elsa-border-gray-200 elsa-px-4 elsa-py-4 sm:elsa-flex sm:elsa-items-center sm:elsa-justify-between sm:elsa-px-6 lg:elsa-px-8 elsa-bg-white"},s("div",{class:"elsa-flex-1 elsa-min-w-0"},s("h1",{class:"elsa-text-lg elsa-font-medium elsa-leading-6 elsa-text-gray-900 sm:elsa-truncate"},l("Title"))),s("div",{class:"elsa-mt-4 elsa-flex sm:elsa-mt-0 sm:elsa-ml-4"},s("stencil-route-link",{url:`${e}/workflow-definitions/new`,class:"elsa-order-0 elsa-inline-flex elsa-items-center elsa-px-4 elsa-py-2 elsa-border elsa-border-transparent elsa-shadow-sm elsa-text-sm elsa-font-medium elsa-rounded-md elsa-text-white elsa-bg-blue-600 hover:elsa-bg-blue-700 focus:elsa-outline-none focus:elsa-ring-2 focus:elsa-ring-offset-2 focus:elsa-ring-blue-500 sm:elsa-order-1 sm:elsa-ml-3"},l("CreateButton")))),s("elsa-workflow-registry-list-screen",null))}};t.injectProps(r,["culture","basePath"]);export{r as elsa_studio_workflow_registry}