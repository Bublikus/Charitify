import{S as t,i as s,s as e,I as a,c as n,d as r,q as o,f as i,g as c,k as $,n as f,p as l,r as m,u as p,v as u,G as d,J as g,H as h}from"./client.2974aa7d.js";function w(t){let s;const e=new g({props:{items:t[0],basePath:"organizations"}});return{c(){r(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,a){l(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.items=t[0]),e.$set(a)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}function x(t){let s,e;const d=new a({props:{$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){s=n(),r(d.$$.fragment),this.h()},l(t){o('[data-svelte="svelte-6bbqlg"]',document.head).forEach(i),s=c(t),$(d.$$.fragment,t),this.h()},h(){document.title="Charitify - is the application for helping those in need."},m(t,a){f(t,s,a),l(d,t,a),e=!0},p(t,[s]){const e={};3&s&&(e.$$scope={dirty:s,ctx:t}),d.$set(e)},i(t){e||(m(d.$$.fragment,t),e=!0)},o(t){p(d.$$.fragment,t),e=!1},d(t){t&&i(s),u(d,t)}}}function y(t,s,e){let a=[];return d(async()=>{await new Promise(t=>setTimeout(t,1e3));const t=await h.getOrganizations();e(0,a=new Array(1).fill(t).reduce((t,s)=>t.concat(...s),[]))}),[a]}export default class extends t{constructor(t){super(),s(this,t,y,x,e,{})}}
