import{S as t,i as a,s as e,B as s,ak as n,d as r,f as o,q as $,g as i,h as c,l as f,o as l,p as m,u as g,v as p,w as d,a6 as h,al as u,a9 as w}from"./client.db3077e8.js";function b(t){let a;const e=new u({props:{items:t[0],basePath:"organizations"}});return{c(){o(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,s){m(e,t,s),a=!0},p(t,a){const s={};1&a&&(s.items=t[0]),e.$set(s)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){d(e,t)}}}function x(t){let a,e,h;const u=new s({props:{size:"50"}}),w=new n({props:{$$slots:{default:[b]},$$scope:{ctx:t}}});return{c(){a=r(),o(u.$$.fragment),e=r(),o(w.$$.fragment),this.h()},l(t){$('[data-svelte="svelte-6bbqlg"]',document.head).forEach(i),a=c(t),f(u.$$.fragment,t),e=c(t),f(w.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,s){l(t,a,s),m(u,t,s),l(t,e,s),m(w,t,s),h=!0},p(t,[a]){const e={};3&a&&(e.$$scope={dirty:a,ctx:t}),w.$set(e)},i(t){h||(g(u.$$.fragment,t),g(w.$$.fragment,t),h=!0)},o(t){p(u.$$.fragment,t),p(w.$$.fragment,t),h=!1},d(t){t&&i(a),d(u,t),t&&i(e),d(w,t)}}}function y(t,a,e){let s=[];return h(async()=>{const t=await w.getOrganizations();e(0,s=new Array(1).fill(t).reduce((t,a)=>t.concat(...a),[]))}),[s]}export default class extends t{constructor(t){super(),a(this,t,y,x,e,{})}}
