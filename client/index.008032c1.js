import{S as t,i as n,s as a,B as e,a3 as o,c as s,d as l,q as i,f as r,g as c,k as f,n as $,o as g,u as m,v as u,w as h,J as p,a4 as d,a2 as w,$ as y,a0 as x,V as v,a5 as z,a6 as B,a7 as b}from"./client.61366f48.js";function k(t,n,a){const e=t.slice();return e[3]=n[a],e}function M(t){let n;const a=new z({props:{lat:t[3].location.lat,lng:t[3].location.lng}});return a.$on("click",(function(){B(C.bind(null,t[3]))&&C.bind(null,t[3]).apply(this,arguments)})),{c(){l(a.$$.fragment)},l(t){f(a.$$.fragment,t)},m(t,e){g(a,t,e),n=!0},p(n,e){t=n;const o={};1&e&&(o.lat=t[3].location.lat),1&e&&(o.lng=t[3].location.lng),a.$set(o)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){u(a.$$.fragment,t),n=!1},d(t){h(a,t)}}}function j(t){let n,a,e=t[0],o=[];for(let n=0;n<e.length;n+=1)o[n]=M(k(t,e,n));const s=t=>u(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=d()},l(t){for(let n=0;n<o.length;n+=1)o[n].l(t);n=d()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);$(t,n,e),a=!0},p(t,a){if(1&a){let l;for(e=t[0],l=0;l<e.length;l+=1){const s=k(t,e,l);o[l]?(o[l].p(s,a),m(o[l],1)):(o[l]=M(s),o[l].c(),m(o[l],1),o[l].m(n.parentNode,n))}for(w(),l=e.length;l<o.length;l+=1)s(l);y()}},i(t){if(!a){for(let t=0;t<e.length;t+=1)m(o[t]);a=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)u(o[t]);a=!1},d(t){x(o,t),t&&r(n)}}}function q(t){let n,a,p;const d=new e({props:{size:"var(--header-height)"}}),w=new o({props:{$$slots:{default:[j]},$$scope:{ctx:t}}});return w.$on("ready",t[1]),{c(){n=s(),l(d.$$.fragment),a=s(),l(w.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-1vy6te4"]',document.head).forEach(r),n=c(t),f(d.$$.fragment,t),a=c(t),f(w.$$.fragment,t),this.h()},h(){document.title="Charitify - Map of organizations."},m(t,e){$(t,n,e),g(d,t,e),$(t,a,e),g(w,t,e),p=!0},p(t,[n]){const a={};65&n&&(a.$$scope={dirty:n,ctx:t}),w.$set(a)},i(t){p||(m(d.$$.fragment,t),m(w.$$.fragment,t),p=!0)},o(t){u(d.$$.fragment,t),u(w.$$.fragment,t),p=!1},d(t){t&&r(n),h(d,t),t&&r(a),h(w,t)}}}async function C(t){b(`organizations/${t.id}`)}function E(t,n,a){const{page:e}=p();let o=[];return[o,async function({detail:t}){await new Promise(t=>setTimeout(t,2e3)),a(0,o=await v.getOrganizations()),console.log(o);const n=(t,n)=>Math[t](...o.map(t=>t.location[n])),e=[[n("min","lng")+-2,n("min","lat")+-2],[n("max","lng")- -2,n("max","lat")- -2]];t.fitBounds(e)}]}export default class extends t{constructor(t){super(),n(this,t,E,q,a,{})}}
