import{S as t,i as e,s,H as a,b as n,c as r,q as o,d as i,f as c,j as $,m,n as f,p as l,r as d,u as p,G as u,I as g}from"./client.384dd909.js";import{a as h}from"./index.2108838e.js";function w(t){let e;const s=new g({props:{items:t[0]}});return{c(){r(s.$$.fragment)},l(t){$(s.$$.fragment,t)},m(t,a){f(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.items=t[0]),s.$set(a)},i(t){e||(l(s.$$.fragment,t),e=!0)},o(t){d(s.$$.fragment,t),e=!1},d(t){p(s,t)}}}function x(t){let e,s;const u=new a({props:{$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){e=n(),r(u.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-6bbqlg"]',document.head).forEach(i),e=c(t),$(u.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,a){m(t,e,a),f(u,t,a),s=!0},p(t,[e]){const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s)},i(t){s||(l(u.$$.fragment,t),s=!0)},o(t){d(u.$$.fragment,t),s=!1},d(t){t&&i(e),p(u,t)}}}function y(t,e,s){let a=[];return u(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await h.getOrganizations();s(0,a=new Array(1).fill(t).reduce((t,e)=>t.concat(...e),[]))}),[a]}export default class extends t{constructor(t){super(),e(this,t,y,x,s,{})}}
