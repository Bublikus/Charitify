import{S as t,i as s,s as a,m as e,e as n,x as i,p as o,c as r,b as l,y as c,d as h,f as u,h as p,j as f,z as m,n as d}from"./index.f0e84bd9.js";function x(t){let s,a,x,g,j,b,v=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),x=n("h1"),g=i(v),j=e(),b=n("div"),this.h()},l(t){a=o(t),x=r(t,"H1",{});var s=l(x);g=c(s,v),s.forEach(h),j=o(t),b=r(t,"DIV",{class:!0}),l(b).forEach(h),this.h()},h(){u(b,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,x,s),f(x,g),p(t,j,s),p(t,b,s),b.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&v!==(v=t[0].title+"")&&m(g,v),1&a&&y!==(y=t[0].html+"")&&(b.innerHTML=y)},i:d,o:d,d(t){t&&h(a),t&&h(x),t&&h(j),t&&h(b)}}}async function g({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,j,x,a,{post:0})}}export{g as preload};