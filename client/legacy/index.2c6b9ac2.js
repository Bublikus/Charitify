import{_ as n,a as t,b as a,c as r,i as o,s as i,d as e,S as c,a3 as s,g as u,j as f,q as l,k as p,l as g,o as h,u as $,w as m,x as v,y as d,z as y,A as x,J as w,a4 as k,a2 as z,Z as b,$ as M,N as j,O as B,Q as N,a5 as O,a6 as q,a7 as A,W as C}from"./client.a5612c8f.js";function E(n,t,a){var r=n.slice();return r[3]=t[a],r}function J(n){var t,a=new O({props:{lat:n[3].location.lat,lng:n[3].location.lng}});return a.$on("click",(function(){q(S.bind(null,n[3]))&&S.bind(null,n[3]).apply(this,arguments)})),{c:function(){f(a.$$.fragment)},l:function(n){h(a.$$.fragment,n)},m:function(n,r){m(a,n,r),t=!0},p:function(t,r){n=t;var o={};1&r&&(o.lat=n[3].location.lat),1&r&&(o.lng=n[3].location.lng),a.$set(o)},i:function(n){t||(d(a.$$.fragment,n),t=!0)},o:function(n){y(a.$$.fragment,n),t=!1},d:function(n){x(a,n)}}}function P(n){for(var t,a,r=n[0],o=[],i=0;i<r.length;i+=1)o[i]=J(E(n,r,i));var e=function(n){return y(o[n],1,1,(function(){o[n]=null}))};return{c:function(){for(var n=0;n<o.length;n+=1)o[n].c();t=k()},l:function(n){for(var a=0;a<o.length;a+=1)o[a].l(n);t=k()},m:function(n,r){for(var i=0;i<o.length;i+=1)o[i].m(n,r);$(n,t,r),a=!0},p:function(n,a){if(1&a){var i;for(r=n[0],i=0;i<r.length;i+=1){var c=E(n,r,i);o[i]?(o[i].p(c,a),d(o[i],1)):(o[i]=J(c),o[i].c(),d(o[i],1),o[i].m(t.parentNode,t))}for(z(),i=r.length;i<o.length;i+=1)e(i);b()}},i:function(n){if(!a){for(var t=0;t<r.length;t+=1)d(o[t]);a=!0}},o:function(n){o=o.filter(Boolean);for(var t=0;t<o.length;t+=1)y(o[t]);a=!1},d:function(n){M(o,n),n&&p(t)}}}function Q(n){var t,a,r=new s({props:{$$slots:{default:[P]},$$scope:{ctx:n}}});return r.$on("ready",n[1]),{c:function(){t=u(),f(r.$$.fragment),this.h()},l:function(n){l('[data-svelte="svelte-1vy6te4"]',document.head).forEach(p),t=g(n),h(r.$$.fragment,n),this.h()},h:function(){document.title="Charitify - Map of organizations."},m:function(n,o){$(n,t,o),m(r,n,o),a=!0},p:function(n,t){var a=v(t,1)[0],o={};65&a&&(o.$$scope={dirty:a,ctx:n}),r.$set(o)},i:function(n){a||(d(r.$$.fragment,n),a=!0)},o:function(n){y(r.$$.fragment,n),a=!1},d:function(n){n&&p(t),x(r,n)}}}function S(n){return T.apply(this,arguments)}function T(){return(T=j(B.mark((function n(t){return B.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:A("organizations/".concat(t.id));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function W(n,t,a){w().page;var r=[];function o(){return(o=j(B.mark((function n(t){var o,i,e;return B.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.detail,n.next=3,new Promise((function(n){return setTimeout(n,2e3)}));case 3:return n.t0=a,n.next=6,N.getOrganizations();case 6:n.t1=r=n.sent,(0,n.t0)(0,n.t1),console.log(r),-2,e=[[(i=function(n,t){return Math[n].apply(Math,C(r.map((function(n){return n.location[t]}))))})("min","lng")+-2,i("min","lat")+-2],[i("max","lng")- -2,i("max","lat")- -2]],o.fitBounds(e);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return[r,function(n){return o.apply(this,arguments)}]}var Z=function(s){function u(n){var c;return t(this,u),c=a(this,r(u).call(this)),o(e(c),n,W,Q,i,{}),c}return n(u,c),u}();export default Z;
