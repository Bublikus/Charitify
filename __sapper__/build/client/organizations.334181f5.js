import{S as t,i as e,s,B as a,W as n,d as r,f as o,q as i,g as $,h as c,l as f,o as m,p as l,u as g,v as p,w as u,Q as h,X as d,U as w}from"./client.80463990.js";function x(t){let e;const s=new d({props:{items:t[0],basePath:"organizations"}});return{c(){o(s.$$.fragment)},l(t){f(s.$$.fragment,t)},m(t,a){l(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.items=t[0]),s.$set(a)},i(t){e||(g(s.$$.fragment,t),e=!0)},o(t){p(s.$$.fragment,t),e=!1},d(t){u(s,t)}}}function y(t){let e,s,h;const d=new a({props:{size:"50"}}),w=new n({props:{$$slots:{default:[x]},$$scope:{ctx:t}}});return{c(){e=r(),o(d.$$.fragment),s=r(),o(w.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-6bbqlg"]',document.head).forEach($),e=c(t),f(d.$$.fragment,t),s=c(t),f(w.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,a){m(t,e,a),l(d,t,a),m(t,s,a),l(w,t,a),h=!0},p(t,[e]){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),w.$set(s)},i(t){h||(g(d.$$.fragment,t),g(w.$$.fragment,t),h=!0)},o(t){p(d.$$.fragment,t),p(w.$$.fragment,t),h=!1},d(t){t&&$(e),u(d,t),t&&$(s),u(w,t)}}}function b(t,e,s){let a=[];return h(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await w.getOrganizations();s(0,a=new Array(1).fill(t).reduce((t,e)=>t.concat(...e),[]))}),[a]}export default class extends t{constructor(t){super(),e(this,t,b,y,s,{})}}
