(()=>{"use strict";var e,t={3484:(e,t,n)=>{const a=window.wp.blocks,r=window.React,i=window.moment;var o=n.n(i);const s=window.wp.i18n,l=window.wp.blockEditor,c=window.wp.components,m=window.wp.element,d=(e,t="")=>{for(const[n,a]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:a});dispatchEvent(r)}},p=window.wp.data,u=window.wp.apiFetch;var f=n.n(u);function v(){(0,p.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function g(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function h(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),a=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[a]=t}function E(){const e=o().tz(g("eventDetails.dateTime.datetime_end"),S());return o().tz(S()).valueOf()>e.valueOf()}function T(){const e="gp_event_past",t=(0,p.dispatch)("core/notices");t.removeNotice(e),E()&&t.createNotice("warning",(0,s.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}const _="YYYY-MM-DDTHH:mm:ss",D="YYYY-MM-DD HH:mm:ss",w=o().tz(S()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(_),z=o().tz(w,S()).add(2,"hours").format(_);function b(){return x(g("settings.dateFormat"))+" "+x(g("settings.timeFormat"))}function S(e=g("eventDetails.dateTime.timezone")){return o().tz.zone(e)?e:(0,s.__)("GMT","gatherpress")}function y(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function O(e,t=null){!function(e){const t=o().tz(g("eventDetails.dateTime.datetime_end"),S()).valueOf(),n=o().tz(e,S()).valueOf();n>=t&&k(o().tz(n,S()).add(2,"hours").format(_))}(e),h("event_datetime.datetime_start",e),"function"==typeof t&&t(e),v()}function k(e,t=null){!function(e){const t=o().tz(g("eventDetails.dateTime.datetime_start"),S()).valueOf(),n=o().tz(e,S()).valueOf();n<=t&&O(o().tz(n,S()).subtract(2,"hours").format(_))}(e),h("event_datetime.datetime_end",e),null!==t&&t(e),v()}function P(){const e=(0,p.select)("core/editor").isSavingPost(),t=(0,p.select)("core/editor").isAutosavingPost();"gp_event"===(0,p.select)("core/editor").getCurrentPostType()&&e&&!t&&f()({path:"/gatherpress/v1/event/datetime/",method:"POST",data:{post_id:g("eventDetails.postId"),datetime_start:o().tz(g("eventDetails.dateTime.datetime_start"),S()).format(D),datetime_end:o().tz(g("eventDetails.dateTime.datetime_end"),S()).format(D),timezone:g("eventDetails.dateTime.timezone"),_wpnonce:g("misc.nonce")}}).then((()=>{!function(){const e="gp_event_communcation",t=(0,p.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,p.select)("core/editor").getEditedPostAttribute("status")||E()||t.createNotice("success",(0,s.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{d({setOpen:!0})},label:(0,s.__)("Compose Message","gatherpress")}]})}()}))}function x(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map((e=>e in t?t[e]:e)).join("")}const C=e=>{const{isSelected:t}=e,n=t?"none":"block";return(0,r.createElement)("div",{style:{position:"relative"}},e.children,(0,r.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}}))},M=window.wp.date,Y=e=>{const{dateTimeStart:t}=e;return o().tz(t,S()).format(b())},F=e=>{const{dateTimeEnd:t}=e;return o().tz(t,S()).format(b())},j=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e,a=(0,M.getSettings)(),i=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,r.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>O(e,n),is12Hour:i})},$=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e,a=(0,M.getSettings)(),i=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,r.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>k(e,n),is12Hour:i})},I=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e;return(0,m.useEffect)((()=>{n(o().tz(function(){let e=g("eventDetails.dateTime.datetime_start");return e=""!==e?o().tz(e,S()).format(_):w,h("event_datetime.datetime_start",e),e}(),S()).format(_)),d({setDateTimeStart:t}),T()})),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.Flex,{direction:"column",gap:"0"},(0,r.createElement)(c.FlexItem,null,(0,r.createElement)("label",{htmlFor:"gp-datetime-start"},(0,s.__)("Start","gatherpress"))),(0,r.createElement)(c.FlexItem,null,(0,r.createElement)(c.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,r.createElement)(c.Button,{id:"gp-datetime-start",onClick:n,"aria-expanded":e,isLink:!0},(0,r.createElement)(Y,{dateTimeStart:t})),renderContent:()=>(0,r.createElement)(j,{dateTimeStart:t,setDateTimeStart:n})}))))},H=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e;return(0,m.useEffect)((()=>{n(o().tz(function(){let e=g("eventDetails.dateTime.datetime_end");return e=""!==e?o().tz(e,S()).format(_):z,h("event_datetime.datetime_end",e),e}(),S()).format(_)),d({setDateTimeEnd:t}),T()})),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.Flex,{direction:"column",gap:"0"},(0,r.createElement)(c.FlexItem,null,(0,r.createElement)("label",{htmlFor:"gp-datetime-end"},(0,s.__)("End","gatherpress"))),(0,r.createElement)(c.FlexItem,null,(0,r.createElement)(c.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,r.createElement)(c.Button,{id:"gp-datetime-end",onClick:n,"aria-expanded":e,isLink:!0},(0,r.createElement)(F,{dateTimeEnd:t})),renderContent:()=>(0,r.createElement)($,{dateTimeEnd:t,setDateTimeEnd:n})}))))},G=e=>{const{timezone:t,setTimezone:n}=e,a=g("misc.timezoneChoices");return(0,m.useEffect)((()=>{n(g("eventDetails.dateTime.timezone"))}),[n]),(0,m.useEffect)((()=>{d({setTimezone:g("eventDetails.dateTime.timezone")})})),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.SelectControl,{label:(0,s.__)("Time Zone","gatherpress"),value:y(t),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const a=e.replace(t,"$2").padStart(2,"0");let r=e.replace(t,"$3");return""===r&&(r=":00"),r=r.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+a+r}return e}(e),n(e),h("eventDetails.dateTime.timezone",e),v()}},Object.keys(a).map((e=>(0,r.createElement)("optgroup",{key:e,label:e},Object.keys(a[e]).map((t=>(0,r.createElement)("option",{key:t,value:t},a[e][t]))))))))},N=()=>{const[e,t]=(0,m.useState)(),[n,a]=(0,m.useState)(),[i,o]=(0,m.useState)();return(0,p.subscribe)(P),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("h3",null,(0,s.__)("Date & time","gatherpress")),(0,r.createElement)(I,{dateTimeStart:e,setDateTimeStart:t}),(0,r.createElement)(H,{dateTimeEnd:n,setDateTimeEnd:a}),(0,r.createElement)(G,{timezone:i,setTimezone:o}))},B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"1.0.0","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"Displays the date and time for an event.","attributes":{"eventEnd":{"type":"string"},"eventStart":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,a.registerBlockType)(B,{edit:()=>{const e=(0,l.useBlockProps)(),[t,n]=(0,m.useState)(w),[a,i]=(0,m.useState)(z),[d,p]=(0,m.useState)(S());return((e,t="")=>{for(const[n,a]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{a(e.detail)}),!1)}})({setDateTimeEnd:i,setDateTimeStart:n,setTimezone:p}),(0,r.createElement)("div",{...e},(0,r.createElement)(C,null,(0,r.createElement)(c.Flex,{justify:"normal",align:"center",gap:"4"},(0,r.createElement)(c.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,r.createElement)(c.Icon,{icon:"clock"})),(0,r.createElement)(c.FlexItem,null,((e,t,n)=>{const a=x(g("settings.dateFormat")),r=x(g("settings.timeFormat")),i=g("settings.showTimezone")?"z":"",l=a+" "+r,c=S(n);let m=a+" "+r+" "+i;return o().tz(e,c).format(a)===o().tz(t,c).format(a)&&(m=r+" "+i),(0,s.sprintf)(/* translators: %1$s: datetime start, %2$s: datetime end, %3$s timezone. */
(0,s.__)("%1$s to %2$s %3$s"),o().tz(e,c).format(l),o().tz(t,c).format(m),(d=S(d=c),(0,s.__)("GMT","gatherpress")!==d?"":function(e=""){return e.replace(":","")}(g("eventDetails.dateTime.timezone"))));var d})(t,a,d)),(0,r.createElement)(l.InspectorControls,null,(0,r.createElement)(c.PanelBody,null,(0,r.createElement)(N,null))))))},save:()=>null})}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,n,r,i)=>{if(!n){var o=1/0;for(m=0;m<e.length;m++){for(var[n,r,i]=e[m],s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](n[l])))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[n,r,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[o,s,l]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var m=l(a)}for(t&&t(n);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[42],(()=>a(3484)));r=a.O(r)})();