import{y as Ve,H as Ae,x as Le,G as we,p as ye,L as Se,a as Ze,w as Te,T as xe,Q as r,a7 as Ke,a8 as U,o as et,I as oe,u as Qe,K as he,a9 as ae,R as B,aa as tt,ab as V,ac as at,ad as Ce,c as lt,z as je,E as st,b as ot}from"../chunks/DOXfZPqN.js";import{Y as Pe,f as N,t as F,y as s,m as g,g as E,q as J,w as x,x as S,v as Y,o as rt,az as nt,i as $e,H as ge,ag as Ue,$ as it}from"../chunks/CMBl9UdM.js";import{r as Oe,C as le}from"../chunks/JzmJt3Z-.js";import{a as y,t as C,d as We,s as se,e as _e,c as ve,h as ut}from"../chunks/D_iiq_Z-.js";import{p as K,s as Re,d as ke,a as H,b as pe}from"../chunks/Cw_bnrq7.js";import{b as dt}from"../chunks/D9gP_h2p.js";import{b as ct}from"../chunks/t3HOrKVo.js";const vt=!1;async function ht({params:c}){const l=c.id,a=c.type==="skill";let o,n;switch(c.type){case"skill":for(const t of Pe(Le.skills))if(n||(n=t),t.name==l){o=t;break}break;case"attribute":for(const t of Pe(Ae.attributes))if(n||(n=t),t.name==l){o=t;break}break;default:for(const t of Pe(Ve.classes))if(n||(n=t),t.name==l){o=t;break}break}if(o){let t=!1;if(!o.loaded){let e;if(o.location==="local")if(o instanceof we){const i=localStorage.getItem("attribs")||"";i.split(`
`).length>2||i.charAt(0)=="{"?e=ye(i):e={}}else t=!0,e=ye(localStorage.getItem(`sapi.${a?"skill":"class"}.${o.name}`)||"");else{let i;c.type=="class"?i=await Se.getClassYaml(o.name):c.type==="skill"?i=await Se.getSkillYaml(o.name):i=await Se.getAttributeYaml(),e=ye(i)}e&&Object.keys(e).length>0&&(o instanceof we?o.load(e[o.name]):o.load(Object.values(e)[0])),t&&a&&o.postLoad()}switch(t&&!a&&mt(o),Ze.set(o),c.type){case"skill":Te.set(xe.SKILLS);break;case"attribute":Te.set(xe.ATTRIBUTES);break;default:Te.set(xe.CLASSES);break}return{data:o}}else n?Oe(302,`/${c.type}/${n.name}`):Oe(302,"/")}const mt=c=>{for(const l of Ae.getAttributeNames())c.attributes.find(a=>a.name===l)||c.attributes.push({name:l,base:0,scale:0})},Xt=Object.freeze(Object.defineProperty({__proto__:null,load:ht,ssr:vt},Symbol.toStringTag,{value:"Module"}));var bt=C("<!> <!> <!>",1);function qe(c,l){N(l,!0);const[a,o]=Re(),n=()=>ke(et,"$activeType",a);let t=K(l,"icon",15);var e=bt(),i=F(e);r(i,{label:"Icon",get tooltip(){return`[icon] The item that represents the ${n()??""} in GUIs`},children:(p,u)=>{Ke(p,{get selected(){return t().material},set selected(h){t(t().material=h,!0)}})},$$slots:{default:!0}});var m=s(i,2);r(m,{label:"CustomModelData",type:"number",intMode:!0,get tooltip(){return`[icon-data] The CustomModelData of the item that represents the ${n()??""} in GUIs`},get value(){return t().customModelData},set value(p){t(t().customModelData=p,!0)}});var _=s(m,2);const k=J(()=>"[icon-lore]"+n()=="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values');r(_,{label:"Icon Lore",get tooltip(){return g(k)},children:(p,u)=>{U(p,{get value(){return t().lore},set value(h){t(t().lore=h,!0)}})},$$slots:{default:!0}}),y(c,e),E(),o()}var ft=C('<div class="entry svelte-wejg12" tabindex="0" role="menuitem"> </div>'),pt=C('<div class="input svelte-wejg12"></div>');function gt(c,l){let a=K(l,"value",15,273);var o=pt();oe(o,21,()=>l.data,he,(n,t,e)=>{var i=ft();i.__click=()=>a(a()^Math.pow(2,e));var m=x(i,!0);S(i),Y(_=>{Qe(i,"selected",_),se(m,g(t))},[()=>a()&Math.pow(2,e)]),_e("keypress",i,_=>{_.key==="Enter"&&a(a()^Math.pow(2,e))}),y(n,i)}),S(o),y(c,o)}We(["click"]);var _t=C('<select id="skill-tree"><option>Custom</option><option>Requirement</option><option>Basic Horizontal</option><option>Basic Vertical</option><option>Level Horizontal</option><option>Level Vertical</option><option>Flood</option></select>'),kt=(c,l)=>ge(l,!g(l)),$t=C(`<div class="info svelte-1v5246t">These are the materials that can be used as combo starters. If a material is not in the list, it
			cannot be used as a combo starter. If the list is inverted, then the materials in the list cannot be used as combo
			starters</div> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),yt=C('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="info svelte-1v5246t">Drag & Drop your attributes file to use your custom attributes</div> <!> <!> <!> <!> <!> <!> <div class="header combos svelte-1v5246t" role="button" tabindex="0">Combo Starters <span class="material-symbols-rounded"> </span></div> <!>',1);function St(c,l){N(l,!0);const[a,o]=Re(),n=()=>ke(_,"$classes",a),t=()=>ke(k,"$skills",a);let e=K(l,"data",15),i=Ue(!1),m;const _=Ve.classes,k=Le.skills;rt(()=>{m=Ae.attributes.subscribe(T=>{const I=[];e(e().attributes=e().attributes.filter(L=>T.some($=>$.name===L.name)?(I.push(L.name),!0):!1),!0);for(const L of T.filter($=>!I.includes($.name)))e().attributes.push({name:L.name,base:0,scale:0})})}),nt(()=>{m&&m()}),$e(()=>{var T;return(T=l.onsave)==null?void 0:T.call(l)});var p=ve(),u=F(p);{var h=T=>{var I=yt(),L=F(I);r(L,{label:"Name",tooltip:"The name of the class. This should not contain color codes",get value(){return e().name},set value(d){e(e().name=d,!0)}});var $=s(L,2);r($,{label:"Prefix",tooltip:"The prefix given to players who profess as the class which can contain color codes",get value(){return e().prefix},set value(d){e(e().prefix=d,!0)}});var A=s($,2);r(A,{label:"Action Bar",tooltip:"The format for the action bar. Leave blank to use the default formatting",get value(){return e().actionBar},set value(d){e(e().actionBar=d,!0)}});var D=s(A,2);r(D,{label:"Group",tooltip:'A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group',get value(){return e().group},set value(d){e(e().group=d,!0)}});var Q=s(D,2);r(Q,{label:"Mana Name",tooltip:"The name the class uses for mana",get value(){return e().manaName},set value(d){e(e().manaName=d,!0)}});var q=s(Q,2);r(q,{label:"Max Level",tooltip:"The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes",get value(){return e().maxLevel},set value(d){e(e().maxLevel=d,!0)}});var j=s(q,2);r(j,{label:"Parent",tooltip:"The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter",children:(d,R)=>{const w=J(()=>n().filter(M=>M!==e()));ae(d,{id:"parent",get data(){return g(w)},get selected(){return e().parent},set selected(M){e(e().parent=M,!0)}})},$$slots:{default:!0}});var re=s(j,2);const me=J(()=>e().name.toLowerCase());r(re,{label:"Permission",get tooltip(){return`Whether the class requires a permission to be professed as. The permission would be "skillapi.class.${g(me)??""}"`},children:(d,R)=>{B(d,{get data(){return e().permission},set data(w){e(e().permission=w,!0)}})},$$slots:{default:!0}});var ne=s(re,2);r(ne,{label:"Exp Sources",tooltip:'The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml',children:(d,R)=>{gt(d,{data:tt,get value(){return e().expSources},set value(w){e(e().expSources=w,!0)}})},$$slots:{default:!0}});var ie=s(ne,2);r(ie,{label:"Health",tooltip:"The amount of health the class has",children:(d,R)=>{V(d,{get value(){return e().health}})},$$slots:{default:!0}});var ue=s(ie,2);r(ue,{label:"Mana",tooltip:"The amount of mana the class has",children:(d,R)=>{V(d,{get value(){return e().mana}})},$$slots:{default:!0}});var be=s(ue,4);oe(be,17,()=>e().attributes,d=>d.name,(d,R)=>{const w=J(()=>at(g(R).name));r(d,{get label(){return g(w)},get tooltip(){return`The amount of ${g(R).name??""} the class has`},children:(M,G)=>{V(M,{get value(){return g(R)}})},$$slots:{default:!0}})});var v=s(be,2);r(v,{label:"Mana Regen",tooltip:"The amount of mana the class regenerates at each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval",get value(){return e().manaRegen},set value(d){e(e().manaRegen=d,!0)}});var z=s(v,2);r(z,{label:"Skill Tree",tooltip:"The type of skill tree to use",children:(d,R)=>{var w=_t(),M=x(w);M.value=(M.__value="Custom")==null?"":"Custom";var G=s(M);G.value=(G.__value="Requirement")==null?"":"Requirement";var X=s(G);X.value=(X.__value="Basic Horizontal")==null?"":"Basic Horizontal";var Z=s(X);Z.value=(Z.__value="Basic Vertical")==null?"":"Basic Vertical";var ee=s(Z);ee.value=(ee.__value="Level Horizontal")==null?"":"Level Horizontal";var te=s(ee);te.value=(te.__value="Level Vertical")==null?"":"Level Vertical";var ce=s(te);ce.value=(ce.__value="Flood")==null?"":"Flood",S(w),dt(w,()=>e().skillTree,fe=>e(e().skillTree=fe,!0)),y(d,w)},$$slots:{default:!0}});var P=s(z,2);r(P,{label:"Skills",tooltip:"The skills the class is able to use",children:(d,R)=>{ae(d,{id:"skills",get data(){return t()},multiple:!0,placeholder:"No Skills",get selected(){return e().skills},set selected(w){e(e().skills=w,!0)}})},$$slots:{default:!0}});var O=s(P,2);qe(O,{get icon(){return e().icon},set icon(d){e(e().icon=d,!0)}});var Me=s(O,2);r(Me,{label:"Unusable items",tooltip:"[blacklist] The types of items that the class cannot use",children:(d,R)=>{Ke(d,{multiple:!0,get selected(){return e().unusableItems},set selected(w){e(e().unusableItems=w,!0)}})},$$slots:{default:!0}});var de=s(Me,2);de.__click=[kt,i];var Fe=s(x(de)),Ye=x(Fe,!0);S(Fe),S(de);var Ge=s(de,2);{var Je=d=>{var R=$t(),w=s(F(R),2);r(w,{label:"L Inverted",tooltip:"Whether the L list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().lInverted},set data(f){e(e().lInverted=f,!0)}})},$$slots:{default:!0}});var M=s(w,2);r(M,{label:"L Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().lWhitelist},set value(f){e(e().lWhitelist=f,!0)}})},$$slots:{default:!0}});var G=s(M,2);r(G,{label:"R Inverted",tooltip:"Whether the R list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().rInverted},set data(f){e(e().rInverted=f,!0)}})},$$slots:{default:!0}});var X=s(G,2);r(X,{label:"R Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().rWhitelist},set value(f){e(e().rWhitelist=f,!0)}})},$$slots:{default:!0}});var Z=s(X,2);r(Z,{label:"LS Inverted",tooltip:"Whether the LS list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().lsInverted},set data(f){e(e().lsInverted=f,!0)}})},$$slots:{default:!0}});var ee=s(Z,2);r(ee,{label:"LS Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().lsWhitelist},set value(f){e(e().lsWhitelist=f,!0)}})},$$slots:{default:!0}});var te=s(ee,2);r(te,{label:"RS Inverted",tooltip:"Whether the RS list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().rsInverted},set data(f){e(e().rsInverted=f,!0)}})},$$slots:{default:!0}});var ce=s(te,2);r(ce,{label:"RS Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().rsWhitelist},set value(f){e(e().rsWhitelist=f,!0)}})},$$slots:{default:!0}});var fe=s(ce,2);r(fe,{label:"S Inverted",tooltip:"Whether the S list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().rsInverted},set data(f){e(e().rsInverted=f,!0)}})},$$slots:{default:!0}});var De=s(fe,2);r(De,{label:"S Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().rsWhitelist},set value(f){e(e().rsWhitelist=f,!0)}})},$$slots:{default:!0}});var ze=s(De,2);r(ze,{label:"P Inverted",tooltip:"Whether the P list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().pInverted},set data(f){e(e().pInverted=f,!0)}})},$$slots:{default:!0}});var Be=s(ze,2);r(Be,{label:"P Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().pWhitelist},set value(f){e(e().pWhitelist=f,!0)}})},$$slots:{default:!0}});var He=s(Be,2);r(He,{label:"Q Inverted",tooltip:"Whether the Q list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().qInverted},set data(f){e(e().qInverted=f,!0)}})},$$slots:{default:!0}});var Ne=s(He,2);r(Ne,{label:"Q Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().qWhitelist},set value(f){e(e().qWhitelist=f,!0)}})},$$slots:{default:!0}});var Ee=s(Ne,2);r(Ee,{label:"F Inverted",tooltip:"Whether the F list should be used as a blacklist",children:(b,W)=>{B(b,{get data(){return e().fInverted},set data(f){e(e().fInverted=f,!0)}})},$$slots:{default:!0}});var Xe=s(Ee,2);r(Xe,{label:"F Whitelist",tooltip:"The materials that can be used as combo starters",children:(b,W)=>{U(b,{get value(){return e().fWhitelist},set value(f){e(e().fWhitelist=f,!0)}})},$$slots:{default:!0}}),y(d,R)};H(Ge,d=>{g(i)&&d(Je)})}Y(()=>se(Ye,g(i)?"expand_less":"expand_more")),_e("keypress",de,d=>{d.key==="Enter"&&ge(i,!g(i))}),y(T,I)};H(u,T=>{e()&&T(h)})}y(c,p),E(),o()}We(["click"]);var Tt=(c,l,a)=>l(g(a)),xt=C('<div class="attr svelte-1ihs233" tabindex="0" role="button" aria-label="Remove Attribute" title="Remove Attribute"><div class="name svelte-1ihs233"> </div> <div class="value svelte-1ihs233"> </div></div>'),Pt=C('<div class="wrapper svelte-1ihs233"></div>'),It=C('<!> <!> <!> <div aria-label="Add Attribute" class="btn svelte-1ihs233" role="button" tabindex="0" title="Add Attribute">Add Attribute</div>',1);function wt(c,l){N(l,!0);let a=K(l,"value",31,()=>pe([])),o=Ue(pe({name:"",base:0,scale:0}));const n=u=>{g(o).name&&(u&&u.type==="keypress"&&u.key!=="Enter"||(a([...a(),g(o)]),ge(o,pe({name:"",base:0,scale:0}))))},t=u=>{a(a().filter(h=>h!==u))};var e=It(),i=F(e);{var m=u=>{var h=Pt();oe(h,21,a,he,(T,I,L,$)=>{var A=xt();A.__click=[Tt,t,I];var D=x(A),Q=x(D,!0);S(D);var q=s(D,2),j=x(q);S(q),S(A),Y(()=>{se(Q,g(I).name),se(j,`${g(I).base??""}+(${g(I).scale??""})`)}),_e("keypress",A,()=>t(g(I))),y(T,A)}),S(h),y(u,h)};H(i,u=>{a().length>0&&u(m)})}var _=s(i,2);r(_,{label:"Attribute Name",placeholder:"Attribute Name",get value(){return g(o).name},set value(u){g(o).name=u}});var k=s(_,2);r(k,{get label(){return`${g(o).name??""} Value`},children:(u,h)=>{V(u,{get value(){return g(o)},set value(T){ge(o,pe(T))}})},$$slots:{default:!0}});var p=s(k,2);p.__click=n,Y(()=>Qe(p,"disabled",!g(o).name)),_e("keypress",p,n),y(c,e),E()}We(["click"]);var Ct=C('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="header svelte-mjz973">Requirements</div> <!> <!> <!> <!> <!> <div class="header svelte-mjz973">Attribute Requirements</div> <!>',1);function At(c,l){N(l,!0);const[a,o]=Re(),n=()=>ke(e,"$skills",a);let t=K(l,"data",15);const e=Le.skills;$e(()=>{var k;return(k=l.onsave)==null?void 0:k.call(l)});var i=ve(),m=F(i);{var _=k=>{var p=Ct(),u=F(p);r(u,{label:"Name",tooltip:"The name of the skill. This should not contain color codes",get value(){return t().name},set value(v){t(t().name=v,!0)}});var h=s(u,2);r(h,{label:"Type",tooltip:'The flavor text describing the skill such as "AOE utility" or whatever you want it to be',get value(){return t().type},set value(v){t(t().type=v,!0)}});var T=s(h,2);r(T,{label:"Max Level",tooltip:"The maximum level the skill can reach",get value(){return t().maxLevel},set value(v){t(t().maxLevel=v,!0)}});var I=s(T,2);r(I,{label:"Cost",tooltip:"The amount of skill points needed to unlock and upgrade this skill",children:(v,z)=>{V(v,{get value(){return t().cost},set value(P){t(t().cost=P,!0)}})},$$slots:{default:!0}});var L=s(I,2);r(L,{label:"Cooldown",tooltip:"The time in seconds before the skill can be cast again (only works with the Cast trigger)",children:(v,z)=>{V(v,{get value(){return t().cooldown},set value(P){t(t().cooldown=P,!0)}})},$$slots:{default:!0}});var $=s(L,2);r($,{label:"Cooldown Message",tooltip:"Whether to send a message when attempting to run the skill while in cooldown",children:(v,z)=>{B(v,{get data(){return t().cooldownMessage},set data(P){t(t().cooldownMessage=P,!0)}})},$$slots:{default:!0}});var A=s($,2);r(A,{label:"Mana",tooltip:"The amount of mana it takes to cast the skill (only works with the Cast trigger)",children:(v,z)=>{V(v,{get value(){return t().mana},set value(P){t(t().mana=P,!0)}})},$$slots:{default:!0}});var D=s(A,2);r(D,{label:"Cast Message",tooltip:"The message to display to players around the caster when the skill is cast. The radius of the area is in the config.yml options",get value(){return t().castMessage},set value(v){t(t().castMessage=v,!0)}});var Q=s(D,2);r(Q,{label:"Combo",tooltip:'The click combo to assign the skill (if enabled). Use L, R, S, LS, RS, P, Q and F for the types of clicks separated by spaces. For example, "L L R R" would work for 4 click combos.',get value(){return t().combo},set value(v){t(t().combo=v,!0)}});var q=s(Q,2);qe(q,{get icon(){return t().icon},set icon(v){t(t().icon=v,!0)}});var j=s(q,2);r(j,{label:"Incompatible",tooltip:"List of skills that must not be upgraded in order to upgrade this skill",children:(v,z)=>{const P=J(()=>n().filter(O=>O!==t()));ae(v,{multiple:!0,get data(){return g(P)},get selected(){return t().incompatible},set selected(O){t(t().incompatible=O,!0)}})},$$slots:{default:!0}});var re=s(j,4);r(re,{label:"Skill Requirement",tooltip:"The skill that needs to be upgraded before this one can be unlocked",children:(v,z)=>{const P=J(()=>n().filter(O=>O!==t()));ae(v,{id:"skillReq",get data(){return g(P)},get selected(){return t().skillReq},set selected(O){t(t().skillReq=O,!0)}})},$$slots:{default:!0}});var me=s(re,2);r(me,{label:"Skill Req Level",tooltip:"The level that the required skill needs to reach before this one can be unlocked",get value(){return t().skillReqLevel},set value(v){t(t().skillReqLevel=v,!0)}});var ne=s(me,2);r(ne,{label:"Permission",get tooltip(){return`Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.${t().name??""}"`},children:(v,z)=>{B(v,{get data(){return t().permission},set data(P){t(t().permission=P,!0)}})},$$slots:{default:!0}});var ie=s(ne,2);r(ie,{label:"Level Req",tooltip:"The class level the player needs to be before unlocking or upgrading this skill",children:(v,z)=>{V(v,{get value(){return t().levelReq},set value(P){t(t().levelReq=P,!0)}})},$$slots:{default:!0}});var ue=s(ie,2);r(ue,{label:"Min Spent",tooltip:"The amount of skill points that need to be spent before upgrading this skill",children:(v,z)=>{V(v,{get value(){return t().minSpent},set value(P){t(t().minSpent=P,!0)}})},$$slots:{default:!0}});var be=s(ue,4);wt(be,{get value(){return t().attributeRequirements},set value(v){t(t().attributeRequirements=v,!0)}}),y(k,p)};H(m,k=>{t()&&k(_)})}y(c,i),E(),o()}var Lt=C('<div class="stat svelte-19i6c7i"><div class="btn-del svelte-19i6c7i"><!></div> <!> <!></div>');function Wt(c,l){N(l,!0);let a=K(l,"stat",15);var o=Lt(),n=x(o),t=x(n);le(t,{title:"Delete stat",icon:"delete",color:"red",onclick:()=>l.component.removeStat(a()),onkeypress:()=>l.component.removeStat(a())}),S(n);var e=s(n,2);r(e,{label:"Option",tooltip:"Attribute option to modify based on attribute value",children:(m,_)=>{ae(m,{get data(){return l.component.availableStats},multiple:!1,get selected(){return a().key},set selected(k){a(a().key=k,!0)}})},$$slots:{default:!0}});var i=s(e,2);Ce(i,{name:"Formula",tooltip:"Formula to modify the option by",get data(){return a().formula},set data(m){a(a().formula=m,!0)}}),S(o),y(c,o),E()}var Rt=C('<div class="component svelte-k4qkgo"><div class="componentTitle svelte-k4qkgo"><!></div> <!> <div class="controls svelte-k4qkgo"><!> <!></div></div>');function qt(c,l){N(l,!0);let a=K(l,"component",7);$e(()=>a().section.attribute.save());var o=Rt(),n=x(o),t=x(n);r(t,{label:"Component",tooltip:"The component to modify options to",children:(p,u)=>{ae(p,{get data(){return l.section.availableComponents},multiple:!1,get selected(){return a().name},set selected(h){a().name=h}})},$$slots:{default:!0}}),S(n);var e=s(n,2);oe(e,17,()=>a().stats,he,(p,u)=>{Wt(p,{get stat(){return g(u)},get component(){return a()}})});var i=s(e,2),m=x(i);{var _=p=>{le(p,{title:"Add Stat",icon:"add",color:"gray",onclick:()=>a().addStat(a().availableStats[0]),onkeypress:()=>a().addStat(a().availableStats[0])})};H(m,p=>{a().availableStats.length>0&&p(_)})}var k=s(m,2);le(k,{title:"Delete Component",icon:"delete",color:"red",onclick:()=>l.section.removeComponent(a()),onkeypress:()=>l.section.removeComponent(a())}),S(i),S(o),Y(()=>lt(o,"--comp-color",l.color)),y(c,o),E()}var Mt=C('<div class="btn svelte-1y16mx6"><!></div>'),Ft=C('<div class="section svelte-1y16mx6"><div class="header svelte-1y16mx6"> </div> <!> <!></div>');function Ie(c,l){N(l,!0);let a=l.name==="Target"?"#04af38":l.name==="Condition"?"#feac00":"#ff3a3a";var o=Ft(),n=x(o),t=x(n);S(n);var e=s(n,2);oe(e,17,()=>l.section.components,he,(_,k)=>{qt(_,{color:a,get component(){return g(k)},get section(){return l.section}})});var i=s(e,2);{var m=_=>{var k=Mt(),p=x(k);const u=J(()=>`Add ${l.name}`);le(p,{get title(){return g(u)},icon:"add",color:a,onclick:()=>l.section.addComponent(l.section.availableComponents[0]),onkeypress:()=>l.section.addComponent(l.section.availableComponents[0])}),S(k),y(_,k)};H(i,_=>{l.section.availableComponents.length>0&&_(m)})}S(o),Y(()=>se(t,`${l.name??""} modifiers`)),y(c,o),E()}var Dt=C('<div class="stat svelte-yzok5e"><div class="btn-del svelte-yzok5e"><!></div> <!> <!></div>');function zt(c,l){N(l,!0);let a=K(l,"stat",15);var o=Dt(),n=x(o),t=x(n);le(t,{title:"Delete stat",icon:"delete",color:"red",onclick:()=>l.stats.removeStat(a()),onkeypress:()=>l.stats.removeStat(a())}),S(n);var e=s(n,2);Ce(e,{name:"Stat",tooltip:"Attribute option to modify based on attribute value",get data(){return a().key},set data(m){a(a().key=m,!0)}});var i=s(e,2);Ce(i,{name:"Formula",tooltip:"Formula to modify the option by",get data(){return a().formula},set data(m){a(a().formula=m,!0)}}),S(o),y(c,o),E()}var Bt=C('<div class="stats svelte-3opmim"><div class="header svelte-3opmim">Stat modifiers</div> <!> <div class="btn svelte-3opmim"><!></div></div>');function Ht(c,l){N(l,!0);let a=K(l,"stats",15);var o=Bt(),n=s(x(o),2);oe(n,17,()=>a().stats,he,(i,m)=>{zt(i,{get stat(){return g(m)},get stats(){return a()},set stats(_){a(_)}})});var t=s(n,2),e=x(t);le(e,{color:"gray",icon:"add",onclick:()=>a().addStat(),onkeypress:()=>a().addStat(),title:"Add Stat"}),S(t),S(o),y(c,o),E()}var Nt=C("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Et(c,l){N(l,!0);let a=K(l,"data",15);$e(()=>{var e;return(e=l.onsave)==null?void 0:e.call(l)});var o=ve(),n=F(o);{var t=e=>{var i=Nt(),m=F(i);r(m,{label:"Name",tooltip:"The name of the attribute. This should not contain color codes",get value(){return a().name},set value($){a(a().name=$,!0)}});var _=s(m,2);r(_,{label:"Display",tooltip:"The name of the attribute as it will be displayed in the game",get value(){return a().display},set value($){a(a().display=$,!0)}});var k=s(_,2);r(k,{label:"Max",tooltip:"The maximum points of this attribute that a player can have",get value(){return a().max},set value($){a(a().max=$,!0)}});var p=s(k,2);r(p,{label:"Cost",tooltip:"How many attribute points it costs to upgrade the attribute, increasing with the level of the attribute",children:($,A)=>{V($,{get value(){return a().cost}})},$$slots:{default:!0}});var u=s(p,2);qe(u,{get icon(){return a().icon},set icon($){a(a().icon=$,!0)}});var h=s(u,2);Ie(h,{name:"Target",get section(){return a().targets}});var T=s(h,2);Ie(T,{name:"Condition",get section(){return a().conditions}});var I=s(T,2);Ie(I,{name:"Mechanic",get section(){return a().mechanics}});var L=s(I,2);Ht(L,{get stats(){return a().stats}}),y(e,i)};H(n,e=>{a()&&e(t)})}y(c,o),E()}var jt=C('<a class="material-symbols-rounded chip edit-skill svelte-191pm8d">auto_fix</a>'),Ot=C('<h1 class="svelte-191pm8d"> <!></h1> <hr> <div class="container svelte-191pm8d"><!></div>',1);function Zt(c,l){N(l,!0);const a=()=>l.data.data.save();var o=Ot();ut(u=>{Y(()=>it.title=`Fabled Dynamic Editor - ${l.data.data.name??""}`)});var n=F(o),t=x(n),e=s(t);{var i=u=>{var h=jt();Y(()=>ot(h,"href",`${ct??""}/skill/${l.data.data.name??""}`)),y(u,h)};H(e,u=>{var h;((h=l.data)==null?void 0:h.data)instanceof je&&u(i)})}S(n);var m=s(n,4),_=x(m);{var k=u=>{St(u,{get data(){return l.data.data},onsave:a})},p=u=>{var h=ve(),T=F(h);{var I=$=>{At($,{get data(){return l.data.data},onsave:a})},L=$=>{var A=ve(),D=F(A);{var Q=q=>{Et(q,{get data(){return l.data.data},onsave:a})};H(D,q=>{var j;((j=l.data)==null?void 0:j.data)instanceof we&&q(Q)},!0)}y($,A)};H(T,$=>{var A;((A=l.data)==null?void 0:A.data)instanceof je?$(I):$(L,!1)},!0)}y(u,h)};H(_,u=>{var h;((h=l.data)==null?void 0:h.data)instanceof st?u(k):u(p,!1)})}S(m),Y(()=>{var u,h;return se(t,`${((h=(u=l.data)==null?void 0:u.data)==null?void 0:h.name)??""} `)}),y(c,o),E()}export{Zt as component,Xt as universal};
