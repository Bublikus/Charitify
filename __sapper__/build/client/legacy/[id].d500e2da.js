import{_ as n,a as t,b as a,c as o,i as r,s as i,d as e,S as c,ab as f,g as s,j as u,q as l,k as p,l as g,o as h,u as m,w as $,M as d,y as v,z as y,A as x,N as w,O as z,ac as b,aa as k,a7 as M,a8 as j,X as B,Y as N,Z as O,ad as q,ae as A,af as C,a5 as E}from"./client.5ea28cda.js";function S(n,t,a){var o=n.slice();return o[6]=t[a],o}function T(n){var t,a=new q({props:{lat:n[6].location.lat,lng:n[6].location.lng}});return a.$on("click",(function(){A(Z.bind(null,n[6]))&&Z.bind(null,n[6]).apply(this,arguments)})),{c:function(){u(a.$$.fragment)},l:function(n){h(a.$$.fragment,n)},m:function(n,o){$(a,n,o),t=!0},p:function(t,o){n=t;var r={};1&o&&(r.lat=n[6].location.lat),1&o&&(r.lng=n[6].location.lng),a.$set(r)},i:function(n){t||(v(a.$$.fragment,n),t=!0)},o:function(n){y(a.$$.fragment,n),t=!1},d:function(n){x(a,n)}}}function X(n){for(var t,a,o=n[0],r=[],i=0;i<o.length;i+=1)r[i]=T(S(n,o,i));var e=function(n){return y(r[n],1,1,(function(){r[n]=null}))};return{c:function(){for(var n=0;n<r.length;n+=1)r[n].c();t=b()},l:function(n){for(var a=0;a<r.length;a+=1)r[a].l(n);t=b()},m:function(n,o){for(var i=0;i<r.length;i+=1)r[i].m(n,o);m(n,t,o),a=!0},p:function(n,a){if(1&a){var i;for(o=n[0],i=0;i<o.length;i+=1){var c=S(n,o,i);r[i]?(r[i].p(c,a),v(r[i],1)):(r[i]=T(c),r[i].c(),v(r[i],1),r[i].m(t.parentNode,t))}for(k(),i=o.length;i<r.length;i+=1)e(i);M()}},i:function(n){if(!a){for(var t=0;t<o.length;t+=1)v(r[t]);a=!0}},o:function(n){r=r.filter(Boolean);for(var t=0;t<r.length;t+=1)y(r[t]);a=!1},d:function(n){j(r,n),n&&p(t)}}}function Y(n){var t,a,o=new f({props:{center:n[2],$$slots:{default:[X]},$$scope:{ctx:n}}});return o.$on("ready",n[3]),{c:function(){t=s(),u(o.$$.fragment),this.h()},l:function(n){l('[data-svelte="svelte-1vy6te4"]',document.head).forEach(p),t=g(n),h(o.$$.fragment,n),this.h()},h:function(){document.title="Charitify - Map of organizations."},m:function(n,r){m(n,t,r),$(o,n,r),a=!0},p:function(n,t){var a=d(t,1)[0],r={};513&a&&(r.$$scope={dirty:a,ctx:n}),o.$set(r)},i:function(n){a||(v(o.$$.fragment,n),a=!0)},o:function(n){y(o.$$.fragment,n),a=!1},d:function(n){n&&p(t),x(o,n)}}}function Z(n){return _.apply(this,arguments)}function _(){return(_=B(N.mark((function n(t){return N.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C("organizations/".concat(t.id));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function D(n,t,a){var o,r=w().page;z(n,r,(function(n){return a(4,o=n)}));var i=o.params.id,e=[];function c(){return(c=B(N.mark((function n(t){var o,r,c,f;return N.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.detail,n.t0=a,n.next=4,O.getOrganizations();case 4:n.t1=e=n.sent,(0,n.t0)(0,n.t1),console.log(e),-2,c=[[(r=function(n,t){return Math[n].apply(Math,E(e.map((function(n){return n.location[t]}))))})("min","lng")+-2,r("min","lat")+-2],[r("max","lng")- -2,r("max","lat")- -2]],(f=e.filter((function(n){return n.id===i}))[0])?o.flyTo({center:[f.location.lng,f.location.lat],zoom:10}):o.fitBounds(c);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return[e,r,void 0,function(n){return c.apply(this,arguments)}]}var F=function(f){function s(n){var c;return t(this,s),c=a(this,o(s).call(this)),r(e(c),n,D,Y,i,{}),c}return n(s,c),s}();export default F;
