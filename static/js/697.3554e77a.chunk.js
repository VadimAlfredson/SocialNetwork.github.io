"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[697],{6502:function(e,o,t){t.d(o,{Ai:function(){return n},Z6:function(){return i},gO:function(){return r}});var n=function(e){return e.profile.profile},i=function(e){return e.profile.status},r=function(e){return e.profile.follow}},5697:function(e,o,t){t.r(o),t.d(o,{default:function(){return S}});var n=t(2791),i=t(5992),r=t(2982),s=t(5184),l={createText:"MyPosts_createText__T-jsH",buttonAddPost:"MyPosts_buttonAddPost__QtbW7",addpost:"MyPosts_addpost__+irvX"},u=t(5705),a=t(184),c=n.memo((function(e){return console.log("rerenderPost"),(0,a.jsx)(u.J9,{initialValues:{newPost:""},validateOnBlur:!0,onSubmit:function(o,t){var n=t.resetForm;e.createNewPost(o.newPost),console.log(o.newPost),n({values:void 0})},children:function(e){var o=e.values,t=e.handleBlur,n=e.handleChange,i=e.isValid,r=e.handleSubmit,s=e.dirty;return(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"input",name:"newPost",onChange:n,placeholder:"Add text",className:l.createText,value:o.newPost,onBlur:t}),(0,a.jsx)("button",{className:l.buttonAddPost,disabled:!i&&!s,onClick:function(){r()},type:"submit",children:"Send"})]})}})})),f=function(e){(0,n.useEffect)((function(){console.log(e.posts)}),(0,r.Z)(e.posts));var o=e.posts.map((function(e){return(0,a.jsx)(s.Z,{message:e.message,likeCount:e.likeCount,ownerLike:e.ownerLike,id:e.id},e.id)}));return console.log("Rerender"),(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{createNewPost:e.createNewPost}),(0,a.jsx)("div",{className:l.post,children:o})]})},d=(0,t(8687).$j)((function(e){return{posts:e.profile.posts,newPostText:e.profile.newPostText}}),(function(e){return{createNewPost:function(o){e((0,i.HP)(o))}}}))(f),p=t(885),x={profileClass:"Profile_profileClass__eq7lO",profileInfo:"Profile_profileInfo__OVCEI",avatarSide:"Profile_avatarSide__M2bsj",avatarImg:"Profile_avatarImg__3Egiz",fullPhoto:"Profile_fullPhoto__Yz2Tr",inputPhoto:"Profile_inputPhoto__RonUU",labelUpdatePhoto:"Profile_labelUpdatePhoto__rIkOS",name:"Profile_name__7N8LX",status:"Profile_status__pnE9e",aboutMe:"Profile_aboutMe__UjygN",editMode:"Profile_editMode__71+RX",informationUser:"Profile_informationUser__7qzE9",buttonFollow:"Profile_buttonFollow__w3i6m",buttonUnfollow:"Profile_buttonUnfollow__wXenc",buttonEditInfo:"Profile_buttonEditInfo__iPGTb",profilePost:"Profile_profilePost__xVBaE",statusEditImg:"Profile_statusEditImg__xboN9"},h=t(4374),_=t(8755),P=t(4554),j=t(890),m=t(1214),w=t(4919),g=function(e){var o=(0,_.TL)(),t=(0,n.useState)(!1),r=(0,p.Z)(t,2),s=r[0],l=r[1],u=(0,n.useState)(e.status),c=(0,p.Z)(u,2),f=c[0],d=c[1];return(0,n.useEffect)((function(){d(e.status)}),[e.status]),(0,n.useEffect)((function(){console.log(e.ownerId===e.userId)}),[e.userId]),(0,a.jsxs)(P.Z,{children:["  ",!s&&(0,a.jsxs)(P.Z,{display:"flex",flexDirection:"row",alignItems:"center",m:"0 auto",justifyContent:"center",children:[(0,a.jsx)(j.Z,{variant:"subtitle1",color:"#D0D3D4",children:e.status||""}),(0,a.jsx)("span",{onClick:function(){return l(!e.isOwner)},children:e.ownerId===e.userId&&(0,a.jsx)(w.Z,{color:"info",sx:{ml:"10px"}})})]}),(0,a.jsx)(P.Z,{display:"flex",justifyContent:"center",margin:"auto",children:s&&(0,a.jsx)(m.Z,{id:"status",label:"Status",variant:"standard",onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,value:f,onBlur:function(){l(!1),f!==e.status&&o((0,i.FY)(f))},color:"info",fullWidth:!0,sx:{m:"0 20px",maxWidth:"300px"}})})]})},v=t(3504),b=t(7368),C=t(7621),I=t(2169),O=function(e){var o=e.contactTitle,t=e.contactValue;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("b",{children:[o,":"]})," ",t]})},Z=function(e){var o=e.profile,t=e.isOwner,i=(0,n.useState)(!1),r=(0,p.Z)(i,2),s=r[0];r[1];return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"looking for a job:"})," ",o.lookingForAJob?"yes":"no"]}),o.lookingForAJob&&(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"looking for a job description:"})," ",o.lookingForAJobDescription]})]}),(0,a.jsxs)("div",{className:x.aboutMe,children:[(0,a.jsx)("b",{children:"About me:"}),o.aboutMe]})]}),(0,a.jsx)("div",{className:x.contacts,children:!t&&s||Object.keys(o.contacts).filter((function(e){return o.contacts[e]})).map((function(e){return(0,a.jsx)(O,{contactTitle:e,contactValue:o.contacts[e]},e)}))})]})},N=function(e){var o=(0,_.CG)(b.nT),t=(0,_.CG)((function(e){return e.auth.defaultPhoto})),i=(0,n.useState)(!1),r=(0,p.Z)(i,2),s=(r[0],r[1]);return(0,n.useEffect)((function(){s(!1)}),[e.profile.userId]),e.profile?(0,a.jsxs)(C.Z,{sx:{display:"flex",borderRadius:"5px",flexDirection:{xs:"column",sm:"row"},background:"rgba(0, 0, 0, 0)"},children:[(0,a.jsx)(I.Z,{component:"img",image:e.profile.photos.large?e.profile.photos.large:t,sx:{width:"300px",height:"300px",borderRadius:"5px",m:"auto"}}),(0,a.jsxs)(P.Z,{display:"flex",flexDirection:"column",children:[(0,a.jsx)(j.Z,{color:"#D0D3D4",sx:{m:"10px auto"},variant:"h4",children:e.profile.fullName}),(0,a.jsx)(g,{status:e.status,isOwner:e.isOwner,ownerId:o,userId:e.profile.userId}),(0,a.jsx)("div",{className:x.editMode,children:o!==e.profile.userId&&e.isOwner&&(0,a.jsx)("button",{className:e.follow?x.buttonUnfollow:x.buttonFollow,onClick:function(){e.onFollowProfileChange(e.profile.userId,e.follow)},children:e.follow?"Unfollow":"Follow"})}),(0,a.jsx)("div",{className:x.editMode,children:o!==e.profile.userId&&e.isOwner&&(0,a.jsx)(v.OL,{to:"/dialogs/"+e.profile.userId,className:x.buttonFollow,onClick:function(){e.onPutDialogOnProfileChange(e.profile.userId)},children:"Send message"})}),(0,a.jsx)("div",{className:x.informationUser,children:(0,a.jsx)(Z,{profile:e.profile,isOwner:e.isOwner})})]})]}):(0,a.jsx)(h.Z,{})},k=function(e){return(0,a.jsxs)("div",{className:x.profileContent,children:[(0,a.jsx)("div",{className:x.profileInfo,children:(0,a.jsx)(N,{isOwner:e.isOwner,profile:e.profile,status:e.status,follow:e.follow,onFollowProfileChange:e.onFollowProfileChange,onPutDialogOnProfileChange:e.onPutDialogOnProfileChange})}),(0,a.jsx)("div",{className:x.profilePost,children:(0,a.jsx)(d,{})})]})},y=t(6871),F=t(3502),D=t(3418),E=t(894),T=t(6502),S=(0,F.S)((function(){var e=(0,y.UO)().userId,o=Number(e);console.log((0,y.UO)());var t=(0,_.TL)(),r=(0,_.CG)(T.Ai),s=(0,_.CG)(T.Z6),l=(0,_.CG)(T.gO),u=(0,_.CG)(b.nT);console.log(e),(0,n.useEffect)((function(){o||(o=u),t((0,i.Hw)(o)),t((0,i.xD)(o)),t((0,i.fB)(o))}),[e]),(0,n.useEffect)((function(){}),[]);return(0,a.jsx)(k,{isOwner:!!e,profile:r,status:s,follow:l,onFollowProfileChange:function(e,o){t((0,i.Gv)(e,o)),t((0,D.pt)(!0))},onPutDialogOnProfileChange:function(e){t((0,E.yZ)(e))}})}))},3502:function(e,o,t){t.d(o,{S:function(){return p}});var n=t(1413),i=t(5671),r=t(3144),s=t(136),l=t(7277),u=t(2791),a=t(8687),c=t(6871),f=t(184),d=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var o=function(o){(0,s.Z)(u,o);var t=(0,l.Z)(u);function u(){return(0,i.Z)(this,u),t.apply(this,arguments)}return(0,r.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,n.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,a.$j)(d)(o)}}}]);
//# sourceMappingURL=697.3554e77a.chunk.js.map