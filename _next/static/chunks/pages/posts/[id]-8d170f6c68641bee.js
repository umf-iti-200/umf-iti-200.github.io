(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{3798:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return s(9609)}])},5255:function(e,a,s){"use strict";s.d(a,{Z:function(){return p}});var r=s(5893),l=s(682),d=s(4051),t=s(1555),i=s(867),n=s(3472),c=s(9008),o=s.n(c);s(1664);var m=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),h=s(7294);class u{static setItem(e,a){localStorage.setItem(e,JSON.stringify(a))}static getItem(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):a}}let x=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function f(e){u.setItem("color-theme-id",e.id)}function j(){return window.matchMedia("(prefers-color-scheme: dark)").matches?x.DARK:x.LIGHT}function N(e){e===x.AUTO&&(e=j()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function v(e){let{value:a,handleClick:s,selected:l=!1}=e,d=l?(0,r.jsx)("i",{className:"bi bi-check2"}):(0,r.jsx)(r.Fragment,{});return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(l?"active":""),href:"#",onClick:e=>s(e,a),"data-theme":a.id,children:[(0,r.jsx)("i",{className:"bi ".concat(a.icon)}),(0,r.jsx)("span",{className:"ms-3 me-auto",children:a.name}),d]})})}function b(){let[e,a]=(0,h.useState)(x.AUTO);function s(e,s){a(s),N(s),f(s)}return(0,h.useEffect)(()=>{let s=j(),r=function(){let e=u.getItem("color-theme-id");return e==x.AUTO.id?x.AUTO:e==x.DARK.id?x.DARK:e==x.LIGHT.id?x.LIGHT:null}();r?f===x.AUTO?(a(s),N(s)):(a(r),N(r)):N(s);let l=a=>{e==x.AUTO&&N(j())},d=window.matchMedia("(prefers-color-scheme: dark)");return d.addEventListener("change",l),()=>{d.removeEventListener("change",l)}},[e]),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,r.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,r.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,r.jsx)(v,{value:x.LIGHT,handleClick:s,selected:e===x.LIGHT}),(0,r.jsx)(v,{value:x.DARK,handleClick:s,selected:e===x.DARK}),(0,r.jsx)(v,{value:x.AUTO,handleClick:s,selected:e===x.AUTO})]})]})}function p(e){let{children:a,menu:s,title:c="",hasGoBackButton:h=!1}=e;return c=c||s,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"".concat(c," - ").concat(m.v)}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)("header",{children:(0,r.jsx)(i.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z.Brand,{href:"/",className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,r.jsx)(i.Z.Brand,{href:"/",className:"d-block d-sm-none",children:"ITI 200"}),(0,r.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsxs)(i.Z.Collapse,{id:"basic-navbar-nav",children:[(0,r.jsx)(n.Z,{className:"me-auto"}),(0,r.jsx)(n.Z,{children:(0,r.jsx)(b,{})})]})]})})}),(0,r.jsx)("main",{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(t.Z,{sm:"12",children:a})}),(0,r.jsx)("footer",{className:"border-top pt-3 mt-3 small",children:(0,r.jsx)("p",{className:"text-center text-body-secondary",children:"ITI 200 Introduction to Cloud Computing"})})]})})]})}},9609:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return T},default:function(){return I}});var r=s(5893),l=s(4184),d=s.n(l),t=s(7294),i=s(6792);let n=t.forwardRef(({className:e,bsPrefix:a,as:s="div",...l},t)=>(a=(0,i.vE)(a,"card-body"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));n.displayName="CardBody";let c=t.forwardRef(({className:e,bsPrefix:a,as:s="div",...l},t)=>(a=(0,i.vE)(a,"card-footer"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));c.displayName="CardFooter";var o=s(9059);let m=t.forwardRef(({bsPrefix:e,className:a,as:s="div",...l},n)=>{let c=(0,i.vE)(e,"card-header"),m=(0,t.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,r.jsx)(o.Z.Provider,{value:m,children:(0,r.jsx)(s,{ref:n,...l,className:d()(a,c)})})});m.displayName="CardHeader";let h=t.forwardRef(({bsPrefix:e,className:a,variant:s,as:l="img",...t},n)=>{let c=(0,i.vE)(e,"card-img");return(0,r.jsx)(l,{ref:n,className:d()(s?`${c}-${s}`:c,a),...t})});h.displayName="CardImg";let u=t.forwardRef(({className:e,bsPrefix:a,as:s="div",...l},t)=>(a=(0,i.vE)(a,"card-img-overlay"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));u.displayName="CardImgOverlay";let x=t.forwardRef(({className:e,bsPrefix:a,as:s="a",...l},t)=>(a=(0,i.vE)(a,"card-link"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));x.displayName="CardLink";var f=s(9602);let j=(0,f.Z)("h6"),N=t.forwardRef(({className:e,bsPrefix:a,as:s=j,...l},t)=>(a=(0,i.vE)(a,"card-subtitle"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));N.displayName="CardSubtitle";let v=t.forwardRef(({className:e,bsPrefix:a,as:s="p",...l},t)=>(a=(0,i.vE)(a,"card-text"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));v.displayName="CardText";let b=(0,f.Z)("h5"),p=t.forwardRef(({className:e,bsPrefix:a,as:s=b,...l},t)=>(a=(0,i.vE)(a,"card-title"),(0,r.jsx)(s,{ref:t,className:d()(e,a),...l})));p.displayName="CardTitle";let g=t.forwardRef(({bsPrefix:e,className:a,bg:s,text:l,border:t,body:c=!1,children:o,as:m="div",...h},u)=>{let x=(0,i.vE)(e,"card");return(0,r.jsx)(m,{ref:u,...h,className:d()(a,x,s&&`bg-${s}`,l&&`text-${l}`,t&&`border-${t}`),children:c?(0,r.jsx)(n,{children:o}):o})});g.displayName="Card";var w=Object.assign(g,{Img:h,Title:p,Subtitle:N,Body:n,Link:x,Text:v,Header:m,Footer:c,ImgOverlay:u}),y=s(5255);s(1664);var T=!0;function I(e){let{post:a}=e,s=a.tags.map((e,a)=>(0,r.jsx)("a",{href:"https://www.google.com",children:(0,r.jsx)("span",{className:"badge bg-primary-subtle text-primary-emphasis rounded-pill me-2",children:e})},a));return(0,r.jsxs)(y.Z,{title:a.title,children:[(0,r.jsx)("nav",{children:(0,r.jsxs)("ol",{className:"breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsxs)("a",{href:"/",children:[(0,r.jsx)("i",{className:"bi bi-house-door-fill"}),(0,r.jsx)("span",{className:"visually-hidden",children:"Home"})]})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:a.title})]})}),(0,r.jsxs)("div",{className:"post",children:[(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("h1",{children:a.title}),(0,r.jsxs)("small",{className:"text-muted",children:["By Thiago Ferreira | Published: ",a.createdAt," | Updated: ",a.modifiedAt]}),(0,r.jsx)("hr",{})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"body col-12 col-md-9 col-lg-9 col-xxl-10 mb-3",dangerouslySetInnerHTML:{__html:a.content}}),(0,r.jsxs)("div",{className:"sidepanel col-12 col-md-3 col-lg-3 col-xxl-2",children:[(0,r.jsxs)(w,{className:"mb-3",children:[(0,r.jsx)(w.Header,{className:"fw-bold",children:"Category"}),(0,r.jsx)(w.Body,{children:a.category})]}),(0,r.jsxs)(w,{className:"mb-3",children:[(0,r.jsx)(w.Header,{className:"fw-bold",children:"Tags"}),(0,r.jsx)(w.Body,{children:s})]})]})]})]})]})}}},function(e){e.O(0,[267,888,774,179],function(){return e(e.s=3798)}),_N_E=e.O()}]);