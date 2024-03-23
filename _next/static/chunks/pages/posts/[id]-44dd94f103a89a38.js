(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{3798:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return s(9609)}])},5255:function(e,a,s){"use strict";s.d(a,{Z:function(){return b}});var r=s(5893),d=s(682),l=s(4051),t=s(1555),n=s(867),i=s(3472),c=s(9008),o=s.n(c);s(1664);var m=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),h=s(7294);class x{static setItem(e,a){localStorage.setItem(e,JSON.stringify(a))}static getItem(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):a}}let u=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function f(e){x.setItem("color-theme-id",e.id)}function j(){return window.matchMedia("(prefers-color-scheme: dark)").matches?u.DARK:u.LIGHT}function N(e){e===u.AUTO&&(e=j()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function v(e){let{value:a,handleClick:s,selected:d=!1}=e,l=d?(0,r.jsx)("i",{className:"bi bi-check2"}):(0,r.jsx)(r.Fragment,{});return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(d?"active":""),href:"#",onClick:e=>s(e,a),"data-theme":a.id,children:[(0,r.jsx)("i",{className:"bi ".concat(a.icon)}),(0,r.jsx)("span",{className:"ms-3 me-auto",children:a.name}),l]})})}function g(){let[e,a]=(0,h.useState)(u.AUTO);function s(e,s){a(s),N(s),f(s)}return(0,h.useEffect)(()=>{let s=j(),r=function(){let e=x.getItem("color-theme-id");return e==u.AUTO.id?u.AUTO:e==u.DARK.id?u.DARK:e==u.LIGHT.id?u.LIGHT:null}();r?f===u.AUTO?(a(s),N(s)):(a(r),N(r)):N(s);let d=a=>{e==u.AUTO&&N(j())},l=window.matchMedia("(prefers-color-scheme: dark)");return l.addEventListener("change",d),()=>{l.removeEventListener("change",d)}},[e]),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,r.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,r.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,r.jsx)(v,{value:u.LIGHT,handleClick:s,selected:e===u.LIGHT}),(0,r.jsx)(v,{value:u.DARK,handleClick:s,selected:e===u.DARK}),(0,r.jsx)(v,{value:u.AUTO,handleClick:s,selected:e===u.AUTO})]})]})}function b(e){let{children:a,menu:s,title:c="",hasGoBackButton:h=!1}=e;return c=c||s,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"".concat(c," - ").concat(m.v)}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)("header",{children:(0,r.jsx)(n.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(n.Z.Brand,{href:"/",className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,r.jsx)(n.Z.Brand,{href:"/",className:"d-block d-sm-none",children:"ITI 200"}),(0,r.jsx)(n.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsxs)(n.Z.Collapse,{id:"basic-navbar-nav",children:[(0,r.jsx)(i.Z,{className:"me-auto"}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(g,{})})]})]})})}),(0,r.jsx)("main",{children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(t.Z,{sm:"12",children:a})})})})]})}},9609:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return k},default:function(){return C}});var r=s(5893),d=s(4184),l=s.n(d),t=s(7294),n=s(6792);let i=t.forwardRef(({className:e,bsPrefix:a,as:s="div",...d},t)=>(a=(0,n.vE)(a,"card-body"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));i.displayName="CardBody";let c=t.forwardRef(({className:e,bsPrefix:a,as:s="div",...d},t)=>(a=(0,n.vE)(a,"card-footer"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));c.displayName="CardFooter";var o=s(9059);let m=t.forwardRef(({bsPrefix:e,className:a,as:s="div",...d},i)=>{let c=(0,n.vE)(e,"card-header"),m=(0,t.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,r.jsx)(o.Z.Provider,{value:m,children:(0,r.jsx)(s,{ref:i,...d,className:l()(a,c)})})});m.displayName="CardHeader";let h=t.forwardRef(({bsPrefix:e,className:a,variant:s,as:d="img",...t},i)=>{let c=(0,n.vE)(e,"card-img");return(0,r.jsx)(d,{ref:i,className:l()(s?`${c}-${s}`:c,a),...t})});h.displayName="CardImg";let x=t.forwardRef(({className:e,bsPrefix:a,as:s="div",...d},t)=>(a=(0,n.vE)(a,"card-img-overlay"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));x.displayName="CardImgOverlay";let u=t.forwardRef(({className:e,bsPrefix:a,as:s="a",...d},t)=>(a=(0,n.vE)(a,"card-link"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));u.displayName="CardLink";var f=s(9602);let j=(0,f.Z)("h6"),N=t.forwardRef(({className:e,bsPrefix:a,as:s=j,...d},t)=>(a=(0,n.vE)(a,"card-subtitle"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));N.displayName="CardSubtitle";let v=t.forwardRef(({className:e,bsPrefix:a,as:s="p",...d},t)=>(a=(0,n.vE)(a,"card-text"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));v.displayName="CardText";let g=(0,f.Z)("h5"),b=t.forwardRef(({className:e,bsPrefix:a,as:s=g,...d},t)=>(a=(0,n.vE)(a,"card-title"),(0,r.jsx)(s,{ref:t,className:l()(e,a),...d})));b.displayName="CardTitle";let p=t.forwardRef(({bsPrefix:e,className:a,bg:s,text:d,border:t,body:c=!1,children:o,as:m="div",...h},x)=>{let u=(0,n.vE)(e,"card");return(0,r.jsx)(m,{ref:x,...h,className:l()(a,u,s&&`bg-${s}`,d&&`text-${d}`,t&&`border-${t}`),children:c?(0,r.jsx)(i,{children:o}):o})});p.displayName="Card";var w=Object.assign(p,{Img:h,Title:b,Subtitle:N,Body:i,Link:u,Text:v,Header:m,Footer:c,ImgOverlay:x}),y=s(5255),T=s(1664),I=s.n(T),k=!0;function C(e){let{post:a}=e,s=a.tags.map((e,a)=>(0,r.jsx)("a",{href:"https://www.google.com",children:(0,r.jsx)("span",{className:"badge text-bg-primary me-2",children:e})},a));return(0,r.jsxs)(y.Z,{title:a.title,children:[(0,r.jsx)("nav",{children:(0,r.jsxs)("ol",{className:"breadcrumb bg-body-tertiary rounded py-2 ps-3",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)("a",{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:"What is Workspace?"})]})}),(0,r.jsxs)("div",{className:"post",children:[(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("h1",{children:a.title}),(0,r.jsxs)("small",{className:"text-muted",children:["By Thiago Ferreira | Published: ",a.createdAt," | Updated: ",a.modifiedAt]}),(0,r.jsx)("hr",{})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"body col-12 col-md-9 col-lg-9 col-xxl-10",dangerouslySetInnerHTML:{__html:a.content}}),(0,r.jsxs)("div",{className:"sidepanel col-12 col-md-3 col-lg-3 col-xxl-2",children:[(0,r.jsxs)(w,{className:"mb-3",children:[(0,r.jsx)(w.Header,{className:"fw-bold",children:"Category"}),(0,r.jsx)(w.Body,{children:a.category})]}),(0,r.jsxs)(w,{className:"mb-3",children:[(0,r.jsx)(w.Header,{className:"fw-bold",children:"Tags"}),(0,r.jsx)(w.Body,{children:s})]})]})]})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(I(),{href:"/",className:"text-decoration-none",children:"← Back to Home"})]})}}},function(e){e.O(0,[267,888,774,179],function(){return e(e.s=3798)}),_N_E=e.O()}]);