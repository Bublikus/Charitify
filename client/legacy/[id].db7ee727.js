import{_ as n,a as t,i as a,s as r,b as e,S as o,B as i,al as c,g as f,h as u,q as s,j as l,k as p,n as g,r as h,u as $,G as m,w as v,x as d,y,a5 as x,a6 as w,z,A as R,am as b,a1 as k,a2 as B,a3 as M,a8 as j,a9 as D,aa as S,an as q,ao as A,ap as C,ai as E}from"./client.b15dafde.js";function G(n,t,a){var r=n.slice();return r[6]=t[a],r}function N(n){var t,a=new q({props:{lat:n[6].location.lat,lng:n[6].location.lng}});return a.$on("click",(function(){A(T.bind(null,n[6]))&&T.bind(null,n[6]).apply(this,arguments)})),{c:function(){u(a.$$.fragment)},l:function(n){g(a.$$.fragment,n)},m:function(n,r){$(a,n,r),t=!0},p:function(t,r){n=t;var e={};1&r&&(e.lat=n[6].location.lat),1&r&&(e.lng=n[6].location.lng),a.$set(e)},i:function(n){t||(v(a.$$.fragment,n),t=!0)},o:function(n){d(a.$$.fragment,n),t=!1},d:function(n){y(a,n)}}}function O(n){for(var t,a,r=n[0],e=[],o=0;o<r.length;o+=1)e[o]=N(G(n,r,o));var i=function(n){return d(e[n],1,1,(function(){e[n]=null}))};return{c:function(){for(var n=0;n<e.length;n+=1)e[n].c();t=b()},l:function(n){for(var a=0;a<e.length;a+=1)e[a].l(n);t=b()},m:function(n,r){for(var o=0;o<e.length;o+=1)e[o].m(n,r);h(n,t,r),a=!0},p:function(n,a){if(1&a){var o;for(r=n[0],o=0;o<r.length;o+=1){var c=G(n,r,o);e[o]?(e[o].p(c,a),v(e[o],1)):(e[o]=N(c),e[o].c(),v(e[o],1),e[o].m(t.parentNode,t))}for(k(),o=r.length;o<e.length;o+=1)i(o);B()}},i:function(n){if(!a){for(var t=0;t<r.length;t+=1)v(e[t]);a=!0}},o:function(n){e=e.filter(Boolean);for(var t=0;t<e.length;t+=1)d(e[t]);a=!1},d:function(n){M(e,n),n&&l(t)}}}function P(n){var t,a,r,e=new i({props:{size:"var(--header-height)"}}),o=new c({props:{center:n[2],$$slots:{default:[O]},$$scope:{ctx:n}}});return o.$on("ready",n[3]),{c:function(){t=f(),u(e.$$.fragment),a=f(),u(o.$$.fragment),this.h()},l:function(n){s('[data-svelte="svelte-1vy6te4"]',document.head).forEach(l),t=p(n),g(e.$$.fragment,n),a=p(n),g(o.$$.fragment,n),this.h()},h:function(){document.title="Charitify - Map of organizations."},m:function(n,i){h(n,t,i),$(e,n,i),h(n,a,i),$(o,n,i),r=!0},p:function(n,t){var a=m(t,1)[0],r={};513&a&&(r.$$scope={dirty:a,ctx:n}),o.$set(r)},i:function(n){r||(v(e.$$.fragment,n),v(o.$$.fragment,n),r=!0)},o:function(n){d(e.$$.fragment,n),d(o.$$.fragment,n),r=!1},d:function(n){n&&l(t),y(e,n),n&&l(a),y(o,n)}}}function T(n){return _.apply(this,arguments)}function _(){return(_=j(D.mark((function n(t){return D.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C("organizations/".concat(t.id));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function F(n,t,a){var r,e=x().page;w(n,e,(function(n){return a(4,r=n)}));var o=r.params.id,i=[];function c(){return(c=j(D.mark((function n(t){var r,e,c,f;return D.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.detail,n.t0=a,n.next=4,S.getOrganizations();case 4:n.t1=i=n.sent,(0,n.t0)(0,n.t1),console.log(i),-2,c=[[(e=function(n,t){return Math[n].apply(Math,E(i.map((function(n){return n.location[t]}))))})("min","lng")+-2,e("min","lat")+-2],[e("max","lng")- -2,e("max","lat")- -2]],(f=i.filter((function(n){return n.id===o}))[0])?r.flyTo({center:[f.location.lng,f.location.lat],zoom:10}):r.fitBounds(c);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return[i,e,void 0,function(n){return c.apply(this,arguments)}]}var H=function(i){n(f,o);var c=function(n){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}return function(){var a,r=z(n);if(t()){var e=z(this).constructor;a=Reflect.construct(r,arguments,e)}else a=r.apply(this,arguments);return R(this,a)}}(f);function f(n){var o;return t(this,f),o=c.call(this),a(e(o),n,F,P,r,{}),o}return f}();export default H;
