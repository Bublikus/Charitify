import{S as t,i as n,s as a,B as e,ab as o,d as l,f as s,q as i,g as r,h as c,l as f,o as g,p as $,u as m,v as d,w as h,_ as u,$ as p,ac as y,W as v,X as x,Y as w,a2 as z,ad as b,ae as B,af as M}from"./client.a11289ab.js";function j(t,n,a){const e=t.slice();return e[6]=n[a],e}function k(t){let n;const a=new b({props:{lat:t[6].location.lat,lng:t[6].location.lng}});return a.$on("click",(function(){B(E.bind(null,t[6]))&&E.bind(null,t[6]).apply(this,arguments)})),{c(){s(a.$$.fragment)},l(t){f(a.$$.fragment,t)},m(t,e){$(a,t,e),n=!0},p(n,e){t=n;const o={};1&e&&(o.lat=t[6].location.lat),1&e&&(o.lng=t[6].location.lng),a.$set(o)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){d(a.$$.fragment,t),n=!1},d(t){h(a,t)}}}function q(t){let n,a,e=t[0],o=[];for(let n=0;n<e.length;n+=1)o[n]=k(j(t,e,n));const l=t=>d(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=y()},l(t){for(let n=0;n<o.length;n+=1)o[n].l(t);n=y()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);g(t,n,e),a=!0},p(t,a){if(1&a){let s;for(e=t[0],s=0;s<e.length;s+=1){const l=j(t,e,s);o[s]?(o[s].p(l,a),m(o[s],1)):(o[s]=k(l),o[s].c(),m(o[s],1),o[s].m(n.parentNode,n))}for(v(),s=e.length;s<o.length;s+=1)l(s);x()}},i(t){if(!a){for(let t=0;t<e.length;t+=1)m(o[t]);a=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)d(o[t]);a=!1},d(t){w(o,t),t&&r(n)}}}function C(t){let n,a,u;const p=new e({props:{size:"var(--header-height)"}}),y=new o({props:{center:t[2],$$slots:{default:[q]},$$scope:{ctx:t}}});return y.$on("ready",t[3]),{c(){n=l(),s(p.$$.fragment),a=l(),s(y.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-1vy6te4"]',document.head).forEach(r),n=c(t),f(p.$$.fragment,t),a=c(t),f(y.$$.fragment,t),this.h()},h(){document.title="Charitify - Map of organizations."},m(t,e){g(t,n,e),$(p,t,e),g(t,a,e),$(y,t,e),u=!0},p(t,[n]){const a={};513&n&&(a.$$scope={dirty:n,ctx:t}),y.$set(a)},i(t){u||(m(p.$$.fragment,t),m(y.$$.fragment,t),u=!0)},o(t){d(p.$$.fragment,t),d(y.$$.fragment,t),u=!1},d(t){t&&r(n),h(p,t),t&&r(a),h(y,t)}}}async function E(t){M(`organizations/${t.id}`)}function N(t,n,a){let e;const{page:o}=u();p(t,o,t=>a(4,e=t));let l=e.params.id,s=[];return[s,o,void 0,async function({detail:t}){a(0,s=await z.getOrganizations()),console.log(s);const n=(t,n)=>Math[t](...s.map(t=>t.location[n])),e=[[n("min","lng")+-2,n("min","lat")+-2],[n("max","lng")- -2,n("max","lat")- -2]],o=s.filter(t=>t.id===l)[0];o?t.flyTo({center:[o.location.lng,o.location.lat],zoom:10}):t.fitBounds(e)}]}export default class extends t{constructor(t){super(),n(this,t,N,C,a,{})}}
