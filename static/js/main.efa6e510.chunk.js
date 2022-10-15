(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(22),c(2)),r=c(0),j=function(){return Object(r.jsx)("h1",{className:"title",children:"Home Page"})},i=c(8),l=c(11),o=c(4),b=c(6),d=c.n(b),h=c(1);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(24);var O=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.person;return Object(r.jsx)(a.b,{to:"/people/".concat(null===t||void 0===t?void 0:t.slug),className:d()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},p=function(){var e=Object(h.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)([]),j=Object(o.a)(a,2),b=j[0],p=j[1],m=Object(h.useState)(!1),v=Object(o.a)(m,2),f=v[0],g=v[1],N=Object(s.h)().slug;function y(){return(y=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,n(!1),e.next=5,x();case 5:t=e.sent,p(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(!0);case 12:g(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function w(e){var t=b.find((function(t){return t.name===e}));return t?Object(r.jsx)(u,{person:t}):e||"-"}return Object(h.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"People Page"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"box table-container",children:[f&&Object(r.jsx)(O,{}),c&&Object(r.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!b.length&&!c&&!f&&Object(r.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!b.length&&!c&&Object(r.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Sex"}),Object(r.jsx)("th",{children:"Born"}),Object(r.jsx)("th",{children:"Died"}),Object(r.jsx)("th",{children:"Mother"}),Object(r.jsx)("th",{children:"Father"})]})}),Object(r.jsx)("tbody",{children:b.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":e.slug===N}),children:[Object(r.jsx)("td",{children:Object(r.jsx)(u,{person:e})}),Object(r.jsx)("td",{children:e.sex}),Object(r.jsx)("td",{children:e.born}),Object(r.jsx)("td",{children:e.died}),Object(r.jsx)("td",{children:w(e.motherName)}),Object(r.jsx)("td",{children:w(e.fatherName)})]},e.name)}))})]})]})})]})},m=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},v=function(e){var t=e.to,c=e.text;return Object(r.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},children:c})},f=function(){return Object(r.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(v,{to:"/",text:"Home"}),Object(r.jsx)(v,{to:"/people",text:"People"})]})})})},g=function(){return Object(r.jsxs)("div",{"data-cy":"app",children:[Object(r.jsx)(f,{}),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(s.b,{path:"home",element:Object(r.jsx)(s.a,{to:"/",replace:!0})}),Object(r.jsxs)(s.b,{path:"people",children:[Object(r.jsx)(s.b,{index:!0,element:Object(r.jsx)(p,{})}),Object(r.jsx)(s.b,{path:":slug",element:Object(r.jsx)(p,{})})]}),Object(r.jsx)(s.b,{path:"people/:slug",element:Object(r.jsx)(p,{})}),Object(r.jsx)(s.b,{path:"*",element:Object(r.jsx)(m,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(r.jsx)(a.a,{children:Object(r.jsx)(g,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.efa6e510.chunk.js.map