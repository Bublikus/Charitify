import{S as t,i as e,s,G as a,c as n,d as r,q as o,f as i,g as c,k as $,n as f,o as l,r as m,u,v as d,B as p,H as h,E as g}from"./client.d372529b.js";function w(t){let e;const s=new h({props:{items:t[0]}});return{c(){r(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){l(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.items=t[0]),s.$set(a)},i(t){e||(m(s.$$.fragment,t),e=!0)},o(t){u(s.$$.fragment,t),e=!1},d(t){d(s,t)}}}function x(t){let e,s;const p=new a({props:{$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){e=n(),r(p.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-6bbqlg"]',document.head).forEach(i),e=c(t),$(p.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,a){f(t,e,a),l(p,t,a),s=!0},p(t,[e]){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),p.$set(s)},i(t){s||(m(p.$$.fragment,t),s=!0)},o(t){u(p.$$.fragment,t),s=!1},d(t){t&&i(e),d(p,t)}}}function y(t,e,s){let a=[];return p(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await g.getCharities();s(0,a=new Array(5).fill(t).reduce((t,e)=>t.concat(...e),[]))}),[a]}export default class extends t{constructor(t){super(),e(this,t,y,x,s,{})}}
