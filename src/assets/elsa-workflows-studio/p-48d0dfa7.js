import"./p-f3f2f442.js";import{a as t}from"./p-6cc453a9.js";import"./p-6f3ac5fa.js";import"./p-82db2ff5.js";import"./p-949334ec.js";async function a(a,s){const i=s.options;let r;return r=i&&i.runtimeSelectListProviderType?await async function(a,s){const i=await t(a);return await i.designerApi.runtimeSelectItemsApi.get(s.runtimeSelectListProviderType,s.context||{})}(a,i):Array.isArray(i)?{items:i,isFlagsEnum:!1}:i,r||{items:[],isFlagsEnum:!1}}export{a as g}