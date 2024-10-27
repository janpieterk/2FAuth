import{_ as ft,e as v,f as n,g as r,y as mt,m as a,l as f,h as t,i as l,n as C,W as X,k as P,R as pt,b as ht,a as _t,c as vt,r as k,d as O,H as p,x as D,s as gt,o as yt,J as kt,p as w,D as W,t as i,U as q,j as _,w as G,C as wt,F as K,E as Q,P as bt}from"./app-ClFPZZ4l.js";import{F as H}from"./Form-BU_UekyP.js";import{_ as $t}from"./OtpDisplay-BCFmhPMf.js";import{S as Ct}from"./Spinner-DbluacL6.js";import{u as xt}from"./bus-D9XHlzlA.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const At=["for","innerHTML"],Ft=["disabled","id","value","placeholder","maxlength"],St=["innerHTML"],zt=Object.assign({inheritAttrs:!1},{__name:"FormTextarea",props:{modelValue:[String,Number,Boolean],label:{type:String,default:""},fieldName:{type:String,default:"",required:!0},fieldError:[String],placeholder:{type:String,default:""},help:{type:String,default:""},size:{type:String,default:""},hasOffset:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},maxLength:{type:Number,default:null},isIndented:Boolean},setup(d){const T=d,{inputId:m}=ft(T.inputType,T.fieldName);return(h,g)=>{const N=v("FontAwesomeIcon"),b=v("FieldError");return n(),r("div",{class:C(["mb-3",{"pt-3":d.hasOffset,"is-flex":d.isIndented}])},[d.isIndented?(n(),r("div",{key:0,class:"mx-2 pr-1",style:mt({opacity:d.isDisabled?"0.5":"1"})},[a(N,{class:"has-text-grey",icon:["fas","chevron-right"],transform:"rotate-135"})],4)):f("",!0),t("div",{class:C(["field",{"is-flex-grow-5":d.isIndented}])},[t("label",{for:l(m),class:"label",innerHTML:h.$t(d.label)},null,8,At),t("div",{class:C(["control",{"has-icons-left":h.leftIcon,"has-icons-right":h.rightIcon}])},[t("textarea",X({disabled:d.isDisabled,id:l(m),class:["textarea",d.size],value:d.modelValue,placeholder:d.placeholder},h.$attrs,{onInput:g[0]||(g[0]=$=>h.$emit("update:modelValue",$.target.value)),onChange:g[1]||(g[1]=$=>h.$emit("change:modelValue",$.target.value)),maxlength:d.maxLength}),null,16,Ft)],2),d.fieldError!=null?(n(),P(b,{key:0,error:d.fieldError,field:d.fieldName},null,8,["error","field"])):f("",!0),d.help?(n(),r("p",{key:1,class:"help",innerHTML:h.$t(d.help)},null,8,St)):f("",!0)],2)],2)}}}),Et={class:"title has-text-grey-dark"},It={key:0},Tt={class:"block is-size-7-mobile"},Vt={class:"mb-2"},qt={class:"columns"},Nt={class:"column"},Bt={class:"block"},Lt={class:"card"},Mt={class:"card-content"},Ot={class:"media"},Dt={class:"media-left"},Ht={class:"image is-32x32"},Pt={class:"media-content"},Ut=["innerHTML"],Rt={class:"subtitle is-6 is-size-7-mobile"},jt={class:"card-footer"},Jt={class:"block"},Wt={class:"card"},Gt={class:"card-content"},Kt={class:"media"},Qt={class:"media-left"},Xt={class:"image is-32x32"},Yt={class:"media-content"},Zt={class:"title is-5 has-text-grey"},te={class:"subtitle is-6 is-size-7-mobile"},ee={class:"card-footer"},se={class:"block"},oe={class:"card"},ie={class:"card-content"},le={class:"media"},ne={class:"media-left"},ae={class:"image is-32x32"},re={class:"media-content"},ce=["innerHTML"],de={class:"subtitle is-6 is-size-7-mobile"},ue={class:"content"},fe={class:"card-footer"},me={class:"title is-5 has-text-grey-dark"},pe={class:"block is-size-7-mobile"},he={class:"table is-size-7-mobile is-fullwidth"},_e=t("thead",null,[t("tr",null,[t("th"),t("th",null,"Plain text"),t("th",null,"QR code"),t("th",null,"JSON")])],-1),ve=t("th",null,"Google Authenticator",-1),ge=t("td",null,null,-1),ye=t("td",null,null,-1),ke=t("th",null,"Aegis Auth",-1),we=t("td",null,null,-1),be=t("th",null,"2FAS auth",-1),$e=t("td",null,null,-1),Ce=t("td",null,null,-1),xe=t("th",null,"FreeOTP+",-1),Ae=t("td",null,null,-1),Fe=t("td",null,null,-1),Se=t("th",null,"2FAuth",-1),ze=t("td",null,null,-1),Ee=t("td",null,null,-1),Ie={key:1},Te={key:2},Ve={class:"block is-size-7-mobile"},qe={class:"mb-2"},Ne={class:"is-flex is-justify-content-space-between"},Be=["onClick","title"],Le=["src"],Me={key:1,class:"is-flex-grow-1 has-ellipsis"},Oe={key:2,class:"tags is-flex-wrap-nowrap"},De=["onClick","title"],He=["onClick","title"],Pe={key:3,class:"has-nowrap"},Ue={key:0,class:"has-text-success"},Re={key:1,class:"has-text-danger"},je={class:"is-size-6 is-size-7-mobile"},Je={class:"is-family-primary has-text-grey"},We={key:0,class:"has-text-danger"},Ge={key:1,class:"has-text-warning"},Ke={key:2},Qe={key:0,class:"mt-2 is-size-7 is-pulled-right"},Xe={key:1,class:"mt-2 is-size-7 is-pulled-right"},Ye={key:0,class:"control"},ls={__name:"Import",setup(d){const T=pt("2fauth"),m=ht(),h=_t(),g=xt(),N=vt(),b=k(null),$=k(null),B=k(null),x=k(null),V=k(null),S=O(new H({service:"",account:"",otp_type:"",icon:"",secret:"",algorithm:"",digits:null,counter:null,period:null})),z=O(new H({file:null,withSecret:!0})),E=O(new H({qrcode:null,withSecret:!0})),A=k(!1);p("twofaccounts.import.qr_code"),p("twofaccounts.import.plain_text");const c=k([]),y=k(!1),I=D(()=>c.value.filter(e=>e.imported==-1&&e.id>-2).length),U=D(()=>c.value.filter(e=>e.id===-1&&e.imported===-1).length),Y=D(()=>c.value.filter(e=>e.imported===1).length);gt(A,e=>{var s;e==!1&&((s=b.value)==null||s.clearOTP())}),yt(()=>{g.migrationUri&&(L(g.migrationUri),g.migrationUri=null)});async function L(e){y.value=!0,await kt.migrate(e,{returnError:!0}).then(s=>{s.data.forEach(u=>{u.imported=-1,c.value.push(u)}),j(),x.value=V.value=null}).catch(s=>{m.alert({text:p(s.response.data.message)})}),y.value=!1}function Z(){var e;confirm(p("twofaccounts.confirm.discard_duplicates"))&&(m.clear(),(e=b.value)==null||e.clearOTP(),c.value=c.value.filter(s=>s.id!==-1))}function tt(){var e;confirm(p("twofaccounts.confirm.discard_all"))&&(m.clear(),(e=b.value)==null||e.clearOTP(),c.value=[])}function et(e){confirm(p("twofaccounts.confirm.discard"))&&c.value.splice(e,1)}async function st(){for(let e=0;e<c.value.length;e++)c.value[e].imported==-1&&await R(e)}async function R(e){S.fill(c.value[e]),await S.post("/api/v1/twofaccounts",{returnError:!0}).then(s=>{c.value[e].imported=1,c.value[e].id=s.data.id,delete s.data.secret,N.items.push(s.data)}).catch(s=>{c.value[e].imported=0,c.value[e].id=0,c.value[e].errors=S.errors.flatten()})}function ot(e){S.fill(c.value[e]),A.value=!0,bt().then(()=>{b.value.show()})}function it(){z.clear(),y.value=!0,z.file=$.value.files[0],z.upload("/api/v1/twofaccounts/migration",{returnError:!0}).then(e=>{e.data.forEach(s=>{s.imported=-1,c.value.push(s)}),j()}).catch(e=>{e.response.status===422?e.response.data.errors.file==null&&m.alert({text:p("errors.invalid_2fa_data")}):m.alert({text:e.response.data.message})}),y.value=!1}function lt(){E.clear(),y.value=!0,E.qrcode=B.value.files[0],E.upload("/api/v1/qrcode/decode",{returnError:!0}).then(e=>{L(e.data.data)}).catch(e=>{e.response.status===422?e.response.data.errors.qrcode==null&&m.alert({text:p("errors.invalid_2fa_data")}):m.alert({text:e.response.data.message})}),y.value=!1}function j(){m.success({text:p("twofaccounts.import.x_valid_accounts_found",{count:I.value})})}function nt(){V.value=null,x.value?L(x.value):V.value=p("validation.required",{attribute:"Direct input"})}return(e,s)=>{const u=v("FontAwesomeIcon"),J=v("FieldError"),at=v("RouterLink"),rt=v("ButtonBackCloseCancel"),ct=v("VueFooter"),dt=v("ResponsiveWidthWrapper"),ut=v("modal");return n(),r("div",null,[a(dt,null,{default:w(()=>[t("h1",Et,i(e.$t("twofaccounts.import.import")),1),!l(y)&&l(c).length==0?(n(),r("div",It,[t("div",Tt,[t("p",Vt,i(e.$t("twofaccounts.import.import_legend")),1),t("p",null,i(e.$t("twofaccounts.import.import_legend_afterpart")),1)]),t("div",qt,[t("div",Nt,[t("div",Bt,[t("div",Lt,[t("div",Mt,[t("div",Ot,[t("div",Dt,[t("figure",Ht,[a(l(q),null,{default:w(({mode:o})=>[a(u,{icon:["fas","qrcode"],size:"2x",class:C(o=="dark"?"has-text-grey-darker":"has-text-grey-lighter")},null,8,["class"])]),_:1})])]),t("div",Pt,[t("p",{class:"title is-5 has-text-grey",innerHTML:e.$t("twofaccounts.import.qr_code")},null,8,Ut),t("p",Rt,i(e.$t("twofaccounts.import.supported_formats_for_qrcode_upload")),1)])]),l(E).errors.hasAny("qrcode")?(n(),P(J,{key:0,error:l(E).errors.get("qrcode"),field:"qrcode"},null,8,["error"])):f("",!0)]),t("footer",jt,[a(at,{id:"btnCapture",to:{name:"capture"},class:"card-footer-item"},{default:w(()=>[_(i(e.$t("twofaccounts.import.scan")),1)]),_:1}),t("a",{role:"button",tabindex:"0",class:"card-footer-item is-relative",onKeyup:s[0]||(s[0]=G(o=>l(B).click(),["enter"]))},[t("input",{"aria-hidden":"true",tabindex:"-1",class:"file-input",type:"file",accept:"image/*",onChange:lt,ref_key:"qrcodeInput",ref:B},null,544),_(" "+i(e.$t("twofaccounts.import.upload")),1)],32)])])]),t("div",Jt,[t("div",Wt,[t("div",Gt,[t("div",Kt,[t("div",Qt,[t("figure",Xt,[a(l(q),null,{default:w(({mode:o})=>[a(u,{icon:["fas","file-lines"],size:"2x",class:C(o=="dark"?"has-text-grey-darker":"has-text-grey-lighter")},null,8,["class"])]),_:1})])]),t("div",Yt,[t("p",Zt,i(e.$t("twofaccounts.import.text_file")),1),t("p",te,i(e.$t("twofaccounts.import.supported_formats_for_file_upload")),1)])]),l(z).errors.hasAny("file")?(n(),P(J,{key:0,error:l(z).errors.get("file"),field:"file"},null,8,["error"])):f("",!0)]),t("footer",ee,[t("a",{role:"button",tabindex:"0",class:"card-footer-item is-relative",onKeyup:s[1]||(s[1]=G(o=>l($).click(),["enter"]))},[t("input",{"aria-hidden":"true",tabindex:"-1",class:"file-input",type:"file",accept:"text/plain,application/json,text/csv,.2fas",onChange:it,ref_key:"fileInput",ref:$},null,544),_(" "+i(e.$t("twofaccounts.import.upload")),1)],32)])])]),t("div",se,[t("div",oe,[t("div",ie,[t("div",le,[t("div",ne,[t("figure",ae,[a(l(q),null,{default:w(({mode:o})=>[a(u,{icon:["fas","align-left"],size:"2x",class:C(o=="dark"?"has-text-grey-darker":"has-text-grey-lighter")},null,8,["class"])]),_:1})])]),t("div",re,[t("p",{class:"title is-5 has-text-grey",innerHTML:e.$t("twofaccounts.import.direct_input")},null,8,ce),t("p",de,i(e.$t("twofaccounts.import.expected_format_for_direct_input")),1)])]),t("div",ue,[a(zt,{modelValue:l(x),"onUpdate:modelValue":s[2]||(s[2]=o=>W(x)?x.value=o:null),fieldError:l(V),fieldName:"payload",rows:"5",size:"is-small"},null,8,["modelValue","fieldError"])])]),t("footer",fe,[t("a",{role:"button",tabindex:"0",class:"card-footer-item is-relative",onClick:wt(nt,["stop"])},i(e.$t("commons.submit")),1)])])])])]),t("h2",me,i(e.$t("twofaccounts.import.supported_migration_formats")),1),t("div",pe,[a(u,{icon:["fas","fa-triangle-exclamation"],class:"has-text-warning-dark"}),_(" "+i(e.$t("twofaccounts.import.do_not_set_password_or_encryption")),1)]),t("table",he,[_e,t("tbody",null,[t("tr",null,[ve,ge,t("td",null,[a(u,{icon:["fas","circle-check"]})]),ye]),t("tr",null,[ke,t("td",null,[a(u,{icon:["fas","circle-check"]})]),we,t("td",null,[a(u,{icon:["fas","circle-check"]})])]),t("tr",null,[be,$e,Ce,t("td",null,[a(u,{icon:["fas","circle-check"]})])]),t("tr",null,[xe,t("td",null,[a(u,{icon:["fas","circle-check"]})]),Ae,Fe]),t("tr",null,[Se,ze,Ee,t("td",null,[a(u,{icon:["fas","circle-check"]})])])])])])):l(y)&&l(c).length===0?(n(),r("div",Ie,[a(Ct,{type:"fullscreen-overlay",isVisible:!0,message:"twofaccounts.import.parsing_data"},null,8,["message"])])):(n(),r("div",Te,[t("div",Ve,[t("p",qe,i(e.$t("twofaccounts.import.submitted_data_parsed_now_accounts_are_awaiting_import")),1),t("p",null,i(e.$t("twofaccounts.import.use_buttons_to_save_or_discard")),1)]),(n(!0),r(K,null,Q(l(c),(o,M)=>(n(),r("div",{key:o.name,class:"group-item is-size-5 is-size-6-mobile"},[t("div",Ne,[o.id>-2&&o.imported!==0?(n(),r("div",{key:0,class:"is-flex-grow-1 has-ellipsis is-clickable",onClick:F=>ot(M),title:e.$t("twofaccounts.import.generate_a_test_password")},[o.icon&&l(h).preferences.showAccountsIcons?(n(),r("img",{key:0,role:"presentation",class:"import-icon",src:l(T).config.subdirectory+"/storage/icons/"+o.icon,alt:""},null,8,Le)):f("",!0),_(" "+i(o.account),1)],8,Be)):(n(),r("div",Me,i(o.account),1)),o.imported===-1?(n(),r("div",Oe,[a(l(q),null,{default:w(({mode:F})=>[t("button",{class:C(["button tag",{"is-dark has-text-grey-light":F=="dark"}]),onClick:Ze=>et(M),title:e.$t("twofaccounts.import.discard_this_account")},[a(u,{icon:["fas","trash"]})],10,De)]),_:2},1024),o.id>-2?(n(),r("button",{key:0,class:"button tag is-link",onClick:F=>R(M),title:e.$t("twofaccounts.import.import_this_account")},i(e.$t("twofaccounts.import.to_import")),9,He)):f("",!0)])):(n(),r("div",Pe,[o.imported===1?(n(),r("span",Ue,[_(i(e.$t("twofaccounts.import.imported"))+" ",1),a(u,{icon:["fas","check"]})])):(n(),r("span",Re,[_(i(e.$t("twofaccounts.import.failure"))+" ",1),a(u,{icon:["fas","times"]})]))]))]),t("div",je,[t("div",Je,i(e.$t("twofaccounts.import.issuer"))+": "+i(o.service),1),o.id===-2?(n(),r("div",We,[a(u,{class:"mr-1",icon:["fas","times-circle"]}),_(i(o.secret),1)])):f("",!0),o.id===-1&&o.imported!==1&&!o.errors?(n(),r("div",Ge,[a(u,{class:"mr-1",icon:["fas","exclamation-circle"]}),_(i(e.$t("twofaccounts.import.possible_duplicate")),1)])):f("",!0),o.errors?(n(),r("ul",Ke,[(n(!0),r(K,null,Q(o.errors,F=>(n(),r("li",{key:F,class:"has-text-danger"},i(F),1))),128))])):f("",!0)])]))),128)),l(I)>0?(n(),r("div",Qe,[l(U)?(n(),r("button",{key:0,onClick:s[3]||(s[3]=o=>Z()),class:"has-text-grey button is-small is-ghost"},i(e.$t("twofaccounts.import.discard_duplicates"))+" ("+i(l(U))+")",1)):f("",!0),t("button",{onClick:s[4]||(s[4]=o=>tt()),class:"has-text-grey button is-small is-ghost"},i(e.$t("twofaccounts.import.discard_all")),1)])):f("",!0),l(Y)==l(c).length?(n(),r("div",Xe,[t("button",{onClick:s[5]||(s[5]=o=>c.value=[]),class:"has-text-grey button is-small is-ghost"},i(e.$t("commons.clear")),1)])):f("",!0)])),a(ct,{showButtons:!0},{default:w(()=>[l(I)>0?(n(),r("p",Ye,[t("button",{class:"button is-link is-rounded is-focus",onClick:st},[t("span",null,i(e.$t("twofaccounts.import.import_all"))+" ("+i(l(I))+")",1)])])):f("",!0),a(rt,{returnTo:{name:"accounts"},action:l(I)>0?"cancel":"close"},null,8,["action"])]),_:1})]),_:1}),a(ut,{modelValue:l(A),"onUpdate:modelValue":s[9]||(s[9]=o=>W(A)?A.value=o:null)},{default:w(()=>[a($t,X({ref_key:"otpDisplay",ref:b},l(S).data(),{onIncrementHotp:s[6]||(s[6]=()=>{}),onValidationError:s[7]||(s[7]=()=>{}),onPleaseCloseMe:s[8]||(s[8]=o=>A.value=!1)}),null,16)]),_:1},8,["modelValue"])])}}};export{ls as default};
//# sourceMappingURL=Import-DErNWu9W.js.map
