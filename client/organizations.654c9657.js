import{S as s,i as t,s as e,N as a,c as n,j as r,n as i,p as o,r as c,u as m,G as f}from"./client.10896c27.js";import{a as u}from"./index.c75ed3ea.js";function $(s){let t;const e=new a({props:{items:s[0]}});return{c(){n(e.$$.fragment)},l(s){r(e.$$.fragment,s)},m(s,a){i(e,s,a),t=!0},p(s,[t]){const a={};1&t&&(a.items=s[0]),e.$set(a)},i(s){t||(o(e.$$.fragment,s),t=!0)},o(s){c(e.$$.fragment,s),t=!1},d(s){m(e,s)}}}function l(s,t,e){let a=[];return f(async()=>{await new Promise(s=>setTimeout(s,1e3));const s=await u.getOrganizations();e(0,a=new Array(1).fill(s).reduce((s,t)=>s.concat(...t),[]))}),[a]}export default class extends s{constructor(s){super(),t(this,s,l,$,e,{})}}