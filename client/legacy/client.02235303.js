import{s as t,q as e,a as n,b as r,c as a,d as s,i as o,e as i,S as c,v as u,g as f,h as l,j as p,k as h,l as m,L as d,n as v,o as g,u as $,O as b,J as y,P as x,K as S,Q as w,y as E,z as _,A as k,B as R,R as P,T as j,M as C,N as L,U as A,D as N,f as O,p as U,V as q,W as I,H as D,I as H,_ as T}from"./index.f308ca7b.js";import{_ as B}from"./slicedToArray.f13a096f.js";import"./_commonjsHelpers.24e35f0d.js";import{_ as J,a as K}from"./asyncToGenerator.48a9936f.js";import{N as V}from"./index.f2dd6718.js";var M=[];function z(n){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=[];function o(e){if(t(n,e)&&(n=e,r)){for(var a=!M.length,o=0;o<s.length;o+=1){var i=s[o];i[1](),M.push(i,n)}if(a){for(var c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}return{set:o,update:function(t){o(t(n))},subscribe:function(t){var i=[t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e];return s.push(i),1===s.length&&(r=a(o)||e),t(n),function(){var t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}var G={},W=function(){return{}};function Q(t){var n,r,a,s;return{c:function(){n=u("section"),r=f("svg"),a=f("symbol"),s=f("path"),this.h()},l:function(t){n=l(t,"SECTION",{});var e=p(n);r=l(e,"svg",{style:!0},1);var o=p(r);a=l(o,"symbol",{id:!0,class:!0,viewBox:!0},1);var i=p(a);s=l(i,"path",{stroke:!0,d:!0},1),p(s).forEach(h),i.forEach(h),o.forEach(h),e.forEach(h),this.h()},h:function(){m(s,"stroke","none"),m(s,"d","M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2\n\tc6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"),m(a,"id","ico-heart-filled"),m(a,"class","ico-heart-filled"),m(a,"viewBox","0 0 32 29.6"),d(r,"display","none")},m:function(t,e){v(t,n,e),g(n,r),g(r,a),g(a,s)},p:e,i:e,o:e,d:function(t){t&&h(n)}}}var X=function(e){function u(e){var n;return r(this,u),n=a(this,s(u).call(this)),o(i(n),e,null,Q,t,{}),n}return n(u,c),u}();function Y(t){var e,n,r,a,s=new V({props:{segment:t[0]}}),o=new X({}),i=t[2].default,c=$(i,t,t[1],null);return{c:function(){b(s.$$.fragment),e=y(),b(o.$$.fragment),n=y(),r=u("main"),c&&c.c(),this.h()},l:function(t){x(s.$$.fragment,t),e=S(t),x(o.$$.fragment,t),n=S(t),r=l(t,"MAIN",{class:!0});var a=p(r);c&&c.l(a),a.forEach(h),this.h()},h:function(){m(r,"class","svelte-7sd4o8")},m:function(t,i){w(s,t,i),v(t,e,i),w(o,t,i),v(t,n,i),v(t,r,i),c&&c.m(r,null),a=!0},p:function(t,e){var n=B(e,1)[0],r={};1&n&&(r.segment=t[0]),s.$set(r),c&&c.p&&2&n&&c.p(E(i,t,t[1],null),_(i,t[1],n,null))},i:function(t){a||(k(s.$$.fragment,t),k(o.$$.fragment,t),k(c,t),a=!0)},o:function(t){R(s.$$.fragment,t),R(o.$$.fragment,t),R(c,t),a=!1},d:function(t){P(s,t),t&&h(e),P(o,t),t&&h(n),t&&h(r),c&&c.d(t)}}}function F(t,e,n){var r=e.segment;j(function(){console.log("init"),window.addEventListener("popstate",function(t){console.log("works hide",t),alert("works hide")})});var a=e.$$slots,s=void 0===a?{}:a,o=e.$$scope;return t.$set=function(t){"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}var Z=function(e){function u(e){var n;return r(this,u),n=a(this,s(u).call(this)),o(i(n),e,F,Y,t,{segment:0}),n}return n(u,c),u}();function tt(t){var e,n,r=t[1].stack+"";return{c:function(){e=u("pre"),n=C(r)},l:function(t){e=l(t,"PRE",{});var a=p(e);n=L(a,r),a.forEach(h)},m:function(t,r){v(t,e,r),g(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&A(n,r)},d:function(t){t&&h(e)}}}function et(t){var n,r,a,s,o,i,c,f,d,$=t[1].message+"";document.title=n=t[0];var b=t[2]&&t[1].stack&&tt(t);return{c:function(){r=y(),a=u("h1"),s=C(t[0]),o=y(),i=u("p"),c=C($),f=y(),b&&b.c(),d=N(),this.h()},l:function(e){r=S(e),a=l(e,"H1",{class:!0});var n=p(a);s=L(n,t[0]),n.forEach(h),o=S(e),i=l(e,"P",{class:!0});var u=p(i);c=L(u,$),u.forEach(h),f=S(e),b&&b.l(e),d=N(),this.h()},h:function(){m(a,"class","svelte-8od9u6"),m(i,"class","svelte-8od9u6")},m:function(t,e){v(t,r,e),v(t,a,e),g(a,s),v(t,o,e),v(t,i,e),g(i,c),v(t,f,e),b&&b.m(t,e),v(t,d,e)},p:function(t,e){var r=B(e,1)[0];1&r&&n!==(n=t[0])&&(document.title=n),1&r&&A(s,t[0]),2&r&&$!==($=t[1].message+"")&&A(c,$),t[2]&&t[1].stack?b?b.p(t,r):((b=tt(t)).c(),b.m(d.parentNode,d)):b&&(b.d(1),b=null)},i:e,o:e,d:function(t){t&&h(r),t&&h(a),t&&h(o),t&&h(i),t&&h(f),b&&b.d(t),t&&h(d)}}}function nt(t,e,n){var r=e.status,a=e.error;return t.$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,a=t.error)},[r,a,!1]}var rt=function(e){function u(e){var n;return r(this,u),n=a(this,s(u).call(this)),o(i(n),e,nt,et,t,{status:0,error:1}),n}return n(u,c),u}();function at(t){var e,n,r=[t[4].props],a=t[4].component;function s(t){for(var e={},n=0;n<r.length;n+=1)e=O(e,r[n]);return{props:e}}if(a)var o=new a(s());return{c:function(){o&&b(o.$$.fragment),e=N()},l:function(t){o&&x(o.$$.fragment,t),e=N()},m:function(t,r){o&&w(o,t,r),v(t,e,r),n=!0},p:function(t,n){var i=16&n?U(r,[q(t[4].props)]):{};if(a!==(a=t[4].component)){if(o){D();var c=o;R(c.$$.fragment,1,0,function(){P(c,1)}),H()}a?(o=new a(s()),b(o.$$.fragment),k(o.$$.fragment,1),w(o,e.parentNode,e)):o=null}else a&&o.$set(i)},i:function(t){n||(o&&k(o.$$.fragment,t),n=!0)},o:function(t){o&&R(o.$$.fragment,t),n=!1},d:function(t){t&&h(e),o&&P(o,t)}}}function st(t){var e,n=new rt({props:{error:t[0],status:t[1]}});return{c:function(){b(n.$$.fragment)},l:function(t){x(n.$$.fragment,t)},m:function(t,r){w(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(k(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){P(n,t)}}}function ot(t){var e,n,r,a,s=[st,at],o=[];function i(t,e){return t[0]?0:1}return e=i(t),n=o[e]=s[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){o[e].m(t,n),v(t,r,n),a=!0},p:function(t,a){var c=e;(e=i(t))===c?o[e].p(t,a):(D(),R(o[c],1,1,function(){o[c]=null}),H(),(n=o[e])||(n=o[e]=s[e](t)).c(),k(n,1),n.m(r.parentNode,r))},i:function(t){a||(k(n),a=!0)},o:function(t){R(n),a=!1},d:function(t){o[e].d(t),t&&h(r)}}}function it(t){for(var e,n=[{segment:t[2][0]},t[3].props],r={$$slots:{default:[ot]},$$scope:{ctx:t}},a=0;a<n.length;a+=1)r=O(r,n[a]);var s=new Z({props:r});return{c:function(){b(s.$$.fragment)},l:function(t){x(s.$$.fragment,t)},m:function(t,n){w(s,t,n),e=!0},p:function(t,e){var r=B(e,1)[0],a=12&r?U(n,[4&r&&{segment:t[2][0]},8&r&&q(t[3].props)]):{};83&r&&(a.$$scope={dirty:r,ctx:t}),s.$set(a)},i:function(t){e||(k(s.$$.fragment,t),e=!0)},o:function(t){R(s.$$.fragment,t),e=!1},d:function(t){P(s,t)}}}function ct(t,e,n){var r=e.stores,a=e.error,s=e.status,o=e.segments,i=e.level0,c=e.level1,u=void 0===c?null:c;return I(G,r),t.$set=function(t){"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,a=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,o=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,u=t.level1)},[a,s,o,i,u,r]}var ut,ft=function(e){function u(e){var n;return r(this,u),n=a(this,s(u).call(this)),o(i(n),e,ct,it,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),n}return n(u,c),u}(),lt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],pt=[{js:function(){return import("./index.2f513930.js")},css:["legacy/index.2f513930.css","legacy/index.f2dd6718.css"]},{js:function(){return import("./about.c0359dd3.js")},css:[]},{js:function(){return import("./index.c313f190.js")},css:["legacy/index.c313f190.css"]},{js:function(){return import("./[slug].6bc17304.js")},css:["legacy/[slug].6bc17304.css"]}],ht=(ut=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:ut(t[1])}}}]}]);function mt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=Nt(new URL(t,document.baseURI));return n?(Ct[e.replaceState?"replaceState":"pushState"]({id:Rt},"",t),Ut(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var dt,vt,gt,$t,bt,yt="undefined"!=typeof __SAPPER__&&__SAPPER__,xt=!1,St=[],wt="{}",Et={page:z({}),preloading:z(null),session:z(yt&&yt.session)};Et.session.subscribe(function(){var t=J(K.mark(function t(e){var n,r,a,s,o,i;return K.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if($t=e,xt){t.next=3;break}return t.abrupt("return");case 3:return bt=!0,n=Nt(new URL(location.href)),r=vt={},t.next=8,Tt(n);case 8:if(a=t.sent,s=a.redirect,o=a.props,i=a.branch,r===vt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,It(s,i,o,n.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var _t,kt=null;var Rt,Pt=1;var jt,Ct="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},Lt={};function At(t){var e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(function(t){var n=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," "))),r=B(n,3),a=r[1],s=r[2],o=void 0===s?"":s;"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===T(e[a])?e[a].push(o):e[a]=o}),e}function Nt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(yt.baseUrl))return null;var e=t.pathname.slice(yt.baseUrl.length);if(""===e&&(e="/"),!lt.some(function(t){return t.test(e)}))for(var n=0;n<ht.length;n+=1){var r=ht[n],a=r.pattern.exec(e);if(a){var s=At(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(a):{},c={host:location.host,path:e,query:s,params:i};return{href:t.href,route:r,match:a,page:c}}}}function Ot(){return{x:pageXOffset,y:pageYOffset}}function Ut(t,e,n,r){return qt.apply(this,arguments)}function qt(){return(qt=J(K.mark(function t(e,n,r,a){var s,o,i,c,u,f,l,p,h;return K.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n?Rt=n:(s=Ot(),Lt[Rt]=s,n=Rt=++Pt,Lt[Rt]=r?s:{x:0,y:0}),Rt=n,dt&&Et.preloading.set(!0),o=kt&&kt.href===e.href?kt.promise:Tt(e),kt=null,i=vt={},t.next=8,o;case 8:if(c=t.sent,u=c.redirect,f=c.props,l=c.branch,i===vt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,It(u,l,f,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=Lt[n],a&&(h=document.getElementById(a.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),Lt[Rt]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function It(t,e,n,r){return Dt.apply(this,arguments)}function Dt(){return(Dt=J(K.mark(function t(e,n,r,a){var s,o;return K.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",mt(e.location,{replaceState:!0}));case 2:if(Et.page.set(a),Et.preloading.set(!1),!dt){t.next=8;break}dt.$set(r),t.next=17;break;case 8:return r.stores={page:{subscribe:Et.page.subscribe},preloading:{subscribe:Et.preloading.subscribe},session:Et.session},t.next=11,gt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},s=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),s&&o){for(;s.nextSibling!==o;)Vt(s.nextSibling);Vt(s),Vt(o)}dt=new ft({target:_t,props:r,hydrate:!0});case 17:St=n,wt=JSON.stringify(a.query),xt=!0,bt=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Ht(t,e,n,r){if(r!==wt)return!0;var a=St[t];return!!a&&(e!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Tt(t){return Bt.apply(this,arguments)}function Bt(){return(Bt=J(K.mark(function t(e){var n,r,a,s,o,i,c,u,f,l,p;return K.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,a=r.path.split("/").filter(Boolean),s=null,o={error:null,status:200,segments:[a[0]]},i={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:function(t,e){o.error="string"==typeof e?new Error(e):e,o.status=t}},gt||(gt=yt.preloaded[0]||W.call(i,{host:r.host,path:r.path,query:r.query,params:{}},$t)),u=1,t.prev=7,f=JSON.stringify(r.query),l=n.pattern.exec(r.path),p=!1,t.next=13,Promise.all(n.parts.map(function(){var t=J(K.mark(function t(n,s){var c,h,m,d,v,g;return K.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a[s],Ht(s,c,l,f)&&(p=!0),o.segments[u]=a[s+1],n){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(h=u++,bt||p||!St[s]||St[s].part!==n.i){t.next=8;break}return t.abrupt("return",St[s]);case 8:return p=!1,t.next=11,Kt(pt[n.i]);case 11:if(m=t.sent,d=m.default,v=m.preload,!xt&&yt.preloaded[s+1]){t.next=25;break}if(!v){t.next=21;break}return t.next=18,v.call(i,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},$t);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=yt.preloaded[s+1];case 26:return t.abrupt("return",o["level".concat(h)]={component:d,props:g,segment:c,match:l,part:n.i});case 27:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 13:c=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),o.error=t.t0,o.status=500,c=[];case 21:return t.abrupt("return",{redirect:s,props:o,branch:c});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Jt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function Kt(t){var e="string"==typeof t.css?[]:t.css.map(Jt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function Vt(t){t.parentNode.removeChild(t)}function Mt(t){var e=Nt(new URL(t,document.baseURI));if(e)return kt&&t===kt.href||function(t,e){kt={href:t,promise:e}}(t,Tt(e)),kt.promise}function zt(t){clearTimeout(jt),jt=setTimeout(function(){Gt(t)},20)}function Gt(t){var e=Qt(t.target);e&&"prefetch"===e.rel&&Mt(e.href)}function Wt(t){if(1===function(t){return null===t.which?t.button:t.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=Qt(t.target);if(e&&e.href){var n="object"===T(e.href)&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&(n?!e.target.baseVal:!e.target)){var a=new URL(r);if(a.pathname!==location.pathname||a.search!==location.search){var s=Nt(a);if(s)Ut(s,null,e.hasAttribute("sapper-noscroll"),a.hash),t.preventDefault(),Ct.pushState({id:Rt},"",a.href)}}}else location.hash||t.preventDefault()}}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Xt(t){if(Lt[Rt]=Ot(),t.state){var e=Nt(new URL(location.href));e?Ut(e,t.state.id):location.href=location.href}else(function(t){Rt=t})(Pt=Pt+1),Ct.replaceState({id:Rt},"",location.href)}!function(t){var e;"scrollRestoration"in Ct&&(Ct.scrollRestoration="manual"),e=t.target,_t=e,addEventListener("click",Wt),addEventListener("popstate",Xt),addEventListener("touchstart",Gt),addEventListener("mousemove",zt),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;Ct.replaceState({id:Pt},"",n);var r,a,s,o,i,c,u,f,l=new URL(location.href);if(yt.error)return r=location,a=r.host,s=r.pathname,o=r.search,i=yt.session,c=yt.preloaded,u=yt.status,f=yt.error,gt||(gt=c&&c[0]),void It(null,[],{error:f,status:u,session:i,level0:{props:gt},level1:{props:{status:u,error:f},component:rt},segments:c},{host:a,path:s,query:At(o),params:{}});var p=Nt(l);return p?Ut(p,Pt,!0,e):void 0})}({target:document.querySelector("#sapper")});
