import{_ as n,a as t,i as a,s as r,b as e,S as o,B as i,am as c,g as f,h as u,q as s,j as l,k as p,n as h,r as g,u as $,G as m,w as v,x as d,y,a8 as x,z as w,A as z,an as R,a4 as b,a5 as k,a6 as j,ac as B,ad as M,ae as q,ao as D,ap as P,aq as S,aj as A}from"./client.89bc41f6.js";function C(n,t,a){var r=n.slice();return r[3]=t[a],r}function E(n){var t,a=new D({props:{lat:n[3].location.lat,lng:n[3].location.lng}});return a.$on("click",(function(){P(O.bind(null,n[3]))&&O.bind(null,n[3]).apply(this,arguments)})),{c:function(){u(a.$$.fragment)},l:function(n){h(a.$$.fragment,n)},m:function(n,r){$(a,n,r),t=!0},p:function(t,r){n=t;var e={};1&r&&(e.lat=n[3].location.lat),1&r&&(e.lng=n[3].location.lng),a.$set(e)},i:function(n){t||(v(a.$$.fragment,n),t=!0)},o:function(n){d(a.$$.fragment,n),t=!1},d:function(n){y(a,n)}}}function G(n){for(var t,a,r=n[0],e=[],o=0;o<r.length;o+=1)e[o]=E(C(n,r,o));var i=function(n){return d(e[n],1,1,(function(){e[n]=null}))};return{c:function(){for(var n=0;n<e.length;n+=1)e[n].c();t=R()},l:function(n){for(var a=0;a<e.length;a+=1)e[a].l(n);t=R()},m:function(n,r){for(var o=0;o<e.length;o+=1)e[o].m(n,r);g(n,t,r),a=!0},p:function(n,a){if(1&a){var o;for(r=n[0],o=0;o<r.length;o+=1){var c=C(n,r,o);e[o]?(e[o].p(c,a),v(e[o],1)):(e[o]=E(c),e[o].c(),v(e[o],1),e[o].m(t.parentNode,t))}for(b(),o=r.length;o<e.length;o+=1)i(o);k()}},i:function(n){if(!a){for(var t=0;t<r.length;t+=1)v(e[t]);a=!0}},o:function(n){e=e.filter(Boolean);for(var t=0;t<e.length;t+=1)d(e[t]);a=!1},d:function(n){j(e,n),n&&l(t)}}}function N(n){var t,a,r,e=new i({props:{size:"var(--header-height)"}}),o=new c({props:{$$slots:{default:[G]},$$scope:{ctx:n}}});return o.$on("ready",n[1]),{c:function(){t=f(),u(e.$$.fragment),a=f(),u(o.$$.fragment),this.h()},l:function(n){s('[data-svelte="svelte-1vy6te4"]',document.head).forEach(l),t=p(n),h(e.$$.fragment,n),a=p(n),h(o.$$.fragment,n),this.h()},h:function(){document.title="Charitify - Map of organizations."},m:function(n,i){g(n,t,i),$(e,n,i),g(n,a,i),$(o,n,i),r=!0},p:function(n,t){var a=m(t,1)[0],r={};65&a&&(r.$$scope={dirty:a,ctx:n}),o.$set(r)},i:function(n){r||(v(e.$$.fragment,n),v(o.$$.fragment,n),r=!0)},o:function(n){d(e.$$.fragment,n),d(o.$$.fragment,n),r=!1},d:function(n){n&&l(t),y(e,n),n&&l(a),y(o,n)}}}function O(n){return T.apply(this,arguments)}function T(){return(T=B(M.mark((function n(t){return M.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:S("organizations/".concat(t.id));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n,t,a){x().page;var r=[];function e(){return(e=B(M.mark((function n(t){var e,o,i;return M.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.detail,n.next=3,new Promise((function(n){return setTimeout(n,2e3)}));case 3:return n.t0=a,n.next=6,q.getOrganizations();case 6:n.t1=r=n.sent,(0,n.t0)(0,n.t1),console.log(r),-2,i=[[(o=function(n,t){return Math[n].apply(Math,A(r.map((function(n){return n.location[t]}))))})("min","lng")+-2,o("min","lat")+-2],[o("max","lng")- -2,o("max","lat")- -2]],e.fitBounds(i);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return[r,function(n){return e.apply(this,arguments)}]}var F=function(i){n(f,o);var c=function(n){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}return function(){var a,r=w(n);if(t()){var e=w(this).constructor;a=Reflect.construct(r,arguments,e)}else a=r.apply(this,arguments);return z(this,a)}}(f);function f(n){var o;return t(this,f),o=c.call(this),a(e(o),n,_,N,r,{}),o}return f}();export default F;
