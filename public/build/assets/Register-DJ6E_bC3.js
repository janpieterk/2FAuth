<<<<<<< HEAD:public/build/assets/Register-DJ6E_bC3.js
import{a as L,b as T,u as K,r as F,d as k,a1 as U,e as l,f as u,g as _,i as t,k as V,p as c,m as n,h as i,j as p,t as d,C as B,H as I}from"./app-ClFPZZ4l.js";import{F as D}from"./Form-BU_UekyP.js";import{w as W}from"./webauthnService-D3MQflUv.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const P={key:0,class:"field"},M={id:"lblDeviceRegistrationSuccess",class:"label mb-5"},j={key:1,class:"field is-grouped"},A={class:"control"},H={class:"control"},J={class:"nav-links"},G={__name:"Register",setup(O){const b=L(),m=T(),R=K(),w=F(!1),f=F(null),s=k(new D({name:"",email:"",password:"",password_confirmation:""})),r=k(new D({name:""}));async function N(o){s.password_confirmation=s.password,s.post("/user").then(e=>{b.$patch({name:e.data.name,email:e.data.email,preferences:e.data.preferences,isAdmin:e.data.is_admin??!1}),b.applyTheme(),w.value=!0})}function E(){W.register().then(o=>{const e=JSON.parse(o.config.data);f.value=e.id}).catch(o=>{o.response.status===422?m.alert({text:o.response.data.message}):m.error(o)})}function S(o){r.patch("/webauthn/credentials/"+f.value+"/name").then(()=>{m.success({text:I("auth.webauthn.device_successfully_registered")}),R.push({name:"accounts"})})}return U(()=>{m.clear()}),(o,e)=>{const $=l("font-awesome-icon"),h=l("FormField"),g=l("FormButtons"),y=l("RouterLink"),v=l("FormWrapper"),x=l("FormPasswordField"),C=l("VueFooter");return u(),_("div",null,[t(w)?(u(),V(v,{key:0,title:"auth.authentication",punchline:"auth.webauthn.enhance_security_using_webauthn"},{default:c(()=>[t(f)?(u(),_("div",P,[i("label",M,[p(d(o.$t("auth.webauthn.device_successfully_registered"))+" ",1),n($,{icon:["fas","check"]})]),i("form",{onSubmit:B(S,["prevent"]),onKeydown:e[1]||(e[1]=a=>t(r).onKeydown(a))},[n(h,{modelValue:t(r).name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).name=a),fieldName:"name",fieldError:t(r).errors.get("name"),inputType:"text",placeholder:"iPhone 12, TouchID, Yubikey 5C",label:"auth.forms.name_this_device"},null,8,["modelValue","fieldError"]),n(g,{isBusy:t(r).isBusy,isDisabled:t(r).isDisabled,caption:"commons.continue"},null,8,["isBusy","isDisabled"])],32)])):(u(),_("div",j,[i("div",A,[i("button",{type:"button",id:"btnRegisterNewDevice",onClick:e[2]||(e[2]=a=>E()),class:"button is-link"},d(o.$t("auth.webauthn.register_a_device")),1)]),i("div",H,[n(y,{id:"btnMaybeLater",to:{name:"accounts"},class:"button is-text"},{default:c(()=>[p(d(o.$t("auth.maybe_later")),1)]),_:1})])]))]),_:1})):(u(),V(v,{key:1,title:"auth.register",punchline:"auth.forms.register_punchline"},{default:c(()=>[i("form",{onSubmit:B(N,["prevent"]),onKeydown:e[6]||(e[6]=a=>t(s).onKeydown(a))},[n(h,{modelValue:t(s).name,"onUpdate:modelValue":e[3]||(e[3]=a=>t(s).name=a),fieldName:"name",fieldError:t(s).errors.get("name"),inputType:"text",label:"auth.forms.name",maxLength:255,autofocus:""},null,8,["modelValue","fieldError"]),n(h,{modelValue:t(s).email,"onUpdate:modelValue":e[4]||(e[4]=a=>t(s).email=a),fieldName:"email",fieldError:t(s).errors.get("email"),inputType:"email",label:"auth.forms.email",maxLength:255},null,8,["modelValue","fieldError"]),n(x,{modelValue:t(s).password,"onUpdate:modelValue":e[5]||(e[5]=a=>t(s).password=a),fieldName:"password",fieldError:t(s).errors.get("password"),showRules:!0,label:"auth.forms.password"},null,8,["modelValue","fieldError"]),n(g,{isBusy:t(s).isBusy,isDisabled:t(s).isDisabled,caption:"auth.register",submitId:"btnRegister"},null,8,["isBusy","isDisabled"])],32),i("div",J,[i("p",null,[p(d(o.$t("auth.forms.already_register"))+" ",1),n(y,{id:"lnkSignIn",to:{name:"login"},class:"is-link"},{default:c(()=>[p(d(o.$t("auth.sign_in")),1)]),_:1})])])]),_:1})),n(C)])}}};export{G as default};
=======
import{a as L,b as T,u as K,r as F,d as k,a1 as U,e as l,f as u,g as _,i as t,k as V,p as c,m as n,h as i,j as p,t as d,C as B,H as I}from"./app-CeOdx_TG.js";import{F as D}from"./Form-BSfNB4q6.js";import{w as W}from"./webauthnService-3N-iRQ3u.js";/*! 2FAuth version 5.3.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const P={key:0,class:"field"},M={id:"lblDeviceRegistrationSuccess",class:"label mb-5"},j={key:1,class:"field is-grouped"},A={class:"control"},H={class:"control"},J={class:"nav-links"},G={__name:"Register",setup(O){const b=L(),m=T(),R=K(),w=F(!1),f=F(null),s=k(new D({name:"",email:"",password:"",password_confirmation:""})),r=k(new D({name:""}));async function N(o){s.password_confirmation=s.password,s.post("/user").then(e=>{b.$patch({name:e.data.name,email:e.data.email,preferences:e.data.preferences,isAdmin:e.data.is_admin??!1}),b.applyTheme(),w.value=!0})}function E(){W.register().then(o=>{const e=JSON.parse(o.config.data);f.value=e.id}).catch(o=>{o.response.status===422?m.alert({text:o.response.data.message}):m.error(o)})}function S(o){r.patch("/webauthn/credentials/"+f.value+"/name").then(()=>{m.success({text:I("auth.webauthn.device_successfully_registered")}),R.push({name:"accounts"})})}return U(()=>{m.clear()}),(o,e)=>{const $=l("font-awesome-icon"),h=l("FormField"),g=l("FormButtons"),y=l("RouterLink"),v=l("FormWrapper"),x=l("FormPasswordField"),C=l("VueFooter");return u(),_("div",null,[t(w)?(u(),V(v,{key:0,title:"auth.authentication",punchline:"auth.webauthn.enhance_security_using_webauthn"},{default:c(()=>[t(f)?(u(),_("div",P,[i("label",M,[p(d(o.$t("auth.webauthn.device_successfully_registered"))+" ",1),n($,{icon:["fas","check"]})]),i("form",{onSubmit:B(S,["prevent"]),onKeydown:e[1]||(e[1]=a=>t(r).onKeydown(a))},[n(h,{modelValue:t(r).name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(r).name=a),fieldName:"name",fieldError:t(r).errors.get("name"),inputType:"text",placeholder:"iPhone 12, TouchID, Yubikey 5C",label:"auth.forms.name_this_device"},null,8,["modelValue","fieldError"]),n(g,{isBusy:t(r).isBusy,isDisabled:t(r).isDisabled,caption:"commons.continue"},null,8,["isBusy","isDisabled"])],32)])):(u(),_("div",j,[i("div",A,[i("button",{type:"button",id:"btnRegisterNewDevice",onClick:e[2]||(e[2]=a=>E()),class:"button is-link"},d(o.$t("auth.webauthn.register_a_device")),1)]),i("div",H,[n(y,{id:"btnMaybeLater",to:{name:"accounts"},class:"button is-text"},{default:c(()=>[p(d(o.$t("auth.maybe_later")),1)]),_:1})])]))]),_:1})):(u(),V(v,{key:1,title:"auth.register",punchline:"auth.forms.register_punchline"},{default:c(()=>[i("form",{onSubmit:B(N,["prevent"]),onKeydown:e[6]||(e[6]=a=>t(s).onKeydown(a))},[n(h,{modelValue:t(s).name,"onUpdate:modelValue":e[3]||(e[3]=a=>t(s).name=a),fieldName:"name",fieldError:t(s).errors.get("name"),inputType:"text",label:"auth.forms.name",maxLength:255,autofocus:""},null,8,["modelValue","fieldError"]),n(h,{modelValue:t(s).email,"onUpdate:modelValue":e[4]||(e[4]=a=>t(s).email=a),fieldName:"email",fieldError:t(s).errors.get("email"),inputType:"email",label:"auth.forms.email",maxLength:255},null,8,["modelValue","fieldError"]),n(x,{modelValue:t(s).password,"onUpdate:modelValue":e[5]||(e[5]=a=>t(s).password=a),fieldName:"password",fieldError:t(s).errors.get("password"),showRules:!0,label:"auth.forms.password"},null,8,["modelValue","fieldError"]),n(g,{isBusy:t(s).isBusy,isDisabled:t(s).isDisabled,caption:"auth.register",submitId:"btnRegister"},null,8,["isBusy","isDisabled"])],32),i("div",J,[i("p",null,[p(d(o.$t("auth.forms.already_register"))+" ",1),n(y,{id:"lnkSignIn",to:{name:"login"},class:"is-link"},{default:c(()=>[p(d(o.$t("auth.sign_in")),1)]),_:1})])])]),_:1})),n(C)])}}};export{G as default};
//# sourceMappingURL=Register-BeDlGULg.js.map
>>>>>>> aa4cb049 (Rebuild assets with sourcemaps):public/build/assets/Register-BeDlGULg.js
