import{_ as n,a as t,b as a,c as e,i as s,s as r,d as i,S as o,U as c,g as u,j as f,q as $,k as m,l,o as p,u as h,v as g,x as d,y as v,z as x,A as w,M as y,V as b,N as z,O as j,W as k,Q as q}from"./client.821e762f.js";function A(n){var t,a=new b({props:{items:n[0],basePath:"organizations"}});return{c:function(){f(a.$$.fragment)},l:function(n){p(a.$$.fragment,n)},m:function(n,e){g(a,n,e),t=!0},p:function(n,t){var e={};1&t&&(e.items=n[0]),a.$set(e)},i:function(n){t||(v(a.$$.fragment,n),t=!0)},o:function(n){x(a.$$.fragment,n),t=!1},d:function(n){w(a,n)}}}function O(n){var t,a,e=new c({props:{$$slots:{default:[A]},$$scope:{ctx:n}}});return{c:function(){t=u(),f(e.$$.fragment),this.h()},l:function(n){$('[data-svelte="svelte-6bbqlg"]',document.head).forEach(m),t=l(n),p(e.$$.fragment,n),this.h()},h:function(){document.title="Charitify - is the application for helping those in need."},m:function(n,s){h(n,t,s),g(e,n,s),a=!0},p:function(n,t){var a=d(t,1)[0],s={};3&a&&(s.$$scope={dirty:a,ctx:n}),e.$set(s)},i:function(n){a||(v(e.$$.fragment,n),a=!0)},o:function(n){x(e.$$.fragment,n),a=!1},d:function(n){n&&m(t),w(e,n)}}}function P(n,t,a){var e=[];return y(z(j.mark((function n(){var t;return j.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n){return setTimeout(n,1e3)}));case 2:return n.next=4,q.getOrganizations();case 4:t=n.sent,a(0,e=new Array(1).fill(t).reduce((function(n,t){return n.concat.apply(n,k(t))}),[]));case 6:case"end":return n.stop()}}),n)})))),[e]}var C=function(c){function u(n){var o;return t(this,u),o=a(this,e(u).call(this)),s(i(o),n,P,O,r,{}),o}return n(u,o),u}();export default C;