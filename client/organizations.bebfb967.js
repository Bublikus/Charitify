import{S as t,i as e,s as a,B as s,ad as n,f as r,g as o,q as i,h as $,j as c,m as f,p as m,r as g,v as l,w as p,x as d,a9 as h,ae as u,ab as w}from"./client.7dc82043.js";function x(t){let e;const a=new u({props:{items:t[0],basePath:"organizations"}});return{c(){o(a.$$.fragment)},l(t){f(a.$$.fragment,t)},m(t,s){g(a,t,s),e=!0},p(t,e){const s={};1&e&&(s.items=t[0]),a.$set(s)},i(t){e||(l(a.$$.fragment,t),e=!0)},o(t){p(a.$$.fragment,t),e=!1},d(t){d(a,t)}}}function b(t){let e,a,h;const u=new s({props:{size:"50"}}),w=new n({props:{$$slots:{default:[x]},$$scope:{ctx:t}}});return{c(){e=r(),o(u.$$.fragment),a=r(),o(w.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-6bbqlg"]',document.head).forEach($),e=c(t),f(u.$$.fragment,t),a=c(t),f(w.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,s){m(t,e,s),g(u,t,s),m(t,a,s),g(w,t,s),h=!0},p(t,[e]){const a={};3&e&&(a.$$scope={dirty:e,ctx:t}),w.$set(a)},i(t){h||(l(u.$$.fragment,t),l(w.$$.fragment,t),h=!0)},o(t){p(u.$$.fragment,t),p(w.$$.fragment,t),h=!1},d(t){t&&$(e),d(u,t),t&&$(a),d(w,t)}}}function y(t,e,a){let s=[];return h(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await w.getOrganizations();a(0,s=new Array(1).fill(t).reduce((t,e)=>t.concat(...e),[]))}),[s]}export default class extends t{constructor(t){super(),e(this,t,y,b,a,{})}}
