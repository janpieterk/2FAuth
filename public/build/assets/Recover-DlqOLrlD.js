<<<<<<< HEAD:public/build/assets/Recover-DlqOLrlD.js
import{R as V,b as B,u as R,$ as g,a2 as $,d as C,a1 as N,e as a,f as q,k as A,p as d,h as u,C as D,i as s,m as l,j as c,t as p,H as L}from"./app-ClFPZZ4l.js";import{F as S}from"./Form-BU_UekyP.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const W={class:"field"},j={__name:"Recover",setup(x){const m=V("2fauth"),r=B(),f=R(),i=g(),h=$(m.prefix+"showWebauthnForm",!1),o=C(new S({email:i.query.email,password:"",token:i.query.token,revokeAll:!1}));function _(t){r.clear(),o.post("/webauthn/recover",{returnError:!0}).then(e=>{h.value=!1,f.push({name:"login"})}).catch(e=>{e.response.status===401?r.alert({text:L("auth.forms.authentication_failed"),duration:-1}):e.response.status===422?r.alert({text:e.response.data.message,duration:-1}):r.error(e)})}return N(()=>{r.clear()}),(t,e)=>{const w=a("FormCheckbox"),b=a("FormPasswordField"),v=a("RouterLink"),F=a("FormButtons"),k=a("VueFooter"),y=a("FormWrapper");return q(),A(y,{title:t.$t("auth.webauthn.account_recovery"),punchline:t.$t("auth.webauthn.recover_account_instructions")},{default:d(()=>[u("div",null,[u("form",{onSubmit:D(_,["prevent"]),onKeydown:e[2]||(e[2]=n=>s(o).onKeydown(n))},[l(w,{modelValue:s(o).revokeAll,"onUpdate:modelValue":e[0]||(e[0]=n=>s(o).revokeAll=n),fieldName:"revokeAll",label:"auth.webauthn.disable_all_security_devices",help:"auth.webauthn.disable_all_security_devices_help"},null,8,["modelValue"]),l(b,{modelValue:s(o).password,"onUpdate:modelValue":e[1]||(e[1]=n=>s(o).password=n),fieldName:"password",fieldError:s(o).errors.get("password"),autocomplete:"current-password",showRules:!1,label:"auth.forms.current_password.label",help:"auth.forms.current_password.help"},null,8,["modelValue","fieldError"]),u("div",W,[u("p",null,[c(p(t.$t("auth.forms.forgot_your_password"))+"  ",1),l(v,{id:"lnkResetPwd",to:{name:"password.request"},class:"is-link","aria-label":t.$t("auth.forms.reset_your_password")},{default:d(()=>[c(p(t.$t("auth.forms.request_password_reset")),1)]),_:1},8,["to","aria-label"])])]),l(F,{submitId:"btnRecover",isBusy:s(o).isBusy,isDisabled:s(o).isDisabled,caption:t.$t("commons.continue"),showCancelButton:!0,cancelLandingView:"login"},null,8,["isBusy","isDisabled","caption"])],32)]),l(k)]),_:1},8,["title","punchline"])}}};export{j as default};
=======
import{R as V,b as B,u as R,$ as g,a2 as $,d as C,a1 as N,e as a,f as q,k as A,p as d,h as u,C as D,i as s,m as l,j as c,t as p,H as L}from"./app-CeOdx_TG.js";import{F as S}from"./Form-BSfNB4q6.js";/*! 2FAuth version 5.3.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const W={class:"field"},j={__name:"Recover",setup(x){const m=V("2fauth"),r=B(),f=R(),i=g(),h=$(m.prefix+"showWebauthnForm",!1),o=C(new S({email:i.query.email,password:"",token:i.query.token,revokeAll:!1}));function _(t){r.clear(),o.post("/webauthn/recover",{returnError:!0}).then(e=>{h.value=!1,f.push({name:"login"})}).catch(e=>{e.response.status===401?r.alert({text:L("auth.forms.authentication_failed"),duration:-1}):e.response.status===422?r.alert({text:e.response.data.message,duration:-1}):r.error(e)})}return N(()=>{r.clear()}),(t,e)=>{const w=a("FormCheckbox"),b=a("FormPasswordField"),v=a("RouterLink"),F=a("FormButtons"),k=a("VueFooter"),y=a("FormWrapper");return q(),A(y,{title:t.$t("auth.webauthn.account_recovery"),punchline:t.$t("auth.webauthn.recover_account_instructions")},{default:d(()=>[u("div",null,[u("form",{onSubmit:D(_,["prevent"]),onKeydown:e[2]||(e[2]=n=>s(o).onKeydown(n))},[l(w,{modelValue:s(o).revokeAll,"onUpdate:modelValue":e[0]||(e[0]=n=>s(o).revokeAll=n),fieldName:"revokeAll",label:"auth.webauthn.disable_all_security_devices",help:"auth.webauthn.disable_all_security_devices_help"},null,8,["modelValue"]),l(b,{modelValue:s(o).password,"onUpdate:modelValue":e[1]||(e[1]=n=>s(o).password=n),fieldName:"password",fieldError:s(o).errors.get("password"),autocomplete:"current-password",showRules:!1,label:"auth.forms.current_password.label",help:"auth.forms.current_password.help"},null,8,["modelValue","fieldError"]),u("div",W,[u("p",null,[c(p(t.$t("auth.forms.forgot_your_password"))+"  ",1),l(v,{id:"lnkResetPwd",to:{name:"password.request"},class:"is-link","aria-label":t.$t("auth.forms.reset_your_password")},{default:d(()=>[c(p(t.$t("auth.forms.request_password_reset")),1)]),_:1},8,["to","aria-label"])])]),l(F,{submitId:"btnRecover",isBusy:s(o).isBusy,isDisabled:s(o).isDisabled,caption:t.$t("commons.continue"),showCancelButton:!0,cancelLandingView:"login"},null,8,["isBusy","isDisabled","caption"])],32)]),l(k)]),_:1},8,["title","punchline"])}}};export{j as default};
//# sourceMappingURL=Recover-ClJ3s80u.js.map
>>>>>>> aa4cb049 (Rebuild assets with sourcemaps):public/build/assets/Recover-ClJ3s80u.js
