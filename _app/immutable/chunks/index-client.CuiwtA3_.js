var Hn=Array.isArray,Yn=Array.from,jn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Bn=Object.prototype,Un=Array.prototype,Xt=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const tn=()=>{};function Gn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,Y=8,ut=16,m=32,Q=64,nt=128,N=256,K=512,h=1024,g=2048,j=4096,C=8192,q=16384,nn=32768,mt=65536,Kn=1<<17,rn=1<<19,At=1<<20,ht=Symbol("$state"),$n=Symbol("legacy props"),Zn=Symbol("");function It(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function zn(t,n){return t!==n}function gt(t){return!en(t,this.v)}function sn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let B=!1;function tr(){B=!0}const nr=1,rr=2,er=4,sr=8,lr=16,ar=1,ur=2,or=4,ir=8,fr=16,_r=1,cr=2,vr=4,pr=1,hr=2,_n="[",cn="[!",vn="]",Ot={},dr=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:It,version:0};return r}function Er(t){return pn(ot(t))}function yr(t,n=!1){var e;const r=ot(t);return n||(r.equals=gt),B&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function pn(t){return o!==null&&o.f&y&&(T===null?Nn([t]):T.push(t)),t}function wr(t,n){return o!==null&&_t()&&o.f&(y|ut)&&(T===null||!T.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v=n,t.version=Kt(),Rt(t,g),_t()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(A(u,g),tt(u)):I===null?Dn([t]):I.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&g||!e&&a===u||(A(a,n),f&(h|N)&&(f&y?Rt(a,j):tt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function Tr(t){S=t}let w;function F(t){if(t===null)throw St(),Ot;return w=t}function mr(){return F(D(w))}function Ar(t){if(S){if(D(w)!==null)throw St(),Ot;w=t}}function Ir(t=1){if(S){for(var n=t,r=w;n--;)r=D(r);w=r}}function gr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=D(n);n.remove(),n=e}}var dt,dn,kt,Nt;function Or(){if(dt===void 0){dt=window,dn=document;var t=Element.prototype,n=Node.prototype;kt=pt(n,"firstChild").get,Nt=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return kt.call(t)}function D(t){return Nt.call(t)}function Rr(t,n){if(!S)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),F(e),e}return F(r),r}function Sr(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?D(r):r}return w}function kr(t,n=1,r=!1){let e=S?w:t;for(var s;n--;)s=e,e=D(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function Nr(t){t.textContent=""}function En(t){var n=y|g;u===null?n|=N:u.f|=At;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:It,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Dr(t){const n=En(t);return n.equals=gt,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):k(e)}}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function bt(t){var n,r=u;J(yn(t));try{Dt(t),n=$t(t)}finally{J(r)}return n}function xt(t){var n=bt(t),r=(R||t.f&N)&&t.deps!==null?j:h;A(t,r),t.equals(n)||(t.v=n,t.version=Kt())}function it(t){Dt(t),H(t,0),A(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&o===null&&an(),o!==null&&o.f&N&&ln(),ft&&sn()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&Q)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=b;try{Et(!0),X(a),a.f|=nn}catch(_){throw k(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&At)===0;if(!p&&!s&&e&&(l!==null&&wn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function br(t){const n=P(Y,null,!1);return A(n,h),n.teardown=t,n}function Tn(t){Ct();var n=u!==null&&(u.f&m)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=qt(t);return e}}function xr(t){return Ct(),mn(t)}function Cr(t){const n=P(Q,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function qt(t){return P(Tt,t,!1)}function mn(t){return P(Y,t,!0)}function qr(t){return An(t)}function An(t,n=0){return P(Y|ut|n,t,!0)}function Pr(t,n=!0){return P(Y|m,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function In(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}Lt(t,n&&!r),Ft(t),H(t,0),A(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Ht(t,r,!0),On(r,()=>{k(t),n&&n()})}function On(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ht(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&mt)!==0||(e.f&m)!==0;Ht(e,n,l?r:!1),e=s}}}function Fr(t){Yt(t,!0)}function Yt(t,n){if(t.f&C){U(t)&&X(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&mt)!==0||(r.f&m)!==0;Yt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,st=[],lt=[];function jt(){$=!1;const t=st.slice();st=[],wt(t)}function Bt(){Z=!1;const t=lt.slice();lt=[],wt(t)}function Lr(t){$||($=!0,queueMicrotask(jt)),st.push(t)}function Mr(t){Z||(Z=!0,Rn(Bt)),lt.push(t)}function Sn(){$&&jt(),Z&&Bt()}function Ut(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Vt=0,kn=1;let V=!1,G=Vt,L=!1,M=null,b=!1,ft=!1;function Et(t){b=t}function yt(t){ft=t}let O=[],x=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let T=null;function Nn(t){T=t}let v=null,E=0,I=null;function Dn(t){I=t}let Gt=0,R=!1,i=null;function Kt(){return++Gt}function _t(){return!B||i!==null&&i.l===null}function U(t){var a,f;var n=t.f;if(n&g)return!0;if(n&j){var r=t.deps,e=(n&N)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(U(l)&&xt(l),e&&u!==null&&!R&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!R)&&A(t,h)}return!1}function bn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function xn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&nt)===0)}function W(t,n,r,e){if(V){if(r===null&&(V=!1),xn(n))throw t;return}r!==null&&(V=!0);{bn(t,n);return}}function $t(t){var vt;var n=v,r=E,e=I,s=o,l=R,a=T,f=i,p=t.f;v=null,E=0,I=null,o=p&(m|Q)?null:t,R=!b&&(p&N)!==0,T=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(H(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!R)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(H(t,E),_.length=E);return d}finally{v=n,E=r,I=e,o=s,R=l,T=a,i=f}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(A(n,j),n.f&(N|K)||(n.f^=K),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function X(t){var n=t.f;if(!(n&q)){A(t,h);var r=u,e=i;u=t;try{n&ut?In(t):Lt(t),Ft(t),Pt(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.version=Gt}catch(l){W(l,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(x>1e3){x=0;try{un()}catch(t){if(M!==null)W(t,M,null);else throw t}}x++}function zt(t){var n=t.length;if(n!==0){Zt();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Jt(s,l),qn(l)}}finally{b=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|C)))try{U(e)&&(X(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(s){W(s,e,null,e.ctx)}}}function Pn(){if(L=!1,x>1001)return;const t=O;O=[],zt(t),L||(x=0,M=null)}function tt(t){G===Vt&&(L||(L=!0,queueMicrotask(Pn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Q|m)){if(!(r&h))return;n.f^=h}}O.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&C))if(s&Y){if(l)r.f^=h;else try{U(r)&&X(r)}catch(c){W(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Jt(p,n)}function Qt(t){var n=G,r=O;try{Zt();const s=[];G=kn,O=s,L=!1,zt(r);var e=t==null?void 0:t();return Sn(),(O.length>0||s.length>0)&&Qt(),x=0,M=null,e}finally{G=n,O=r}}async function Hr(){await Promise.resolve(),Qt()}function Yr(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=bt(t);return it(t),e}if(o!==null){T!==null&&T.includes(t)&&on();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),I!==null&&u!==null&&u.f&h&&!(u.f&m)&&I.includes(t)&&(A(u,g),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,U(l)&&xt(l)),t.v}function ct(t){const n=o;try{return o=null,t()}finally{o=n}}const Fn=~(g|j|h);function A(t,n){t.f=t.f&Fn|n}function jr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},B&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function Br(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),qt(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return t||{}}function Ur(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Vr(t,n,r){if(t==null)return n(void 0),r&&r(void 0),tn;const e=ct(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}function Ln(t){i===null&&Ut(),B&&i.l!==null?Mn(i).m.push(t):Tn(()=>{const n=ct(t);if(typeof n=="function")return n})}function Gr(t){i===null&&Ut(),Ln(()=>()=>ct(t))}function Mn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{dn as $,dt as A,Bn as B,Un as C,ot as D,mt as E,Wn as F,wr as G,pt as H,u as I,Xn as J,Xt as K,Hn as L,cn as M,gr as N,F as O,Tr as P,Fr as Q,mn as R,ht as S,Lr as T,dr as U,br as V,yr as W,Vr as X,Qn as Y,Kn as Z,or as _,mr as a,gt as a0,m as a1,Q as a2,J as a3,ar as a4,B as a5,ur as a6,ir as a7,$n as a8,Dr as a9,Ir as aA,C as aB,hn as aC,Ht as aD,On as aE,k as aF,nr as aG,rr as aH,er as aI,sr as aJ,lr as aK,Wt as aL,Mr as aM,Zn as aN,ut as aO,nn as aP,_r as aQ,Vn as aR,cr as aS,vr as aT,fr as aa,Qt as ab,jn as ac,Hr as ad,Er as ae,et as af,Nr as ag,z as ah,o as ai,rt as aj,rn as ak,_n as al,D as am,pr as an,hr as ao,Or as ap,Ot as aq,vn as ar,St as as,Jn as at,Yn as au,Cr as av,_t as aw,zn as ax,en as ay,Gr as az,An as b,Pr as c,w as d,qt as e,jr as f,Sr as g,S as h,Br as i,Rr as j,Tn as k,i as l,ct as m,Gn as n,Ln as o,gn as p,wt as q,Ar as r,kr as s,qr as t,xr as u,Yr as v,Ur as w,En as x,tr as y,tn as z};
