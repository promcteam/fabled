import{b as Ce,g as qe}from"../chunks/zURWuNx3.js";import{i as vs,p as Dt,Y as yt,l as Vt,r as us,h as ps,j as fs,k as Wt,m as _s,n as Pt,o as ms,b as Ee,a as ct,q as $t,s as Gt,u as De,v as $e,t as j,f as K,w as vt,x as Ke,F as We,y as st,T as Ue,z as fe,A as Fe,B as ht,C as It,D as pt,E as ut,G as bs,H as gs,I as ot,J as Yt,K as bt,L as Oe,M as wt,c as ee,N as rt,d as ks,e as ys,O as At,P as $s,Q as hs,R as Xe,S as et,U as it,V as Ot,W as Nt,X as zt,Z as Rt,_ as Ss,$ as Mt,a0 as jt,a1 as Lt,a2 as xs,a3 as ws,a4 as gt,a5 as Es,a6 as kt,a7 as Fs,a8 as Cs,a9 as Ts}from"../chunks/DUxAGpX6.js";import{d as Pe,t as y,e as _,a as u,s as Q,n as Ds,c as He,f as dt}from"../chunks/BtwgPXVH.js";import{f as Ie,j as Ps,m as e,af as J,x as c,w as i,y as d,K as v,g as Ae,v as L,ad as Bt,a2 as be,aA as Ve,t as ge,z as qt,o as Kt,aB as Ht,F as Is,q as Ye,aC as nt}from"../chunks/BWOqXrPf.js";import{b as te,a as V,s as Ze,d as A,p as Ne,c as As,e as Be,m as at}from"../chunks/DcM7YrJI.js";import{c as Os}from"../chunks/BTM_MZZ7.js";import{M as ft,k as Ns,s as zs,o as Zt,a as Ut,c as Rs,m as Ms}from"../chunks/DESs0qa0.js";import{i as Jt}from"../chunks/nL53n86C.js";import{b as js}from"../chunks/D1ckWRv2.js";const St="https://paste.travja.dev",Ls=o=>{if(typeof o!="string")return Promise.reject(new Error('You cannot send that. Please include a "content" argument that is a valid string.'));if(o==="")return Promise.reject(new Error("You cannot send nothing."));const a={method:"POST",body:o,headers:{"Content-Type":"text/plain"}};return fetch(`${St}/documents`,a).then(r=>r.json()).then(r=>{if(!r.key)throw new Error("Did not receive hastebin key.");return`${St}/${r.key}`})},Qt=async o=>(o.url&&(o.url.includes("astebin.com")||o.url.includes("paste.travja.dev"))&&!o.url.includes("raw")&&(o.url=o.url.replace(/(astebin\.com|paste\.travja\.dev)/,"$1/raw")),!o.url&&o.id&&(o.url=`${St}/raw/${o.id}`),o.url?await(await fetch(o.url)).text():""),Us=!1,Vs=["fabled.magemonkey.studio","synthesis.travja.dev"],tt=`


~~~~~


`,Ws=async({url:o})=>{if(vs(),!o.host.includes("localhost")&&o.searchParams.has("migrationData")){Qt({url:o.searchParams.get("migrationData")||void 0}).then(a=>{const r=a.split(tt)[0],T=a.split(tt)[1],D=a.split(tt)[2],b=a.split(tt)[3],f=a.split(tt)[4];Dt(r).forEach(h=>{localStorage.setItem("sapi.skill."+h.name,yt.stringify(h,{lineWidth:0,aliasDuplicateObjects:!1}))}),Dt(T).forEach(h=>{localStorage.setItem("sapi.class."+h.name,yt.stringify(h,{lineWidth:0,aliasDuplicateObjects:!1}))}),localStorage.setItem("skillFolders",D),localStorage.setItem("classFolders",b),localStorage.setItem("attribs",f),window.location.href=`https://${Vs}${Ce}`}).catch(console.error);return}},cr=Object.freeze(Object.defineProperty({__proto__:null,load:Ws,ssr:Us},Symbol.toStringTag,{value:"Module"}));var Gs=y('<div class="options svelte-8b3mcy"><div class="option svelte-8b3mcy"><div>Upload File</div> <label for="file-upload" class="button">Select File</label> <input id="file-upload" type="file" class="hidden svelte-8b3mcy" multiple></div> <div class="or svelte-8b3mcy"><span class="svelte-8b3mcy">OR</span></div> <div class="option svelte-8b3mcy"><div>Import from URL</div> <input class="svelte-8b3mcy"> <div class="button" tabindex="0" role="button">Import</div></div></div>');function Ys(o,a){Ie(a,!0);let r=J(void 0),T=J(void 0);const D=()=>{v(r,te(v(T,void 0))),Wt(!1)},b=()=>{e(r)&&(e(r).startsWith("http")||v(r,"https://"+e(r)),Qt({url:e(r)}).then(f=>{D(),_s(f)}).catch(console.error))};Ps(()=>{if(e(T)&&e(T).length>0)for(const f of e(T))f.name.indexOf(".yml")!=-1&&(Vt(f),D())}),ft(o,{onclose:D,children:(f,h)=>{var n=Gs(),w=c(n),S=i(c(w),4);d(w);var F=i(w,4),W=i(c(F),2);us(W);var Y=i(W,2);Y.__click=b,d(F),d(n),ps(S,()=>e(T),g=>v(T,g)),fs(W,()=>e(r),g=>v(r,g)),_("keypress",Y,g=>g.key==="Enter"&&b()),u(f,n)},$$slots:{default:!0}}),Ae()}Pe(["click"]);var Bs=y('<div class="chip share svelte-374drf" tabindex="0" role="button"> </div>'),qs=y('<div class="nav-wrap svelte-374drf"><nav class="svelte-374drf"><div class="chip hamburger svelte-374drf" role="button" tabindex="0"><span class="material-symbols-rounded">menu</span></div> <div></div> <div class="transfer svelte-374drf"><div class="chip import svelte-374drf" role="button" tabindex="0" title="Import Data">Import</div> <!></div></nav></div>');function Ks(o,a){Ie(a,!1);const[r,T]=Ze(),D=()=>A(ms,"$activeType",r),b=g=>{g==null||g.stopPropagation();let O=be(ct);if(!O)return;let N=yt.stringify({[O.name]:O.serializeYaml()},{lineWidth:0,aliasDuplicateObjects:!1});Ls(N).then(P=>{var C;(C=navigator==null?void 0:navigator.clipboard)==null||C.writeText(P),window.open(P)}).catch(P=>console.error(P))},f=g=>{g==null||g.stopPropagation(),Wt(!0)};Jt();var h=qs(),n=c(h),w=c(n);w.__click=function(...g){var O;(O=Pt)==null||O.apply(this,g)};var S=i(w,4),F=c(S);F.__click=f;var W=i(F,2);{var Y=g=>{var O=Bs();O.__click=b;var N=c(O);d(O),L(P=>{Ee(O,"title",`Share ${P??""}`),Q(N,`Share ${P??""}`)},[()=>D().substring(0,1).toUpperCase()+D().substring(1)],Bt),_("keypress",O,P=>{P.key==="Enter"&&b(P)}),u(g,O)};V(W,g=>{D()&&g(Y)})}d(S),d(n),d(h),_("keypress",w,g=>{g.key==="Enter"&&Pt(g)}),_("keypress",F,g=>{g.key==="Enter"&&f(g)}),u(o,h),Ae(),T()}Pe(["click"]);var Hs=Ds('<svg viewBox="0 0 30 34" class="logo-3oeRIY svelte-evyltu"><g fill="currentColor"><path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path></g></svg>');function Zs(o){var a=Hs();u(o,a)}var Js=()=>qe(`${Ce}/`),Qs=y('<div id="header" class="svelte-12n421s"><div class="home svelte-12n421s" tabindex="0" role="button"><h1 class="accent svelte-12n421s">Fabled</h1> <h2 class="svelte-12n421s">Dynamic Editor</h2> <div class="copy svelte-12n421s"> </div></div> <div class="socials svelte-12n421s"><a class="social discord svelte-12n421s" href="https://discord.gg/6UzkTe6RvW" title="Join our Discord"><!></a> <a class="social github svelte-12n421s" href="https://github.com/magemonkeystudio/fabled" title="Check out our GitHub"><img alt="Github" class="svelte-12n421s"></a> <a class="social spigot svelte-12n421s" href="https://www.spigotmc.org/resources/proskillapi-create-custom-races-classes-skills-spells-with-an-easy-online-editor.91913/" title="Check out our resource on Spigot"><img alt="Spigot" class="svelte-12n421s"></a> <a class="social wiki svelte-12n421s" href="https://github.com/magemonkeystudio/fabled/wiki" title="Wiki"><span class="material-symbols-rounded">help</span></a></div></div>');function Xs(o,a){Ie(a,!1),Jt();var r=Qs(),T=c(r);T.__click=[Js];var D=i(c(T),4),b=c(D);d(D),d(T);var f=i(T,2),h=c(f),n=c(h);Zs(n),d(h);var w=i(h,2),S=c(w);Ee(S,"src",`${Ce??""}/github-mark-white.svg`),d(w);var F=i(w,2),W=c(F);Ee(W,"src",`${Ce??""}/spigot.png`),d(F),Ve(2),d(f),d(r),L(Y=>Q(b,`© MageMonkeyStudio ${Y??""}`),[()=>new Date().getFullYear()],Bt),_("keypress",T,Y=>Y.key==="Enter"&&qe(`${Ce}/`)),u(o,r),Ae()}Pe(["click"]);var ea=y('<a class="edit svelte-1m63a49" title="Edit Skill"><span class="material-symbols-rounded">edit</span></a>'),ta=(o,a,r)=>Yt(a()).then(()=>v(r,te($t(a())))),sa=y('<div tabindex="0" role="button" class="sync svelte-1m63a49"><span class="material-symbols-rounded">sync</span></div>'),aa=(o,a)=>pt(a(),o),ra=(o,a,r)=>a(r(),o),oa=(o,a,r)=>{if(o.stopPropagation(),o.preventDefault(),o!=null&&o.shiftKey){ut(a());return}v(r,!0)},la=y('<div class="buttons svelte-1m63a49"><!> <!> <div tabindex="0" role="button" class="download svelte-1m63a49"><span class="material-symbols-rounded">save</span></div> <div tabindex="0" role="button" class="clone svelte-1m63a49"><span class="material-symbols-rounded">content_copy</span></div> <div tabindex="0" role="button" class="delete svelte-1m63a49"><span class="material-symbols-rounded">delete</span></div></div>'),ia=(o,a)=>v(a,!1),na=(o,a)=>ut(a()),da=y('<h3> </h3> <div class="modal-buttons svelte-1m63a49"><div class="button svelte-1m63a49" role="button" tabindex="0">Cancel</div> <div class="button modal-delete svelte-1m63a49" role="button" tabindex="0">Delete</div></div>',1),ca=y('<div class="sidebar-entry svelte-1m63a49" role="menuitem" tabindex="0"><!> <!></div> <!>',1);function Le(o,a){Ie(a,!0);const[r,T]=Ze(),D=()=>A(ct,"$active",r),b=()=>A(vt,"$sidebarOpen",r);let f=Ne(a,"delay",3,0),h=Ne(a,"direction",3,"left"),n=Ne(a,"data",3,void 0),w=J(!1),S=J(!1),F=J(te(n()?$t(n()):!1));const W=p=>{if(!n()){p.preventDefault();return}Ke.set(n())},Y=p=>{p.stopPropagation(),p.preventDefault();const t=be(Ke);let E;n()&&(E=De.getFolder(n()));const $=De.getFolder(t);if($&&$.remove(t),E){E.add(t),v(w,!1),De.updateFolders();return}if(t instanceof We){switch(be(st)){case Ue.CLASSES:{Fe.addClassFolder(t);break}case Ue.SKILLS:{fe.addSkillFolder(t);break}}t.parent=void 0}v(w,!1)},g=p=>{p.preventDefault();const t=be(Ke);n()!==t&&v(w,!0)},O=(p,t)=>(be(ht)||(t.delay=0),t.fn(p,t)),N=(p,t)=>{t==null||t.preventDefault(),t==null||t.stopPropagation(),p&&(p instanceof bs?Fe.cloneClass(p):p instanceof It?fe.cloneSkill(p):p instanceof gs&&ot.cloneAttribute(p))};var P=ca(),C=ge(P);C.__click=function(...p){var t;(t=a.onclick)==null||t.apply(this,p)};var G=c(C);Gt(G,()=>a.children??qt);var X=i(G,2);{var z=p=>{var t=la(),E=c(t);{var $=l=>{var de=ea();L(()=>Ee(de,"href",`${Ce??""}/skill/${n().name??""}/edit`)),u(l,de)};V(E,l=>{n()instanceof It&&l($)})}var B=i(E,2);{var Se=l=>{var de=He(),ze=ge(de);Ns(ze,()=>e(F),Te=>{var ae=sa();ae.__click=[ta,n,F],L(()=>{Ee(ae,"title",`Local Sync: ${(e(F)?"On":"Off")??""}`),$e(ae,"activeSync",e(F))}),_("keypress",ae,re=>{(re==null?void 0:re.key)==="Enter"&&Yt(n()).then(()=>v(F,te($t(n()))))}),u(Te,ae)}),u(l,de)};V(B,l=>{"showOpenFilePicker"in window&&l(Se)})}var _e=i(B,2);_e.__click=[aa,n];var se=i(_e,2);se.__click=[ra,N,n];var I=i(se,2);I.__click=[oa,n,S],d(t),L(l=>{Ee(_e,"title",`Save ${l??""}`),Ee(se,"title",`Clone ${l??""}`),Ee(I,"title",`Delete ${l??""}`)},[()=>n().dataType.substring(0,1).toUpperCase()+n().dataType.substring(1)]),_("keypress",_e,l=>{(l==null?void 0:l.key)==="Enter"&&pt(n(),l)}),_("keypress",se,l=>{(l==null?void 0:l.key)==="Enter"&&N(n(),l)}),_("keypress",I,l=>{if((l==null?void 0:l.key)==="Enter"){if(l.stopPropagation(),l.preventDefault(),l!=null&&l.shiftKey){ut(n());return}v(S,!0)}}),u(p,t)};V(X,p=>{n()&&p(z)})}d(C);var H=i(C,2);{var k=p=>{ft(p,{children:(t,E)=>{var $=da(),B=ge($),Se=c(B);d(B);var _e=i(B,2),se=c(_e);se.__click=[ia,S];var I=i(se,2);I.__click=[na,n],d(_e),L(()=>{var l;return Q(Se,`Do you really want to delete ${((l=n())==null?void 0:l.name)??""}?`)}),_("keypress",se,l=>{(l==null?void 0:l.key)==="Enter"&&v(S,!1)}),_("keypress",I,l=>{(l==null?void 0:l.key)==="Enter"&&ut(n())}),u(t,$)},$$slots:{default:!0}})};V(H,p=>{e(S)&&p(k)})}L(p=>{Ee(C,"draggable",!!n()),$e(C,"active",n()&&D()===n()),$e(C,"in-folder",p),$e(C,"over",e(w)),$e(C,"activeSync",e(F))},[()=>!!De.getFolder(n())]),_("dragleave",C,()=>v(w,!1)),_("dragover",C,g),_("dragstart",C,W),_("drop",C,Y),_("keypress",C,p=>{var t;p.key==="Enter"&&((t=a.onclick)==null||t.call(a,p))}),j(1,C,()=>O,()=>({fn:K,x:h()==="left"?-100:100,duration:500,delay:b()?0:f()})),j(2,C,()=>K,()=>({x:h()==="left"?-100:100,duration:500})),u(o,P),Ae(),T()}Pe(["click"]);const va=(o,a)=>{var r;o.key=="Enter"&&(o.preventDefault(),o.stopPropagation(),(r=e(a))==null||r.blur())};var ua=(o,a)=>a(a().open=!a().open,!0),pa=y('<div class="folder-content svelte-jmliow"></div>'),fa=y('<div class="folder svelte-jmliow" draggable="true" role="menuitem" tabindex="0"><span class="material-symbols-rounded folder-icon svelte-jmliow">folder</span> <span class="name svelte-jmliow" contenteditable="false" role="textbox" tabindex="0"> </span> <div class="buttons svelte-jmliow"><div class="icon add svelte-jmliow" role="button" tabindex="0" title="Add Folder"><span class="material-symbols-rounded">add</span></div> <div class="icon svelte-jmliow" role="button" tabindex="0" title="Rename"><span class="material-symbols-rounded">edit</span></div> <div class="icon delete svelte-jmliow" role="button" tabindex="0" title="Delete Folder"><span class="material-symbols-rounded">delete</span></div></div></div> <!>',1);function xt(o,a){Ie(a,!0);const[r,T]=Ze(),D=()=>A(vt,"$sidebarOpen",r);let b=Ne(a,"folder",15),f=J(void 0),h=t=>{t==null||t.stopPropagation(),e(f)&&(e(f).contentEditable="true",e(f).focus(),setTimeout(()=>{if(!e(f))return;const E=document.createRange();E.setStart(e(f),0),E.setEnd(e(f),1);const $=window.getSelection();$==null||$.removeAllRanges(),$==null||$.addRange(E)},1))};const n=t=>{t==null||t.stopPropagation(),De.deleteFolder(b())},w=t=>{t==null||t.stopPropagation(),b().createFolder(),b(b().open=!0,!0),De.updateFolders()};let S=J(!1);const F=()=>{Ke.set(b())},W=t=>{t.stopPropagation(),t.preventDefault(),v(S,!1);const E=be(Ke);if(!E||b().data.includes(E))return;const $=De.getFolder(E);$&&$.remove(E),E instanceof We&&(De.removeFolder(E),E.parent=b()),b().add(E)},Y=t=>{e(f)&&(e(f).contentEditable="false",b().name!==t.target.textContent&&(b(b().name=t.target.textContent||"",!0),De.updateFolders()))},g=t=>{t.preventDefault(),b()!==be(Ke)&&v(S,!0)};var O=fa(),N=ge(O);N.__click=[ua,b];var P=i(c(N),2);P.__keydown=[va,f];var C=c(P,!0);d(P),As(P,t=>v(f,t),()=>e(f));var G=i(P,2),X=c(G);X.__click=w;var z=i(X,2);z.__click=h;var H=i(z,2);H.__click=n,d(G),d(N);var k=i(N,2);{var p=t=>{var E=pa();Oe(E,21,()=>b().data,$=>$==null?void 0:$.key,($,B)=>{var Se=He(),_e=ge(Se);{var se=l=>{xt(l,{get folder(){return e(B)}})},I=l=>{Le(l,{get data(){return e(B)},onclick:()=>qe(`${Ce}/${e(B).dataType==="class"?"class":"skill"}/${e(B).name}${e(B).dataType==="class"?"/edit":""}`),children:(de,ze)=>{Ve();var Te=dt();L(()=>Q(Te,`${e(B).name??""}${(e(B).location==="server"?"*":"")??""}`)),u(de,Te)},$$slots:{default:!0}})};V(_e,l=>{e(B)instanceof We?l(se):l(I,!1)})}u($,Se)}),d(E),j(3,E,()=>bt),u(t,E)};V(k,t=>{b().open&&t(p)})}L(()=>{$e(N,"over",e(S)),$e(P,"server",b().location==="server"),Q(C,b().name)}),_("dragleave",N,()=>v(S,!1)),_("dragover",N,g),_("dragstart",N,F),_("drop",N,W),_("keypress",N,t=>{t.key==="Enter"&&(t.stopPropagation(),b(b().open=!b().open,!0))}),_("blur",P,Y),_("keypress",X,t=>{t.key==="Enter"&&(t.stopPropagation(),w())}),_("keypress",z,t=>{t.key==="Enter"&&(t.stopPropagation(),h())}),_("keypress",H,t=>{t.key==="Enter"&&(t.stopPropagation(),n())}),j(1,N,()=>bt,()=>({duration:D()?0:400})),j(2,N,()=>bt),u(o,O),Ae(),T()}Pe(["click","keydown"]);var _a=y('<div tabindex="0" role="radio" class="svelte-t61ag2"> </div>'),ma=y('<div class="tabs svelte-t61ag2"></div>');function ba(o,a){Ie(a,!0);let r=Ne(a,"selectedTab",15),T=Ne(a,"data",19,()=>["True","False"]),D=Ne(a,"color",3,"#222"),b=Ne(a,"inline",3,!0);var f=ma();Oe(f,21,T,wt,(h,n,w)=>{var S=_a();S.__click=()=>r(w);var F=c(S,!0);d(S),L(()=>{Ee(S,"aria-checked",r()==w),Q(F,e(n))}),_("keypress",S,W=>{W.key==="Enter"&&r(w)}),u(h,S)}),d(f),L(()=>{$e(f,"selected",r()),$e(f,"inline",b()),ee(f,"--color",D()),ee(f,"--count",T().length),ee(f,"--selected",r())}),u(o,f),Ae()}Pe(["click"]);var ga=()=>Fe.addClass(),ka=()=>Fe.addClassFolder(new We),ya=y('<div class="new svelte-57rsxg"><span tabindex="0" role="button" class="svelte-57rsxg">New Class</span> <span class="new-folder svelte-57rsxg" tabindex="0" role="button">New Folder</span></div>'),$a=y('<div class="items svelte-57rsxg"><!> <!> <!></div>'),ha=()=>fe.addSkill(),Sa=()=>fe.addSkillFolder(new We),xa=y('<div class="new svelte-57rsxg"><span tabindex="0" role="button" class="svelte-57rsxg">New Skill</span> <span class="new-folder svelte-57rsxg" tabindex="0" role="button">New Folder</span></div>'),wa=y('<div class="items svelte-57rsxg"><!> <!> <!></div>'),Ea=()=>ot.addAttribute(),Fa=y('<div class="new svelte-57rsxg"><span tabindex="0" role="button" class="svelte-57rsxg">New Attribute</span></div>'),Ca=y('<div class="items svelte-57rsxg"><!> <!></div>'),Ta=y('<div id="sidebar" class="svelte-57rsxg"><div class="type-wrap svelte-57rsxg"><!> <hr class="svelte-57rsxg"></div> <!></div>');function Da(o,a){Ie(a,!0);const[r,T]=Ze(),D=()=>A(st,"$shownTab",r),b=()=>A(k,"$classFolders",r),f=()=>A(H,"$classes",r),h=()=>A(z,"$skillFolders",r),n=()=>A(X,"$skills",r),w=()=>A(p,"$attributes",r);let S=[],F,W,Y,g=J(te([])),O=J(te([])),N=J(!1),P=J(0),C=J(0),G=J(0);const X=fe.skills,z=fe.skillFolders,H=Fe.classes,k=Fe.classFolders,p=ot.attributes,t=I=>{switch(be(st)){case Ue.CLASSES:{S=I||be(k),v(g,te([]));for(let l of S)e(g).push(...l.getAllClasses());break}case Ue.SKILLS:{S=I||be(z),v(O,te([]));for(let l of S)e(O).push(...l.getAllSkills());break}}};Kt(()=>{F=st.subscribe(()=>t()),W=k.subscribe(t),Y=z.subscribe(t),t(),v(N,!0)}),Ht(()=>{F&&F(),W&&W(),Y&&Y()});const E=I=>{e(P)<500&&(I.stopPropagation(),hs())};var $=Ta();_("beforeunload",Is,()=>rt.disconnect()),ee($,"--height","100%");var B=c($),Se=c(B);ba(Se,{color:"#111",data:["Classes","Skills","Attributes"],inline:!1,get selectedTab(){return at(),D()},set selectedTab(I){Be(st,te(I))}}),Ve(2),d(B);var _e=i(B,2);{var se=I=>{var l=He(),de=ge(l);{var ze=ae=>{var re=$a(),Re=c(re);Oe(Re,1,()=>Xe(b()),M=>M.key,(M,oe)=>{xt(M,{get folder(){return e(oe)}})});var Me=i(Re,2);Oe(Me,3,()=>Xe(f()).filter(M=>!e(g).includes(M)),M=>M.key,(M,oe,ke)=>{const le=Ye(()=>200+100*e(ke));Le(M,{get data(){return e(oe)},get delay(){return e(le)},onclick:()=>qe(`${Ce}/class/${e(oe).name}/edit`),children:(ce,q)=>{Ve();var Z=dt();L(()=>Q(Z,`${e(oe).name??""}${(e(oe).location==="server"?"*":"")??""}`)),u(ce,Z)},$$slots:{default:!0}})});var Ge=i(Me,2);const he=Ye(()=>200+100*(f().length+1));Le(Ge,{get delay(){return e(he)},children:(M,oe)=>{var ke=ya(),le=c(ke);le.__click=[ga];var ce=i(le,2);ce.__click=[ka],d(ke),_("keypress",le,q=>q.key==="Enter"&&Fe.addClass()),_("keypress",ce,q=>q.key==="Enter"&&Fe.addClassFolder(new We)),u(M,ke)},$$slots:{default:!0}}),d(re),j(1,re,()=>K,()=>({x:-100})),j(2,re,()=>K,()=>({x:-100})),u(ae,re)},Te=ae=>{var re=He(),Re=ge(re);{var Me=he=>{var M=wa(),oe=c(M);Oe(oe,1,()=>Xe(h()),wt,(q,Z)=>{xt(q,{get folder(){return e(Z)}})});var ke=i(oe,2);Oe(ke,3,()=>Xe(n()).filter(q=>!e(O).includes(q)),q=>q.key,(q,Z,me)=>{const ve=Ye(()=>200+100*e(me));Le(q,{get data(){return e(Z)},direction:"right",get delay(){return e(ve)},onclick:()=>qe(`${Ce}/skill/${e(Z).name}`),children:(ye,ie)=>{Ve();var xe=dt();L(()=>Q(xe,`${e(Z).name??""}${(e(Z).location==="server"?"*":"")??""}`)),u(ye,xe)},$$slots:{default:!0}})});var le=i(ke,2);const ce=Ye(()=>200+100*(n().length+1));Le(le,{get delay(){return e(ce)},direction:"right",children:(q,Z)=>{var me=xa(),ve=c(me);ve.__click=[ha];var ye=i(ve,2);ye.__click=[Sa],d(me),_("keypress",ve,ie=>ie.key==="Enter"&&fe.addSkill()),_("keypress",ye,ie=>ie.key==="Enter"&&fe.addSkillFolder(new We)),u(q,me)},$$slots:{default:!0}}),d(M),j(1,M,()=>K,()=>({x:100})),j(2,M,()=>K,()=>({x:100})),u(he,M)},Ge=he=>{var M=He(),oe=ge(M);{var ke=le=>{var ce=Ca(),q=c(ce);Oe(q,3,()=>Xe(w()),ve=>ve.key,(ve,ye,ie)=>{const xe=Ye(()=>200+100*e(ie));Le(ve,{get data(){return e(ye)},direction:"right",get delay(){return e(xe)},onclick:()=>qe(`${Ce}/attribute/${e(ye).name}/edit`),children:(Je,_t)=>{Ve();var lt=dt();L(()=>Q(lt,`${e(ye).name??""}${(e(ye).location==="server"?"*":"")??""}`)),u(Je,lt)},$$slots:{default:!0}})});var Z=i(q,2);const me=Ye(()=>200+100*(w().length+1));Le(Z,{get delay(){return e(me)},direction:"right",children:(ve,ye)=>{var ie=Fa(),xe=c(ie);xe.__click=[Ea],d(ie),_("keypress",xe,Je=>Je.key==="Enter"&&ot.addAttribute()),u(ve,ie)},$$slots:{default:!0}}),d(ce),j(1,ce,()=>K,()=>({x:100})),j(2,ce,()=>K,()=>({x:100})),u(le,ce)};V(oe,le=>{D()===Ue.ATTRIBUTES&&le(ke)},!0)}u(he,M)};V(Re,he=>{D()===Ue.SKILLS?he(Me):he(Ge,!1)},!0)}u(ae,re)};V(de,ae=>{D()===Ue.CLASSES?ae(ze):ae(Te,!1)})}u(I,l)};V(_e,I=>{e(N)&&I(se)})}d($),ks($,(I,l)=>{var de;return(de=ys)==null?void 0:de(I,l)},()=>E),At("innerHeight",I=>v(C,te(I))),At("innerWidth",I=>v(P,te(I))),$s("y",()=>e(G),I=>v(G,te(I))),_("introend",$,()=>vt.set(!0)),_("outroend",$,()=>vt.set(!1)),j(3,$,()=>zs),u(o,$),Ae(),T()}Pe(["click"]);const Pa=()=>{confirm("Are you sure you want to clear all data?")&&(Fe.classes.set([]),Fe.classFolders.set([]),fe.skills.set([]),fe.skillFolders.set([]),ot.attributes.set([]))};var Ia=y("<option> </option>"),Aa=y("<select></select>"),Oa=y('<h1>Settings</h1> <hr> <div class="settings-container svelte-1wp1eds"><!> <!> <!> <!> <!> <hr class="span svelte-1wp1eds"> <button class="button btn-danger span svelte-1wp1eds">Clear Data</button></div>',1);function Xt(o,a){Ie(a,!0);const[r,T]=Ze(),D=()=>A(Rt,"$version",r),b=()=>A(Ot,"$useSymbols",r),f=()=>A(Nt,"$showSummaryItems",r),h=()=>A(ht,"$animationEnabled",r),n=()=>A(zt,"$blocklyMode",r);ft(o,{get onclose(){return a.onclose},width:"50rem",children:(w,S)=>{var F=Oa(),W=i(ge(F),4),Y=c(W);et(Y,{label:"Server",tooltip:"This should match your target Spigot server version",children:(G,X)=>{var z=Aa();Oe(z,21,()=>Object.keys(Ss).sort((H,k)=>Number.parseFloat(k)-Number.parseFloat(H)),wt,(H,k)=>{var p=Ia(),t={},E=c(p);d(p),L(()=>{t!==(t=e(k))&&(p.value=(p.__value=e(k))==null?"":e(k)),Q(E,`1.${e(k)??""}`)}),u(H,p)}),d(z),js(z,D,H=>Be(Rt,H)),u(G,z)},$$slots:{default:!0}});var g=i(Y,2);et(g,{label:"Use Symbols",tooltip:"If skill components should use symbols instead of text",children:(G,X)=>{it(G,{left:"Symbols",right:"Text",get data(){return at(),b()},set data(z){Be(Ot,te(z))}})},$$slots:{default:!0}});var O=i(g,2);et(O,{label:"Show Summary Items",tooltip:"If skill components should show a simplified summary on the element",children:(G,X)=>{it(G,{left:"True",right:"False",get data(){return at(),f()},set data(z){Be(Nt,te(z))}})},$$slots:{default:!0}});var N=i(O,2);et(N,{label:"Waterfall Animation",tooltip:"If the waterfall animation should play in the sidebar",children:(G,X)=>{it(G,{get data(){return at(),h()},set data(z){Be(ht,te(z))}})},$$slots:{default:!0}});var P=i(N,2);et(P,{label:"Blockly Mode",tooltip:"If the Blockly editor should be used instead of the default component editor",children:(G,X)=>{it(G,{get data(){return at(),n()},set data(z){Be(zt,te(z))}})},$$slots:{default:!0}});var C=i(P,4);C.__click=[Pa],d(W),u(w,F)},$$slots:{default:!0}}),Ae(),T()}Pe(["click"]);var Na=()=>pt(),za=(o,a)=>a(),Ra=y('<span class="material-symbols-rounded svelte-10061vz"> </span>'),Ma=y('<span class="material-symbols-rounded svelte-10061vz">upload_file</span>'),ja=(o,a)=>a(),La=y('<span class="material-symbols-rounded svelte-10061vz"> </span>'),Ua=y('<span class="material-symbols-rounded svelte-10061vz">cloud_upload</span>'),Va=(o,a)=>a(),Wa=y('<span class="material-symbols-rounded svelte-10061vz"> </span>'),Ga=y('<span class="material-symbols-rounded svelte-10061vz">sync</span>'),Ya=y('<div class="button socket-upload svelte-10061vz" title="Save to Server" tabindex="0" role="button"><!></div> <div class="button socket-all svelte-10061vz" title="Upload All to Server" tabindex="0" role="button"><!></div> <div class="button socket-reload svelte-10061vz" title="Reload Fabled" tabindex="0" role="button"><!></div>',1),Ba=()=>Zt(Xt),qa=(o,a)=>{a()},Ka=y(`<div class="save-error svelte-10061vz"><strong> </strong> <div>We can keep it in memory for you to use, but will be unable to persist it to your browser's storage.</div> <div>Closing/Refreshing the page will cause you to lose this data.</div> <div>You'll need to export it and re-import later if you want to keep working with this.</div> <div class="acknowledge button" tabindex="0" role="button">I Understand</div></div>`),Ha=y('<div class="saving svelte-10061vz"> </div>'),Za=y('<div class="dragging svelte-10061vz" role="form">Drop to Import</div>'),Ja=y('<h3>Untrusted Connection to Server</h3> <div>Server is not trusted. Please run <div class="code svelte-10061vz" role="button" tabindex="0"> </div> from the server</div>',1),Qa=()=>rt.ping(),Xa=y('<div class="dc-warning svelte-10061vz"><strong> </strong> <div class="button svelte-10061vz" tabindex="0" role="button">Click to remain connected</div></div>'),er=y('<!> <!> <div id="body-container" class="svelte-10061vz"><!> <div id="body" class="svelte-10061vz"><!></div></div> <div id="floating-buttons" class="svelte-10061vz"><div class="button backup svelte-10061vz" role="button" tabindex="0" title="Backup All Data"><span class="material-symbols-rounded svelte-10061vz">cloud_download</span></div> <div class="button save svelte-10061vz" role="button" tabindex="0" title="Save"><span class="material-symbols-rounded svelte-10061vz">save</span></div> <!> <div class="button settings svelte-10061vz" role="button" tabindex="0" title="Change Settings"><span class="material-symbols-rounded svelte-10061vz">settings</span></div></div> <!> <!> <!> <!> <!> <!> <!>',1);function vr(o,a){Ie(a,!0);const[r,T]=Ze(),D=()=>A(E,"$passphrase",r),b=()=>A(ct,"$active",r),f=()=>A(xs,"$showSidebar",r),h=()=>A(Se,"$distance",r),n=()=>A(B,"$rotation",r),w=()=>A(Mt,"$socketConnected",r),S=()=>A(ws,"$importing",r),F=()=>A(gt,"$saveError",r),W=()=>A(Ms,"$modalData",r),Y=()=>A(P,"$isSaving",r),g=()=>A(Es,"$socketTrusted",r),O=()=>A(jt,"$dcWarning",r),N=()=>A(_e,"$dcTime",r),P=fe.isSaving;let C=J(!1),G=J(!1),X,z,H=J(""),k=J("NONE");const p={SAVING:"hourglass_empty",SAVED:"check",ERROR:"error"};let t=J(!1);const E=rt.keyphrase;let $=nt(Mt,(s,m)=>m(s?6:3)),B=nt($,(s,m)=>m(120/((s-1)*2))),Se=nt($,(s,m)=>m((4.725*(s-1)+1.5)/Math.PI)),_e=nt(jt,(s,m)=>{let x,ne=0;const ue=()=>{let pe=s-++ne;if(pe<=0){clearInterval(x);return}m(pe)};return m(s),x=window.setInterval(()=>ue(),1e3),()=>clearInterval(x)});Kt(()=>{document.addEventListener("dragover",se),document.addEventListener("drop",l),z=fe.isSaving.subscribe(s=>{if(!s){setTimeout(()=>v(G,!1),1e3);return}X&&clearTimeout(X),X=setTimeout(()=>v(G,!0),1e3)})}),Ht(()=>{document.removeEventListener("dragover",se),document.removeEventListener("drop",l),z&&z()});const se=s=>{var m,x;!((m=s==null?void 0:s.dataTransfer)!=null&&m.types)||!(s.dataTransfer.types.length>0&&((x=s.dataTransfer)==null?void 0:x.types[0])=="Files")||(s.dataTransfer.dropEffect="copy",s.stopPropagation(),s.preventDefault(),v(C,!0))},I=()=>{setTimeout(()=>v(C,!1),50)},l=s=>{var m;if(!(!((m=s==null?void 0:s.dataTransfer)!=null&&m.files)||s.dataTransfer.files.length==0)){v(C,!1);for(let x=0;x<s.dataTransfer.files.length;x++){const ne=s.dataTransfer.files[x];ne.name.indexOf(".yml")!=-1&&Vt(ne)}s.stopPropagation(),s.preventDefault()}},de=()=>{fe.skills.set([...be(fe.skills)]);const s=be(ct);s&&(s.save(),Ts(s))},ze=()=>{const s=be(gt);s&&(s.acknowledged=!0),gt.set(void 0)},Te=async()=>{if(e(k)==="SAVING")return;v(H,"save"),v(k,"SAVING"),await Fs()?v(k,"SAVED"):v(k,"ERROR"),setTimeout(()=>v(k,"NONE"),2e3)},ae=async()=>{if(e(k)==="SAVING")return;v(H,"export"),v(k,"SAVING"),await Cs()?v(k,"SAVED"):v(k,"ERROR"),setTimeout(()=>v(k,"NONE"),2e3)},re=async()=>{if(e(k)==="SAVING")return;v(H,"reload"),v(k,"SAVING"),await rt.reloadSapi()?v(k,"SAVED"):v(k,"ERROR"),setTimeout(()=>v(k,"NONE"),2e3)},Re=()=>{navigator.clipboard.writeText("/synth trust "+D()),v(t,!0),setTimeout(()=>v(t,!1),2e3)};var Me=er(),Ge=ge(Me);Xs(Ge,{});var he=i(Ge,2);Ks(he,{});var M=i(he,2),oe=c(M);{var ke=s=>{Da(s,{})};V(oe,s=>{f()&&s(ke)})}var le=i(oe,2),ce=c(le);Gt(ce,()=>a.children??qt),d(le),d(M);var q=i(M,2),Z=c(q);Z.__click=function(...s){var m;(m=Lt)==null||m.apply(this,s)};var me=i(Z,2);me.__click=[Na];var ve=i(me,2);{var ye=s=>{var m=Ya(),x=ge(m);x.__click=[za,Te];var ne=c(x);{var ue=R=>{var U=Ra(),Qe=c(U,!0);d(U),L(()=>Q(Qe,p[e(k)])),j(3,U,()=>K,()=>({y:-20})),u(R,U)},pe=R=>{var U=Ma();j(3,U,()=>K,()=>({y:20})),u(R,U)};V(ne,R=>{e(H)==="save"&&e(k)!=="NONE"?R(ue):R(pe,!1)})}d(x);var we=i(x,2);we.__click=[ja,ae];var mt=c(we);{var ls=R=>{var U=La(),Qe=c(U,!0);d(U),L(()=>Q(Qe,p[e(k)])),j(3,U,()=>K,()=>({y:-20})),u(R,U)},is=R=>{var U=Ua();j(3,U,()=>K,()=>({y:20})),u(R,U)};V(mt,R=>{e(H)==="export"&&e(k)!=="NONE"?R(ls):R(is,!1)})}d(we);var je=i(we,2);je.__click=[Va,re];var ns=c(je);{var ds=R=>{var U=Wa(),Qe=c(U,!0);d(U),L(()=>Q(Qe,p[e(k)])),j(3,U,()=>K,()=>({y:-20})),u(R,U)},cs=R=>{var U=Ga();j(3,U,()=>K,()=>({y:20})),u(R,U)};V(ns,R=>{e(H)==="reload"&&e(k)!=="NONE"?R(ds):R(cs,!1)})}d(je),L(()=>{ee(x,"--rotation",`${n()*5}deg`),ee(x,"--distance",`${h()??""}rem`),ee(we,"--rotation",`${n()*7}deg`),ee(we,"--distance",`${h()??""}rem`),ee(je,"--rotation",`${n()*9}deg`),ee(je,"--distance",`${h()??""}rem`)}),_("keypress",x,R=>{R.key==="Enter"&&Te()}),j(3,x,()=>K,()=>({x:100,easing:kt})),_("keypress",we,R=>{R.key==="Enter"&&ae()}),j(3,we,()=>K,()=>({x:100,easing:kt})),_("keypress",je,R=>{R.key==="Enter"&&re()}),j(3,je,()=>K,()=>({x:100,easing:kt})),u(s,m)};V(ve,s=>{w()&&s(ye)})}var ie=i(ve,2);ie.__click=[Ba],ee(ie,"--distance","1rem"),ee(ie,"--rotation","60deg"),d(q);var xe=i(q,2);{var Je=s=>{Ys(s,{})};V(xe,s=>{S()&&s(Je)})}var _t=i(xe,2);{var lt=s=>{var m=Ka(),x=c(m),ne=c(x);d(x);var ue=i(x,8);ue.__click=[qa,ze],d(m),L(()=>Q(ne,`Failed to save ${F().name??""} - Data is too large.`)),_("keypress",ue,pe=>{pe.key==="Enter"&&ze()}),j(3,m,()=>K,()=>({y:-20})),u(s,m)};V(_t,s=>{F()&&s(lt)})}var Et=i(_t,2);{var es=s=>{var m=He(),x=ge(m);Os(x,()=>Ut.activeModal,(ne,ue)=>{ue(ne,{get data(){return W()},onclose:Rs,onsave:de})}),u(s,m)};V(Et,s=>{Ut.activeModal&&s(es)})}var Ft=i(Et,2);{var ts=s=>{var m=Ha(),x=c(m,!0);d(m),L(()=>Q(x,Y()?"Saving...":"Saved!")),j(3,m,()=>K,()=>({y:-20})),u(s,m)};V(Ft,s=>{e(G)&&s(ts)})}var Ct=i(Ft,2);{var ss=s=>{var m=Za();_("dragleave",m,I),u(s,m)};V(Ct,s=>{e(C)&&s(ss)})}var Tt=i(Ct,2);{var as=s=>{ft(s,{children:(m,x)=>{var ne=Ja(),ue=i(ge(ne),2),pe=i(c(ue));pe.__click=Re;var we=c(pe);d(pe),Ve(),d(ue),L(()=>{$e(pe,"copied",e(t)),Q(we,`/synth trust ${D()??""}`)}),_("keypress",pe,mt=>{mt.key==="Enter"&&Re()}),u(m,ne)},$$slots:{default:!0}})};V(Tt,s=>{D()&&!g()&&s(as)})}var rs=i(Tt,2);{var os=s=>{var m=Xa(),x=c(m),ne=c(x);d(x);var ue=i(x,2);ue.__click=[Qa],d(m),L(()=>Q(ne,`You will lose connection in ${N()??""} seconds`)),_("keypress",ue,pe=>{pe.key==="Enter"&&rt.ping()}),j(3,m,()=>K,()=>({y:-20})),u(s,m)};V(rs,s=>{O()>0&&s(os)})}L(()=>{$e(M,"empty",!b()),$e(le,"centered",!b()),ee(Z,"--distance",`${h()??""}rem`),ee(Z,"--rotation",`${n()??""}deg`),ee(me,"--distance",`${h()??""}rem`),ee(me,"--rotation",`${n()*3}deg`)}),_("keypress",Z,s=>s.key==="Enter"&&Lt()),_("keypress",me,s=>{s.key==="Enter"&&pt()}),_("keypress",ie,s=>s.key==="Enter"&&Zt(Xt)),u(o,Me),Ae(),T()}Pe(["click"]);export{vr as component,cr as universal};
