import{S as t,i as a,s as e,B as s,a9 as n,d as r,f as o,q as i,g as $,h as c,l as f,o as m,p as l,u as g,v as p,w as u,a2 as d,aa as h,a4 as w}from"./client.52d62fc6.js";function x(t){let a;const e=new h({props:{items:t[0],basePath:"organizations"}});return{c(){o(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,s){l(e,t,s),a=!0},p(t,a){const s={};1&a&&(s.items=t[0]),e.$set(s)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){u(e,t)}}}function y(t){let a,e,d;const h=new s({props:{size:"50"}}),w=new n({props:{$$slots:{default:[x]},$$scope:{ctx:t}}});return{c(){a=r(),o(h.$$.fragment),e=r(),o(w.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-6bbqlg"]',document.head).forEach($),a=c(t),f(h.$$.fragment,t),e=c(t),f(w.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,s){m(t,a,s),l(h,t,s),m(t,e,s),l(w,t,s),d=!0},p(t,[a]){const e={};3&a&&(e.$$scope={dirty:a,ctx:t}),w.$set(e)},i(t){d||(g(h.$$.fragment,t),g(w.$$.fragment,t),d=!0)},o(t){p(h.$$.fragment,t),p(w.$$.fragment,t),d=!1},d(t){t&&$(a),u(h,t),t&&$(e),u(w,t)}}}function b(t,a,e){let s=[];return d(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await w.getOrganizations();e(0,s=new Array(1).fill(t).reduce((t,a)=>t.concat(...a),[]))}),[s]}export default class extends t{constructor(t){super(),a(this,t,b,y,e,{})}}
