<<<<<<< HEAD:public/build/assets/Create-Ba97X0SL.js
import{b as _,u as F,d as V,e as n,f as b,g,m as r,p as y,h as x,i as o,C as B,H as C}from"./app-ClFPZZ4l.js";import{F as h}from"./Form-BU_UekyP.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const v={__name:"Create",setup(E){const m=_(),l=F(),e=V(new h({name:"",email:"",password:"",password_confirmation:"",is_admin:!1}));async function i(d){e.password_confirmation=e.password,e.post("/api/v1/users").then(a=>{const t=a.data;m.success({text:C("admin.user_created")}),l.push({name:"admin.manageUser",params:{userId:t.info.id}})})}return(d,a)=>{const t=n("FormField"),u=n("FormPasswordField"),p=n("FormCheckbox"),f=n("FormButtons"),c=n("FormWrapper"),w=n("VueFooter");return b(),g("div",null,[r(c,{title:"admin.new_user"},{default:y(()=>[x("form",{onSubmit:B(i,["prevent"]),onKeydown:a[4]||(a[4]=s=>o(e).onKeydown(s))},[r(t,{modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>o(e).name=s),fieldName:"name",fieldError:o(e).errors.get("name"),inputType:"text",label:"auth.forms.name",maxLength:255,autofocus:""},null,8,["modelValue","fieldError"]),r(t,{modelValue:o(e).email,"onUpdate:modelValue":a[1]||(a[1]=s=>o(e).email=s),fieldName:"email",fieldError:o(e).errors.get("email"),inputType:"email",label:"auth.forms.email",maxLength:255},null,8,["modelValue","fieldError"]),r(u,{modelValue:o(e).password,"onUpdate:modelValue":a[2]||(a[2]=s=>o(e).password=s),fieldName:"password",fieldError:o(e).errors.get("password"),showRules:!0,label:"auth.forms.password",autocomplete:"new-password"},null,8,["modelValue","fieldError"]),r(p,{modelValue:o(e).is_admin,"onUpdate:modelValue":a[3]||(a[3]=s=>o(e).is_admin=s),fieldName:"is_admin",label:"admin.forms.is_admin.label",help:"admin.forms.is_admin.help"},null,8,["modelValue"]),r(f,{isBusy:o(e).isBusy,isDisabled:o(e).isDisabled,showCancelButton:!0,cancelLandingView:"admin.users",caption:"commons.create",submitId:"btnCreateUser"},null,8,["isBusy","isDisabled","cancelLandingView"])],32)]),_:1}),r(w)])}}};export{v as default};
=======
import{b as _,u as F,d as V,e as n,f as b,g,m as r,p as y,h as x,i as o,C as B,H as C}from"./app-CeOdx_TG.js";import{F as h}from"./Form-BSfNB4q6.js";/*! 2FAuth version 5.3.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const v={__name:"Create",setup(E){const m=_(),l=F(),e=V(new h({name:"",email:"",password:"",password_confirmation:"",is_admin:!1}));async function i(d){e.password_confirmation=e.password,e.post("/api/v1/users").then(a=>{const t=a.data;m.success({text:C("admin.user_created")}),l.push({name:"admin.manageUser",params:{userId:t.info.id}})})}return(d,a)=>{const t=n("FormField"),u=n("FormPasswordField"),p=n("FormCheckbox"),f=n("FormButtons"),c=n("FormWrapper"),w=n("VueFooter");return b(),g("div",null,[r(c,{title:"admin.new_user"},{default:y(()=>[x("form",{onSubmit:B(i,["prevent"]),onKeydown:a[4]||(a[4]=s=>o(e).onKeydown(s))},[r(t,{modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=s=>o(e).name=s),fieldName:"name",fieldError:o(e).errors.get("name"),inputType:"text",label:"auth.forms.name",maxLength:255,autofocus:""},null,8,["modelValue","fieldError"]),r(t,{modelValue:o(e).email,"onUpdate:modelValue":a[1]||(a[1]=s=>o(e).email=s),fieldName:"email",fieldError:o(e).errors.get("email"),inputType:"email",label:"auth.forms.email",maxLength:255},null,8,["modelValue","fieldError"]),r(u,{modelValue:o(e).password,"onUpdate:modelValue":a[2]||(a[2]=s=>o(e).password=s),fieldName:"password",fieldError:o(e).errors.get("password"),showRules:!0,label:"auth.forms.password",autocomplete:"new-password"},null,8,["modelValue","fieldError"]),r(p,{modelValue:o(e).is_admin,"onUpdate:modelValue":a[3]||(a[3]=s=>o(e).is_admin=s),fieldName:"is_admin",label:"admin.forms.is_admin.label",help:"admin.forms.is_admin.help"},null,8,["modelValue"]),r(f,{isBusy:o(e).isBusy,isDisabled:o(e).isDisabled,showCancelButton:!0,cancelLandingView:"admin.users",caption:"commons.create",submitId:"btnCreateUser"},null,8,["isBusy","isDisabled","cancelLandingView"])],32)]),_:1}),r(w)])}}};export{v as default};
//# sourceMappingURL=Create-Ppjik0Rc.js.map
>>>>>>> aa4cb049 (Rebuild assets with sourcemaps):public/build/assets/Create-Ppjik0Rc.js
