import{S as E,G as Q,H as W,I as h,J as X,m as I,U as o,K as P,L as D,M as k,N as x,O as p,P as ee,b as re,h as U,a as ne,E as te,Q as ae,R as ie,T as fe,V as se,W as B,X as C,c as G,p as H,d as ue,e as le,Y as ce,k as Y,Z as ve,z as K,_ as J,a0 as _e,a1 as de,a2 as be,a3 as ge,a4 as oe,a5 as ye,q as Z,a6 as Ie,a7 as Pe,a8 as Re,a9 as Se,aa as he,ab as Ee,ac as Oe,ad as Te,ae as Ne}from"./BN-pE4Lr.js";function N(e,a=null,v){if(typeof e!="object"||e===null||E in e)return e;const s=p(e);if(s!==Q&&s!==W)return e;var n=new Map,u=ee(e),d=h(0);u&&n.set("length",h(e.length));var y;return new Proxy(e,{defineProperty(l,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&x();var f=n.get(r);return f===void 0?(f=h(t.value),n.set(r,f)):P(f,N(t.value,y)),!0},deleteProperty(l,r){var t=n.get(r);if(t===void 0)r in l&&n.set(r,h(o));else{if(u&&typeof r=="string"){var f=n.get("length"),i=Number(r);Number.isInteger(i)&&i<f.v&&P(f,i)}P(t,o),$(d)}return!0},get(l,r,t){var b;if(r===E)return e;var f=n.get(r),i=r in l;if(f===void 0&&(!i||(b=D(l,r))!=null&&b.writable)&&(f=h(N(i?l[r]:o,y)),n.set(r,f)),f!==void 0){var c=I(f);return c===o?void 0:c}return Reflect.get(l,r,t)},getOwnPropertyDescriptor(l,r){var t=Reflect.getOwnPropertyDescriptor(l,r);if(t&&"value"in t){var f=n.get(r);f&&(t.value=I(f))}else if(t===void 0){var i=n.get(r),c=i==null?void 0:i.v;if(i!==void 0&&c!==o)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return t},has(l,r){var c;if(r===E)return!0;var t=n.get(r),f=t!==void 0&&t.v!==o||Reflect.has(l,r);if(t!==void 0||k!==null&&(!f||(c=D(l,r))!=null&&c.writable)){t===void 0&&(t=h(f?N(l[r],y):o),n.set(r,t));var i=I(t);if(i===o)return!1}return f},set(l,r,t,f){var O;var i=n.get(r),c=r in l;if(u&&r==="length")for(var b=t;b<i.v;b+=1){var R=n.get(b+"");R!==void 0?P(R,o):b in l&&(R=h(o),n.set(b+"",R))}i===void 0?(!c||(O=D(l,r))!=null&&O.writable)&&(i=h(void 0),P(i,N(t,y)),n.set(r,i)):(c=i.v!==o,P(i,N(t,y)));var g=Reflect.getOwnPropertyDescriptor(l,r);if(g!=null&&g.set&&g.set.call(f,t),!c){if(u&&typeof r=="string"){var w=n.get("length"),A=Number(r);Number.isInteger(A)&&A>=w.v&&P(w,A+1)}$(d)}return!0},ownKeys(l){I(d);var r=Reflect.ownKeys(l).filter(i=>{var c=n.get(i);return c===void 0||c.v!==o});for(var[t,f]of n)f.v!==o&&!(t in l)&&r.push(t);return r},setPrototypeOf(){X()}})}function $(e,a=1){P(e,e.v+a)}function z(e){return e!==null&&typeof e=="object"&&E in e?e[E]:e}function me(e,a){return Object.is(z(e),z(a))}function De(e,a,[v,s]=[0,0]){U&&v===0&&ne();var n=e,u=null,d=null,y=o,l=v>0?te:0,r=!1;const t=(i,c=!0)=>{r=!0,f(c,i)},f=(i,c)=>{if(y===(y=i))return;let b=!1;if(U&&s!==-1){if(v===0){const g=n.data;g===ae?s=0:g===ie?s=1/0:(s=parseInt(g.substring(1)),s!==s&&(s=y?1/0:-1))}const R=s>v;!!y===R&&(n=fe(),se(n),B(!1),b=!0,s=-1)}y?(u?C(u):c&&(u=G(()=>c(n))),d&&H(d,()=>{d=null})):(d?C(d):c&&(d=G(()=>c(n,[v+1,s]))),u&&H(u,()=>{u=null})),b&&B(!0)};re(()=>{r=!1,a(t),r||f(null,null)},l),U&&(n=ue)}function F(e,a){return e===a||(e==null?void 0:e[E])===a}function Le(e={},a,v,s){return le(()=>{var n,u;return ce(()=>{n=u,u=[],Y(()=>{e!==v(...u)&&(a(e,...u),n&&F(v(...n),e)&&a(null,...n))})}),()=>{ve(()=>{u&&F(v(...u),e)&&a(null,...u)})}}),e}let m=!1,M=Symbol();function qe(e,a,v){const s=v[a]??(v[a]={store:null,source:J(void 0),unsubscribe:K});if(s.store!==e&&!(M in v))if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=K;else{var n=!0;s.unsubscribe=_e(e,u=>{n?s.source.v=u:P(s.source,u)}),n=!1}return e&&M in v?de(e):I(s.source)}function Ue(e,a){return e.set(a),a}function Ye(){const e={};function a(){be(()=>{for(var v in e)e[v].unsubscribe();ge(e,M,{enumerable:!1,value:!0})})}return[e,a]}function Me(){m=!0}function we(e){var a=m;try{return m=!1,[e(),m]}finally{m=a}}function V(e){var a;return((a=e.ctx)==null?void 0:a.d)??!1}function je(e,a,v,s){var j;var n=(v&Se)!==0,u=!Ee||(v&Oe)!==0,d=(v&Pe)!==0,y=(v&he)!==0,l=!1,r;d?[r,l]=we(()=>e[a]):r=e[a];var t=E in e||Re in e,f=d&&(((j=D(e,a))==null?void 0:j.set)??(t&&a in e&&(_=>e[a]=_)))||void 0,i=s,c=!0,b=!1,R=()=>(b=!0,c&&(c=!1,y?i=Y(s):i=s),i);r===void 0&&s!==void 0&&(f&&u&&oe(),r=R(),f&&f(r));var g;if(u)g=()=>{var _=e[a];return _===void 0?R():(c=!0,b=!1,_)};else{var w=(n?Z:Ne)(()=>e[a]);w.f|=Te,g=()=>{var _=I(w);return _!==void 0&&(i=void 0),_===void 0?i:_}}if((v&ye)===0)return g;if(f){var A=e.$$legacy;return function(_,T){return arguments.length>0?((!u||!T||A||l)&&f(T?g():_),_):g()}}var O=!1,L=J(r),S=Z(()=>{var _=g(),T=I(L);return O?(O=!1,T):L.v=_});return d&&I(S),n||(S.equals=Ie),function(_,T){if(arguments.length>0){const q=T?I(S):u&&d?N(_):_;if(!S.equals(q)){if(O=!0,P(L,q),b&&i!==void 0&&(i=q),V(S))return _;Y(()=>I(S))}return _}return V(S)?S.v:I(S)}}export{De as a,N as b,Le as c,qe as d,Ue as e,me as i,Me as m,je as p,Ye as s};
