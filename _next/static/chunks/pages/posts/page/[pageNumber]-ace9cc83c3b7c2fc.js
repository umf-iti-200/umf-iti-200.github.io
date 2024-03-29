(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{7735:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/page/[pageNumber]",function(){return s(5335)}])},7216:function(e,n,s){"use strict";var t=s(5893),a=s(1664),i=s.n(a);function c(e){let{children:n}=e;return(0,t.jsx)("nav",{children:(0,t.jsxs)("ol",{className:"breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsxs)(i(),{href:"/",children:[(0,t.jsx)("i",{className:"bi bi-house-door-fill"}),(0,t.jsx)("span",{className:"visually-hidden",children:"Home"})]})}),n]})})}c.Item=function(e){let{children:n,href:s}=e;return s?(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(i(),{href:s,className:"text-decoration-none",children:n})}):(0,t.jsx)("li",{className:"breadcrumb-item active",children:n})},n.Z=c},5255:function(e,n,s){"use strict";s.d(n,{Z:function(){return g}});var t=s(5893),a=s(682),i=s(867),c=s(3472),r=s(9008),l=s.n(r),d=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),o=s(7294);class m{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):n}}let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function h(e){m.setItem("color-theme-id",e.id)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?u.DARK:u.LIGHT}function j(e){e===u.AUTO&&(e=x()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function f(e){let{value:n,handleClick:s,selected:a=!1}=e,i=a?(0,t.jsx)("i",{className:"bi bi-check2"}):(0,t.jsx)(t.Fragment,{});return(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>s(e,n),"data-theme":n.id,children:[(0,t.jsx)("i",{className:"bi ".concat(n.icon)}),(0,t.jsx)("span",{className:"ms-3 me-auto",children:n.name}),i]})})}function p(){let[e,n]=(0,o.useState)(u.AUTO);function s(e,s){n(s),j(s),h(s)}return(0,o.useEffect)(()=>{let s=x(),t=function(){let e=m.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();t?h===u.AUTO?(n(s),j(s)):(n(t),j(t)):j(s);let a=n=>{e==u.AUTO&&j(x())},i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",a),()=>{i.removeEventListener("change",a)}},[e]),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,t.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,t.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,t.jsx)(f,{value:u.LIGHT,handleClick:s,selected:e===u.LIGHT}),(0,t.jsx)(f,{value:u.DARK,handleClick:s,selected:e===u.DARK}),(0,t.jsx)(f,{value:u.AUTO,handleClick:s,selected:e===u.AUTO})]})]})}var b=s(1664),N=s.n(b);function g(e){let{children:n,menu:s,title:r="",hasGoBackButton:o=!1}=e;return r=r||s,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"".concat(r," - ").concat(d.v)}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsx)("header",{children:(0,t.jsx)(i.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(N(),{className:"navbar-brand",href:"/",children:[(0,t.jsx)("span",{className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,t.jsx)("span",{className:"d-block d-sm-none",children:"ITI 200"})]}),(0,t.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,t.jsxs)(i.Z.Collapse,{id:"basic-navbar-nav",children:[(0,t.jsx)(c.Z,{className:"me-auto",children:(0,t.jsx)(N(),{className:"nav-link",href:"/posts",children:"Posts"})}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(p,{})})]})]})})}),(0,t.jsx)("main",{children:(0,t.jsx)(a.Z,{children:n})}),(0,t.jsx)("footer",{className:"border-top pt-3 mt-3 small",children:(0,t.jsx)("p",{className:"text-center text-body-secondary",children:"ITI 200 Introduction to Cloud Computing"})})]})}},2889:function(e,n,s){"use strict";s.d(n,{Z:function(){return c}});var t=s(5893),a=s(1664),i=s.n(a);function c(e){let{posts:n}=e;return n.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-0 text-start",children:(0,t.jsx)(i(),{href:"/posts/".concat(e.id),children:e.title})},n),(0,t.jsxs)("p",{className:"small text-muted border-bottom pb-2 mb-2",children:[(0,t.jsx)("span",{children:e.authorName}),(0,t.jsx)("span",{className:"mx-1",children:"\xb7"}),(0,t.jsx)("span",{title:e.publishedAt,children:e.publishedFromNow})]})]},n))}},5335:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return u},default:function(){return h}});var t=s(5893),a=s(5255),i=s(7216),c=s(2889),r=s(1664),l=s.n(r);function d(e){let{href:n,disabled:s=!1}=e;return(0,t.jsx)("li",{className:"page-item ".concat(s?"disabled":""),children:(0,t.jsx)(l(),{class:"page-link",href:s?"#":n,children:"← Previous"})})}function o(e){let{href:n,disabled:s=!1}=e;return(0,t.jsx)("li",{className:"page-item ".concat(s?"disabled":""),children:(0,t.jsx)(l(),{class:"page-link",href:s?"#":n,children:"Next →"})})}function m(e){let{href:n,pageNumber:s,maxPages:a}=e,i=n.replace("$1",s-1),c=n.replace("$1",s+1);return(0,t.jsx)("nav",{className:"mt-3",children:(0,t.jsxs)("ul",{className:"pagination justify-content-center",children:[(0,t.jsx)(d,{href:i,disabled:1==s}),(0,t.jsx)(o,{href:c,disabled:s==a})]})})}var u=!0;function h(e){let{posts:n,pageNumber:s,maxPages:r}=e;return(0,t.jsxs)(a.Z,{menu:"Posts",children:[(0,t.jsx)(i.Z,{children:(0,t.jsx)(i.Z.Item,{children:"Posts"})}),(0,t.jsx)("h1",{className:"title pb-3 border-bottom",children:"Posts"}),(0,t.jsx)(c.Z,{posts:n}),(0,t.jsx)(m,{href:"/posts/page/$1",pageNumber:s,maxPages:r})]})}}},function(e){e.O(0,[795,888,774,179],function(){return e(e.s=7735)}),_N_E=e.O()}]);