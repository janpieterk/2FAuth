<<<<<<< HEAD:public/build/assets/WebAuthn-B5Cde1bR.js
import{R as z,a as A,S as L,b as M,u as U,a2 as E,r as k,x as H,o as I,s as R,I as b,a1 as j,e as _,f as c,g as h,m as r,h as s,p as v,i as t,t as a,l as g,w as K,j as C,F as J,E as P,U as q,n as G,H as u}from"./app-ClFPZZ4l.js";import{_ as Q}from"./SettingTabs-Ihq7-3dC.js";import{w as X}from"./webauthnService-D3MQflUv.js";import{S as Y}from"./Spinner-DbluacL6.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const Z={class:"options-tabs"},ee={key:0,class:"notification is-warning has-text-centered"},te=["innerHTML"],se={class:"title is-4 has-text-grey-light"},ne={class:"is-size-7-mobile"},ae={class:"mt-3"},oe={key:2,class:"field"},ie=["onClick","title"],re={class:"mt-2 is-size-7 is-pulled-right"},ue={class:"title is-4 pt-6 has-text-grey-light"},le={class:"field"},me={__name:"WebAuthn",setup(ce){const S=z("2fauth"),o=A(),y=L(),n=M(),x=U(),W=E(S.prefix+"returnTo","accounts"),i=k([]),f=k(!1),p=H(()=>y.enableSso&&y.useSsoOnly||o.authenticated_by_proxy);I(()=>{V()}),R(()=>o.preferences.useWebauthnOnly,()=>{b.updatePreference("useWebauthnOnly",o.preferences.useWebauthnOnly).then(e=>{n.success({text:u("settings.forms.setting_saved")})})});function w(){if(p.value==!0)return n.warn({text:u("errors.unsupported_with_reverseproxy")}),!1;X.register().then(e=>{x.push({name:"settings.webauthn.editCredential",params:{credentialId:JSON.parse(e.config.data).id}})}).catch(e=>{var l;"webauthn"in e?e.name=="is-warning"?n.warn({text:u(e.message)}):n.alert({text:u(e.message)}):((l=e.response)==null?void 0:l.status)===422?n.alert({text:e.response.data.message}):n.error(e)})}function $(e){confirm(u("auth.confirm.revoke_device"))&&b.revokeWebauthnDevice(e).then(l=>{i.value=i.value.filter(m=>m.id!==e),i.value.length==0&&(o.preferences.useWebauthnOnly=!1),n.success({text:u("auth.webauthn.device_revoked")})})}function F(e){return e.alias?e.alias:u("auth.webauthn.my_device")+" (#"+e.id.substring(0,10)+")"}function V(){f.value=!0,b.getWebauthnDevices({returnError:!0}).then(e=>{i.value=e.data}).catch(e=>{e.response.status===405||n.error(e)}).finally(()=>{f.value=!1})}return j(e=>{e.name.startsWith("settings.")||n.clear()}),(e,l)=>{const m=_("FontAwesomeIcon"),B=_("FormCheckbox"),O=_("ButtonBackCloseCancel"),T=_("VueFooter"),N=_("FormWrapper");return c(),h("div",null,[r(Q,{activeTab:"settings.webauthn.devices"},null,8,["activeTab"]),s("div",Z,[r(N,null,{default:v(()=>[t(p)&&t(o).oauth_provider?(c(),h("div",ee,a(e.$t("auth.sso_only_x_settings_are_disabled",{auth_method:"WebAuthn"})),1)):g("",!0),t(p)&&t(o).authenticated_by_proxy?(c(),h("div",{key:1,class:"notification is-warning has-text-centered",innerHTML:e.$t("auth.auth_handled_by_proxy")},null,8,te)):g("",!0),s("h4",se,a(e.$t("auth.webauthn.security_devices")),1),s("div",ne,a(e.$t("auth.webauthn.security_devices_legend")),1),s("div",ae,[s("a",{tabindex:"0",onClick:w,onKeyup:K(w,["enter"])},[r(m,{icon:["fas","plus-circle"]}),C(" "+a(e.$t("auth.webauthn.register_a_new_device")),1)],32)]),t(i).length>0?(c(),h("div",oe,[(c(!0),h(J,null,P(t(i),d=>(c(),h("div",{key:d.id,class:"group-item is-size-5 is-size-6-mobile"},[C(a(F(d))+" ",1),r(t(q),null,{default:v(({mode:D})=>[s("button",{class:G(["button tag is-pulled-right",D==="dark"?"is-dark":"is-white"]),onClick:he=>$(d.id),title:e.$t("settings.revoke")},a(e.$t("settings.revoke")),11,ie)]),_:2},1024)]))),128)),s("div",re,a(e.$t("auth.webauthn.revoking_a_device_is_permanent")),1)])):g("",!0),r(Y,{isVisible:t(f)&&t(i).length===0},null,8,["isVisible"]),s("h4",ue,a(e.$t("auth.webauthn.options")),1),s("div",le,a(e.$t("auth.webauthn.need_a_security_device_to_enable_options")),1),s("form",null,[r(B,{modelValue:t(o).preferences.useWebauthnOnly,"onUpdate:modelValue":l[0]||(l[0]=d=>t(o).preferences.useWebauthnOnly=d),fieldName:"useWebauthnOnly",label:"auth.webauthn.use_webauthn_only.label",help:"auth.webauthn.use_webauthn_only.help",isDisabled:t(p)||t(i).length===0},null,8,["modelValue","isDisabled"])]),r(T,{showButtons:!0},{default:v(()=>[r(O,{returnTo:{name:t(W)},action:"close"},null,8,["returnTo"])]),_:1})]),_:1})])])}}};export{me as default};
=======
import{R as z,a as A,S as L,b as M,u as U,a2 as E,r as k,x as H,o as I,s as R,I as b,a1 as j,e as _,f as c,g as h,m as r,h as s,p as v,i as t,t as a,l as g,w as K,j as C,F as J,E as P,U as q,n as G,H as u}from"./app-CeOdx_TG.js";import{_ as Q}from"./SettingTabs-CH0cOPVM.js";import{w as X}from"./webauthnService-3N-iRQ3u.js";import{S as Y}from"./Spinner-BwxI0ALn.js";/*! 2FAuth version 5.3.0 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const Z={class:"options-tabs"},ee={key:0,class:"notification is-warning has-text-centered"},te=["innerHTML"],se={class:"title is-4 has-text-grey-light"},ne={class:"is-size-7-mobile"},ae={class:"mt-3"},oe={key:2,class:"field"},ie=["onClick","title"],re={class:"mt-2 is-size-7 is-pulled-right"},ue={class:"title is-4 pt-6 has-text-grey-light"},le={class:"field"},me={__name:"WebAuthn",setup(ce){const S=z("2fauth"),o=A(),y=L(),n=M(),x=U(),W=E(S.prefix+"returnTo","accounts"),i=k([]),f=k(!1),p=H(()=>y.enableSso&&y.useSsoOnly||o.authenticated_by_proxy);I(()=>{V()}),R(()=>o.preferences.useWebauthnOnly,()=>{b.updatePreference("useWebauthnOnly",o.preferences.useWebauthnOnly).then(e=>{n.success({text:u("settings.forms.setting_saved")})})});function w(){if(p.value==!0)return n.warn({text:u("errors.unsupported_with_reverseproxy")}),!1;X.register().then(e=>{x.push({name:"settings.webauthn.editCredential",params:{credentialId:JSON.parse(e.config.data).id}})}).catch(e=>{var l;"webauthn"in e?e.name=="is-warning"?n.warn({text:u(e.message)}):n.alert({text:u(e.message)}):((l=e.response)==null?void 0:l.status)===422?n.alert({text:e.response.data.message}):n.error(e)})}function $(e){confirm(u("auth.confirm.revoke_device"))&&b.revokeWebauthnDevice(e).then(l=>{i.value=i.value.filter(m=>m.id!==e),i.value.length==0&&(o.preferences.useWebauthnOnly=!1),n.success({text:u("auth.webauthn.device_revoked")})})}function F(e){return e.alias?e.alias:u("auth.webauthn.my_device")+" (#"+e.id.substring(0,10)+")"}function V(){f.value=!0,b.getWebauthnDevices({returnError:!0}).then(e=>{i.value=e.data}).catch(e=>{e.response.status===405||n.error(e)}).finally(()=>{f.value=!1})}return j(e=>{e.name.startsWith("settings.")||n.clear()}),(e,l)=>{const m=_("FontAwesomeIcon"),B=_("FormCheckbox"),O=_("ButtonBackCloseCancel"),T=_("VueFooter"),N=_("FormWrapper");return c(),h("div",null,[r(Q,{activeTab:"settings.webauthn.devices"},null,8,["activeTab"]),s("div",Z,[r(N,null,{default:v(()=>[t(p)&&t(o).oauth_provider?(c(),h("div",ee,a(e.$t("auth.sso_only_x_settings_are_disabled",{auth_method:"WebAuthn"})),1)):g("",!0),t(p)&&t(o).authenticated_by_proxy?(c(),h("div",{key:1,class:"notification is-warning has-text-centered",innerHTML:e.$t("auth.auth_handled_by_proxy")},null,8,te)):g("",!0),s("h4",se,a(e.$t("auth.webauthn.security_devices")),1),s("div",ne,a(e.$t("auth.webauthn.security_devices_legend")),1),s("div",ae,[s("a",{tabindex:"0",onClick:w,onKeyup:K(w,["enter"])},[r(m,{icon:["fas","plus-circle"]}),C(" "+a(e.$t("auth.webauthn.register_a_new_device")),1)],32)]),t(i).length>0?(c(),h("div",oe,[(c(!0),h(J,null,P(t(i),d=>(c(),h("div",{key:d.id,class:"group-item is-size-5 is-size-6-mobile"},[C(a(F(d))+" ",1),r(t(q),null,{default:v(({mode:D})=>[s("button",{class:G(["button tag is-pulled-right",D==="dark"?"is-dark":"is-white"]),onClick:he=>$(d.id),title:e.$t("settings.revoke")},a(e.$t("settings.revoke")),11,ie)]),_:2},1024)]))),128)),s("div",re,a(e.$t("auth.webauthn.revoking_a_device_is_permanent")),1)])):g("",!0),r(Y,{isVisible:t(f)&&t(i).length===0},null,8,["isVisible"]),s("h4",ue,a(e.$t("auth.webauthn.options")),1),s("div",le,a(e.$t("auth.webauthn.need_a_security_device_to_enable_options")),1),s("form",null,[r(B,{modelValue:t(o).preferences.useWebauthnOnly,"onUpdate:modelValue":l[0]||(l[0]=d=>t(o).preferences.useWebauthnOnly=d),fieldName:"useWebauthnOnly",label:"auth.webauthn.use_webauthn_only.label",help:"auth.webauthn.use_webauthn_only.help",isDisabled:t(p)||t(i).length===0},null,8,["modelValue","isDisabled"])]),r(T,{showButtons:!0},{default:v(()=>[r(O,{returnTo:{name:t(W)},action:"close"},null,8,["returnTo"])]),_:1})]),_:1})])])}}};export{me as default};
//# sourceMappingURL=WebAuthn-C8Ep1BLK.js.map
>>>>>>> aa4cb049 (Rebuild assets with sourcemaps):public/build/assets/WebAuthn-C8Ep1BLK.js
