(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{7141:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return s(5140)}])},7216:function(e,n,s){"use strict";var t=s(5893),a=s(1664),c=s.n(a);function i(e){let{children:n}=e;return(0,t.jsx)("nav",{children:(0,t.jsxs)("ol",{className:"breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsxs)(c(),{href:"/",children:[(0,t.jsx)("i",{className:"bi bi-house-door-fill"}),(0,t.jsx)("span",{className:"visually-hidden",children:"Home"})]})}),n]})})}i.Item=function(e){let{children:n,href:s}=e;return s?(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(c(),{href:s,className:"text-decoration-none",children:n})}):(0,t.jsx)("li",{className:"breadcrumb-item active",children:n})},n.Z=i},5255:function(e,n,s){"use strict";s.d(n,{Z:function(){return v}});var t=s(5893),a=s(682),c=s(867),i=s(3472),r=s(9008),l=s.n(r),d=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),o=s(7294);class m{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):n}}let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function h(e){m.setItem("color-theme-id",e.id)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?u.DARK:u.LIGHT}function j(e){e===u.AUTO&&(e=x()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function b(e){let{value:n,handleClick:s,selected:a=!1}=e,c=a?(0,t.jsx)("i",{className:"bi bi-check2"}):(0,t.jsx)(t.Fragment,{});return(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>s(e,n),"data-theme":n.id,children:[(0,t.jsx)("i",{className:"bi ".concat(n.icon)}),(0,t.jsx)("span",{className:"ms-3 me-auto",children:n.name}),c]})})}function f(){let[e,n]=(0,o.useState)(u.AUTO);function s(e,s){n(s),j(s),h(s)}return(0,o.useEffect)(()=>{let s=x(),t=function(){let e=m.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();t?h===u.AUTO?(n(s),j(s)):(n(t),j(t)):j(s);let a=n=>{e==u.AUTO&&j(x())},c=window.matchMedia("(prefers-color-scheme: dark)");return c.addEventListener("change",a),()=>{c.removeEventListener("change",a)}},[e]),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,t.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,t.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,t.jsx)(b,{value:u.LIGHT,handleClick:s,selected:e===u.LIGHT}),(0,t.jsx)(b,{value:u.DARK,handleClick:s,selected:e===u.DARK}),(0,t.jsx)(b,{value:u.AUTO,handleClick:s,selected:e===u.AUTO})]})]})}var p=s(1664),N=s.n(p);function v(e){let{children:n,menu:s,title:r="",hasGoBackButton:o=!1}=e;return r=r||s,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"".concat(r," - ").concat(d.v)}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsx)("header",{children:(0,t.jsx)(c.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(N(),{className:"navbar-brand",href:"/",children:[(0,t.jsx)("span",{className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,t.jsx)("span",{className:"d-block d-sm-none",children:"ITI 200"})]}),(0,t.jsx)(c.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,t.jsxs)(c.Z.Collapse,{id:"basic-navbar-nav",children:[(0,t.jsxs)(i.Z,{className:"me-auto",children:[(0,t.jsx)(N(),{className:"nav-link",href:"/",children:"Home"}),(0,t.jsx)(N(),{className:"nav-link",href:"/posts",children:"Posts"})]}),(0,t.jsx)(i.Z,{children:(0,t.jsx)(f,{})})]})]})})}),(0,t.jsx)("main",{children:(0,t.jsx)(a.Z,{children:n})}),(0,t.jsx)("footer",{className:"border-top pt-3 mt-3 small",children:(0,t.jsx)("p",{className:"text-center text-body-secondary",children:"ITI 200 Introduction to Cloud Computing"})})]})}},5140:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return l},default:function(){return d}});var t=s(5893),a=s(1664),c=s.n(a),i=s(5255),r=s(7216),l=!0;function d(e){let{posts:n}=e,s=n.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-0 text-start",children:(0,t.jsx)(c(),{href:"/posts/".concat(e.id),children:e.title})},n),(0,t.jsxs)("p",{className:"small text-muted border-bottom pb-2 mb-2",children:[e.authorName,(0,t.jsx)("span",{className:"mx-1",children:"\xb7"}),e.publishedFromNow]})]},n));return(0,t.jsxs)(i.Z,{menu:"Posts",children:[(0,t.jsx)(r.Z,{children:(0,t.jsx)(r.Z.Item,{children:"Posts"})}),s]})}}},function(e){e.O(0,[795,888,774,179],function(){return e(e.s=7141)}),_N_E=e.O()}]);