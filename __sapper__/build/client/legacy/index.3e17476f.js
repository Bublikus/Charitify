import{_ as n,a as t,b as a,c as o,i as r,s as e,d as i,S as c,X as f,g as s,j as u,q as l,k as g,l as $,o as p,u as h,v as m,x as v,y as d,z as x,A as y,J as w,K as z,Y as M,Z as j,$ as k,a0 as B,N,O,Q as b,a1 as q,W as A}from"./client.821e762f.js";function C(n,t,a){var o=n.slice();return o[4]=t[a],o}function E(n){var t,a=new q({props:{lat:n[4].location.lat,lng:n[4].location.lng}});return{c:function(){u(a.$$.fragment)},l:function(n){p(a.$$.fragment,n)},m:function(n,o){m(a,n,o),t=!0},p:function(n,t){var o={};1&t&&(o.lat=n[4].location.lat),1&t&&(o.lng=n[4].location.lng),a.$set(o)},i:function(n){t||(d(a.$$.fragment,n),t=!0)},o:function(n){x(a.$$.fragment,n),t=!1},d:function(n){y(a,n)}}}function J(n){for(var t,a,o=n[0],r=[],e=0;e<o.length;e+=1)r[e]=E(C(n,o,e));var i=function(n){return x(r[n],1,1,(function(){r[n]=null}))};return{c:function(){for(var n=0;n<r.length;n+=1)r[n].c();t=M()},l:function(n){for(var a=0;a<r.length;a+=1)r[a].l(n);t=M()},m:function(n,o){for(var e=0;e<r.length;e+=1)r[e].m(n,o);h(n,t,o),a=!0},p:function(n,a){if(1&a){var e;for(o=n[0],e=0;e<o.length;e+=1){var c=C(n,o,e);r[e]?(r[e].p(c,a),d(r[e],1)):(r[e]=E(c),r[e].c(),d(r[e],1),r[e].m(t.parentNode,t))}for(j(),e=o.length;e<r.length;e+=1)i(e);k()}},i:function(n){if(!a){for(var t=0;t<o.length;t+=1)d(r[t]);a=!0}},o:function(n){r=r.filter(Boolean);for(var t=0;t<r.length;t+=1)x(r[t]);a=!1},d:function(n){B(r,n),n&&g(t)}}}function K(n){var t,a,o=new f({props:{$$slots:{default:[J]},$$scope:{ctx:n}}});return o.$on("ready",n[2]),{c:function(){t=s(),u(o.$$.fragment),this.h()},l:function(n){l('[data-svelte="svelte-1vy6te4"]',document.head).forEach(g),t=$(n),p(o.$$.fragment,n),this.h()},h:function(){document.title="Charitify - Map of organizations."},m:function(n,r){h(n,t,r),m(o,n,r),a=!0},p:function(n,t){var a=v(t,1)[0],r={};129&a&&(r.$$scope={dirty:a,ctx:n}),o.$set(r)},i:function(n){a||(d(o.$$.fragment,n),a=!0)},o:function(n){x(o.$$.fragment,n),a=!1},d:function(n){n&&g(t),y(o,n)}}}function P(n,t,a){var o,r=w().page;z(n,r,(function(n){return a(3,o=n)}));var e=[];function i(){return(i=N(O.mark((function n(t){var o,r,i;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.detail,n.next=3,new Promise((function(n){return setTimeout(n,2e3)}));case 3:return n.t0=a,n.next=6,b.getOrganizations();case 6:n.t1=e=n.sent,(0,n.t0)(0,n.t1),console.log(e),-2,i=[[(r=function(n,t){return Math[n].apply(Math,A(e.map((function(n){return n.location[t]}))))})("min","lng")+-2,r("min","lat")+-2],[r("max","lng")- -2,r("max","lat")- -2]],o.fitBounds(i);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return n.$$.update=function(){8&n.$$.dirty&&console.log(o)},[e,r,function(n){return i.apply(this,arguments)}]}var Q=function(f){function s(n){var c;return t(this,s),c=a(this,o(s).call(this)),r(i(c),n,P,K,e,{}),c}return n(s,c),s}();export default Q;