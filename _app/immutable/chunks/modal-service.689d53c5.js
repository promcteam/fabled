var H=Object.defineProperty;var J=(i,a,t)=>a in i?H(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var f=(i,a,t)=>(J(i,typeof a!="symbol"?a+"":a,t),t);import{S as B,i as L,s as U,e as M,b as W,E as O,g,v as Q,d as w,f as T,h as m,O as X,P as x,k as D,l as k,m as E,n as S,p as R,C as Y,a3 as $,R as tt,U as et,V as st,W as at,X as q,a2 as b,F as nt,_ as ot,I as K,w as it,M as rt,y as ct,z as lt,A as ut,N as dt,B as ft}from"./index.e9b9921d.js";import{c as ht,f as A,a as P,P as pt}from"./Toggle.2ffb71c3.js";import{$ as j,Z as z,Y as h}from"./store.7267f65a.js";import{w as _}from"./singletons.7836d0b8.js";function N(i){let a,t,s,e,n,o,c,l;const p=i[5].default,u=x(p,i,i[4],null);return{c(){a=D("div"),t=D("div"),s=D("div"),u&&u.c(),this.h()},l(r){a=k(r,"DIV",{class:!0});var d=E(a);t=k(d,"DIV",{class:!0});var C=E(t);s=k(C,"DIV",{class:!0});var I=E(s);u&&u.l(I),I.forEach(m),C.forEach(m),d.forEach(m),this.h()},h(){S(s,"class","wrapper svelte-75vve5"),S(t,"class","modal-content svelte-75vve5"),R(t,"--width",i[1]),S(a,"class","backdrop svelte-75vve5")},m(r,d){W(r,a,d),Y(a,t),Y(t,s),u&&u.m(s,null),o=!0,c||(l=[$(ht.call(null,t)),O(t,"outclick",i[2]),O(t,"click",tt(i[6]))],c=!0)},p(r,d){u&&u.p&&(!o||d&16)&&et(u,p,r,r[4],o?at(p,r[4],d,null):st(r[4]),null),d&2&&R(t,"--width",r[1])},i(r){o||(g(u,r),q(()=>{o&&(e||(e=b(t,A,{y:-200},!0)),e.run(1))}),q(()=>{o&&(n||(n=b(a,P,{},!0)),n.run(1))}),o=!0)},o(r){w(u,r),e||(e=b(t,A,{y:-200},!1)),e.run(0),n||(n=b(a,P,{},!1)),n.run(0),o=!1},d(r){r&&m(a),u&&u.d(r),r&&e&&e.end(),r&&n&&n.end(),c=!1,nt(l)}}}function mt(i){let a,t,s,e,n=i[0]&&N(i);return{c(){n&&n.c(),a=M()},l(o){n&&n.l(o),a=M()},m(o,c){n&&n.m(o,c),W(o,a,c),t=!0,s||(e=O(window,"keyup",i[3]),s=!0)},p(o,[c]){o[0]?n?(n.p(o,c),c&1&&g(n,1)):(n=N(o),n.c(),g(n,1),n.m(a.parentNode,a)):n&&(Q(),w(n,1,1,()=>{n=null}),T())},i(o){t||(g(n),t=!0)},o(o){w(n),t=!1},d(o){n&&n.d(o),o&&m(a),s=!1,e()}}}function gt(i,a,t){let{$$slots:s={},$$scope:e}=a,{width:n="auto"}=a,{open:o=!1}=a;const c=X(),l=r=>{var d;t(0,o=!1),c("close"),(d=r==null?void 0:r.detail)==null||d.stopPropagation()},p=r=>{r.key=="Escape"&&(r.preventDefault(),r.stopPropagation(),l())};function u(r){ot.call(this,i,r)}return i.$$set=r=>{"width"in r&&t(1,n=r.width),"open"in r&&t(0,o=r.open),"$$scope"in r&&t(4,e=r.$$scope)},[o,n,l,p,e,s,u]}class Et extends B{constructor(a){super(),L(this,a,gt,mt,U,{width:1,open:0})}}class St extends j{constructor(t,s=!1,e=!1){super("mechanic",t);f(this,"iconKey","");f(this,"countsAsCast",!0);super.isParent=s,super.isDeprecated=e}toYamlObj(){const t=super.toYamlObj(),s=this.getData();s.getKeys().length>0&&t.put("data",s);const e=K(this.components);return e.length>0&&t.put("children",e),t}getData(){const t=new h("data");return t.put("icon-key",this.iconKey),t.put("counts",this.countsAsCast),this.data.filter(s=>s.meetsRequirements(this)).forEach(s=>{const e=s.getData();Object.keys(e).forEach(n=>t.put(n,e[n]))}),t}getRawData(){const t=new h("data");return this.data.forEach(s=>{const e=s.getData();Object.keys(e).forEach(n=>t.put(n,e[n]))}),t}deserialize(t){super.deserialize(t);const s=t.get("data");s&&this.data.forEach(e=>e.deserialize(s)),this.iconKey=s.get("icon-key",""),this.countsAsCast=s.get("counts",!0),this.setComponents(t.get("children",[],e=>z.deserializeComponents(e)))}}const v=class v extends j{constructor(t,s=!1){super("condition",t);f(this,"iconKey","");super.isDeprecated=s}toYamlObj(){const t=super.toYamlObj(),s=this.getData();s.getKeys().length>0&&t.put("data",s);const e=K(this.components);return e.length>0&&t.put("children",e),t}getData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.filter(s=>s.meetsRequirements(this)).forEach(s=>{const e=s.getData();Object.keys(e).forEach(n=>t.put(n,e[n]))}),t}getRawData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.forEach(s=>{const e=s.getData();Object.keys(e).forEach(n=>t.put(n,e[n]))}),t}deserialize(t){super.deserialize(t);const s=t.get("data");this.iconKey=s.get("icon-key"),s&&this.data.forEach(e=>e.deserialize(s)),this.setComponents(t.get("children",[],e=>z.deserializeComponents(e)))}};f(v,"new",()=>new v({name:"null"}));let V=v;const y=class y extends j{constructor(t,s=!1){super("target",t);f(this,"iconKey","");super.isDeprecated=s}toYamlObj(){const t=super.toYamlObj(),s=this.getData();s.getKeys().length>0&&t.put("data",s);const e=K(this.components);return e.length>0&&t.put("children",e),t}getData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.filter(s=>s.meetsRequirements(this)).forEach(s=>{const e=s.getData();Object.keys(e).forEach(n=>t.put(n,e[n]))}),t}getRawData(){const t=new h("data");return t.put("icon-key",this.iconKey),this.data.forEach(s=>{const e=s.getData();Object.keys(e).forEach(n=>t.put(n,e[n]))}),t}deserialize(t){super.deserialize(t);const s=t.get("data");this.iconKey=s.get("icon-key"),s&&this.data.forEach(e=>e.deserialize(s)),this.setComponents(t.get("children",[],e=>z.deserializeComponents(e)))}};f(y,"new",()=>new y({name:"null"}));let F=y;function _t(i){let a,t,s;function e(o){i[3](o)}let n={label:i[1],tooltip:i[2]};return i[0]!==void 0&&(n.value=i[0]),a=new pt({props:n}),it.push(()=>rt(a,"value",e)),{c(){ct(a.$$.fragment)},l(o){lt(a.$$.fragment,o)},m(o,c){ut(a,o,c),s=!0},p(o,[c]){const l={};c&2&&(l.label=o[1]),c&4&&(l.tooltip=o[2]),!t&&c&1&&(t=!0,l.value=o[0],dt(()=>t=!1)),a.$set(l)},i(o){s||(g(a.$$.fragment,o),s=!0)},o(o){w(a.$$.fragment,o),s=!1},d(o){ft(a,o)}}}function bt(i,a,t){let{data:s}=a,{name:e=""}=a,{tooltip:n=void 0}=a;const o=X();function c(l){s=l,t(0,s)}return i.$$set=l=>{"data"in l&&t(0,s=l.data),"name"in l&&t(1,e=l.name),"tooltip"in l&&t(2,n=l.tooltip)},i.$$.update=()=>{i.$$.dirty&1&&(s||!s)&&o("save")},[s,e,n,c]}class Ot extends B{constructor(a){super(),L(this,a,bt,_t,U,{data:0,name:1,tooltip:2})}}const Kt=(()=>{let i=!0;{const e=localStorage.getItem("show-summary-items");i=e!==null?e==="true":i}const{subscribe:a,set:t,update:s}=_(i);return{subscribe:a,set:e=>(localStorage.setItem("show-summary-items",String(e)),t(e)),update:s}})(),jt=(()=>{let i=!0;i=localStorage.getItem("use-symbols")==="true";const{subscribe:a,set:t,update:s}=_(i);return{subscribe:a,set:e=>(localStorage.setItem("use-symbols",String(e)),t(e)),update:s}})(),zt=(()=>{let i=!0;{const e=localStorage.getItem("animation-enabled");i=e!==null?e==="true":i}const{subscribe:a,set:t,update:s}=_(i);return{subscribe:a,set:e=>(localStorage.setItem("animation-enabled",String(e)),t(e)),update:s}})(),Ct=(i,{delay:a=0,duration:t=500})=>{const e=getComputedStyle(i).width.match(/([\d.]+)(.*)/);if(!e)return{delay:a,duration:t,css:o=>`max-width: unset; width: ${o*100}%;`};const n=Number.parseFloat(e[1]);return{delay:a,duration:t,css:o=>`max-width: unset; width: ${o*n}${e[2]}; min-width: unset;`}},It=(i,{delay:a=0,duration:t=500})=>{const e=getComputedStyle(i).height.match(/([\d.]+)(.*)/);if(!e)return{delay:a,duration:t,css:o=>`max-height: unset; height: ${o*100}%;`};const n=Number.parseFloat(e[1]);return{delay:a,duration:t,css:o=>`max-height: unset; height: ${o*n}${e[2]}; min-height: unset;`}},Z=_(void 0),G=_(void 0),Mt=(i,a)=>{Z.set(i),a&&G.set(a)},Rt=()=>{Z.set(void 0),G.set(void 0)};export{Et as M,F as P,Ot as S,V as a,St as b,zt as c,Kt as d,Rt as e,Z as f,It as g,G as m,Mt as o,Ct as s,jt as u};
