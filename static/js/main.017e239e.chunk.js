(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),i=(n(10),n(1)),o=n(4);function s(e){var t=e.info;return c.a.createElement("article",{className:"job-info"},c.a.createElement("h3",null,t.title),c.a.createElement("h4",null,t.company),c.a.createElement("p",{className:"job-date"},t.dates),t.duties.map((function(e,t){return c.a.createElement("div",{className:"job-desc",key:t},c.a.createElement(o.a,{className:"job-icon"}),c.a.createElement("p",null,e))})))}function u(){return c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"Experience"),c.a.createElement("div",{className:"underline"}))}function m(e){var t=e.fetchedData,n=e.changingInfo,a=e.info;return c.a.createElement("div",{className:"btn-container"},t.map((function(e,t){return c.a.createElement("button",{className:"job-btn ".concat(e.id===a.id?"active-btn":null),key:t,onClick:function(){return n(e.id)}},e.company)})))}var f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),f=o[0],E=o[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),j=d[0],p=d[1],h=Object(a.useState)(null),N=Object(i.a)(h,2),v=N[0],O=N[1];return Object(a.useEffect)((function(){fetch("https://course-api.com/react-tabs-project").then((function(e){return e.json()})).then((function(e){r(e),O(e[0]),E(!0)}),(function(e){p(e),E(!0)}))}),[]),f?j?c.a.createElement("p",null,"Error: ",j.message):c.a.createElement("section",{className:"section"},c.a.createElement(u,null),c.a.createElement("div",{className:"jobs-center"},c.a.createElement(m,{fetchedData:n,changingInfo:function(e){O(n.filter((function(t){return t.id===e}))[0])},info:v}),c.a.createElement(s,{info:v})),c.a.createElement("button",{className:"btn"},"more info")):c.a.createElement("section",{className:"section loading"},c.a.createElement("h1",null,"Loading..."))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.017e239e.chunk.js.map