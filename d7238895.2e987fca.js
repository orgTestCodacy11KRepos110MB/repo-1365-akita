(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(107)),s={title:"Class Support"},i={unversionedId:"additional/class",id:"additional/class",isDocsHomePage:!1,title:"Class Support",description:"Akita also supports using a class as the underlying value instead of a plain object. In most cases, we don't recommend doing so for the following reasons:",source:"@site/docs/additional/class.mdx",slug:"/additional/class",permalink:"/akita/docs/additional/class",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/class.mdx",version:"current",sidebar:"docs",previous:{title:"Plain JS Usage",permalink:"/akita/docs/additional/js"},next:{title:"State History",permalink:"/akita/docs/plugins/state-history"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Akita also supports using a ",Object(o.b)("inlineCode",{parentName:"p"},"class")," as the underlying value instead of a plain object. In most cases, we don't recommend doing so for the following reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"We can\u2019t store classes in the database. A typical example of this is when you need to save the store snapshot."),Object(o.b)("li",{parentName:"ol"},"Classes are harder to use with web workers, due to serialization concerns."),Object(o.b)("li",{parentName:"ol"},"There are various third-party tools (for example ",Object(o.b)("inlineCode",{parentName:"li"},"immer"),") that only work with plain objects.")),Object(o.b)("p",null,"However, sometimes they can be useful. Here's an example that uses a class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.model.ts"',title:'"user.model.ts"'}),"export class User {\n  constructor({ firstName, lastName, token }: Partial<User>) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.token = token;\n  }\n\n  get name() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.store.ts"',title:'"user.store.ts"'}),"export interface UserState extends EntityState<User> {}\n\n@StoreConfig({ name: 'user' })\nexport class UserStore extends EntityStore<UserState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The class constructor should accept ",Object(o.b)("strong",{parentName:"p"},"only")," one parameter which is a plain object"))),Object(o.b)("p",null,"In this case, when you call ",Object(o.b)("inlineCode",{parentName:"p"},"update()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"add()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"set()"),", Akita will take care to instantiate a new ",Object(o.b)("inlineCode",{parentName:"p"},"User")," by merging the entity's current state with the new parameters."))}p.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,i(i({ref:t},l),{},{components:n})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);