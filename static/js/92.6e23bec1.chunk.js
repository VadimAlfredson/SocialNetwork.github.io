"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[92],{9092:function(e,n,s){s.r(n),s.d(n,{default:function(){return V}});var r=s(2791),a=s(885),t=s(9662),c="users_usersComponent__8nRZo",u="users_itemUser__x5owb",i="users_avatar__erVMZ",o="users_infoUser__y2HtR",l="users_followButton__ExoVv",h="users_massageButton__-K1Un",d="users_buttonStyle__jG05x",f="users_nameUser__9hBV1",m="users_statusUser__F2WyE",_="users_navLinkToLogin__wH+jC",g="users_formSearchBlock__2WRRL",p="users_searchInput__2r7sY",C="users_searchButton__ZGCpm",x="users_searchCheckbox__LqUAR",j="users_searchText__DnfT0",v=s(3504),b=s(6871),N="paginator_activePage__eWc4N",k="paginator_paginator__QVHI9",G="paginator_pageNumber__7A1XW",y=s(8755),P=s(184),S=function(e){for(var n=(0,y.CG)((function(e){return e.users.pageSize})),s=(0,y.CG)((function(e){return e.users.totalUsersCount})),t=(0,y.CG)((function(e){return e.users.currentPage})),c=(0,y.CG)((function(e){return e.users.term})),u=(0,y.CG)((function(e){return e.users.friends})),i=(0,r.useState)(1),o=(0,a.Z)(i,2),l=o[0],h=o[1],d=l>2?l-2:l>1?l-1:1,f=Math.ceil(s/n),m=[],_=d;_<=f;_++)m.push(_);return(0,r.useEffect)((function(){l!=t&&h(t||1)}),[t]),(0,P.jsxs)("div",{className:k,children:[l>3&&(0,P.jsx)("span",{className:1===t?N:G,onClick:function(){e.onPageChange(1,n,c),h(1)},children:1},1),l>4&&(0,P.jsx)("button",{className:G,onClick:function(){h((function(e){return e-1})),!0===u?e.onPageChange(l-1,n,c,u):e.onPageChange(l-1,n,c)},children:"<<"}),m.filter((function(e){return e>=d&&e<=l+2})).map((function(s){return(0,P.jsx)("span",{className:t===s?N:G,onClick:function(){!0===u?e.onPageChange(s,n,c,u):e.onPageChange(s,n,c),h(s)},children:s},s)})),l<f-2&&(0,P.jsx)("button",{className:G,onClick:function(){h((function(e){return e+1})),!0===u?e.onPageChange(l+1,n,c,u):e.onPageChange(l+1,n,c)},children:">>"}),l<f-2&&(0,P.jsx)("span",{className:t===f?N:G,onClick:function(){e.onPageChange(f,n,c),h(f)},children:f},f)]})},w=s(4374),U=s(443),B=s(5705),L=s(132),Z=function(e){var n=(0,y.CG)((function(e){return e.users.pageSize})),s=L.Ry().shape({search:L.Z_()});return(0,P.jsx)(B.J9,{initialValues:{search:"",subscriptionsCheckbox:!1},validateOnBlur:!0,onSubmit:function(s){console.log(s),e.onUsersChange(1,n,s.search,s.subscriptionsCheckbox)},validationSchema:s,children:function(e){var n=e.values,s=(e.errors,e.touched,e.handleBlur),r=e.handleChange,a=(e.isValid,e.handleSubmit);e.dirty;return(0,P.jsxs)("div",{className:g,children:[(0,P.jsx)("input",{className:p,type:"text",name:"search",onChange:r,onBlur:s,value:n.search,placeholder:"text"}),(0,P.jsx)("button",{className:C,onClick:function(){a()},type:"submit",children:"Search"}),(0,P.jsx)("div",{className:x,children:(0,P.jsx)("div",{className:"",children:(0,P.jsx)("input",{type:"checkbox",name:"subscriptionsCheckbox",onChange:r,onBlur:s,value:"".concat(n.subscriptionsCheckbox)})})}),(0,P.jsx)("div",{className:j,children:"Only subscriptions"})]})}})},R=function(e){var n=(0,y.CG)((function(e){return e.users.users})),s=(0,y.CG)((function(e){return e.users.followingInProgress})),g=(0,y.CG)((function(e){return e.auth.isAuth})),p=(0,y.CG)((function(e){return e.users.isFetching})),C=(0,y.CG)((function(e){return e.users.term})),x=(0,y.CG)((function(e){return e.users.friends})),j=(0,y.CG)((function(e){return e.users.pageSize})),N=(0,y.CG)((function(e){return e.users.currentPage})),k=(0,r.useState)(N),G=(0,a.Z)(k,2),B=G[0],L=(G[1],(0,b.s0)()),R=(0,y.TL)(),V=(0,b.TH)(),T=function(e,n,s,r){L({pathname:"/users",search:s||r||e?"?"+(e?"pageNumber=".concat(e).concat(s||r?"&":""):"")+(s?"term=".concat(s).concat(r?"&":""):"")+(!0===r?"friend=".concat(r):""):""}),N==e&&C==s&&x==!!r||R((0,t.IV)(e,n,C||"",r))};return(0,r.useEffect)((function(){var e=V.search.substring(1).split("&").reduce((function(e,n){var s=n.split("="),r=(0,a.Z)(s,2),t=r[0],c=r[1];return e[t]=c?decodeURIComponent(c.replace(/\+/g,"")):"",e}),{}),n="true"===e.friend||void 0;B==+e.pageNumber&&C==(e.term?e.term:"")&&x==n||T(+e.pageNumber,j,e.term||"",n)}),[V.search]),(0,r.useEffect)((function(){L({pathname:"/users",search:C||x||B?"?"+(B?"pageNumber=".concat(B).concat(C||x?"&":""):"")+(C?"term=".concat(C).concat(x?"&":""):"")+(!0===x?"friend=".concat(x):""):""})}),[C,x,B]),(0,P.jsxs)("div",{className:c,children:[(0,P.jsx)(S,{onPageChange:T}),(0,P.jsx)(Z,{onUsersChange:T}),p?(0,P.jsx)(w.Z,{}):(0,P.jsx)("div",{children:n.map((function(e){return(0,P.jsxs)("div",{className:u,children:[(0,P.jsx)("div",{className:i,children:(0,P.jsx)(v.OL,{to:"/profile/"+e.id,children:(0,P.jsx)("img",{src:null!==e.photos.small?e.photos.small:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})})}),(0,P.jsx)("div",{className:l,children:g?(0,P.jsx)("button",{className:d,disabled:s.includes(e.id),onClick:function(){return n=e.id,s=e.followed,void R((0,t.uq)(n,s));var n,s},children:e.followed?"Unfollow":"Follow"}):(0,P.jsx)(v.OL,{className:_,to:"../login",children:"Register to subscribe"})}),(0,P.jsx)("div",{className:h,children:g&&(0,P.jsx)(v.OL,{to:"/dialogs/".concat(e.id),children:(0,P.jsx)("button",{className:d,onClick:function(){var n;n=e.id,R((0,U.yZ)(n))},children:"Message"})})}),(0,P.jsxs)("div",{className:o,children:[(0,P.jsx)("div",{className:f,children:e.name}),(0,P.jsx)("div",{className:m,children:e.status})]})]},e.id)}))})]})},V=function(e){(0,y.TL)(),(0,y.CG)((function(e){return e.users.pageSize})),(0,y.CG)((function(e){return e.users.currentPage}));return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(R,{})})}}}]);
//# sourceMappingURL=92.6e23bec1.chunk.js.map