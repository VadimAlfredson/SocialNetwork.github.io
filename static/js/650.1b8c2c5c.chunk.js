"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[650],{6502:function(e,o,n){n.d(o,{Ai:function(){return t},Z6:function(){return i},gO:function(){return r}});var t=function(e){return e.profile.profile},i=function(e){return e.profile.status},r=function(e){return e.profile.follow}},650:function(e,o,n){n.r(o),n.d(o,{default:function(){return R}});var t=n(2791),i=n(5992),r=n(885),s="Post_post__akrs7",l="Post_img__LCZ5K",a="Post_messageBlock__DTacw",u="Post_message__WRFZD",c="Post_like__wbWe1",f="Post_likeActive__cinax",d="Post_likeIcon__rVuhL",x=n(8755),p=n(184),h=function(e){var o=(0,t.useState)(e.ownerLike),n=(0,r.Z)(o,2),h=n[0],_=n[1],w=(0,t.useState)(e.likeCount),j=(0,r.Z)(w,2),g=j[0],P=j[1],m=(0,x.TL)();(0,t.useEffect)((function(){_(e.ownerLike),P(e.likeCount),console.log(e.ownerLike)}),[e.ownerLike]);return(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("img",{className:l,src:"https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"}),(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("div",{className:u,children:e.message}),(0,p.jsxs)("div",{className:h?f:c,children:[g,(0,p.jsx)("img",{className:d,src:h?"/SocialNetwork/likeActive.png":"/SocialNetwork/like.png",onClick:function(){m((0,i.dz)(e.id))},alt:"like"})]})]})]})},_={createText:"MyPosts_createText__T-jsH",buttonAddPost:"MyPosts_buttonAddPost__QtbW7",addpost:"MyPosts_addpost__+irvX"},w=n(5705),j=n(4554),g=n(1214),P=n(6151),m=t.memo((function(e){return(0,p.jsx)(w.J9,{initialValues:{newPost:""},validateOnBlur:!0,onSubmit:function(o,n){var t=n.resetForm;e.createNewPost(o.newPost),t({values:void 0})},children:function(e){var o=e.values,n=e.handleBlur,t=e.handleChange,i=(e.isValid,e.handleSubmit),r=e.dirty;return(0,p.jsxs)(j.Z,{display:"flex",flexDirection:"row",width:"100%",maxWidth:"600px",m:"auto",sx:{flexGrow:1},children:[(0,p.jsx)(g.Z,{type:"input",name:"newPost",onChange:t,value:o.newPost,onBlur:n,color:"info",label:"Add post",id:"newPost",variant:"outlined",fullWidth:!0,sx:{"& .MuiOutlinedInput-root":{"& > fieldset":{border:"1px solid grey"}},input:{color:"#D0D3D4"}},InputLabelProps:{sx:{color:"grey"}}}),(0,p.jsx)(P.Z,{variant:r?"contained":"outlined",color:"warning",disabled:!r,onClick:function(){i()},type:"submit",children:"Send"})]})}})})),v=function(e){var o=e.posts.map((function(e){return(0,p.jsx)(h,{message:e.message,likeCount:e.likeCount,ownerLike:e.ownerLike,id:e.id},e.id)}));return console.log("Rerender"),(0,p.jsxs)(j.Z,{display:"flex",flexDirection:"column",mt:3,children:[(0,p.jsx)(m,{createNewPost:e.createNewPost}),(0,p.jsx)("div",{className:_.post,children:o})]})},b=(0,n(8687).$j)((function(e){return{posts:e.profile.posts,newPostText:e.profile.newPostText}}),(function(e){return{createNewPost:function(o){e((0,i.HP)(o))}}}))(v),k={profileClass:"Profile_profileClass__eq7lO",profileInfo:"Profile_profileInfo__OVCEI",avatarSide:"Profile_avatarSide__M2bsj",avatarImg:"Profile_avatarImg__3Egiz",fullPhoto:"Profile_fullPhoto__Yz2Tr",inputPhoto:"Profile_inputPhoto__RonUU",labelUpdatePhoto:"Profile_labelUpdatePhoto__rIkOS",name:"Profile_name__7N8LX",status:"Profile_status__pnE9e",aboutMe:"Profile_aboutMe__UjygN",editMode:"Profile_editMode__71+RX",informationUser:"Profile_informationUser__7qzE9",buttonFollow:"Profile_buttonFollow__w3i6m",buttonUnfollow:"Profile_buttonUnfollow__wXenc",buttonEditInfo:"Profile_buttonEditInfo__iPGTb",profilePost:"Profile_profilePost__xVBaE",statusEditImg:"Profile_statusEditImg__xboN9"},Z=n(4374),C=n(890),y=n(4919),I=function(e){var o=(0,x.TL)(),n=(0,t.useState)(!1),s=(0,r.Z)(n,2),l=s[0],a=s[1],u=(0,t.useState)(e.status),c=(0,r.Z)(u,2),f=c[0],d=c[1];return(0,t.useEffect)((function(){d(e.status)}),[e.status]),(0,t.useEffect)((function(){console.log(e.ownerId===e.userId)}),[e.userId]),(0,p.jsxs)(j.Z,{children:["  ",!l&&(0,p.jsxs)(j.Z,{display:"flex",flexDirection:"row",alignItems:"center",m:"0 auto",justifyContent:"center",children:[(0,p.jsx)(C.Z,{variant:"subtitle1",color:"#D0D3D4",children:e.status||""}),(0,p.jsx)("span",{onClick:function(){return a(!e.isOwner)},children:e.ownerId===e.userId&&(0,p.jsx)(y.Z,{color:"info",sx:{ml:"10px"}})})]}),(0,p.jsx)(j.Z,{display:"flex",justifyContent:"center",margin:"auto",children:l&&(0,p.jsx)(g.Z,{id:"status",label:"Status",variant:"standard",onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,value:f,onBlur:function(){a(!1),f!==e.status&&o((0,i.FY)(f))},color:"info",fullWidth:!0,sx:{m:"0 20px",maxWidth:"300px"}})})]})},D=n(7368),O=n(7621),N=n(2169),S=n(7750),T=n(3368),E=n(5776),A=function(e){var o=e.contactTitle,n=e.contactValue;return(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)("b",{children:[o,":"]})," ",n]})},F=function(e){var o=e.profile;e.isOwner;return(0,p.jsxs)(j.Z,{color:"#D0D3D4",children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"looking for a job:"})," ",o.lookingForAJob?" yes":" no"]}),o.lookingForAJob&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"looking for a job description:"})," ",o.lookingForAJobDescription]})]}),(0,p.jsxs)("div",{className:k.aboutMe,children:[(0,p.jsx)("b",{children:"About me:"})," ",o.aboutMe]})]}),(0,p.jsx)("div",{className:k.contacts,children:Object.keys(o.contacts).filter((function(e){return o.contacts[e]})).map((function(e){return(0,p.jsx)(A,{contactTitle:e,contactValue:o.contacts[e]},e)}))})]})},L=function(e){var o=(0,x.CG)(D.nT),n=(0,x.CG)((function(e){return e.auth.defaultPhoto})),i=(0,t.useState)(!1),s=(0,r.Z)(i,2),l=(s[0],s[1]);return(0,t.useEffect)((function(){l(!1)}),[e.profile.userId]),e.profile?(0,p.jsxs)(O.Z,{sx:{display:"flex",borderRadius:"5px",flexDirection:{xs:"column",sm:"row"},background:"rgba(0, 0, 0, 0)",gap:1,flexGrow:1},children:[(0,p.jsxs)(j.Z,{display:"flex",flexDirection:"column",children:[(0,p.jsx)(N.Z,{component:"img",image:e.profile.photos.large?e.profile.photos.large:n,sx:{width:"300px",height:"300px",borderRadius:"5px",m:"auto"}}),(0,p.jsxs)(j.Z,{display:"flex",flexDirection:"row",m:"5px auto",width:"300px",gap:"5px",children:[o!==e.profile.userId&&e.isOwner&&(0,p.jsx)(P.Z,{color:e.follow?"info":"warning",variant:e.follow?"outlined":"contained",onClick:function(){e.onFollowProfileChange(e.profile.userId,e.follow)},children:e.follow?(0,p.jsx)(T.Z,{}):(0,p.jsx)(S.Z,{})}),o!==e.profile.userId&&e.isOwner&&(0,p.jsx)(P.Z,{color:"info",variant:"contained",startIcon:(0,p.jsx)(E.Z,{}),fullWidth:!0,onClick:function(){e.onPutDialogOnProfileChange(e.profile.userId)},children:"Write new message"})]})]}),(0,p.jsxs)(j.Z,{display:"flex",flexDirection:"column",sx:{flexGrow:1},width:"100%",children:[(0,p.jsx)(C.Z,{color:"#D0D3D4",sx:{m:"10px auto"},variant:"h5",children:e.profile.fullName}),(0,p.jsx)(I,{status:e.status,isOwner:e.isOwner,ownerId:o,userId:e.profile.userId}),(0,p.jsx)(F,{profile:e.profile,isOwner:e.isOwner})]})]}):(0,p.jsx)(Z.Z,{})},G=function(e){return(0,p.jsxs)(j.Z,{display:"flex",flexGrow:1,flexDirection:"column",children:[(0,p.jsx)(L,{isOwner:e.isOwner,profile:e.profile,status:e.status,follow:e.follow,onFollowProfileChange:e.onFollowProfileChange,onPutDialogOnProfileChange:e.onPutDialogOnProfileChange}),(0,p.jsx)(b,{})]})},M=n(6871),U=n(3502),W=n(3418),B=n(894),V=n(6502),R=(0,U.S)((function(){var e=(0,M.UO)().userId,o=Number(e);console.log((0,M.UO)());var n=(0,x.TL)(),r=(0,x.CG)(V.Ai),s=(0,x.CG)(V.Z6),l=(0,x.CG)(V.gO),a=(0,x.CG)(D.nT),u=(0,M.s0)();console.log(e),(0,t.useEffect)((function(){o||(o=a),n((0,i.Hw)(o)),n((0,i.xD)(o)),n((0,i.fB)(o))}),[e]),(0,t.useEffect)((function(){}),[]);return(0,p.jsx)(G,{isOwner:!!e,profile:r,status:s,follow:l,onFollowProfileChange:function(e,o){n((0,i.Gv)(e,o)),n((0,W.pt)(!0))},onPutDialogOnProfileChange:function(e){u("/dialogs/".concat(e)),n((0,B.yZ)(e))}})}))},3502:function(e,o,n){n.d(o,{S:function(){return x}});var t=n(1413),i=n(5671),r=n(3144),s=n(136),l=n(7277),a=n(2791),u=n(8687),c=n(6871),f=n(184),d=function(e){return{isAuth:e.auth.isAuth}},x=function(e){var o=function(o){(0,s.Z)(a,o);var n=(0,l.Z)(a);function a(){return(0,i.Z)(this,a),n.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,t.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,u.$j)(d)(o)}}}]);
//# sourceMappingURL=650.1b8c2c5c.chunk.js.map