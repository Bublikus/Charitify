import{z as e,s as t,S as s,i as r,e as n,v as o,c as a,d as c,f as l,h as i,V as u,j as p,y as f,q as h,C as m,D as d,E as g,F as $,G as v,g as y,a as E,t as b,b as S,H as _,Q as w,R as P,T as R,I as x,A as C,N as L,U as j,n as A,k as O,l as U}from"./index.dc41c84f.js";import{H as q}from"./index.b55199bc.js";const N=[];function k(s,r=e){let n;const o=[];function a(e){if(t(s,e)&&(s=e,n)){const e=!N.length;for(let e=0;e<o.length;e+=1){const t=o[e];t[1](),N.push(t,s)}if(e){for(let e=0;e<N.length;e+=2)N[e][0](N[e+1]);N.length=0}}}return{set:a,update:function(e){a(e(s))},subscribe:function(t,c=e){const l=[t,c];return o.push(l),1===o.length&&(n=r(a)||e),t(s),()=>{const e=o.indexOf(l);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}const D={},H=()=>({});function I(t){let s,r,h,m,d,g,$,v,y,E;return{c(){s=n("section"),r=o("svg"),h=o("symbol"),m=o("path"),d=o("symbol"),g=o("g"),$=o("path"),v=o("path"),y=o("path"),E=o("path"),this.h()},l(e){s=a(e,"SECTION",{});var t=c(s);r=a(t,"svg",{style:!0},1);var n=c(r);h=a(n,"symbol",{id:!0,class:!0,viewBox:!0},1);var o=c(h);m=a(o,"path",{stroke:!0,d:!0},1),c(m).forEach(l),o.forEach(l),d=a(n,"symbol",{id:!0,viewBox:!0},1);var i=c(d);g=a(i,"g",{transform:!0},1);var u=c(g);$=a(u,"path",{d:!0},1),c($).forEach(l),v=a(u,"path",{d:!0},1),c(v).forEach(l),y=a(u,"path",{d:!0},1),c(y).forEach(l),E=a(u,"path",{d:!0},1),c(E).forEach(l),u.forEach(l),i.forEach(l),n.forEach(l),t.forEach(l),this.h()},h(){i(m,"stroke","none"),i(m,"d","M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2\n\tc6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"),i(h,"id","ico-heart-filled"),i(h,"class","ico-heart-filled"),i(h,"viewBox","0 0 32 29.6"),i($,"d","M7280 10683 c122 -106 456 -448 564 -578 826 -994 1265 -2198 1266 -3465 0 -1147 -384 -2295 -1075 -3215 -295 -393 -683 -779 -1075 -1073 -800 -599 -1791 -976 -2760 -1052 -80 -6 -167 -14 -193 -18 l-49 -7 114 -91 c1044 -834 2358 -1254 3671 -1173 1734 106 3304 1033 4227 2494 347 549 599 1177 724 1805 76 381 99 618 100 1040 1 363 -7 488 -49 780 -186 1284 -817 2442 -1795 3295 -973 850 -2226 1315 -3535 1315 l-200 -1 65 -56z"),i(v,"d","M4371 8892 c-62 -116 -98 -172 -109 -172 -39 -1 -354 -38 -358 -43 -3 -3 53 -66 125 -141 72 -75 131 -139 131 -143 -1 -5 -18 -90 -39 -190 -21 -101 -37 -183 -35 -183 3 0 79 36 171 80 91 44 171 80 177 80 6 0 84 -43 174 -94 89 -52 162 -88 162 -82 0 7 -11 93 -25 192 -14 98 -25 180 -25 181 0 1 64 59 141 129 119 108 139 129 123 136 -11 4 -95 21 -188 38 -93 16 -170 31 -171 32 -1 2 -33 71 -70 153 -37 83 -73 161 -80 174 -12 23 -17 15 -104 -147z"),i(y,"d","M610 8054 c-74 -102 -137 -190 -140 -194 -3 -5 -107 24 -230 64 -124 40 -227 72 -229 70 -2 -2 56 -85 128 -184 73 -100 135 -188 138 -195 3 -8 -52 -92 -124 -192 -71 -98 -133 -184 -138 -192 -9 -16 -23 -20 237 65 109 35 202 64 206 64 5 0 71 -86 148 -192 l139 -192 3 241 2 240 225 73 c123 41 222 76 219 79 -3 3 -103 38 -222 76 l-217 71 -5 242 -5 242 -135 -186z"),i(E,"d","M4415 6023 c-126 -157 -233 -290 -237 -296 -6 -10 -94 21 -568 202 -85 32 -156 57 -158 56 -1 -1 25 -45 59 -96 77 -116 342 -520 352 -536 4 -7 -90 -132 -233 -309 -131 -164 -238 -299 -237 -301 2 -1 168 43 371 99 222 60 371 97 375 91 160 -247 415 -632 417 -631 1 2 10 174 20 383 9 209 18 381 18 382 1 1 161 45 356 98 195 54 361 100 368 104 8 5 -47 30 -140 65 -84 32 -243 92 -353 134 -110 41 -202 77 -204 78 -2 2 4 167 14 366 9 200 16 371 14 380 -3 11 -86 -86 -234 -269z"),i(g,"transform","translate(0.000000,1074.000000) scale(0.100000,-0.100000)"),i(d,"id","ico-moon"),i(d,"viewBox","0 0 1280.000000 1074.000000"),u(r,"display","none")},m(e,t){p(e,s,t),f(s,r),f(r,h),f(h,m),f(r,d),f(d,g),f(g,$),f(g,v),f(g,y),f(g,E)},p:e,i:e,o:e,d(e){e&&l(s)}}}class B extends s{constructor(e){super(),r(this,e,null,I,t,{})}}function z(e){let t,s,r,o;const u=new q({props:{segment:e[0]}}),f=new B({}),w=e[2].default,P=h(w,e,e[1],null);return{c(){m(u.$$.fragment),t=d(),m(f.$$.fragment),s=d(),r=n("main"),P&&P.c(),this.h()},l(e){g(u.$$.fragment,e),t=$(e),g(f.$$.fragment,e),s=$(e),r=a(e,"MAIN",{id:!0});var n=c(r);P&&P.l(n),n.forEach(l),this.h()},h(){i(r,"id","main")},m(e,n){v(u,e,n),p(e,t,n),v(f,e,n),p(e,s,n),p(e,r,n),P&&P.m(r,null),o=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),u.$set(s),P&&P.p&&2&t&&P.p(y(w,e,e[1],null),E(w,e[1],t,null))},i(e){o||(b(u.$$.fragment,e),b(f.$$.fragment,e),b(P,e),o=!0)},o(e){S(u.$$.fragment,e),S(f.$$.fragment,e),S(P,e),o=!1},d(e){_(u,e),e&&l(t),_(f,e),e&&l(s),e&&l(r),P&&P.d(e)}}}function M(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,o=e.$$scope)},[r,o,n]}class T extends s{constructor(e){super(),r(this,e,M,z,t,{segment:0})}}function J(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=w(r)},l(e){t=a(e,"PRE",{});var n=c(t);s=P(n,r),n.forEach(l)},m(e,r){p(e,t,r),f(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&R(s,r)},d(e){e&&l(t)}}}function V(t){let s,r,o,u,h,m,g,v,y,E=t[1].message+"";document.title=s=t[0];let b=t[2]&&t[1].stack&&J(t);return{c(){r=d(),o=n("h1"),u=w(t[0]),h=d(),m=n("p"),g=w(E),v=d(),b&&b.c(),y=x(),this.h()},l(e){r=$(e),o=a(e,"H1",{class:!0});var s=c(o);u=P(s,t[0]),s.forEach(l),h=$(e),m=a(e,"P",{class:!0});var n=c(m);g=P(n,E),n.forEach(l),v=$(e),b&&b.l(e),y=x(),this.h()},h(){i(o,"class","svelte-8od9u6"),i(m,"class","svelte-8od9u6")},m(e,t){p(e,r,t),p(e,o,t),f(o,u),p(e,h,t),p(e,m,t),f(m,g),p(e,v,t),b&&b.m(e,t),p(e,y,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&R(u,e[0]),2&t&&E!==(E=e[1].message+"")&&R(g,E),e[2]&&e[1].stack?b?b.p(e,t):(b=J(e),b.c(),b.m(y.parentNode,y)):b&&(b.d(1),b=null)},i:e,o:e,d(e){e&&l(r),e&&l(o),e&&l(h),e&&l(m),e&&l(v),b&&b.d(e),e&&l(y)}}}function K(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)},[r,n,!1]}class G extends s{constructor(e){super(),r(this,e,K,V,t,{status:0,error:1})}}function F(e){let t,s;const r=[e[4].props];var n=e[4].component;function o(e){let t={};for(let e=0;e<r.length;e+=1)t=C(t,r[e]);return{props:t}}if(n)var a=new n(o());return{c(){a&&m(a.$$.fragment),t=x()},l(e){a&&g(a.$$.fragment,e),t=x()},m(e,r){a&&v(a,e,r),p(e,t,r),s=!0},p(e,s){const c=16&s?L(r,[j(e[4].props)]):{};if(n!==(n=e[4].component)){if(a){O();const e=a;S(e.$$.fragment,1,0,()=>{_(e,1)}),U()}n?(a=new n(o()),m(a.$$.fragment),b(a.$$.fragment,1),v(a,t.parentNode,t)):a=null}else n&&a.$set(c)},i(e){s||(a&&b(a.$$.fragment,e),s=!0)},o(e){a&&S(a.$$.fragment,e),s=!1},d(e){e&&l(t),a&&_(a,e)}}}function Q(e){let t;const s=new G({props:{error:e[0],status:e[1]}});return{c(){m(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,r){v(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(b(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){_(s,e)}}}function W(e){let t,s,r,n;const o=[Q,F],a=[];function c(e,t){return e[0]?0:1}return t=c(e),s=a[t]=o[t](e),{c(){s.c(),r=x()},l(e){s.l(e),r=x()},m(e,s){a[t].m(e,s),p(e,r,s),n=!0},p(e,n){let l=t;t=c(e),t===l?a[t].p(e,n):(O(),S(a[l],1,1,()=>{a[l]=null}),U(),s=a[t],s||(s=a[t]=o[t](e),s.c()),b(s,1),s.m(r.parentNode,r))},i(e){n||(b(s),n=!0)},o(e){S(s),n=!1},d(e){a[t].d(e),e&&l(r)}}}function X(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[W]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=C(r,s[e]);const n=new T({props:r});return{c(){m(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,s){v(n,e,s),t=!0},p(e,[t]){const r=12&t?L(s,[4&t&&{segment:e[2][0]},8&t&&j(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(b(n.$$.fragment,e),t=!0)},o(e){S(n.$$.fragment,e),t=!1},d(e){_(n,e)}}}function Y(e,t,s){let{stores:r}=t,{error:n}=t,{status:o}=t,{segments:a}=t,{level0:c}=t,{level1:l=null}=t;return A(D,r),e.$set=e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,o=e.status),"segments"in e&&s(2,a=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,l=e.level1)},[n,o,a,c,l,r]}class Z extends s{constructor(e){super(),r(this,e,Y,X,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const ee=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],te=[{js:()=>import("./index.168bad9f.js"),css:["lists.svelte.168bad9f.css","lists.svelte.b55199bc.css"]},{js:()=>import("./charity.8438c672.js"),css:["charity.8438c672.css","lists.svelte.b55199bc.css"]},{js:()=>import("./index.4dc3fa0f.js"),css:["lists.svelte.4dc3fa0f.css"]},{js:()=>import("./[slug].ff08d407.js"),css:["[slug].ff08d407.css"]},{js:()=>import("./list.754706e8.js"),css:["organizations.svelte.754706e8.css","lists.svelte.b55199bc.css"]},{js:()=>import("./map.ed7e3b86.js"),css:["lists.svelte.b55199bc.css"]}],se=(re=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/charity\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:re(e[1])})}]},{pattern:/^\/list\/?$/,parts:[{i:4}]},{pattern:/^\/map\/?$/,parts:[{i:5}]}]);var re;const ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let oe,ae,ce,le=!1,ie=[],ue="{}";const pe={page:k({}),preloading:k(null),session:k(ne&&ne.session)};let fe,he;pe.session.subscribe(async e=>{if(fe=e,!le)return;he=!0;const t=be(new URL(location.href)),s=ae={},{redirect:r,props:n,branch:o}=await Pe(t);s===ae&&await we(r,o,n,t.page)});let me,de=null;let ge,$e=1;const ve="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ye={};function Ee(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function be(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ne.baseUrl))return null;let t=e.pathname.slice(ne.baseUrl.length);if(""===t&&(t="/"),!ee.some(e=>e.test(t)))for(let s=0;s<se.length;s+=1){const r=se[s],n=r.pattern.exec(t);if(n){const s=Ee(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(n):{},c={host:location.host,path:t,query:s,params:a};return{href:e.href,route:r,match:n,page:c}}}}function Se(){return{x:pageXOffset,y:pageYOffset}}async function _e(e,t,s,r){if(t)ge=t;else{const e=Se();ye[ge]=e,t=ge=++$e,ye[ge]=s?e:{x:0,y:0}}ge=t,oe&&pe.preloading.set(!0);const n=de&&de.href===e.href?de.promise:Pe(e);de=null;const o=ae={},{redirect:a,props:c,branch:l}=await n;if(o===ae&&(await we(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ye[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ye[ge]=e,e&&scrollTo(e.x,e.y)}}async function we(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=be(new URL(e,document.baseURI));return s?(ve[t.replaceState?"replaceState":"pushState"]({id:ge},"",e),_e(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(pe.page.set(r),pe.preloading.set(!1),oe)oe.$set(s);else{s.stores={page:{subscribe:pe.page.subscribe},preloading:{subscribe:pe.preloading.subscribe},session:pe.session},s.level0={props:await ce};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)xe(e.nextSibling);xe(e),xe(t)}oe=new Z({target:me,props:s,hydrate:!0})}ie=t,ue=JSON.stringify(r.query),le=!0,he=!1}async function Pe(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;ce||(ce=ne.preloaded[0]||H.call(a,{host:s.host,path:s.path,query:s.query,params:{}},fe));let l=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const p=r[c];if(function(e,t,s,r){if(r!==ue)return!0;const n=ie[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(c,p,i,n)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:p};const f=l++;if(!he&&!u&&ie[c]&&ie[c].part===t.i)return ie[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Re);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(te[t.i]);let d;return d=le||!ne.preloaded[c+1]?m?await m.call(a,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},fe):{}:ne.preloaded[c+1],o[`level${f}`]={component:h,props:d,segment:p,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:n,props:o,branch:c}}function Re(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function xe(e){e.parentNode.removeChild(e)}function Ce(e){const t=be(new URL(e,document.baseURI));if(t)return de&&e===de.href||function(e,t){de={href:e,promise:t}}(e,Pe(t)),de.promise}let Le;function je(e){clearTimeout(Le),Le=setTimeout(()=>{Ae(e)},20)}function Ae(e){const t=Ue(e.target);t&&"prefetch"===t.rel&&Ce(t.href)}function Oe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ue(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const o=be(n);if(o){_e(o,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ve.pushState({id:ge},"",n.href)}}function Ue(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function qe(e){if(ye[ge]=Se(),e.state){const t=be(new URL(location.href));t?_e(t,e.state.id):location.href=location.href}else $e=$e+1,function(e){ge=e}($e),ve.replaceState({id:ge},"",location.href)}var Ne;Ne={target:document.querySelector("#sapper")},"scrollRestoration"in ve&&(ve.scrollRestoration="manual"),function(e){me=e}(Ne.target),addEventListener("click",Oe),addEventListener("popstate",qe),addEventListener("touchstart",Ae),addEventListener("mousemove",je),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ve.replaceState({id:$e},"",t);const s=new URL(location.href);if(ne.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:o,status:a,error:c}=ne;ce||(ce=o&&o[0]),we(null,[],{error:c,status:a,session:n,level0:{props:ce},level1:{props:{status:a,error:c},component:G},segments:o},{host:t,path:s,query:Ee(r),params:{}})}();const r=be(s);return r?_e(r,$e,!0,e):void 0});
