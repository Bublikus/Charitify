import{S as t,i as n,s as e,M as a,c as o,d as l,q as s,f as r,g as i,k as c,n as f,o as g,r as $,u as m,v as u,I as h,J as d,K as p,N as x,E as w,O as y}from"./client.d372529b.js";function v(t,n,e){const a=t.slice();return a[2]=n[e],a}function M(t){let n;const e=new y({props:{lat:t[2].location.lat,lng:t[2].location.lng}});return{c(){l(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){g(e,t,a),n=!0},p(t,n){const a={};1&n&&(a.lat=t[2].location.lat),1&n&&(a.lng=t[2].location.lng),e.$set(a)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){u(e,t)}}}function z(t){let n,e,a=t[0],o=[];for(let n=0;n<a.length;n+=1)o[n]=M(v(t,a,n));const l=t=>m(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=h()},l(t){for(let n=0;n<o.length;n+=1)o[n].l(t);n=h()},m(t,a){for(let n=0;n<o.length;n+=1)o[n].m(t,a);f(t,n,a),e=!0},p(t,e){if(1&e){let s;for(a=t[0],s=0;s<a.length;s+=1){const l=v(t,a,s);o[s]?(o[s].p(l,e),$(o[s],1)):(o[s]=M(l),o[s].c(),$(o[s],1),o[s].m(n.parentNode,n))}for(d(),s=a.length;s<o.length;s+=1)l(s);p()}},i(t){if(!e){for(let t=0;t<a.length;t+=1)$(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)m(o[t]);e=!1},d(t){x(o,t),t&&r(n)}}}function B(t){let n,e;const h=new a({props:{$$slots:{default:[z]},$$scope:{ctx:t}}});return h.$on("ready",t[1]),{c(){n=o(),l(h.$$.fragment),this.h()},l(t){s('[data-svelte="svelte-1vy6te4"]',document.head).forEach(r),n=i(t),c(h.$$.fragment,t),this.h()},h(){document.title="Charitify - Map of organizations."},m(t,a){f(t,n,a),g(h,t,a),e=!0},p(t,[n]){const e={};33&n&&(e.$$scope={dirty:n,ctx:t}),h.$set(e)},i(t){e||($(h.$$.fragment,t),e=!0)},o(t){m(h.$$.fragment,t),e=!1},d(t){t&&r(n),u(h,t)}}}function E(t,n,e){let a=[];return[a,async function({detail:t}){await new Promise(t=>setTimeout(t,2e3)),e(0,a=await w.getOrganizations()),console.log(a);const n=(t,n)=>Math[t](...a.map(t=>t.location[n])),o=[[n("min","lng")+-2,n("min","lat")+-2],[n("max","lng")- -2,n("max","lat")- -2]];t.fitBounds(o)}]}export default class extends t{constructor(t){super(),n(this,t,E,B,e,{})}}
