import{h as e}from"./p-ee0b9025.js";class s{constructor(e,s){this.model=e,this.updater=s}}function l(s,l,a,t,o,n,c){return n=n||l,e("div",null,e("label",{htmlFor:l,class:"block elsa-text-sm elsa-font-medium elsa-text-gray-700"},a),e("div",{class:"elsa-mt-1"},e("input",c?{type:"text",readonly:!0,id:n,name:l,value:t,class:"focus:elsa-ring-blue-500 focus:elsa-border-blue-500 block elsa-w-full elsa-min-w-0 elsa-rounded-md sm:elsa-text-sm elsa-border-gray-300"}:{type:"text",id:n,name:l,value:t,onChange:e=>function(e,s){const l=e.target;r(s,l.name,l.value.trim())}(e,s),class:"focus:elsa-ring-blue-500 focus:elsa-border-blue-500 block elsa-w-full elsa-min-w-0 elsa-rounded-md sm:elsa-text-sm elsa-border-gray-300"})),o&&o.length>0?e("p",{class:"elsa-mt-2 elsa-text-sm elsa-text-gray-500"},o):void 0)}function a(s,l,a,t,o,n){return e("div",{class:"elsa-relative elsa-flex elsa-items-start"},e("div",{class:"elsa-flex elsa-items-center elsa-h-5"},e("input",{id:n=n||l,name:l,type:"checkbox",value:"true",checked:t,onChange:e=>function(e,s){const l=e.target;r(s,l.name,l.checked)}(e,s),class:"focus:elsa-ring-blue-500 elsa-h-4 elsa-w-4 elsa-text-blue-600 elsa-border-gray-300 rounded"})),e("div",{class:"elsa-ml-3 elsa-text-sm"},e("label",{htmlFor:n,class:"elsa-font-medium elsa-text-gray-700"},a),o&&o.length>0?e("p",{class:"elsa-text-gray-500"},o):void 0))}function t(s,l,a,t,o,n){return n=n||l,e("div",null,e("label",{htmlFor:l,class:"block elsa-text-sm elsa-font-medium elsa-text-gray-700"},a),e("div",{class:"elsa-mt-1"},e("textarea",{id:n,name:l,value:t,onChange:e=>function(e,s){const l=e.target;r(s,l.name,l.value.trim())}(e,s),rows:3,class:"focus:elsa-ring-blue-500 focus:elsa-border-blue-500 block elsa-w-full elsa-min-w-0 elsa-rounded-md sm:elsa-text-sm elsa-border-gray-300"})),o&&o.length>0?e("p",{class:"elsa-mt-2 elsa-text-sm elsa-text-gray-500"},o):void 0)}function o(s,l,a,t,o,n,c){return c=c||l,e("div",null,e("label",{htmlFor:l,class:"block elsa-text-sm elsa-font-medium elsa-text-gray-700"},a),e("div",{class:"elsa-mt-1"},e("select",{id:c,name:l,onChange:e=>function(e,s){const l=e.target;r(s,l.name,l.value.trim())}(e,s),class:"block focus:elsa-ring-blue-500 focus:elsa-border-blue-500 elsa-w-full elsa-shadow-sm sm:elsa-text-sm elsa-border-gray-300 elsa-rounded-md"},o.map((s=>e("option",{value:s.value,selected:s.value===t},s.text))))),n&&n.length>0?e("p",{class:"elsa-mt-2 elsa-text-sm elsa-text-gray-500"},n):void 0)}function n(s,l){return e("div",null,e("h3",{class:"elsa-text-lg elsa-leading-6 elsa-font-medium elsa-text-gray-900"},s),l?e("p",{class:"elsa-mt-1 elsa-max-w-2xl elsa-text-sm elsa-text-gray-500"},l):void 0)}function r(e,s,l){const a=s.split(".");let t=Object.assign({},e.model),o=t;for(const e of a.slice(0,a.length-1))o[e]||(o[e]={}),o=o[e];o[a[a.length-1]]=l,e.model=t,e.updater(t)}export{s as F,t as a,o as b,a as c,n as s,l as t}