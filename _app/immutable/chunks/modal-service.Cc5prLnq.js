var ee=Object.defineProperty;var te=(o,s,t)=>s in o?ee(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var u=(o,s,t)=>te(o,typeof s!="symbol"?s+"":s,t);import{F as $,R as j,P as H,b as se,f as N,c as V}from"./class-store.DBwcUW4J.js";import{s as M,X as A,D as b,Y as v,B as F,i as L,u as ae,f as _,q as ie,e as z,c as C,b as K,o as O,r as J,h as T,Z as ne,w as le,x as oe,y as re,J as X}from"./scheduler.DGJk2a0k.js";import{S as R,i as P,b as D,d as q,m as E,t as m,a as p,e as S,f as w,g as ce,c as de,h as g}from"./index.BZ3GWsIc.js";import{S as ue,T as fe,c as he}from"./Toggle.CewSfvxw.js";import{w as Q}from"./entry.BUgjAth6.js";class Ke extends ${constructor(t,e=!1,a=!1){super("mechanic",t,a);u(this,"iconKey","");u(this,"countsAsCast",!0);this.isParent=e}getData(t=!1){const e={};return e["icon-key"]=this.iconKey,e.counts=this.countsAsCast,this.data.filter(a=>t||a.meetsRequirements(this)).forEach(a=>{const i=a.getData();Object.keys(i).forEach(n=>e[n]=i[n])}),e}deserialize(t){super.deserialize(t);const e=t.data;e&&this.data.forEach(a=>a.deserialize(e)),this.iconKey=e["icon-key"],this.countsAsCast=e.counts===void 0?!0:e.counts,t.children&&Object.keys(t.children).length>0&&this.setComponents(j.deserializeComponents(t.children))}}const k=class k extends ${constructor(t,e=!1){super("condition",t,e);u(this,"iconKey","")}getData(t=!1){const e={};return e["icon-key"]=this.iconKey,this.data.filter(a=>t||a.meetsRequirements(this)).forEach(a=>{const i=a.getData();Object.keys(i).forEach(n=>e[n]=i[n])}),e}deserialize(t){super.deserialize(t);const e=t.data;this.iconKey=e["icon-key"],e&&this.data.forEach(a=>a.deserialize(e)),t.children&&Object.keys(t.children).length>0&&this.setComponents(j.deserializeComponents(t.children))}};u(k,"new",()=>new k({name:"null"}));let Y=k;function me(o){let s,t,e,a,i;function n(l){o[3](l)}function c(l){o[4](l)}function d(l){o[5](l)}let h={};return o[0].selected!==void 0&&(h.selected=o[0].selected),o[0].value!==void 0&&(h.data=o[0].value),o[0].multiple!==void 0&&(h.multiple=o[0].multiple),s=new ue({props:h}),b.push(()=>w(s,"selected",n)),b.push(()=>w(s,"data",c)),b.push(()=>w(s,"multiple",d)),{c(){D(s.$$.fragment)},l(l){q(s.$$.fragment,l)},m(l,r){E(s,l,r),i=!0},p(l,r){const f={};!t&&r&1&&(t=!0,f.selected=l[0].selected,v(()=>t=!1)),!e&&r&1&&(e=!0,f.data=l[0].value,v(()=>e=!1)),!a&&r&1&&(a=!0,f.multiple=l[0].multiple,v(()=>a=!1)),s.$set(f)},i(l){i||(m(s.$$.fragment,l),i=!0)},o(l){p(s.$$.fragment,l),i=!1},d(l){S(s,l)}}}function pe(o){let s,t;return s=new H({props:{label:o[1],tooltip:o[2],$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){D(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){E(s,e,a),t=!0},p(e,[a]){const i={};a&2&&(i.label=e[1]),a&4&&(i.tooltip=e[2]),a&129&&(i.$$scope={dirty:a,ctx:e}),s.$set(i)},i(e){t||(m(s.$$.fragment,e),t=!0)},o(e){p(s.$$.fragment,e),t=!1},d(e){S(s,e)}}}function _e(o,s,t){let{data:e}=s,{name:a=""}=s,{tooltip:i=void 0}=s;const n=A();function c(l){o.$$.not_equal(e.selected,l)&&(e.selected=l,t(0,e))}function d(l){o.$$.not_equal(e.value,l)&&(e.value=l,t(0,e))}function h(l){o.$$.not_equal(e.multiple,l)&&(e.multiple=l,t(0,e))}return o.$$set=l=>{"data"in l&&t(0,e=l.data),"name"in l&&t(1,a=l.name),"tooltip"in l&&t(2,i=l.tooltip)},o.$$.update=()=>{o.$$.dirty&1&&e&&n("save")},[e,a,i,c,d,h]}class ge extends R{constructor(s){super(),P(this,s,_e,pe,M,{data:0,name:1,tooltip:2})}}class U extends se{constructor(t,e,a,i,n=!1){super();u(this,"component",ge);u(this,"dataSource");u(this,"data",{selected:"",value:[],multiple:!1});u(this,"name","");u(this,"key","");u(this,"tooltip");u(this,"init",()=>{this.dataSource&&(this.data.value=this.dataSource()),!this.data.selected&&this.data.value.length>0&&!this.data.multiple&&(this.data.selected=this.data.value[0])});u(this,"setTooltip",t=>(this.tooltip=t,this));u(this,"clone",()=>new U(this.name,this.key,this.dataSource||[...this.data.value],this.data.multiple?[...this.data.selected]:this.data.selected,this.data.multiple));u(this,"getData",()=>{const t={};return t[this.key]=this.data.selected,t});u(this,"getSummary",()=>this.data.selected instanceof Array?this.data.selected.join(", "):this.data.selected);u(this,"deserialize",t=>{this.data.selected=t[this.key],this.data.multiple&&!(this.data.selected instanceof Array)?this.data.selected=[this.data.selected]:!this.data.multiple&&this.data.selected instanceof Array&&(this.data.selected=this.data.selected[0])});this.name=t,this.key=e,typeof a=="function"?this.dataSource=a:this.data.value=a,n&&(this.data.selected=[]),i&&(this.data.selected=i),this.data.multiple=n}}const y=class y extends ${constructor(t,e=!1){super("target",t,e);u(this,"iconKey","")}getData(t=!1){const e={};return e["icon-key"]=this.iconKey,this.data.filter(a=>t||a.meetsRequirements(this)).forEach(a=>{const i=a.getData();Object.keys(i).forEach(n=>e[n]=i[n])}),e}deserialize(t){super.deserialize(t);const e=t.data;this.iconKey=e["icon-key"],e&&this.data.forEach(a=>a.deserialize(e)),t.children&&Object.keys(t.children).length>0&&this.setComponents(j.deserializeComponents(t.children))}};u(y,"new",()=>new y({name:"null"}));let Z=y;function be(o){let s,t,e;function a(n){o[3](n)}let i={};return o[0]!==void 0&&(i.data=o[0]),s=new fe({props:i}),b.push(()=>w(s,"data",a)),{c(){D(s.$$.fragment)},l(n){q(s.$$.fragment,n)},m(n,c){E(s,n,c),e=!0},p(n,c){const d={};!t&&c&1&&(t=!0,d.data=n[0],v(()=>t=!1)),s.$set(d)},i(n){e||(m(s.$$.fragment,n),e=!0)},o(n){p(s.$$.fragment,n),e=!1},d(n){S(s,n)}}}function ve(o){let s,t;return s=new H({props:{label:o[1],tooltip:o[2],$$slots:{default:[be]},$$scope:{ctx:o}}}),{c(){D(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){E(s,e,a),t=!0},p(e,[a]){const i={};a&2&&(i.label=e[1]),a&4&&(i.tooltip=e[2]),a&33&&(i.$$scope={dirty:a,ctx:e}),s.$set(i)},i(e){t||(m(s.$$.fragment,e),t=!0)},o(e){p(s.$$.fragment,e),t=!1},d(e){S(s,e)}}}function we(o,s,t){let{data:e}=s,{name:a=""}=s,{tooltip:i=void 0}=s;const n=A();function c(d){e=d,t(0,e)}return o.$$set=d=>{"data"in d&&t(0,e=d.data),"name"in d&&t(1,a=d.name),"tooltip"in d&&t(2,i=d.tooltip)},o.$$.update=()=>{o.$$.dirty&1&&(e||!e)&&n("save")},[e,a,i,c]}class Oe extends R{constructor(s){super(),P(this,s,we,ve,M,{data:0,name:1,tooltip:2})}}function G(o){let s,t,e,a,i,n,c,d;const h=o[5].default,l=ie(h,o,o[4],null);return{c(){s=z("div"),t=z("div"),e=z("div"),l&&l.c(),this.h()},l(r){s=C(r,"DIV",{class:!0});var f=K(s);t=C(f,"DIV",{class:!0});var I=K(t);e=C(I,"DIV",{class:!0});var B=K(e);l&&l.l(B),B.forEach(_),I.forEach(_),f.forEach(_),this.h()},h(){O(e,"class","wrapper svelte-sv0lqh"),O(t,"class","modal-content svelte-sv0lqh"),J(t,"--width",o[1]),O(s,"class","backdrop svelte-sv0lqh")},m(r,f){L(r,s,f),T(s,t),T(t,e),l&&l.m(e,null),n=!0,c||(d=ne(he.call(null,t,o[2])),c=!0)},p(r,f){l&&l.p&&(!n||f&16)&&le(l,h,r,r[4],n?re(h,r[4],f,null):oe(r[4]),null),f&2&&J(t,"--width",r[1])},i(r){n||(m(l,r),r&&X(()=>{n&&(a||(a=g(t,N,{y:-200},!0)),a.run(1))}),r&&X(()=>{n&&(i||(i=g(s,V,{},!0)),i.run(1))}),n=!0)},o(r){p(l,r),r&&(a||(a=g(t,N,{y:-200},!1)),a.run(0)),r&&(i||(i=g(s,V,{},!1)),i.run(0)),n=!1},d(r){r&&_(s),l&&l.d(r),r&&a&&a.end(),r&&i&&i.end(),c=!1,d()}}}function ke(o){let s,t,e,a,i=o[0]&&G(o);return{c(){i&&i.c(),s=F()},l(n){i&&i.l(n),s=F()},m(n,c){i&&i.m(n,c),L(n,s,c),t=!0,e||(a=ae(window,"keyup",o[3]),e=!0)},p(n,[c]){n[0]?i?(i.p(n,c),c&1&&m(i,1)):(i=G(n),i.c(),m(i,1),i.m(s.parentNode,s)):i&&(ce(),p(i,1,1,()=>{i=null}),de())},i(n){t||(m(i),t=!0)},o(n){p(i),t=!1},d(n){n&&_(s),i&&i.d(n),e=!1,a()}}}function ye(o,s,t){let{$$slots:e={},$$scope:a}=s,{width:i="auto"}=s,{open:n=!1}=s;const c=A(),d=l=>{t(0,n=!1),c("close"),l==null||l.stopPropagation()},h=l=>{l.key=="Escape"&&(l.preventDefault(),l.stopPropagation(),d())};return o.$$set=l=>{"width"in l&&t(1,i=l.width),"open"in l&&t(0,n=l.open),"$$scope"in l&&t(4,a=l.$$scope)},[n,i,d,h,a,e]}class $e extends R{constructor(s){super(),P(this,s,ye,ke,M,{width:1,open:0})}}const je=(o,{delay:s=0,duration:t=500}={})=>{const a=getComputedStyle(o).width.match(/([\d.]+)(.*)/);if(!a)return{delay:s,duration:t,css:n=>`max-width: unset; width: ${n*100}%;`};const i=Number.parseFloat(a[1]);return{delay:s,duration:t,css:n=>`max-width: unset; width: ${n*i}${a[2]}; min-width: unset;`}},Me=(o,{delay:s=0,duration:t=500})=>{const a=getComputedStyle(o).height.match(/([\d.]+)(.*)/);if(!a)return{delay:s,duration:t,css:n=>`max-height: unset; height: ${n*100}%;`};const i=Number.parseFloat(a[1]);return{delay:s,duration:t,css:n=>`max-height: unset; height: ${n*i}${a[2]}; min-height: unset;`}},W=Q(void 0),x=Q(void 0),Ae=(o,s)=>{W.set(o),s&&x.set(s)},Re=()=>{W.set(void 0),x.set(void 0)};export{Oe as B,U as D,Ke as F,$e as M,Z as a,Y as b,Re as c,je as d,W as e,x as m,Ae as o,Me as s};
