import{S as t,i as n,s as a,B as e,ah as o,f as l,g as s,q as i,h as r,j as c,m as f,p as g,r as $,v as m,w as h,x as d,a8 as p,Z as u,ai as y,a4 as x,a5 as v,a6 as w,ab as z,aj as b,ak as j,al as B}from"./client.9d02e687.js";function k(t,n,a){const e=t.slice();return e[6]=n[a],e}function M(t){let n;const a=new b({props:{lat:t[6].location.lat,lng:t[6].location.lng}});return a.$on("click",(function(){j(E.bind(null,t[6]))&&E.bind(null,t[6]).apply(this,arguments)})),{c(){s(a.$$.fragment)},l(t){f(a.$$.fragment,t)},m(t,e){$(a,t,e),n=!0},p(n,e){t=n;const o={};1&e&&(o.lat=t[6].location.lat),1&e&&(o.lng=t[6].location.lng),a.$set(o)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){h(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function q(t){let n,a,e=t[0],o=[];for(let n=0;n<e.length;n+=1)o[n]=M(k(t,e,n));const l=t=>h(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},l(t){for(let n=0;n<o.length;n+=1)o[n].l(t);n=y()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);g(t,n,e),a=!0},p(t,a){if(1&a){let s;for(e=t[0],s=0;s<e.length;s+=1){const l=k(t,e,s);o[s]?(o[s].p(l,a),m(o[s],1)):(o[s]=M(l),o[s].c(),m(o[s],1),o[s].m(n.parentNode,n))}for(x(),s=e.length;s<o.length;s+=1)l(s);v()}},i(t){if(!a){for(let t=0;t<e.length;t+=1)m(o[t]);a=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)h(o[t]);a=!1},d(t){w(o,t),t&&r(n)}}}function C(t){let n,a,p;const u=new e({props:{size:"var(--header-height)"}}),y=new o({props:{center:t[2],$$slots:{default:[q]},$$scope:{ctx:t}}});return y.$on("ready",t[3]),{c(){n=l(),s(u.$$.fragment),a=l(),s(y.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-1vy6te4"]',document.head).forEach(r),n=c(t),f(u.$$.fragment,t),a=c(t),f(y.$$.fragment,t),this.h()},h(){document.title="Charitify - Map of organizations."},m(t,e){g(t,n,e),$(u,t,e),g(t,a,e),$(y,t,e),p=!0},p(t,[n]){const a={};513&n&&(a.$$scope={dirty:n,ctx:t}),y.$set(a)},i(t){p||(m(u.$$.fragment,t),m(y.$$.fragment,t),p=!0)},o(t){h(u.$$.fragment,t),h(y.$$.fragment,t),p=!1},d(t){t&&r(n),d(u,t),t&&r(a),d(y,t)}}}async function E(t){B(`organizations/${t.id}`)}function N(t,n,a){let e;const{page:o}=p();u(t,o,t=>a(4,e=t));let l=e.params.id,s=[];return[s,o,void 0,async function({detail:t}){a(0,s=await z.getOrganizations()),console.log(s);const n=(t,n)=>Math[t](...s.map(t=>t.location[n])),e=[[n("min","lng")+-2,n("min","lat")+-2],[n("max","lng")- -2,n("max","lat")- -2]],o=s.filter(t=>t.id===l)[0];o?t.flyTo({center:[o.location.lng,o.location.lat],zoom:10}):t.fitBounds(e)}]}export default class extends t{constructor(t){super(),n(this,t,N,C,a,{})}}
