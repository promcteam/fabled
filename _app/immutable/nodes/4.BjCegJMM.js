import{y as Ve,H as Ae,x as Le,G as we,p as ye,L as Se,a as Ze,w as Te,T as Pe,Q as o,a7 as Ke,a8 as U,o as et,I as re,q as Qe,K as he,a9 as ae,R as z,aa as tt,ab as O,ac as at,ad as Ce,c as lt,z as je,E as st,b as rt}from"../chunks/Dnsqck_n.js";import{Y as xe,f as H,t as M,y as s,m as g,g as N,q as G,v as V,w as T,x as S,o as ot,az as it,i as $e,H as ge,ag as Ue,$ as nt}from"../chunks/BnbjF3vi.js";import{r as Oe,C as le}from"../chunks/Cse3i9T6.js";import{a as y,t as C,d as We,s as se,e as _e,c as ce,h as ut}from"../chunks/BdepqD-s.js";import{p as K,s as Re,d as ke,a as B,b as pe}from"../chunks/D6kVIKg-.js";import{b as dt}from"../chunks/DpVgS7EE.js";import{b as vt}from"../chunks/DPE88aEC.js";const ct=!1;async function ht({params:v}){const l=v.id,a=v.type==="skill";let r,i;switch(v.type){case"skill":for(const t of xe(Le.skills))if(i||(i=t),t.name==l){r=t;break}break;case"attribute":for(const t of xe(Ae.attributes))if(i||(i=t),t.name==l){r=t;break}break;default:for(const t of xe(Ve.classes))if(i||(i=t),t.name==l){r=t;break}break}if(r){let t=!1;if(!r.loaded){let e;if(r.location==="local")if(r instanceof we){const n=localStorage.getItem("attribs")||"";n.split(`
`).length>2||n.charAt(0)=="{"?e=ye(n):e={}}else t=!0,e=ye(localStorage.getItem(`sapi.${a?"skill":"class"}.${r.name}`)||"");else{let n;v.type=="class"?n=await Se.getClassYaml(r.name):v.type==="skill"?n=await Se.getSkillYaml(r.name):n=await Se.getAttributeYaml(),e=ye(n)}e&&Object.keys(e).length>0&&(r instanceof we?r.load(e[r.name]):r.load(Object.values(e)[0])),t&&a&&r.postLoad()}switch(t&&!a&&mt(r),Ze.set(r),v.type){case"skill":Te.set(Pe.SKILLS);break;case"attribute":Te.set(Pe.ATTRIBUTES);break;default:Te.set(Pe.CLASSES);break}return{data:r}}else i?Oe(302,`/${v.type}/${i.name}`):Oe(302,"/")}const mt=v=>{for(const l of Ae.getAttributeNames())v.attributes.find(a=>a.name===l)||v.attributes.push({name:l,base:0,scale:0})},Xt=Object.freeze(Object.defineProperty({__proto__:null,load:ht,ssr:ct},Symbol.toStringTag,{value:"Module"}));var bt=C("<!> <!> <!>",1);function qe(v,l){H(l,!0);const[a,r]=Re(),i=()=>ke(et,"$activeType",a);let t=K(l,"icon",15);var e=bt(),n=M(e);o(n,{label:"Icon",get tooltip(){return`[icon] The item that represents the ${i()??""} in GUIs`},children:(k,u)=>{Ke(k,{get selected(){return t().material},set selected(h){t(t().material=h,!0)}})},$$slots:{default:!0}});var m=s(n,2);o(m,{label:"CustomModelData",type:"number",intMode:!0,get tooltip(){return`[icon-data] The CustomModelData of the item that represents the ${i()??""} in GUIs`},get value(){return t().customModelData},set value(k){t(t().customModelData=k,!0)}});var $=s(m,2),_=G(()=>"[icon-lore]"+i()=="class"?"The item's lore description":'The description shown for the item in skill trees. Include values of mechanics such as damage dealt using their "Icon Key" values');o($,{label:"Icon Lore",get tooltip(){return g(_)},children:(k,u)=>{U(k,{get value(){return t().lore},set value(h){t(t().lore=h,!0)}})},$$slots:{default:!0}}),y(v,e),N(),r()}var ft=C('<div class="entry svelte-wejg12" tabindex="0" role="menuitem"> </div>'),pt=C('<div class="input svelte-wejg12"></div>');function gt(v,l){let a=K(l,"value",15,273);var r=pt();re(r,21,()=>l.data,he,(i,t,e)=>{var n=ft();n.__click=()=>a(a()^Math.pow(2,e));const m=G(()=>a()&Math.pow(2,e));V(()=>Qe(n,"selected",g(m)));var $=T(n,!0);S(n),V(()=>se($,g(t))),_e("keypress",n,_=>{_.key==="Enter"&&a(a()^Math.pow(2,e))}),y(i,n)}),S(r),y(v,r)}We(["click"]);var _t=C('<select id="skill-tree"><option>Custom</option><option>Requirement</option><option>Basic Horizontal</option><option>Basic Vertical</option><option>Level Horizontal</option><option>Level Vertical</option><option>Flood</option></select>'),kt=(v,l)=>ge(l,!g(l)),$t=C(`<div class="info svelte-1v5246t">These are the materials that can be used as combo starters. If a material is not in the list, it
			cannot be used as a combo starter. If the list is inverted, then the materials in the list cannot be used as combo
			starters</div> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`,1),yt=C('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="info svelte-1v5246t">Drag & Drop your attributes file to use your custom attributes</div> <!> <!> <!> <!> <!> <!> <div class="header combos svelte-1v5246t" role="button" tabindex="0">Combo Starters <span class="material-symbols-rounded"> </span></div> <!>',1);function St(v,l){H(l,!0);const[a,r]=Re(),i=()=>ke($,"$classes",a),t=()=>ke(_,"$skills",a);let e=K(l,"data",15),n=Ue(!1),m;const $=Ve.classes,_=Le.skills;ot(()=>{m=Ae.attributes.subscribe(P=>{const L=[];e(e().attributes=e().attributes.filter(x=>P.some(b=>b.name===x.name)?(L.push(x.name),!0):!1),!0);for(const x of P.filter(b=>!L.includes(b.name)))e().attributes.push({name:x.name,base:0,scale:0})})}),it(()=>{m&&m()}),$e(()=>{var P;return(P=l.onsave)==null?void 0:P.call(l)});var k=ce(),u=M(k);{var h=P=>{var L=yt(),x=M(L);o(x,{label:"Name",tooltip:"The name of the class. This should not contain color codes",get value(){return e().name},set value(d){e(e().name=d,!0)}});var b=s(x,2);o(b,{label:"Prefix",tooltip:"The prefix given to players who profess as the class which can contain color codes",get value(){return e().prefix},set value(d){e(e().prefix=d,!0)}});var A=s(b,2);o(A,{label:"Action Bar",tooltip:"The format for the action bar. Leave blank to use the default formatting",get value(){return e().actionBar},set value(d){e(e().actionBar=d,!0)}});var Q=s(A,2);o(Q,{label:"Group",tooltip:'A class group are things such as "race", "class", and "trade". Different groups can be professed through at the same time, one class from each group',get value(){return e().group},set value(d){e(e().group=d,!0)}});var E=s(Q,2);o(E,{label:"Mana Name",tooltip:"The name the class uses for mana",get value(){return e().manaName},set value(d){e(e().manaName=d,!0)}});var F=s(E,2);o(F,{label:"Max Level",tooltip:"The maximum level the class can reach. If this class turns into other classes, this will also be the level it can profess into those classes",get value(){return e().maxLevel},set value(d){e(e().maxLevel=d,!0)}});var Y=s(F,2);o(Y,{label:"Parent",tooltip:"The class that turns into this one. For example, if Fighter turns into Knight, then Knight would have its parent as Fighter",children:(d,R)=>{var w=G(()=>i().filter(q=>q!==e()));ae(d,{id:"parent",get data(){return g(w)},get selected(){return e().parent},set selected(q){e(e().parent=q,!0)}})},$$slots:{default:!0}});var oe=s(Y,2),me=G(()=>`Whether the class requires a permission to be professed as. The permission would be "skillapi.class.${e().name.toLowerCase()??""}"`);o(oe,{label:"Permission",get tooltip(){return g(me)},children:(d,R)=>{z(d,{get data(){return e().permission},set data(w){e(e().permission=w,!0)}})},$$slots:{default:!0}});var ie=s(oe,2);o(ie,{label:"Exp Sources",tooltip:'The experience sources the class goes up from. Most of these only work if "use-exp-orbs" is enabled in the config.yml',children:(d,R)=>{gt(d,{data:tt,get value(){return e().expSources},set value(w){e(e().expSources=w,!0)}})},$$slots:{default:!0}});var ne=s(ie,2);o(ne,{label:"Health",tooltip:"The amount of health the class has",children:(d,R)=>{O(d,{get value(){return e().health}})},$$slots:{default:!0}});var ue=s(ne,2);o(ue,{label:"Mana",tooltip:"The amount of mana the class has",children:(d,R)=>{O(d,{get value(){return e().mana}})},$$slots:{default:!0}});var be=s(ue,4);re(be,17,()=>e().attributes,d=>d.name,(d,R)=>{var w=G(()=>at(g(R).name));o(d,{get label(){return g(w)},get tooltip(){return`The amount of ${g(R).name??""} the class has`},children:(q,J)=>{O(q,{get value(){return g(R)}})},$$slots:{default:!0}})});var c=s(be,2);o(c,{label:"Mana Regen",tooltip:"The amount of mana the class regenerates at each interval. The interval is in the config.yml and by default is once every second. If you want to regen a decimal amount per second, increase the interval",get value(){return e().manaRegen},set value(d){e(e().manaRegen=d,!0)}});var D=s(c,2);o(D,{label:"Skill Tree",tooltip:"The type of skill tree to use",children:(d,R)=>{var w=_t(),q=T(w);q.value=(q.__value="Custom")==null?"":"Custom";var J=s(q);J.value=(J.__value="Requirement")==null?"":"Requirement";var X=s(J);X.value=(X.__value="Basic Horizontal")==null?"":"Basic Horizontal";var Z=s(X);Z.value=(Z.__value="Basic Vertical")==null?"":"Basic Vertical";var ee=s(Z);ee.value=(ee.__value="Level Horizontal")==null?"":"Level Horizontal";var te=s(ee);te.value=(te.__value="Level Vertical")==null?"":"Level Vertical";var ve=s(te);ve.value=(ve.__value="Flood")==null?"":"Flood",S(w),dt(w,()=>e().skillTree,fe=>e(e().skillTree=fe,!0)),y(d,w)},$$slots:{default:!0}});var I=s(D,2);o(I,{label:"Skills",tooltip:"The skills the class is able to use",children:(d,R)=>{ae(d,{id:"skills",get data(){return t()},multiple:!0,placeholder:"No Skills",get selected(){return e().skills},set selected(w){e(e().skills=w,!0)}})},$$slots:{default:!0}});var j=s(I,2);qe(j,{get icon(){return e().icon},set icon(d){e(e().icon=d,!0)}});var Me=s(j,2);o(Me,{label:"Unusable items",tooltip:"[blacklist] The types of items that the class cannot use",children:(d,R)=>{Ke(d,{multiple:!0,get selected(){return e().unusableItems},set selected(w){e(e().unusableItems=w,!0)}})},$$slots:{default:!0}});var de=s(Me,2);de.__click=[kt,n];var Fe=s(T(de)),Ye=T(Fe,!0);S(Fe),S(de);var Ge=s(de,2);{var Je=d=>{var R=$t(),w=s(M(R),2);o(w,{label:"L Inverted",tooltip:"Whether the L list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().lInverted},set data(p){e(e().lInverted=p,!0)}})},$$slots:{default:!0}});var q=s(w,2);o(q,{label:"L Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().lWhitelist},set value(p){e(e().lWhitelist=p,!0)}})},$$slots:{default:!0}});var J=s(q,2);o(J,{label:"R Inverted",tooltip:"Whether the R list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().rInverted},set data(p){e(e().rInverted=p,!0)}})},$$slots:{default:!0}});var X=s(J,2);o(X,{label:"R Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().rWhitelist},set value(p){e(e().rWhitelist=p,!0)}})},$$slots:{default:!0}});var Z=s(X,2);o(Z,{label:"LS Inverted",tooltip:"Whether the LS list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().lsInverted},set data(p){e(e().lsInverted=p,!0)}})},$$slots:{default:!0}});var ee=s(Z,2);o(ee,{label:"LS Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().lsWhitelist},set value(p){e(e().lsWhitelist=p,!0)}})},$$slots:{default:!0}});var te=s(ee,2);o(te,{label:"RS Inverted",tooltip:"Whether the RS list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().rsInverted},set data(p){e(e().rsInverted=p,!0)}})},$$slots:{default:!0}});var ve=s(te,2);o(ve,{label:"RS Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().rsWhitelist},set value(p){e(e().rsWhitelist=p,!0)}})},$$slots:{default:!0}});var fe=s(ve,2);o(fe,{label:"S Inverted",tooltip:"Whether the S list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().rsInverted},set data(p){e(e().rsInverted=p,!0)}})},$$slots:{default:!0}});var De=s(fe,2);o(De,{label:"S Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().rsWhitelist},set value(p){e(e().rsWhitelist=p,!0)}})},$$slots:{default:!0}});var ze=s(De,2);o(ze,{label:"P Inverted",tooltip:"Whether the P list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().pInverted},set data(p){e(e().pInverted=p,!0)}})},$$slots:{default:!0}});var Be=s(ze,2);o(Be,{label:"P Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().pWhitelist},set value(p){e(e().pWhitelist=p,!0)}})},$$slots:{default:!0}});var He=s(Be,2);o(He,{label:"Q Inverted",tooltip:"Whether the Q list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().qInverted},set data(p){e(e().qInverted=p,!0)}})},$$slots:{default:!0}});var Ne=s(He,2);o(Ne,{label:"Q Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().qWhitelist},set value(p){e(e().qWhitelist=p,!0)}})},$$slots:{default:!0}});var Ee=s(Ne,2);o(Ee,{label:"F Inverted",tooltip:"Whether the F list should be used as a blacklist",children:(f,W)=>{z(f,{get data(){return e().fInverted},set data(p){e(e().fInverted=p,!0)}})},$$slots:{default:!0}});var Xe=s(Ee,2);o(Xe,{label:"F Whitelist",tooltip:"The materials that can be used as combo starters",children:(f,W)=>{U(f,{get value(){return e().fWhitelist},set value(p){e(e().fWhitelist=p,!0)}})},$$slots:{default:!0}}),y(d,R)};B(Ge,d=>{g(n)&&d(Je)})}V(()=>se(Ye,g(n)?"expand_less":"expand_more")),_e("keypress",de,d=>{d.key==="Enter"&&ge(n,!g(n))}),y(P,L)};B(u,P=>{e()&&P(h)})}y(v,k),N(),r()}We(["click"]);var Tt=(v,l,a)=>l(g(a)),Pt=C('<div class="attr svelte-1ihs233" tabindex="0" role="button" aria-label="Remove Attribute" title="Remove Attribute"><div class="name svelte-1ihs233"> </div> <div class="value svelte-1ihs233"> </div></div>'),xt=C('<div class="wrapper svelte-1ihs233"></div>'),It=C('<!> <!> <!> <div aria-label="Add Attribute" class="btn svelte-1ihs233" role="button" tabindex="0" title="Add Attribute">Add Attribute</div>',1);function wt(v,l){H(l,!0);let a=K(l,"value",31,()=>pe([])),r=Ue(pe({name:"",base:0,scale:0}));const i=u=>{g(r).name&&(u&&u.type==="keypress"&&u.key!=="Enter"||(a([...a(),g(r)]),ge(r,pe({name:"",base:0,scale:0}))))},t=u=>{a(a().filter(h=>h!==u))};var e=It(),n=M(e);{var m=u=>{var h=xt();re(h,21,a,he,(L,x)=>{var b=Pt();b.__click=[Tt,t,x];var A=T(b),Q=T(A,!0);S(A);var E=s(A,2),F=T(E);S(E),S(b),V(()=>{se(Q,g(x).name),se(F,`${g(x).base??""}+(${g(x).scale??""})`)}),_e("keypress",b,()=>t(g(x))),y(L,b)}),S(h),y(u,h)};B(n,u=>{a().length>0&&u(m)})}var $=s(n,2);o($,{label:"Attribute Name",placeholder:"Attribute Name",get value(){return g(r).name},set value(u){g(r).name=u}});var _=s($,2);o(_,{get label(){return`${g(r).name??""} Value`},children:(u,h)=>{O(u,{get value(){return g(r)},set value(P){ge(r,pe(P))}})},$$slots:{default:!0}});var k=s(_,2);k.__click=i,V(()=>Qe(k,"disabled",!g(r).name)),_e("keypress",k,i),y(v,e),N()}We(["click"]);var Ct=C('<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <div class="header svelte-mjz973">Requirements</div> <!> <!> <!> <!> <!> <div class="header svelte-mjz973">Attribute Requirements</div> <!>',1);function At(v,l){H(l,!0);const[a,r]=Re(),i=()=>ke(e,"$skills",a);let t=K(l,"data",15);const e=Le.skills;$e(()=>{var _;return(_=l.onsave)==null?void 0:_.call(l)});var n=ce(),m=M(n);{var $=_=>{var k=Ct(),u=M(k);o(u,{label:"Name",tooltip:"The name of the skill. This should not contain color codes",get value(){return t().name},set value(c){t(t().name=c,!0)}});var h=s(u,2);o(h,{label:"Type",tooltip:'The flavor text describing the skill such as "AOE utility" or whatever you want it to be',get value(){return t().type},set value(c){t(t().type=c,!0)}});var P=s(h,2);o(P,{label:"Max Level",tooltip:"The maximum level the skill can reach",get value(){return t().maxLevel},set value(c){t(t().maxLevel=c,!0)}});var L=s(P,2);o(L,{label:"Cost",tooltip:"The amount of skill points needed to unlock and upgrade this skill",children:(c,D)=>{O(c,{get value(){return t().cost},set value(I){t(t().cost=I,!0)}})},$$slots:{default:!0}});var x=s(L,2);o(x,{label:"Cooldown",tooltip:"The time in seconds before the skill can be cast again (only works with the Cast trigger)",children:(c,D)=>{O(c,{get value(){return t().cooldown},set value(I){t(t().cooldown=I,!0)}})},$$slots:{default:!0}});var b=s(x,2);o(b,{label:"Cooldown Message",tooltip:"Whether to send a message when attempting to run the skill while in cooldown",children:(c,D)=>{z(c,{get data(){return t().cooldownMessage},set data(I){t(t().cooldownMessage=I,!0)}})},$$slots:{default:!0}});var A=s(b,2);o(A,{label:"Mana",tooltip:"The amount of mana it takes to cast the skill (only works with the Cast trigger)",children:(c,D)=>{O(c,{get value(){return t().mana},set value(I){t(t().mana=I,!0)}})},$$slots:{default:!0}});var Q=s(A,2);o(Q,{label:"Cast Message",tooltip:"The message to display to players around the caster when the skill is cast. The radius of the area is in the config.yml options",get value(){return t().castMessage},set value(c){t(t().castMessage=c,!0)}});var E=s(Q,2);o(E,{label:"Combo",tooltip:'The click combo to assign the skill (if enabled). Use L, R, S, LS, RS, P, Q and F for the types of clicks separated by spaces. For example, "L L R R" would work for 4 click combos.',get value(){return t().combo},set value(c){t(t().combo=c,!0)}});var F=s(E,2);qe(F,{get icon(){return t().icon},set icon(c){t(t().icon=c,!0)}});var Y=s(F,2);o(Y,{label:"Incompatible",tooltip:"List of skills that must not be upgraded in order to upgrade this skill",children:(c,D)=>{var I=G(()=>i().filter(j=>j!==t()));ae(c,{multiple:!0,get data(){return g(I)},get selected(){return t().incompatible},set selected(j){t(t().incompatible=j,!0)}})},$$slots:{default:!0}});var oe=s(Y,4);o(oe,{label:"Skill Requirement",tooltip:"The skill that needs to be upgraded before this one can be unlocked",children:(c,D)=>{var I=G(()=>i().filter(j=>j!==t()));ae(c,{id:"skillReq",get data(){return g(I)},get selected(){return t().skillReq},set selected(j){t(t().skillReq=j,!0)}})},$$slots:{default:!0}});var me=s(oe,2);o(me,{label:"Skill Req Level",tooltip:"The level that the required skill needs to reach before this one can be unlocked",get value(){return t().skillReqLevel},set value(c){t(t().skillReqLevel=c,!0)}});var ie=s(me,2);o(ie,{label:"Permission",get tooltip(){return`Whether this skill requires a permission to unlock. The permission would be "skillapi.skill.${t().name??""}"`},children:(c,D)=>{z(c,{get data(){return t().permission},set data(I){t(t().permission=I,!0)}})},$$slots:{default:!0}});var ne=s(ie,2);o(ne,{label:"Level Req",tooltip:"The class level the player needs to be before unlocking or upgrading this skill",children:(c,D)=>{O(c,{get value(){return t().levelReq},set value(I){t(t().levelReq=I,!0)}})},$$slots:{default:!0}});var ue=s(ne,2);o(ue,{label:"Min Spent",tooltip:"The amount of skill points that need to be spent before upgrading this skill",children:(c,D)=>{O(c,{get value(){return t().minSpent},set value(I){t(t().minSpent=I,!0)}})},$$slots:{default:!0}});var be=s(ue,4);wt(be,{get value(){return t().attributeRequirements},set value(c){t(t().attributeRequirements=c,!0)}}),y(_,k)};B(m,_=>{t()&&_($)})}y(v,n),N(),r()}var Lt=C('<div class="stat svelte-19i6c7i"><div class="btn-del svelte-19i6c7i"><!></div> <!> <!></div>');function Wt(v,l){H(l,!0);let a=K(l,"stat",15);var r=Lt(),i=T(r),t=T(i);le(t,{title:"Delete stat",icon:"delete",color:"red",onclick:()=>l.component.removeStat(a()),onkeypress:()=>l.component.removeStat(a())}),S(i);var e=s(i,2);o(e,{label:"Option",tooltip:"Attribute option to modify based on attribute value",children:(m,$)=>{ae(m,{get data(){return l.component.availableStats},multiple:!1,get selected(){return a().key},set selected(_){a(a().key=_,!0)}})},$$slots:{default:!0}});var n=s(e,2);Ce(n,{name:"Formula",tooltip:"Formula to modify the option by",get data(){return a().formula},set data(m){a(a().formula=m,!0)}}),S(r),y(v,r),N()}var Rt=C('<div class="component svelte-k4qkgo"><div class="componentTitle svelte-k4qkgo"><!></div> <!> <div class="controls svelte-k4qkgo"><!> <!></div></div>');function qt(v,l){H(l,!0);let a=K(l,"component",7);$e(()=>a().section.attribute.save());var r=Rt(),i=T(r),t=T(i);o(t,{label:"Component",tooltip:"The component to modify options to",children:(k,u)=>{ae(k,{get data(){return l.section.availableComponents},multiple:!1,get selected(){return a().name},set selected(h){a().name=h}})},$$slots:{default:!0}}),S(i);var e=s(i,2);re(e,17,()=>a().stats,he,(k,u)=>{Wt(k,{get stat(){return g(u)},get component(){return a()}})});var n=s(e,2),m=T(n);{var $=k=>{le(k,{title:"Add Stat",icon:"add",color:"gray",onclick:()=>a().addStat(a().availableStats[0]),onkeypress:()=>a().addStat(a().availableStats[0])})};B(m,k=>{a().availableStats.length>0&&k($)})}var _=s(m,2);le(_,{title:"Delete Component",icon:"delete",color:"red",onclick:()=>l.section.removeComponent(a()),onkeypress:()=>l.section.removeComponent(a())}),S(n),S(r),V(()=>lt(r,"--comp-color",l.color)),y(v,r),N()}var Mt=C('<div class="btn svelte-1y16mx6"><!></div>'),Ft=C('<div class="section svelte-1y16mx6"><div class="header svelte-1y16mx6"> </div> <!> <!></div>');function Ie(v,l){H(l,!0);let a=l.name==="Target"?"#04af38":l.name==="Condition"?"#feac00":"#ff3a3a";var r=Ft(),i=T(r),t=T(i);S(i);var e=s(i,2);re(e,17,()=>l.section.components,he,($,_)=>{qt($,{color:a,get component(){return g(_)},get section(){return l.section}})});var n=s(e,2);{var m=$=>{var _=Mt(),k=T(_),u=G(()=>`Add ${l.name}`);le(k,{get title(){return g(u)},icon:"add",color:a,onclick:()=>l.section.addComponent(l.section.availableComponents[0]),onkeypress:()=>l.section.addComponent(l.section.availableComponents[0])}),S(_),y($,_)};B(n,$=>{l.section.availableComponents.length>0&&$(m)})}S(r),V(()=>se(t,`${l.name??""} modifiers`)),y(v,r),N()}var Dt=C('<div class="stat svelte-yzok5e"><div class="btn-del svelte-yzok5e"><!></div> <!> <!></div>');function zt(v,l){H(l,!0);let a=K(l,"stat",15);var r=Dt(),i=T(r),t=T(i);le(t,{title:"Delete stat",icon:"delete",color:"red",onclick:()=>l.stats.removeStat(a()),onkeypress:()=>l.stats.removeStat(a())}),S(i);var e=s(i,2);Ce(e,{name:"Stat",tooltip:"Attribute option to modify based on attribute value",get data(){return a().key},set data(m){a(a().key=m,!0)}});var n=s(e,2);Ce(n,{name:"Formula",tooltip:"Formula to modify the option by",get data(){return a().formula},set data(m){a(a().formula=m,!0)}}),S(r),y(v,r),N()}var Bt=C('<div class="stats svelte-3opmim"><div class="header svelte-3opmim">Stat modifiers</div> <!> <div class="btn svelte-3opmim"><!></div></div>');function Ht(v,l){H(l,!0);let a=K(l,"stats",15);var r=Bt(),i=s(T(r),2);re(i,17,()=>a().stats,he,(n,m)=>{zt(n,{get stat(){return g(m)},get stats(){return a()},set stats($){a($)}})});var t=s(i,2),e=T(t);le(e,{color:"gray",icon:"add",onclick:()=>a().addStat(),onkeypress:()=>a().addStat(),title:"Add Stat"}),S(t),S(r),y(v,r),N()}var Nt=C("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Et(v,l){H(l,!0);let a=K(l,"data",15);$e(()=>{var e;return(e=l.onsave)==null?void 0:e.call(l)});var r=ce(),i=M(r);{var t=e=>{var n=Nt(),m=M(n);o(m,{label:"Name",tooltip:"The name of the attribute. This should not contain color codes",get value(){return a().name},set value(b){a(a().name=b,!0)}});var $=s(m,2);o($,{label:"Display",tooltip:"The name of the attribute as it will be displayed in the game",get value(){return a().display},set value(b){a(a().display=b,!0)}});var _=s($,2);o(_,{label:"Max",tooltip:"The maximum points of this attribute that a player can have",get value(){return a().max},set value(b){a(a().max=b,!0)}});var k=s(_,2);o(k,{label:"Cost",tooltip:"How many attribute points it costs to upgrade the attribute, increasing with the level of the attribute",children:(b,A)=>{O(b,{get value(){return a().cost}})},$$slots:{default:!0}});var u=s(k,2);qe(u,{get icon(){return a().icon},set icon(b){a(a().icon=b,!0)}});var h=s(u,2);Ie(h,{name:"Target",get section(){return a().targets}});var P=s(h,2);Ie(P,{name:"Condition",get section(){return a().conditions}});var L=s(P,2);Ie(L,{name:"Mechanic",get section(){return a().mechanics}});var x=s(L,2);Ht(x,{get stats(){return a().stats}}),y(e,n)};B(i,e=>{a()&&e(t)})}y(v,r),N()}var jt=C('<a class="material-symbols-rounded chip edit-skill svelte-191pm8d">auto_fix</a>'),Ot=C('<h1 class="svelte-191pm8d"> <!></h1> <hr> <div class="container svelte-191pm8d"><!></div>',1);function Zt(v,l){H(l,!0);const a=()=>l.data.data.save();var r=Ot();ut(u=>{V(()=>nt.title=`Fabled Dynamic Editor - ${l.data.data.name??""}`)});var i=M(r),t=T(i),e=s(t);{var n=u=>{var h=jt();V(()=>rt(h,"href",`${vt??""}/skill/${l.data.data.name??""}`)),y(u,h)};B(e,u=>{var h;((h=l.data)==null?void 0:h.data)instanceof je&&u(n)})}S(i);var m=s(i,4),$=T(m);{var _=u=>{St(u,{get data(){return l.data.data},onsave:a})},k=u=>{var h=ce(),P=M(h);{var L=b=>{At(b,{get data(){return l.data.data},onsave:a})},x=b=>{var A=ce(),Q=M(A);{var E=F=>{Et(F,{get data(){return l.data.data},onsave:a})};B(Q,F=>{var Y;((Y=l.data)==null?void 0:Y.data)instanceof we&&F(E)},!0)}y(b,A)};B(P,b=>{var A;((A=l.data)==null?void 0:A.data)instanceof je?b(L):b(x,!1)},!0)}y(u,h)};B($,u=>{var h;((h=l.data)==null?void 0:h.data)instanceof st?u(_):u(k,!1)})}S(m),V(()=>{var u,h;return se(t,`${((h=(u=l.data)==null?void 0:u.data)==null?void 0:h.name)??""} `)}),y(v,r),N()}export{Zt as component,Xt as universal};
