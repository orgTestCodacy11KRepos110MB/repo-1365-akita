(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||c;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(107)),i={title:"Angular Schematics"},o={unversionedId:"angular/schematics",id:"angular/schematics",isDocsHomePage:!1,title:"Angular Schematics",description:"Scaffolding library for Angular applications using Akita.",source:"@site/docs/angular/schematics.mdx",slug:"/angular/schematics",permalink:"/akita/docs/angular/schematics",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/angular/schematics.mdx",version:"current",sidebar:"docs",previous:{title:"Angular Router Store",permalink:"/akita/docs/angular/router"},next:{title:"Unit Tests",permalink:"/akita/docs/angular/tests"}},l=[{value:"Default Schematics Collection",id:"default-schematics-collection",children:[]},{value:"Create a New Feature",id:"create-a-new-feature",children:[{value:"Generate a Store",id:"generate-a-store",children:[]},{value:"Generate a Query",id:"generate-a-query",children:[]},{value:"Generate a Model",id:"generate-a-model",children:[]},{value:"Generate a Service",id:"generate-a-service",children:[]},{value:"Generate an NgEntityService",id:"generate-an-ngentityservice",children:[]},{value:"Generate Tests",id:"generate-tests",children:[]},{value:"Generate Module",id:"generate-module",children:[]},{value:"Generate several stores under the same state folder",id:"generate-several-stores-under-the-same-state-folder",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Scaffolding library for Angular applications using Akita.")),Object(c.b)("p",null,"Schematics provides CLI commands for generating files when building new features with Akita. Built on top of Schematics, this tool integrates with the Angular CLI."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"ng add @datorama/akita\n")),Object(c.b)("h2",{id:"default-schematics-collection"},"Default Schematics Collection"),Object(c.b)("p",null,"To use ",Object(c.b)("inlineCode",{parentName:"p"},"@datorama/akita")," as the default collection in your Angular CLI project, add it to your ",Object(c.b)("inlineCode",{parentName:"p"},"angular.json"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng config cli.defaultCollection @datorama/akita\n")),Object(c.b)("p",null,"The package extend the default ",Object(c.b)("inlineCode",{parentName:"p"},"@schematics/angular")," collection. If you want to set defaults for schematics such as generating components with ",Object(c.b)("inlineCode",{parentName:"p"},"scss")," file, you must change the schematics package name from ",Object(c.b)("inlineCode",{parentName:"p"},"@schematics/angular")," to ",Object(c.b)("inlineCode",{parentName:"p"},"@datorama/akita")," in ",Object(c.b)("inlineCode",{parentName:"p"},"angular.json"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="angular.json"',title:'"angular.json"'}),'"schematics": {\n  "@datorama/akita:component": {\n    "styleext": "scss"\n  }\n}\n')),Object(c.b)("h2",{id:"create-a-new-feature"},"Create a New Feature"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g @datorama/akita:feature todos/todos\n")),Object(c.b)("p",null,"The defauls feature will output an entity feature, you can choose between different kind of ",Object(c.b)("inlineCode",{parentName:"p"},"EntityService"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default: A regular service with CRUD boilerplate."),Object(c.b)("li",{parentName:"ul"},"Http: A ",Object(c.b)("inlineCode",{parentName:"li"},"NgEntityService")," powered by the HttpClient (requires ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"entity-service"}),"@datorama/akita-ng-entity-service"),")."),Object(c.b)("li",{parentName:"ul"},"Firebase: A ",Object(c.b)("inlineCode",{parentName:"li"},"CollectionService")," powered by AngularFirestore (requires ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/dappsnation/akita-ng-fire"}),"akita-ng-fire"),").")),Object(c.b)("p",null,"You can also generate the normal feature with the ",Object(c.b)("inlineCode",{parentName:"p"},"plain")," option:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'ng g @datorama/akita:feature auth/auth --plain\n\noptions:\n  --withActive="Active" / "MultiActive" // decides which interface the store will implement, ActiveState or MultiActiveState\n')),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The akita-schematics: prefix is only needed when the default collection isn't set to akita-schematics"))),Object(c.b)("h3",{id:"generate-a-store"},"Generate a Store"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'ng g @datorama/akita:as todos\nng g @datorama/akita:aes todos // entity store\n\noptions:\n  --withActive="Active" / "MultiActive" // decides which interface the store will implement, ActiveState or MultiActiveState\n')),Object(c.b)("h3",{id:"generate-a-query"},"Generate a Query"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g @datorama/akita:query todos\nng g @datorama/akita:entity-query todos\n\nAlias:\nng g @datorama/akita:aq todos\nng g @datorama/akita:aeq todos // entity query\n")),Object(c.b)("h3",{id:"generate-a-model"},"Generate a Model"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g @datorama/akita:model todo\n\nAlias:\nng g @datorama/akita:am todo\n")),Object(c.b)("h3",{id:"generate-a-service"},"Generate a Service"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g @datorama/akita:service todos\n\nAlias:\nng g @datorama/akita:asr todos\n")),Object(c.b)("h3",{id:"generate-an-ngentityservice"},"Generate an NgEntityService"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g @datorama/akita:http-entity-service todos\n\nAlias:\nng g @datorama/akita:ahes todos\n")),Object(c.b)("h3",{id:"generate-tests"},"Generate Tests"),Object(c.b)("p",null,"Add the ",Object(c.b)("inlineCode",{parentName:"p"},"--spec")," option. For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g af products/products --spec\n")),Object(c.b)("h3",{id:"generate-module"},"Generate Module"),Object(c.b)("p",null,"Add the ",Object(c.b)("inlineCode",{parentName:"p"},"--withModule")," to generate module and Akita component. (only for entity store)"),Object(c.b)("h3",{id:"generate-several-stores-under-the-same-state-folder"},"Generate several stores under the same state folder"),Object(c.b)("p",null,'There might be a case when you need to have more than one store per feature. For example, you have a module "CRM", where\nyou have a few entities, like addresses or contacts. So you want to have one single state folder under "CRM" and under\nthat, for every store, a subfolder. Like this:'),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"CRM\n\u2514\u2500\u2500 state\n    \u251c\u2500\u2500 address\n    \u2502   \u251c\u2500\u2500 address.model.ts\n    \u2502   \u251c\u2500\u2500 address.query.ts\n    \u2502   \u251c\u2500\u2500 address.service.ts\n    \u2502   \u2514\u2500\u2500 address.store.ts\n    \u2514\u2500\u2500 contacts\n        \u251c\u2500\u2500 contact.model.ts\n        \u251c\u2500\u2500 contacts.query.ts\n        \u251c\u2500\u2500 contacts.service.ts\n        \u2514\u2500\u2500 contacts.store.ts\n")),Object(c.b)("p",null,"To do so, add the ",Object(c.b)("inlineCode",{parentName:"p"},"--flat false")," to your commands:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ng g af CRM/address --flat false\nng g af CRM/contacts --flat false\n")))}d.isMDXComponent=!0}}]);