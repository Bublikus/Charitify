import{_ as n,a as t,b as a,c as o,i as r,s as i,d as e,S as c,X as f,g as s,j as u,q as l,k as g,l as p,o as $,u as h,v as m,x as v,y as d,z as y,A as x,J as w,K as z,Y as M,Z as j,$ as k,a0 as B,N,O,Q as b,a1 as q,W as A}from"./client.821e762f.js";function C(n,t,a){var o=n.slice();return o[6]=t[a],o}function E(n){var t,a=new q({props:{lat:n[6].location.lat,lng:n[6].location.lng}});return{c:function(){u(a.$$.fragment)},l:function(n){$(a.$$.fragment,n)},m:function(n,o){m(a,n,o),t=!0},p:function(n,t){var o={};1&t&&(o.lat=n[6].location.lat),1&t&&(o.lng=n[6].location.lng),a.$set(o)},i:function(n){t||(d(a.$$.fragment,n),t=!0)},o:function(n){y(a.$$.fragment,n),t=!1},d:function(n){x(a,n)}}}function J(n){for(var t,a,o=n[0],r=[],i=0;i<o.length;i+=1)r[i]=E(C(n,o,i));var e=function(n){return y(r[n],1,1,(function(){r[n]=null}))};return{c:function(){for(var n=0;n<r.length;n+=1)r[n].c();t=M()},l:function(n){for(var a=0;a<r.length;a+=1)r[a].l(n);t=M()},m:function(n,o){for(var i=0;i<r.length;i+=1)r[i].m(n,o);h(n,t,o),a=!0},p:function(n,a){if(1&a){var i;for(o=n[0],i=0;i<o.length;i+=1){var c=C(n,o,i);r[i]?(r[i].p(c,a),d(r[i],1)):(r[i]=E(c),r[i].c(),d(r[i],1),r[i].m(t.parentNode,t))}for(j(),i=o.length;i<r.length;i+=1)e(i);k()}},i:function(n){if(!a){for(var t=0;t<o.length;t+=1)d(r[t]);a=!0}},o:function(n){r=r.filter(Boolean);for(var t=0;t<r.length;t+=1)y(r[t]);a=!1},d:function(n){B(r,n),n&&g(t)}}}function K(n){var t,a,o=new f({props:{center:n[2],$$slots:{default:[J]},$$scope:{ctx:n}}});return o.$on("ready",n[3]),{c:function(){t=s(),u(o.$$.fragment),this.h()},l:function(n){l('[data-svelte="svelte-1vy6te4"]',document.head).forEach(g),t=p(n),$(o.$$.fragment,n),this.h()},h:function(){document.title="Charitify - Map of organizations."},m:function(n,r){h(n,t,r),m(o,n,r),a=!0},p:function(n,t){var a=v(t,1)[0],r={};513&a&&(r.$$scope={dirty:a,ctx:n}),o.$set(r)},i:function(n){a||(d(o.$$.fragment,n),a=!0)},o:function(n){y(o.$$.fragment,n),a=!1},d:function(n){n&&g(t),x(o,n)}}}function Q(n,t,a){var o,r=w().page;z(n,r,(function(n){return a(4,o=n)}));var i=o.params.id,e=[];function c(){return(c=N(O.mark((function n(t){var o,r,c,f;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.detail,n.t0=a,n.next=4,b.getOrganizations();case 4:n.t1=e=n.sent,(0,n.t0)(0,n.t1),console.log(e),-2,c=[[(r=function(n,t){return Math[n].apply(Math,A(e.map((function(n){return n.location[t]}))))})("min","lng")+-2,r("min","lat")+-2],[r("max","lng")- -2,r("max","lat")- -2]],(f=e.filter((function(n){return n.id===i}))[0])?o.flyTo({center:[f.location.lng,f.location.lat],zoom:10}):o.fitBounds(c);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return[e,r,void 0,function(n){return c.apply(this,arguments)}]}var S=function(f){function s(n){var c;return t(this,s),c=a(this,o(s).call(this)),r(e(c),n,Q,K,i,{}),c}return n(s,c),s}();export default S;