import{t,m as e}from"./p-463bd84c.js";import"./p-ee0b9025.js";import"./p-d17a08e5.js";import"./p-f3f2f442.js";import"./p-ec6778d3.js";import"./p-f1ec68ec.js";import"./p-a3b5bd35.js";import"./p-80de33dc.js";import"./p-6f3ac5fa.js";import"./p-82db2ff5.js";import"./p-949334ec.js";import"./p-32ba7510.js";import"./p-bc995f78.js";import"./p-7aa9135d.js";import"./p-62312a9a.js";import"./p-498ca3d9.js";import"./p-f4e44994.js";import"./p-37161c4f.js";import"./p-96c5f56a.js";import"./p-83f217d4.js";import"./p-6cc453a9.js";import"./p-f931e145.js";import"./p-fd4270fe.js";import"./p-6b50e59c.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o=(t,e,r)=>(((t,e,r)=>{e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r})(t,"symbol"!=typeof e?e+"":e,r),r),a={};((t,e,o,a)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let o of s(e))i.call(t,o)||"default"===o||n(t,o,{get:()=>e[o],enumerable:!(a=r(e,o))||a.enumerable})})(a,e);var c=class{_modeId;_defaults;_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;constructor(t,e){this._modeId=t,this._defaults=e,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const t=++this._updateExtraLibsToken,e=await this._worker.getProxy();this._updateExtraLibsToken===t&&e.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((t=>this._worker?this._worker.withSyncedResources(a.editor.getModels().filter((t=>t.getLanguageId()===this._modeId)).map((t=>t.uri))):t))),this._client=t}return this._client}getLanguageServiceWorker(...t){let e;return this._getClient().then((t=>{e=t})).then((()=>{if(this._worker)return this._worker.withSyncedResources(t)})).then((()=>e))}},u={};function l(t,e,n=0){if("string"==typeof t)return t;if(void 0===t)return"";let r="";if(n){r+=e;for(let t=0;t<n;t++)r+="  "}if(r+=t.messageText,n++,t.next)for(const s of t.next)r+=l(s,e,n);return r}function p(t){return t?t.map((t=>t.text)).join(""):""}u["lib.d.ts"]=!0,u["lib.dom.d.ts"]=!0,u["lib.dom.iterable.d.ts"]=!0,u["lib.es2015.collection.d.ts"]=!0,u["lib.es2015.core.d.ts"]=!0,u["lib.es2015.d.ts"]=!0,u["lib.es2015.generator.d.ts"]=!0,u["lib.es2015.iterable.d.ts"]=!0,u["lib.es2015.promise.d.ts"]=!0,u["lib.es2015.proxy.d.ts"]=!0,u["lib.es2015.reflect.d.ts"]=!0,u["lib.es2015.symbol.d.ts"]=!0,u["lib.es2015.symbol.wellknown.d.ts"]=!0,u["lib.es2016.array.include.d.ts"]=!0,u["lib.es2016.d.ts"]=!0,u["lib.es2016.full.d.ts"]=!0,u["lib.es2017.d.ts"]=!0,u["lib.es2017.full.d.ts"]=!0,u["lib.es2017.intl.d.ts"]=!0,u["lib.es2017.object.d.ts"]=!0,u["lib.es2017.sharedmemory.d.ts"]=!0,u["lib.es2017.string.d.ts"]=!0,u["lib.es2017.typedarrays.d.ts"]=!0,u["lib.es2018.asyncgenerator.d.ts"]=!0,u["lib.es2018.asynciterable.d.ts"]=!0,u["lib.es2018.d.ts"]=!0,u["lib.es2018.full.d.ts"]=!0,u["lib.es2018.intl.d.ts"]=!0,u["lib.es2018.promise.d.ts"]=!0,u["lib.es2018.regexp.d.ts"]=!0,u["lib.es2019.array.d.ts"]=!0,u["lib.es2019.d.ts"]=!0,u["lib.es2019.full.d.ts"]=!0,u["lib.es2019.object.d.ts"]=!0,u["lib.es2019.string.d.ts"]=!0,u["lib.es2019.symbol.d.ts"]=!0,u["lib.es2020.bigint.d.ts"]=!0,u["lib.es2020.d.ts"]=!0,u["lib.es2020.full.d.ts"]=!0,u["lib.es2020.intl.d.ts"]=!0,u["lib.es2020.promise.d.ts"]=!0,u["lib.es2020.sharedmemory.d.ts"]=!0,u["lib.es2020.string.d.ts"]=!0,u["lib.es2020.symbol.wellknown.d.ts"]=!0,u["lib.es2021.d.ts"]=!0,u["lib.es2021.full.d.ts"]=!0,u["lib.es2021.intl.d.ts"]=!0,u["lib.es2021.promise.d.ts"]=!0,u["lib.es2021.string.d.ts"]=!0,u["lib.es2021.weakref.d.ts"]=!0,u["lib.es5.d.ts"]=!0,u["lib.es6.d.ts"]=!0,u["lib.esnext.d.ts"]=!0,u["lib.esnext.full.d.ts"]=!0,u["lib.esnext.intl.d.ts"]=!0,u["lib.esnext.promise.d.ts"]=!0,u["lib.esnext.string.d.ts"]=!0,u["lib.esnext.weakref.d.ts"]=!0,u["lib.scripthost.d.ts"]=!0,u["lib.webworker.d.ts"]=!0,u["lib.webworker.importscripts.d.ts"]=!0,u["lib.webworker.iterable.d.ts"]=!0;var h=class{constructor(t){this._worker=t}_textSpanToRange(t,e){let n=t.getPositionAt(e.start),r=t.getPositionAt(e.start+e.length),{lineNumber:s,column:i}=n,{lineNumber:o,column:a}=r;return{startLineNumber:s,startColumn:i,endLineNumber:o,endColumn:a}}},d=class{constructor(t){this._worker=t,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(t){return!!t&&0===t.path.indexOf("/lib.")&&!!u[t.path.slice(1)]}getOrCreateModel(e){const n=a.Uri.parse(e),r=a.editor.getModel(n);if(r)return r;if(this.isLibFile(n)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[n.path.slice(1)],"typescript",n);const s=t.getExtraLibs()[e];return s?a.editor.createModel(s.content,"typescript",n):null}_containsLibFile(t){for(let e of t)if(this.isLibFile(e))return!0;return!1}async fetchLibFilesIfNecessary(t){this._containsLibFile(t)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((t=>t.getLibFiles())).then((t=>{this._hasFetchedLibFiles=!0,this._libFiles=t}))),this._fetchLibFilesPromise}},f=class extends h{constructor(t,e,n,r){super(r),this._libFiles=t,this._defaults=e,this._selector=n;const s=t=>{if(t.getLanguageId()!==n)return;const e=()=>{const{onlyVisible:e}=this._defaults.getDiagnosticsOptions();e?t.isAttachedToEditor()&&this._doValidate(t):this._doValidate(t)};let r;const s=t.onDidChangeContent((()=>{clearTimeout(r),r=window.setTimeout(e,500)})),i=t.onDidChangeAttached((()=>{const{onlyVisible:n}=this._defaults.getDiagnosticsOptions();n&&(t.isAttachedToEditor()?e():a.editor.setModelMarkers(t,this._selector,[]))}));this._listener[t.uri.toString()]={dispose(){s.dispose(),i.dispose(),clearTimeout(r)}},e()},i=t=>{a.editor.setModelMarkers(t,this._selector,[]);const e=t.uri.toString();this._listener[e]&&(this._listener[e].dispose(),delete this._listener[e])};this._disposables.push(a.editor.onDidCreateModel((t=>s(t)))),this._disposables.push(a.editor.onWillDisposeModel(i)),this._disposables.push(a.editor.onDidChangeModelLanguage((t=>{i(t.model),s(t.model)}))),this._disposables.push({dispose(){for(const t of a.editor.getModels())i(t)}});const o=()=>{for(const t of a.editor.getModels())i(t),s(t)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),a.editor.getModels().forEach((t=>s(t)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((t=>t&&t.dispose())),this._disposables=[]}async _doValidate(t){const e=await this._worker(t.uri);if(t.isDisposed())return;const n=[],{noSyntaxValidation:r,noSemanticValidation:s,noSuggestionDiagnostics:i}=this._defaults.getDiagnosticsOptions();r||n.push(e.getSyntacticDiagnostics(t.uri.toString())),s||n.push(e.getSemanticDiagnostics(t.uri.toString())),i||n.push(e.getSuggestionDiagnostics(t.uri.toString()));const o=await Promise.all(n);if(!o||t.isDisposed())return;const c=o.reduce(((t,e)=>e.concat(t)),[]).filter((t=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(t.code))),u=c.map((t=>t.relatedInformation||[])).reduce(((t,e)=>e.concat(t)),[]).map((t=>t.file?a.Uri.parse(t.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(u),t.isDisposed()||a.editor.setModelMarkers(t,this._selector,c.map((e=>this._convertDiagnostics(t,e))))}_convertDiagnostics(t,e){const n=e.start||0,r=e.length||1,{lineNumber:s,column:i}=t.getPositionAt(n),{lineNumber:o,column:c}=t.getPositionAt(n+r),u=[];return e.reportsUnnecessary&&u.push(a.MarkerTag.Unnecessary),e.reportsDeprecated&&u.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(e.category),startLineNumber:s,startColumn:i,endLineNumber:o,endColumn:c,message:l(e.messageText,"\n"),code:e.code.toString(),tags:u,relatedInformation:this._convertRelatedInformation(t,e.relatedInformation)}}_convertRelatedInformation(t,e){if(!e)return[];const n=[];return e.forEach((e=>{let r=t;if(e.file&&(r=this._libFiles.getOrCreateModel(e.file.fileName)),!r)return;const s=e.start||0,i=e.length||1,{lineNumber:o,column:a}=r.getPositionAt(s),{lineNumber:c,column:u}=r.getPositionAt(s+i);n.push({resource:r.uri,startLineNumber:o,startColumn:a,endLineNumber:c,endColumn:u,message:l(e.messageText,"\n")})})),n}_tsDiagnosticCategoryToMarkerSeverity(t){switch(t){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}},m=class extends h{get triggerCharacters(){return["."]}async provideCompletionItems(t,e,n,r){const s=t.getWordUntilPosition(e),i=new a.Range(e.lineNumber,s.startColumn,e.lineNumber,s.endColumn),o=t.uri,c=t.getOffsetAt(e),u=await this._worker(o);if(t.isDisposed())return;const l=await u.getCompletionsAtPosition(o.toString(),c);return l&&!t.isDisposed()?{suggestions:l.entries.map((n=>{let r=i;if(n.replacementSpan){const e=t.getPositionAt(n.replacementSpan.start),s=t.getPositionAt(n.replacementSpan.start+n.replacementSpan.length);r=new a.Range(e.lineNumber,e.column,s.lineNumber,s.column)}const s=[];return-1!==n.kindModifiers?.indexOf("deprecated")&&s.push(a.languages.CompletionItemTag.Deprecated),{uri:o,position:e,offset:c,range:r,label:n.name,insertText:n.name,sortText:n.sortText,kind:m.convertKind(n.kind),tags:s}}))}:void 0}async resolveCompletionItem(t,e){const n=t,r=n.uri,s=n.position,i=n.offset,o=await this._worker(r),a=await o.getCompletionEntryDetails(r.toString(),i,n.label);return a?{uri:r,position:s,label:a.name,kind:m.convertKind(a.kind),detail:p(a.displayParts),documentation:{value:m.createDocumentationString(a)}}:n}static convertKind(t){switch(t){case x.primitiveType:case x.keyword:return a.languages.CompletionItemKind.Keyword;case x.variable:case x.localVariable:return a.languages.CompletionItemKind.Variable;case x.memberVariable:case x.memberGetAccessor:case x.memberSetAccessor:return a.languages.CompletionItemKind.Field;case x.function:case x.memberFunction:case x.constructSignature:case x.callSignature:case x.indexSignature:return a.languages.CompletionItemKind.Function;case x.enum:return a.languages.CompletionItemKind.Enum;case x.module:return a.languages.CompletionItemKind.Module;case x.class:return a.languages.CompletionItemKind.Class;case x.interface:return a.languages.CompletionItemKind.Interface;case x.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(t){let e=p(t.documentation);if(t.tags)for(const n of t.tags)e+=`\n\n${g(n)}`;return e}};function g(t){let e=`*@${t.name}*`;if("param"===t.name&&t.text){const[n,...r]=t.text;e+=`\`${n.text}\``,r.length>0&&(e+=` — ${r.map((t=>t.text)).join(" ")}`)}else Array.isArray(t.text)?e+=` — ${t.text.map((t=>t.text)).join(" ")}`:t.text&&(e+=` — ${t.text}`);return e}var w=class extends h{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,e,n,r){const s=t.uri,i=t.getOffsetAt(e),o=await this._worker(s);if(t.isDisposed())return;const a=await o.getSignatureHelpItems(s.toString(),i,{triggerReason:w._toSignatureHelpTriggerReason(r)});if(!a||t.isDisposed())return;const c={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]};return a.items.forEach((t=>{const e={label:"",parameters:[]};e.documentation={value:p(t.documentation)},e.label+=p(t.prefixDisplayParts),t.parameters.forEach(((n,r,s)=>{const i=p(n.displayParts),o={label:i,documentation:{value:p(n.documentation)}};e.label+=i,e.parameters.push(o),r<s.length-1&&(e.label+=p(t.separatorDisplayParts))})),e.label+=p(t.suffixDisplayParts),c.signatures.push(e)})),{value:c,dispose(){}}}},b=class extends h{async provideHover(t,e,n){const r=t.uri,s=t.getOffsetAt(e),i=await this._worker(r);if(t.isDisposed())return;const o=await i.getQuickInfoAtPosition(r.toString(),s);if(!o||t.isDisposed())return;const a=p(o.documentation),c=o.tags?o.tags.map((t=>g(t))).join("  \n\n"):"",u=p(o.displayParts);return{range:this._textSpanToRange(t,o.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:a+(c?"\n\n"+c:"")}]}}},y=class extends h{async provideDocumentHighlights(t,e,n){const r=t.uri,s=t.getOffsetAt(e),i=await this._worker(r);if(t.isDisposed())return;const o=await i.getOccurrencesAtPosition(r.toString(),s);return o&&!t.isDisposed()?o.map((e=>({range:this._textSpanToRange(t,e.textSpan),kind:e.isWriteAccess?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text}))):void 0}},v=class extends h{constructor(t,e){super(e),this._libFiles=t}async provideDefinition(t,e,n){const r=t.uri,s=t.getOffsetAt(e),i=await this._worker(r);if(t.isDisposed())return;const o=await i.getDefinitionAtPosition(r.toString(),s);if(!o||t.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((t=>a.Uri.parse(t.fileName)))),t.isDisposed())return;const c=[];for(let t of o){const e=this._libFiles.getOrCreateModel(t.fileName);e&&c.push({uri:e.uri,range:this._textSpanToRange(e,t.textSpan)})}return c}},j=class extends h{constructor(t,e){super(e),this._libFiles=t}async provideReferences(t,e,n,r){const s=t.uri,i=t.getOffsetAt(e),o=await this._worker(s);if(t.isDisposed())return;const c=await o.getReferencesAtPosition(s.toString(),i);if(!c||t.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(c.map((t=>a.Uri.parse(t.fileName)))),t.isDisposed())return;const u=[];for(let t of c){const e=this._libFiles.getOrCreateModel(t.fileName);e&&u.push({uri:e.uri,range:this._textSpanToRange(e,t.textSpan)})}return u}},S=class extends h{async provideDocumentSymbols(t,e){const n=t.uri,r=await this._worker(n);if(t.isDisposed())return;const s=await r.getNavigationBarItems(n.toString());if(!s||t.isDisposed())return;const i=(e,n,r)=>{let s={name:n.text,detail:"",kind:k[n.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(t,n.spans[0]),selectionRange:this._textSpanToRange(t,n.spans[0]),tags:[]};if(r&&(s.containerName=r),n.childItems&&n.childItems.length>0)for(let t of n.childItems)i(e,t,s.name);e.push(s)};let o=[];return s.forEach((t=>i(o,t))),o}},x=class{};o(x,"unknown",""),o(x,"keyword","keyword"),o(x,"script","script"),o(x,"module","module"),o(x,"class","class"),o(x,"interface","interface"),o(x,"type","type"),o(x,"enum","enum"),o(x,"variable","var"),o(x,"localVariable","local var"),o(x,"function","function"),o(x,"localFunction","local function"),o(x,"memberFunction","method"),o(x,"memberGetAccessor","getter"),o(x,"memberSetAccessor","setter"),o(x,"memberVariable","property"),o(x,"constructorImplementation","constructor"),o(x,"callSignature","call"),o(x,"indexSignature","index"),o(x,"constructSignature","construct"),o(x,"parameter","parameter"),o(x,"typeParameter","type parameter"),o(x,"primitiveType","primitive type"),o(x,"label","label"),o(x,"alias","alias"),o(x,"const","const"),o(x,"let","let"),o(x,"warning","warning");var k=Object.create(null);k[x.module]=a.languages.SymbolKind.Module,k[x.class]=a.languages.SymbolKind.Class,k[x.enum]=a.languages.SymbolKind.Enum,k[x.interface]=a.languages.SymbolKind.Interface,k[x.memberFunction]=a.languages.SymbolKind.Method,k[x.memberVariable]=a.languages.SymbolKind.Property,k[x.memberGetAccessor]=a.languages.SymbolKind.Property,k[x.memberSetAccessor]=a.languages.SymbolKind.Property,k[x.variable]=a.languages.SymbolKind.Variable,k[x.const]=a.languages.SymbolKind.Variable,k[x.localVariable]=a.languages.SymbolKind.Variable,k[x.variable]=a.languages.SymbolKind.Variable,k[x.function]=a.languages.SymbolKind.Function,k[x.localFunction]=a.languages.SymbolKind.Function;var C,_,N=class extends h{static _convertOptions(t){return{ConvertTabsToSpaces:t.insertSpaces,TabSize:t.tabSize,IndentSize:t.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(t,e){return{text:e.newText,range:this._textSpanToRange(t,e.span)}}},I=class extends N{async provideDocumentRangeFormattingEdits(t,e,n,r){const s=t.uri,i=t.getOffsetAt({lineNumber:e.startLineNumber,column:e.startColumn}),o=t.getOffsetAt({lineNumber:e.endLineNumber,column:e.endColumn}),a=await this._worker(s);if(t.isDisposed())return;const c=await a.getFormattingEditsForRange(s.toString(),i,o,N._convertOptions(n));return c&&!t.isDisposed()?c.map((e=>this._convertTextChanges(t,e))):void 0}},F=class extends N{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(t,e,n,r,s){const i=t.uri,o=t.getOffsetAt(e),a=await this._worker(i);if(t.isDisposed())return;const c=await a.getFormattingEditsAfterKeystroke(i.toString(),o,n,N._convertOptions(r));return c&&!t.isDisposed()?c.map((e=>this._convertTextChanges(t,e))):void 0}},L=class extends N{async provideCodeActions(t,e,n,r){const s=t.uri,i=t.getOffsetAt({lineNumber:e.startLineNumber,column:e.startColumn}),o=t.getOffsetAt({lineNumber:e.endLineNumber,column:e.endColumn}),a=N._convertOptions(t.getOptions()),c=n.markers.filter((t=>t.code)).map((t=>t.code)).map(Number),u=await this._worker(s);if(t.isDisposed())return;const l=await u.getCodeFixesAtPosition(s.toString(),i,o,c,a);return!l||t.isDisposed()?{actions:[],dispose:()=>{}}:{actions:l.filter((t=>0===t.changes.filter((t=>t.isNewFile)).length)).map((e=>this._tsCodeFixActionToMonacoCodeAction(t,n,e))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(t,e,n){const r=[];for(const e of n.changes)for(const n of e.textChanges)r.push({resource:t.uri,edit:{range:this._textSpanToRange(t,n.span),text:n.newText}});return{title:n.description,edit:{edits:r},diagnostics:e.markers,kind:"quickfix"}}},T=class extends h{constructor(t,e){super(e),this._libFiles=t}async provideRenameEdits(t,e,n,r){const s=t.uri,i=s.toString(),o=t.getOffsetAt(e),a=await this._worker(s);if(t.isDisposed())return;const c=await a.getRenameInfo(i,o,{allowRenameOfImportPath:!1});if(!1===c.canRename)return{edits:[],rejectReason:c.localizedErrorMessage};if(void 0!==c.fileToRename)throw new Error("Renaming files is not supported.");const u=await a.findRenameLocations(i,o,!1,!1,!1);if(!u||t.isDisposed())return;const l=[];for(const t of u){const e=this._libFiles.getOrCreateModel(t.fileName);if(!e)throw new Error(`Unknown file ${t.fileName}.`);l.push({resource:e.uri,edit:{range:this._textSpanToRange(e,t.textSpan),text:n}})}return{edits:l}}},O=class extends h{async provideInlayHints(t,e,n){const r=t.uri,s=r.toString(),i=t.getOffsetAt({lineNumber:e.startLineNumber,column:e.startColumn}),o=t.getOffsetAt({lineNumber:e.endLineNumber,column:e.endColumn}),a=await this._worker(r);return t.isDisposed()?null:{hints:(await a.provideInlayHints(s,i,o)).map((e=>({...e,label:e.text,position:t.getPositionAt(e.position),kind:this._convertHintKind(e.kind)}))),dispose:()=>{}}}_convertHintKind(t){switch(t){case"Parameter":return a.languages.InlayHintKind.Parameter;case"Type":default:return a.languages.InlayHintKind.Type}}};function A(t){_=D(t,"typescript")}function P(t){C=D(t,"javascript")}function R(){return new Promise(((t,e)=>{if(!C)return e("JavaScript not registered!");t(C)}))}function B(){return new Promise(((t,e)=>{if(!_)return e("TypeScript not registered!");t(_)}))}function D(t,e){const n=new c(e,t),r=(...t)=>n.getLanguageServiceWorker(...t),s=new d(r);return a.languages.registerCompletionItemProvider(e,new m(r)),a.languages.registerSignatureHelpProvider(e,new w(r)),a.languages.registerHoverProvider(e,new b(r)),a.languages.registerDocumentHighlightProvider(e,new y(r)),a.languages.registerDefinitionProvider(e,new v(s,r)),a.languages.registerReferenceProvider(e,new j(s,r)),a.languages.registerDocumentSymbolProvider(e,new S(r)),a.languages.registerDocumentRangeFormattingEditProvider(e,new I(r)),a.languages.registerOnTypeFormattingEditProvider(e,new F(r)),a.languages.registerCodeActionProvider(e,new L(r)),a.languages.registerRenameProvider(e,new T(s,r)),a.languages.registerInlayHintsProvider(e,new O(r)),new f(s,t,e,r),r}export{h as Adapter,L as CodeActionAdaptor,v as DefinitionAdapter,f as DiagnosticsAdapter,I as FormatAdapter,N as FormatHelper,F as FormatOnTypeAdapter,O as InlayHintsAdapter,x as Kind,d as LibFiles,y as OccurrencesAdapter,S as OutlineAdapter,b as QuickInfoAdapter,j as ReferenceAdapter,T as RenameAdapter,w as SignatureHelpAdapter,m as SuggestAdapter,c as WorkerManager,l as flattenDiagnosticMessageText,R as getJavaScriptWorker,B as getTypeScriptWorker,P as setupJavaScript,A as setupTypeScript}