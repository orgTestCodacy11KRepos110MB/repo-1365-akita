(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(107)),s={title:"Architecture"},c={unversionedId:"angular/architecture",id:"angular/architecture",isDocsHomePage:!1,title:"Architecture",description:"Let's say we are building from scratch an e-commerce  application. We start by creating a new project with Angular CLI:",source:"@site/docs/angular/architecture.mdx",slug:"/angular/architecture",permalink:"/akita/docs/angular/architecture",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/angular/architecture.mdx",version:"current",sidebar:"docs",previous:{title:"Akita CLI",permalink:"/akita/docs/enhancers/cli"},next:{title:"Local Component State",permalink:"/akita/docs/angular/local-state"}},i=[{value:"Session Feature",id:"session-feature",children:[]},{value:"Products Feature",id:"products-feature",children:[]},{value:"Join Queries",id:"join-queries",children:[]}],p={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's say we are building from scratch an e-commerce  application. We start by creating a new project with Angular CLI:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx @angular/cli new e-commerce\n")),Object(a.b)("p",null,"Next, we'll add Akita by using schematics:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng add @datorama/akita\n")),Object(a.b)("h2",{id:"session-feature"},"Session Feature"),Object(a.b)("p",null,"Now, we want to add a session module to our application, so we'll create a ",Object(a.b)("inlineCode",{parentName:"p"},"SessionModule"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng g m session\n")),Object(a.b)("p",null,"Inside the ",Object(a.b)("inlineCode",{parentName:"p"},"session")," module we can create components such as ",Object(a.b)("inlineCode",{parentName:"p"},"LoginComponent")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SignupComponent"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng g c session/login\nng g c session/signup\n")),Object(a.b)("p",null,"Now, it's time to choose our Store. The rule is simple. If you don't need to manage a collection of entities, you should go with the basic store. In this case, we only have one user, so we need to create the basic store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng g af session/session --plain\n")),Object(a.b)("p",null,"The above command creates a ",Object(a.b)("inlineCode",{parentName:"p"},"SessionStore"),", ",Object(a.b)("inlineCode",{parentName:"p"},"SessionQuery"),", and a ",Object(a.b)("inlineCode",{parentName:"p"},"SessionService"),". So now our application tree is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\ud83d\udce6app\n \u2523 \ud83d\udcc2session\n \u2503 \u2523 \ud83d\udcc2login\n \u2503 \u2503 \u2523 \ud83d\udcdclogin.component.css\n \u2503 \u2503 \u2523 \ud83d\udcdclogin.component.html\n \u2503 \u2503 \u2523 \ud83d\udcdclogin.component.spec.ts\n \u2503 \u2503 \u2517 \ud83d\udcdclogin.component.ts\n \u2503 \u2523 \ud83d\udcc2state\n \u2503 \u2503 \u2523 \ud83d\udcdcsession.query.ts\n \u2503 \u2503 \u2523 \ud83d\udcdcsession.service.ts\n \u2503 \u2503 \u2517 \ud83d\udcdcsession.store.ts\n \u2503 \u2517 \ud83d\udcdcsession.module.ts\n \u2523 \ud83d\udcdcapp-routing.module.ts\n \u2523 \ud83d\udcdcapp.component.css\n \u2523 \ud83d\udcdcapp.component.html\n \u2523 \ud83d\udcdcapp.component.spec.ts\n \u2523 \ud83d\udcdcapp.component.ts\n \u2517 \ud83d\udcdcapp.module.ts\n")),Object(a.b)("p",null,"Let's see each one of the files inside the ",Object(a.b)("inlineCode",{parentName:"p"},"state")," folder: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.store.ts"',title:'"session.store.ts"'}),"import { Injectable } from '@angular/core';\nimport { Store, StoreConfig } from '@datorama/akita';\n\nexport interface SessionState {\n   key: string;\n}\n\nexport function createInitialState(): SessionState {\n  return {\n    key: ''\n  };\n}\n\n@Injectable({ providedIn: 'root' })\n@StoreConfig({ name: 'session' })\nexport class SessionStore extends Store<SessionState> {\n\n  constructor() {\n    super(createInitialState());\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.query.ts"',title:'"session.query.ts"'}),"import { Injectable } from '@angular/core';\nimport { Query } from '@datorama/akita';\nimport { SessionStore, SessionState } from './session.store';\n\n@Injectable({ providedIn: 'root' })\nexport class SessionQuery extends Query<SessionState> {\n\n  constructor(protected store: SessionStore) {\n    super(store);\n  }\n\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.service.ts"',title:'"session.service.ts"'}),"import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { SessionStore } from './session.store';\n\n@Injectable({ providedIn: 'root' })\nexport class SessionService {\n\n  constructor(private sessionStore: SessionStore,\n              private http: HttpClient) {\n  }\n}\n")),Object(a.b)("p",null,"Each one of the providers is marked as ",Object(a.b)("inlineCode",{parentName:"p"},"@Injectable({ providedIn: 'root' })")," . It means that the store, the query, and the service are ",Object(a.b)("strong",{parentName:"p"},"app-wide")," singletons, and therefore can be accessed everywhere in our application. For example, in components, directives, services, and queries."),Object(a.b)("p",null,"Let's modify our ",Object(a.b)("inlineCode",{parentName:"p"},"session.store")," file and add the relevant properties:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.store.ts"',title:'"session.store.ts"'}),"import { Injectable } from '@angular/core';\nimport { Store, StoreConfig } from '@datorama/akita';\n\nexport interface SessionState {\n   name: string | null;\n   token: string | null;\n}\n\nexport function createInitialState(): SessionState {\n  return {\n    name: null,\n    token: null\n  };\n}\n\n@Injectable({ providedIn: 'root' })\n@StoreConfig({ name: 'session' })\nexport class SessionStore extends Store<SessionState> {\n\n  constructor() {\n    super(createInitialState());\n  }\n}\n")),Object(a.b)("p",null,"We recommend placing the logic for underlying queries inside the query class so it can be more readable and reusable:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.query.ts"',title:'"session.query.ts"'}),"import { Injectable } from '@angular/core';\nimport { Query } from '@datorama/akita';\nimport { SessionStore, SessionState } from './session.store';\n\n@Injectable({ providedIn: 'root' })\nexport class SessionQuery extends Query<SessionState> {\n  selectIsLogin$ = this.select('token');\n  selectName$ = this.select('name');\n  \n  constructor(protected store: SessionStore) {\n    super(store);\n  }\n}\n")),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"service"),", we'll make our server calls, and update the store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="session.service.ts"',title:'"session.service.ts"'}),"import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { SessionStore } from './session.store';\nimport { tap } from 'rxjs/operators';\n\n@Injectable({ providedIn: 'root' })\nexport class SessionService {\n\n  constructor(private sessionStore: SessionStore,\n              private http: HttpClient) {\n  }\n  \n  login(creds) {\n    return this.http(endpoint).pipe(\n      tap(user => this.sessionStore.update(user))\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"products-feature"},"Products Feature"),Object(a.b)("p",null,"First, we need to create the ",Object(a.b)("inlineCode",{parentName:"p"},"ProductsModule")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"ProductsPageComponent"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng g m products\nng g c products/products-page\n")),Object(a.b)("p",null,"Next, we want to maintain a ",Object(a.b)("strong",{parentName:"p"},"collection")," of products so we need to create an ",Object(a.b)("inlineCode",{parentName:"p"},"EntityStore"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng g af products/products\n")),Object(a.b)("p",null,"The above command creates a ",Object(a.b)("inlineCode",{parentName:"p"},"ProductsStore"),", ",Object(a.b)("inlineCode",{parentName:"p"},"ProductsQuery"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Product"),", and a ",Object(a.b)("inlineCode",{parentName:"p"},"ProductsService"),". So now our application tree is:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\ud83d\udce6app\n \u2523 \ud83d\udcc2products\n \u2503 \u2523 \ud83d\udcc2products-page\n \u2503 \u2503 \u2523 \ud83d\udcdcproducts-page.component.css\n \u2503 \u2503 \u2523 \ud83d\udcdcproducts-page.component.html\n \u2503 \u2503 \u2523 \ud83d\udcdcproducts-page.component.spec.ts\n \u2503 \u2503 \u2517 \ud83d\udcdcproducts-page.component.ts\n \u2503 \u2523 \ud83d\udcc2state\n \u2503 \u2503 \u2523 \ud83d\udcdcproduct.model.ts\n \u2503 \u2503 \u2523 \ud83d\udcdcproducts.query.ts\n \u2503 \u2503 \u2523 \ud83d\udcdcproducts.service.ts\n \u2503 \u2503 \u2517 \ud83d\udcdcproducts.store.ts\n \u2503 \u2517 \ud83d\udcdcproducts.module.ts\n \u2523 \ud83d\udcc2session\n \u2503 \u2523 \ud83d\udcc2login\n \u2503 \u2503 \u2523 \ud83d\udcdclogin.component.css\n \u2503 \u2503 \u2523 \ud83d\udcdclogin.component.html\n \u2503 \u2503 \u2523 \ud83d\udcdclogin.component.spec.ts\n \u2503 \u2503 \u2517 \ud83d\udcdclogin.component.ts\n \u2503 \u2523 \ud83d\udcc2state\n \u2503 \u2503 \u2523 \ud83d\udcdcsession.query.ts\n \u2503 \u2503 \u2523 \ud83d\udcdcsession.service.ts\n \u2503 \u2503 \u2517 \ud83d\udcdcsession.store.ts\n \u2503 \u2517 \ud83d\udcdcsession.module.ts\n \u2523 \ud83d\udcdcapp-routing.module.ts\n \u2523 \ud83d\udcdcapp.component.css\n \u2523 \ud83d\udcdcapp.component.html\n \u2523 \ud83d\udcdcapp.component.spec.ts\n \u2523 \ud83d\udcdcapp.component.ts\n \u2517 \ud83d\udcdcapp.module.ts\n")),Object(a.b)("p",null,"Let's see each one of the files inside the state folder: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.store.ts"',title:'"products.store.ts"'}),"import { Injectable } from '@angular/core';\nimport { Product } from './product.model';\nimport { EntityState, EntityStore, StoreConfig } from '@datorama/akita';\n\nexport interface ProductsState extends EntityState<Product, number> {}\n\n@Injectable({ providedIn: 'root' })\n@StoreConfig({ name: 'products' })\nexport class ProductsStore extends EntityStore<ProductsState> {\n\n  constructor() {\n    super();\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.model.ts"',title:'"products.model.ts"'}),"export interface Product {\n  id: number;\n}\n\nexport function createProduct(params: Partial<Product>) {\n  return {} as Product;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.query.ts"',title:'"products.query.ts"'}),"import { Injectable } from '@angular/core';\nimport { QueryEntity } from '@datorama/akita';\nimport { ProductsStore, ProductsState } from './products.store';\n\n@Injectable({ providedIn: 'root' })\nexport class ProductsQuery extends QueryEntity<ProductsState> {\n\n  constructor(protected store: ProductsStore) {\n    super(store);\n  }\n}\nimport { ID } from '@datorama/akita';\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.service.ts"',title:'"products.service.ts"'}),"import { Injectable } from '@angular/core';\nimport { ID } from '@datorama/akita';\nimport { HttpClient } from '@angular/common/http';\nimport { tap } from 'rxjs/operators';\nimport { Product } from './product.model';\nimport { ProductsStore } from './products.store';\n\n@Injectable({ providedIn: 'root' })\nexport class ProductsService {\n\n  constructor(private productsStore: ProductsStore,\n              private http: HttpClient) {}\n\n  get() {\n    return this.http.get<Product[]>('https://api.com')\n     .pipe(\n       tap(entities => this.productsStore.set(entities))\n      );\n  }\n\n  add(product: Product) {\n    this.productsStore.add(product);\n  }\n\n  update(id, product: Partial<Product>) {\n    this.productsStore.update(id, product);\n  }\n\n  remove(id: ID) {\n    this.productsStore.remove(id);\n  }\n}\n")),Object(a.b)("p",null,"You should follow the same principles as with the ",Object(a.b)("inlineCode",{parentName:"p"},"Session")," feature."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Angular providers don't have to be wide app singletons, for more information read ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://netbasal.com/angular-services-do-not-have-to-be-singletons-ffa879e62082"}),"this")," article."))),Object(a.b)("h2",{id:"join-queries"},"Join Queries"),Object(a.b)("p",null,"Queries can talk to other queries, join entities from different stores, etc. Let's say we have a ",Object(a.b)("inlineCode",{parentName:"p"},"products")," store and a ",Object(a.b)("inlineCode",{parentName:"p"},"cart")," store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.store.ts"',title:'"products.store.ts"'}),"import { EntityState, EntityStore } from '@datorama/akita';\nimport { Product } from './products.model';\n\nexport interface ProductsState extends EntityState<Product, number> {}\n\n@Injectable({ providedIn: 'root' })\n@StoreConfig({ name: 'products' })\nexport class ProductsStore extends EntityStore<ProductsState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="product.model.ts"',title:'"product.model.ts"'}),"export type Product = {\n  id: number;\n  title: string;\n  description: string;\n  price: number;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="cart.store.ts"',title:'"cart.store.ts"'}),"export interface CartState extends EntityState<CartItem, number> {}\n\n@Injectable({ providedIn: 'root' })\n@StoreConfig({\n  name: 'cart',\n  idKey: 'productId'\n})\nexport class CartStore extends EntityStore<CartState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="cart-item.model.ts"',title:'"cart-item.model.ts"'}),"export type CartItem = {\n  productId: Product['id'];\n  quantity: number;\n  total: number;\n};\n")),Object(a.b)("p",null,"We need to show the list of cart items and the total amount, but we also need some information from the ",Object(a.b)("inlineCode",{parentName:"p"},"product"),", like the ",Object(a.b)("inlineCode",{parentName:"p"},"title")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"price"),". Therefore we need to join the ",Object(a.b)("inlineCode",{parentName:"p"},"CartStore")," with the ",Object(a.b)("inlineCode",{parentName:"p"},"ProductsStore"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="cart.query.ts"',title:'"cart.query.ts"'}),"import { combineLatest } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Injectable({ providedIn: 'root' })\nexport class CartQuery extends QueryEntity<CartState> {\n  constructor(protected store: CartStore, \n              private productsQuery: ProductsQuery) {\n    super(store);\n  }\n\n  selectItems$ = combineLatest([\n     this.selectAll(), \n     this.productsQuery.selectAll({ asObject: true })\n   ]\n  ).pipe(map(joinItems));\n}\n\nfunction joinItems([cartItems, products]: [CartItem[], Product[]]) {\n  return cartItems.map(item => {\n    const product = products[item.productId];\n    return {\n      ...item,\n      ...product,\n      total: item.quantity * product.price\n    };\n  });\n}\n")),Object(a.b)("p",null,"We\u2019re using the ",Object(a.b)("inlineCode",{parentName:"p"},"combineLatest()")," observable to get both the list of cart items and the products. Then we are mapping over them, merging a cart item with the corresponding product based on the ",Object(a.b)("inlineCode",{parentName:"p"},"productId"),"."),Object(a.b)("p",null,"You can find the complete tutorial ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://engineering.datorama.com/building-a-shopping-cart-in-angular-using-akita-c41f6a6f7255"}),"here"),"."))}l.isMDXComponent=!0}}]);