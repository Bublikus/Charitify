import{S as t,i as s,s as e,e as l,x as r,c as n,b as o,y as a,d as h,f as c,h as f,j as i,z as u,m as p,p as g,n as m,R as d}from"./index.74426acc.js";function v(t,s,e){const l=t.slice();return l[1]=s[e],l}function x(t){let s,e,p,g,m=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(m),this.h()},l(t){s=n(t,"LI",{});var l=o(s);e=n(l,"A",{rel:!0,href:!0});var r=o(e);p=a(r,m),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&m!==(m=t[1].title+"")&&u(p,m),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function b(t){let s,e,u,b,j,E=t[0],R=[];for(let s=0;s<E.length;s+=1)R[s]=x(v(t,E,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),b=p(),j=l("ul");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){s=g(t),e=n(t,"H1",{});var l=o(e);u=a(l,"Recent posts"),l.forEach(h),b=g(t),j=n(t,"UL",{class:!0});var r=o(j);for(let t=0;t<R.length;t+=1)R[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(j,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,b,l),f(t,j,l);for(let t=0;t<R.length;t+=1)R[t].m(j,null)},p(t,[s]){if(1&s){let e;for(E=t[0],e=0;e<E.length;e+=1){const l=v(t,E,e);R[e]?R[e].p(l,s):(R[e]=x(l),R[e].c(),R[e].m(j,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=E.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(b),t&&h(j),d(R,t)}}}function j({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function E(t,s,e){let{posts:l}=s;return t.$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,E,b,e,{posts:0})}}export{j as preload};
