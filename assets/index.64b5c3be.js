import{E as g,a as r,b as i,c as T,d as w,e as V,_ as b}from"./ModuleContainer.vue_vue_type_script_setup_true_lang.9572928b.js";import{d as S,K as J,aS as v,L as k,o as p,x as B,w as u,e as l,h as e,M as s,g as f,t as E,a as I,F as P,aT as R}from"./index.5e4ec2ad.js";import{a as F,E as m}from"./index.5fb48677.js";import{f as U,g as N}from"./createLoginResData.54677d58.js";import{E as H}from"./index.486b1884.js";const q=S({__name:"Module-B",setup(L){const c=J(),_=v(),a=k({data:"",module:null,moduleCloseConfirm:!1,moduleJumpTarget:"",moduleJumpPayloadData:""}),D=t=>{a.module=t},h=()=>{},C=()=>{},M=()=>{},y=t=>{a.data=t},x=async()=>{if(a.moduleCloseConfirm)try{await H({title:"\u5173\u95ED\u786E\u8BA4",message:"\u662F\u5426\u5173\u95ED\u6B64\u6A21\u5757\uFF1F",type:"warning",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"})}catch{return!1}},A=()=>{const t=c.info.modules.find(({id:d})=>d===a.moduleJumpTarget);a.module&&t&&_.goToModule(a.module,t,a.moduleJumpPayloadData)};return(t,d)=>(p(),B(e(b),{onInit:D,onShow:h,onHide:C,onData:y,onMounted:M,onBeforeClose:x},{default:u(()=>[l(e(g),{style:{marginBottom:"15px"}},{default:u(()=>[l(e(r),{span:5,style:{marginRight:"15px"}},{default:u(()=>[l(e(i),{shadow:"never"},{header:u(()=>[s("\u6A21\u5757\u4FE1\u606F")]),default:u(()=>{var o,n;return[f("p",null,"\u6A21\u5757\u540D\u79F0\uFF1A"+E((o=a.module)==null?void 0:o.name),1),f("p",null,"\u6A21\u5757ID\uFF1A"+E((n=a.module)==null?void 0:n.id),1),f("p",null,"Data: "+E(a.data),1)]}),_:1})]),_:1}),l(e(r),{span:5,style:{marginRight:"15px"}},{default:u(()=>[l(e(i),{shadow:"never"},{header:u(()=>[s("\u6A21\u5757\u8BBE\u7F6E")]),default:u(()=>[l(e(F),null,{default:u(()=>[l(e(m),{label:"\u5173\u95ED\u786E\u8BA4"},{default:u(()=>[l(e(T),{modelValue:a.moduleCloseConfirm,"onUpdate:modelValue":d[0]||(d[0]=o=>a.moduleCloseConfirm=o),"inline-prompt":"",activeText:"\u5F00\u542F",inactiveText:"\u5173\u95ED"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),l(e(r),{span:8,style:{marginRight:"15px"}},{default:u(()=>[l(e(i),{shadow:"never"},{header:u(()=>[s("\u6A21\u5757\u8DF3\u8F6C\u6D4B\u8BD5")]),default:u(()=>[l(e(F),null,{default:u(()=>[l(e(m),{label:"\u76EE\u6807\u6A21\u5757"},{default:u(()=>[l(e(w),{modelValue:a.moduleJumpTarget,"onUpdate:modelValue":d[1]||(d[1]=o=>a.moduleJumpTarget=o)},{default:u(()=>[(p(!0),I(P,null,R(e(c).info.modules,o=>{var n;return p(),B(e(V),{key:o.id,value:o.id,label:o.name,disabled:o.id===((n=a.module)==null?void 0:n.id)},null,8,["value","label","disabled"])}),128))]),_:1},8,["modelValue"])]),_:1}),l(e(m),{label:"\u643A\u5E26\u6570\u636E"},{default:u(()=>[l(e(U),{modelValue:a.moduleJumpPayloadData,"onUpdate:modelValue":d[2]||(d[2]=o=>a.moduleJumpPayloadData=o)},null,8,["modelValue"])]),_:1}),l(e(m),null,{default:u(()=>[l(e(N),{type:"primary",disabled:!a.moduleJumpTarget,onClick:A},{default:u(()=>[s("\u8DF3\u8F6C")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(e(g),{style:{marginBottom:"15px"}})]),_:1}))}});export{q as default};
