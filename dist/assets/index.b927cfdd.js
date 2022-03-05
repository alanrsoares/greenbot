var tt=Object.defineProperty,nt=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var me=(s,e,n)=>e in s?tt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,oe=(s,e)=>{for(var n in e||(e={}))st.call(e,n)&&me(s,n,e[n]);if(ge)for(var n of ge(e))at.call(e,n)&&me(s,n,e[n]);return s},_e=(s,e)=>nt(s,lt(e));import{a as it,u as ze,b as rt,S as X,i as W,s as Y,G as ot,e as m,c as q,d as N,f,t as O,g as $,h as u,m as U,l as te,j as K,k as C,n as J,o as h,p as R,q as z,r as ft,v as ne,w as le,x as se,y as ae,z as A,F as Ge,A as H,B as fe,C as Se,D as Oe,E as Ve,H as ut,I as ct,J as dt,K as He,L as be,M as ee,N as ce,O as pt,P as Ke,Q as he,R as gt,T as mt,U as Je,V as Xe,W as x,X as _t,Y as bt,Z as ht}from"./vendor.e57d315c.js";const vt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};vt();const ue=10,ie={package:"package"},We=it.create({baseURL:"http://localhost:5001"});async function Lt(){return(await We.get("/package")).data}async function kt(s){return(await We.post("/upgrade-packages",s)).data}const Ye=s=>rt(kt,s),wt=()=>ze(ie.package,Lt),de=s=>({version:s.replace(/[\^~]/,""),qualifier:isNaN(Number(s[0]))?s[0]:void 0}),xe=(s,e)=>de(s).version===e,ve=(s,e)=>e.length<=s?e:e.slice(0,s).concat("\u2026");function Ct(s){let e;const n=s[3].default,t=ne(n,s,s[2],null);return{c(){t&&t.c()},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&4)&&le(t,n,l,l[2],e?ae(n,l[2],a,null):se(l[2]),null)},i(l){e||(h(t,l),e=!0)},o(l){C(t,l),e=!1},d(l){t&&t.d(l)}}}function yt(s){let e="...",n,t,l,a;const i=s[3].default,o=ne(i,s,s[2],null);return{c(){n=A(e),t=q(),l=m("div"),o&&o.c(),f(l,"class","opacity-0 h-0")},m(r,d){$(r,n,d),$(r,t,d),$(r,l,d),o&&o.m(l,null),a=!0},p(r,d){o&&o.p&&(!a||d&4)&&le(o,i,r,r[2],a?ae(i,r[2],d,null):se(r[2]),null)},i(r){a||(h(o,r),a=!0)},o(r){C(o,r),a=!1},d(r){r&&R(n),r&&R(t),r&&R(l),o&&o.d(r)}}}function Mt(s){let e,n,t,l,a,i,o,r,d,w;const y=[yt,Ct],b=[];function _(c,p){return c[0]?0:1}return t=_(s),l=b[t]=y[t](s),o=new ot({props:{height:"1em"}}),{c(){e=m("button"),n=m("div"),l.c(),a=q(),i=m("div"),N(o.$$.fragment),f(n,"class","px-1 font-medium relative"),f(i,"class","h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"),f(e,"class","flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple text-castleton-green -mr-1 whitespace-nowrap"),e.disabled=s[1],O(e,"opacity-90",s[0]),O(e,"opacity-70",s[1])},m(c,p){$(c,e,p),u(e,n),b[t].m(n,null),u(e,a),u(e,i),U(o,i,null),r=!0,d||(w=te(e,"click",s[4]),d=!0)},p(c,[p]){let g=t;t=_(c),t===g?b[t].p(c,p):(K(),C(b[g],1,1,()=>{b[g]=null}),J(),l=b[t],l?l.p(c,p):(l=b[t]=y[t](c),l.c()),h(l,1),l.m(n,null)),(!r||p&2)&&(e.disabled=c[1]),p&1&&O(e,"opacity-90",c[0]),p&2&&O(e,"opacity-70",c[1])},i(c){r||(h(l),h(o.$$.fragment,c),r=!0)},o(c){C(l),C(o.$$.fragment,c),r=!1},d(c){c&&R(e),b[t].d(),z(o),d=!1,w()}}}function It(s,e,n){let{$$slots:t={},$$scope:l}=e,{isLoading:a=!1}=e,{disabled:i=!1}=e;function o(r){ft.call(this,s,r)}return s.$$set=r=>{"isLoading"in r&&n(0,a=r.isLoading),"disabled"in r&&n(1,i=r.disabled),"$$scope"in r&&n(2,l=r.$$scope)},[a,i,l,t,o]}class et extends X{constructor(e){super();W(this,e,It,Mt,Y,{isLoading:0,disabled:1})}}function Dt(s){let e,n;return e=new et({props:{disabled:s[9].isLoading&&s[7],isLoading:s[9].isLoading&&s[7],$$slots:{default:[Et]},$$scope:{ctx:s}}}),e.$on("click",s[17]),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},p(t,l){const a={};l&640&&(a.disabled=t[9].isLoading&&t[7]),l&640&&(a.isLoading=t[9].isLoading&&t[7]),l&1048582&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Pt(s){let e,n,t,l,a,i,o;return i=new He({}),{c(){e=m("div"),n=m("div"),t=A(s[1]),l=q(),a=m("div"),N(i.$$.fragment),f(a,"class","h-4 w-4 ml-1"),f(e,"class","flex gap-2 min-w-[6rem] justify-end")},m(r,d){$(r,e,d),u(e,n),u(n,t),u(e,l),u(e,a),U(i,a,null),o=!0},p(r,d){(!o||d&2)&&H(t,r[1])},i(r){o||(h(i.$$.fragment,r),o=!0)},o(r){C(i.$$.fragment,r),o=!1},d(r){r&&R(e),z(i)}}}function Et(s){let e,n,t;return{c(){e=A(s[1]),n=A(" \u21D2 "),t=A(s[2])},m(l,a){$(l,e,a),$(l,n,a),$(l,t,a)},p(l,a){a&2&&H(e,l[1]),a&4&&H(t,l[2])},d(l){l&&R(e),l&&R(n),l&&R(t)}}}function Le(s){var I;let e,n=s[5].description+"",t,l,a,i,o,r,d,w,y,b,_=s[5].author&&ke(s),c=s[10].data&&we(s),p=((I=s[5].repository)==null?void 0:I.url)&&Ce(s),g=s[5].homepage&&ye(s),L=s[5].bugs&&Me(s);return{c(){e=m("div"),t=A(n),l=q(),a=m("div"),i=m("div"),_&&_.c(),o=q(),c&&c.c(),r=q(),d=m("div"),p&&p.c(),w=q(),g&&g.c(),y=q(),L&&L.c(),f(e,"class","text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium"),f(i,"class","grid gap-2"),f(d,"class","flex gap-2 items-center"),f(a,"class","px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60")},m(k,T){$(k,e,T),u(e,t),$(k,l,T),$(k,a,T),u(a,i),_&&_.m(i,null),u(i,o),c&&c.m(i,null),u(a,r),u(a,d),p&&p.m(d,null),u(d,w),g&&g.m(d,null),u(d,y),L&&L.m(d,null),b=!0},p(k,T){var j;(!b||T&32)&&n!==(n=k[5].description+"")&&H(t,n),k[5].author?_?_.p(k,T):(_=ke(k),_.c(),_.m(i,o)):_&&(_.d(1),_=null),k[10].data?c?c.p(k,T):(c=we(k),c.c(),c.m(i,null)):c&&(c.d(1),c=null),((j=k[5].repository)==null?void 0:j.url)?p?(p.p(k,T),T&32&&h(p,1)):(p=Ce(k),p.c(),h(p,1),p.m(d,w)):p&&(K(),C(p,1,1,()=>{p=null}),J()),k[5].homepage?g?(g.p(k,T),T&32&&h(g,1)):(g=ye(k),g.c(),h(g,1),g.m(d,y)):g&&(K(),C(g,1,1,()=>{g=null}),J()),k[5].bugs?L?(L.p(k,T),T&32&&h(L,1)):(L=Me(k),L.c(),h(L,1),L.m(d,null)):L&&(K(),C(L,1,1,()=>{L=null}),J())},i(k){b||(h(p),h(g),h(L),b=!0)},o(k){C(p),C(g),C(L),b=!1},d(k){k&&R(e),k&&R(l),k&&R(a),_&&_.d(),c&&c.d(),p&&p.d(),g&&g.d(),L&&L.d()}}}function ke(s){let e,n,t,l,a=s[5].author.name+"",i;return{c(){e=m("div"),n=m("span"),n.textContent="Authored by",t=q(),l=m("span"),i=A(a),f(l,"class","font-semibold"),f(e,"class","text-granny-smith-apple flex items-center gap-2")},m(o,r){$(o,e,r),u(e,n),u(e,t),u(e,l),u(l,i)},p(o,r){r&32&&a!==(a=o[5].author.name+"")&&H(i,a)},d(o){o&&R(e)}}}function we(s){let e,n,t,l=(s[10].data.gzip/1024).toFixed(1)+"",a,i,o,r,d=(s[10].data.size/1024).toFixed(1)+"",w,y,b;return{c(){e=m("div"),n=A(`Bundle size
              `),t=m("span"),a=A(l),i=A("kb"),o=A(`
              (gzipped) |
              `),r=m("span"),w=A(d),y=A("kb"),b=A(" (uncompressed)"),f(t,"class","font-semibold"),f(r,"class","font-semibold")},m(_,c){$(_,e,c),u(e,n),u(e,t),u(t,a),u(t,i),u(e,o),u(e,r),u(r,w),u(r,y),u(e,b)},p(_,c){c&1024&&l!==(l=(_[10].data.gzip/1024).toFixed(1)+"")&&H(a,l),c&1024&&d!==(d=(_[10].data.size/1024).toFixed(1)+"")&&H(w,d)},d(_){_&&R(e)}}}function Ce(s){let e,n,t,l,a;return t=new ut({}),{c(){e=m("div"),n=m("a"),N(t.$$.fragment),f(n,"href",l=s[5].repository.url.replace(/^git\+/,"")),f(n,"target","_blank"),f(n,"class","hover:underline"),f(n,"rel","noopener roreferrer"),f(n,"title","Github"),f(e,"class","h-5")},m(i,o){$(i,e,o),u(e,n),U(t,n,null),a=!0},p(i,o){(!a||o&32&&l!==(l=i[5].repository.url.replace(/^git\+/,"")))&&f(n,"href",l)},i(i){a||(h(t.$$.fragment,i),a=!0)},o(i){C(t.$$.fragment,i),a=!1},d(i){i&&R(e),z(t)}}}function ye(s){let e,n,t,l,a;return t=new ct({}),{c(){e=m("div"),n=m("a"),N(t.$$.fragment),f(n,"href",l=s[5].homepage),f(n,"target","_blank"),f(n,"class","hover:underline"),f(n,"rel","noopener roreferrer"),f(n,"title","Homepage"),f(e,"class","h-5")},m(i,o){$(i,e,o),u(e,n),U(t,n,null),a=!0},p(i,o){(!a||o&32&&l!==(l=i[5].homepage))&&f(n,"href",l)},i(i){a||(h(t.$$.fragment,i),a=!0)},o(i){C(t.$$.fragment,i),a=!1},d(i){i&&R(e),z(t)}}}function Me(s){let e,n,t,l,a;return t=new dt({}),{c(){e=m("div"),n=m("a"),N(t.$$.fragment),f(n,"href",l=s[5].bugs.url),f(n,"target","_blank"),f(n,"class","hover:underline"),f(n,"rel","noopener roreferrer"),f(n,"title","Bugs"),f(e,"class","h-5")},m(i,o){$(i,e,o),u(e,n),U(t,n,null),a=!0},p(i,o){(!a||o&32&&l!==(l=i[5].bugs.url))&&f(n,"href",l)},i(i){a||(h(t.$$.fragment,i),a=!0)},o(i){C(t.$$.fragment,i),a=!1},d(i){i&&R(e),z(t)}}}function jt(s){let e,n,t,l,a,i,o,r,d=ve(Ie,s[0])+"",w,y,b,_,c,p,g,L,I,k;o=new Ge({});const T=[Pt,Dt],j=[];function D(P,M){return P[4]?0:1}_=D(s),c=j[_]=T[_](s);let v=s[6]&&Le(s);return{c(){e=m("li"),n=m("div"),t=m("div"),l=m("div"),a=m("a"),i=m("div"),N(o.$$.fragment),r=q(),w=A(d),b=q(),c.c(),p=q(),v&&v.c(),f(i,"class","h-8"),O(i,"hidden",!s[6]),f(a,"href",y=`https://npmjs.com/package/${s[0]}`),f(a,"target","_blank"),f(a,"class","hover:underline font-semibold whitespace-nowrap flex items-center gap-2"),f(a,"rel","noopener roreferrer"),O(a,"text-base",s[6]),f(t,"class","flex justify-between p-4 py-2 items-center"),f(n,"class","transition-[transform,background] duration-300 ease-in-out svelte-lpmpch"),O(n,"expanded",s[6]),f(e,"role","button"),f(e,"class","animate-fadeIn transition-opacity svelte-lpmpch"),f(e,"style",g=`animation-delay: ${(s[3]+1)*s[14]}s; opacity: ${s[8]?.4:1}!important;`),O(e,"border-t",s[3]!==0)},m(P,M){$(P,e,M),u(e,n),u(n,t),u(t,l),u(l,a),u(a,i),U(o,i,null),u(a,r),u(a,w),u(t,b),j[_].m(t,null),u(n,p),v&&v.m(n,null),L=!0,I||(k=te(e,"click",s[13]),I=!0)},p(P,[M]){M&64&&O(i,"hidden",!P[6]),(!L||M&1)&&d!==(d=ve(Ie,P[0])+"")&&H(w,d),(!L||M&1&&y!==(y=`https://npmjs.com/package/${P[0]}`))&&f(a,"href",y),M&64&&O(a,"text-base",P[6]);let E=_;_=D(P),_===E?j[_].p(P,M):(K(),C(j[E],1,1,()=>{j[E]=null}),J(),c=j[_],c?c.p(P,M):(c=j[_]=T[_](P),c.c()),h(c,1),c.m(t,null)),P[6]?v?(v.p(P,M),M&64&&h(v,1)):(v=Le(P),v.c(),h(v,1),v.m(n,null)):v&&(K(),C(v,1,1,()=>{v=null}),J()),M&64&&O(n,"expanded",P[6]),(!L||M&264&&g!==(g=`animation-delay: ${(P[3]+1)*P[14]}s; opacity: ${P[8]?.4:1}!important;`))&&f(e,"style",g),M&8&&O(e,"border-t",P[3]!==0)},i(P){L||(h(o.$$.fragment,P),h(c),h(v),L=!0)},o(P){C(o.$$.fragment,P),C(c),C(v),L=!1},d(P){P&&R(e),z(o),j[_].d(),v&&v.d(),I=!1,k()}}}const Ie=40;function Zt(s,e,n){let t,l,a,i,{name:o=""}=e,{version:r=""}=e,{latest:d=""}=e,{index:w=0}=e,{isLatest:y=!1}=e,{meta:b}=e,{expandedRowIndex:_=-1}=e,c=!1;const p=Ye({onMutate(){n(7,c=!0)},onSettled(){n(7,c=!1)}});fe(s,p,v=>n(9,a=v));const g=Se();async function L(v){try{const P=await a.mutateAsync(v);g.setQueryData([ie.package],M=>{for(let E of P){const{qualifier:Q}=de(E.version),V=`${Q}${E.latest}`;M.dependencies[E.name]=V,M.devDependencies[E.name]=V}return M}),await g.refetchQueries([ie.package])}catch(P){console.log("Failed to upgrade packages:",{originalError:P})}}function I(){_===w?n(16,_=-1):n(16,_=w)}const k=1/30;function T(v){v.key==="Escape"&&n(16,_=-1)}const j=ze(["bundlephobia",o],async()=>await(await fetch(`https://bundlephobia.com/api/size?package=${o}&record=true`)).json());fe(s,j,v=>n(10,i=v)),Oe(()=>{window.addEventListener("keydown",T)}),Ve(()=>{window.removeEventListener("keydown",T)});const D=()=>L([{name:o,version:r,latest:d,meta:b}]);return s.$$set=v=>{"name"in v&&n(0,o=v.name),"version"in v&&n(1,r=v.version),"latest"in v&&n(2,d=v.latest),"index"in v&&n(3,w=v.index),"isLatest"in v&&n(4,y=v.isLatest),"meta"in v&&n(5,b=v.meta),"expandedRowIndex"in v&&n(16,_=v.expandedRowIndex)},s.$$.update=()=>{s.$$.dirty&65544&&n(6,t=_===w),s.$$.dirty&65600&&n(8,l=!t&&_!==-1)},[o,r,d,w,y,b,t,c,l,a,i,p,L,I,k,j,_,D]}class $t extends X{constructor(e){super();W(this,e,Zt,jt,Y,{name:0,version:1,latest:2,index:3,isLatest:4,meta:5,expandedRowIndex:16})}}function De(s,e,n){const t=s.slice();return t[5]=e[n],t}function Pe(s){let e,n,t=s[5]+1+"",l,a,i,o;return{c(){e=m("li"),n=m("button"),l=A(t),f(n,"data-page",a=s[5]),f(n,"class","btn-arrow text-xl svelte-16bdnnj"),O(n,"bg-castleton-green",s[5]===s[0])},m(r,d){$(r,e,d),u(e,n),u(n,l),i||(o=te(n,"click",s[2]),i=!0)},p(r,d){d&2&&t!==(t=r[5]+1+"")&&H(l,t),d&2&&a!==(a=r[5])&&f(n,"data-page",a),d&3&&O(n,"bg-castleton-green",r[5]===r[0])},d(r){r&&R(e),i=!1,o()}}}function Rt(s){let e,n,t,l,a,i,o,r,d,w,y,b,_,c=be(0,s[1]),p=[];for(let g=0;g<c.length;g+=1)p[g]=Pe(De(s,c,g));return{c(){e=m("ul"),n=m("li"),t=m("button"),l=A("\u25C4"),i=q();for(let g=0;g<p.length;g+=1)p[g].c();o=q(),r=m("li"),d=m("button"),w=A("\u25BA"),f(t,"class","btn-arrow svelte-16bdnnj"),t.disabled=a=s[0]===0,f(d,"class","btn-arrow svelte-16bdnnj"),d.disabled=y=s[0]===s[1]-1,f(e,"class","inline-flex mx-auto font-medium p-4 items-center gap-2")},m(g,L){$(g,e,L),u(e,n),u(n,t),u(t,l),u(e,i);for(let I=0;I<p.length;I+=1)p[I].m(e,null);u(e,o),u(e,r),u(r,d),u(d,w),b||(_=[te(t,"click",s[4]),te(d,"click",s[3])],b=!0)},p(g,[L]){if(L&1&&a!==(a=g[0]===0)&&(t.disabled=a),L&7){c=be(0,g[1]);let I;for(I=0;I<c.length;I+=1){const k=De(g,c,I);p[I]?p[I].p(k,L):(p[I]=Pe(k),p[I].c(),p[I].m(e,o))}for(;I<p.length;I+=1)p[I].d(1);p.length=c.length}L&3&&y!==(y=g[0]===g[1]-1)&&(d.disabled=y)},i:ee,o:ee,d(g){g&&R(e),ce(p,g),b=!1,pt(_)}}}function Tt(s,e,n){let{pages:t=0}=e,{pageIndex:l=0}=e;function a(r){const{page:d}=r.target.dataset;n(0,l=Number(d))}function i(){l<t-1&&n(0,l++,l)}function o(){l>0&&n(0,l--,l)}return s.$$set=r=>{"pages"in r&&n(1,t=r.pages),"pageIndex"in r&&n(0,l=r.pageIndex)},[l,t,a,i,o]}class qt extends X{constructor(e){super();W(this,e,Tt,Rt,Y,{pages:1,pageIndex:0})}}function Ee(s,e,n){const t=s.slice();return t[22]=e[n].name,t[23]=e[n].version,t[24]=e[n].latest,t[25]=e[n].isLatest,t[26]=e[n].meta,t[28]=n,t}function je(s){let e,n,t;return n=new He({}),{c(){e=m("div"),N(n.$$.fragment),f(e,"class","h-4 w-4 ml-1")},m(l,a){$(l,e,a),U(n,e,null),t=!0},i(l){t||(h(n.$$.fragment,l),t=!0)},o(l){C(n.$$.fragment,l),t=!1},d(l){l&&R(e),z(n)}}}function Ze(s){let e,n;return e=new et({props:{disabled:s[10].isLoading,isLoading:s[10].isLoading,$$slots:{default:[At]},$$scope:{ctx:s}}}),e.$on("click",s[17]),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},p(t,l){const a={};l&1024&&(a.disabled=t[10].isLoading),l&1024&&(a.isLoading=t[10].isLoading),l&536870912&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function At(s){let e;return{c(){e=A("Upgrade all")},m(n,t){$(n,e,t)},d(n){n&&R(e)}}}function $e(s){let e,n,t;function l(i){s[18](i)}let a={index:s[28],name:s[22],version:s[23],latest:s[24],isLatest:s[25],meta:s[26]};return s[5]!==void 0&&(a.expandedRowIndex=s[5]),e=new $t({props:a}),Je.push(()=>Xe(e,"expandedRowIndex",l)),{c(){N(e.$$.fragment)},m(i,o){U(e,i,o),t=!0},p(i,o){const r={};o&256&&(r.name=i[22]),o&256&&(r.version=i[23]),o&256&&(r.latest=i[24]),o&256&&(r.isLatest=i[25]),o&256&&(r.meta=i[26]),!n&&o&32&&(n=!0,r.expandedRowIndex=i[5],Ke(()=>n=!1)),e.$set(r)},i(i){t||(h(e.$$.fragment,i),t=!0)},o(i){C(e.$$.fragment,i),t=!1},d(i){z(e,i)}}}function Re(s){let e,n,t,l,a;function i(r){s[19](r)}let o={pages:s[9]};return s[2]!==void 0&&(o.pageIndex=s[2]),t=new qt({props:o}),Je.push(()=>Xe(t,"pageIndex",i)),{c(){e=m("footer"),n=m("div"),N(t.$$.fragment),f(n,"class","bg-slate-900/90 rounded-full"),f(e,"class","grid place-items-center")},m(r,d){$(r,e,d),u(e,n),U(t,n,null),a=!0},p(r,d){const w={};d&512&&(w.pages=r[9]),!l&&d&4&&(l=!0,w.pageIndex=r[2],Ke(()=>l=!1)),t.$set(w)},i(r){a||(h(t.$$.fragment,r),a=!0)},o(r){C(t.$$.fragment,r),a=!1},d(r){r&&R(e),z(t)}}}function Qt(s){let e,n,t,l,a,i,o,r,d,w,y=s[4].length+"",b,_,c=s[1].length+"",p,g,L,I,k,T,j,D,v,P,M,E=s[6]&&je(),Q=!s[6]&&Ze(s),V=s[8],F=[];for(let Z=0;Z<V.length;Z+=1)F[Z]=$e(Ee(s,V,Z));const re=Z=>C(F[Z],1,1,()=>{F[Z]=null});let S=s[9]>1&&Re(s);return{c(){e=m("section"),n=m("div"),t=m("input"),l=q(),a=m("header"),i=m("div"),o=m("div"),r=A(s[0]),d=q(),w=m("span"),b=A(y),_=A("/"),p=A(c),g=q(),E&&E.c(),L=q(),I=m("div"),Q&&Q.c(),k=q(),T=m("main"),j=m("ul");for(let Z=0;Z<F.length;Z+=1)F[Z].c();D=q(),S&&S.c(),f(t,"type","text"),f(t,"class","w-full p-4 text-sm text-white bg-slate-800/50 rounded-xl outline-none focus:ring-4 ring-castleton-green/60"),f(t,"placeholder","package name or version"),f(n,"class",""),f(w,"class","text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"),f(i,"class","flex items-center justify-between w-full"),f(a,"class","p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"),f(j,"class","grid"),f(T,"class","min-h-[32rem] mx-2"),f(e,"class","bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2")},m(Z,B){$(Z,e,B),u(e,n),u(n,t),he(t,s[3]),u(e,l),u(e,a),u(a,i),u(i,o),u(o,r),u(o,d),u(o,w),u(w,b),u(w,_),u(w,p),u(i,g),E&&E.m(i,null),u(a,L),u(a,I),Q&&Q.m(I,null),u(e,k),u(e,T),u(T,j);for(let G=0;G<F.length;G+=1)F[G].m(j,null);u(e,D),S&&S.m(e,null),v=!0,P||(M=te(t,"input",s[16]),P=!0)},p(Z,[B]){if(B&8&&t.value!==Z[3]&&he(t,Z[3]),(!v||B&1)&&H(r,Z[0]),(!v||B&16)&&y!==(y=Z[4].length+"")&&H(b,y),(!v||B&2)&&c!==(c=Z[1].length+"")&&H(p,c),Z[6]?E?B&64&&h(E,1):(E=je(),E.c(),h(E,1),E.m(i,null)):E&&(K(),C(E,1,1,()=>{E=null}),J()),Z[6]?Q&&(K(),C(Q,1,1,()=>{Q=null}),J()):Q?(Q.p(Z,B),B&64&&h(Q,1)):(Q=Ze(Z),Q.c(),h(Q,1),Q.m(I,null)),B&288){V=Z[8];let G;for(G=0;G<V.length;G+=1){const pe=Ee(Z,V,G);F[G]?(F[G].p(pe,B),h(F[G],1)):(F[G]=$e(pe),F[G].c(),h(F[G],1),F[G].m(j,null))}for(K(),G=V.length;G<F.length;G+=1)re(G);J()}Z[9]>1?S?(S.p(Z,B),B&512&&h(S,1)):(S=Re(Z),S.c(),h(S,1),S.m(e,null)):S&&(K(),C(S,1,1,()=>{S=null}),J())},i(Z){if(!v){h(E),h(Q);for(let B=0;B<V.length;B+=1)h(F[B]);h(S),v=!0}},o(Z){C(E),C(Q),F=F.filter(Boolean);for(let B=0;B<F.length;B+=1)C(F[B]);C(S),v=!1},d(Z){Z&&R(e),E&&E.d(),Q&&Q.d(),ce(F,Z),S&&S.d(),P=!1,M()}}}function Ft(s,e,n){let t,l,a,i,o,r,d,w,y,{label:b=""}=e,{entries:_=[]}=e,c=0,p=-1,g="";const L=Ye();fe(s,L,M=>n(10,y=M));const I=Se();async function k(M){try{const E=await y.mutateAsync(M);I.setQueryData([ie.package],Q=>{for(let V of E){const{qualifier:F}=de(V.version),re=`${F}${V.latest}`;Q.dependencies[V.name]=re,Q.devDependencies[V.name]=re}return Q}),await I.refetchQueries([ie.package])}catch(E){console.log("Failed to upgrade packages:",{originalError:E})}}function T(M){switch(M.key){case"ArrowUp":p>0?n(5,p--,p):n(5,p=o.length-1);break;case"ArrowDown":p<o.length-1?n(5,p++,p):n(5,p=0);break;case"ArrowLeft":c>0&&(n(2,c--,c),n(5,p=-1));break;case"ArrowRight":c<l-1&&(n(2,c++,c),n(5,p=-1));break}}Oe(()=>{window.addEventListener("keydown",T)}),Ve(()=>{window.removeEventListener("keydown",T)});function j(){g=this.value,n(3,g)}const D=()=>k(d);function v(M){p=M,n(5,p),n(0,b),n(3,g)}function P(M){c=M,n(2,c),n(0,b),n(3,g)}return s.$$set=M=>{"label"in M&&n(0,b=M.label),"entries"in M&&n(1,_=M.entries)},s.$$.update=()=>{s.$$.dirty&10&&n(15,t=_.filter(({name:M,version:E})=>M.toLowerCase().includes(g.toLowerCase())||E.toLowerCase().includes(g.toLowerCase()))),s.$$.dirty&32768&&n(9,l=Math.ceil(t.length/ue)),s.$$.dirty&32768&&n(13,a=t.map(M=>_e(oe({},M),{isLatest:xe(M.version,M.latest)})).sort((M,E)=>M.isLatest&&E.isLatest?0:M.isLatest&&!E.isLatest?1:-1)),s.$$.dirty&1&&b&&(n(2,c=0),n(5,p=-1)),s.$$.dirty&8&&g&&(n(2,c=0),n(5,p=-1)),s.$$.dirty&4&&n(14,i=c*ue),s.$$.dirty&24576&&n(8,o=a.slice(i,i+ue)),s.$$.dirty&8192&&n(4,[r,d]=gt(mt("isLatest"),a),r,(n(7,d),n(13,a),n(15,t),n(1,_),n(3,g))),s.$$.dirty&18&&n(6,w=r.length===_.length)},[b,_,c,g,r,p,w,d,o,l,y,L,k,a,i,t,j,D,v,P]}class Bt extends X{constructor(e){super();W(this,e,Ft,Qt,Y,{label:0,entries:1})}}function Nt(s){let e,n,t,l,a,i;return{c(){e=x("svg"),n=x("g"),t=x("g"),l=x("path"),i=x("path"),f(l,"d",a=Te[s[0]]),f(i,"d","M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"),f(t,"fill","currentColor"),f(n,"stroke","none"),f(n,"stroke-width","1"),f(n,"fill","none"),f(n,"fill-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),f(e,"viewBox","0 0 100 125")},m(o,r){$(o,e,r),u(e,n),u(n,t),u(t,l),u(t,i)},p(o,[r]){r&1&&a!==(a=Te[o[0]])&&f(l,"d",a)},i:ee,o:ee,d(o){o&&R(e)}}}const Te={angry:"M31.8382901,59.4644187 L38.8382901,62.4644187 L40.6765801,63.2522573 L42.2522573,59.5756772 L40.4139673,58.7878386 L33.4139673,55.7878386 L31.5756772,55 L30,58.6765801 L31.8382901,59.4644187 Z M68.4139673,59.4644187 L61.4139673,62.4644187 L59.5756772,63.2522573 L58,59.5756772 L59.8382901,58.7878386 L66.8382901,55.7878386 L68.6765801,55 L70.2522573,58.6765801 L68.4139673,59.4644187 Z",asleep:"M32.1818182,62 L39.8181818,62 L42,62 L42,58 L39.8181818,58 L32.1818182,58 L30,58 L30,62 L32.1818182,62 Z M60,62 L68,62 L70,62 L70,58 L68,58 L60,58 L58,58 L58,62 L60,62 Z",awake:"M35,62 L35,62 C36.1045695,62 37,61.1045695 37,60 C37,58.8954305 36.1045695,58 35,58 C33.8954305,58 33,58.8954305 33,60 C33,61.1045695 33.8954305,62 35,62 L35,62 Z M35,66 C31.6862915,66 29,63.3137085 29,60 C29,56.6862915 31.6862915,54 35,54 C38.3137085,54 41,56.6862915 41,60 C41,63.3137085 38.3137085,66 35,66 Z M65,62 C66.1045695,62 67,61.1045695 67,60 C67,58.8954305 66.1045695,58 65,58 C63.8954305,58 63,58.8954305 63,60 C63,61.1045695 63.8954305,62 65,62 Z M65,66 L65,66 C61.6862915,66 59,63.3137085 59,60 C59,56.6862915 61.6862915,54 65,54 C68.3137085,54 71,56.6862915 71,60 C71,63.3137085 68.3137085,66 65,66 L65,66 Z",happy:"M33.3832069,61.2316055 C33.4663305,61.1252515 33.7052431,60.8852671 34.0606164,60.6356114 C34.613312,60.2473334 35.2172668,60.0168253 35.8618908,59.9992577 L35.7533604,59.9992696 C36.4066289,60.0169293 37.0106683,60.2470018 37.5592314,60.6337226 C37.910109,60.881081 38.144039,61.1181155 38.2235934,61.221285 L39.4448784,62.8050978 L42.612504,60.3625278 L41.391219,58.778715 C41.0848685,58.3814269 40.5779442,57.8677752 39.8639741,57.3644473 C38.7121463,56.5524427 37.3707855,56.0415318 35.861452,56.0007304 L35.7529217,56.0007423 C34.2523726,56.0416358 32.9148757,56.5521111 31.7612415,57.3625585 C31.0480478,57.8635891 30.5396267,58.374291 30.2316055,58.7683945 L29,60.3441952 L32.1516014,62.8074062 L33.3832069,61.2316055 Z M61.3832069,61.2316055 C61.4663305,61.1252515 61.7052431,60.8852671 62.0606164,60.6356114 C62.613312,60.2473334 63.2172668,60.0168253 63.8618908,59.9992577 L63.7533604,59.9992696 C64.4066289,60.0169293 65.0106683,60.2470018 65.5592314,60.6337226 C65.910109,60.881081 66.144039,61.1181155 66.2235934,61.221285 L67.4448784,62.8050978 L70.612504,60.3625278 L69.391219,58.778715 C69.0848685,58.3814269 68.5779442,57.8677752 67.8639741,57.3644473 C66.7121463,56.5524427 65.3707855,56.0415318 63.861452,56.0007304 L63.7529217,56.0007423 C62.2523726,56.0416358 60.9148757,56.5521111 59.7612415,57.3625585 C59.0480478,57.8635891 58.5396267,58.374291 58.2316055,58.7683945 L57,60.3441952 L60.1516014,62.8074062 L61.3832069,61.2316055 Z",dead:"M61.1715729,60 L59.7573593,58.5857864 L58.3431458,57.1715729 L61.1715729,54.3431458 L62.5857864,55.7573593 L64,57.1715729 L65.4142136,55.7573593 L66.8284271,54.3431458 L69.6568542,57.1715729 L68.2426407,58.5857864 L66.8284271,60 L68.2426407,61.4142136 L69.6568542,62.8284271 L66.8284271,65.6568542 L65.4142136,64.2426407 L64,62.8284271 L62.5857864,64.2426407 L61.1715729,65.6568542 L58.3431458,62.8284271 L59.7573593,61.4142136 L61.1715729,60 Z M33.1715729,60 L31.7573593,58.5857864 L30.3431458,57.1715729 L33.1715729,54.3431458 L34.5857864,55.7573593 L36,57.1715729 L37.4142136,55.7573593 L38.8284271,54.3431458 L41.6568542,57.1715729 L40.2426407,58.5857864 L38.8284271,60 L40.2426407,61.4142136 L41.6568542,62.8284271 L38.8284271,65.6568542 L37.4142136,64.2426407 L36,62.8284271 L34.5857864,64.2426407 L33.1715729,65.6568542 L30.3431458,62.8284271 L31.7573593,61.4142136 L33.1715729,60 Z"};function Ut(s,e,n){let{mood:t="awake"}=e;return s.$$set=l=>{"mood"in l&&n(0,t=l.mood)},[t]}class zt extends X{constructor(e){super();W(this,e,Ut,Nt,Y,{mood:0})}}const Gt="npm-greenbot",St="0.13.0",Ot=["dist/","bin/"],Vt="./bin/greenbot.cjs",Ht="module",Kt={dev:"vite",build:"vite build",serve:"vite preview",check:"svelte-check --tsconfig ./tsconfig.json",preversion:"yarn build",release:"npm publish && git push && git push --tags"},Jt={"@sveltejs/vite-plugin-svelte":"^1.0.0-next.39","@tsconfig/svelte":"^3.0.0",autoprefixer:"^10.4.2","broadcast-channel":"^4.10.0",cssnano:"^5.1.0",postcss:"^8.4.7","postcss-load-config":"^3.1.3",svelte:"^3.46.4","svelte-check":"^2.4.5","svelte-preprocess":"^4.10.4",tailwindcss:"^3.0.23",tslib:"^2.3.1",typescript:"^4.6.2",vite:"^2.8.6"},Xt={"@sveltestack/svelte-query":"^1.6.0","@types/ramda":"^0.27.66",axios:"^0.21.4","body-parser":"^1.19.2",chalk:"^4.1.2",cors:"^2.8.5",express:"^4.17.3",open:"^8.4.0","package-json":"^7.0.0",ramda:"^0.27.2","replace-in-file":"^6.3.2","svelte-icons":"^2.1.0"};var Wt={name:Gt,version:St,files:Ot,bin:Vt,type:Ht,scripts:Kt,devDependencies:Jt,dependencies:Xt};const Yt=s=>({}),qe=s=>({}),xt=s=>({}),Ae=s=>({});function en(s){let e,n,t,l,a,i,o,r,d,w,y,b,_,c,p;const g=s[1].logo,L=ne(g,s,s[0],Ae),I=s[1].version,k=ne(I,s,s[0],qe),T=s[1].default,j=ne(T,s,s[0],null);return{c(){e=m("div"),n=m("header"),t=m("nav"),l=m("h1"),a=m("div"),L&&L.c(),i=q(),o=m("div"),o.textContent="_greenbot",r=q(),k&&k.c(),d=q(),w=m("main"),j&&j.c(),y=q(),b=m("footer"),_=m("div"),c=m("span"),c.textContent=`npm-greenbot@v${Wt.version}`,f(a,"class","w-12"),f(l,"class","flex items-center gap-2 whitespace-nowrap p-2"),f(t,"class","md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"),f(n,"class","border-b border-granny-smith-apple/50 bg-slate-900/60"),f(w,"class","layout-main svelte-1m49ym4"),f(c,"class","text-sm"),f(_,"class","max-w-xl m-auto text-center"),f(e,"class","layout svelte-1m49ym4")},m(D,v){$(D,e,v),u(e,n),u(n,t),u(t,l),u(l,a),L&&L.m(a,null),u(l,i),u(l,o),u(t,r),k&&k.m(t,null),u(e,d),u(e,w),j&&j.m(w,null),u(e,y),u(e,b),u(b,_),u(_,c),p=!0},p(D,[v]){L&&L.p&&(!p||v&1)&&le(L,g,D,D[0],p?ae(g,D[0],v,xt):se(D[0]),Ae),k&&k.p&&(!p||v&1)&&le(k,I,D,D[0],p?ae(I,D[0],v,Yt):se(D[0]),qe),j&&j.p&&(!p||v&1)&&le(j,T,D,D[0],p?ae(T,D[0],v,null):se(D[0]),null)},i(D){p||(h(L,D),h(k,D),h(j,D),p=!0)},o(D){C(L,D),C(k,D),C(j,D),p=!1},d(D){D&&R(e),L&&L.d(D),k&&k.d(D),j&&j.d(D)}}}function tn(s,e,n){let{$$slots:t={},$$scope:l}=e;return s.$$set=a=>{"$$scope"in a&&n(0,l=a.$$scope)},[l,t]}class nn extends X{constructor(e){super();W(this,e,tn,en,Y,{})}}function Qe(s,e,n){const t=s.slice();return t[3]=e[n],t}function Fe(s){let e,n=s[3].label+"",t,l,a,i,o;return{c(){e=m("button"),t=A(n),l=q(),f(e,"data-value",a=s[3].value),f(e,"class","svelte-u0zq3l"),O(e,"bg-castleton-green",s[0]===s[3].value)},m(r,d){$(r,e,d),u(e,t),u(e,l),i||(o=te(e,"click",function(){_t(s[2].bind(this,s[3]))&&s[2].bind(this,s[3]).apply(this,arguments)}),i=!0)},p(r,d){s=r,d&2&&n!==(n=s[3].label+"")&&H(t,n),d&2&&a!==(a=s[3].value)&&f(e,"data-value",a),d&3&&O(e,"bg-castleton-green",s[0]===s[3].value)},d(r){r&&R(e),i=!1,o()}}}function ln(s){let e,n=s[1],t=[];for(let l=0;l<n.length;l+=1)t[l]=Fe(Qe(s,n,l));return{c(){e=m("div");for(let l=0;l<t.length;l+=1)t[l].c();f(e,"class","container svelte-u0zq3l")},m(l,a){$(l,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,[a]){if(a&7){n=l[1];let i;for(i=0;i<n.length;i+=1){const o=Qe(l,n,i);t[i]?t[i].p(o,a):(t[i]=Fe(o),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},i:ee,o:ee,d(l){l&&R(e),ce(t,l)}}}function sn(s,e,n){let{selectedTab:t=""}=e,{tabs:l=[]}=e,{onChange:a}=e;return s.$$set=i=>{"selectedTab"in i&&n(0,t=i.selectedTab),"tabs"in i&&n(1,l=i.tabs),"onChange"in i&&n(2,a=i.onChange)},[t,l,a]}class an extends X{constructor(e){super();W(this,e,sn,ln,Y,{selectedTab:0,tabs:1,onChange:2})}}function rn(s){let e,n,t,l,a,i,o,r,d,w;return t=new Ge({}),{c(){e=m("a"),n=m("div"),N(t.$$.fragment),l=q(),a=m("div"),i=A(s[0]),o=A(" @ "),r=A(s[1]),f(n,"class","h-10"),f(a,"class","font-mono font-medium"),f(e,"target","_blank"),f(e,"href",d=`https://www.npmjs.com/package/${s[0]}`),f(e,"class","svelte-8yqr22")},m(y,b){$(y,e,b),u(e,n),U(t,n,null),u(e,l),u(e,a),u(a,i),u(a,o),u(a,r),w=!0},p(y,[b]){(!w||b&1)&&H(i,y[0]),(!w||b&2)&&H(r,y[1]),(!w||b&1&&d!==(d=`https://www.npmjs.com/package/${y[0]}`))&&f(e,"href",d)},i(y){w||(h(t.$$.fragment,y),w=!0)},o(y){C(t.$$.fragment,y),w=!1},d(y){y&&R(e),z(t)}}}function on(s,e,n){let{name:t=""}=e,{version:l=""}=e;return s.$$set=a=>{"name"in a&&n(0,t=a.name),"version"in a&&n(1,l=a.version)},[t,l]}class fn extends X{constructor(e){super();W(this,e,on,rn,Y,{name:0,version:1})}}function un(s){let e,n,t;return{c(){e=x("svg"),n=x("path"),t=x("path"),f(n,"opacity","0.2"),f(n,"fill-rule","evenodd"),f(n,"clip-rule","evenodd"),f(n,"d","M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"),f(n,"fill","currentColor"),f(t,"d","M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"),f(t,"fill","currentColor"),f(e,"stroke","currentColor"),f(e,"fill","none"),f(e,"stroke-width","0"),f(e,"viewBox","0 0 24 24"),f(e,"height","1em"),f(e,"width","1em"),f(e,"xmlns","http://www.w3.org/2000/svg"),O(e,"animate-spin",s[0])},m(l,a){$(l,e,a),u(e,n),u(e,t)},p(l,[a]){a&1&&O(e,"animate-spin",l[0])},i:ee,o:ee,d(l){l&&R(e)}}}function cn(s,e,n){let{animated:t=!1}=e;return s.$$set=l=>{"animated"in l&&n(0,t=l.animated)},[t]}class dn extends X{constructor(e){super();W(this,e,cn,un,Y,{animated:0})}}function Be(s){let e,n,t,l,a,i;return t=new dn({props:{animated:!0}}),{c(){e=m("div"),n=m("div"),N(t.$$.fragment),l=q(),a=m("span"),a.textContent="Loading dependencies",f(n,"class","h-4 w-4"),f(e,"class","border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2")},m(o,r){$(o,e,r),u(e,n),U(t,n,null),u(e,l),u(e,a),i=!0},i(o){i||(h(t.$$.fragment,o),i=!0)},o(o){C(t.$$.fragment,o),i=!1},d(o){o&&R(e),z(t)}}}function Ne(s){let e,n,t,l;return e=new an({props:{onChange:s[4],selectedTab:s[0],tabs:[{value:"dependencies",label:"Dependencies"},{value:"devDependencies",label:"Dev Dependencies"}]}}),t=new Bt({props:{label:s[0]==="devDependencies"?"Dev Dependencies":"Dependencies",entries:s[2]}}),{c(){N(e.$$.fragment),n=q(),N(t.$$.fragment)},m(a,i){U(e,a,i),$(a,n,i),U(t,a,i),l=!0},p(a,i){const o={};i&1&&(o.selectedTab=a[0]),e.$set(o);const r={};i&1&&(r.label=a[0]==="devDependencies"?"Dev Dependencies":"Dependencies"),i&4&&(r.entries=a[2]),t.$set(r)},i(a){l||(h(e.$$.fragment,a),h(t.$$.fragment,a),l=!0)},o(a){C(e.$$.fragment,a),C(t.$$.fragment,a),l=!1},d(a){z(e,a),a&&R(n),z(t,a)}}}function pn(s){let e,n,t,l=s[1].isLoading&&Be(),a=s[1].data&&Ne(s);return{c(){e=m("div"),l&&l.c(),n=q(),a&&a.c(),f(e,"class","w-full grid gap-4")},m(i,o){$(i,e,o),l&&l.m(e,null),u(e,n),a&&a.m(e,null),t=!0},p(i,o){i[1].isLoading?l?o&2&&h(l,1):(l=Be(),l.c(),h(l,1),l.m(e,n)):l&&(K(),C(l,1,1,()=>{l=null}),J()),i[1].data?a?(a.p(i,o),o&2&&h(a,1)):(a=Ne(i),a.c(),h(a,1),a.m(e,null)):a&&(K(),C(a,1,1,()=>{a=null}),J())},i(i){t||(h(l),h(a),t=!0)},o(i){C(l),C(a),t=!1},d(i){i&&R(e),l&&l.d(),a&&a.d()}}}function gn(s){let e,n;return e=new zt({props:{mood:s[3],slot:"logo"}}),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},p(t,l){const a={};l&8&&(a.mood=t[3]),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function Ue(s){let e,n;return e=new fn({props:{name:s[1].data.name,version:s[1].data.version}}),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},p(t,l){const a={};l&2&&(a.name=t[1].data.name),l&2&&(a.version=t[1].data.version),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function mn(s){let e,n,t=s[1].data&&Ue(s);return{c(){e=m("div"),t&&t.c(),f(e,"slot","version")},m(l,a){$(l,e,a),t&&t.m(e,null),n=!0},p(l,a){l[1].data?t?(t.p(l,a),a&2&&h(t,1)):(t=Ue(l),t.c(),h(t,1),t.m(e,null)):t&&(K(),C(t,1,1,()=>{t=null}),J())},i(l){n||(h(t),n=!0)},o(l){C(t),n=!1},d(l){l&&R(e),t&&t.d()}}}function _n(s){let e,n;return e=new nn({props:{$$slots:{version:[mn],logo:[gn],default:[pn]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},p(t,[l]){const a={};l&527&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function bn([s,e],n,t){return{name:s,version:e,latest:n[s],meta:t[s]}}function hn(s,e,n){let t,l,a,i,o="dependencies";function r({value:b}){n(0,o=b)}function d(b,_){return b.filter(([c,p])=>_[c]!==p)}function w(b){if(b.isLoading)return"asleep";if(b.error)return"dead";if(b.data){const{dependencies:_,devDependencies:c,resolutions:p}=b.data,g=Object.entries(oe(oe({},_),c));return d(g,b.data.resolutions).filter(([I,k])=>!xe(k,p[I])).length?"angry":"happy"}return"awake"}const y=wt();return fe(s,y,b=>n(1,i=b)),s.$$.update=()=>{s.$$.dirty&2&&n(3,t=w(i)),s.$$.dirty&3&&n(6,l=i.isLoading||i.error?[]:d(Object.entries(i.data[o]),i.data.resolutions)),s.$$.dirty&66&&n(2,a=l.map(b=>bn(b,i.data.resolutions,i.data.meta)))},[o,i,a,t,r,y,l]}class vn extends X{constructor(e){super();W(this,e,hn,_n,Y,{})}}function Ln(s){let e,n;return e=new vn({}),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function kn(s){let e,n;return e=new bt({props:{client:s[0],$$slots:{default:[Ln]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(t,l){U(e,t,l),n=!0},p(t,[l]){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function wn(s){return[new ht]}class Cn extends X{constructor(e){super();W(this,e,wn,kn,Y,{})}}new Cn({target:document.getElementById("app")});
