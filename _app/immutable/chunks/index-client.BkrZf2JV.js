import{S,z as $,A as J,B as E,C as Q,D as g,F as D,U as o,g as P,G as B,H as W,I as X,J as p,j as ee,K as M,k as j,p as U,h as q,i as re,E as te,L as ne,M as ae,N as fe,O as Y,l as ie,m as se,P as ue,b as A,Q as le,R as _e,T as ce,V as de,W as ve,X as oe,Y as ye,Z as k,_ as be,a0 as he,a1 as ge,f as H,a2 as Pe,a3 as Ee,a4 as Re,c as x,a as me}from"./utils.C_JF9SDz.js";import{f as we}from"./disclose-version.D-DGFInC.js";function I(e,a=null,c){if(typeof e!="object"||e===null||S in e)return e;const y=X(e);if(y!==$&&y!==J)return e;var f=new Map,u=p(e),v=E(0);u&&f.set("length",E(e.length));var d;return new Proxy(e,{defineProperty(i,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&Q();var n=f.get(r);return n===void 0?(n=E(t.value),f.set(r,n)):g(n,I(t.value,d)),!0},deleteProperty(i,r){var t=f.get(r);if(t===void 0)r in i&&f.set(r,E(o));else{if(u&&typeof r=="string"){var n=f.get("length"),s=Number(r);Number.isInteger(s)&&s<n.v&&g(n,s)}g(t,o),K(v)}return!0},get(i,r,t){var b;if(r===S)return e;var n=f.get(r),s=r in i;if(n===void 0&&(!s||(b=D(i,r))!=null&&b.writable)&&(n=E(I(s?i[r]:o,d)),f.set(r,n)),n!==void 0){var l=P(n);return l===o?void 0:l}return Reflect.get(i,r,t)},getOwnPropertyDescriptor(i,r){var t=Reflect.getOwnPropertyDescriptor(i,r);if(t&&"value"in t){var n=f.get(r);n&&(t.value=P(n))}else if(t===void 0){var s=f.get(r),l=s==null?void 0:s.v;if(s!==void 0&&l!==o)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return t},has(i,r){var l;if(r===S)return!0;var t=f.get(r),n=t!==void 0&&t.v!==o||Reflect.has(i,r);if(t!==void 0||B!==null&&(!n||(l=D(i,r))!=null&&l.writable)){t===void 0&&(t=E(n?I(i[r],d):o),f.set(r,t));var s=P(t);if(s===o)return!1}return n},set(i,r,t,n){var O;var s=f.get(r),l=r in i;if(u&&r==="length")for(var b=t;b<s.v;b+=1){var h=f.get(b+"");h!==void 0?g(h,o):b in i&&(h=E(o),f.set(b+"",h))}s===void 0?(!l||(O=D(i,r))!=null&&O.writable)&&(s=E(void 0),g(s,I(t,d)),f.set(r,s)):(l=s.v!==o,g(s,I(t,d)));var R=Reflect.getOwnPropertyDescriptor(i,r);if(R!=null&&R.set&&R.set.call(n,t),!l){if(u&&typeof r=="string"){var N=f.get("length"),m=Number(r);Number.isInteger(m)&&m>=N.v&&g(N,m+1)}K(v)}return!0},ownKeys(i){P(v);var r=Reflect.ownKeys(i).filter(s=>{var l=f.get(s);return l===void 0||l.v!==o});for(var[t,n]of f)n.v!==o&&!(t in i)&&r.push(t);return r},setPrototypeOf(){W()}})}function K(e,a=1){g(e,e.v+a)}function Z(e){return e!==null&&typeof e=="object"&&S in e?e[S]:e}function Ae(e,a){return Object.is(Z(e),Z(a))}function V(e){throw new Error("lifecycle_outside_component")}function Ne(e,a,c,y=null,f=!1){q&&re();var u=e,v=null,d=null,i=null,r=f?te:0;ee(()=>{if(i===(i=!!a()))return;let t=!1;if(q){const n=u.data===ne;i===n&&(u=ae(),fe(u),Y(!1),t=!0)}i?(v?M(v):v=j(()=>c(u)),d&&U(d,()=>{d=null})):(d?M(d):y&&(d=j(()=>y(u))),v&&U(v,()=>{v=null})),t&&Y(!0)},r),q&&(u=ie)}function z(e,a){return e===a||(e==null?void 0:e[S])===a}function De(e={},a,c,y){return se(()=>{var f,u;return ue(()=>{f=u,u=[],A(()=>{e!==c(...u)&&(a(e,...u),f&&z(c(...f),e)&&a(null,...f))})}),()=>{le(()=>{u&&z(c(...u),e)&&a(null,...u)})}}),e}function G(e){for(var a=B,c=B;a!==null&&!(a.f&(oe|ye));)a=a.parent;try{return k(a),e()}finally{k(c)}}function xe(e,a,c,y){var C;var f=(c&be)!==0,u=(c&he)!==0,v=(c&ge)!==0,d=(c&Re)!==0,i=!1,r;v?[r,i]=we(()=>e[a]):r=e[a];var t=(C=D(e,a))==null?void 0:C.set,n=y,s=!0,l=!1,b=()=>(l=!0,s&&(s=!1,d?n=A(y):n=y),n);r===void 0&&y!==void 0&&(t&&u&&_e(),r=b(),t&&t(r));var h;if(u)h=()=>{var _=e[a];return _===void 0?b():(s=!0,l=!1,_)};else{var R=G(()=>(f?H:Pe)(()=>e[a]));R.f|=ce,h=()=>{var _=P(R);return _!==void 0&&(n=void 0),_===void 0?n:_}}if(!(c&de))return h;if(t){var N=e.$$legacy;return function(_,w){return arguments.length>0?((!u||!w||N||i)&&t(w?h():_),_):h()}}var m=!1,O=!1,L=Ee(r),T=G(()=>H(()=>{var _=h(),w=P(L);return m?(m=!1,O=!0,w):(O=!1,L.v=_)}));return f||(T.equals=ve),function(_,w){if(arguments.length>0){const F=w?P(T):u&&v?I(_):_;return T.equals(F)||(m=!0,g(L,F),l&&n!==void 0&&(n=F),A(()=>P(T))),_}return P(T)}}function Ie(e){x===null&&V(),x.l!==null?Se(x).m.push(e):me(()=>{const a=A(e);if(typeof a=="function")return a})}function Le(e){x===null&&V(),Ie(()=>()=>A(e))}function Se(e){var a=e.l;return a.u??(a.u={a:[],b:[],m:[]})}export{Ne as a,I as b,De as c,Le as d,Ae as i,Ie as o,xe as p};
