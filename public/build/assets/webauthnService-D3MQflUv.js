var h=Object.defineProperty;var w=(t,r,e)=>r in t?h(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var c=(t,r,e)=>(w(t,typeof r!="symbol"?r+"":r,e),e);import{a4 as f}from"./app-ClFPZZ4l.js";/*! 2FAuth version 5.3.2 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */class y{constructor(){c(this,"controller")}createNewAbortSignal(){if(this.controller){const e=new Error("Cancelling existing WebAuthn API call for new one");e.name="AbortError",this.controller.abort(e)}const r=new AbortController;return this.controller=r,r.signal}}const d=new y;function g(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function _(t,r){var n,a;const{publicKey:e}=r;if(t.name==="AbortError"){if(r.signal instanceof AbortSignal)return{phrase:"errors.aborted_by_user",type:"is-warning"}}else if(t.name==="ConstraintError"){if(((n=e.authenticatorSelection)==null?void 0:n.requireResidentKey)===!0)return{phrase:"errors.authenticator_missing_discoverable_credential_support",type:"is-danger"};if(((a=e.authenticatorSelection)==null?void 0:a.userVerification)==="required")return{phrase:"errors.authenticator_missing_user_verification_support",type:"is-danger"}}else{if(t.name==="InvalidStateError")return{phrase:"errors.security_device_already_registered",type:"is-danger"};if(t.name==="NotAllowedError")return{phrase:"errors.not_allowed_operation",type:"is-danger"};if(t.name==="NotSupportedError")return e.pubKeyCredParams.filter(u=>u.type==="public-key").length===0?{phrase:"errors.no_entry_was_of_type_public_key",type:"is-danger"}:{phrase:"errors.no_authenticator_support_specified_algorithms",type:"is-danger"};if(t.name==="SecurityError"){const o=window.location.hostname;if(g(o)){if(e.rp.id!==o)return{phrase:"errors.security_error_check_rpid",type:"is-danger"}}else return{phrase:"errors.2fauth_has_not_a_valid_domain",type:"is-danger"}}else if(t.name==="TypeError"){if(e.user.id.byteLength<1||e.user.id.byteLength>64)return{phrase:"errors.user_id_not_between_1_64",type:"is-danger"}}else if(t.name==="UnknownError")return{phrase:"errors.unknown_error",type:"is-danger"}}return{phrase:"errors.unknown_error",type:"is-danger"}}function m(t,r){const{publicKey:e}=r;if(t.name==="AbortError"){if(r.signal instanceof AbortSignal)return{phrase:"errors.aborted_by_user",type:"is-warning"}}else{if(t.name==="NotAllowedError")return{phrase:"errors.not_allowed_operation",type:"is-danger"};if(t.name==="SecurityError"){const n=window.location.hostname;if(g(n)){if(e.rpId!==n)return{phrase:"errors.security_error_check_rpid",type:"is-danger"}}else return{phrase:"errors.2fauth_has_not_a_valid_domain",type:"is-danger"}}else if(t.name==="UnknownError")return{phrase:"errors.unknown_error",type:"is-danger"}}return{phrase:"errors.unknown_error",type:"is-danger"}}const p=f("web");class s{async register(){let r={webauthn:!0,type:"is-danger",message:""};if(!window.isSecureContext)return r.message="errors.https_required",Promise.reject(r);if(!s.supportsWebAuthn)return r.message="errors.browser_does_not_support_webauthn",Promise.reject(r);const e=await p.post("/webauthn/register/options").then(i=>i.data);let a={publicKey:s.parseIncomingServerOptions(e)};a.signal=d.createNewAbortSignal();let o;try{o=await navigator.credentials.create(a)}catch(i){const l=_(i,a);return Promise.reject({webauthn:!0,type:l.type,message:l.phrase})}const u=s.parseOutgoingCredentials(o);return p.post("/webauthn/register",u,{returnError:!0})}async authenticate(r){if(!window.isSecureContext)return err.message="errors.https_required",Promise.reject(err);if(!s.supportsWebAuthn)return err.message="errors.browser_does_not_support_webauthn",Promise.reject(err);const e=await p.post("/webauthn/login/options",{email:r}).then(i=>i.data);let a={publicKey:s.parseIncomingServerOptions(e)};a.signal=d.createNewAbortSignal();const o=await navigator.credentials.get(a).catch(i=>{const l=m(i,a);return Promise.reject({webauthn:!0,type:l.type,message:l.phrase})});let u=s.parseOutgoingCredentials(o);return u.email=r,p.post("/webauthn/login",u,{returnError:!0})}static parseIncomingServerOptions(r){return r.challenge=s.uint8Array(r.challenge),"user"in r&&(r.user={...r.user,id:s.uint8Array(r.user.id)}),["excludeCredentials","allowCredentials"].filter(e=>e in r).forEach(e=>{r[e]=r[e].map(n=>({...n,id:s.uint8Array(n.id)}))}),r}static parseOutgoingCredentials(r){let e={id:r.id,type:r.type,rawId:s.arrayToBase64String(r.rawId),response:{}};return["clientDataJSON","attestationObject","authenticatorData","signature","userHandle"].filter(n=>n in r.response).forEach(n=>e.response[n]=s.arrayToBase64String(r.response[n])),e}static uint8Array(r,e=!1){return Uint8Array.from(e?atob(r):s.base64UrlDecode(r),n=>n.charCodeAt(0))}static arrayToBase64String(r){return btoa(String.fromCharCode(...new Uint8Array(r)))}static base64UrlDecode(r){r=r.replace(/-/g,"+").replace(/_/g,"/");const e=r.length%4;if(e){if(e===1)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");r+=new Array(5-e).join("=")}return atob(r)}static supportsWebAuthn(){return(window==null?void 0:window.PublicKeyCredential)!==void 0&&typeof window.PublicKeyCredential=="function"}}const C=new s;export{C as w};
//# sourceMappingURL=webauthnService-D3MQflUv.js.map
