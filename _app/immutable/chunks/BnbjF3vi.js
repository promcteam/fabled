var Zn=Array.isArray,on=Array.prototype.indexOf,Jn=Array.from,Qn=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,fn=Object.getOwnPropertyDescriptors,Xn=Object.prototype,tr=Array.prototype,_n=Object.getPrototypeOf;function nr(t){return typeof t=="function"}const q=()=>{};function rr(t){return t()}function vt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,It=4,G=8,pt=16,A=32,$=64,J=128,k=256,Q=512,h=1024,g=2048,D=4096,L=8192,M=16384,cn=32768,Rt=65536,er=1<<17,vn=1<<19,St=1<<20,mt=Symbol("$state"),sr=Symbol("legacy props"),lr=Symbol("");function Ot(t){return t===this.v}function kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ar(t,n){return t!==n}function Dt(t){return!kt(t,this.v)}function pn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ur(){throw new Error("https://svelte.dev/e/hydration_failed")}function or(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ir(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function fr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function En(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function wn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let K=!1;function _r(){K=!0}const cr=1,vr=2,pr=4,hr=8,dr=16,yr=1,Er=2,wr=4,Tr=8,mr=16,br=1,Ar=2,gr=4,Ir=1,Rr=2,Tn="[",mn="[!",bn="]",xt={},Sr=Symbol();function ht(t,n){var r={f:0,v:t,reactions:null,equals:Ot,rv:0,wv:0};return r}function Or(t){return An(ht(t))}function kr(t,n=!1){var e;const r=ht(t);return n||(r.equals=Dt),K&&c!==null&&c.l!==null&&((e=c.l).s??(e.s=[])).push(r),r}function An(t){return _!==null&&_.f&E&&(m===null?Mn([t]):m.push(t)),t}function Dr(t,n){return _!==null&&st()&&_.f&(E|pt)&&(m===null||!m.includes(t))&&wn(),gn(t,n)}function gn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Qt(),Nt(t,g),st()&&p!==null&&p.f&h&&!(p.f&(A|$))&&(b===null?Yn([t]):b.push(t))),n}function Nt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,l=0;l<s;l++){var a=r[l],u=a.f;u&g||!e&&a===p||(T(a,n),u&(h|k)&&(u&E?Nt(a,D):at(a)))}}function Ct(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function xr(t){S=t}let w;function B(t){if(t===null)throw Ct(),xt;return w=t}function Nr(){return B(x(w))}function Cr(t){if(S){if(x(w)!==null)throw Ct(),xt;w=t}}function qr(t=1){if(S){for(var n=t,r=w;n--;)r=x(r);w=r}}function Pr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===bn){if(t===0)return n;t-=1}else(r===Tn||r===mn)&&(t+=1)}var e=x(n);n.remove(),n=e}}var bt,In,qt,Pt;function Fr(){if(bt===void 0){bt=window,In=document;var t=Element.prototype,n=Node.prototype;qt=Tt(n,"firstChild").get,Pt=Tt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ot(t=""){return document.createTextNode(t)}function it(t){return qt.call(t)}function x(t){return Pt.call(t)}function Lr(t,n){if(!S)return it(t);var r=it(w);if(r===null)r=w.appendChild(ot());else if(n&&r.nodeType!==3){var e=ot();return r==null||r.before(e),B(e),e}return B(r),r}function Mr(t,n){if(!S){var r=it(t);return r instanceof Comment&&r.data===""?x(r):r}return w}function Yr(t,n=1,r=!1){let e=S?w:t;for(var s;n--;)s=e,e=x(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=ot();return e===null?s==null||s.after(a):e.before(a),B(a),a}return B(e),e}function Hr(t){t.textContent=""}function Rn(t){var n=E|g;p===null?n|=k:p.f|=St;var r=_!==null&&_.f&E?_:null;const e={children:null,ctx:c,deps:null,equals:Ot,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??p};return r!==null&&(r.children??(r.children=[])).push(e),e}function Br(t){const n=Rn(t);return n.equals=Dt,n}function Ft(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&E?dt(e):O(e)}}}function Sn(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Lt(t){var n,r=p;rt(Sn(t));try{Ft(t),n=tn(t)}finally{rt(r)}return n}function Mt(t){var n=Lt(t),r=(R||t.f&k)&&t.deps!==null?D:h;T(t,r),t.equals(n)||(t.v=n,t.wv=Qt())}function dt(t){Ft(t),V(t,0),T(t,M),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Yt(t){p===null&&_===null&&dn(),_!==null&&_.f&k&&hn(),yt&&pn()}function On(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var s=(t&$)!==0,l=p,a={ctx:c,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var u=P;try{At(!0),Et(a),a.f|=cn}catch(v){throw O(a),v}finally{At(u)}}else n!==null&&at(a);var i=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(St|J))===0;if(!i&&!s&&e&&(l!==null&&On(a,l),_!==null&&_.f&E)){var o=_;(o.children??(o.children=[])).push(a)}return a}function Ur(t){const n=Y(G,null,!1);return T(n,h),n.teardown=t,n}function kn(t){Yt();var n=p!==null&&(p.f&A)!==0&&c!==null&&!c.m;if(n){var r=c;(r.e??(r.e=[])).push({fn:t,effect:p,reaction:_})}else{var e=Ht(t);return e}}function jr(t){return Yt(),Dn(t)}function Vr(t){const n=Y($,t,!0);return(r={})=>new Promise(e=>{r.outro?Cn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Ht(t){return Y(It,t,!1)}function Dn(t){return Y(G,t,!0)}function Gr(t){return xn(t)}function xn(t,n=0){return Y(G|pt|n,t,!0)}function $r(t,n=!0){return Y(G|A,t,!0,n)}function Bt(t){var n=t.teardown;if(n!==null){const r=yt,e=_;gt(!0),nt(null);try{n.call(null)}finally{gt(r),nt(e)}}}function Ut(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)dt(n[r])}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function Nn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&vn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:x(e);e.remove(),e=l}r=!0}jt(t,n&&!r),Ut(t),V(t,0),T(t,M);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Bt(t);var u=t.parent;u!==null&&u.first!==null&&Vt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Vt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Cn(t,n){var r=[];Gt(t,r,!0),qn(r,()=>{O(t),n&&n()})}function qn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Gt(t,n,r){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Rt)!==0||(e.f&A)!==0;Gt(e,n,l?r:!1),e=s}}}function Kr(t){$t(t,!0)}function $t(t,n){if(t.f&L){t.f^=L,t.f&h||(t.f^=h),z(t)&&(T(t,g),at(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Rt)!==0||(r.f&A)!==0;$t(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Pn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let X=!1,tt=!1,ft=[],_t=[];function Kt(){X=!1;const t=ft.slice();ft=[],vt(t)}function zt(){tt=!1;const t=_t.slice();_t=[],vt(t)}function zr(t){X||(X=!0,queueMicrotask(Kt)),ft.push(t)}function Wr(t){tt||(tt=!0,Pn(zt)),_t.push(t)}function Fn(){X&&Kt(),tt&&zt()}function Wt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Zt=0,Ln=1;let W=!1,Z=Zt,U=!1,j=null,P=!1,yt=!1;function At(t){P=t}function gt(t){yt=t}let I=[],F=0;let _=null;function nt(t){_=t}let p=null;function rt(t){p=t}let m=null;function Mn(t){m=t}let d=null,y=0,b=null;function Yn(t){b=t}let Jt=1,et=0,R=!1,c=null;function Qt(){return++Jt}function st(){return!K||c!==null&&c.l===null}function z(t){var o;var n=t.f;if(n&g)return!0;if(n&D){var r=t.deps,e=(n&k)!==0;if(r!==null){var s,l,a=(n&Q)!==0,u=e&&p!==null&&!R,i=r.length;if(a||u){for(s=0;s<i;s++)l=r[s],(a||!((o=l==null?void 0:l.reactions)!=null&&o.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=Q)}for(s=0;s<i;s++)if(l=r[s],z(l)&&Mt(l),l.wv>t.wv)return!0}(!e||p!==null&&!R)&&T(t,h)}return!1}function Hn(t,n){for(var r=n;r!==null;){if(r.f&J)try{r.fn(t);return}catch{r.f^=J}r=r.parent}throw W=!1,t}function Bn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&J)===0)}function lt(t,n,r,e){if(W){if(r===null&&(W=!1),Bn(n))throw t;return}r!==null&&(W=!0);{Hn(t,n);return}}function Xt(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&E?Xt(l,n,r+1):n===l&&(r===0?T(l,g):l.f&h&&T(l,D),at(l))}}function tn(t){var H;var n=d,r=y,e=b,s=_,l=R,a=m,u=c,i=t.f;d=null,y=0,b=null,_=i&(A|$)?null:t,R=!P&&(i&k)!==0,m=null,c=t.ctx,et++;try{var o=(0,t.fn)(),v=t.deps;if(d!==null){var f;if(V(t,y),v!==null&&y>0)for(v.length=y+d.length,f=0;f<d.length;f++)v[y+f]=d[f];else t.deps=v=d;if(!R)for(f=y;f<v.length;f++)((H=v[f]).reactions??(H.reactions=[])).push(t)}else v!==null&&y<v.length&&(V(t,y),v.length=y);if(st()&&b!==null&&!(t.f&(E|D|g)))for(f=0;f<b.length;f++)Xt(b[f],t);return s!==null&&et++,o}finally{d=n,y=r,b=e,_=s,R=l,m=a,c=u}}function Un(t,n){let r=n.reactions;if(r!==null){var e=on.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&E&&(d===null||!d.includes(n))&&(T(n,D),n.f&(k|Q)||(n.f^=Q),V(n,0))}function V(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Un(t,r[e])}function Et(t){var n=t.f;if(!(n&M)){T(t,h);var r=p,e=c;p=t;try{n&pt?Nn(t):jt(t),Ut(t),Bt(t);var s=tn(t);t.teardown=typeof s=="function"?s:null,t.wv=Jt;var l=t.deps,a}catch(u){lt(u,t,r,e||t.ctx)}finally{p=r}}}function nn(){if(F>1e3){F=0;try{yn()}catch(t){if(j!==null)lt(t,j,null);else throw t}}F++}function rn(t){var n=t.length;if(n!==0){nn();var r=P;P=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];en(s,l),jn(l)}}finally{P=r}}}function jn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(M|L)))try{z(e)&&(Et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Vt(e):e.fn=null))}catch(s){lt(s,e,null,e.ctx)}}}function Vn(){if(U=!1,F>1001)return;const t=I;I=[],rn(t),U||(F=0,j=null)}function at(t){Z===Zt&&(U||(U=!0,queueMicrotask(Vn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|A)){if(!(r&h))return;n.f^=h}}I.push(n)}function en(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&h)!==0,u=r.next;if(!a&&!(s&L))if(s&G){if(l)r.f^=h;else try{z(r)&&Et(r)}catch(f){lt(f,r,null,r.ctx)}var i=r.first;if(i!==null){r=i;continue}}else s&It&&e.push(r);if(u===null){let f=r.parent;for(;f!==null;){if(t===f)break t;var o=f.next;if(o!==null){r=o;continue t}f=f.parent}}r=u}for(var v=0;v<e.length;v++)i=e[v],n.push(i),en(i,n)}function sn(t){var n=Z,r=I;try{nn();const s=[];Z=Ln,I=s,U=!1,rn(r);var e=t==null?void 0:t();return Fn(),(I.length>0||s.length>0)&&sn(),F=0,j=null,e}finally{Z=n,I=r}}async function Zr(){await Promise.resolve(),sn()}function Jr(t){var v;var n=t.f,r=(n&E)!==0;if(r&&n&M){var e=Lt(t);return dt(t),e}if(_!==null){m!==null&&m.includes(t)&&En();var s=_.deps;t.rv<et&&(t.rv=et,d===null&&s!==null&&s[y]===t?y++:d===null?d=[t]:d.push(t))}else if(r&&t.deps===null)for(var l=t,a=l.parent,u=l;a!==null;)if(a.f&E){var i=a;u=i,a=i.parent}else{var o=a;(v=o.deriveds)!=null&&v.includes(u)||(o.deriveds??(o.deriveds=[])).push(u);break}return r&&(l=t,z(l)&&Mt(l)),t.v}function wt(t){const n=_;try{return _=null,t()}finally{_=n}}const Gn=~(g|D|h);function T(t,n){t.f=t.f&Gn|n}function Qr(t,n=!1,r){c={p:c,c:null,e:null,m:!1,s:t,x:null,l:null},K&&!n&&(c.l={s:null,u:null,r1:[],r2:ht(!1)})}function Xr(t){const n=c;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=p,e=_;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];rt(l.effect),nt(l.reaction),Ht(l.fn)}}finally{rt(r),nt(e)}}c=n.p,n.m=!0}return t||{}}function te(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(mt in t)ct(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&mt in r&&ct(r)}}}function ct(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ct(t[e],n)}catch{}const r=_n(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=fn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function ln(t,n,r){if(t==null)return n(void 0),r&&r(void 0),q;const e=wt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}const C=[];function $n(t,n){return{subscribe:Kn(t,n).subscribe}}function Kn(t,n=q){let r=null;const e=new Set;function s(u){if(kt(t,u)&&(t=u,r)){const i=!C.length;for(const o of e)o[1](),C.push(o,t);if(i){for(let o=0;o<C.length;o+=2)C[o][0](C[o+1]);C.length=0}}}function l(u){s(u(t))}function a(u,i=q){const o=[u,i];return e.add(o),e.size===1&&(r=n(s,l)||q),u(t),()=>{e.delete(o),e.size===0&&r&&(r(),r=null)}}return{set:s,update:l,subscribe:a}}function ne(t,n,r){const e=!Array.isArray(t),s=e?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=n.length<2;return $n(r,(a,u)=>{let i=!1;const o=[];let v=0,f=q;const H=()=>{if(v)return;f();const N=n(e?o[0]:o,a,u);l?a(N):f=typeof N=="function"?N:q},an=s.map((N,ut)=>ln(N,un=>{o[ut]=un,v&=~(1<<ut),i&&H()},()=>{v|=1<<ut}));return i=!0,H(),function(){vt(an),f(),i=!1}})}function re(t){let n;return ln(t,r=>n=r)(),n}function zn(t){c===null&&Wt(),K&&c.l!==null?Wn(c).m.push(t):kn(()=>{const n=wt(t);if(typeof n=="function")return n})}function ee(t){c===null&&Wt(),zn(()=>()=>wt(t))}function Wn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{In as $,Kn as A,bt as B,Xn as C,tr as D,Rt as E,ht as F,ir as G,Dr as H,Tt as I,p as J,fr as K,_n as L,Zn as M,mn as N,Pr as O,B as P,xr as Q,Kr as R,mt as S,Dn as T,Sr as U,zr as V,kr as W,ln as X,re as Y,Ur as Z,Qn as _,Nr as a,or as a0,er as a1,wr as a2,Dt as a3,A as a4,$ as a5,rt as a6,yr as a7,K as a8,Er as a9,ne as aA,st as aB,ar as aC,kt as aD,L as aE,cr as aF,gn as aG,vr as aH,Gt as aI,qn as aJ,O as aK,pr as aL,hr as aM,dr as aN,fn as aO,Wr as aP,lr as aQ,pt as aR,cn as aS,br as aT,nr as aU,Ar as aV,gr as aW,Tr as aa,sr as ab,Br as ac,mr as ad,sn as ae,Zr as af,Or as ag,it as ah,Hr as ai,nt as aj,_ as ak,ot as al,vn as am,Tn as an,x as ao,Ir as ap,Rr as aq,Fr as ar,xt as as,bn as at,Ct as au,ur as av,Jn as aw,Vr as ax,qr as ay,ee as az,xn as b,$r as c,w as d,Ht as e,Qr as f,Xr as g,S as h,kn as i,c as j,wt as k,vt as l,Jr as m,te as n,zn as o,Cn as p,Rn as q,rr as r,_r as s,Mr as t,jr as u,Gr as v,Lr as w,Cr as x,Yr as y,q as z};
