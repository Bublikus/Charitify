import{S as t,i as s,s as a,E as e,p as n,H as i,F as o,c as r,d as c,I as l,e as h,f as u,h as p,j as f,N as d,n as m}from"./index.5cb7dec5.js";function x(t){let s,a,x,g,j,H,v=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),x=n("h1"),g=i(v),j=e(),H=n("div"),this.h()},l(t){a=o(t),x=r(t,"H1",{});var s=c(x);g=l(s,v),s.forEach(h),j=o(t),H=r(t,"DIV",{class:!0}),c(H).forEach(h),this.h()},h(){u(H,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,x,s),f(x,g),p(t,j,s),p(t,H,s),H.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&v!==(v=t[0].title+"")&&d(g,v),1&a&&E!==(E=t[0].html+"")&&(H.innerHTML=E)},i:m,o:m,d(t){t&&h(a),t&&h(x),t&&h(j),t&&h(H)}}}async function g({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,j,x,a,{post:0})}}export{g as preload};
