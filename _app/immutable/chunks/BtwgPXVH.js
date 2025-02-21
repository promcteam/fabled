import{h as c,ah as y,ai as W,aj as P,ak as R,al as $,M as N,Z as F,Y as Z,_ as J,P as K,am as b,b as Q,an as X,ao as Y,ap as O,V as E,T as L,d as u,aq as ee,ar as re,as as te,a as j,at as D,au as M,av as ae,aw as ne,ax as ie,ay as se,az as oe,c as ue,f as fe,i as de,g as le}from"./BWOqXrPf.js";const ce=["touchstart","touchmove"];function _e(e){return ce.includes(e)}function we(e){c&&y(e)!==null&&W(e)}let V=!1;function ve(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function Ee(e,r,t,i=!0){i&&t();for(var n of r)e.addEventListener(n,t);F(()=>{for(var a of r)e.removeEventListener(a,t)})}function q(e){var r=$,t=N;P(null),R(null);try{return e()}finally{P(r),R(t)}}function Te(e,r,t,i=t){e.addEventListener(r,()=>q(t));const n=e.__on_r;n?e.__on_r=()=>{n(),i(!0)}:e.__on_r=()=>i(!0),ve()}const x=new Set,k=new Set;function he(e,r,t,i={}){function n(a){if(i.capture||T.call(r,a),!a.cancelBubble)return q(()=>t==null?void 0:t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Z(()=>{r.addEventListener(e,n,i)}):r.addEventListener(e,n,i),n}function be(e,r,t,i,n){var a={capture:i,passive:n},s=he(e,r,t,a);(r===document.body||r===window||r===document)&&F(()=>{r.removeEventListener(e,s,a)})}function Le(e){for(var r=0;r<e.length;r++)x.add(e[r]);for(var t of k)t(e)}function T(e){var I;var r=this,t=r.ownerDocument,i=e.type,n=((I=e.composedPath)==null?void 0:I.call(e))||[],a=n[0]||e.target,s=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var g=n.indexOf(r);if(g===-1)return;d<=g&&(s=d)}if(a=n[s]||e.target,a!==r){J(e,"currentTarget",{configurable:!0,get(){return a||t}});var A=$,v=N;P(null),R(null);try{for(var o,f=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+i];if(m!==void 0&&!a.disabled)if(K(m)){var[z,...G]=m;z.apply(a,[e,...G])}else m.call(a,e)}catch(S){o?f.push(S):o=S}if(e.cancelBubble||p===r||p===null)break;a=p}if(o){for(let S of f)queueMicrotask(()=>{throw S});throw o}}finally{e.__root=r,delete e.currentTarget,P(A),R(v)}}}let l;function pe(){l=void 0}function Ne(e){let r=null,t=c;var i;if(c){for(r=u,l===void 0&&(l=y(document.head));l!==null&&(l.nodeType!==8||l.data!==Y);)l=O(l);l===null?E(!1):l=L(O(l))}c||(i=document.head.appendChild(b()));try{Q(()=>e(i),X)}finally{t&&(E(!0),l=u,L(r))}}function B(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function h(e,r){var t=N;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Se(e,r){var t=(r&re)!==0,i=(r&te)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return h(u,null),u;n===void 0&&(n=B(a?e:"<!>"+e),t||(n=y(n)));var s=i||ee?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=y(s),d=s.lastChild;h(_,d)}else h(s,s);return s}}function Pe(e,r,t="svg"){var i=!e.startsWith("<!>"),n=`<${t}>${i?e:"<!>"+e}</${t}>`,a;return()=>{if(c)return h(u,null),u;if(!a){var s=B(n),_=y(s);a=y(_)}var d=a.cloneNode(!0);return h(d,d),d}}function Re(e=""){if(!c){var r=b(e+"");return h(r,r),r}var t=u;return t.nodeType!==3&&(t.before(t=b()),L(t)),h(t,t),t}function Ae(){if(c)return h(u,null),u;var e=document.createDocumentFragment(),r=document.createComment(""),t=b();return e.append(r,t),h(r,t),e}function Me(e,r){if(c){N.nodes_end=u,j();return}e!==null&&e.before(r)}let H=!0;function Oe(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function me(e,r){return U(e,r)}function De(e,r){D(),r.intro=r.intro??!1;const t=r.target,i=c,n=u;try{for(var a=y(t);a&&(a.nodeType!==8||a.data!==Y);)a=O(a);if(!a)throw M;E(!0),L(a),j();const s=U(e,{...r,anchor:a});if(u===null||u.nodeType!==8||u.data!==ae)throw ne(),M;return E(!1),s}catch(s){if(s===M)return r.recover===!1&&ie(),D(),W(t),E(!1),me(e,r);throw s}finally{E(i),L(n),pe()}}const w=new Map;function U(e,{target:r,anchor:t,props:i={},events:n,context:a,intro:s=!0}){D();var _=new Set,d=v=>{for(var o=0;o<v.length;o++){var f=v[o];if(!_.has(f)){_.add(f);var p=_e(f);r.addEventListener(f,T,{passive:p});var m=w.get(f);m===void 0?(document.addEventListener(f,T,{passive:p}),w.set(f,1)):w.set(f,m+1)}}};d(se(x)),k.add(d);var g=void 0,A=oe(()=>{var v=t??r.appendChild(b());return ue(()=>{if(a){fe({});var o=de;o.c=a}n&&(i.$$events=n),c&&h(v,null),H=s,g=e(v,i)||{},H=!0,c&&(N.nodes_end=u),a&&le()}),()=>{var p;for(var o of _){r.removeEventListener(o,T);var f=w.get(o);--f===0?(document.removeEventListener(o,T),w.delete(o)):w.set(o,f)}k.delete(d),v!==t&&((p=v.parentNode)==null||p.removeChild(v))}});return C.set(g,A),g}let C=new WeakMap;function ke(e,r){const t=C.get(e);return t?(C.delete(e),t(r)):Promise.resolve()}const ye="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ye);export{Me as a,De as b,Ae as c,Le as d,be as e,Re as f,h as g,Ne as h,B as i,ve as j,H as k,Te as l,me as m,Pe as n,Ee as o,we as r,Oe as s,Se as t,ke as u,q as w};
