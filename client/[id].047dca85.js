import{S as t,i as a,s as n,B as e,ae as o,d as l,f as s,q as i,g as r,h as c,l as f,o as g,p as $,u as m,v as h,w as d,a0 as u,a1 as p,I as y,A as v,E as x,a8 as w,a4 as z,af as b,ag as B,ah as E}from"./client.aebaad06.js";function M(t,a,n){const e=t.slice();return e[6]=a[n],e}function j(t){let a;const n=new b({props:{lat:t[6].location.lat,lng:t[6].location.lng}});return n.$on("click",(function(){B(A.bind(null,t[6]))&&A.bind(null,t[6]).apply(this,arguments)})),{c(){s(n.$$.fragment)},l(t){f(n.$$.fragment,t)},m(t,e){$(n,t,e),a=!0},p(a,e){t=a;const o={};1&e&&(o.lat=t[6].location.lat),1&e&&(o.lng=t[6].location.lng),n.$set(o)},i(t){a||(m(n.$$.fragment,t),a=!0)},o(t){h(n.$$.fragment,t),a=!1},d(t){d(n,t)}}}function k(t){let a,n,e=t[0],o=[];for(let a=0;a<e.length;a+=1)o[a]=j(M(t,e,a));const l=t=>h(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();a=y()},l(t){for(let a=0;a<o.length;a+=1)o[a].l(t);a=y()},m(t,e){for(let a=0;a<o.length;a+=1)o[a].m(t,e);g(t,a,e),n=!0},p(t,n){if(1&n){let s;for(e=t[0],s=0;s<e.length;s+=1){const l=M(t,e,s);o[s]?(o[s].p(l,n),m(o[s],1)):(o[s]=j(l),o[s].c(),m(o[s],1),o[s].m(a.parentNode,a))}for(v(),s=e.length;s<o.length;s+=1)l(s);x()}},i(t){if(!n){for(let t=0;t<e.length;t+=1)m(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)h(o[t]);n=!1},d(t){w(o,t),t&&r(a)}}}function q(t){let a,n,u;const p=new e({props:{size:"var(--header-height)"}}),y=new o({props:{center:t[2],$$slots:{default:[k]},$$scope:{ctx:t}}});return y.$on("ready",t[3]),{c(){a=l(),s(p.$$.fragment),n=l(),s(y.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-1vy6te4"]',document.head).forEach(r),a=c(t),f(p.$$.fragment,t),n=c(t),f(y.$$.fragment,t),this.h()},h(){document.title="Charitify - Map of organizations."},m(t,e){g(t,a,e),$(p,t,e),g(t,n,e),$(y,t,e),u=!0},p(t,[a]){const n={};513&a&&(n.$$scope={dirty:a,ctx:t}),y.$set(n)},i(t){u||(m(p.$$.fragment,t),m(y.$$.fragment,t),u=!0)},o(t){h(p.$$.fragment,t),h(y.$$.fragment,t),u=!1},d(t){t&&r(a),d(p,t),t&&r(n),d(y,t)}}}async function A(t){E(`organizations/${t.id}`)}function C(t,a,n){let e;const{page:o}=u();p(t,o,t=>n(4,e=t));let l=e.params.id,s=[];return[s,o,void 0,async function({detail:t}){n(0,s=await z.getOrganizations()),console.log(s);const a=(t,a)=>Math[t](...s.map(t=>t.location[a])),e=[[a("min","lng")+-2,a("min","lat")+-2],[a("max","lng")- -2,a("max","lat")- -2]],o=s.filter(t=>t.id===l)[0];o?t.flyTo({center:[o.location.lng,o.location.lat],zoom:10}):t.fitBounds(e)}]}export default class extends t{constructor(t){super(),a(this,t,C,q,n,{})}}
