var Ae=Object.defineProperty,Ie=Object.defineProperties;var Qe=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ce=(l,e,n)=>e in l?Ae(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n,le=(l,e)=>{for(var n in e||(e={}))Oe.call(e,n)&&ce(l,n,e[n]);if(fe)for(var n of fe(e))Se.call(e,n)&&ce(l,n,e[n]);return l},de=(l,e)=>Ie(l,Qe(e));import{a as Ue,S as Y,i as x,s as ee,G as Be,e as h,b as A,c as B,d as c,t as G,f as y,g as d,m as F,l as X,h as H,j as w,k as J,n as L,o as M,p as T,q as Fe,r as re,u as ae,v as oe,w as ue,x as N,y as pe,z as R,A as ge,B as Me,C as Te,D as De,E as Ge,F as Re,H as Ve,I as Pe,J as ne,K as me,L as Ke,M as ze,N as He,Q as Je,O as We}from"./vendor.bd30278e.js";const Xe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Xe();const Ze=Ue.create({baseURL:"http://localhost:5001"}),Ye=l=>new Promise(e=>{setTimeout(()=>e(l),l)});async function xe(){return(await Ze.get("/package")).data}async function et(l){const e=await Ze.post("/upgrade-packages",l);return await Ye(1e3*Math.random()),e.data}const Ee=l=>({version:l.replace(/[\^~]/,""),qualifier:isNaN(Number(l[0]))?l[0]:void 0}),je=(l,e)=>Ee(l).version===e,se=10,ie={package:"package"};function tt(l){let e;const n=l[3].default,t=re(n,l,l[2],null);return{c(){t&&t.c()},m(s,i){t&&t.m(s,i),e=!0},p(s,i){t&&t.p&&(!e||i&4)&&ae(t,n,s,s[2],e?ue(n,s[2],i,null):oe(s[2]),null)},i(s){e||(L(t,s),e=!0)},o(s){w(t,s),e=!1},d(s){t&&t.d(s)}}}function nt(l){let e="...",n,t,s,i;const o=l[3].default,r=re(o,l,l[2],null);return{c(){n=N(e),t=A(),s=h("div"),r&&r.c(),c(s,"class","opacity-0 h-0")},m(a,u){y(a,n,u),y(a,t,u),y(a,s,u),r&&r.m(s,null),i=!0},p(a,u){r&&r.p&&(!i||u&4)&&ae(r,o,a,a[2],i?ue(o,a[2],u,null):oe(a[2]),null)},i(a){i||(L(r,a),i=!0)},o(a){w(r,a),i=!1},d(a){a&&M(n),a&&M(t),a&&M(s),r&&r.d(a)}}}function lt(l){let e,n,t,s,i,o,r,a,u,p;const C=[nt,tt],f=[];function m(v,$){return v[0]?0:1}return t=m(l),s=f[t]=C[t](l),r=new Be({props:{height:"1em"}}),{c(){e=h("button"),n=h("div"),s.c(),i=A(),o=h("div"),B(r.$$.fragment),c(n,"class","px-1 font-medium relative"),c(o,"class","h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"),c(e,"class","flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple text-castleton-green -mr-1"),e.disabled=l[1],G(e,"opacity-90",l[0]),G(e,"opacity-70",l[1])},m(v,$){y(v,e,$),d(e,n),f[t].m(n,null),d(e,i),d(e,o),F(r,o,null),a=!0,u||(p=X(e,"click",l[4]),u=!0)},p(v,[$]){let O=t;t=m(v),t===O?f[t].p(v,$):(H(),w(f[O],1,1,()=>{f[O]=null}),J(),s=f[t],s?s.p(v,$):(s=f[t]=C[t](v),s.c()),L(s,1),s.m(n,null)),(!a||$&2)&&(e.disabled=v[1]),$&1&&G(e,"opacity-90",v[0]),$&2&&G(e,"opacity-70",v[1])},i(v){a||(L(s),L(r.$$.fragment,v),a=!0)},o(v){w(s),w(r.$$.fragment,v),a=!1},d(v){v&&M(e),f[t].d(),T(r),u=!1,p()}}}function st(l,e,n){let{$$slots:t={},$$scope:s}=e,{isLoading:i=!1}=e,{disabled:o=!1}=e;function r(a){Fe.call(this,l,a)}return l.$$set=a=>{"isLoading"in a&&n(0,i=a.isLoading),"disabled"in a&&n(1,o=a.disabled),"$$scope"in a&&n(2,s=a.$$scope)},[i,o,s,t,r]}class qe extends Y{constructor(e){super();x(this,e,st,lt,ee,{isLoading:0,disabled:1})}}function _e(l,e,n){const t=l.slice();return t[20]=e[n],t}function Le(l,e,n){const t=l.slice();return t[23]=e[n].name,t[24]=e[n].version,t[25]=e[n].latest,t[26]=e[n].isLatest,t[28]=n,t}function be(l){let e,n,t;return n=new Pe({}),{c(){e=h("div"),B(n.$$.fragment),c(e,"class","h-4 w-4 ml-1")},m(s,i){y(s,e,i),F(n,e,null),t=!0},i(s){t||(L(n.$$.fragment,s),t=!0)},o(s){w(n.$$.fragment,s),t=!1},d(s){s&&M(e),T(n)}}}function he(l){let e,n;return e=new qe({props:{disabled:l[9].isLoading,isLoading:l[9].isLoading,$$slots:{default:[it]},$$scope:{ctx:l}}}),e.$on("click",l[17]),{c(){B(e.$$.fragment)},m(t,s){F(e,t,s),n=!0},p(t,s){const i={};s&512&&(i.disabled=t[9].isLoading),s&512&&(i.isLoading=t[9].isLoading),s&536870912&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function it(l){let e;return{c(){e=N("Upgrade all")},m(n,t){y(n,e,t)},d(n){n&&M(e)}}}function rt(l){let e,n=l[23]+"",t,s,i,o;function r(){return l[18](l[23],l[24],l[25])}return i=new qe({props:{disabled:l[9].isLoading&&l[4]===l[23],isLoading:l[9].isLoading&&l[4]===l[23],$$slots:{default:[ot]},$$scope:{ctx:l}}}),i.$on("click",r),{c(){e=h("div"),t=N(n),s=A(),B(i.$$.fragment)},m(a,u){y(a,e,u),d(e,t),y(a,s,u),F(i,a,u),o=!0},p(a,u){l=a,(!o||u&128)&&n!==(n=l[23]+"")&&R(t,n);const p={};u&656&&(p.disabled=l[9].isLoading&&l[4]===l[23]),u&656&&(p.isLoading=l[9].isLoading&&l[4]===l[23]),u&536871040&&(p.$$scope={dirty:u,ctx:l}),i.$set(p)},i(a){o||(L(i.$$.fragment,a),o=!0)},o(a){w(i.$$.fragment,a),o=!1},d(a){a&&M(e),a&&M(s),T(i,a)}}}function at(l){let e,n=l[23]+"",t,s,i,o=l[24]+"",r,a,u,p,C;return p=new Pe({}),{c(){e=h("div"),t=N(n),s=A(),i=h("div"),r=N(o),a=A(),u=h("div"),B(p.$$.fragment),c(u,"class","h-4 w-4 ml-1"),c(i,"class","flex")},m(f,m){y(f,e,m),d(e,t),y(f,s,m),y(f,i,m),d(i,r),d(i,a),d(i,u),F(p,u,null),C=!0},p(f,m){(!C||m&128)&&n!==(n=f[23]+"")&&R(t,n),(!C||m&128)&&o!==(o=f[24]+"")&&R(r,o)},i(f){C||(L(p.$$.fragment,f),C=!0)},o(f){w(p.$$.fragment,f),C=!1},d(f){f&&M(e),f&&M(s),f&&M(i),T(p)}}}function ot(l){let e=l[24]+"",n,t,s=l[25]+"",i;return{c(){n=N(e),t=N(" \u21D2 "),i=N(s)},m(o,r){y(o,n,r),y(o,t,r),y(o,i,r)},p(o,r){r&128&&e!==(e=o[24]+"")&&R(n,e),r&128&&s!==(s=o[25]+"")&&R(i,s)},d(o){o&&M(n),o&&M(t),o&&M(i)}}}function ve(l){let e,n,t,s,i;const o=[at,rt],r=[];function a(u,p){return u[26]?0:1}return n=a(l),t=r[n]=o[n](l),{c(){e=h("li"),t.c(),s=A(),c(e,"class","flex justify-between p-4 border-granny-smith-apple text-xs"),G(e,"border-t",l[28]!==0)},m(u,p){y(u,e,p),r[n].m(e,null),d(e,s),i=!0},p(u,p){let C=n;n=a(u),n===C?r[n].p(u,p):(H(),w(r[C],1,1,()=>{r[C]=null}),J(),t=r[n],t?t.p(u,p):(t=r[n]=o[n](u),t.c()),L(t,1),t.m(e,s))},i(u){i||(L(t),i=!0)},o(u){w(t),i=!1},d(u){u&&M(e),r[n].d()}}}function $e(l){let e,n=l[20]+1+"",t,s,i,o;return{c(){e=h("li"),t=N(n),c(e,"role","button"),c(e,"data-page",s=l[20]),c(e,"class","flex justify-between p-4 px-6 border-r border-granny-smith-apple"),G(e,"bg-castleton-green",l[20]===l[2])},m(r,a){y(r,e,a),d(e,t),i||(o=X(e,"click",l[11]),i=!0)},p(r,a){a&256&&n!==(n=r[20]+1+"")&&R(t,n),a&256&&s!==(s=r[20])&&c(e,"data-page",s),a&260&&G(e,"bg-castleton-green",r[20]===r[2])},d(r){r&&M(e),i=!1,o()}}}function ut(l){let e,n,t,s,i,o=l[3].length+"",r,a,u=l[1].length+"",p,C,f,m,v,$,O,I,E,Q,K,k,P,b,S,z,D=l[5]&&be(),j=!l[5]&&he(l),V=l[7],Z=[];for(let g=0;g<V.length;g+=1)Z[g]=ve(Le(l,V,g));const Ne=g=>w(Z[g],1,1,()=>{Z[g]=null});let W=pe(0,l[8]),U=[];for(let g=0;g<W.length;g+=1)U[g]=$e(_e(l,W,g));return{c(){e=h("div"),n=h("div"),t=h("div"),s=N(l[0]),i=N(" ("),r=N(o),a=N("/"),p=N(u),C=N(`)
      `),D&&D.c(),f=A(),m=h("div"),j&&j.c(),v=A(),$=h("ul");for(let g=0;g<Z.length;g+=1)Z[g].c();O=A(),I=h("div"),E=h("ul"),Q=h("li"),Q.textContent="\u25C4",K=A();for(let g=0;g<U.length;g+=1)U[g].c();k=A(),P=h("li"),P.textContent="\u25BA",c(t,"class","flex items-center"),c(n,"class","p-4 border-b border-granny-smith-apple flex items-center justify-between"),c($,"class","grid"),c(Q,"role","button"),c(Q,"class","flex justify-between p-4 px-6 border-r border-l border-granny-smith-apple"),c(P,"role","button"),c(P,"class","flex justify-between p-4 px-6 border-r border-granny-smith-apple"),c(E,"class","inline-flex mx-auto font-medium"),c(I,"class","flex justify-center border-t border-granny-smith-apple"),c(e,"class","border-2 border-granny-smith-apple rounded-xl overflow-hidden relative")},m(g,q){y(g,e,q),d(e,n),d(n,t),d(t,s),d(t,i),d(t,r),d(t,a),d(t,p),d(t,C),D&&D.m(t,null),d(n,f),d(n,m),j&&j.m(m,null),d(e,v),d(e,$);for(let _=0;_<Z.length;_+=1)Z[_].m($,null);d(e,O),d(e,I),d(I,E),d(E,Q),d(E,K);for(let _=0;_<U.length;_+=1)U[_].m(E,null);d(E,k),d(E,P),b=!0,S||(z=[X(Q,"click",l[13]),X(P,"click",l[12])],S=!0)},p(g,[q]){if((!b||q&1)&&R(s,g[0]),(!b||q&8)&&o!==(o=g[3].length+"")&&R(r,o),(!b||q&2)&&u!==(u=g[1].length+"")&&R(p,u),g[5]?D?q&32&&L(D,1):(D=be(),D.c(),L(D,1),D.m(t,null)):D&&(H(),w(D,1,1,()=>{D=null}),J()),g[5]?j&&(H(),w(j,1,1,()=>{j=null}),J()):j?(j.p(g,q),q&32&&L(j,1)):(j=he(g),j.c(),L(j,1),j.m(m,null)),q&17040){V=g[7];let _;for(_=0;_<V.length;_+=1){const te=Le(g,V,_);Z[_]?(Z[_].p(te,q),L(Z[_],1)):(Z[_]=ve(te),Z[_].c(),L(Z[_],1),Z[_].m($,null))}for(H(),_=V.length;_<Z.length;_+=1)Ne(_);J()}if(q&2308){W=pe(0,g[8]);let _;for(_=0;_<W.length;_+=1){const te=_e(g,W,_);U[_]?U[_].p(te,q):(U[_]=$e(te),U[_].c(),U[_].m(E,k))}for(;_<U.length;_+=1)U[_].d(1);U.length=W.length}},i(g){if(!b){L(D),L(j);for(let q=0;q<V.length;q+=1)L(Z[q]);b=!0}},o(g){w(D),w(j),Z=Z.filter(Boolean);for(let q=0;q<Z.length;q+=1)w(Z[q]);b=!1},d(g){g&&M(e),D&&D.d(),j&&j.d(),ge(Z,g),ge(U,g),S=!1,Me(z)}}}function ft(l,e,n){let t,s,i,o,r,a,u,p,{label:C=""}=e,{entries:f=[]}=e,m=0,v="";const $=Te(et,{onMutate([{name:b}]){n(4,v=b)},onSettled(){n(4,v="")}});De(l,$,b=>n(9,p=b));function O(b){const{page:S}=b.target.dataset;n(2,m=Number(S))}function I(){m<t-1&&n(2,m++,m)}function E(){m>0&&n(2,m--,m)}const Q=Ge();async function K(b){try{const S=await p.mutateAsync(b);Q.setQueryData([ie.package],z=>{for(let D of S){const{qualifier:j}=Ee(D.version),V=`${j}${D.latest}`;z.dependencies[D.name]=V,z.devDependencies[D.name]=V}return z}),await Q.refetchQueries([ie.package])}catch(S){console.log("Failed to upgrade packages:",{originalError:S})}}const k=()=>K(a),P=(b,S,z)=>K([{name:b,version:S,latest:z}]);return l.$$set=b=>{"label"in b&&n(0,C=b.label),"entries"in b&&n(1,f=b.entries)},l.$$.update=()=>{l.$$.dirty&2&&n(8,t=f.length/se),l.$$.dirty&2&&n(15,s=f.map(b=>de(le({},b),{isLatest:je(b.version,b.latest)})).sort((b,S)=>b.isLatest&&S.isLatest?0:b.isLatest&&!S.isLatest?1:-1)),l.$$.dirty&4&&n(16,i=m*se),l.$$.dirty&98304&&n(7,o=s.slice(i,i+se)),l.$$.dirty&32768&&n(3,[r,a]=Re(Ve("isLatest"),s),r,(n(6,a),n(15,s),n(1,f))),l.$$.dirty&10&&n(5,u=r.length===f.length)},[C,f,m,r,v,u,a,o,t,p,$,O,I,E,K,s,i,k,P]}class ct extends Y{constructor(e){super();x(this,e,ft,ut,ee,{label:0,entries:1})}}function dt(l){let e,n,t,s,i,o,r;return{c(){e=ne("svg"),n=ne("g"),t=ne("g"),s=ne("path"),o=ne("path"),c(s,"d",i=ke[l[0]]),c(o,"d","M50,20 C71.4336483,20 81.3822646,28.613774 86.0000023,36.6100918 L86,11.9417476 L86,10 L90,10 L90,11.9417476 L90,58.0582524 L90,59.0291262 L90,70 C90,70 90,90 50,90 C10,90 10,70 10,70 L10,59.0291262 L10,58.0582524 L10,11.9417476 L10,10 L14,10 L14,11.9417476 L14,36.6100878 C18.6177354,28.613774 28.5663517,20 50,20 Z M20,60 C20,51.7157288 26.7081139,45 35.0050808,45 L64.9949192,45 C73.2819965,45 80,51.7139073 80,60 C80,68.2842712 73.2918861,75 64.9949192,75 L35.0050808,75 C26.7180035,75 20,68.2860927 20,60 Z M14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 L14,10 Z M90,10 C90,8.8954305 89.1045695,8 88,8 C86.8954305,8 86,8.8954305 86,10 L90,10 Z"),c(t,"fill","currentColor"),c(n,"stroke","none"),c(n,"stroke-width","1"),c(n,"fill","none"),c(n,"fill-rule","evenodd"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(e,"viewBox","0 0 100 125"),c(e,"class",r=Ce[l[0]])},m(a,u){y(a,e,u),d(e,n),d(n,t),d(t,s),d(t,o)},p(a,[u]){u&1&&i!==(i=ke[a[0]])&&c(s,"d",i),u&1&&r!==(r=Ce[a[0]])&&c(e,"class",r)},i:me,o:me,d(a){a&&M(e)}}}const ke={angry:"M31.8382901,59.4644187 L38.8382901,62.4644187 L40.6765801,63.2522573 L42.2522573,59.5756772 L40.4139673,58.7878386 L33.4139673,55.7878386 L31.5756772,55 L30,58.6765801 L31.8382901,59.4644187 Z M68.4139673,59.4644187 L61.4139673,62.4644187 L59.5756772,63.2522573 L58,59.5756772 L59.8382901,58.7878386 L66.8382901,55.7878386 L68.6765801,55 L70.2522573,58.6765801 L68.4139673,59.4644187 Z",asleep:"M32.1818182,62 L39.8181818,62 L42,62 L42,58 L39.8181818,58 L32.1818182,58 L30,58 L30,62 L32.1818182,62 Z M60,62 L68,62 L70,62 L70,58 L68,58 L60,58 L58,58 L58,62 L60,62 Z",awake:"M35,62 L35,62 C36.1045695,62 37,61.1045695 37,60 C37,58.8954305 36.1045695,58 35,58 C33.8954305,58 33,58.8954305 33,60 C33,61.1045695 33.8954305,62 35,62 L35,62 Z M35,66 C31.6862915,66 29,63.3137085 29,60 C29,56.6862915 31.6862915,54 35,54 C38.3137085,54 41,56.6862915 41,60 C41,63.3137085 38.3137085,66 35,66 Z M65,62 C66.1045695,62 67,61.1045695 67,60 C67,58.8954305 66.1045695,58 65,58 C63.8954305,58 63,58.8954305 63,60 C63,61.1045695 63.8954305,62 65,62 Z M65,66 L65,66 C61.6862915,66 59,63.3137085 59,60 C59,56.6862915 61.6862915,54 65,54 C68.3137085,54 71,56.6862915 71,60 C71,63.3137085 68.3137085,66 65,66 L65,66 Z",happy:"M33.3832069,61.2316055 C33.4663305,61.1252515 33.7052431,60.8852671 34.0606164,60.6356114 C34.613312,60.2473334 35.2172668,60.0168253 35.8618908,59.9992577 L35.7533604,59.9992696 C36.4066289,60.0169293 37.0106683,60.2470018 37.5592314,60.6337226 C37.910109,60.881081 38.144039,61.1181155 38.2235934,61.221285 L39.4448784,62.8050978 L42.612504,60.3625278 L41.391219,58.778715 C41.0848685,58.3814269 40.5779442,57.8677752 39.8639741,57.3644473 C38.7121463,56.5524427 37.3707855,56.0415318 35.861452,56.0007304 L35.7529217,56.0007423 C34.2523726,56.0416358 32.9148757,56.5521111 31.7612415,57.3625585 C31.0480478,57.8635891 30.5396267,58.374291 30.2316055,58.7683945 L29,60.3441952 L32.1516014,62.8074062 L33.3832069,61.2316055 Z M61.3832069,61.2316055 C61.4663305,61.1252515 61.7052431,60.8852671 62.0606164,60.6356114 C62.613312,60.2473334 63.2172668,60.0168253 63.8618908,59.9992577 L63.7533604,59.9992696 C64.4066289,60.0169293 65.0106683,60.2470018 65.5592314,60.6337226 C65.910109,60.881081 66.144039,61.1181155 66.2235934,61.221285 L67.4448784,62.8050978 L70.612504,60.3625278 L69.391219,58.778715 C69.0848685,58.3814269 68.5779442,57.8677752 67.8639741,57.3644473 C66.7121463,56.5524427 65.3707855,56.0415318 63.861452,56.0007304 L63.7529217,56.0007423 C62.2523726,56.0416358 60.9148757,56.5521111 59.7612415,57.3625585 C59.0480478,57.8635891 58.5396267,58.374291 58.2316055,58.7683945 L57,60.3441952 L60.1516014,62.8074062 L61.3832069,61.2316055 Z",dead:"M61.1715729,60 L59.7573593,58.5857864 L58.3431458,57.1715729 L61.1715729,54.3431458 L62.5857864,55.7573593 L64,57.1715729 L65.4142136,55.7573593 L66.8284271,54.3431458 L69.6568542,57.1715729 L68.2426407,58.5857864 L66.8284271,60 L68.2426407,61.4142136 L69.6568542,62.8284271 L66.8284271,65.6568542 L65.4142136,64.2426407 L64,62.8284271 L62.5857864,64.2426407 L61.1715729,65.6568542 L58.3431458,62.8284271 L59.7573593,61.4142136 L61.1715729,60 Z M33.1715729,60 L31.7573593,58.5857864 L30.3431458,57.1715729 L33.1715729,54.3431458 L34.5857864,55.7573593 L36,57.1715729 L37.4142136,55.7573593 L38.8284271,54.3431458 L41.6568542,57.1715729 L40.2426407,58.5857864 L38.8284271,60 L40.2426407,61.4142136 L41.6568542,62.8284271 L38.8284271,65.6568542 L37.4142136,64.2426407 L36,62.8284271 L34.5857864,64.2426407 L33.1715729,65.6568542 L30.3431458,62.8284271 L31.7573593,61.4142136 L33.1715729,60 Z"},Ce={angry:"text-granny-smith-apple",asleep:"text-granny-smith-apple",awake:"text-granny-smith-apple",happy:"text-granny-smith-apple",dead:"text-granny-smith-apple"};function pt(l,e,n){let{mood:t="awake"}=e;return l.$$set=s=>{"mood"in s&&n(0,t=s.mood)},[t]}class gt extends Y{constructor(e){super();x(this,e,pt,dt,ee,{mood:0})}}function mt(l){let e,n,t;const s=l[1].default,i=re(s,l,l[0],null);return{c(){e=h("div"),n=h("main"),i&&i.c(),c(n,"class","grid place-items-center py-12 w-full max-w-xl mx-auto"),c(e,"class","min-h-screen bg-gray-800 text-granny-smith-apple pt-12")},m(o,r){y(o,e,r),d(e,n),i&&i.m(n,null),t=!0},p(o,[r]){i&&i.p&&(!t||r&1)&&ae(i,s,o,o[0],t?ue(s,o[0],r,null):oe(o[0]),null)},i(o){t||(L(i,o),t=!0)},o(o){w(i,o),t=!1},d(o){o&&M(e),i&&i.d(o)}}}function _t(l,e,n){let{$$slots:t={},$$scope:s}=e;return l.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,t]}class Lt extends Y{constructor(e){super();x(this,e,_t,mt,ee,{})}}function we(l){let e,n,t,s,i,o;return t=new ze({}),{c(){e=h("div"),n=h("div"),B(t.$$.fragment),s=A(),i=h("span"),i.textContent="Loading dependencies",c(n,"class","h-4 w-4 animate-spin"),c(e,"class","flex items-center justify-center gap-2")},m(r,a){y(r,e,a),d(e,n),F(t,n,null),d(e,s),d(e,i),o=!0},i(r){o||(L(t.$$.fragment,r),o=!0)},o(r){w(t.$$.fragment,r),o=!1},d(r){r&&M(e),T(t)}}}function ye(l){let e,n,t,s,i,o=l[1].data.name+"",r,a,u=l[1].data.version+"",p,C,f,m,v,$,O,I,E,Q,K;return t=new He({}),I=new ct({props:{label:l[0]==="devDependencies"?"Dev Dependencies":"Dependencies",entries:l[2]}}),{c(){e=h("div"),n=h("div"),B(t.$$.fragment),s=A(),i=h("div"),r=N(o),a=N(" - "),p=N(u),C=A(),f=h("div"),m=h("button"),m.textContent="Dependencies",v=A(),$=h("button"),$.textContent="Dev Dependencies",O=A(),B(I.$$.fragment),c(n,"class","h-12 mr-2 pt-0.5"),c(e,"class","bg-[#cb3837] px-4 rounded-xl text-white flex items-center justify-center font-medium"),c(m,"data-value","dependencies"),c(m,"class","p-4 cursor-pointer flex-1"),G(m,"bg-castleton-green",l[0]==="dependencies"),c($,"data-value","devDependencies"),c($,"class","p-4 cursor-pointer flex-1 border-l border-granny-smith-apple"),G($,"bg-castleton-green",l[0]==="devDependencies"),c(f,"class","border-2 border-granny-smith-apple rounded-xl flex justify-between overflow-hidden")},m(k,P){y(k,e,P),d(e,n),F(t,n,null),d(e,s),d(e,i),d(i,r),d(i,a),d(i,p),y(k,C,P),y(k,f,P),d(f,m),d(f,v),d(f,$),y(k,O,P),F(I,k,P),E=!0,Q||(K=[X(m,"click",l[4]),X($,"click",l[4])],Q=!0)},p(k,P){(!E||P&2)&&o!==(o=k[1].data.name+"")&&R(r,o),(!E||P&2)&&u!==(u=k[1].data.version+"")&&R(p,u),P&1&&G(m,"bg-castleton-green",k[0]==="dependencies"),P&1&&G($,"bg-castleton-green",k[0]==="devDependencies");const b={};P&1&&(b.label=k[0]==="devDependencies"?"Dev Dependencies":"Dependencies"),P&4&&(b.entries=k[2]),I.$set(b)},i(k){E||(L(t.$$.fragment,k),L(I.$$.fragment,k),E=!0)},o(k){w(t.$$.fragment,k),w(I.$$.fragment,k),E=!1},d(k){k&&M(e),T(t),k&&M(C),k&&M(f),k&&M(O),T(I,k),Q=!1,Me(K)}}}function bt(l){let e,n,t,s,i,o;n=new gt({props:{mood:l[3]}});let r=l[1].isLoading&&we(),a=l[1].data&&ye(l);return{c(){e=h("div"),B(n.$$.fragment),t=A(),s=h("div"),r&&r.c(),i=A(),a&&a.c(),c(e,"class","grid place-items-center h-40 w-40 mx-auto"),c(s,"class","w-full grid gap-4")},m(u,p){y(u,e,p),F(n,e,null),y(u,t,p),y(u,s,p),r&&r.m(s,null),d(s,i),a&&a.m(s,null),o=!0},p(u,p){const C={};p&8&&(C.mood=u[3]),n.$set(C),u[1].isLoading?r?p&2&&L(r,1):(r=we(),r.c(),L(r,1),r.m(s,i)):r&&(H(),w(r,1,1,()=>{r=null}),J()),u[1].data?a?(a.p(u,p),p&2&&L(a,1)):(a=ye(u),a.c(),L(a,1),a.m(s,null)):a&&(H(),w(a,1,1,()=>{a=null}),J())},i(u){o||(L(n.$$.fragment,u),L(r),L(a),o=!0)},o(u){w(n.$$.fragment,u),w(r),w(a),o=!1},d(u){u&&M(e),T(n),u&&M(t),u&&M(s),r&&r.d(),a&&a.d()}}}function ht(l){let e,n;return e=new Lt({props:{$$slots:{default:[bt]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment)},m(t,s){F(e,t,s),n=!0},p(t,[s]){const i={};s&527&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function vt([l,e],n){return{name:l,version:e,latest:n[l]}}function $t(l,e,n){let t,s,i,o,r="dependencies";function a({target:f}){const{value:m}=f.dataset;n(0,r=m)}function u(f,m){return f.filter(([v,$])=>m[v]!==$)}function p(f){if(f.isLoading)return"asleep";if(f.error)return"dead";if(f.data){const{dependencies:m,devDependencies:v,resolutions:$}=f.data,O=Object.entries(le(le({},m),v));return u(O,f.data.resolutions).filter(([E,Q])=>!je(Q,$[E])).length?"angry":"happy"}return"awake"}const C=Ke(ie.package,xe);return De(l,C,f=>n(1,o=f)),l.$$.update=()=>{l.$$.dirty&2&&n(3,t=p(o)),l.$$.dirty&3&&n(6,s=o.isLoading||o.error?[]:u(Object.entries(o.data[r]),o.data.resolutions)),l.$$.dirty&66&&n(2,i=s.map(f=>vt(f,o.data.resolutions)))},[r,o,i,t,a,C,s]}class kt extends Y{constructor(e){super();x(this,e,$t,ht,ee,{})}}function Ct(l){let e,n;return e=new kt({}),{c(){B(e.$$.fragment)},m(t,s){F(e,t,s),n=!0},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function wt(l){let e,n;return e=new Je({props:{client:l[0],$$slots:{default:[Ct]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment)},m(t,s){F(e,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function yt(l){return[new We]}class Mt extends Y{constructor(e){super();x(this,e,yt,wt,ee,{})}}new Mt({target:document.getElementById("app")});
