"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[697],{5697:function(e,o,t){t.r(o),t.d(o,{default:function(){return O}});var n=t(2791),s=t(2005),i=t(2982),r=t(5184),l={createText:"MyPosts_createText__T-jsH",buttonAddPost:"MyPosts_buttonAddPost__QtbW7",addpost:"MyPosts_addpost__+irvX"},a=t(5705),u=t(184),c=n.memo((function(e){return console.log("rerenderPost"),(0,u.jsx)(a.J9,{initialValues:{newPost:""},validateOnBlur:!0,onSubmit:function(o,t){var n=t.resetForm;e.createNewPost(o.newPost),console.log(o.newPost),n({values:void 0})},children:function(e){var o=e.values,t=e.handleBlur,n=e.handleChange,s=e.isValid,i=e.handleSubmit,r=e.dirty;return(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{type:"input",name:"newPost",onChange:n,placeholder:"Add text",className:l.createText,value:o.newPost,onBlur:t}),(0,u.jsx)("button",{className:l.buttonAddPost,disabled:!s&&!r,onClick:function(){i()},type:"submit",children:"Send"})]})}})})),f=function(e){(0,n.useEffect)((function(){console.log(e.posts)}),(0,i.Z)(e.posts));var o=e.posts.map((function(e){return(0,u.jsx)(r.Z,{message:e.message,likeCount:e.likeCount,ownerLike:e.ownerLike,id:e.id},e.id)}));return console.log("Rerender"),(0,u.jsxs)("div",{children:[(0,u.jsx)(c,{createNewPost:e.createNewPost}),(0,u.jsx)("div",{className:l.post,children:o})]})},d=(0,t(6434).$j)((function(e){return{posts:e.profile.posts,newPostText:e.profile.newPostText}}),(function(e){return{createNewPost:function(o){e((0,s.HP)(o))}}}))(f),p=t(885),h={profileClass:"Profile_profileClass__eq7lO",profileInfo:"Profile_profileInfo__OVCEI",avatarSide:"Profile_avatarSide__M2bsj",avatarImg:"Profile_avatarImg__3Egiz",fullPhoto:"Profile_fullPhoto__Yz2Tr",inputPhoto:"Profile_inputPhoto__RonUU",labelUpdatePhoto:"Profile_labelUpdatePhoto__rIkOS",name:"Profile_name__7N8LX",status:"Profile_status__pnE9e",aboutMe:"Profile_aboutMe__UjygN",editMode:"Profile_editMode__71+RX",informationUser:"Profile_informationUser__7qzE9",buttonFollow:"Profile_buttonFollow__w3i6m",buttonUnfollow:"Profile_buttonUnfollow__wXenc",buttonEditInfo:"Profile_buttonEditInfo__iPGTb",profilePost:"Profile_profilePost__xVBaE",statusEditImg:"Profile_statusEditImg__xboN9"},_=t(4374),j=t(8755),x=function(e){var o=(0,j.TL)(),t=(0,n.useState)(!1),i=(0,p.Z)(t,2),r=i[0],l=i[1],a=(0,n.useState)(e.status),c=(0,p.Z)(a,2),f=c[0],d=c[1];return(0,n.useEffect)((function(){d(e.status)}),[e.status]),(0,u.jsxs)("div",{children:["  ",!r&&(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{children:e.status||""}),(0,u.jsx)("span",{onClick:function(){return l(!e.isOwner)},children:!e.isOwner&&(0,u.jsx)("img",{className:h.statusEditImg,src:"/SocialNetwork/free-icon-edit-button-84380.png"})})]}),r&&(0,u.jsx)("div",{children:(0,u.jsx)("input",{onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),f!==e.status&&o((0,s.FY)(f))},value:f})})]})},P=t(3504),v=function(e){var o=e.contactTitle,t=e.contactValue;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("b",{children:[o,":"]})," ",t]})},m=function(e){var o=e.profile,t=e.isOwner,s=(0,n.useState)(!1),i=(0,p.Z)(s,2),r=i[0];i[1];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"looking for a job:"})," ",o.lookingForAJob?"yes":"no"]}),o.lookingForAJob&&(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"looking for a job description:"})," ",o.lookingForAJobDescription]})]}),(0,u.jsxs)("div",{className:h.aboutMe,children:[(0,u.jsx)("b",{children:"About me:"}),o.aboutMe]})]}),(0,u.jsx)("div",{className:h.contacts,children:!t&&r||Object.keys(o.contacts).filter((function(e){return o.contacts[e]})).map((function(e){return(0,u.jsx)(v,{contactTitle:e,contactValue:o.contacts[e]},e)}))})]})},w=function(e){var o=(0,n.useState)(!1),t=(0,p.Z)(o,2),s=t[0],i=t[1];return(0,n.useEffect)((function(){i(!1)}),[e.profile.userId]),e.profile?(0,u.jsxs)("div",{className:h.profileClass,children:[s&&e.profile.photos.large&&(0,u.jsx)("img",{className:h.fullPhoto,onClick:function(){return i(!1)},src:e.profile.photos.large}),(0,u.jsx)("div",{className:h.avatarSide,children:(0,u.jsx)("img",{className:h.avatarImg,src:e.profile.photos.large||"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg",onClick:function(){return e.profile.photos.large?i(!0):i(!1)}})}),(0,u.jsxs)("div",{className:h.profileInfo,children:[(0,u.jsx)("div",{className:h.name,children:(0,u.jsx)("b",{children:e.profile.fullName})}),(0,u.jsx)("div",{className:h.status,children:(0,u.jsx)(x,{status:e.status,isOwner:e.isOwner})}),(0,u.jsx)("div",{className:h.editMode,children:e.isOwner&&(0,u.jsx)("button",{className:e.follow?h.buttonUnfollow:h.buttonFollow,onClick:function(){e.onFollowProfileChange(e.profile.userId,e.follow)},children:e.follow?"Unfollow":"Follow"})}),(0,u.jsx)("div",{className:h.editMode,children:e.isOwner&&(0,u.jsx)(P.OL,{to:"/dialogs/"+e.profile.userId,className:h.buttonFollow,onClick:function(){e.onPutDialogOnProfileChange(e.profile.userId)},children:"Send message"})}),(0,u.jsx)("div",{className:h.informationUser,children:(0,u.jsx)(m,{profile:e.profile,isOwner:e.isOwner})})]})]}):(0,u.jsx)(_.Z,{})},g=function(e){return(0,u.jsxs)("div",{className:h.profileContent,children:[(0,u.jsx)("div",{className:h.profileInfo,children:(0,u.jsx)(w,{isOwner:e.isOwner,profile:e.profile,status:e.status,follow:e.follow,onFollowProfileChange:e.onFollowProfileChange,onPutDialogOnProfileChange:e.onPutDialogOnProfileChange})}),(0,u.jsx)("div",{className:h.profilePost,children:(0,u.jsx)(d,{})})]})},b=t(6871),C=t(3502),N=t(1333),k=t(443),O=(0,C.S)((function(){var e=(0,b.UO)().userId,o=Number(e);console.log((0,b.UO)());var t=(0,j.TL)(),i=(0,j.CG)((function(e){return e.profile.profile})),r=(0,j.CG)((function(e){return e.profile.status})),l=(0,j.CG)((function(e){return e.profile.follow})),a=(0,j.CG)((function(e){return e.auth.userId}));console.log(e),(0,n.useEffect)((function(){o||(o=a),t((0,s.Hw)(o)),t((0,s.xD)(o)),t((0,s.fB)(o))}),[e]),(0,n.useEffect)((function(){}),[]);return(0,u.jsx)(g,{isOwner:!!e,profile:i,status:r,follow:l,onFollowProfileChange:function(e,o){t((0,s.Gv)(e,o)),t((0,N.pt)(!0))},onPutDialogOnProfileChange:function(e){t((0,k.yZ)(e))}})}))},3502:function(e,o,t){t.d(o,{S:function(){return p}});var n=t(8683),s=t(5671),i=t(3144),r=t(136),l=t(7277),a=t(2791),u=t(6434),c=t(6871),f=t(184),d=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var o=function(o){(0,r.Z)(a,o);var t=(0,l.Z)(a);function a(){return(0,s.Z)(this,a),t.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,n.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,u.$j)(d)(o)}}}]);
//# sourceMappingURL=697.7f3f4f40.chunk.js.map