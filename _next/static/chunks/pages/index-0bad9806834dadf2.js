(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9267)}])},5255:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var a=t(5893),s=t(682),i=t(867),c=t(3472),r=t(9008),l=t.n(r),d=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),o=t(7294);class m{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(e);return t?JSON.parse(t):n}}let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function h(e){m.setItem("color-theme-id",e.id)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?u.DARK:u.LIGHT}function p(e){e===u.AUTO&&(e=x()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function f(e){let{value:n,handleClick:t,selected:s=!1}=e,i=s?(0,a.jsx)("i",{className:"bi bi-check2"}):(0,a.jsx)(a.Fragment,{});return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(s?"active":""),href:"#",onClick:e=>t(e,n),"data-theme":n.id,children:[(0,a.jsx)("i",{className:"bi ".concat(n.icon)}),(0,a.jsx)("span",{className:"ms-3 me-auto",children:n.name}),i]})})}function j(){let[e,n]=(0,o.useState)(u.AUTO);function t(e,t){n(t),p(t),h(t)}return(0,o.useEffect)(()=>{let t=x(),a=function(){let e=m.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();a?h===u.AUTO?(n(t),p(t)):(n(a),p(a)):p(t);let s=n=>{e==u.AUTO&&p(x())},i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",s),()=>{i.removeEventListener("change",s)}},[e]),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,a.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,a.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,a.jsx)(f,{value:u.LIGHT,handleClick:t,selected:e===u.LIGHT}),(0,a.jsx)(f,{value:u.DARK,handleClick:t,selected:e===u.DARK}),(0,a.jsx)(f,{value:u.AUTO,handleClick:t,selected:e===u.AUTO})]})]})}var g=t(1664),b=t.n(g);function N(e){let{children:n,menu:t,title:r="",hasGoBackButton:o=!1}=e;return r=r||t,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:"".concat(r," - ").concat(d.v)}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsx)("header",{children:(0,a.jsx)(i.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(b(),{className:"navbar-brand",href:"/",children:[(0,a.jsx)("span",{className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,a.jsx)("span",{className:"d-block d-sm-none",children:"ITI 200"})]}),(0,a.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,a.jsxs)(i.Z.Collapse,{id:"basic-navbar-nav",children:[(0,a.jsxs)(c.Z,{className:"me-auto",children:[(0,a.jsx)(b(),{className:"nav-link",href:"/",children:"Home"}),(0,a.jsx)(b(),{className:"nav-link",href:"/posts",children:"Posts"})]}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(j,{})})]})]})})}),(0,a.jsx)("main",{children:(0,a.jsx)(s.Z,{children:n})}),(0,a.jsx)("footer",{className:"border-top pt-3 mt-3 small",children:(0,a.jsx)("p",{className:"text-center text-body-secondary",children:"ITI 200 Introduction to Cloud Computing"})})]})}},9267:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var a=t(5893),s=t(1664),i=t.n(s),c=t(5255),r=t(682);function l(){return(0,a.jsx)(c.Z,{menu:"Home",children:(0,a.jsx)("div",{className:"px-sm-5 py-sm-5 mb-4 bg-body-tertiary rounded-3",children:(0,a.jsxs)(r.Z,{fluid:!0,className:"py-5",children:[(0,a.jsx)("h1",{className:"display-5 fw-bold",children:"ITI 200 Introduction to Cloud Computing"}),(0,a.jsx)("p",{className:"col-md-8",children:"Investigation of the capabilities of cloud computing from hardware and software perspectives, using an experiential learning approach. Topics include load balancing, data analytics, data warehousing, distributed storage and computing, and identity and authorization management."}),(0,a.jsx)(i(),{className:"btn btn-primary btn-lg",href:"/posts",children:"View Posts"})]})})})}}},function(e){e.O(0,[795,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);