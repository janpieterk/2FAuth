import{b as y,u as b,$ as k,r as V,x as w,s as v,o as N,H as $,e as x,f as r,g as t,m as B,p as M,i as e,D as q,h as l,t as n,l as c,j as C}from"./app-ClFPZZ4l.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const D={key:0,class:"error-message"},R=l("p",{class:"error-404"},null,-1),E={key:1,class:"error-message"},F=l("p",{class:"error-generic"},null,-1),H={key:0,class:"has-text-grey-lighter"},S={key:1,class:"has-text-grey-lighter"},j={key:2,class:"is-size-7 is-family-code"},z=l("br",null,null,-1),U={__name:"Error",props:{closable:{type:Boolean,default:!0}},setup(m){const s=y(),d=b(),a=k(),u=V(!0),p=w(()=>!1),_=m;v(u,o=>{o==!1&&g()}),N(()=>{a.query.err&&(s.message=$("errors."+a.query.err))});function g(){window.history.length>1&&a.name!=="404"&&a.name!=="notFound"&&!a.query.err?d.go(-1):d.push({name:"accounts"})}return(o,i)=>{const h=x("modal");return r(),t("div",null,[B(h,{modelValue:e(u),"onUpdate:modelValue":i[0]||(i[0]=f=>q(u)?u.value=f:null),closable:_.closable},{default:M(()=>[o.$route.name=="404"||o.$route.name=="notFound"?(r(),t("div",D,[R,l("p",null,n(o.$t("errors.resource_not_found")),1)])):(r(),t("div",E,[F,l("p",null,n(o.$t("errors.error_occured")),1),e(s).message?(r(),t("p",H,n(e(s).message),1)):c("",!0),e(s).originalMessage?(r(),t("p",S,n(e(s).originalMessage),1)):c("",!0),e(p)&&e(s).debug?(r(),t("p",j,[z,C(n(e(s).debug),1)])):c("",!0)]))]),_:1},8,["modelValue","closable"])])}}};export{U as default};
//# sourceMappingURL=Error-CpFeP1L7.js.map
