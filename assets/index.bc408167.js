import{E as g,a as r,b as i,c as T,d as w,e as V,_ as b}from"./ModuleContainer.vue_vue_type_script_setup_true_lang.9572928b.js";import{d as S,K as J,aS as v,L as k,o as p,x as F,w as u,e as a,h as e,M as s,g as f,t as E,a as I,F as P,aT as R}from"./index.5e4ec2ad.js";import{a as B,E as m}from"./index.5fb48677.js";import{f as U,g as H}from"./createLoginResData.54677d58.js";import{E as N}from"./index.486b1884.js";const q=S({__name:"Module-H",setup(L){const c=J(),_=v(),l=k({data:"",module:null,moduleCloseConfirm:!1,moduleJumpTarget:"",moduleJumpPayloadData:""}),D=t=>{l.module=t},h=()=>{},C=()=>{},M=()=>{},y=t=>{console.log({data:t}),l.data=t},x=async()=>{if(l.moduleCloseConfirm)try{await N({title:"\u5173\u95ED\u786E\u8BA4",message:"\u662F\u5426\u5173\u95ED\u6B64\u6A21\u5757\uFF1F",type:"warning",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"})}catch{return!1}},A=()=>{const t=c.info.modules.find(({id:d})=>d===l.moduleJumpTarget);l.module&&t&&_.goToModule(l.module,t,l.moduleJumpPayloadData)};return(t,d)=>(p(),F(e(b),{onInit:D,onShow:h,onHide:C,onData:y,onMounted:M,onBeforeClose:x},{default:u(()=>[a(e(g),{style:{marginBottom:"15px"}},{default:u(()=>[a(e(r),{span:5,style:{marginRight:"15px"}},{default:u(()=>[a(e(i),{shadow:"never"},{header:u(()=>[s("\u6A21\u5757\u4FE1\u606F")]),default:u(()=>{var o,n;return[f("p",null,"\u6A21\u5757\u540D\u79F0\uFF1A"+E((o=l.module)==null?void 0:o.name),1),f("p",null,"\u6A21\u5757ID\uFF1A"+E((n=l.module)==null?void 0:n.id),1),f("p",null,"Data: "+E(l.data),1)]}),_:1})]),_:1}),a(e(r),{span:5,style:{marginRight:"15px"}},{default:u(()=>[a(e(i),{shadow:"never"},{header:u(()=>[s("\u6A21\u5757\u8BBE\u7F6E")]),default:u(()=>[a(e(B),null,{default:u(()=>[a(e(m),{label:"\u5173\u95ED\u786E\u8BA4"},{default:u(()=>[a(e(T),{modelValue:l.moduleCloseConfirm,"onUpdate:modelValue":d[0]||(d[0]=o=>l.moduleCloseConfirm=o),"inline-prompt":"",activeText:"\u5F00\u542F",inactiveText:"\u5173\u95ED"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),a(e(r),{span:8,style:{marginRight:"15px"}},{default:u(()=>[a(e(i),{shadow:"never"},{header:u(()=>[s("\u6A21\u5757\u8DF3\u8F6C\u6D4B\u8BD5")]),default:u(()=>[a(e(B),null,{default:u(()=>[a(e(m),{label:"\u76EE\u6807\u6A21\u5757"},{default:u(()=>[a(e(w),{modelValue:l.moduleJumpTarget,"onUpdate:modelValue":d[1]||(d[1]=o=>l.moduleJumpTarget=o)},{default:u(()=>[(p(!0),I(P,null,R(e(c).info.modules,o=>{var n;return p(),F(e(V),{key:o.id,value:o.id,label:o.name,disabled:o.id===((n=l.module)==null?void 0:n.id)},null,8,["value","label","disabled"])}),128))]),_:1},8,["modelValue"])]),_:1}),a(e(m),{label:"\u643A\u5E26\u6570\u636E"},{default:u(()=>[a(e(U),{modelValue:l.moduleJumpPayloadData,"onUpdate:modelValue":d[2]||(d[2]=o=>l.moduleJumpPayloadData=o)},null,8,["modelValue"])]),_:1}),a(e(m),null,{default:u(()=>[a(e(H),{type:"primary",disabled:!l.moduleJumpTarget,onClick:A},{default:u(()=>[s("\u8DF3\u8F6C")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(g),{style:{marginBottom:"15px"}})]),_:1}))}});export{q as default};
