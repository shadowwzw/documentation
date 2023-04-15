"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3009],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:1},s="Units",o={unversionedId:"reference/units/index",id:"reference/units/index",title:"Units",description:"Module",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/units/index.md",sourceDirName:"reference/units",slug:"/reference/units/",permalink:"/docs/reference/units/",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/units/index.md",tags:[],version:"current",lastUpdatedAt:1681574078,formattedLastUpdatedAt:"Apr 15, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"referenceSidebar",previous:{title:"\ud83d\udcda Reference",permalink:"/docs/reference/"},next:{title:"Layer",permalink:"/docs/reference/units/layers/"}},l={},c=[{value:"Module",id:"module",level:2},{value:"Layer",id:"layer",level:2},{value:"Slice",id:"slice",level:2},{value:"Segment",id:"segment",level:2},{value:"See also",id:"see-also",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"units"},"Units"),(0,r.kt)("h2",{id:"module"},"Module"),(0,r.kt)("p",null,"Structural unit of the project"),(0,r.kt)("p",null,"A module can be represented as specific file or directory ",(0,r.kt)("em",{parentName:"p"},"(an abstraction in the context of a structure)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"authorization module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"page module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"the module of the component in the feature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"action module in the entity model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"etc."))),(0,r.kt)("h2",{id:"layer"},(0,r.kt)("a",{parentName:"h2",href:"/docs/reference/units/layers"},"Layer")),(0,r.kt)("p",null,"Each project top level directory defines the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/units/decomposition#group-layers"},"scope of responsibility of modules"),", as well as the level of sensitivity to internal changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Representatives"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/app"},(0,r.kt)("inlineCode",{parentName:"a"},"app")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/processes"},(0,r.kt)("inlineCode",{parentName:"a"},"processes")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/pages"},(0,r.kt)("inlineCode",{parentName:"a"},"pages")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/widgets"},(0,r.kt)("inlineCode",{parentName:"a"},"widgets")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/features"},(0,r.kt)("inlineCode",{parentName:"a"},"features")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/entities"},(0,r.kt)("inlineCode",{parentName:"a"},"entities")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/shared"},(0,r.kt)("inlineCode",{parentName:"a"},"shared")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 app/                    # Application initialization logic and static assets\n    \u251c\u2500\u2500 processes/              # (Optional) Page-independent workflows or workflows involving multiple pages\n    \u251c\u2500\u2500 pages/                  # Complete application views\n    \u251c\u2500\u2500 widgets/                # Various combinations of abstract and / or business units from lower layers\n    \u251c\u2500\u2500 features/               # (Optional) User scenarios, which usually operate on business entities\n    \u251c\u2500\u2500 entities/               # (Optional) Business units in terms of which application business logic works\n    \u2514\u2500\u2500 shared/                 # Reusable non business specific modules\n")),(0,r.kt)("h2",{id:"slice"},"Slice"),(0,r.kt)("p",null,"Each of the elements located at the top level of the layers"),(0,r.kt)("p",null,"This level is ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/units/decomposition#group-slices"},"poorly regulated")," is a methodology, but a lot depends on the specific project, stack and team"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Representatives (from each layer)")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/processes"},(0,r.kt)("inlineCode",{parentName:"a"},"process")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/pages"},(0,r.kt)("inlineCode",{parentName:"a"},"page")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/widgets"},(0,r.kt)("inlineCode",{parentName:"a"},"widget")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/features"},(0,r.kt)("inlineCode",{parentName:"a"},"feature")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers/entities"},(0,r.kt)("inlineCode",{parentName:"a"},"entity")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 app/\n|   # Application composition layer\n|   # Only contains abstract initialization logic and static assets, and thus mustn't contain any Slices\n|\n\u251c\u2500\u2500 processes/\n|   # Slices implementing page-independent workflows or workflows involving multiple pages\n|   \u251c\u2500\u2500 auth\n|   \u251c\u2500\u2500 payment\n|   \u251c\u2500\u2500 quick-tour\n|   \u2514\u2500\u2500 ...\n|\n\u251c\u2500\u2500 pages/\n|   # Slices implementing complete application views\n|   \u251c\u2500\u2500 feed\n|   |\n|   \u251c\u2500\u2500 profile\n|   |   # Due to routing specifics, this layer can contain nested structures\n|   |   \u251c\u2500\u2500 edit\n|   |   \u2514\u2500\u2500 stats\n|   |\n|   \u251c\u2500\u2500 sign-up\n|   \u2514\u2500\u2500 ...\n|\n\u251c\u2500\u2500 widgets/\n|   # Slices implementing various combinations of abstract and / or business units from lower layers,\n|   # to deliver isolated atomic User Interface fragments\n|   \u251c\u2500\u2500 chat-window\n|   \u251c\u2500\u2500 header\n|   \u251c\u2500\u2500 feed\n|   \u2514\u2500\u2500 ...\n|\n\u251c\u2500\u2500 features/\n|   # Sliced implementing user scenarios, which usually operate on business entities\n|   \u251c\u2500\u2500 auth-by-phone\n|   \u251c\u2500\u2500 create-post\n|   \u251c\u2500\u2500 write-message\n|   \u2514\u2500\u2500 ...\n|\n\u251c\u2500\u2500 entities/\n|   # Slices implementing business units in terms of which application business logic works\n|   \u251c\u2500\u2500 account\n|   \u251c\u2500\u2500 conversation\n|   \u251c\u2500\u2500 post\n|   \u251c\u2500\u2500 wallet\n|   \u2514\u2500\u2500 ...\n|\n\u251c\u2500\u2500 shared/\n|   # This layer is a set of abstract Segments\n|   # It means that it must not contain any business units or business-related logic\n")),(0,r.kt)("h2",{id:"segment"},(0,r.kt)("a",{parentName:"h2",href:"/docs/reference/units/segments"},"Segment")),(0,r.kt)("p",null,"Group of primitives serving as implementation details for business logic"),(0,r.kt)("p",null,"This level determines ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/units/decomposition#group-segments"},"the purpose of modules in the code and implementation"),", according to classical design models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Representatives"),": ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/segments#ui"},(0,r.kt)("inlineCode",{parentName:"a"},"ui")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/segments#model"},(0,r.kt)("inlineCode",{parentName:"a"},"model")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/segments#lib"},(0,r.kt)("inlineCode",{parentName:"a"},"lib")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/segments#api"},(0,r.kt)("inlineCode",{parentName:"a"},"api")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/segments#config"},(0,r.kt)("inlineCode",{parentName:"a"},"config")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"{layer}/\n    \u251c\u2500\u2500 {slice}/\n    |   \u251c\u2500\u2500 ui/                     # User Interface components and UI related logic\n    |   \u251c\u2500\u2500 model/                  # Business logic (store, actions, effects, reducers, etc.)\n    |   \u251c\u2500\u2500 lib/                    # Infrastructure logic (utils/helpers)\n    |   \u251c\u2500\u2500 config/                 # Local configuration (constants, enums, meta information)\n    |   \u2514\u2500\u2500 api/                    # Logic of API requests (api instances, requests, etc.)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since some layers doesn't contain slices (app, shared):"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Segments can be arranged according to their own rules ",(0,r.kt)("inlineCode",{parentName:"li"},"shared/{api, config}")),(0,r.kt)("li",{parentName:"ul"},"Or not to use segments al all (",(0,r.kt)("inlineCode",{parentName:"li"},"app/{providers, styles}"),")"))),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/decomposition"},"Abstraction levels by methodology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/layers"},"Layers in the methodology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/units/segments"},"Segments in the methodology"))))}u.isMDXComponent=!0}}]);