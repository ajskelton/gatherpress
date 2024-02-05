(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const t=window.React,n=window.wp.i18n,a=window.wp.domReady;var r=e.n(a);const l=window.wp.element,o=window.wp.components,s=window.wp.apiFetch;var c=e.n(s);function i(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const d=()=>{const[a,r]=(0,l.useState)(!1),[s,d]=(0,l.useState)(!1),[m,u]=(0,l.useState)(!1),[h,p]=(0,l.useState)(!1),[g,w]=(0,l.useState)(!1),[b,_]=(0,l.useState)(!1),[E,f]=(0,l.useState)(!1),[C,y]=(0,l.useState)(""),v=()=>r(!1);return(0,l.useEffect)((()=>{s?(_(!0),u(!1),p(!1),w(!1)):_(!1),f(!(s||m||h||g))}),[s,m,h,g]),((e,t="")=>{for(const[n,a]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{a(e.detail)}),!1)}})({setOpen:r}),(0,t.createElement)(t.Fragment,null,a&&(0,t.createElement)(o.Modal,{title:(0,n.__)("Notify members via email","gatherpress"),onRequestClose:v,shouldCloseOnClickOutside:!1},(0,t.createElement)(o.TextareaControl,{label:(0,n.__)("Optional message","gatherpress"),value:C,onChange:e=>y(e)}),(0,t.createElement)("p",{className:"description"},(0,n.__)("Select the recipients for your message by checking the relevant boxes.","gatherpress")),(0,t.createElement)(o.Flex,{gap:"8"},(0,t.createElement)(o.FlexItem,null,(0,t.createElement)(o.CheckboxControl,{label:(0,n.__)("All Members","gatherpress"),checked:s,onChange:d})),(0,t.createElement)(o.FlexItem,null,(0,t.createElement)(o.CheckboxControl,{label:(0,n.__)("Attending","gatherpress"),checked:m,onChange:u,disabled:b})),(0,t.createElement)(o.FlexItem,null,(0,t.createElement)(o.CheckboxControl,{label:(0,n.__)("Waiting List","gatherpress"),checked:h,onChange:p,disabled:b})),(0,t.createElement)(o.FlexItem,null,(0,t.createElement)(o.CheckboxControl,{label:(0,n.__)("Not Attending","gatherpress"),checked:g,onChange:w,disabled:b}))),(0,t.createElement)("br",null),(0,t.createElement)(o.Button,{variant:"primary",onClick:()=>{e.g.confirm((0,n.__)("Confirm you are ready to send?","gatherpress"))&&c()({path:"/gatherpress/v1/event/email/",method:"POST",data:{post_id:i("eventDetails.postId"),message:C,send:{all:s,attending:m,waiting_list:h,not_attending:g},_wpnonce:i("misc.nonce")}}).then((e=>{e.success&&(v(),y(""),d(!1),u(!1),p(!1),w(!1))}))},disabled:E},(0,n.__)("Send Email","gatherpress"))))};r()((()=>{const e=document.getElementById("gp-event-communication-modal");e&&(0,l.createRoot)(e).render((0,t.createElement)(d,null))}))})();