(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(7),c=a.n(r),i=a(2),s=a(9),u=a(0),o=function(t){var e=t.setCategories,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2?(e((function(t){return[c].concat(Object(s.a)(t))})),o("")):alert("Ingresar mas de dos letras por categor\xeda")},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){return o(t.target.value)}})})},d=a(10),j=a(6),l=a.n(j),p=a(8),f=function(){var t=Object(p.a)(l.a.mark((function t(e){var a,n,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"zIyaGlitChDtWrBX7fWpDCacZ9tLpdsP",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=",10,"&api_key=").concat("zIyaGlitChDtWrBX7fWpDCacZ9tLpdsP"),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:return r=t.sent,c=r.data,i=c.map((function(t){var e=t.id,a=t.title,n=t.images;return{id:e,title:a,url:null===n||void 0===n?void 0:n.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(e,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r},m=function(t){var e=t.title,a=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:a,alt:e}),Object(u.jsx)("p",{children:e})]})},h=function(t){var e=t.category,a=b(e),n=a.data,r=a.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando ..."}),Object(u.jsx)("div",{className:"card-grid",children:n.map((function(t){return Object(u.jsx)(m,Object(d.a)({},t),t.id)}))})]})},O=function(t){var e=Object(n.useState)(["Futbol"]),a=Object(i.a)(e,2),r=a[0],c=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),r.map((function(t){return Object(u.jsx)(h,{category:t},t)}))]})};a(17),a(18);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8e0ebe31.chunk.js.map