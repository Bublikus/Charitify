import{S as t,i as e,s,I as a,c as n,d as r,q as i,f as o,g as c,k as $,n as f,o as l,r as m,u as h,v as u,G as d,J as p,H as g}from"./client.b35718d7.js";function w(t){let e;const s=new p({props:{items:t[0],basePath:"charities"}});return{c(){r(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){l(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.items=t[0]),s.$set(a)},i(t){e||(m(s.$$.fragment,t),e=!0)},o(t){h(s.$$.fragment,t),e=!1},d(t){u(s,t)}}}function b(t){let e,s;const d=new a({props:{$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){e=n(),r(d.$$.fragment),this.h()},l(t){i('[data-svelte="svelte-6bbqlg"]',document.head).forEach(o),e=c(t),$(d.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,a){f(t,e,a),l(d,t,a),s=!0},p(t,[e]){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),d.$set(s)},i(t){s||(m(d.$$.fragment,t),s=!0)},o(t){h(d.$$.fragment,t),s=!1},d(t){t&&o(e),u(d,t)}}}function x(t,e,s){let a=[];return d(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await g.getCharities();s(0,a=new Array(5).fill(t).reduce((t,e)=>t.concat(...e),[]))}),[a]}export default class extends t{constructor(t){super(),e(this,t,x,b,s,{})}}