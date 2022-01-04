var Se=Object.defineProperty,Me=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var ce=(o,t,n)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,j=(o,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&ce(o,n,t[n]);if(ue)for(var n of ue(t))De.call(t,n)&&ce(o,n,t[n]);return o},V=(o,t)=>Me(o,Be(t));import{g as S,j as G,k as de,l as h,r as A,i as e,o as s,m as M,w as B,n as he,c,p as y,d as z,t as x,q as w,s as q,v as Re,x as Pe,y as Ee,z as I,A as K,B as ve,C as pe,a as b,F as D,D as H,b as C,G as O,H as Ae,I as He,T as fe,J as F,K as Ie,L as J,M as Q,N as _e,u as me,h as R,O as be,P as ge,Q as ke,e as ze,R as $e,S as Oe,U as X,W as Z,X as Fe,Y as W,Z as We,$ as Ue}from"./app.af016c97.js";const je=["href","rel","target","aria-label"],Ve=S({inheritAttrs:!1}),P=S(V(j({},Ve),{props:{item:{type:Object,required:!0}},setup(o){const t=o,n=G(),u=Ee(),{item:a}=de(t),$=h(()=>q(a.value.link)),_=h(()=>Re(a.value.link)||Pe(a.value.link)),m=h(()=>{if(!_.value){if(a.value.target)return a.value.target;if($.value)return"_blank"}}),r=h(()=>m.value==="_blank"),l=h(()=>!$.value&&!_.value&&!r.value),i=h(()=>{if(!_.value){if(a.value.rel)return a.value.rel;if(r.value)return"noopener noreferrer"}}),p=h(()=>a.value.ariaLabel||a.value.text),d=h(()=>{const k=Object.keys(u.value.locales);return k.length?!k.some(v=>v===a.value.link):a.value.link!=="/"}),g=h(()=>d.value?n.path.startsWith(a.value.link):!1),f=h(()=>l.value?a.value.activeMatch?new RegExp(a.value.activeMatch).test(n.path):g.value:!1);return(k,v)=>{const L=A("RouterLink"),T=A("OutboundLink");return e(l)?(s(),M(L,he({key:0,class:["nav-link",{"router-link-active":e(f)}],to:e(a).link,"aria-label":e(p)},k.$attrs),{default:B(()=>[y(k.$slots,"before"),z(" "+x(e(a).text)+" ",1),y(k.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),c("a",he({key:1,class:"nav-link external",href:e(a).link,rel:e(i),target:e(m),"aria-label":e(p)},k.$attrs),[y(k.$slots,"before"),z(" "+x(e(a).text)+" ",1),e(r)?(s(),M(T,{key:0})):w("",!0),y(k.$slots,"after")],16,je))}}})),Ge=["aria-labelledby"],qe={class:"hero"},Ke=["src","alt"],Xe={key:1,id:"main-title"},Ye={key:2,class:"description"},Je={key:3,class:"actions"},Qe={key:0,class:"features"},Ze={class:"theme-default-content custom"},et=["innerHTML"],tt=["textContent"],nt=S({setup(o){const t=I(),n=K(),u=h(()=>t.value.heroImage?ve(t.value.heroImage):null),a=h(()=>t.value.heroText===null?null:t.value.heroText||n.value.title||"Hello"),$=h(()=>t.value.heroAlt||a.value||"hero"),_=h(()=>t.value.tagline===null?null:t.value.tagline||n.value.description||"Welcome to your VuePress site"),m=h(()=>pe(t.value.actions)?t.value.actions.map(({text:p,link:d,type:g="primary"})=>({text:p,link:d,type:g})):[]),r=h(()=>pe(t.value.features)?t.value.features:[]),l=h(()=>t.value.footer),i=h(()=>t.value.footerHtml);return(p,d)=>{const g=A("Content");return s(),c("main",{class:"home","aria-labelledby":e(a)?"main-title":void 0},[b("header",qe,[e(u)?(s(),c("img",{key:0,src:e(u),alt:e($)},null,8,Ke)):w("",!0),e(a)?(s(),c("h1",Xe,x(e(a)),1)):w("",!0),e(_)?(s(),c("p",Ye,x(e(_)),1)):w("",!0),e(m).length?(s(),c("p",Je,[(s(!0),c(D,null,H(e(m),f=>(s(),M(P,{key:f.text,class:O(["action-button",[f.type]]),item:f},null,8,["class","item"]))),128))])):w("",!0)]),e(r).length?(s(),c("div",Qe,[(s(!0),c(D,null,H(e(r),f=>(s(),c("div",{key:f.title,class:"feature"},[b("h2",null,x(f.title),1),b("p",null,x(f.details),1)]))),128))])):w("",!0),b("div",Ze,[C(g)]),e(l)?(s(),c(D,{key:1},[e(i)?(s(),c("div",{key:0,class:"footer",innerHTML:e(l)},null,8,et)):(s(),c("div",{key:1,class:"footer",textContent:x(e(l))},null,8,tt))],64)):w("",!0)],8,Ge)}}}),Le=o=>!q(o)||/github\.com/.test(o)?"GitHub":/bitbucket\.org/.test(o)?"Bitbucket":/gitlab\.com/.test(o)?"GitLab":/gitee\.com/.test(o)?"Gitee":null,at={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},st=({docsRepo:o,docsBranch:t,docsDir:n,filePathRelative:u,editLinkPattern:a})=>{const $=Le(o);let _;return a?_=a:$!==null&&(_=at[$]),_?_.replace(/:repo/,q(o)?o:`https://github.com/${o}`).replace(/:branch/,t).replace(/:path/,Ae(`${He(n)}/${u}`)):null},ot=S({setup(o){const t=u=>{u.style.height=u.scrollHeight+"px"},n=u=>{u.style.height=""};return(u,a)=>(s(),M(fe,{name:"dropdown",onEnter:t,onAfterEnter:n,onBeforeLeave:t},{default:B(()=>[y(u.$slots,"default")]),_:3}))}}),rt=["aria-label"],lt={class:"title"},it=b("span",{class:"arrow down"},null,-1),ut=["aria-label"],ct={class:"title"},dt={class:"nav-dropdown"},ht={class:"dropdown-subtitle"},vt={key:1},pt={class:"dropdown-subitem-wrapper"},ft=S({props:{item:{type:Object,required:!0}},setup(o){const t=o,{item:n}=de(t),u=h(()=>n.value.ariaLabel||n.value.text),a=F(!1),$=G();Ie(()=>$.path,()=>{a.value=!1});const _=r=>{r.detail===0?a.value=!a.value:a.value=!1},m=(r,l)=>l[l.length-1]===r;return(r,l)=>(s(),c("div",{class:O(["dropdown-wrapper",{open:a.value}])},[b("button",{class:"dropdown-title",type:"button","aria-label":e(u),onClick:_},[b("span",lt,x(e(n).text),1),it],8,rt),b("button",{class:"mobile-dropdown-title",type:"button","aria-label":e(u),onClick:l[0]||(l[0]=i=>a.value=!a.value)},[b("span",ct,x(e(n).text),1),b("span",{class:O(["arrow",a.value?"down":"right"])},null,2)],8,ut),C(ot,null,{default:B(()=>[J(b("ul",dt,[(s(!0),c(D,null,H(e(n).children,(i,p)=>(s(),c("li",{key:i.link||p,class:"dropdown-item"},[i.children?(s(),c(D,{key:0},[b("h4",ht,[i.link?(s(),M(P,{key:0,item:i,onFocusout:d=>m(i,e(n).children)&&i.children.length===0&&(a.value=!1)},null,8,["item","onFocusout"])):(s(),c("span",vt,x(i.text),1))]),b("ul",pt,[(s(!0),c(D,null,H(i.children,d=>(s(),c("li",{key:d.link,class:"dropdown-subitem"},[C(P,{item:d,onFocusout:g=>m(d,i.children)&&m(i,e(n).children)&&(a.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),M(P,{key:1,item:i,onFocusout:d=>m(i,e(n).children)&&(a.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Q,a.value]])]),_:1})],2))}}),_t={key:0,class:"navbar-links"},ye=S({setup(o){const t=()=>{const l=_e(),i=me(),p=K(),d=R();return h(()=>{var L,T;const g=Object.keys(p.value.locales);if(g.length<2)return[];const f=l.currentRoute.value.path,k=l.currentRoute.value.fullPath;return[{text:(L=d.value.selectLanguageText)!=null?L:"unkown language",ariaLabel:(T=d.value.selectLanguageAriaLabel)!=null?T:"unkown language",children:g.map(N=>{var ne,ae,se,oe,re,le;const E=(ae=(ne=p.value.locales)==null?void 0:ne[N])!=null?ae:{},ee=(oe=(se=d.value.locales)==null?void 0:se[N])!=null?oe:{},te=`${E.lang}`,Te=(re=ee.selectLanguageName)!=null?re:te;let U;if(te===p.value.lang)U=k;else{const ie=f.replace(i.value,N);l.getRoutes().some(xe=>xe.path===ie)?U=ie:U=(le=ee.home)!=null?le:N}return{text:Te,link:U}})}]})},n=()=>{const l=R(),i=h(()=>l.value.repo),p=h(()=>i.value?Le(i.value):null),d=h(()=>i.value&&!q(i.value)?`https://github.com/${i.value}`:i.value),g=h(()=>d.value?l.value.repoLabel?l.value.repoLabel:p.value===null?"Source":p.value:null);return h(()=>!d.value||!g.value?[]:[{text:g.value,link:d.value}])},u=l=>be(l)?ge(l):l.children?V(j({},l),{children:l.children.map(u)}):l,$=(()=>{const l=R();return h(()=>(l.value.navbar||[]).map(u))})(),_=t(),m=n(),r=h(()=>[...$.value,..._.value,...m.value]);return(l,i)=>e(r).length?(s(),c("nav",_t,[(s(!0),c(D,null,H(e(r),p=>(s(),c("div",{key:p.text,class:"navbar-links-item"},[p.children?(s(),M(ft,{key:0,item:p},null,8,["item"])):(s(),M(P,{key:1,item:p},null,8,["item"]))]))),128))])):w("",!0)}}),mt=["title"],bt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},gt=ze('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),kt=[gt],$t={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Lt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),yt=[Lt],wt=S({setup(o){const t=R(),n=ke(),u=()=>{n.value=!n.value};return(a,$)=>(s(),c("button",{class:"toggle-dark-button",title:e(t).toggleDarkMode,onClick:u},[J((s(),c("svg",bt,kt,512)),[[Q,!e(n)]]),J((s(),c("svg",$t,yt,512)),[[Q,e(n)]])],8,mt))}}),Ct=["title"],Tt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),xt=[Tt],St=S({emits:["toggle"],setup(o){const t=R();return(n,u)=>(s(),c("div",{class:"toggle-sidebar-button",title:e(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=a=>n.$emit("toggle"))},xt,8,Ct))}}),Mt=["src","alt"],Bt=S({emits:["toggle-sidebar"],setup(o){const t=me(),n=K(),u=R(),a=ke(),$=F(null),_=F(null),m=h(()=>u.value.home||t.value),r=h(()=>a.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),l=h(()=>n.value.title),i=F(0),p=h(()=>i.value?{maxWidth:i.value+"px"}:{}),d=h(()=>u.value.darkMode);$e(()=>{const f=719,k=g($.value,"paddingLeft")+g($.value,"paddingRight"),v=()=>{var L;window.innerWidth<=f?i.value=0:i.value=$.value.offsetWidth-k-(((L=_.value)==null?void 0:L.offsetWidth)||0)};v(),window.addEventListener("resize",v,!1),window.addEventListener("orientationchange",v,!1)});function g(f,k){var T,N,E;const v=(E=(N=(T=f==null?void 0:f.ownerDocument)==null?void 0:T.defaultView)==null?void 0:N.getComputedStyle(f,null))==null?void 0:E[k],L=Number.parseInt(v,10);return Number.isNaN(L)?0:L}return(f,k)=>{const v=A("ClientOnly"),L=A("RouterLink"),T=A("NavbarSearch");return s(),c("header",{ref_key:"navbar",ref:$,class:"navbar"},[C(St,{onToggle:k[0]||(k[0]=N=>f.$emit("toggle-sidebar"))}),b("span",{ref_key:"siteBrand",ref:_},[C(L,{to:e(m)},{default:B(()=>[C(v,null,{default:B(()=>[e(r)?(s(),c("img",{key:0,class:"logo",src:e(ve)(e(r)),alt:e(l)},null,8,Mt)):w("",!0)]),_:1}),e(l)?(s(),c("span",{key:0,class:O(["site-name",{"can-hide":e(r)}])},x(e(l)),3)):w("",!0)]),_:1},8,["to"])],512),b("div",{class:"navbar-links-wrapper",style:Oe(e(p))},[y(f.$slots,"before"),C(ye,{class:"can-hide"}),y(f.$slots,"after"),e(d)?(s(),M(wt,{key:0})):w("",!0),C(T)],4)],512)}}}),Nt={class:"page-meta"},Dt={key:0,class:"meta-item edit-link"},Rt={key:1,class:"meta-item last-updated"},Pt={class:"meta-item-label"},Et={class:"meta-item-info"},At={key:2,class:"meta-item contributors"},Ht={class:"meta-item-label"},It={class:"meta-item-info"},zt=["title"],Ot=z(", "),Ft=S({setup(o){const t=()=>{const r=R(),l=X(),i=I();return h(()=>{var T,N,E;if(!((N=(T=i.value.editLink)!=null?T:r.value.editLink)!=null?N:!0))return null;const{repo:d,docsRepo:g=d,docsBranch:f="main",docsDir:k="",editLinkText:v}=r.value;if(!g)return null;const L=st({docsRepo:g,docsBranch:f,docsDir:k,filePathRelative:l.value.filePathRelative,editLinkPattern:(E=i.value.editLinkPattern)!=null?E:r.value.editLinkPattern});return L?{text:v!=null?v:"Edit this page",link:L}:null})},n=()=>{const r=K(),l=R(),i=X(),p=I();return h(()=>{var f,k,v,L;return!((k=(f=p.value.lastUpdated)!=null?f:l.value.lastUpdated)!=null?k:!0)||!((v=i.value.git)==null?void 0:v.updatedTime)?null:new Date((L=i.value.git)==null?void 0:L.updatedTime).toLocaleString(r.value.lang)})},u=()=>{const r=R(),l=X(),i=I();return h(()=>{var d,g,f,k;return((g=(d=i.value.contributors)!=null?d:r.value.contributors)!=null?g:!0)&&(k=(f=l.value.git)==null?void 0:f.contributors)!=null?k:null})},a=R(),$=t(),_=n(),m=u();return(r,l)=>(s(),c("footer",Nt,[e($)?(s(),c("div",Dt,[C(P,{class:"meta-item-label",item:e($)},null,8,["item"])])):w("",!0),e(_)?(s(),c("div",Rt,[b("span",Pt,x(e(a).lastUpdatedText)+": ",1),b("span",Et,x(e(_)),1)])):w("",!0),e(m)&&e(m).length?(s(),c("div",At,[b("span",Ht,x(e(a).contributorsText)+": ",1),b("span",It,[(s(!0),c(D,null,H(e(m),(i,p)=>(s(),c(D,{key:p},[b("span",{class:"contributor",title:`email: ${i.email}`},x(i.name),9,zt),p!==e(m).length-1?(s(),c(D,{key:0},[Ot],64)):w("",!0)],64))),128))])])):w("",!0)]))}}),Wt={key:0,class:"page-nav"},Ut={class:"inner"},jt={key:0,class:"prev"},Vt=z(" \u2190 "),Gt={key:1,class:"next"},qt=z(" \u2192 "),Kt=S({setup(o){const t=r=>r===!1?null:be(r)?ge(r):Fe(r)?r:!1,n=(r,l,i)=>{const p=r.findIndex(d=>d.link===l);if(p!==-1){const d=r[p+i];return(d==null?void 0:d.link)?d:null}for(const d of r)if(d.children){const g=n(d.children,l,i);if(g)return g}return null},u=I(),a=Z(),$=G(),_=h(()=>{const r=t(u.value.prev);return r!==!1?r:n(a.value,$.path,-1)}),m=h(()=>{const r=t(u.value.next);return r!==!1?r:n(a.value,$.path,1)});return(r,l)=>e(_)||e(m)?(s(),c("nav",Wt,[b("p",Ut,[e(_)?(s(),c("span",jt,[Vt,C(P,{item:e(_)},null,8,["item"])])):w("",!0),e(m)?(s(),c("span",Gt,[C(P,{item:e(m)},null,8,["item"]),qt])):w("",!0)])])):w("",!0)}}),Xt={class:"page"},Yt={class:"theme-default-content"},Jt=S({setup(o){return(t,n)=>{const u=A("Content");return s(),c("main",Xt,[y(t.$slots,"top"),b("div",Yt,[C(u)]),C(Ft),C(Kt),y(t.$slots,"bottom")])}}}),we=o=>decodeURI(o).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Qt=(o,t)=>{if(t===void 0)return!1;if(o.hash===t)return!0;const n=we(o.path),u=we(t);return n===u},Ce=(o,t)=>Qt(o,t.link)?!0:t.children?t.children.some(n=>Ce(o,n)):!1,Zt=(o,t)=>o.link?W(P,V(j({},t),{item:o})):W("p",t,o.text),en=(o,t)=>{var n;return((n=o.children)===null||n===void 0?void 0:n.length)?W("ul",{class:{"sidebar-sub-items":t>0}},o.children.map(u=>W("li",W(Y,{item:u,depth:t+1})))):null},Y=({item:o,depth:t=0})=>{const n=G(),u=Ce(n,o);return[Zt(o,{class:{"sidebar-heading":t===0,"sidebar-item":!0,active:u}}),en(o,t)]};Y.displayName="SidebarChild";Y.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const tn={class:"sidebar"},nn={class:"sidebar-links"},an=S({setup(o){const t=Z();return(n,u)=>(s(),c("aside",tn,[C(ye),y(n.$slots,"top"),b("ul",nn,[(s(!0),c(D,null,H(e(t),a=>(s(),M(e(Y),{key:a.link||a.text,item:a},null,8,["item"]))),128))]),y(n.$slots,"bottom")]))}}),rn=S({setup(o){const t=X(),n=I(),u=R(),a=h(()=>n.value.navbar!==!1&&u.value.navbar!==!1),$=Z(),_=F(!1),m=v=>{_.value=typeof v=="boolean"?v:!_.value},r={x:0,y:0},l=v=>{r.x=v.changedTouches[0].clientX,r.y=v.changedTouches[0].clientY},i=v=>{const L=v.changedTouches[0].clientX-r.x,T=v.changedTouches[0].clientY-r.y;Math.abs(L)>Math.abs(T)&&Math.abs(L)>40&&(L>0&&r.x<=80?m(!0):m(!1))},p=h(()=>[{"no-navbar":!a.value,"no-sidebar":!$.value.length,"sidebar-open":_.value},n.value.pageClass]);let d;$e(()=>{d=_e().afterEach(()=>{m(!1)})}),We(()=>{d()});const g=Ue(),f=g.resolve,k=g.pending;return(v,L)=>(s(),c("div",{class:O(["theme-container",e(p)]),onTouchstart:l,onTouchend:i},[y(v.$slots,"navbar",{},()=>[e(a)?(s(),M(Bt,{key:0,onToggleSidebar:m},{before:B(()=>[y(v.$slots,"navbar-before")]),after:B(()=>[y(v.$slots,"navbar-after")]),_:3})):w("",!0)]),b("div",{class:"sidebar-mask",onClick:L[0]||(L[0]=T=>m(!1))}),y(v.$slots,"sidebar",{},()=>[C(an,null,{top:B(()=>[y(v.$slots,"sidebar-top")]),bottom:B(()=>[y(v.$slots,"sidebar-bottom")]),_:3})]),y(v.$slots,"page",{},()=>[e(n).home?(s(),M(nt,{key:0})):(s(),M(fe,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(f),onBeforeLeave:e(k)},{default:B(()=>[(s(),M(Jt,{key:e(t).path},{top:B(()=>[y(v.$slots,"page-top")]),bottom:B(()=>[y(v.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{rn as default};
