import{r as e,h as t}from"./p-ee0b9025.js";import{i as a}from"./p-273970f1.js";import{_ as s,t as l,a as n,b as r,d as i,i as o,e as c,f as u,g as h,h as d,j as f,k as g,l as p,m as w,n as y,o as x,p as b,q as v,r as m,s as k,u as S,v as C,w as D,x as I,y as M,z as A,A as B,B as T,C as z,D as F,E as L,F as W,G as R,c as j}from"./p-a3b5bd35.js";import{_ as E,a as N,i as P,b as H,c as V,d as Y,e as U,f as $,u as O,z as _}from"./p-6c6facd9.js";import{c as q}from"./p-9d0a1097.js";import{e as K}from"./p-d17a08e5.js";import{O as Z,b as G}from"./p-f3f2f442.js";import{E as Q}from"./p-ec6778d3.js";import{a as J}from"./p-6cc453a9.js";import{c as X}from"./p-6f3ac5fa.js";import"./p-82db2ff5.js";import"./p-949334ec.js";import{D as ee}from"./p-3bc011d8.js";import{h as te}from"./p-f931e145.js";import{l as ae}from"./p-62312a9a.js";import{T as se}from"./p-96c5f56a.js";import"./p-1b1f9628.js";import"./p-83f217d4.js";import"./p-80de33dc.js";import"./p-f1ec68ec.js";var le=Math.ceil,ne=Math.max,re=function(e,t,a,s){var l=-1,n=E,r=!0,i=e.length,o=[],c=t.length;if(!i)return o;a&&(t=u(t,h(a))),s?(n=N,r=!1):t.length>=200&&(n=f,r=!1,t=new d(t));e:for(;++l<i;){var g=e[l],p=null==a?g:a(g);if(g=s||0!==g?g:0,r&&p==p){for(var w=c;w--;)if(t[w]===p)continue e;o.push(g)}else n(t,p,s)||o.push(g)}return o},ie=g((function(e,t){return P(e)?re(e,i(t,1,P,!0)):[]})),oe=g((function(e,t){var a=w(t);return P(a)&&(a=void 0),P(e)?re(e,i(t,1,P,!0),p(a)):[]})),ce=g((function(e,t){var a=w(t);return P(a)&&(a=void 0),P(e)?re(e,i(t,1,P,!0),void 0,a):[]})),ue=function(e,t,a,s){for(var l=e.length,r=s?l:-1;(s?r--:++r<l)&&t(e[r],r,e););return a?n(e,s?0:r,s?r+1:l):n(e,s?r+1:0,s?l:r)},he=function(e,t,a,s){var n=e.length;for((a=l(a))<0&&(a=-a>n?0:n+a),(s=void 0===s||s>n?n:l(s))<0&&(s+=n),s=a>s?0:function(e){return e?y(l(e),0,4294967295):0}(s);a<s;)e[a++]=t;return e},de=function(e){return e&&e.length?e[0]:void 0},fe=de,ge=Math.max,pe=Math.min,we=function(e,t,a){for(var s=a?N:E,l=e[0].length,n=e.length,r=n,i=Array(n),o=1/0,c=[];r--;){var g=e[r];r&&t&&(g=u(g,h(t))),o=pe(g.length,o),i[r]=!a&&(t||l>=120&&g.length>=120)?new d(r&&g):void 0}g=e[0];var p=-1,w=i[0];e:for(;++p<l&&c.length<o;){var y=g[p],x=t?t(y):y;if(y=a||0!==y?y:0,!(w?f(w,x):s(c,x,a))){for(r=n;--r;){var b=i[r];if(!(b?f(b,x):s(e[r],x,a)))continue e}w&&w.push(x),c.push(y)}}return c},ye=function(e){return P(e)?e:[]},xe=g((function(e){var t=u(e,ye);return t.length&&t[0]===e[0]?we(t):[]})),be=g((function(e){var t=w(e),a=u(e,ye);return t===w(a)?t=void 0:a.pop(),a.length&&a[0]===e[0]?we(a,p(t)):[]})),ve=g((function(e){var t=w(e),a=u(e,ye);return(t="function"==typeof t?t:void 0)&&a.pop(),a.length&&a[0]===e[0]?we(a,void 0,t):[]})),me=Array.prototype.join,ke=Math.max,Se=Math.min,Ce=function(e,t,a,s){for(var l=a-1,n=e.length;++l<n;)if(s(e[l],t))return l;return-1},De=Array.prototype.splice,Ie=function(e,t,a,s){var l=s?Ce:x,n=-1,r=t.length,i=e;for(e===t&&(t=c(t)),a&&(i=u(e,h(a)));++n<r;)for(var o=0,d=t[n],f=a?a(d):d;(o=l(i,f,o,s))>-1;)i!==e&&De.call(i,o,1),De.call(e,o,1);return e},Me=function(e,t){return e&&e.length&&t&&t.length?Ie(e,t):e},Ae=g(Me),Be=Array.prototype.splice,Te=function(e,t){for(var a=e?t.length:0,s=a-1;a--;){var l=t[a];if(a==s||l!==n){var n=l;m(l)?Be.call(e,l,1):(i=C(i=l,r=e),null==(r=D(r,i))||delete r[S(w(i))])}}var r,i;return e},ze=H((function(e,t){var a=null==e?0:e.length,s=function(e,t){for(var a=-1,s=t.length,l=Array(s),n=null==e;++a<s;)l[a]=n?void 0:k(e,t[a]);return l}(e,t);return Te(e,u(t,(function(e){return m(e,a)?+e:e})).sort(I)),s})),Fe=Array.prototype.reverse,Le=Math.floor,We=Math.min,Re=function(e,t,a,s){var l=0,n=null==e?0:e.length;if(0===n)return 0;for(var r=(t=a(t))!=t,i=null===t,o=M(t),c=void 0===t;l<n;){var u=Le((l+n)/2),h=a(e[u]),d=void 0!==h,f=null===h,g=h==h,p=M(h);if(r)var w=s||g;else w=c?g&&(s||d):i?g&&d&&(s||!f):o?g&&d&&!f&&(s||!p):!f&&!p&&(s?h<=t:h<t);w?l=u+1:n=u}return We(n,4294967294)},je=function(e,t,a){var s=0,l=null==e?s:e.length;if("number"==typeof t&&t==t&&l<=2147483647){for(;s<l;){var n=s+l>>>1,r=e[n];null!==r&&!M(r)&&(a?r<=t:r<t)?s=n+1:l=n}return l}return Re(e,t,A,a)},Ee=function(e,t){for(var a=-1,s=e.length,l=0,n=[];++a<s;){var r=e[a],i=t?t(r):r;if(!a||!B(i,o)){var o=i;n[l++]=0===r?0:r}}return n},Ne=g((function(e){var t=w(e);return P(t)&&(t=void 0),V(i(e,1,P,!0),p(t))})),Pe=g((function(e){var t=w(e);return t="function"==typeof t?t:void 0,V(i(e,1,P,!0),void 0,t)})),He=Math.max,Ve=function(e){if(!e||!e.length)return[];var t=0;return e=T(e,(function(e){if(P(e))return t=He(e.length,t),!0})),z(t,(function(t){return u(e,F(t))}))},Ye=function(e,t){if(!e||!e.length)return[];var a=Ve(e);return null==t?a:u(a,(function(e){return L(t,void 0,e)}))},Ue=g((function(e,t){return P(e)?re(e,t):[]})),$e=function(e,t,a){var s=e.length;if(s<2)return s?V(e[0]):[];for(var l=-1,n=Array(s);++l<s;)for(var r=e[l],o=-1;++o<s;)o!=l&&(n[l]=re(n[l]||r,e[o],t,a));return V(i(n,1),t,a)},Oe=g((function(e){return $e(T(e,P))})),_e=g((function(e){var t=w(e);return P(t)&&(t=void 0),$e(T(e,P),p(t))})),qe=g((function(e){var t=w(e);return t="function"==typeof t?t:void 0,$e(T(e,P),void 0,t)})),Ke=g(Ve),Ze=g((function(e){var t=e.length,a=t>1?e[t-1]:void 0;return a="function"==typeof a?(e.pop(),a):void 0,Ye(e,a)})),Ge={chunk:function(e,t,a){t=(a?s(e,t,a):void 0===t)?1:ne(l(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var i=0,o=0,c=Array(le(r/t));i<r;)c[o++]=n(e,i,i+=t);return c},compact:function(e){for(var t=-1,a=null==e?0:e.length,s=0,l=[];++t<a;){var n=e[t];n&&(l[s++]=n)}return l},concat:function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),a=arguments[0],s=e;s--;)t[s-1]=arguments[s];return r(o(a)?c(a):[a],i(t,1))},difference:ie,differenceBy:oe,differenceWith:ce,drop:function(e,t,a){var s=null==e?0:e.length;return s?(t=a||void 0===t?1:l(t),n(e,t<0?0:t,s)):[]},dropRight:function(e,t,a){var s=null==e?0:e.length;return s?(t=a||void 0===t?1:l(t),n(e,0,(t=s-t)<0?0:t)):[]},dropRightWhile:function(e,t){return e&&e.length?ue(e,p(t),!0,!0):[]},dropWhile:function(e,t){return e&&e.length?ue(e,p(t),!0):[]},fill:function(e,t,a,l){var n=null==e?0:e.length;return n?(a&&"number"!=typeof a&&s(e,t,a)&&(a=0,l=n),he(e,t,a,l)):[]},findIndex:W,findLastIndex:R,first:fe,flatten:$,flattenDeep:function(e){return null!=e&&e.length?i(e,1/0):[]},flattenDepth:function(e,t){return null!=e&&e.length?(t=void 0===t?1:l(t),i(e,t)):[]},fromPairs:function(e){for(var t=-1,a=null==e?0:e.length,s={};++t<a;){var l=e[t];s[l[0]]=l[1]}return s},head:de,indexOf:function(e,t,a){var s=null==e?0:e.length;if(!s)return-1;var n=null==a?0:l(a);return n<0&&(n=ge(s+n,0)),x(e,t,n)},initial:function(e){return null!=e&&e.length?n(e,0,-1):[]},intersection:xe,intersectionBy:be,intersectionWith:ve,join:function(e,t){return null==e?"":me.call(e,t)},last:w,lastIndexOf:function(e,t,a){var s=null==e?0:e.length;if(!s)return-1;var n=s;return void 0!==a&&(n=(n=l(a))<0?ke(s+n,0):Se(n,s-1)),t==t?function(e,t,a){for(var s=a+1;s--;)if(e[s]===t)return s;return s}(e,t,n):b(e,v,n,!0)},nth:function(e,t){return e&&e.length?function(e,t){var a=e.length;if(a)return m(t+=t<0?a:0,a)?e[t]:void 0}(e,l(t)):void 0},pull:Ae,pullAll:Me,pullAllBy:function(e,t,a){return e&&e.length&&t&&t.length?Ie(e,t,p(a)):e},pullAllWith:function(e,t,a){return e&&e.length&&t&&t.length?Ie(e,t,void 0,a):e},pullAt:ze,remove:function(e,t){var a=[];if(!e||!e.length)return a;var s=-1,l=[],n=e.length;for(t=p(t);++s<n;){var r=e[s];t(r,s,e)&&(a.push(r),l.push(s))}return Te(e,l),a},reverse:function(e){return null==e?e:Fe.call(e)},slice:function(e,t,a){var r=null==e?0:e.length;return r?(a&&"number"!=typeof a&&s(e,t,a)?(t=0,a=r):(t=null==t?0:l(t),a=void 0===a?r:l(a)),n(e,t,a)):[]},sortedIndex:function(e,t){return je(e,t)},sortedIndexBy:function(e,t,a){return Re(e,t,p(a))},sortedIndexOf:function(e,t){var a=null==e?0:e.length;if(a){var s=je(e,t);if(s<a&&B(e[s],t))return s}return-1},sortedLastIndex:function(e,t){return je(e,t,!0)},sortedLastIndexBy:function(e,t,a){return Re(e,t,p(a),!0)},sortedLastIndexOf:function(e,t){if(null!=e&&e.length){var a=je(e,t,!0)-1;if(B(e[a],t))return a}return-1},sortedUniq:function(e){return e&&e.length?Ee(e):[]},sortedUniqBy:function(e,t){return e&&e.length?Ee(e,p(t)):[]},tail:function(e){var t=null==e?0:e.length;return t?n(e,1,t):[]},take:function(e,t,a){return e&&e.length?(t=a||void 0===t?1:l(t),n(e,0,t<0?0:t)):[]},takeRight:function(e,t,a){var s=null==e?0:e.length;return s?(t=a||void 0===t?1:l(t),n(e,(t=s-t)<0?0:t,s)):[]},takeRightWhile:function(e,t){return e&&e.length?ue(e,p(t),!1,!0):[]},takeWhile:function(e,t){return e&&e.length?ue(e,p(t)):[]},union:O,unionBy:Ne,unionWith:Pe,uniq:function(e){return e&&e.length?V(e):[]},uniqBy:function(e,t){return e&&e.length?V(e,p(t)):[]},uniqWith:function(e,t){return t="function"==typeof t?t:void 0,e&&e.length?V(e,void 0,t):[]},unzip:Ve,unzipWith:Ye,without:Ue,xor:Oe,xorBy:_e,xorWith:qe,zip:Ke,zipObject:_,zipObjectDeep:function(e,t){return Y(e||[],t||[],U)},zipWith:Ze};const Qe={en:{default:{Title:"Workflow Instances",Search:"Search",Untitled:"Untitled",Table:{Id:"ID",CorrelationId:"Correlation ID",Workflow:"Workflow",Version:"Version",InstanceName:"Instance Name",Status:"Status",Created:"Created",Finished:"Finished",LastExecuted:"Last Executed",Faulted:"Faulted",ContextMenu:{View:"View",Cancel:"Cancel",Delete:"Delete",Retry:"Retry"}},CancelDialog:{Title:"Cancel Workflow Instance",Message:"Are you sure you wish to cancel this workflow instance?"},DeleteDialog:{Title:"Delete Workflow Instance",Message:"Are you sure you wish to permanently delete this workflow instance?"},BulkCancelDialog:{Title:"Cancel Selected Workflow Instances",Message:"Are you sure you wish to cancel all selected workflow instances?"},BulkDeleteDialog:{Title:"Delete Selected Workflow Instances",Message:"Are you sure you wish to permanently delete all selected workflow instances?"},BulkRetryDialog:{Title:"Retry Selected Workflow Instances",Message:"Are you sure you wish to retry all selected workflow instances?"},Pager:{Display:"Showing {{Start}} to {{End}} of {{Results}} results"},BulkActions:{Title:"Bulk Actions",Actions:{Cancel:"Cancel",Delete:"Delete",Retry:"Retry"}},Filters:{Workflow:{Label:"Workflow",All:"All"},Status:{All:"All",Label:"Status",Running:"Running",Idle:"Idle",Suspended:"Suspended",Faulted:"Faulted",Finished:"Finished",Cancelled:"Cancelled"},Sort:{Label:"Sort",SelectedLabel:"Sort by: {{Key}}",Finished:"Finished",LastExecuted:"Last Executed",Started:"Started"},PageSize:{SelectedLabel:"Page size: {{Size}}"}}}},"zh-CN":{default:{Title:"工作流实例",Search:"搜索",Untitled:"无题",Table:{Id:"ID",CorrelationId:"相关 ID",Workflow:"工作流程",Version:"版本",InstanceName:"实例名称",Status:"状态",Created:"已创建",Finished:"已完成",LastExecuted:"最后执行",Faulted:"故障",ContextMenu:{View:"查看",Cancel:"取消",Delete:"删除"}},CancelDialog:{Title:"取消工作流实例",Message:"你确定要取消这个工作流程实例吗？"},DeleteDialog:{Title:"删除工作流实例",Message:"你确定要永久删除这个工作流程实例吗？"},BulkCancelDialog:{Title:"取消选定的工作流实例",Message:"你确定要取消所有选定的工作流程实例吗？"},BulkDeleteDialog:{Title:"删除选定的工作流实例",Message:"你确定要永久删除所有选定的工作流实例吗？"},Pager:{Display:"显示 {{Start}} 到 {{End}} 的 {{Results}} 结果"},BulkActions:{Title:"批量操作",Actions:{Cancel:"取消",Delete:"删除"}},Filters:{Workflow:{Label:"工作流程",All:"所有"},Status:{All:"所有",Label:"状态",Running:"运行中",Idle:"闲置",Suspended:"已暂停",Faulted:"故障",Finished:"已完成",Cancelled:"已取消"},Sort:{Label:"排序",SelectedLabel:"根据{{Key}}排序",Finished:"已完成",LastExecuted:"最后执行",Started:"开始"},PageSize:{SelectedLabel:"页面大小: {{Size}}"}}}},"nl-NL":{default:{}},"fa-IR":{default:{Title:"جریان ها",Search:"جستجو",Untitled:"بی نام",Table:{Id:"شناسه",CorrelationId:"Correlation ID",Workflow:"فرآیند",Version:"ویرایش",InstanceName:"نام جریان",Status:"وضعیت",Created:"ایجاد شده",Finished:"پایان یافته ",LastExecuted:"آخرین اجرا",Faulted:"با خطا مواجه شده",ContextMenu:{View:"مشاهده",Cancel:"لغو",Delete:"حذف",Retry:"تلاش مجدد"}},CancelDialog:{Title:"لغو اجرای فرآیند",Message:"آیا از لغو اجرای این فرآیند اطمینان دارید؟"},DeleteDialog:{Title:"حذف جریان فرآیند",Message:"آیا از حذف این اجرای فرآیند اطمینان دارید؟"},BulkCancelDialog:{Title:"لغو اجراهای انتخاب شده",Message:"آیا از لغو همه اجراهای انتخاب شده اطمینان دارید؟"},BulkDeleteDialog:{Title:"حذف اجراهای انتخاب شده",Message:"آیا از حذف همه اجراهای انتخاب شده اطمینان دارید؟?"},BulkRetryDialog:{Title:"اجرای مجدد اجراهای انتخاب شده",Message:"آیااز اجرای مجدد اجراهای انتخاب شده اطمینان دارید؟"},Pager:{Display:"{{Start}} تا {{End}} از {{Results}} نتیجه"},BulkActions:{Title:"عملیات گروهی",Actions:{Cancel:"لغو",Delete:"حذف",Retry:"اجرای مجدد"}},Filters:{Workflow:{Label:"فرآیند",All:"همه"},Status:{All:"همه",Label:"وضعیت",Running:"در حال اجرا",Idle:"Idle",Suspended:"تعلیف شده",Faulted:"با خطا مواجه شده",Finished:"پایان یافته",Cancelled:"لغو شده"},Sort:{Label:"مرتب سازی",SelectedLabel:"بر اساس: {{Key}}",Finished:"پایان یافته",LastExecuted:"آخرین اجرا",Started:"شروع شده"},PageSize:{SelectedLabel:"تعداد در صفحه: {{Size}}"}}}},"de-DE":{default:{Title:"Ablaufinstanzen",Search:"Suchen",Untitled:"Unbenannt",Table:{Id:"ID",CorrelationId:"Correlation ID",Workflow:"Ablauf",Version:"Version",InstanceName:"Instanzname",Status:"Status",Created:"Erstellt",Finished:"Abgeschlossen",LastExecuted:"Zuletzt ausgeführt",Faulted:"Fehlgeschlagen",ContextMenu:{View:"Ansehen",Cancel:"Abbrechen",Delete:"Entfernen",Retry:"Nochmal ausführen"}},CancelDialog:{Title:"Ablaufinstanz abbrechen",Message:"Sind Sie sicher, dass Sie die Instanz abbrechen wollen?"},DeleteDialog:{Title:"Ablauf entfernen",Message:"Sind Sie sicher, dass Sie die Instanz unwiderruflich entfernen wollen?"},BulkCancelDialog:{Title:"Ausgewählte Instanzen abbrechen",Message:"Sind Sie sicher, dass Sie die ausgewählten Instanzen abbrechen wollen?"},BulkDeleteDialog:{Title:"Ausgewählte Instanzen entfernen",Message:"Sind Sie sicher, dass Sie die ausgewählten Instanzen entfernen wollen?"},BulkRetryDialog:{Title:"Ausgewählte Instanzen nochmal ausführen",Message:"Sind Sie sicher, dass Sie die ausgwählten Instanzen noch einmal ausführen wollen?"},Pager:{Display:"Zeige {{Start}} bis {{End}} von {{Results}} Ergebnissen"},BulkActions:{Title:"Massenaktionen",Actions:{Cancel:"Abbrechen",Delete:"Entfernen",Retry:"Erneut ausführen"}},Filters:{Workflow:{Label:"Ablauf",All:"Alle"},Status:{All:"Alle",Label:"Status",Running:"Laufend",Idle:"Inaktive",Suspended:"Angehalten",Faulted:"Fehlgeschlagen",Finished:"Abgeschlossen",Cancelled:"Abgebrochen"},Sort:{Label:"Sortierung",SelectedLabel:"Sortieren nach: {{Key}}",Finished:"Abgeschlossen",LastExecuted:"Zuletzt ausgeführt",Started:"Gestartet"},PageSize:{SelectedLabel:"Seitengröße: {{Size}}"}}}}};let Je=class{constructor(t){e(this,t),this.orderBy=Z.Started,this.workflowBlueprints=[],this.workflowInstances={items:[],page:1,pageSize:50,totalCount:0},this.selectedOrderByState=Z.Started,this.selectedWorkflowInstanceIds=[],this.currentPage=0,this.currentPageSize=Je.DEFAULT_PAGE_SIZE,this.t=(e,t)=>this.i18next.t(e,t),this.getSelectAllState=()=>{const{items:e}=this.workflowInstances;for(let t=0;t<e.length;t++)if(!this.selectedWorkflowInstanceIds.includes(e[t].id))return!1;return!0},this.setSelectAllIndeterminateState=()=>{if(this.selectAllCheckboxEl){const e=this.workflowInstances.items.filter((e=>this.selectedWorkflowInstanceIds.includes(e.id)));this.selectAllCheckboxEl.indeterminate=0!=e.length&&e.length!=this.workflowInstances.items.length}},this.onPaged=async e=>{this.currentPage=e.detail.page,await this.loadWorkflowInstances()}}connectedCallback(){this.history&&(this.unlistenRouteChanged=this.history.listen((e=>this.routeChanged(e))))}disconnectedCallback(){this.unlistenRouteChanged&&this.unlistenRouteChanged()}async componentWillLoad(){this.i18next=await ae(this.culture,Qe),this.selectedWorkflowId=this.workflowId,this.selectedCorrelationId=this.correlationId,this.selectedWorkflowStatus=this.workflowStatus,this.selectedOrderByState=this.orderBy,this.history&&this.applyQueryString(this.history.location.search),await this.loadWorkflowBlueprints(),await this.loadWorkflowInstances();const e=this.t;let t=[{text:e("BulkActions.Actions.Cancel"),name:"Cancel"},{text:e("BulkActions.Actions.Delete"),name:"Delete"},{text:e("BulkActions.Actions.Retry"),name:"Retry"}];await K.emit(Q.WorkflowInstanceBulkActionsLoading,this,{sender:this,bulkActions:t}),this.bulkActions=t}async getSelectedWorkflowInstanceIds(){return this.selectedWorkflowInstanceIds}async refresh(){await this.loadWorkflowInstances(),this.updateSelectAllChecked()}async handleWorkflowIdChanged(e){this.selectedWorkflowId=e,await this.loadWorkflowInstances()}async handleCorrelationIdChanged(e){this.selectedCorrelationId=e,await this.loadWorkflowInstances()}async handleWorkflowStatusChanged(e){this.selectedWorkflowStatus=e,await this.loadWorkflowInstances()}async handlePageSizeChanged(e){this.currentPageSize=e,this.currentPageSize=isNaN(this.currentPageSize)?Je.DEFAULT_PAGE_SIZE:this.currentPageSize,this.currentPageSize=Math.max(Math.min(this.currentPageSize,Je.MAX_PAGE_SIZE),Je.MIN_PAGE_SIZE),await this.loadWorkflowInstances()}async handleOrderByChanged(e){this.selectedOrderByState=e,await this.loadWorkflowInstances()}applyQueryString(e){var t;const a=X(e);this.selectedWorkflowId=a.workflow,this.correlationId=a.correlationId,this.selectedWorkflowStatus=a.status,this.selectedOrderByState=null!==(t=a.orderBy)&&void 0!==t?t:Z.Started,this.currentPage=a.page?parseInt(a.page):0,this.currentPage=isNaN(this.currentPage)?Je.START_PAGE:this.currentPage,this.currentPageSize=a.pageSize?parseInt(a.pageSize):Je.DEFAULT_PAGE_SIZE,this.currentPageSize=isNaN(this.currentPageSize)?Je.DEFAULT_PAGE_SIZE:this.currentPageSize,this.currentPageSize=Math.max(Math.min(this.currentPageSize,Je.MAX_PAGE_SIZE),Je.MIN_PAGE_SIZE)}async loadWorkflowBlueprints(){const e=await this.createClient();this.workflowBlueprints=await e.workflowRegistryApi.listAll({allVersions:!0})}async loadWorkflowInstances(){this.currentPage=isNaN(this.currentPage)?Je.START_PAGE:this.currentPage,this.currentPage=Math.max(this.currentPage,Je.START_PAGE),this.currentPageSize=isNaN(this.currentPageSize)?Je.DEFAULT_PAGE_SIZE:this.currentPageSize;const e=await this.createClient();this.workflowInstances=await e.workflowInstancesApi.list(this.currentPage,this.currentPageSize,this.selectedWorkflowId,this.selectedWorkflowStatus,this.selectedOrderByState,this.currentSearchTerm,this.correlationId);const t=Math.floor(this.workflowInstances.totalCount/this.currentPageSize);this.currentPage>t&&(this.currentPage=t,this.workflowInstances=await e.workflowInstancesApi.list(this.currentPage,this.currentPageSize,this.selectedWorkflowId,this.selectedWorkflowStatus,this.selectedOrderByState,this.currentSearchTerm,this.correlationId)),this.setSelectAllIndeterminateState()}createClient(){return J(this.serverUrl)}getLatestWorkflowBlueprintVersions(){const e=j.groupBy(this.workflowBlueprints,"id");return j.map(e,(e=>Ge.first(j.orderBy(e,"version","desc"))))}buildFilterUrl(e,t,a,s,l){const n={};l&&(n.correlationId=l),e&&(n.workflow=e),t&&(n.status=t),a&&(n.orderBy=a),this.currentPage&&(n.page=this.currentPage.toString());let r=s||this.currentPageSize;r=Math.max(Math.min(r,100),Je.MIN_PAGE_SIZE),n.pageSize=r.toString(),r!=this.currentPageSize&&(n.page=Math.floor(this.currentPage*this.currentPageSize/r).toString());const i=j.map(n,((e,t)=>`${t}=${e}`)).join("&");return`${this.basePath}/workflow-instances?${i}`}getStatusColor(e){switch(e){default:case G.Idle:return"gray";case G.Running:return"rose";case G.Suspended:return"blue";case G.Finished:return"green";case G.Faulted:return"red";case G.Cancelled:return"yellow"}}updateSelectAllChecked(){this.selectAllChecked=0!=this.workflowInstances.items.length&&this.workflowInstances.items.findIndex((e=>this.selectedWorkflowInstanceIds.findIndex((t=>t==e.id))<0))<0}async routeChanged(e){e.pathname.toLowerCase().endsWith("workflow-instances")&&(this.applyQueryString(e.search),await this.loadWorkflowInstances())}onSelectAllCheckChange(e){const t=e.target.checked;if(this.selectAllChecked=t,t){let e=[];this.workflowInstances.items.forEach((t=>{this.selectedWorkflowInstanceIds.includes(t.id)||e.push(t.id)})),e.length>0&&(this.selectedWorkflowInstanceIds=this.selectedWorkflowInstanceIds.concat(e))}else{const e=this.workflowInstances.items.map((e=>e.id));this.selectedWorkflowInstanceIds=this.selectedWorkflowInstanceIds.filter((t=>!e.includes(t)))}}onWorkflowInstanceCheckChange(e,t){this.selectedWorkflowInstanceIds=e.target.checked?[...this.selectedWorkflowInstanceIds,t.id]:this.selectedWorkflowInstanceIds.filter((e=>e!=t.id)),this.setSelectAllIndeterminateState()}async onCancelClick(e,t){const a=this.t;if(!await q.show(a("CancelDialog.Title"),a("CancelDialog.Message")))return;const s=await this.createClient();await s.workflowInstancesApi.cancel(t.id),await this.loadWorkflowInstances()}async onDeleteClick(e,t){const a=this.t;if(!await q.show(a("DeleteDialog.Title"),a("DeleteDialog.Message")))return;const s=await this.createClient();await s.workflowInstancesApi.delete(t.id),await this.loadWorkflowInstances()}async onRetryClick(e,t){const a=this.t;if(!await q.show(a("RetryDialog.Title"),a("RetryDialog.Message")))return;const s=await this.createClient();await s.workflowInstancesApi.retry(t.id),await this.loadWorkflowInstances()}async onBulkCancel(){const e=this.t;if(!await q.show(e("BulkCancelDialog.Title"),e("BulkCancelDialog.Message")))return;const t=await this.createClient();await t.workflowInstancesApi.bulkCancel({workflowInstanceIds:this.selectedWorkflowInstanceIds}),this.selectedWorkflowInstanceIds=[],await this.loadWorkflowInstances(),this.currentPage=0}async onBulkDelete(){const e=this.t;if(!await q.show(e("BulkDeleteDialog.Title"),e("BulkDeleteDialog.Message")))return;const t=await this.createClient();await t.workflowInstancesApi.bulkDelete({workflowInstanceIds:this.selectedWorkflowInstanceIds}),this.selectedWorkflowInstanceIds=[],await this.loadWorkflowInstances(),this.currentPage=0}async onBulkRetry(){const e=this.t;if(!await q.show(e("BulkRetryDialog.Title"),e("BulkRetryDialog.Message")))return;const t=await this.createClient();await t.workflowInstancesApi.bulkRetry({workflowInstanceIds:this.selectedWorkflowInstanceIds}),this.selectedWorkflowInstanceIds=[],await this.loadWorkflowInstances(),this.currentPage=0}async onBulkActionSelected(e){const t=e.detail;switch(t.name){case"Cancel":await this.onBulkCancel();break;case"Delete":await this.onBulkDelete();break;case"Retry":await this.onBulkRetry();break;default:t.handler()}this.updateSelectAllChecked()}async onSearch(e){e.preventDefault();const t=new FormData(e.currentTarget).get("searchTerm");this.currentSearchTerm=t.toString(),await this.loadWorkflowInstances()}render(){const e=this.basePath,a=this.workflowInstances.items,s=this.workflowBlueprints,l=this.workflowInstances.totalCount,n=this.t;return t("div",null,t("div",{class:"elsa-relative elsa-z-10 elsa-flex-shrink-0 elsa-flex elsa-h-16 elsa-bg-white elsa-border-b elsa-border-gray-200"},t("div",{class:"elsa-flex-1 elsa-px-4 elsa-flex elsa-justify-between sm:elsa-px-6 lg:elsa-px-8"},t("div",{class:"elsa-flex-1 elsa-flex"},t("form",{class:"elsa-w-full elsa-flex md:ml-0",onSubmit:e=>this.onSearch(e)},t("label",{htmlFor:"search_field",class:"elsa-sr-only"},"Search"),t("div",{class:"elsa-relative elsa-w-full elsa-text-gray-400 focus-within:elsa-text-gray-600"},t("div",{class:"elsa-absolute elsa-inset-y-0 elsa-left-0 elsa-flex elsa-items-center elsa-pointer-events-none"},t("svg",{class:"elsa-h-5 elsa-w-5",fill:"currentColor",viewBox:"0 0 20 20"},t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}))),t("input",{name:"searchTerm",class:"elsa-block elsa-w-full elsa-h-full elsa-pl-8 elsa-pr-3 elsa-py-2 elsa-rounded-md elsa-text-gray-900 elsa-placeholder-gray-500 focus:elsa-placeholder-gray-400 sm:elsa-text-sm elsa-border-0 focus:elsa-outline-none focus:elsa-ring-0",placeholder:n("Search"),type:"search"})))))),t("div",{class:"elsa-p-8 elsa-flex elsa-content-end elsa-justify-right elsa-bg-white elsa-space-x-4"},t("div",{class:"elsa-flex-shrink-0"},this.renderBulkActions()),t("div",{class:"elsa-flex-1"}," "),this.renderPageSizeFilter(),this.renderWorkflowFilter(),this.renderStatusFilter(),this.renderOrderByFilter()),t("div",{class:"elsa-mt-8 sm:elsa-block"},t("div",{class:"elsa-align-middle elsa-inline-block elsa-min-w-full elsa-border-b elsa-border-gray-200"},t("table",{class:"elsa-min-w-full"},t("thead",null,t("tr",{class:"elsa-border-t elsa-border-gray-200"},t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},t("input",{type:"checkbox",value:"true",checked:this.getSelectAllState(),onChange:e=>this.onSelectAllCheckChange(e),ref:e=>this.selectAllCheckboxEl=e,class:"focus:elsa-ring-blue-500 elsa-h-4 elsa-w-4 elsa-text-blue-600 elsa-border-gray-300 elsa-rounded"})),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Id")),t("th",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.CorrelationId")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Workflow")),t("th",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-right elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Version")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.InstanceName")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Status")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Created")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Finished")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.LastExecuted")),t("th",{class:"elsa-px-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-left elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"},n("Table.Faulted")),t("th",{class:"elsa-pr-6 elsa-py-3 elsa-border-b elsa-border-gray-200 elsa-bg-gray-50 elsa-text-xs elsa-leading-4 elsa-font-medium elsa-text-gray-500 elsa-uppercase elsa-tracking-wider"}))),t("tbody",{class:"elsa-bg-white elsa-divide-y elsa-divide-gray-100"},a.map((a=>{var l;const r=null!==(l=s.find((e=>e.versionId==a.definitionVersionId)))&&void 0!==l?l:{name:"Not Found",displayName:"(Workflow definition not found)"},i=r.displayName||r.name||"(Untitled)",o=this.getStatusColor(a.workflowStatus),c=`${e}/workflow-instances/${a.id}`,u=a.correlationId?a.correlationId:"",h=`${e}/workflow-instances?correlationId=${u}`,d=`${e}/workflow-registry/${a.definitionId}`,f=a.name?a.name:"",g=this.selectedWorkflowInstanceIds.findIndex((e=>e===a.id))>=0,p=te(a.createdAt),w=a.finishedAt?te(a.finishedAt):null,y=a.lastExecutedAt?te(a.lastExecutedAt):null,x=a.faultedAt?te(a.faultedAt):null,b=a.workflowStatus==G.Faulted,v=[{text:n("Table.ContextMenu.View"),anchorUrl:c,icon:t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))},{text:n("Table.ContextMenu.Cancel"),clickHandler:e=>this.onCancelClick(e,a),icon:t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"}))},b?{text:n("Table.ContextMenu.Retry"),clickHandler:e=>this.onRetryClick(e,a),icon:t("svg",{class:"elsa-h-5 w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"}),t("path",{d:"M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1",transform:"rotate(120 12 13)"}),t("path",{d:"M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1",transform:"rotate(240 12 13)"}))}:null,{text:n("Table.ContextMenu.Delete"),clickHandler:e=>this.onDeleteClick(e,a),icon:t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),t("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),t("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),t("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),t("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"}))}].filter((e=>null!=e));return t("tr",null,t("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900"},t("input",{type:"checkbox",value:a.id,checked:g,onChange:e=>this.onWorkflowInstanceCheckChange(e,a),class:"focus:elsa-ring-blue-500 elsa-h-4 elsa-w-4 elsa-text-blue-600 elsa-border-gray-300 elsa-rounded"})),t("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900"},t("stencil-route-link",{url:c,anchorClass:"elsa-truncate hover:elsa-text-gray-600"},a.id)),t("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900"},t("stencil-route-link",{url:h,anchorClass:"elsa-truncate hover:elsa-text-gray-600"},u)),t("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900 elsa-text-left"},t("stencil-route-link",{url:d,anchorClass:"elsa-truncate hover:elsa-text-gray-600"},i)),t("td",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-right elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-uppercase"},a.version),t("td",{class:"elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-font-medium elsa-text-gray-900 elsa-text-left"},t("stencil-route-link",{url:c,anchorClass:"elsa-truncate hover:elsa-text-gray-600"},f)),t("td",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-text-right"},t("div",{class:"elsa-flex elsa-items-center elsa-space-x-3 lg:elsa-pl-2"},t("div",{class:`flex-shrink-0 elsa-w-2-5 elsa-h-2-5 elsa-rounded-full elsa-bg-${o}-600`}),t("span",null,a.workflowStatus))),t("td",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-text-left"},p.format("DD-MM-YYYY HH:mm:ss")),t("td",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-text-left"},w?w.format("DD-MM-YYYY HH:mm:ss"):"-"),t("td",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-text-left"},y?y.format("DD-MM-YYYY HH:mm:ss"):"-"),t("td",{class:"hidden md:elsa-table-cell elsa-px-6 elsa-py-3 elsa-whitespace-no-wrap elsa-text-sm elsa-leading-5 elsa-text-gray-500 elsa-text-left"},x?x.format("DD-MM-YYYY HH:mm:ss"):"-"),t("td",{class:"elsa-pr-6"},t("elsa-context-menu",{history:this.history,menuItems:v})))})))),t("elsa-pager",{page:this.currentPage,pageSize:this.currentPageSize,totalCount:l,history:this.history,onPaged:this.onPaged,culture:this.culture}))))}renderBulkActions(){const e=t("svg",{class:"elsa-mr-3 elsa-h-5 elsa-w-5 elsa-text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M13 10V3L4 14h7v7l9-11h-7z"})),a=this.bulkActions;return t("elsa-dropdown-button",{text:(0,this.t)("BulkActions.Title"),items:a,icon:e,origin:ee.TopLeft,onItemSelected:e=>this.onBulkActionSelected(e)})}renderWorkflowFilter(){const e=this.t,a=this.getLatestWorkflowBlueprintVersions(),s=this.selectedCorrelationId,l=this.selectedWorkflowId,n=a.find((e=>e.id==l)),r=l?n&&(n.name||n.displayName)?n.displayName||n.name:e("Untitled"):e("Filters.Workflow.Label"),i=this.selectedWorkflowStatus,o=this.selectedOrderByState,c=this.history;let u=a.map((t=>{const a={text:t.displayName&&t.displayName.length>0?t.displayName:t.name||e("Untitled"),value:t.id,isSelected:t.id==l};return c&&(a.url=this.buildFilterUrl(t.id,i,o,null,s)),a}));const h={text:e("Filters.Workflow.All"),value:null,isSelected:!l};return c&&(h.url=this.buildFilterUrl(null,i,o,null,s)),u=[h,...u],t("elsa-dropdown-button",{text:r,items:u,icon:t("svg",{class:"elsa-mr-3 elsa-h-5 elsa-w-5 elsa-text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),t("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),t("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),t("rect",{x:"14",y:"14",width:"6",height:"6",rx:"1"})),origin:ee.TopRight,onItemSelected:e=>this.handleWorkflowIdChanged(e.detail.value)})}renderStatusFilter(){const e=this.t,a=this.correlationId,s=this.selectedWorkflowStatus,l=s||e("Filters.Status.Label"),n=this.history,r=[null,G.Running,G.Suspended,G.Finished,G.Faulted,G.Cancelled,G.Idle].map((t=>{const l={text:null!=t?t:e("Filters.Status.All"),isSelected:t==s,value:t};return n&&(l.url=this.buildFilterUrl(this.selectedWorkflowId,t,this.selectedOrderByState,null,a)),l}));return t("elsa-dropdown-button",{text:l,items:r,icon:t("svg",{class:"elsa-mr-3 elsa-h-5 elsa-w-5 elsa-text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t("circle",{cx:"12",cy:"12",r:"10"}),t("polygon",{points:"10 8 16 12 10 16 10 8"})),origin:ee.TopRight,onItemSelected:e=>this.handleWorkflowStatusChanged(e.detail.value)})}renderPageSizeFilter(){const e=this.correlationId,a=this.currentPageSize,s=(0,this.t)("Filters.PageSize.SelectedLabel",{Size:a}),l=this.history,n=[5,10,15,20,30,50,100].map((t=>{const s={text:""+t,isSelected:t==a,value:t};return l&&(s.url=this.buildFilterUrl(this.selectedWorkflowId,this.selectedWorkflowStatus,this.selectedOrderByState,t,e)),s}));return t("elsa-dropdown-button",{text:s,items:n,icon:t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-400 elsa-mr-2",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),t("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),t("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),t("line",{x1:"5",y1:"6",x2:"5",y2:"6.01"}),t("line",{x1:"5",y1:"12",x2:"5",y2:"12.01"}),t("line",{x1:"5",y1:"18",x2:"5",y2:"18.01"})),origin:ee.TopRight,onItemSelected:e=>this.handlePageSizeChanged(e.detail.value)})}renderOrderByFilter(){const e=this.t,a=this.correlationId,s=this.selectedOrderByState,l=s?e("Filters.Sort.SelectedLabel",{Key:s}):e("Filters.Sort.Label"),n=this.history,r=[Z.Finished,Z.LastExecuted,Z.Started].map((e=>{const t={text:e,value:e,isSelected:e==s};return n&&(t.url=this.buildFilterUrl(this.selectedWorkflowId,this.selectedWorkflowStatus,e,null,a)),t}));return t("elsa-dropdown-button",{text:l,items:r,icon:t("svg",{class:"elsa-mr-3 elsa-h-5 elsa-w-5 elsa-text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"})),origin:ee.TopRight,onItemSelected:e=>this.handleOrderByChanged(e.detail.value)})}static get watchers(){return{workflowId:["handleWorkflowIdChanged"],correlationId:["handleCorrelationIdChanged"],workflowStatus:["handleWorkflowStatusChanged"],currentPageSize:["handlePageSizeChanged"],orderBy:["handleOrderByChanged"]}}};Je.DEFAULT_PAGE_SIZE=15,Je.MIN_PAGE_SIZE=5,Je.MAX_PAGE_SIZE=100,Je.START_PAGE=0,se.injectProps(Je,["serverUrl","culture","basePath"]),a(Je);export{Je as elsa_workflow_instance_list_screen}