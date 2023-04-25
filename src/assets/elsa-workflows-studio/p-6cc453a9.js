import{a as t,H as i}from"./p-f1ec68ec.js";import{c as a}from"./p-a3b5bd35.js";import{e as n}from"./p-d17a08e5.js";import{g as s}from"./p-f3f2f442.js";import{E as e}from"./p-ec6778d3.js";var o=t;let r=null,w=null;const c=async function(t){if(r)return r;const a={baseURL:t};r=o.create(a);const s=new i(r);return await n.emit(e.HttpClientConfigCreated,this,{config:a}),await n.emit(e.HttpClientCreated,this,{service:s,_httpClient:r}),r},l=async function(t){if(w)return w;const i=await c(t);return w={activitiesApi:{list:async()=>(await i.get("v1/activities")).data},workflowDefinitionsApi:{list:async(t,n,e,o)=>{const r={version:s(e)};o&&(r.searchTerm=o),(t||0===t)&&(r.page=t),n&&(r.pageSize=n);const w=a.map(r,((t,i)=>`${i}=${t}`)),c=w.length>0?`?${w.join("&")}`:"";return(await i.get(`v1/workflow-definitions${c}`)).data},getMany:async(t,a)=>{const n=s(a);return(await i.get(`v1/workflow-definitions?ids=${t.join(",")}&version=${n}`)).data.items},getVersionHistory:async t=>(await i.get(`v1/workflow-definitions/${t}/history`)).data.items,getByDefinitionAndVersion:async(t,a)=>{const n=s(a);return(await i.get(`v1/workflow-definitions/${t}/${n}`)).data},save:async t=>(await i.post("v1/workflow-definitions",t)).data,delete:async(t,a)=>{let n=`v1/workflow-definitions/${t}`;a&&(n=`${n}/${s(a)}`),await i.delete(n)},retract:async t=>(await i.post(`v1/workflow-definitions/${t}/retract`)).data,publish:async t=>(await i.post(`v1/workflow-definitions/${t}/publish`)).data,revert:async(t,a)=>(await i.post(`v1/workflow-definitions/${t}/revert/${a}`)).data,export:async(t,a)=>{const n=s(a),e=await i.post(`v1/workflow-definitions/${t}/${n}/export`,null,{responseType:"blob"}),o=e.headers["content-disposition"];return{fileName:o?o.split(";")[1].split("=")[1]:`workflow-definition-${t}.json`,data:e.data}},import:async(t,a)=>{const n=new FormData;return n.append("file",a),(await i.post(`v1/workflow-definitions/${t}/import`,n,{headers:{"Content-Type":"multipart/form-data"}})).data}},workflowTestApi:{execute:async t=>(await i.post("v1/workflow-test/execute",t)).data,restartFromActivity:async t=>{await i.post("v1/workflow-test/restartFromActivity",t)},stop:async t=>{await i.post("v1/workflow-test/stop",t)}},workflowRegistryApi:{list:async(t,n,e,o)=>{const r={version:s(o)};(n||0===n)&&(r.page=n),e&&(r.pageSize=e);const w=a.map(r,((t,i)=>`${i}=${t}`)),c=w.length>0?`?${w.join("&")}`:"";return(await i.get(`v1/workflow-registry/by-provider/${t}${c}`)).data},listAll:async t=>{const n={version:s(t)},e=a.map(n,((t,i)=>`${i}=${t}`)),o=e.length>0?`?${e.join("&")}`:"";return(await i.get(`v1/workflow-registry${o}`)).data},findManyByDefinitionVersionIds:async t=>{if(0==t.length)return[];const a=t.join(",");return(await i.get(`v1/workflow-registry/by-definition-version-ids?ids=${a}`)).data},get:async(t,a)=>{const n=s(a);return(await i.get(`v1/workflow-registry/${t}/${n}`)).data}},workflowInstancesApi:{list:async(t,n,s,e,o,r,w)=>{const c={};s&&(c.workflow=s),w&&(c.correlationId=w),null!=e&&(c.status=e),o&&(c.orderBy=o),r&&(c.searchTerm=r),t&&(c.page=t),n&&(c.pageSize=n);const l=a.map(c,((t,i)=>`${i}=${t}`)),f=l.length>0?`?${l.join("&")}`:"";return(await i.get(`v1/workflow-instances${f}`)).data},get:async t=>(await i.get(`v1/workflow-instances/${t}`)).data,cancel:async t=>{await i.post(`v1/workflow-instances/${t}/cancel`)},delete:async t=>{await i.delete(`v1/workflow-instances/${t}`)},retry:async t=>{await i.post(`v1/workflow-instances/${t}/retry`,{runImmediately:!1})},bulkCancel:async t=>(await i.post("v1/workflow-instances/bulk/cancel",t)).data,bulkDelete:async t=>(await i.delete("v1/workflow-instances/bulk",{data:t})).data,bulkRetry:async t=>(await i.post("v1/workflow-instances/bulk/retry",t)).data},workflowExecutionLogApi:{get:async(t,n,s)=>{const e={};n&&(e.page=n),s&&(e.pageSize=s);const o=a.map(e,((t,i)=>`${i}=${t}`)),r=o.length>0?`?${o.join("&")}`:"";return(await i.get(`v1/workflow-instances/${t}/execution-log${r}`)).data}},scriptingApi:{getJavaScriptTypeDefinitions:async(t,a)=>(await i.post(`v1/scripting/javascript/type-definitions/${t}?t=${(new Date).getTime()}`,a)).data},designerApi:{runtimeSelectItemsApi:{get:async(t,a)=>(await i.post("v1/designer/runtime-select-list",{providerTypeName:t,context:a})).data}},activityStatsApi:{get:async(t,a)=>(await i.get(`v1/workflow-instances/${t}/activity-stats/${a}`)).data},workflowStorageProvidersApi:{list:async()=>(await i.get("v1/workflow-storage-providers")).data},workflowProvidersApi:{list:async()=>(await i.get("v1/workflow-providers")).data},workflowChannelsApi:{list:async()=>(await i.get("v1/workflow-channels")).data},featuresApi:{list:async()=>(await i.get("v1/features")).data.features},versionApi:{get:async()=>(await i.get("v1/version")).data.version},authenticationApi:{getUserDetails:async()=>{const t=await i.get("v1/elsaAuthentication/userinfo");return"text/html; charset=utf-8"!==t.headers["content-type"]&&t.data.isAuthenticated?t.data:null},getAuthenticationConfguration:async()=>(await i.get("v1/ElsaAuthentication/options")).data}},w};export{l as a,c}