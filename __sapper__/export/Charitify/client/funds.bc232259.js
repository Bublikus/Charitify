import{S as t,i as e,s,B as a,ac as n,d as r,f as $,q as o,g as c,h as i,l as f,o as m,p as l,u as p,v as u,w as d,a8 as g,ad as h,aa as w}from"./client.c9875266.js";function x(t){let e;const s=new h({props:{items:t[0],basePath:"funds"}});return{c(){$(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,a){l(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.items=t[0]),s.$set(a)},i(t){e||(p(s.$$.fragment,t),e=!0)},o(t){u(s.$$.fragment,t),e=!1},d(t){d(s,t)}}}function y(t){let e,s,g;const h=new a({props:{size:"50"}}),w=new n({props:{$$slots:{default:[x]},$$scope:{ctx:t}}});return{c(){e=r(),$(h.$$.fragment),s=r(),$(w.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-6bbqlg"]',document.head).forEach(c),e=i(t),f(h.$$.fragment,t),s=i(t),f(w.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,a){m(t,e,a),l(h,t,a),m(t,s,a),l(w,t,a),g=!0},p(t,[e]){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),w.$set(s)},i(t){g||(p(h.$$.fragment,t),p(w.$$.fragment,t),g=!0)},o(t){u(h.$$.fragment,t),u(w.$$.fragment,t),g=!1},d(t){t&&c(e),d(h,t),t&&c(s),d(w,t)}}}function b(t,e,s){let a=[];return g(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await w.getFunds();s(0,a=new Array(5).fill(t).reduce((t,e)=>t.concat(...e),[]))}),[a]}export default class extends t{constructor(t){super(),e(this,t,b,y,s,{})}}
