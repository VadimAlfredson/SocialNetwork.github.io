"use strict";(self.webpackChunkreact_vadim=self.webpackChunkreact_vadim||[]).push([[469],{8469:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(2791),a="Setting_profileInfoForm__0zC+k",r="Setting_itemFormInput__T1BVl",i="Setting_inputUploadPhoto__p3uZS",s="Setting_blockUploadPhoto__522c0",l="Setting_textUploadPhoto__8gA17",u=n(885),c=n(5705),h=n(6434),b=n(2005),x=n(8755),d=n(184),p=(0,h.$j)((function(e){return{}}),{ProfileThunkCreator:b.WE,userProfileThunkCreator:b.Hw})((function(){var e=(0,x.CG)((function(e){return e.profile.profile})),t=(0,x.TL)(),n=(0,o.useState)(!0),a=(0,u.Z)(n,2);a[0],a[1];return(0,d.jsx)(c.J9,{enableReinitialize:!0,initialValues:{fullName:e.fullName,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription,aboutMe:e.aboutMe,contacts:e.contacts},validateOnBlur:!0,onSubmit:function(e){t((0,b.WE)(e))},children:function(t){t.enableReinitialize;var n=t.values,o=(t.errors,t.touched,t.handleBlur),a=t.handleChange,i=(t.isValid,t.handleSubmit),s=t.dirty;return(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{className:r,type:"text",name:"fullName",onChange:a,onBlur:o,disabled:!0,value:n.fullName||e.fullName||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"Looking for a job:"}),(0,d.jsx)("input",{type:"checkbox",name:"lookingForAJob",onChange:a,onBlur:o,value:n.lookingForAJob?["lookingForAJob"]:[]}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"Looking for a job description:"}),(0,d.jsx)("input",{className:r,type:"text",name:"lookingForAJobDescription",onChange:a,onBlur:o,value:n.lookingForAJobDescription||"",disabled:!n.lookingForAJob}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"About Me:"}),(0,d.jsx)("input",{className:r,type:"text",name:"aboutMe",onChange:a,onBlur:o,value:n.aboutMe||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"contacts:"}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"github:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.github",onChange:a,onBlur:o,value:n.contacts.github||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"vk:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.vk",onChange:a,onBlur:o,value:n.contacts.vk||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"facebook:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.facebook",onChange:a,onBlur:o,value:n.contacts.facebook||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"instagram:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.instagram",onChange:a,onBlur:o,value:n.contacts.instagram||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"twitter:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.twitter",onChange:a,onBlur:o,value:n.contacts.twitter||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"website:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.website",onChange:a,onBlur:o,value:n.contacts.website||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"youtube:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.youtube",onChange:a,onBlur:o,value:n.contacts.youtube||""}),(0,d.jsx)("br",{}),(0,d.jsx)("b",{children:"mainLink:"}),(0,d.jsx)("input",{className:r,type:"text",name:"contacts.mainLink",onChange:a,onBlur:o,value:n.contacts.mainLink||""}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{disabled:!s,onClick:function(){i()},type:"submit",children:"Save"})]})}})})),f=function(e){var t=(0,x.CG)((function(e){return e.profile.profile}));return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("h3",{children:"Profile setting"}),(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:s,children:[(0,d.jsx)("a",{className:l,children:"Upload photo"}),(0,d.jsx)("img",{src:t.photos.large||e.defaultPhoto,alt:"avatar"}),(0,d.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhotoTC(t.target.files[0])},className:i})]})}),(0,d.jsx)("div",{children:(0,d.jsx)(p,{})})]})},j=n(7781),m=n(3502),g=(0,j.qC)(m.S,(0,h.$j)((function(e){return{ownerId:e.auth.userId,userId:e.profile.profile.userId,defaultPhoto:e.profile.defaultPhoto}}),{userProfileThunkCreator:b.Hw,savePhotoTC:b.Tw}))((function(e){return(0,o.useEffect)((function(){e.ownerId!==e.userId&&e.userProfileThunkCreator(e.ownerId)}),[]),(0,d.jsx)(f,{savePhotoTC:e.savePhotoTC,defaultPhoto:e.defaultPhoto})}))},3502:function(e,t,n){n.d(t,{S:function(){return x}});var o=n(8683),a=n(5671),r=n(3144),i=n(136),s=n(7277),l=n(2791),u=n(6434),c=n(6871),h=n(184),b=function(e){return{isAuth:e.auth.isAuth}},x=function(e){var t=function(t){(0,i.Z)(l,t);var n=(0,s.Z)(l);function l(){return(0,a.Z)(this,l),n.apply(this,arguments)}return(0,r.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(e,(0,o.Z)({},this.props)):(0,h.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(b)(t)}}}]);
//# sourceMappingURL=469.eb9d073a.chunk.js.map