var Vn=Array.isArray,tn=Array.prototype.indexOf,Gn=Array.from,$n=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,zn=Object.prototype,Kn=Array.prototype,rn=Object.getPrototypeOf;function Zn(t){return typeof t=="function"}const P=()=>{};function Jn(t){return t()}function ct(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,At=4,rt=8,_t=16,R=32,j=64,K=128,w=256,Z=512,E=1024,O=2048,q=4096,F=8192,et=16384,en=32768,bt=65536,Qn=1<<17,sn=1<<19,It=1<<20,yt=Symbol("$state"),Wn=Symbol("legacy props"),Xn=Symbol("");function Rt(t){return t===this.v}function xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function tr(t,n){return t!==n}function Ot(t){return!xt(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function un(t){throw new Error("https://svelte.dev/e/effect_orphan")}function on(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function nr(){throw new Error("https://svelte.dev/e/hydration_failed")}function rr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function er(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function sr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let U=!1;function ar(){U=!0}const lr=1,ur=2,or=4,ir=8,fr=16,cr=1,_r=2,vr=4,pr=8,hr=16,dr=1,Er=2,yr=4,wr=1,gr=2,_n="[",vn="[!",pn="]",kt={},Tr=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Dt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let c=null;function wt(t){c=t}function mr(t,n=!1,r){c={p:c,c:null,e:null,m:!1,s:t,x:null,l:null},U&&!n&&(c.l={s:null,u:null,r1:[],r2:vt(!1)})}function Ar(t){const n=c;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var r=_,e=i;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];X(a.effect),W(a.reaction),Yt(a.fn)}}finally{X(r),W(e)}}c=n.p,n.m=!0}return t||{}}function st(){return!U||c!==null&&c.l===null}function vt(t,n){var r={f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0};return r}function br(t){return hn(vt(t))}function Ir(t,n=!1){var e;const r=vt(t);return n||(r.equals=Ot),U&&c!==null&&c.l!==null&&((e=c.l).s??(e.s=[])).push(r),r}function hn(t){return i!==null&&!g&&(i.f&T)!==0&&(A===null?kn([t]):A.push(t)),t}function Rr(t,n){return i!==null&&!g&&st()&&(i.f&(T|_t))!==0&&(A===null||!A.includes(t))&&cn(),dn(t,n)}function dn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),Nt(t,O),st()&&_!==null&&(_.f&E)!==0&&(_.f&(R|j))===0&&(I===null?Sn([t]):I.push(t))),n}function Nt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,a=0;a<s;a++){var l=r[a],o=l.f;(o&O)===0&&(!e&&l===_||(b(l,n),(o&(E|w))!==0&&((o&T)!==0?Nt(l,q):lt(l))))}}let k=!1;function xr(t){k=t}let m;function Y(t){if(t===null)throw St(),kt;return m=t}function Or(){return Y(D(m))}function kr(t){if(k){if(D(m)!==null)throw St(),kt;m=t}}function Sr(t=1){if(k){for(var n=t,r=m;n--;)r=D(r);m=r}}function Dr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===pn){if(t===0)return n;t-=1}else(r===_n||r===vn)&&(t+=1)}var e=D(n);n.remove(),n=e}}var gt,En,yn,Ct,Pt;function Nr(){if(gt===void 0){gt=window,En=document,yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ct=Et(n,"firstChild").get,Pt=Et(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ot(t=""){return document.createTextNode(t)}function it(t){return Ct.call(t)}function D(t){return Pt.call(t)}function Cr(t,n){if(!k)return it(t);var r=it(m);if(r===null)r=m.appendChild(ot());else if(n&&r.nodeType!==3){var e=ot();return r==null||r.before(e),Y(e),e}return Y(r),r}function Pr(t,n){if(!k){var r=it(t);return r instanceof Comment&&r.data===""?D(r):r}return m}function Fr(t,n=1,r=!1){let e=k?m:t;for(var s;n--;)s=e,e=D(e);if(!k)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=ot();return e===null?s==null||s.after(l):e.before(l),Y(l),l}return Y(e),e}function qr(t){t.textContent=""}function Ft(t){var n=T|O,r=i!==null&&(i.f&T)!==0?i:null;return _===null||r!==null&&(r.f&w)!==0?n|=w:_.f|=It,{ctx:c,deps:null,effects:null,equals:Rt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??_}}function Lr(t){const n=Ft(t);return n.equals=Ot,n}function qt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function wn(t){for(var n=t.parent;n!==null;){if((n.f&T)===0)return n;n=n.parent}return null}function gn(t){var n,r=_;X(wn(t));try{qt(t),n=Jt(t)}finally{X(r)}return n}function Lt(t){var n=gn(t),r=(x||(t.f&w)!==0)&&t.deps!==null?q:E;b(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function Mt(t){_===null&&i===null&&un(),i!==null&&(i.f&w)!==0&&_===null&&ln(),pt&&an()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&j)!==0,a=_,l={ctx:c,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ht(l),l.f|=en}catch(u){throw S(l),u}else n!==null&&lt(l);var o=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(It|K))===0;if(!o&&!s&&e&&(a!==null&&Tn(l,a),i!==null&&(i.f&T)!==0)){var f=i;(f.effects??(f.effects=[])).push(l)}return l}function Mr(t){const n=L(rt,null,!1);return b(n,E),n.teardown=t,n}function mn(t){Mt();var n=_!==null&&(_.f&R)!==0&&c!==null&&!c.m;if(n){var r=c;(r.e??(r.e=[])).push({fn:t,effect:_,reaction:i})}else{var e=Yt(t);return e}}function Yr(t){return Mt(),An(t)}function Br(t){const n=L(j,t,!0);return(r={})=>new Promise(e=>{r.outro?Rn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Yt(t){return L(At,t,!1)}function An(t){return L(rt,t,!0)}function Hr(t,n=[],r=Ft){const e=n.map(r);return bn(()=>t(...e.map(Mn)))}function bn(t,n=0){return L(rt|_t|n,t,!0)}function jr(t,n=!0){return L(rt|R,t,!0,n)}function Bt(t){var n=t.teardown;if(n!==null){const r=pt,e=i;mt(!0),W(null);try{n.call(null)}finally{mt(r),W(e)}}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function In(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&sn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:D(e);e.remove(),e=a}r=!0}Ht(t,n&&!r),nt(t,0),b(t,et);var l=t.transitions;if(l!==null)for(const f of l)f.stop();Bt(t);var o=t.parent;o!==null&&o.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rn(t,n){var r=[];Ut(t,r,!0),xn(r,()=>{S(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ut(t,n,r){if((t.f&F)===0){if(t.f^=F,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&bt)!==0||(e.f&R)!==0;Ut(e,n,a?r:!1),e=s}}}function Ur(t){Vt(t,!0)}function Vt(t,n){if((t.f&F)!==0){t.f^=F,(t.f&E)===0&&(t.f^=E),V(t)&&(b(t,O),lt(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&bt)!==0||(r.f&R)!==0;Vt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const On=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let B=[],H=[];function Gt(){var t=B;B=[],ct(t)}function $t(){var t=H;H=[],ct(t)}function Vr(t){B.length===0&&queueMicrotask(Gt),B.push(t)}function Gr(t){H.length===0&&On($t),H.push(t)}function Tt(){B.length>0&&Gt(),H.length>0&&$t()}let $=!1,J=!1,Q=null,z=!1,pt=!1;function mt(t){pt=t}let M=[];let i=null,g=!1;function W(t){i=t}let _=null;function X(t){_=t}let A=null;function kn(t){A=t}let d=null,y=0,I=null;function Sn(t){I=t}let zt=1,tt=0,x=!1;function Kt(){return++zt}function V(t){var v;var n=t.f;if((n&O)!==0)return!0;if((n&q)!==0){var r=t.deps,e=(n&w)!==0;if(r!==null){var s,a,l=(n&Z)!==0,o=e&&_!==null&&!x,f=r.length;if(l||o){var u=t,p=u.parent;for(s=0;s<f;s++)a=r[s],(l||!((v=a==null?void 0:a.reactions)!=null&&v.includes(u)))&&(a.reactions??(a.reactions=[])).push(u);l&&(u.f^=Z),o&&p!==null&&(p.f&w)===0&&(u.f^=w)}for(s=0;s<f;s++)if(a=r[s],V(a)&&Lt(a),a.wv>t.wv)return!0}(!e||_!==null&&!x)&&b(t,E)}return!1}function Dn(t,n){for(var r=n;r!==null;){if((r.f&K)!==0)try{r.fn(t);return}catch{r.f^=K}r=r.parent}throw $=!1,t}function Nn(t){return(t.f&et)===0&&(t.parent===null||(t.parent.f&K)===0)}function at(t,n,r,e){if($){if(r===null&&($=!1),Nn(n))throw t;return}r!==null&&($=!0);{Dn(t,n);return}}function Zt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var a=e[s];(a.f&T)!==0?Zt(a,n,!1):n===a&&(r?b(a,O):(a.f&E)!==0&&b(a,q),lt(a))}}function Jt(t){var G;var n=d,r=y,e=I,s=i,a=x,l=A,o=c,f=g,u=t.f;d=null,y=0,I=null,x=(u&w)!==0&&(g||!z||i===null),i=(u&(R|j))===0?t:null,A=null,wt(t.ctx),g=!1,tt++;try{var p=(0,t.fn)(),v=t.deps;if(d!==null){var h;if(nt(t,y),v!==null&&y>0)for(v.length=y+d.length,h=0;h<d.length;h++)v[y+h]=d[h];else t.deps=v=d;if(!x)for(h=y;h<v.length;h++)((G=v[h]).reactions??(G.reactions=[])).push(t)}else v!==null&&y<v.length&&(nt(t,y),v.length=y);if(st()&&I!==null&&!g&&v!==null&&(t.f&(T|q|O))===0)for(h=0;h<I.length;h++)Zt(I[h],t);return s!==null&&tt++,p}finally{d=n,y=r,I=e,i=s,x=a,A=l,wt(o),g=f}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&(n.f&T)!==0&&(d===null||!d.includes(n))&&(b(n,q),(n.f&(w|Z))===0&&(n.f^=Z),qt(n),nt(n,0))}function nt(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function ht(t){var n=t.f;if((n&et)===0){b(t,E);var r=_,e=c,s=z;_=t,z=!0;try{(n&_t)!==0?In(t):Ht(t),Bt(t);var a=Jt(t);t.teardown=typeof a=="function"?a:null,t.wv=zt;var l=t.deps,o}catch(f){at(f,t,r,e||t.ctx)}finally{z=s,_=r}}}function Pn(){try{on()}catch(t){if(Q!==null)at(t,Q,null);else throw t}}function Qt(){try{for(var t=0;M.length>0;){t++>1e3&&Pn();var n=M,r=n.length;M=[];for(var e=0;e<r;e++){var s=n[e];(s.f&E)===0&&(s.f^=E);var a=qn(s);Fn(a)}}}finally{J=!1,Q=null}}function Fn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(et|F))===0)try{V(e)&&(ht(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(s){at(s,e,null,e.ctx)}}}function lt(t){J||(J=!0,queueMicrotask(Qt));for(var n=Q=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(j|R))!==0){if((r&E)===0)return;n.f^=E}}M.push(n)}function qn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,s=(e&R)!==0,a=s&&(e&E)!==0,l=r.next;if(!a&&(e&F)===0){if((e&At)!==0)n.push(r);else if(s)r.f^=E;else{var o=i;try{i=r,V(r)&&ht(r)}catch(p){at(p,r,null,r.ctx)}finally{i=o}}var f=r.first;if(f!==null){r=f;continue}}if(l===null){let p=r.parent;for(;p!==null;){if(t===p)break t;var u=p.next;if(u!==null){r=u;continue t}p=p.parent}}r=l}return n}function Ln(t){var n;for(Tt();M.length>0;)J=!0,Qt(),Tt();return n}async function $r(){await Promise.resolve(),Ln()}function Mn(t){var n=t.f,r=(n&T)!==0;if(i!==null&&!g){A!==null&&A.includes(t)&&fn();var e=i.deps;t.rv<tt&&(t.rv=tt,d===null&&e!==null&&e[y]===t?y++:d===null?d=[t]:(!x||!d.includes(t))&&d.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,a=s.parent;a!==null&&(a.f&w)===0&&(s.f^=w)}return r&&(s=t,V(s)&&Lt(s)),t.v}function dt(t){var n=g;try{return g=!0,t()}finally{g=n}}const Yn=-7169;function b(t,n){t.f=t.f&Yn|n}function zr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}function Wt(t,n,r){if(t==null)return n(void 0),r&&r(void 0),P;const e=dt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}const C=[];function Bn(t,n){return{subscribe:Hn(t,n).subscribe}}function Hn(t,n=P){let r=null;const e=new Set;function s(o){if(xt(t,o)&&(t=o,r)){const f=!C.length;for(const u of e)u[1](),C.push(u,t);if(f){for(let u=0;u<C.length;u+=2)C[u][0](C[u+1]);C.length=0}}}function a(o){s(o(t))}function l(o,f=P){const u=[o,f];return e.add(u),e.size===1&&(r=n(s,a)||P),o(t),()=>{e.delete(u),e.size===0&&r&&(r(),r=null)}}return{set:s,update:a,subscribe:l}}function Kr(t,n,r){const e=!Array.isArray(t),s=e?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=n.length<2;return Bn(r,(l,o)=>{let f=!1;const u=[];let p=0,v=P;const h=()=>{if(p)return;v();const N=n(e?u[0]:u,l,o);a?l(N):v=typeof N=="function"?N:P},G=s.map((N,ut)=>Wt(N,Xt=>{u[ut]=Xt,p&=~(1<<ut),f&&h()},()=>{p|=1<<ut}));return f=!0,h(),function(){ct(G),v(),f=!1}})}function Zr(t){let n;return Wt(t,r=>n=r)(),n}function jn(t){c===null&&Dt(),U&&c.l!==null?Un(c).m.push(t):mn(()=>{const n=dt(t);if(typeof n=="function")return n})}function Jr(t){c===null&&Dt(),jn(()=>()=>dt(t))}function Un(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{En as $,st as A,tr as B,xt as C,Hn as D,bt as E,gt as F,zn as G,Kn as H,vt as I,sr as J,Rr as K,Et as L,_ as M,er as N,rn as O,Vn as P,vn as Q,Dr as R,yt as S,Y as T,Tr as U,xr as V,Ur as W,An as X,Vr as Y,Mr as Z,$n as _,Or as a,Ir as a0,Wt as a1,Zr as a2,rr as a3,vr as a4,Ot as a5,pr as a6,Wn as a7,cr as a8,hr as a9,Sr as aA,Jr as aB,Kr as aC,F as aD,ur as aE,dn as aF,Ut as aG,xn as aH,S as aI,lr as aJ,fr as aK,or as aL,ir as aM,Gr as aN,Xn as aO,nn as aP,_t as aQ,en as aR,yr as aS,dr as aT,Er as aU,Zn as aV,U as aa,_r as ab,Qn as ac,Lr as ad,Ln as ae,br as af,$r as ag,it as ah,qr as ai,W as aj,X as ak,i as al,ot as am,sn as an,_n as ao,D as ap,yn as aq,wr as ar,gr as as,Nr as at,kt as au,pn as av,St as aw,nr as ax,Gn as ay,Br as az,bn as b,jr as c,m as d,Yt as e,mr as f,Ar as g,k as h,c as i,mn as j,dt as k,Jn as l,Mn as m,zr as n,jn as o,Rn as p,Ft as q,ct as r,ar as s,Pr as t,Yr as u,Hr as v,Fr as w,Cr as x,kr as y,P as z};
