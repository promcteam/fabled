var $n=Array.isArray,nn=Array.prototype.indexOf,zn=Array.from,Kn=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,en=Object.getOwnPropertyDescriptors,Wn=Object.prototype,Zn=Array.prototype,rn=Object.getPrototypeOf;function Jn(t){return typeof t=="function"}const F=()=>{};function Qn(t){return t()}function vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,bt=4,st=8,pt=16,I=32,q=64,Z=128,y=256,J=512,E=1024,O=2048,L=4096,M=8192,at=16384,sn=32768,It=65536,Xn=1<<17,an=1<<19,xt=1<<20,yt=Symbol("$state"),te=Symbol("legacy props"),ne=Symbol("");function Rt(t){return t===this.v}function Ot(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ee(t,n){return t!==n}function St(t){return!Ot(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function re(){throw new Error("https://svelte.dev/e/hydration_failed")}function se(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ae(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function le(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let G=!1;function ue(){G=!0}const oe=1,ie=2,fe=4,ce=8,_e=16,ve=1,pe=2,he=4,de=8,Ee=16,we=1,ye=2,ge=4,Te=1,me=2,vn="[",pn="[!",hn="]",kt={},Ae=Symbol(),be="http://www.w3.org/1999/xhtml";function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Nt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let c=null;function gt(t){c=t}function Ie(t,n=!1,e){var r=c={p:c,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};G&&!n&&(c.l={s:null,u:null,r1:[],r2:ht(!1)}),An(()=>{r.d=!0})}function xe(t){const n=c;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var e=_,r=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];nt(a.effect),tt(a.reaction),Ht(a.fn)}}finally{nt(e),tt(r)}}c=n.p,n.m=!0}return t||{}}function lt(){return!G||c!==null&&c.l===null}const B=new Map;function ht(t,n){var e={f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0};return e}function Re(t){return dn(ht(t))}function Oe(t,n=!1){var r;const e=ht(t);return n||(e.equals=St),G&&c!==null&&c.l!==null&&((r=c.l).s??(r.s=[])).push(e),e}function dn(t){return o!==null&&!g&&(o.f&T)!==0&&(A===null?Dn([t]):A.push(t)),t}function Se(t,n){return o!==null&&!g&&lt()&&(o.f&(T|pt))!==0&&(A===null||!A.includes(t))&&_n(),En(t,n)}function En(t,n){if(!t.equals(n)){var e=t.v;$?B.set(t,n):B.set(t,e),t.v=n,t.wv=Wt(),Ct(t,O),lt()&&_!==null&&(_.f&E)!==0&&(_.f&(I|q))===0&&(w===null?Nn([t]):w.push(t))}return n}function Ct(t,n){var e=t.reactions;if(e!==null)for(var r=lt(),s=e.length,a=0;a<s;a++){var l=e[a],u=l.f;(u&O)===0&&(!r&&l===_||(b(l,n),(u&(E|y))!==0&&((u&T)!==0?Ct(l,L):ot(l))))}}let k=!1;function ke(t){k=t}let m;function j(t){if(t===null)throw Dt(),kt;return m=t}function De(){return j(N(m))}function Ne(t){if(k){if(N(m)!==null)throw Dt(),kt;m=t}}function Ce(t=1){if(k){for(var n=t,e=m;n--;)e=N(e);m=e}}function Pe(){for(var t=0,n=m;;){if(n.nodeType===8){var e=n.data;if(e===hn){if(t===0)return n;t-=1}else(e===vn||e===pn)&&(t+=1)}var r=N(n);n.remove(),n=r}}var Tt,wn,yn,Pt,Ft;function Fe(){if(Tt===void 0){Tt=window,wn=document,yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Pt=wt(n,"firstChild").get,Ft=wt(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function ft(t=""){return document.createTextNode(t)}function ct(t){return Pt.call(t)}function N(t){return Ft.call(t)}function Me(t,n){if(!k)return ct(t);var e=ct(m);if(e===null)e=m.appendChild(ft());else if(n&&e.nodeType!==3){var r=ft();return e==null||e.before(r),j(r),r}return j(e),e}function qe(t,n){if(!k){var e=ct(t);return e instanceof Comment&&e.data===""?N(e):e}return m}function Le(t,n=1,e=!1){let r=k?m:t;for(var s;n--;)s=r,r=N(r);if(!k)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var l=ft();return r===null?s==null||s.after(l):r.before(l),j(l),l}return j(r),r}function Ye(t){t.textContent=""}function Mt(t){var n=T|O,e=o!==null&&(o.f&T)!==0?o:null;return _===null||e!==null&&(e.f&y)!==0?n|=y:_.f|=xt,{ctx:c,deps:null,effects:null,equals:Rt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??_}}function He(t){const n=Mt(t);return n.equals=St,n}function qt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)D(n[e])}}function gn(t){for(var n=t.parent;n!==null;){if((n.f&T)===0)return n;n=n.parent}return null}function Tn(t){var n,e=_;nt(gn(t));try{qt(t),n=Jt(t)}finally{nt(e)}return n}function Lt(t){var n=Tn(t),e=(R||(t.f&y)!==0)&&t.deps!==null?L:E;b(t,e),t.equals(n)||(t.v=n,t.wv=Wt())}function Yt(t){_===null&&o===null&&on(),o!==null&&(o.f&y)!==0&&_===null&&un(),$&&ln()}function mn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function Y(t,n,e,r=!0){var s=_,a={ctx:c,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(e)try{dt(a),a.f|=sn}catch(f){throw D(a),f}else n!==null&&ot(a);var l=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(xt|Z))===0;if(!l&&r&&(s!==null&&mn(a,s),o!==null&&(o.f&T)!==0)){var u=o;(u.effects??(u.effects=[])).push(a)}return a}function An(t){const n=Y(st,null,!1);return b(n,E),n.teardown=t,n}function bn(t){Yt();var n=_!==null&&(_.f&I)!==0&&c!==null&&!c.m;if(n){var e=c;(e.e??(e.e=[])).push({fn:t,effect:_,reaction:o})}else{var r=Ht(t);return r}}function Be(t){return Yt(),In(t)}function je(t){const n=Y(q,t,!0);return(e={})=>new Promise(r=>{e.outro?On(n,()=>{D(n),r(void 0)}):(D(n),r(void 0))})}function Ht(t){return Y(bt,t,!1)}function In(t){return Y(st,t,!0)}function Ue(t,n=[],e=Mt){const r=n.map(e);return xn(()=>t(...r.map(Hn)))}function xn(t,n=0){return Y(st|pt|n,t,!0)}function Ve(t,n=!0){return Y(st|I,t,!0,n)}function Bt(t){var n=t.teardown;if(n!==null){const e=$,r=o;At(!0),tt(null);try{n.call(null)}finally{At(e),tt(r)}}}function jt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&q)!==0?e.parent=null:D(e,n),e=r}}function Rn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&I)===0&&D(n),n=e}}function D(t,n=!0){var e=!1;if((n||(t.f&an)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,s=t.nodes_end;r!==null;){var a=r===s?null:N(r);r.remove(),r=a}e=!0}jt(t,n&&!e),rt(t,0),b(t,at);var l=t.transitions;if(l!==null)for(const f of l)f.stop();Bt(t);var u=t.parent;u!==null&&u.first!==null&&Ut(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ut(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function On(t,n){var e=[];Vt(t,e,!0),Sn(e,()=>{D(t),n&&n()})}function Sn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function Vt(t,n,e){if((t.f&M)===0){if(t.f^=M,t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&n.push(l);for(var r=t.first;r!==null;){var s=r.next,a=(r.f&It)!==0||(r.f&I)!==0;Vt(r,n,a?e:!1),r=s}}}function Ge(t){Gt(t,!0)}function Gt(t,n){if((t.f&M)!==0){t.f^=M,(t.f&E)===0&&(t.f^=E),z(t)&&(b(t,O),ot(t));for(var e=t.first;e!==null;){var r=e.next,s=(e.f&It)!==0||(e.f&I)!==0;Gt(e,s?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const kn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let U=[],V=[];function $t(){var t=U;U=[],vt(t)}function zt(){var t=V;V=[],vt(t)}function $e(t){U.length===0&&queueMicrotask($t),U.push(t)}function ze(t){V.length===0&&kn(zt),V.push(t)}function mt(){U.length>0&&$t(),V.length>0&&zt()}let W=!1,Q=!1,X=null,S=!1,$=!1;function At(t){$=t}let H=[];let o=null,g=!1;function tt(t){o=t}let _=null;function nt(t){_=t}let A=null;function Dn(t){A=t}let h=null,d=0,w=null;function Nn(t){w=t}let Kt=1,et=0,R=!1;function Wt(){return++Kt}function z(t){var v;var n=t.f;if((n&O)!==0)return!0;if((n&L)!==0){var e=t.deps,r=(n&y)!==0;if(e!==null){var s,a,l=(n&J)!==0,u=r&&_!==null&&!R,f=e.length;if(l||u){var i=t,x=i.parent;for(s=0;s<f;s++)a=e[s],(l||!((v=a==null?void 0:a.reactions)!=null&&v.includes(i)))&&(a.reactions??(a.reactions=[])).push(i);l&&(i.f^=J),u&&x!==null&&(x.f&y)===0&&(i.f^=y)}for(s=0;s<f;s++)if(a=e[s],z(a)&&Lt(a),a.wv>t.wv)return!0}(!r||_!==null&&!R)&&b(t,E)}return!1}function Cn(t,n){for(var e=n;e!==null;){if((e.f&Z)!==0)try{e.fn(t);return}catch{e.f^=Z}e=e.parent}throw W=!1,t}function Pn(t){return(t.f&at)===0&&(t.parent===null||(t.parent.f&Z)===0)}function ut(t,n,e,r){if(W){if(e===null&&(W=!1),Pn(n))throw t;return}e!==null&&(W=!0);{Cn(t,n);return}}function Zt(t,n,e=!0){var r=t.reactions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];(a.f&T)!==0?Zt(a,n,!1):n===a&&(e?b(a,O):(a.f&E)!==0&&b(a,L),ot(a))}}function Jt(t){var K;var n=h,e=d,r=w,s=o,a=R,l=A,u=c,f=g,i=t.f;h=null,d=0,w=null,R=(i&y)!==0&&(g||!S||o===null),o=(i&(I|q))===0?t:null,A=null,gt(t.ctx),g=!1,et++;try{var x=(0,t.fn)(),v=t.deps;if(h!==null){var p;if(rt(t,d),v!==null&&d>0)for(v.length=d+h.length,p=0;p<h.length;p++)v[d+p]=h[p];else t.deps=v=h;if(!R)for(p=d;p<v.length;p++)((K=v[p]).reactions??(K.reactions=[])).push(t)}else v!==null&&d<v.length&&(rt(t,d),v.length=d);if(lt()&&w!==null&&!g&&v!==null&&(t.f&(T|L|O))===0)for(p=0;p<w.length;p++)Zt(w[p],t);return s!==null&&(et++,w!==null&&(r===null?r=w:r.push(...w))),x}finally{h=n,d=e,w=r,o=s,R=a,A=l,gt(u),g=f}}function Fn(t,n){let e=n.reactions;if(e!==null){var r=nn.call(e,t);if(r!==-1){var s=e.length-1;s===0?e=n.reactions=null:(e[r]=e[s],e.pop())}}e===null&&(n.f&T)!==0&&(h===null||!h.includes(n))&&(b(n,L),(n.f&(y|J))===0&&(n.f^=J),qt(n),rt(n,0))}function rt(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Fn(t,e[r])}function dt(t){var n=t.f;if((n&at)===0){b(t,E);var e=_,r=c,s=S;_=t,S=!0;try{(n&pt)!==0?Rn(t):jt(t),Bt(t);var a=Jt(t);t.teardown=typeof a=="function"?a:null,t.wv=Kt;var l=t.deps,u}catch(f){ut(f,t,e,r||t.ctx)}finally{S=s,_=e}}}function Mn(){try{fn()}catch(t){if(X!==null)ut(t,X,null);else throw t}}function Qt(){var t=S;try{var n=0;for(S=!0;H.length>0;){n++>1e3&&Mn();var e=H,r=e.length;H=[];for(var s=0;s<r;s++){var a=Ln(e[s]);qn(a)}}}finally{Q=!1,S=t,X=null,B.clear()}}function qn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(at|M))===0)try{z(r)&&(dt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Ut(r):r.fn=null))}catch(s){ut(s,r,null,r.ctx)}}}function ot(t){Q||(Q=!0,queueMicrotask(Qt));for(var n=X=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(q|I))!==0){if((e&E)===0)return;n.f^=E}}H.push(n)}function Ln(t){for(var n=[],e=t;e!==null;){var r=e.f,s=(r&(I|q))!==0,a=s&&(r&E)!==0;if(!a&&(r&M)===0){if((r&bt)!==0)n.push(e);else if(s)e.f^=E;else{var l=o;try{o=e,z(e)&&dt(e)}catch(i){ut(i,e,null,e.ctx)}finally{o=l}}var u=e.first;if(u!==null){e=u;continue}}var f=e.parent;for(e=e.next;e===null&&f!==null;)e=f.next,f=f.parent}return n}function Yn(t){var n;for(mt();H.length>0;)Q=!0,Qt(),mt();return n}async function Ke(){await Promise.resolve(),Yn()}function Hn(t){var n=t.f,e=(n&T)!==0;if(o!==null&&!g){A!==null&&A.includes(t)&&cn();var r=o.deps;t.rv<et&&(t.rv=et,h===null&&r!==null&&r[d]===t?d++:h===null?h=[t]:(!R||!h.includes(t))&&h.push(t))}else if(e&&t.deps===null&&t.effects===null){var s=t,a=s.parent;a!==null&&(a.f&y)===0&&(s.f^=y)}return e&&(s=t,z(s)&&Lt(s)),$&&B.has(t)?B.get(t):t.v}function Et(t){var n=g;try{return g=!0,t()}finally{g=n}}const Bn=-7169;function b(t,n){t.f=t.f&Bn|n}function We(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)_t(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&yt in e&&_t(e)}}}function _t(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{_t(t[r],n)}catch{}const e=rn(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=en(e);for(let s in r){const a=r[s].get;if(a)try{a.call(t)}catch{}}}}}function Xt(t,n,e){if(t==null)return n(void 0),e&&e(void 0),F;const r=Et(()=>t.subscribe(n,e));return r.unsubscribe?()=>r.unsubscribe():r}const P=[];function jn(t,n){return{subscribe:Un(t,n).subscribe}}function Un(t,n=F){let e=null;const r=new Set;function s(u){if(Ot(t,u)&&(t=u,e)){const f=!P.length;for(const i of r)i[1](),P.push(i,t);if(f){for(let i=0;i<P.length;i+=2)P[i][0](P[i+1]);P.length=0}}}function a(u){s(u(t))}function l(u,f=F){const i=[u,f];return r.add(i),r.size===1&&(e=n(s,a)||F),u(t),()=>{r.delete(i),r.size===0&&e&&(e(),e=null)}}return{set:s,update:a,subscribe:l}}function Ze(t,n,e){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=n.length<2;return jn(e,(l,u)=>{let f=!1;const i=[];let x=0,v=F;const p=()=>{if(x)return;v();const C=n(r?i[0]:i,l,u);a?l(C):v=typeof C=="function"?C:F},K=s.map((C,it)=>Xt(C,tn=>{i[it]=tn,x&=~(1<<it),f&&p()},()=>{x|=1<<it}));return f=!0,p(),function(){vt(K),v(),f=!1}})}function Je(t){let n;return Xt(t,e=>n=e)(),n}function Vn(t){c===null&&Nt(),G&&c.l!==null?Gn(c).m.push(t):bn(()=>{const n=Et(t);if(typeof n=="function")return n})}function Qe(t){c===null&&Nt(),Vn(()=>()=>Et(t))}function Gn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{wn as $,lt as A,ee as B,Ot as C,Un as D,It as E,Tt as F,Wn as G,Zn as H,ht as I,le as J,Se as K,wt as L,_ as M,ae as N,rn as O,$n as P,vn as Q,pn as R,yt as S,Pe as T,Ae as U,j as V,ke as W,Ge as X,In as Y,$e as Z,Oe as _,De as a,Xt as a0,Je as a1,An as a2,Kn as a3,se as a4,he as a5,St as a6,de as a7,te as a8,ve as a9,Ce as aA,Qe as aB,Ze as aC,M as aD,ie as aE,En as aF,Vt as aG,Sn as aH,D as aI,oe as aJ,_e as aK,fe as aL,ce as aM,ne as aN,be as aO,ze as aP,en as aQ,pt as aR,sn as aS,ge as aT,we as aU,ye as aV,Jn as aW,Ee as aa,G as ab,pe as ac,Xn as ad,He as ae,Yn as af,Re as ag,Ke as ah,ct as ai,Ye as aj,tt as ak,nt as al,o as am,ft as an,an as ao,N as ap,yn as aq,Te as ar,me as as,Fe as at,kt as au,hn as av,Dt as aw,re as ax,zn as ay,je as az,xn as b,Ve as c,m as d,Ht as e,Ie as f,xe as g,k as h,c as i,bn as j,Et as k,Qn as l,Hn as m,We as n,Vn as o,On as p,Mt as q,vt as r,ue as s,qe as t,Be as u,Ue as v,Le as w,Me as x,Ne as y,F as z};
