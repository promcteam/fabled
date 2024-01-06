import{R as jt,c as zt,y as Ht,P as _t,d as Pt,h as $t,a0 as Nt,b as yt,a1 as Et,a2 as dt,i as ht,e as Ft}from"../chunks/store.TE2fo4pJ.js";import{B as ft,s as Ie,p as P,a as S,c as L,i as T,E as N,d as c,A as xe,f as F,g as U,h as pe,j,z as bt,R as Ot,l as me,m as ce,H as et,u as G,w as ke,n as Ze,x as mt,e as Te,o as Ut,Q as Gt,r as oe,v as ve,M as Wt,T as vt,S as Kt,U as Qt}from"../chunks/scheduler.A46dufu9.js";import{r as kt}from"../chunks/index.qPAo0Isn.js";import{S as Re,i as Me,f as E,b,d as v,m as k,a as g,t as h,e as w,g as tt,c as nt}from"../chunks/index.VTabNMEs.js";import{P as O,e as Ce,u as Yt,o as Jt,T as ct}from"../chunks/Toggle.79n1K--N.js";import{M as Vt,L as Xt,S as lt,A as _e,w as Zt}from"../chunks/AttributeInput.8cdThM-s.js";import{e as wt}from"../chunks/singletons.DoZ_UWM_.js";const xt=!1;async function en({params:l}){const t=l.id,s=l.type==="skill";let i,a;if(s){if(s){for(const u of ft($t))if(a||(a=u),u.name==t){i=u;break}}}else for(const u of ft(Pt))if(a||(a=u),u.name==t){i=u;break}if(i)return i.loaded||(i.location==="local"&&i.load(jt(localStorage.getItem(`sapi.${s?"skill":"class"}.${i.name}`)||"")),s&&i.postLoad()),s||tn(i),zt.set(i),Ht.set(!s),{data:i};a?kt(302,`/${l.type}/${a.name}`):kt(302,"/")}const tn=l=>{for(const t of ft(Nt))l.attributes.find(s=>s.name===t)||l.attributes.push(new _t(t,0,0))},Yn=Object.freeze(Object.defineProperty({__proto__:null,load:en,ssr:xt},Symbol.toStringTag,{value:"Module"}));function nn(l){let t,s,i;function a(e){l[2](e)}let u={};return l[0].material!==void 0&&(u.selected=l[0].material),t=new Vt({props:u}),P.push(()=>E(t,"selected",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.selected=e[0].material,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function ln(l){let t,s,i;function a(e){l[4](e)}let u={};return l[0].lore!==void 0&&(u.value=l[0].lore),t=new Xt({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].lore,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function an(l){let t,s,i,a,u,e,r;t=new O({props:{label:"Icon",tooltip:"[icon] The item that represents the "+l[1]+" in GUIs",$$slots:{default:[nn]},$$scope:{ctx:l}}});function p(f){l[3](f)}let D={label:"CustomModelData",type:"number",intMode:!0,tooltip:"[icon-data] The CustomModelData of the item that represents the "+l[1]+" in GUIs"};return l[0].customModelData!==void 0&&(D.value=l[0].customModelData),i=new O({props:D}),P.push(()=>E(i,"value",p)),e=new O({props:{label:"Icon Lore",tooltip:"[icon-lore]"+l[1]=="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values',$$slots:{default:[ln]},$$scope:{ctx:l}}}),{c(){b(t.$$.fragment),s=S(),b(i.$$.fragment),u=S(),b(e.$$.fragment)},l(f){v(t.$$.fragment,f),s=L(f),v(i.$$.fragment,f),u=L(f),v(e.$$.fragment,f)},m(f,R){k(t,f,R),T(f,s,R),k(i,f,R),T(f,u,R),k(e,f,R),r=!0},p(f,[R]){const _={};R&2&&(_.tooltip="[icon] The item that represents the "+f[1]+" in GUIs"),R&33&&(_.$$scope={dirty:R,ctx:f}),t.$set(_);const A={};R&2&&(A.tooltip="[icon-data] The CustomModelData of the item that represents the "+f[1]+" in GUIs"),!a&&R&1&&(a=!0,A.value=f[0].customModelData,N(()=>a=!1)),i.$set(A);const I={};R&2&&(I.tooltip="[icon-lore]"+f[1]=="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values'),R&33&&(I.$$scope={dirty:R,ctx:f}),e.$set(I)},i(f){r||(g(t.$$.fragment,f),g(i.$$.fragment,f),g(e.$$.fragment,f),r=!0)},o(f){h(t.$$.fragment,f),h(i.$$.fragment,f),h(e.$$.fragment,f),r=!1},d(f){f&&(c(s),c(u)),w(t,f),w(i,f),w(e,f)}}}function sn(l,t,s){let i;xe(l,yt,p=>s(1,i=p));let{icon:a}=t;function u(p){l.$$.not_equal(a.material,p)&&(a.material=p,s(0,a))}function e(p){l.$$.not_equal(a.customModelData,p)&&(a.customModelData=p,s(0,a))}function r(p){l.$$.not_equal(a.lore,p)&&(a.lore=p,s(0,a))}return l.$$set=p=>{"icon"in p&&s(0,a=p.icon)},[a,i,u,e,r]}class Bt extends Re{constructor(t){super(),Me(this,t,sn,an,Ie,{icon:0})}}function qt(l,t,s){const i=l.slice();return i[4]=t[s],i[6]=s,i}function Tt(l){let t,s=l[4]+"",i,a,u,e;function r(){return l[2](l[6])}function p(...D){return l[3](l[6],...D)}return{c(){t=F("div"),i=me(s),a=S(),this.h()},l(D){t=U(D,"DIV",{class:!0,tabindex:!0,role:!0});var f=pe(t);i=ce(f,s),a=L(f),f.forEach(c),this.h()},h(){j(t,"class","entry svelte-wejg12"),j(t,"tabindex","0"),j(t,"role","menuitem"),et(t,"selected",l[0]&Math.pow(2,l[6]))},m(D,f){T(D,t,f),G(t,i),G(t,a),u||(e=[ke(t,"click",r),ke(t,"keypress",p)],u=!0)},p(D,f){l=D,f&2&&s!==(s=l[4]+"")&&Ze(i,s),f&1&&et(t,"selected",l[0]&Math.pow(2,l[6]))},d(D){D&&c(t),u=!1,mt(e)}}}function un(l){let t,s=Ce(l[1]),i=[];for(let a=0;a<s.length;a+=1)i[a]=Tt(qt(l,s,a));return{c(){t=F("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){t=U(a,"DIV",{class:!0});var u=pe(t);for(let e=0;e<i.length;e+=1)i[e].l(u);u.forEach(c),this.h()},h(){j(t,"class","input svelte-wejg12")},m(a,u){T(a,t,u);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)},p(a,[u]){if(u&3){s=Ce(a[1]);let e;for(e=0;e<s.length;e+=1){const r=qt(a,s,e);i[e]?i[e].p(r,u):(i[e]=Tt(r),i[e].c(),i[e].m(t,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=s.length}},i:bt,o:bt,d(a){a&&c(t),Ot(i,a)}}}function rn(l,t,s){let{value:i=273}=t,{data:a}=t;const u=r=>s(0,i=i^Math.pow(2,r)),e=(r,p)=>{p.key==="Enter"&&s(0,i=i^Math.pow(2,r))};return l.$$set=r=>{"value"in r&&s(0,i=r.value),"data"in r&&s(1,a=r.data)},[i,a,u,e]}class on extends Re{constructor(t){super(),Me(this,t,rn,un,Ie,{value:0,data:1})}}function Ct(l,t,s){const i=l.slice();return i[22]=t[s],i[23]=t,i[24]=s,i}function It(l){let t,s,i,a,u,e,r,p,D,f,R,_,A,I,q,M,y,d,C,z,V,se,W,$,m,X,B,re,K,Se="Drag & Drop your attributes file to use your custom attributes",fe,H=[],ge=new Map,Q,Z,$e,x,ee,te,ne,le,Y,ue,de,ie,J;function Le(n){l[3](n)}let he={label:"Name",tooltip:"The name of the class. This should not contain color codes"};l[0].name!==void 0&&(he.value=l[0].name),t=new O({props:he}),P.push(()=>E(t,"value",Le));function it(n){l[4](n)}let De={label:"Prefix",tooltip:"The prefix given to players who profess as the class which can contain color codes"};l[0].prefix!==void 0&&(De.value=l[0].prefix),a=new O({props:De}),P.push(()=>E(a,"value",it));function at(n){l[5](n)}let Ae={label:"Action Bar",tooltip:"The format for the action bar. Leave blank to use the default formatting"};l[0].actionBar!==void 0&&(Ae.value=l[0].actionBar),r=new O({props:Ae}),P.push(()=>E(r,"value",at));function st(n){l[6](n)}let Pe={label:"Group",tooltip:'A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group'};l[0].group!==void 0&&(Pe.value=l[0].group),f=new O({props:Pe}),P.push(()=>E(f,"value",st));function ut(n){l[7](n)}let Ne={label:"Mana Name",tooltip:"The name the class uses for mana"};l[0].manaName!==void 0&&(Ne.value=l[0].manaName),A=new O({props:Ne}),P.push(()=>E(A,"value",ut));function rt(n){l[8](n)}let Ee={label:"Max Level",type:"number",intMode:!0,tooltip:"The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes"};l[0].maxLevel!==void 0&&(Ee.value=l[0].maxLevel),M=new O({props:Ee}),P.push(()=>E(M,"value",rt)),C=new O({props:{label:"Parent",tooltip:"The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter",$$slots:{default:[pn]},$$scope:{ctx:l}}}),V=new O({props:{label:"Permission",tooltip:'Whether the class requires a permission to be professed as. The permission would be "skillapi.class.'+l[0].name.toLowerCase()+'"',$$slots:{default:[fn]},$$scope:{ctx:l}}}),W=new O({props:{label:"Exp Sources",tooltip:'The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml',$$slots:{default:[_n]},$$scope:{ctx:l}}}),m=new O({props:{label:"Health",tooltip:"The amount of health the class has",$$slots:{default:[$n]},$$scope:{ctx:l}}}),B=new O({props:{label:"Mana",tooltip:"The amount of mana the class has",$$slots:{default:[mn]},$$scope:{ctx:l}}});let be=Ce(l[0].attributes);const Oe=n=>n[22].name;for(let n=0;n<be.length;n+=1){let o=Ct(l,be,n),ae=Oe(o);ge.set(ae,H[n]=Rt(ae,o))}function ot(n){l[16](n)}let Ve={label:"Mana Regen",type:"number",tooltip:"The amount of mana the class regenerates at each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval"};l[0].manaRegen!==void 0&&(Ve.value=l[0].manaRegen),Z=new O({props:Ve}),P.push(()=>E(Z,"value",ot)),ee=new O({props:{label:"Skill Tree",tooltip:"The type of skill tree to use",$$slots:{default:[gn]},$$scope:{ctx:l}}}),ne=new O({props:{label:"Skills",tooltip:"The skills the class is able to use",$$slots:{default:[dn]},$$scope:{ctx:l}}});function pt(n){l[19](n)}let Be={};return l[0].icon!==void 0&&(Be.icon=l[0].icon),Y=new Bt({props:Be}),P.push(()=>E(Y,"icon",pt)),ie=new O({props:{label:"Unusable items",tooltip:"[blacklist] The types of items that the class cannot use",$$slots:{default:[hn]},$$scope:{ctx:l}}}),{c(){b(t.$$.fragment),i=S(),b(a.$$.fragment),e=S(),b(r.$$.fragment),D=S(),b(f.$$.fragment),_=S(),b(A.$$.fragment),q=S(),b(M.$$.fragment),d=S(),b(C.$$.fragment),z=S(),b(V.$$.fragment),se=S(),b(W.$$.fragment),$=S(),b(m.$$.fragment),X=S(),b(B.$$.fragment),re=S(),K=F("div"),K.textContent=Se,fe=S();for(let n=0;n<H.length;n+=1)H[n].c();Q=S(),b(Z.$$.fragment),x=S(),b(ee.$$.fragment),te=S(),b(ne.$$.fragment),le=S(),b(Y.$$.fragment),de=S(),b(ie.$$.fragment),this.h()},l(n){v(t.$$.fragment,n),i=L(n),v(a.$$.fragment,n),e=L(n),v(r.$$.fragment,n),D=L(n),v(f.$$.fragment,n),_=L(n),v(A.$$.fragment,n),q=L(n),v(M.$$.fragment,n),d=L(n),v(C.$$.fragment,n),z=L(n),v(V.$$.fragment,n),se=L(n),v(W.$$.fragment,n),$=L(n),v(m.$$.fragment,n),X=L(n),v(B.$$.fragment,n),re=L(n),K=U(n,"DIV",{class:!0,"data-svelte-h":!0}),oe(K)!=="svelte-m7hpg9"&&(K.textContent=Se),fe=L(n);for(let o=0;o<H.length;o+=1)H[o].l(n);Q=L(n),v(Z.$$.fragment,n),x=L(n),v(ee.$$.fragment,n),te=L(n),v(ne.$$.fragment,n),le=L(n),v(Y.$$.fragment,n),de=L(n),v(ie.$$.fragment,n),this.h()},h(){j(K,"class","info svelte-1alyshk")},m(n,o){k(t,n,o),T(n,i,o),k(a,n,o),T(n,e,o),k(r,n,o),T(n,D,o),k(f,n,o),T(n,_,o),k(A,n,o),T(n,q,o),k(M,n,o),T(n,d,o),k(C,n,o),T(n,z,o),k(V,n,o),T(n,se,o),k(W,n,o),T(n,$,o),k(m,n,o),T(n,X,o),k(B,n,o),T(n,re,o),T(n,K,o),T(n,fe,o);for(let ae=0;ae<H.length;ae+=1)H[ae]&&H[ae].m(n,o);T(n,Q,o),k(Z,n,o),T(n,x,o),k(ee,n,o),T(n,te,o),k(ne,n,o),T(n,le,o),k(Y,n,o),T(n,de,o),k(ie,n,o),J=!0},p(n,o){const ae={};!s&&o&1&&(s=!0,ae.value=n[0].name,N(()=>s=!1)),t.$set(ae);const je={};!u&&o&1&&(u=!0,je.value=n[0].prefix,N(()=>u=!1)),a.$set(je);const ze={};!p&&o&1&&(p=!0,ze.value=n[0].actionBar,N(()=>p=!1)),r.$set(ze);const He={};!R&&o&1&&(R=!0,He.value=n[0].group,N(()=>R=!1)),f.$set(He);const ye={};!I&&o&1&&(I=!0,ye.value=n[0].manaName,N(()=>I=!1)),A.$set(ye);const Fe={};!y&&o&1&&(y=!0,Fe.value=n[0].maxLevel,N(()=>y=!1)),M.$set(Fe);const Ue={};o&33554435&&(Ue.$$scope={dirty:o,ctx:n}),C.$set(Ue);const we={};o&1&&(we.tooltip='Whether the class requires a permission to be professed as. The permission would be "skillapi.class.'+n[0].name.toLowerCase()+'"'),o&33554433&&(we.$$scope={dirty:o,ctx:n}),V.$set(we);const Ge={};o&33554433&&(Ge.$$scope={dirty:o,ctx:n}),W.$set(Ge);const We={};o&33554433&&(We.$$scope={dirty:o,ctx:n}),m.$set(We);const Ke={};o&33554433&&(Ke.$$scope={dirty:o,ctx:n}),B.$set(Ke),o&1&&(be=Ce(n[0].attributes),tt(),H=Yt(H,o,Oe,1,n,be,ge,Q.parentNode,Jt,Rt,Q,Ct),nt());const Qe={};!$e&&o&1&&($e=!0,Qe.value=n[0].manaRegen,N(()=>$e=!1)),Z.$set(Qe);const Ye={};o&33554433&&(Ye.$$scope={dirty:o,ctx:n}),ee.$set(Ye);const qe={};o&33554437&&(qe.$$scope={dirty:o,ctx:n}),ne.$set(qe);const Je={};!ue&&o&1&&(ue=!0,Je.icon=n[0].icon,N(()=>ue=!1)),Y.$set(Je);const Xe={};o&33554433&&(Xe.$$scope={dirty:o,ctx:n}),ie.$set(Xe)},i(n){if(!J){g(t.$$.fragment,n),g(a.$$.fragment,n),g(r.$$.fragment,n),g(f.$$.fragment,n),g(A.$$.fragment,n),g(M.$$.fragment,n),g(C.$$.fragment,n),g(V.$$.fragment,n),g(W.$$.fragment,n),g(m.$$.fragment,n),g(B.$$.fragment,n);for(let o=0;o<be.length;o+=1)g(H[o]);g(Z.$$.fragment,n),g(ee.$$.fragment,n),g(ne.$$.fragment,n),g(Y.$$.fragment,n),g(ie.$$.fragment,n),J=!0}},o(n){h(t.$$.fragment,n),h(a.$$.fragment,n),h(r.$$.fragment,n),h(f.$$.fragment,n),h(A.$$.fragment,n),h(M.$$.fragment,n),h(C.$$.fragment,n),h(V.$$.fragment,n),h(W.$$.fragment,n),h(m.$$.fragment,n),h(B.$$.fragment,n);for(let o=0;o<H.length;o+=1)h(H[o]);h(Z.$$.fragment,n),h(ee.$$.fragment,n),h(ne.$$.fragment,n),h(Y.$$.fragment,n),h(ie.$$.fragment,n),J=!1},d(n){n&&(c(i),c(e),c(D),c(_),c(q),c(d),c(z),c(se),c($),c(X),c(re),c(K),c(fe),c(Q),c(x),c(te),c(le),c(de)),w(t,n),w(a,n),w(r,n),w(f,n),w(A,n),w(M,n),w(C,n),w(V,n),w(W,n),w(m,n),w(B,n);for(let o=0;o<H.length;o+=1)H[o].d(n);w(Z,n),w(ee,n),w(ne,n),w(Y,n),w(ie,n)}}}function pn(l){let t,s,i;function a(e){l[10](e)}let u={id:"parent",data:l[1].filter(l[9])};return l[0].parent!==void 0&&(u.selected=l[0].parent),t=new lt({props:u}),P.push(()=>E(t,"selected",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[9])),!s&&r&1&&(s=!0,p.selected=e[0].parent,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function fn(l){let t,s,i;function a(e){l[11](e)}let u={};return l[0].permission!==void 0&&(u.data=l[0].permission),t=new ct({props:u}),P.push(()=>E(t,"data",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.data=e[0].permission,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function _n(l){let t,s,i;function a(e){l[12](e)}let u={data:Zt};return l[0].expSources!==void 0&&(u.value=l[0].expSources),t=new on({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].expSources,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function $n(l){let t,s,i;function a(e){l[13](e)}let u={};return l[0].health!==void 0&&(u.value=l[0].health),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].health,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function mn(l){let t,s,i;function a(e){l[14](e)}let u={};return l[0].mana!==void 0&&(u.value=l[0].mana),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].mana,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function cn(l){let t,s,i;function a(e){l[15](e,l[22],l[23],l[24])}let u={};return l[22]!==void 0&&(u.value=l[22]),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){l=e;const p={};!s&&r&1&&(s=!0,p.value=l[22],N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Rt(l,t){let s,i,a;return i=new O({props:{label:dt(t[22].name),tooltip:"The amount of "+t[22].name+" the class has",$$slots:{default:[cn]},$$scope:{ctx:t}}}),{key:l,first:null,c(){s=Te(),b(i.$$.fragment),this.h()},l(u){s=Te(),v(i.$$.fragment,u),this.h()},h(){this.first=s},m(u,e){T(u,s,e),k(i,u,e),a=!0},p(u,e){t=u;const r={};e&1&&(r.label=dt(t[22].name)),e&1&&(r.tooltip="The amount of "+t[22].name+" the class has"),e&33554433&&(r.$$scope={dirty:e,ctx:t}),i.$set(r)},i(u){a||(g(i.$$.fragment,u),a=!0)},o(u){h(i.$$.fragment,u),a=!1},d(u){u&&c(s),w(i,u)}}}function gn(l){let t,s,i="Custom",a,u="Requirement",e,r="Basic Horizontal",p,D="Basic Vertical",f,R="Level Horizontal",_,A="Level Vertical",I,q="Flood",M,y;return{c(){t=F("select"),s=F("option"),s.textContent=i,a=F("option"),a.textContent=u,e=F("option"),e.textContent=r,p=F("option"),p.textContent=D,f=F("option"),f.textContent=R,_=F("option"),_.textContent=A,I=F("option"),I.textContent=q,this.h()},l(d){t=U(d,"SELECT",{id:!0});var C=pe(t);s=U(C,"OPTION",{"data-svelte-h":!0}),oe(s)!=="svelte-bw5q2o"&&(s.textContent=i),a=U(C,"OPTION",{"data-svelte-h":!0}),oe(a)!=="svelte-1ct2p8"&&(a.textContent=u),e=U(C,"OPTION",{"data-svelte-h":!0}),oe(e)!=="svelte-i2an9w"&&(e.textContent=r),p=U(C,"OPTION",{"data-svelte-h":!0}),oe(p)!=="svelte-jl2gig"&&(p.textContent=D),f=U(C,"OPTION",{"data-svelte-h":!0}),oe(f)!=="svelte-605u4k"&&(f.textContent=R),_=U(C,"OPTION",{"data-svelte-h":!0}),oe(_)!=="svelte-tnb1s"&&(_.textContent=A),I=U(C,"OPTION",{"data-svelte-h":!0}),oe(I)!=="svelte-2zfyba"&&(I.textContent=q),C.forEach(c),this.h()},h(){s.__value="Custom",ve(s,s.__value),a.__value="Requirement",ve(a,a.__value),e.__value="Basic Horizontal",ve(e,e.__value),p.__value="Basic Vertical",ve(p,p.__value),f.__value="Level Horizontal",ve(f,f.__value),_.__value="Level Vertical",ve(_,_.__value),I.__value="Flood",ve(I,I.__value),j(t,"id","skill-tree"),l[0].skillTree===void 0&&Wt(()=>l[17].call(t))},m(d,C){T(d,t,C),G(t,s),G(t,a),G(t,e),G(t,p),G(t,f),G(t,_),G(t,I),vt(t,l[0].skillTree,!0),M||(y=ke(t,"change",l[17]),M=!0)},p(d,C){C&1&&vt(t,d[0].skillTree)},d(d){d&&c(t),M=!1,y()}}}function dn(l){let t,s,i;function a(e){l[18](e)}let u={id:"skills",data:l[2],multiple:!0,placeholder:"No Skills"};return l[0].skills!==void 0&&(u.selected=l[0].skills),t=new lt({props:u}),P.push(()=>E(t,"selected",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};r&4&&(p.data=e[2]),!s&&r&1&&(s=!0,p.selected=e[0].skills,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function hn(l){let t,s,i;function a(e){l[20](e)}let u={multiple:!0};return l[0].unusableItems!==void 0&&(u.selected=l[0].unusableItems),t=new Vt({props:u}),P.push(()=>E(t,"selected",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.selected=e[0].unusableItems,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function bn(l){let t,s,i=l[0]&&It(l);return{c(){i&&i.c(),t=Te()},l(a){i&&i.l(a),t=Te()},m(a,u){i&&i.m(a,u),T(a,t,u),s=!0},p(a,[u]){a[0]?i?(i.p(a,u),u&1&&g(i,1)):(i=It(a),i.c(),g(i,1),i.m(t.parentNode,t)):i&&(tt(),h(i,1,1,()=>{i=null}),nt())},i(a){s||(g(i),s=!0)},o(a){h(i),s=!1},d(a){a&&c(t),i&&i.d(a)}}}function vn(l,t,s){let i,a;xe(l,Pt,m=>s(1,i=m)),xe(l,$t,m=>s(2,a=m));let{data:u}=t,e;Ut(()=>{e=Nt.subscribe(m=>{const X=[];s(0,u.attributes=u.attributes.filter(B=>m?.includes(B.name)?(X.push(B.name),!0):!1),u),m=m.filter(B=>!X.includes(B));for(const B of m)u.attributes.push(new _t(B,0,0))})}),Gt(()=>{e&&e()});function r(m){l.$$.not_equal(u.name,m)&&(u.name=m,s(0,u))}function p(m){l.$$.not_equal(u.prefix,m)&&(u.prefix=m,s(0,u))}function D(m){l.$$.not_equal(u.actionBar,m)&&(u.actionBar=m,s(0,u))}function f(m){l.$$.not_equal(u.group,m)&&(u.group=m,s(0,u))}function R(m){l.$$.not_equal(u.manaName,m)&&(u.manaName=m,s(0,u))}function _(m){l.$$.not_equal(u.maxLevel,m)&&(u.maxLevel=m,s(0,u))}const A=m=>m!==u;function I(m){l.$$.not_equal(u.parent,m)&&(u.parent=m,s(0,u))}function q(m){l.$$.not_equal(u.permission,m)&&(u.permission=m,s(0,u))}function M(m){l.$$.not_equal(u.expSources,m)&&(u.expSources=m,s(0,u))}function y(m){l.$$.not_equal(u.health,m)&&(u.health=m,s(0,u))}function d(m){l.$$.not_equal(u.mana,m)&&(u.mana=m,s(0,u))}function C(m,X,B,re){B[re]=m,s(0,u)}function z(m){l.$$.not_equal(u.manaRegen,m)&&(u.manaRegen=m,s(0,u))}function V(){u.skillTree=Kt(this),s(0,u)}function se(m){l.$$.not_equal(u.skills,m)&&(u.skills=m,s(0,u))}function W(m){l.$$.not_equal(u.icon,m)&&(u.icon=m,s(0,u))}function $(m){l.$$.not_equal(u.unusableItems,m)&&(u.unusableItems=m,s(0,u))}return l.$$set=m=>{"data"in m&&s(0,u=m.data)},l.$$.update=()=>{l.$$.dirty&1&&(u?.name&&Et(),u.save())},[u,i,a,r,p,D,f,R,_,A,I,q,M,y,d,C,z,V,se,W,$]}class kn extends Re{constructor(t){super(),Me(this,t,vn,bn,Ie,{data:0})}}function Mt(l,t,s){const i=l.slice();return i[2]=t[s],i}function St(l){let t,s=Ce(l[0]),i=[];for(let a=0;a<s.length;a+=1)i[a]=Lt(Mt(l,s,a));return{c(){t=F("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){t=U(a,"DIV",{class:!0});var u=pe(t);for(let e=0;e<i.length;e+=1)i[e].l(u);u.forEach(c),this.h()},h(){j(t,"class","wrapper svelte-1ihs233")},m(a,u){T(a,t,u);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null)},p(a,u){if(u&17){s=Ce(a[0]);let e;for(e=0;e<s.length;e+=1){const r=Mt(a,s,e);i[e]?i[e].p(r,u):(i[e]=Lt(r),i[e].c(),i[e].m(t,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=s.length}},d(a){a&&c(t),Ot(i,a)}}}function Lt(l){let t,s,i=l[2].name+"",a,u,e,r=l[2].base+"",p,D,f=l[2].scale+"",R,_,A,I,q;function M(){return l[5](l[2])}function y(){return l[6](l[2])}return{c(){t=F("div"),s=F("div"),a=me(i),u=S(),e=F("div"),p=me(r),D=me("+("),R=me(f),_=me(")"),A=S(),this.h()},l(d){t=U(d,"DIV",{class:!0,tabindex:!0,role:!0,"aria-label":!0,title:!0});var C=pe(t);s=U(C,"DIV",{class:!0});var z=pe(s);a=ce(z,i),z.forEach(c),u=L(C),e=U(C,"DIV",{class:!0});var V=pe(e);p=ce(V,r),D=ce(V,"+("),R=ce(V,f),_=ce(V,")"),V.forEach(c),A=L(C),C.forEach(c),this.h()},h(){j(s,"class","name svelte-1ihs233"),j(e,"class","value svelte-1ihs233"),j(t,"class","attr svelte-1ihs233"),j(t,"tabindex","0"),j(t,"role","button"),j(t,"aria-label","Remove Attribute"),j(t,"title","Remove Attribute")},m(d,C){T(d,t,C),G(t,s),G(s,a),G(t,u),G(t,e),G(e,p),G(e,D),G(e,R),G(e,_),G(t,A),I||(q=[ke(t,"click",M),ke(t,"keypress",y)],I=!0)},p(d,C){l=d,C&1&&i!==(i=l[2].name+"")&&Ze(a,i),C&1&&r!==(r=l[2].base+"")&&Ze(p,r),C&1&&f!==(f=l[2].scale+"")&&Ze(R,f)},d(d){d&&c(t),I=!1,mt(q)}}}function wn(l){let t,s,i;function a(e){l[8](e)}let u={};return l[2]!==void 0&&(u.value=l[2]),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&4&&(s=!0,p.value=e[2],N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function qn(l){let t,s,i,a,u,e,r,p="Add Attribute",D,f,R,_=l[0].length>0&&St(l);function A(q){l[7](q)}let I={label:"Attribute Name",placeholder:"Attribute Name"};return l[1]!==void 0&&(I.value=l[1]),s=new O({props:I}),P.push(()=>E(s,"value",A)),u=new O({props:{label:l[1]+" Value",$$slots:{default:[wn]},$$scope:{ctx:l}}}),{c(){_&&_.c(),t=S(),b(s.$$.fragment),a=S(),b(u.$$.fragment),e=S(),r=F("div"),r.textContent=p,this.h()},l(q){_&&_.l(q),t=L(q),v(s.$$.fragment,q),a=L(q),v(u.$$.fragment,q),e=L(q),r=U(q,"DIV",{class:!0,tabindex:!0,role:!0,"aria-label":!0,title:!0,"data-svelte-h":!0}),oe(r)!=="svelte-30duiw"&&(r.textContent=p),this.h()},h(){j(r,"class","btn svelte-1ihs233"),j(r,"tabindex","0"),j(r,"role","button"),j(r,"aria-label","Add Attribute"),j(r,"title","Add Attribute"),et(r,"disabled",!l[1])},m(q,M){_&&_.m(q,M),T(q,t,M),k(s,q,M),T(q,a,M),k(u,q,M),T(q,e,M),T(q,r,M),D=!0,f||(R=[ke(r,"click",l[3]),ke(r,"keypress",l[3])],f=!0)},p(q,[M]){q[0].length>0?_?_.p(q,M):(_=St(q),_.c(),_.m(t.parentNode,t)):_&&(_.d(1),_=null);const y={};!i&&M&2&&(i=!0,y.value=q[1],N(()=>i=!1)),s.$set(y);const d={};M&2&&(d.label=q[1]+" Value"),M&2052&&(d.$$scope={dirty:M,ctx:q}),u.$set(d),(!D||M&2)&&et(r,"disabled",!q[1])},i(q){D||(g(s.$$.fragment,q),g(u.$$.fragment,q),D=!0)},o(q){h(s.$$.fragment,q),h(u.$$.fragment,q),D=!1},d(q){q&&(c(t),c(a),c(e),c(r)),_&&_.d(q),w(s,q),w(u,q),f=!1,mt(R)}}}function Tn(l,t,s){let i,{value:a=[]}=t,u="";const e=_=>{u&&(_&&_.type==="keypress"&&_.key!=="Enter"||(s(0,a=[...a,i]),s(1,u="")))},r=_=>{s(0,a=a.filter(A=>A!==_))},p=_=>r(_),D=_=>r(_);function f(_){u=_,s(1,u)}function R(_){i=_,s(2,i),s(1,u)}return l.$$set=_=>{"value"in _&&s(0,a=_.value)},l.$$.update=()=>{l.$$.dirty&2&&s(2,i=new _t(u,0,0))},[a,u,i,e,r,p,D,f,R]}class Cn extends Re{constructor(t){super(),Me(this,t,Tn,qn,Ie,{value:0})}}function Dt(l){let t,s,i,a,u,e,r,p,D,f,R,_,A,I,q,M,y,d,C,z,V,se,W,$,m,X,B,re,K,Se="Requirements",fe,H,ge,Q,Z,$e,x,ee,te,ne,le,Y,ue,de="Attribute Requirements",ie,J,Le,he;function it(n){l[2](n)}let De={label:"Name",tooltip:"The name of the skill. This should not contain color codes"};l[0].name!==void 0&&(De.value=l[0].name),t=new O({props:De}),P.push(()=>E(t,"value",it));function at(n){l[3](n)}let Ae={label:"Type",tooltip:'The flavor text describing the skill such as "AOE utility" or whatever you want it to be'};l[0].type!==void 0&&(Ae.value=l[0].type),a=new O({props:Ae}),P.push(()=>E(a,"value",at));function st(n){l[4](n)}let Pe={label:"Max Level",type:"number",tooltip:"The maximum level the skill can reach"};l[0].maxLevel!==void 0&&(Pe.value=l[0].maxLevel),r=new O({props:Pe}),P.push(()=>E(r,"value",st)),f=new O({props:{label:"Cost",tooltip:"The amount of skill points needed to unlock and upgrade this skill",$$slots:{default:[In]},$$scope:{ctx:l}}}),_=new O({props:{label:"Cooldown",tooltip:"The time in seconds before the skill can be cast again (only works with the Cast trigger)",$$slots:{default:[Rn]},$$scope:{ctx:l}}}),I=new O({props:{label:"Cooldown Message",tooltip:"Whether to send a message when attempting to run the skill while in cooldown",$$slots:{default:[Mn]},$$scope:{ctx:l}}}),M=new O({props:{label:"Mana",tooltip:"The amount of mana it takes to cast the skill (only works with the Cast trigger)",$$slots:{default:[Sn]},$$scope:{ctx:l}}});function ut(n){l[9](n)}let Ne={label:"Cast Message",tooltip:"The message to display to players around the caster when the skill is cast. The radius of the area is in the config.yml options"};l[0].castMessage!==void 0&&(Ne.value=l[0].castMessage),d=new O({props:Ne}),P.push(()=>E(d,"value",ut));function rt(n){l[10](n)}let Ee={label:"Combo",tooltip:'The click combo to assign the skill (if enabled). Use L, R, S, LS, RS, P, Q and F for the types of clicks separated by spaces. For example, "L L R R" would work for 4 click combos.'};l[0].combo!==void 0&&(Ee.value=l[0].combo),V=new O({props:Ee}),P.push(()=>E(V,"value",rt));function be(n){l[11](n)}let Oe={};l[0].icon!==void 0&&(Oe.icon=l[0].icon),$=new Bt({props:Oe}),P.push(()=>E($,"icon",be)),B=new O({props:{label:"Incompatible",tooltip:"List of skills that must not be upgraded in order to upgrade this skill",$$slots:{default:[Ln]},$$scope:{ctx:l}}}),H=new O({props:{label:"Skill Requirement",tooltip:"The skill that needs to be upgraded before this one can be unlocked",$$slots:{default:[Dn]},$$scope:{ctx:l}}});function ot(n){l[16](n)}let Ve={label:"Skill Req Level",type:"number",intMode:!0,tooltip:"The level that the required skill needs to reach before this one can be unlocked"};l[0].skillReqLevel!==void 0&&(Ve.value=l[0].skillReqLevel),Q=new O({props:Ve}),P.push(()=>E(Q,"value",ot)),x=new O({props:{label:"Permission",tooltip:'Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.'+l[0].name+'"',$$slots:{default:[An]},$$scope:{ctx:l}}}),te=new O({props:{label:"Level Req",tooltip:"The class level the player needs to be before unlocking or upgrading this skill",$$slots:{default:[Pn]},$$scope:{ctx:l}}}),le=new O({props:{label:"Min Spent",tooltip:"The amount of skill points that need to be spent before upgrading this skill",$$slots:{default:[Nn]},$$scope:{ctx:l}}});function pt(n){l[20](n)}let Be={};return l[0].attributeRequirements!==void 0&&(Be.value=l[0].attributeRequirements),J=new Cn({props:Be}),P.push(()=>E(J,"value",pt)),{c(){b(t.$$.fragment),i=S(),b(a.$$.fragment),e=S(),b(r.$$.fragment),D=S(),b(f.$$.fragment),R=S(),b(_.$$.fragment),A=S(),b(I.$$.fragment),q=S(),b(M.$$.fragment),y=S(),b(d.$$.fragment),z=S(),b(V.$$.fragment),W=S(),b($.$$.fragment),X=S(),b(B.$$.fragment),re=S(),K=F("div"),K.textContent=Se,fe=S(),b(H.$$.fragment),ge=S(),b(Q.$$.fragment),$e=S(),b(x.$$.fragment),ee=S(),b(te.$$.fragment),ne=S(),b(le.$$.fragment),Y=S(),ue=F("div"),ue.textContent=de,ie=S(),b(J.$$.fragment),this.h()},l(n){v(t.$$.fragment,n),i=L(n),v(a.$$.fragment,n),e=L(n),v(r.$$.fragment,n),D=L(n),v(f.$$.fragment,n),R=L(n),v(_.$$.fragment,n),A=L(n),v(I.$$.fragment,n),q=L(n),v(M.$$.fragment,n),y=L(n),v(d.$$.fragment,n),z=L(n),v(V.$$.fragment,n),W=L(n),v($.$$.fragment,n),X=L(n),v(B.$$.fragment,n),re=L(n),K=U(n,"DIV",{class:!0,"data-svelte-h":!0}),oe(K)!=="svelte-eccz9k"&&(K.textContent=Se),fe=L(n),v(H.$$.fragment,n),ge=L(n),v(Q.$$.fragment,n),$e=L(n),v(x.$$.fragment,n),ee=L(n),v(te.$$.fragment,n),ne=L(n),v(le.$$.fragment,n),Y=L(n),ue=U(n,"DIV",{class:!0,"data-svelte-h":!0}),oe(ue)!=="svelte-maaans"&&(ue.textContent=de),ie=L(n),v(J.$$.fragment,n),this.h()},h(){j(K,"class","header svelte-mjz973"),j(ue,"class","header svelte-mjz973")},m(n,o){k(t,n,o),T(n,i,o),k(a,n,o),T(n,e,o),k(r,n,o),T(n,D,o),k(f,n,o),T(n,R,o),k(_,n,o),T(n,A,o),k(I,n,o),T(n,q,o),k(M,n,o),T(n,y,o),k(d,n,o),T(n,z,o),k(V,n,o),T(n,W,o),k($,n,o),T(n,X,o),k(B,n,o),T(n,re,o),T(n,K,o),T(n,fe,o),k(H,n,o),T(n,ge,o),k(Q,n,o),T(n,$e,o),k(x,n,o),T(n,ee,o),k(te,n,o),T(n,ne,o),k(le,n,o),T(n,Y,o),T(n,ue,o),T(n,ie,o),k(J,n,o),he=!0},p(n,o){const ae={};!s&&o&1&&(s=!0,ae.value=n[0].name,N(()=>s=!1)),t.$set(ae);const je={};!u&&o&1&&(u=!0,je.value=n[0].type,N(()=>u=!1)),a.$set(je);const ze={};!p&&o&1&&(p=!0,ze.value=n[0].maxLevel,N(()=>p=!1)),r.$set(ze);const He={};o&2097153&&(He.$$scope={dirty:o,ctx:n}),f.$set(He);const ye={};o&2097153&&(ye.$$scope={dirty:o,ctx:n}),_.$set(ye);const Fe={};o&2097153&&(Fe.$$scope={dirty:o,ctx:n}),I.$set(Fe);const Ue={};o&2097153&&(Ue.$$scope={dirty:o,ctx:n}),M.$set(Ue);const we={};!C&&o&1&&(C=!0,we.value=n[0].castMessage,N(()=>C=!1)),d.$set(we);const Ge={};!se&&o&1&&(se=!0,Ge.value=n[0].combo,N(()=>se=!1)),V.$set(Ge);const We={};!m&&o&1&&(m=!0,We.icon=n[0].icon,N(()=>m=!1)),$.$set(We);const Ke={};o&2097155&&(Ke.$$scope={dirty:o,ctx:n}),B.$set(Ke);const Qe={};o&2097155&&(Qe.$$scope={dirty:o,ctx:n}),H.$set(Qe);const Ye={};!Z&&o&1&&(Z=!0,Ye.value=n[0].skillReqLevel,N(()=>Z=!1)),Q.$set(Ye);const qe={};o&1&&(qe.tooltip='Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.'+n[0].name+'"'),o&2097153&&(qe.$$scope={dirty:o,ctx:n}),x.$set(qe);const Je={};o&2097153&&(Je.$$scope={dirty:o,ctx:n}),te.$set(Je);const Xe={};o&2097153&&(Xe.$$scope={dirty:o,ctx:n}),le.$set(Xe);const gt={};!Le&&o&1&&(Le=!0,gt.value=n[0].attributeRequirements,N(()=>Le=!1)),J.$set(gt)},i(n){he||(g(t.$$.fragment,n),g(a.$$.fragment,n),g(r.$$.fragment,n),g(f.$$.fragment,n),g(_.$$.fragment,n),g(I.$$.fragment,n),g(M.$$.fragment,n),g(d.$$.fragment,n),g(V.$$.fragment,n),g($.$$.fragment,n),g(B.$$.fragment,n),g(H.$$.fragment,n),g(Q.$$.fragment,n),g(x.$$.fragment,n),g(te.$$.fragment,n),g(le.$$.fragment,n),g(J.$$.fragment,n),he=!0)},o(n){h(t.$$.fragment,n),h(a.$$.fragment,n),h(r.$$.fragment,n),h(f.$$.fragment,n),h(_.$$.fragment,n),h(I.$$.fragment,n),h(M.$$.fragment,n),h(d.$$.fragment,n),h(V.$$.fragment,n),h($.$$.fragment,n),h(B.$$.fragment,n),h(H.$$.fragment,n),h(Q.$$.fragment,n),h(x.$$.fragment,n),h(te.$$.fragment,n),h(le.$$.fragment,n),h(J.$$.fragment,n),he=!1},d(n){n&&(c(i),c(e),c(D),c(R),c(A),c(q),c(y),c(z),c(W),c(X),c(re),c(K),c(fe),c(ge),c($e),c(ee),c(ne),c(Y),c(ue),c(ie)),w(t,n),w(a,n),w(r,n),w(f,n),w(_,n),w(I,n),w(M,n),w(d,n),w(V,n),w($,n),w(B,n),w(H,n),w(Q,n),w(x,n),w(te,n),w(le,n),w(J,n)}}}function In(l){let t,s,i;function a(e){l[5](e)}let u={};return l[0].cost!==void 0&&(u.value=l[0].cost),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].cost,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Rn(l){let t,s,i;function a(e){l[6](e)}let u={};return l[0].cooldown!==void 0&&(u.value=l[0].cooldown),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].cooldown,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Mn(l){let t,s,i;function a(e){l[7](e)}let u={};return l[0].cooldownMessage!==void 0&&(u.data=l[0].cooldownMessage),t=new ct({props:u}),P.push(()=>E(t,"data",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.data=e[0].cooldownMessage,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Sn(l){let t,s,i;function a(e){l[8](e)}let u={};return l[0].mana!==void 0&&(u.value=l[0].mana),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].mana,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Ln(l){let t,s,i;function a(e){l[13](e)}let u={multiple:!0,data:l[1].filter(l[12])};return l[0].incompatible!==void 0&&(u.selected=l[0].incompatible),t=new lt({props:u}),P.push(()=>E(t,"selected",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[12])),!s&&r&1&&(s=!0,p.selected=e[0].incompatible,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Dn(l){let t,s,i;function a(e){l[15](e)}let u={id:"skillReq",data:l[1].filter(l[14])};return l[0].skillReq!==void 0&&(u.selected=l[0].skillReq),t=new lt({props:u}),P.push(()=>E(t,"selected",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};r&3&&(p.data=e[1].filter(e[14])),!s&&r&1&&(s=!0,p.selected=e[0].skillReq,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function An(l){let t,s,i;function a(e){l[17](e)}let u={};return l[0].permission!==void 0&&(u.data=l[0].permission),t=new ct({props:u}),P.push(()=>E(t,"data",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.data=e[0].permission,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Pn(l){let t,s,i;function a(e){l[18](e)}let u={};return l[0].levelReq!==void 0&&(u.value=l[0].levelReq),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].levelReq,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function Nn(l){let t,s,i;function a(e){l[19](e)}let u={};return l[0].minSpent!==void 0&&(u.value=l[0].minSpent),t=new _e({props:u}),P.push(()=>E(t,"value",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.value=e[0].minSpent,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function En(l){let t,s,i=l[0]&&Dt(l);return{c(){i&&i.c(),t=Te()},l(a){i&&i.l(a),t=Te()},m(a,u){i&&i.m(a,u),T(a,t,u),s=!0},p(a,[u]){a[0]?i?(i.p(a,u),u&1&&g(i,1)):(i=Dt(a),i.c(),g(i,1),i.m(t.parentNode,t)):i&&(tt(),h(i,1,1,()=>{i=null}),nt())},i(a){s||(g(i),s=!0)},o(a){h(i),s=!1},d(a){a&&c(t),i&&i.d(a)}}}function On(l,t,s){let i;xe(l,$t,$=>s(1,i=$));let{data:a}=t;function u($){l.$$.not_equal(a.name,$)&&(a.name=$,s(0,a))}function e($){l.$$.not_equal(a.type,$)&&(a.type=$,s(0,a))}function r($){l.$$.not_equal(a.maxLevel,$)&&(a.maxLevel=$,s(0,a))}function p($){l.$$.not_equal(a.cost,$)&&(a.cost=$,s(0,a))}function D($){l.$$.not_equal(a.cooldown,$)&&(a.cooldown=$,s(0,a))}function f($){l.$$.not_equal(a.cooldownMessage,$)&&(a.cooldownMessage=$,s(0,a))}function R($){l.$$.not_equal(a.mana,$)&&(a.mana=$,s(0,a))}function _($){l.$$.not_equal(a.castMessage,$)&&(a.castMessage=$,s(0,a))}function A($){l.$$.not_equal(a.combo,$)&&(a.combo=$,s(0,a))}function I($){l.$$.not_equal(a.icon,$)&&(a.icon=$,s(0,a))}const q=$=>$!==a;function M($){l.$$.not_equal(a.incompatible,$)&&(a.incompatible=$,s(0,a))}const y=$=>$!==a;function d($){l.$$.not_equal(a.skillReq,$)&&(a.skillReq=$,s(0,a))}function C($){l.$$.not_equal(a.skillReqLevel,$)&&(a.skillReqLevel=$,s(0,a))}function z($){l.$$.not_equal(a.permission,$)&&(a.permission=$,s(0,a))}function V($){l.$$.not_equal(a.levelReq,$)&&(a.levelReq=$,s(0,a))}function se($){l.$$.not_equal(a.minSpent,$)&&(a.minSpent=$,s(0,a))}function W($){l.$$.not_equal(a.attributeRequirements,$)&&(a.attributeRequirements=$,s(0,a))}return l.$$set=$=>{"data"in $&&s(0,a=$.data)},l.$$.update=()=>{l.$$.dirty&1&&(a?.name&&Et(),a.save())},[a,i,u,e,r,p,D,f,R,_,A,I,q,M,y,d,C,z,V,se,W]}class Vn extends Re{constructor(t){super(),Me(this,t,On,En,Ie,{data:0})}}function At(l){let t,s,i;return{c(){t=F("a"),s=me("auto_fix"),this.h()},l(a){t=U(a,"A",{href:!0,class:!0});var u=pe(t);s=ce(u,"auto_fix"),u.forEach(c),this.h()},h(){j(t,"href",i=wt+"/skill/"+l[0].data.name),j(t,"class","material-symbols-rounded chip edit-skill svelte-191pm8d")},m(a,u){T(a,t,u),G(t,s)},p(a,u){u&1&&i!==(i=wt+"/skill/"+a[0].data.name)&&j(t,"href",i)},d(a){a&&c(t)}}}function Bn(l){let t,s,i;function a(e){l[2](e)}let u={};return l[0].data!==void 0&&(u.data=l[0].data),t=new Vn({props:u}),P.push(()=>E(t,"data",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.data=e[0].data,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function jn(l){let t,s,i;function a(e){l[1](e)}let u={};return l[0].data!==void 0&&(u.data=l[0].data),t=new kn({props:u}),P.push(()=>E(t,"data",a)),{c(){b(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,r){k(t,e,r),i=!0},p(e,r){const p={};!s&&r&1&&(s=!0,p.data=e[0].data,N(()=>s=!1)),t.$set(p)},i(e){i||(g(t.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),i=!1},d(e){w(t,e)}}}function zn(l){let t,s,i,a=l[0]?.data?.name+"",u,e,r,p,D,f,R,_,A;document.title=t="ProSkillAPI Dynamic Editor - "+l[0].data.name;let I=l[0]?.data instanceof ht&&At(l);const q=[jn,Bn],M=[];function y(d,C){return d[0]?.data instanceof Ft?0:1}return R=y(l),_=M[R]=q[R](l),{c(){s=S(),i=F("h1"),u=me(a),e=S(),I&&I.c(),r=S(),p=F("hr"),D=S(),f=F("div"),_.c(),this.h()},l(d){Qt("svelte-a7qsnu",document.head).forEach(c),s=L(d),i=U(d,"H1",{class:!0});var z=pe(i);u=ce(z,a),e=L(z),I&&I.l(z),z.forEach(c),r=L(d),p=U(d,"HR",{}),D=L(d),f=U(d,"DIV",{class:!0});var V=pe(f);_.l(V),V.forEach(c),this.h()},h(){j(i,"class","svelte-191pm8d"),j(f,"class","container svelte-191pm8d")},m(d,C){T(d,s,C),T(d,i,C),G(i,u),G(i,e),I&&I.m(i,null),T(d,r,C),T(d,p,C),T(d,D,C),T(d,f,C),M[R].m(f,null),A=!0},p(d,[C]){(!A||C&1)&&t!==(t="ProSkillAPI Dynamic Editor - "+d[0].data.name)&&(document.title=t),(!A||C&1)&&a!==(a=d[0]?.data?.name+"")&&Ze(u,a),d[0]?.data instanceof ht?I?I.p(d,C):(I=At(d),I.c(),I.m(i,null)):I&&(I.d(1),I=null);let z=R;R=y(d),R===z?M[R].p(d,C):(tt(),h(M[z],1,1,()=>{M[z]=null}),nt(),_=M[R],_?_.p(d,C):(_=M[R]=q[R](d),_.c()),g(_,1),_.m(f,null))},i(d){A||(g(_),A=!0)},o(d){h(_),A=!1},d(d){d&&(c(s),c(i),c(r),c(p),c(D),c(f)),I&&I.d(),M[R].d()}}}function Hn(l,t,s){let{data:i}=t;function a(e){l.$$.not_equal(i.data,e)&&(i.data=e,s(0,i))}function u(e){l.$$.not_equal(i.data,e)&&(i.data=e,s(0,i))}return l.$$set=e=>{"data"in e&&s(0,i=e.data)},[i,a,u]}class Jn extends Re{constructor(t){super(),Me(this,t,Hn,zn,Ie,{data:0})}}export{Jn as component,Yn as universal};
