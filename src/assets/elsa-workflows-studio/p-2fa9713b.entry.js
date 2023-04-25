import{r as e,c as s,h as a}from"./p-ee0b9025.js";import{i as l}from"./p-273970f1.js";import{c as t,q as i}from"./p-6f3ac5fa.js";import{r}from"./p-4a75a7a1.js";import{l as n}from"./p-62312a9a.js";import"./p-fe704386.js";import"./p-1b1f9628.js";import"./p-83f217d4.js";import"./p-a3b5bd35.js";import"./p-80de33dc.js";let o=class{constructor(a){e(this,a),this.paged=s(this,"paged",7),this.t=(e,s)=>this.i18next.t(e,s)}async componentWillLoad(){this.i18next=await n(this.culture,r),this.basePath=this.location?this.location.pathname:document.location.pathname}navigate(e,s){this.history?this.history.push(e):this.paged.emit({page:s,pageSize:this.pageSize,totalCount:this.totalCount})}onNavigateClick(e,s){const a=e.currentTarget;e.preventDefault(),this.navigate(`${a.pathname}${a.search}`,s)}render(){const e=this.page,s=this.pageSize,l=this.totalCount,r=this.basePath,n=e*s+1,o=Math.min(n+s-1,l),u=Math.round((l-1)/s+.5),d=Math.max(0,e-5),c=Math.min(u,d+10),f=this,m=this.history?t(this.history.location.search):{page:e,pageSize:s},p=this.t;m.pageSize=s;const g=e=>{const s=Object.assign(Object.assign({},m),{page:e});return`${r}?${i(s)}`};return a("div",{class:"elsa-bg-white elsa-px-4 elsa-py-3 elsa-flex elsa-items-center elsa-justify-between elsa-border-t elsa-border-gray-200 sm:elsa-px-6"},a("div",{class:"elsa-flex-1 elsa-flex elsa-justify-between sm:elsa-hidden"},function(){if(!(e<=0))return a("a",{href:`${g(e-1)}`,onClick:s=>f.onNavigateClick(s,e-1),class:"elsa-relative elsa-inline-flex elsa-items-center elsa-px-4 elsa-py-2 elsa-border elsa-border-gray-300 elsa-text-sm elsa-leading-5 elsa-font-medium elsa-rounded-md elsa-text-gray-700 elsa-bg-white hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-shadow-outline-blue focus:elsa-border-blue-300 active:elsa-bg-gray-100 active:elsa-text-gray-700 elsa-transition elsa-ease-in-out elsa-duration-150"},p("Previous"))}(),function(){if(!(e>=u))return a("a",{href:`/${g(e+1)}`,onClick:s=>f.onNavigateClick(s,e+1),class:"elsa-ml-3 elsa-relative elsa-inline-flex elsa-items-center elsa-px-4 elsa-py-2 elsa-border elsa-border-gray-300 elsa-text-sm elsa-leading-5 elsa-font-medium elsa-rounded-md elsa-text-gray-700 elsa-bg-white hover:elsa-text-gray-500 focus:elsa-outline-none focus:elsa-shadow-outline-blue focus:elsa-border-blue-300 active:elsa-bg-gray-100 active:elsa-text-gray-700 elsa-transition elsa-ease-in-out elsa-duration-150"},p("Next"))}()),a("div",{class:"hidden sm:elsa-flex-1 sm:elsa-flex sm:elsa-items-center sm:elsa-justify-between"},a("div",null,a("p",{class:"elsa-text-sm elsa-leading-5 elsa-text-gray-700 elsa-space-x-0-5"},a("span",null,p("From")),a("span",{class:"elsa-font-medium"},n),a("span",null,p("To")),a("span",{class:"elsa-font-medium"},o),a("span",null,p("Of")),a("span",{class:"elsa-font-medium"},l),a("span",null,p("Results")))),a("div",null,a("nav",{class:"elsa-relative elsa-z-0 elsa-inline-flex elsa-shadow-sm"},function(){if(!(e<=0))return a("a",{href:`${g(e-1)}`,onClick:s=>f.onNavigateClick(s,e-1),class:"elsa-relative elsa-inline-flex elsa-items-center elsa-px-2 elsa-py-2 elsa-rounded-l-md elsa-border elsa-border-gray-300 elsa-bg-white elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-500 hover:elsa-text-gray-400 focus:elsa-z-10 focus:elsa-outline-none focus:elsa-border-blue-300 focus:elsa-shadow-outline-blue active:elsa-bg-gray-100 active:elsa-text-gray-500 elsa-transition elsa-ease-in-out elsa-duration-150","aria-label":"Previous"},a("svg",{class:"elsa-h-5 elsa-w-5","x-description":"Heroicon name: chevron-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},a("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})))}(),function(){const s=[];for(let l=d;l<c;l++){const t=e==l,i=l==d&&t?"elsa-rounded-l-md":"",r=l==c-1&&t?"elsa-rounded-r-md":"";s.push(t?a("span",{class:`-elsa-ml-px elsa-relative elsa-inline-flex elsa-items-center elsa-px-4 elsa-py-2 elsa-border elsa-border-gray-300 elsa-text-sm elsa-leading-5 elsa-font-medium elsa-bg-blue-600 elsa-text-white ${i} ${r}`},l+1):a("a",{href:`${g(l)}`,onClick:e=>f.onNavigateClick(e,l),class:`-elsa-ml-px elsa-relative elsa-inline-flex elsa-items-center elsa-px-4 elsa-py-2 elsa-border elsa-border-gray-300 elsa-bg-white elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-700 hover:elsa-text-gray-500 focus:elsa-z-10 focus:elsa-outline-none active:elsa-bg-gray-100 active:elsa-text-gray-700 elsa-transition elsa-ease-in-out elsa-duration-150 ${i}`},l+1))}return s}(),function(){if(!(e>=u-1))return a("a",{href:`${g(e+1)}`,onClick:s=>f.onNavigateClick(s,e+1),class:"-elsa-ml-px elsa-relative elsa-inline-flex elsa-items-center elsa-px-2 elsa-py-2 elsa-rounded-r-md elsa-border elsa-border-gray-300 elsa-bg-white elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-500 hover:elsa-text-gray-400 focus:elsa-z-10 focus:elsa-outline-none focus:elsa-border-blue-300 focus:elsa-shadow-outline-blue active:elsa-bg-gray-100 active:elsa-text-gray-500 elsa-transition elsa-ease-in-out elsa-duration-150","aria-label":"Next"},a("svg",{class:"elsa-h-5 elsa-w-5","x-description":"Heroicon name: chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},a("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})))}()))))}};l(o);export{o as elsa_pager}