(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{7223:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors",function(){return t(2536)}])},7216:function(e,n,t){"use strict";var s=t(5893),r=t(1664),i=t.n(r);function c(e){let{children:n}=e;return(0,s.jsx)("nav",{children:(0,s.jsxs)("ol",{className:"breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsxs)(i(),{href:"/",children:[(0,s.jsx)("i",{className:"bi bi-house-door-fill"}),(0,s.jsx)("span",{className:"visually-hidden",children:"Home"})]})}),n]})})}c.Item=function(e){let{children:n,href:t}=e;return t?(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(i(),{href:t,className:"text-decoration-none",children:n})}):(0,s.jsx)("li",{className:"breadcrumb-item active",children:n})},n.Z=c},5255:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var s=t(5893),r=t(682),i=t(867),c=t(3472),a=t(9008),l=t.n(a),d=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),o=t(7294);class h{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(e);return t?JSON.parse(t):n}}let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function m(e){h.setItem("color-theme-id",e.id)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?u.DARK:u.LIGHT}function j(e){e===u.AUTO&&(e=x()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function f(e){let{value:n,handleClick:t,selected:r=!1}=e,i=r?(0,s.jsx)("i",{className:"bi bi-check2"}):(0,s.jsx)(s.Fragment,{});return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(r?"active":""),href:"#",onClick:e=>t(e,n),"data-theme":n.id,children:[(0,s.jsx)("i",{className:"bi ".concat(n.icon)}),(0,s.jsx)("span",{className:"ms-3 me-auto",children:n.name}),i]})})}function b(){let[e,n]=(0,o.useState)(u.AUTO);function t(e,t){n(t),j(t),m(t)}return(0,o.useEffect)(()=>{let t=x(),s=function(){let e=h.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();s?m===u.AUTO?(n(t),j(t)):(n(s),j(s)):j(t);let r=n=>{e==u.AUTO&&j(x())},i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",r),()=>{i.removeEventListener("change",r)}},[e]),(0,s.jsxs)("li",{className:"nav-item dropdown",children:[(0,s.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,s.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,s.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,s.jsx)(f,{value:u.LIGHT,handleClick:t,selected:e===u.LIGHT}),(0,s.jsx)(f,{value:u.DARK,handleClick:t,selected:e===u.DARK}),(0,s.jsx)(f,{value:u.AUTO,handleClick:t,selected:e===u.AUTO})]})]})}var p=t(1664),N=t.n(p);function v(e){let{children:n,menu:t,title:a="",hasGoBackButton:o=!1}=e;return a=a||t,(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"".concat(a," - ").concat(d.v)}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{children:(0,s.jsx)(i.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(N(),{className:"navbar-brand",href:"/",children:[(0,s.jsx)("span",{className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,s.jsx)("span",{className:"d-block d-sm-none",children:"ITI 200"})]}),(0,s.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsxs)(i.Z.Collapse,{id:"basic-navbar-nav",children:[(0,s.jsx)(c.Z,{className:"me-auto",children:(0,s.jsx)(N(),{className:"nav-link",href:"/posts",children:"Posts"})}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(b,{})})]})]})})}),(0,s.jsx)("main",{children:(0,s.jsx)(r.Z,{children:n})}),(0,s.jsx)("footer",{className:"border-top pt-3 mt-3 small",children:(0,s.jsx)("p",{className:"text-center text-body-secondary",children:"ITI 200 Introduction to Cloud Computing"})})]})}},2536:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m},default:function(){return x}});var s=t(5893),r=t(1664),i=t.n(r),c=t(4184),a=t.n(c),l=t(7294),d=t(6792);let o=l.forwardRef(({bsPrefix:e,className:n,striped:t,bordered:r,borderless:i,hover:c,size:l,variant:o,responsive:h,...u},m)=>{let x=(0,d.vE)(e,"table"),j=a()(n,x,o&&`${x}-${o}`,l&&`${x}-${l}`,t&&`${x}-${"string"==typeof t?`striped-${t}`:"striped"}`,r&&`${x}-bordered`,i&&`${x}-borderless`,c&&`${x}-hover`),f=(0,s.jsx)("table",{...u,className:j,ref:m});if(h){let e=`${x}-responsive`;return"string"==typeof h&&(e=`${e}-${h}`),(0,s.jsx)("div",{className:e,children:f})}return f});var h=t(5255),u=t(7216),m=!0;function x(e){let{authors:n}=e,t=n.map((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(i(),{href:"authors/".concat(e.id),children:e.name})}),(0,s.jsx)("td",{children:e.title})]},n));return(0,s.jsxs)(h.Z,{menu:"Authors",children:[(0,s.jsx)(u.Z,{children:(0,s.jsx)(u.Z.Item,{children:"Authors"})}),(0,s.jsx)("h1",{className:"title pb-3 border-bottom",children:"Authors"}),(0,s.jsxs)(o,{striped:!0,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Title"})]})}),(0,s.jsx)("tbody",{children:t})]})]})}}},function(e){e.O(0,[795,888,774,179],function(){return e(e.s=7223)}),_N_E=e.O()}]);