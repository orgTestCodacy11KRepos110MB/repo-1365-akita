(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,h=u["".concat(r,".").concat(p)]||u[p]||b[p]||a;return n?o.a.createElement(h,d(d({ref:t},c),{},{components:n})):o.a.createElement(h,d({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var c=2;c<a;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(2),o=n(6),a=(n(0),n(107)),r={title:"State History"},d={unversionedId:"plugins/state-history",id:"plugins/state-history",isDocsHomePage:!1,title:"State History",description:"The StateHistoryPlugin provides a convenient way for undo and redo functionality, saving you the trouble of maintaining a history in the app yourself.",source:"@site/docs/plugins/state-history.mdx",slug:"/plugins/state-history",permalink:"/akita/docs/plugins/state-history",editUrl:"https://github.com/salesforce/akita/edit/master/docs/docs/plugins/state-history.mdx",version:"current",sidebar:"docs",previous:{title:"Class Support",permalink:"/akita/docs/additional/class"},next:{title:"Dirty Check",permalink:"/akita/docs/plugins/dirty-check"}},s=[{value:"API",id:"api",children:[{value:"<code>undo()</code>",id:"undo",children:[]},{value:"<code>redo()</code>",id:"redo",children:[]},{value:"<code>jump()</code>",id:"jump",children:[]},{value:"<code>jumpToPast(index: number)</code>",id:"jumptopastindex-number",children:[]},{value:"<code>jumpToFuture(index: number)</code>",id:"jumptofutureindex-number",children:[]},{value:"<code>clear()</code>",id:"clear",children:[]},{value:"<code>ignoreNext()</code>",id:"ignorenext",children:[]},{value:"<code>destroy(clearHistory = false)</code>",id:"destroyclearhistory--false",children:[]},{value:"<code>hasPast()</code>",id:"haspast",children:[]},{value:"<code>hasFuture()</code>",id:"hasfuture",children:[]},{value:"<code>hasPast$</code>",id:"haspast-1",children:[]},{value:"<code>hasFuture$</code>",id:"hasfuture-1",children:[]}]},{value:"Options",id:"options",children:[{value:"<code>maxAge</code>",id:"maxage",children:[]},{value:"<code>watchProperty</code>",id:"watchproperty",children:[]}]},{value:"EntityStateHistoryPlugin",id:"entitystatehistoryplugin",children:[{value:"API",id:"api-1",children:[]},{value:"<code>undo(entityId?: IDS)</code>",id:"undoentityid-ids",children:[]},{value:"<code>redo(entityId?: IDS)</code>",id:"redoentityid-ids",children:[]},{value:"<code>jumpToPast(entityId?: IDS, index: number)</code>",id:"jumptopastentityid-ids-index-number",children:[]},{value:"<code>jumpToFuture(entityId?: IDS, index: number)</code>",id:"jumptofutureentityid-ids-index-number",children:[]},{value:"<code>clear(entityId?: IDS)</code>",id:"clearentityid-ids",children:[]},{value:"<code>destroy(entityId?: IDS, clearHistory = false)</code>",id:"destroyentityid-ids-clearhistory--false",children:[]},{value:"<code>hasPast(entityId: ID)</code>",id:"haspastentityid-id",children:[]},{value:"<code>hasFuture(entityId: ID)</code>",id:"hasfutureentityid-id",children:[]}]},{value:"Options",id:"options-1",children:[{value:"<code>maxAge</code>",id:"maxage-1",children:[]},{value:"<code>entityIds</code>",id:"entityids",children:[]}]}],c={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"StateHistoryPlugin")," provides a convenient way for ",Object(a.b)("inlineCode",{parentName:"p"},"undo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"redo")," functionality, saving you the trouble of maintaining a history in the app yourself.\nTo use it you should instantiate a new ",Object(a.b)("inlineCode",{parentName:"p"},"StateHistoryPlugin")," object, passing the ",Object(a.b)("inlineCode",{parentName:"p"},"Query"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.component.ts"',title:'"todos.component.ts"'}),"import { StateHistoryPlugin } from '@datorama/akita';\n\nexport class TodosPageComponent {\n  private stateHistory: StateHistoryPlugin;\n\n  constructor(private todosQuery: TodosQuery) {}\n\n  ngOnInit() {\n    this.stateHistory = new StateHistoryPlugin(this.todosQuery);\n  }\n}\n")),Object(a.b)("p",null,"From the moment you call it, Akita's ",Object(a.b)("inlineCode",{parentName:"p"},"StateHistory")," tracks the history of the store and gives you the following functionality:"),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("h3",{id:"undo"},Object(a.b)("inlineCode",{parentName:"h3"},"undo()")),Object(a.b)("p",null,"undo the last change."),Object(a.b)("h3",{id:"redo"},Object(a.b)("inlineCode",{parentName:"h3"},"redo()")),Object(a.b)("p",null,"redo the last change."),Object(a.b)("h3",{id:"jump"},Object(a.b)("inlineCode",{parentName:"h3"},"jump()")),Object(a.b)("p",null,"jump n steps in the past or forward."),Object(a.b)("h3",{id:"jumptopastindex-number"},Object(a.b)("inlineCode",{parentName:"h3"},"jumpToPast(index: number)")),Object(a.b)("p",null,"jump to the provided index in the past (assuming index is valid)."),Object(a.b)("h3",{id:"jumptofutureindex-number"},Object(a.b)("inlineCode",{parentName:"h3"},"jumpToFuture(index: number)")),Object(a.b)("p",null,"jump to the provided index in the future (assuming index is valid)."),Object(a.b)("h3",{id:"clear"},Object(a.b)("inlineCode",{parentName:"h3"},"clear()")),Object(a.b)("p",null,"clear the history. "),Object(a.b)("h3",{id:"ignorenext"},Object(a.b)("inlineCode",{parentName:"h3"},"ignoreNext()")),Object(a.b)("p",null,"ignores the next store's update call. You should call it before updating the store. "),Object(a.b)("h3",{id:"destroyclearhistory--false"},Object(a.b)("inlineCode",{parentName:"h3"},"destroy(clearHistory = false)")),Object(a.b)("p",null,"unsubscribe and optionally clear the history."),Object(a.b)("h3",{id:"haspast"},Object(a.b)("inlineCode",{parentName:"h3"},"hasPast()")),Object(a.b)("p",null,"A boolean flag that returns whether the history is not empty."),Object(a.b)("h3",{id:"hasfuture"},Object(a.b)("inlineCode",{parentName:"h3"},"hasFuture()")),Object(a.b)("p",null,"A boolean flag that returns whether you're not in the latest step in the history."),Object(a.b)("h3",{id:"haspast-1"},Object(a.b)("inlineCode",{parentName:"h3"},"hasPast$")),Object(a.b)("p",null,"An observable that returns whether the history is not empty."),Object(a.b)("h3",{id:"hasfuture-1"},Object(a.b)("inlineCode",{parentName:"h3"},"hasFuture$")),Object(a.b)("p",null,"An observable that returns whether you're not in the latest step in the history."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"maxage"},Object(a.b)("inlineCode",{parentName:"h3"},"maxAge")),Object(a.b)("p",null,"Maximum amount of changes to be stored in the history (default: 10):"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const options = { maxAge: 3 };\nstateHistory = new StateHistoryPlugin(todosQuery, options);\n")),Object(a.b)("h3",{id:"watchproperty"},Object(a.b)("inlineCode",{parentName:"h3"},"watchProperty")),Object(a.b)("p",null,"Watch a specific property:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const options = { watchProperty: 'editorText' };\nstateHistory = new StateHistoryPlugin(editorQuery, options);\n")),Object(a.b)("h2",{id:"entitystatehistoryplugin"},"EntityStateHistoryPlugin"),Object(a.b)("p",null,"In addition to the general history functionality,  Akita also provides a powerful API to help keep track of one or many entities, instead of the entire store. "),Object(a.b)("p",null,"A good example is when you have a table or a list of entities that the users can modify, and you want to give them a way to undo/redo their changes per entity. Here is how you can do it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { EntityStateHistoryPlugin } from '@datorama/akita';\n\nexport class TodosPageComponent {\n  private collection: EntityStateHistoryPlugin;\n\n  constructor(private todosQuery: TodosQuery) {}\n\n  ngOnInit() {\n    this.collection = new EntityStateHistoryPlugin(this.todosQuery);\n  }\n}\n")),Object(a.b)("p",null,"With this setup you will get the following functionality:"),Object(a.b)("h3",{id:"api-1"},"API"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"type IDS = ID | ID[]"),";"),Object(a.b)("h3",{id:"undoentityid-ids"},Object(a.b)("inlineCode",{parentName:"h3"},"undo(entityId?: IDS)")),Object(a.b)("p",null,"undo the last change."),Object(a.b)("h3",{id:"redoentityid-ids"},Object(a.b)("inlineCode",{parentName:"h3"},"redo(entityId?: IDS)")),Object(a.b)("p",null,"redo the last change."),Object(a.b)("h3",{id:"jumptopastentityid-ids-index-number"},Object(a.b)("inlineCode",{parentName:"h3"},"jumpToPast(entityId?: IDS, index: number)")),Object(a.b)("p",null,"jump to the provided index in the past (assuming index is valid)."),Object(a.b)("h3",{id:"jumptofutureentityid-ids-index-number"},Object(a.b)("inlineCode",{parentName:"h3"},"jumpToFuture(entityId?: IDS, index: number)")),Object(a.b)("p",null,"jump to the provided index in the future (assuming index is valid)."),Object(a.b)("h3",{id:"clearentityid-ids"},Object(a.b)("inlineCode",{parentName:"h3"},"clear(entityId?: IDS)")),Object(a.b)("p",null,"clear the history. "),Object(a.b)("h3",{id:"destroyentityid-ids-clearhistory--false"},Object(a.b)("inlineCode",{parentName:"h3"},"destroy(entityId?: IDS, clearHistory = false)")),Object(a.b)("p",null,"unsubscribe and optionally clear the history. "),Object(a.b)("h3",{id:"haspastentityid-id"},Object(a.b)("inlineCode",{parentName:"h3"},"hasPast(entityId: ID)")),Object(a.b)("p",null,"A boolean flag that returns whether the history is not empty."),Object(a.b)("h3",{id:"hasfutureentityid-id"},Object(a.b)("inlineCode",{parentName:"h3"},"hasFuture(entityId: ID)")),Object(a.b)("p",null,"A boolean flag that returns whether you're not in the latest step in the history."),Object(a.b)("h2",{id:"options-1"},"Options"),Object(a.b)("h3",{id:"maxage-1"},Object(a.b)("inlineCode",{parentName:"h3"},"maxAge")),Object(a.b)("p",null,"Maximum amount of changes to be stored in the history (default: 10):"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const options = { maxAge: 3 };\nstateHistory = new StateHistoryEntityPlugin(todosQuery, options);\n")),Object(a.b)("h3",{id:"entityids"},Object(a.b)("inlineCode",{parentName:"h3"},"entityIds")),Object(a.b)("p",null,"A single id or an array of entity ids (default: all)."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const options = { entityIds: [1, 2] };\nstateHistory = new StateHistoryEntityPlugin(editorQuery, options);\n")),Object(a.b)("p",null,"Here's a complete example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html",metastring:'title="todos.component.html"',title:'"todos.component.html"'}),'<table>\n  <tbody>\n    <tr *ngFor="let todo of todos$ | async">\n      <td>{{todo.title}}</td>\n      <td>\n        <input type="checkbox" [checked]="todo.completed" \n        (change)="update($event, todo)"/>\n      </td>\n      <td>\n        <i \n        [class.disabled]="!stateHistoryEntity.hasPast(todo.id)"\n        (click)="stateHistoryEntity.undo(todo.id)">undo</i>\n      </td>\n      <td>\n        <i \n        [class.disabled]="!stateHistoryEntity.hasFuture(todo.id)"\n        (click)="stateHistoryEntity.redo(todo.id)">redo</i>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')))}l.isMDXComponent=!0}}]);