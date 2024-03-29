(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{7289:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[postId]",function(){return a(4579)}])},7216:function(e,s,a){"use strict";var r=a(5893),t=a(1664),l=a.n(t);function i(e){let{children:s}=e;return(0,r.jsx)("nav",{children:(0,r.jsxs)("ol",{className:"breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsxs)(l(),{href:"/",children:[(0,r.jsx)("i",{className:"bi bi-house-door-fill"}),(0,r.jsx)("span",{className:"visually-hidden",children:"Home"})]})}),s]})})}i.Item=function(e){let{children:s,href:a}=e;return a?(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(l(),{href:a,className:"text-decoration-none",children:s})}):(0,r.jsx)("li",{className:"breadcrumb-item active",children:s})},s.Z=i},5255:function(e,s,a){"use strict";a.d(s,{Z:function(){return v}});var r=a(5893),t=a(682),l=a(867),i=a(3472),n=a(9008),c=a.n(n),d=JSON.parse('{"v":"ITI 200 Introduction to Cloud Computing"}'),o=a(7294);class m{static setItem(e,s){localStorage.setItem(e,JSON.stringify(s))}static getItem(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage.getItem(e);return a?JSON.parse(a):s}}let h=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function x(e){m.setItem("color-theme-id",e.id)}function u(){return window.matchMedia("(prefers-color-scheme: dark)").matches?h.DARK:h.LIGHT}function j(e){e===h.AUTO&&(e=u()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function f(e){let{value:s,handleClick:a,selected:t=!1}=e,l=t?(0,r.jsx)("i",{className:"bi bi-check2"}):(0,r.jsx)(r.Fragment,{});return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(t?"active":""),href:"#",onClick:e=>a(e,s),"data-theme":s.id,children:[(0,r.jsx)("i",{className:"bi ".concat(s.icon)}),(0,r.jsx)("span",{className:"ms-3 me-auto",children:s.name}),l]})})}function N(){let[e,s]=(0,o.useState)(h.AUTO);function a(e,a){s(a),j(a),x(a)}return(0,o.useEffect)(()=>{let a=u(),r=function(){let e=m.getItem("color-theme-id");return e==h.AUTO.id?h.AUTO:e==h.DARK.id?h.DARK:e==h.LIGHT.id?h.LIGHT:null}();r?x===h.AUTO?(s(a),j(a)):(s(r),j(r)):j(a);let t=s=>{e==h.AUTO&&j(u())},l=window.matchMedia("(prefers-color-scheme: dark)");return l.addEventListener("change",t),()=>{l.removeEventListener("change",t)}},[e]),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,r.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,r.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,r.jsx)(f,{value:h.LIGHT,handleClick:a,selected:e===h.LIGHT}),(0,r.jsx)(f,{value:h.DARK,handleClick:a,selected:e===h.DARK}),(0,r.jsx)(f,{value:h.AUTO,handleClick:a,selected:e===h.AUTO})]})]})}var b=a(1664),p=a.n(b);function v(e){let{children:s,menu:a,title:n="",hasGoBackButton:o=!1}=e;return n=n||a,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"".concat(n," - ").concat(d.v)}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsx)("header",{children:(0,r.jsx)(l.Z,{expand:"md",bg:"dark",fixed:"top","data-bs-theme":"dark",children:(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(p(),{className:"navbar-brand",href:"/",children:[(0,r.jsx)("span",{className:"d-none  d-sm-block",children:"ITI 200 Introduction to Cloud Computing"}),(0,r.jsx)("span",{className:"d-block d-sm-none",children:"ITI 200"})]}),(0,r.jsx)(l.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsxs)(l.Z.Collapse,{id:"basic-navbar-nav",children:[(0,r.jsx)(i.Z,{className:"me-auto",children:(0,r.jsx)(p(),{className:"nav-link",href:"/posts",children:"Posts"})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(N,{})})]})]})})}),(0,r.jsx)("main",{children:(0,r.jsx)(t.Z,{children:s})}),(0,r.jsx)("footer",{className:"border-top pt-3 mt-3 small",children:(0,r.jsx)("p",{className:"text-center text-body-secondary",children:"ITI 200 Introduction to Cloud Computing"})})]})}},2889:function(e,s,a){"use strict";a.d(s,{Z:function(){return i}});var r=a(5893),t=a(1664),l=a.n(t);function i(e){let{posts:s}=e;return s.map((e,s)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"mb-0 text-start",children:(0,r.jsx)(l(),{href:"/posts/".concat(e.id),children:e.title})},s),(0,r.jsxs)("p",{className:"small text-muted border-bottom pb-2 mb-2",children:[(0,r.jsx)("span",{children:e.authorName}),(0,r.jsx)("span",{className:"mx-1",children:"\xb7"}),(0,r.jsx)("span",{title:e.publishedAt,children:e.publishedFromNow})]})]},s))}},4579:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return A},default:function(){return E}});var r=a(5893),t=a(1664),l=a.n(t),i=a(4184),n=a.n(i),c=a(7294),d=a(6792);let o=c.forwardRef(({className:e,bsPrefix:s,as:a="div",...t},l)=>(s=(0,d.vE)(s,"card-body"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));o.displayName="CardBody";let m=c.forwardRef(({className:e,bsPrefix:s,as:a="div",...t},l)=>(s=(0,d.vE)(s,"card-footer"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));m.displayName="CardFooter";var h=a(9059);let x=c.forwardRef(({bsPrefix:e,className:s,as:a="div",...t},l)=>{let i=(0,d.vE)(e,"card-header"),o=(0,c.useMemo)(()=>({cardHeaderBsPrefix:i}),[i]);return(0,r.jsx)(h.Z.Provider,{value:o,children:(0,r.jsx)(a,{ref:l,...t,className:n()(s,i)})})});x.displayName="CardHeader";let u=c.forwardRef(({bsPrefix:e,className:s,variant:a,as:t="img",...l},i)=>{let c=(0,d.vE)(e,"card-img");return(0,r.jsx)(t,{ref:i,className:n()(a?`${c}-${a}`:c,s),...l})});u.displayName="CardImg";let j=c.forwardRef(({className:e,bsPrefix:s,as:a="div",...t},l)=>(s=(0,d.vE)(s,"card-img-overlay"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));j.displayName="CardImgOverlay";let f=c.forwardRef(({className:e,bsPrefix:s,as:a="a",...t},l)=>(s=(0,d.vE)(s,"card-link"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));f.displayName="CardLink";var N=a(9602);let b=(0,N.Z)("h6"),p=c.forwardRef(({className:e,bsPrefix:s,as:a=b,...t},l)=>(s=(0,d.vE)(s,"card-subtitle"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));p.displayName="CardSubtitle";let v=c.forwardRef(({className:e,bsPrefix:s,as:a="p",...t},l)=>(s=(0,d.vE)(s,"card-text"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));v.displayName="CardText";let g=(0,N.Z)("h5"),w=c.forwardRef(({className:e,bsPrefix:s,as:a=g,...t},l)=>(s=(0,d.vE)(s,"card-title"),(0,r.jsx)(a,{ref:l,className:n()(e,s),...t})));w.displayName="CardTitle";let I=c.forwardRef(({bsPrefix:e,className:s,bg:a,text:t,border:l,body:i=!1,children:c,as:m="div",...h},x)=>{let u=(0,d.vE)(e,"card");return(0,r.jsx)(m,{ref:x,...h,className:n()(s,u,a&&`bg-${a}`,t&&`text-${t}`,l&&`border-${l}`),children:i?(0,r.jsx)(o,{children:c}):c})});I.displayName="Card";var y=Object.assign(I,{Img:u,Title:w,Subtitle:p,Body:o,Link:f,Text:v,Header:x,Footer:m,ImgOverlay:j}),T=a(5255),C=a(7216),k=a(2889),A=!0;function E(e){let{post:s,recentPosts:a}=e,t=s.tags.map((e,s)=>(0,r.jsx)(l(),{href:"/tags/".concat(e),children:(0,r.jsx)("span",{className:"badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill me-2",children:e})},s));return(0,r.jsxs)(T.Z,{title:s.title,children:[(0,r.jsxs)(C.Z,{children:[(0,r.jsx)(C.Z.Item,{href:"/posts",children:"Posts"}),(0,r.jsx)(C.Z.Item,{children:s.title})]}),(0,r.jsxs)("div",{className:"post",children:[(0,r.jsx)("h1",{className:"title",children:s.title}),(0,r.jsxs)("ul",{className:"list-inline small border-bottom pb-3 text-muted",children:[(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)(l(),{href:"/authors/".concat(s.authorId),children:s.authorName})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("span",{children:"\xb7"})}),(0,r.jsx)("li",{className:"list-inline-item",children:s.readingTimeAsText}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("span",{children:"\xb7"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("span",{title:s.publishedAt,children:s.publishedFromNow})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12 col-lg-9 col-xxl-9 mb-3",dangerouslySetInnerHTML:{__html:s.content}}),(0,r.jsx)("div",{className:"col-12 col-lg-3 col-xxl-3",children:(0,r.jsxs)("div",{className:"position-sticky",style:{top:"5rem"},children:[(0,r.jsxs)(y,{className:"mb-3 mt-3",children:[(0,r.jsx)(y.Header,{className:"fw-bold",children:"Category"}),(0,r.jsx)(y.Body,{children:s.category})]}),(0,r.jsxs)(y,{className:"mb-3",children:[(0,r.jsx)(y.Header,{className:"fw-bold",children:"Tags"}),(0,r.jsx)(y.Body,{children:t})]}),(0,r.jsx)("h2",{className:"fw-bold border-bottom mb-2",children:"Recent Posts"}),(0,r.jsx)(k.Z,{posts:a})]})})]})]})]})}}},function(e){e.O(0,[795,888,774,179],function(){return e(e.s=7289)}),_N_E=e.O()}]);