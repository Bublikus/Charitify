import{S as e,i as l,s,e as a,d as t,c as r,h as o,j as n,k as c,g as h,f as i,m as f,n as u,p,o as d,K as g,M as m,r as v,u as $,v as j,t as b,l as E,N as x,O as B,Q as I,U as k,V as w}from"./client.3b612e12.js";function L(e,l,s){const a=e.slice();return a[1]=l[s],a}function N(e){let l,s,b;const E=[e[1]];let x={};for(let e=0;e<E.length;e+=1)x=I(x,E[e]);const B=new k({props:x});return{c(){l=a("li"),t(B.$$.fragment),s=r(),this.h()},l(e){l=o(e,"LI",{class:!0});var a=n(l);c(B.$$.fragment,a),s=h(a),a.forEach(i),this.h()},h(){f(l,"class","svelte-16ij8e1")},m(e,a){u(e,l,a),p(B,l,null),d(l,s),b=!0},p(e,l){const s=1&l?g(E,[m(e[1])]):{};B.$set(s)},i(e){b||(v(B.$$.fragment,e),b=!0)},o(e){$(B.$$.fragment,e),b=!1},d(e){e&&i(l),j(B)}}}function O(e){let l,s,t,c,p,g,m,j,I,k,O=e[0],R=[];for(let l=0;l<O.length;l+=1)R[l]=N(L(e,O,l));const S=e=>$(R[e],1,1,()=>{R[e]=null});return{c(){l=a("section"),s=a("br"),t=r(),c=a("div"),p=b("+"),g=r(),m=a("br"),j=r(),I=a("ul");for(let e=0;e<R.length;e+=1)R[e].c();this.h()},l(e){l=o(e,"SECTION",{class:!0});var a=n(l);s=o(a,"BR",{}),t=h(a),c=o(a,"DIV",{class:!0});var r=n(c);p=E(r,"+"),r.forEach(i),g=h(a),m=o(a,"BR",{}),j=h(a),I=o(a,"UL",{class:!0});var f=n(I);for(let e=0;e<R.length;e+=1)R[e].l(f);f.forEach(i),a.forEach(i),this.h()},h(){f(c,"class","user-avatar svelte-16ij8e1"),f(I,"class","svelte-16ij8e1"),f(l,"class","container svelte-16ij8e1")},m(e,a){u(e,l,a),d(l,s),d(l,t),d(l,c),d(c,p),d(l,g),d(l,m),d(l,j),d(l,I);for(let e=0;e<R.length;e+=1)R[e].m(I,null);k=!0},p(e,[l]){if(1&l){let s;for(O=e[0],s=0;s<O.length;s+=1){const a=L(e,O,s);R[s]?(R[s].p(a,l),v(R[s],1)):(R[s]=N(a),R[s].c(),v(R[s],1),R[s].m(I,null))}for(w(),s=O.length;s<R.length;s+=1)S(s);x()}},i(e){if(!k){for(let e=0;e<O.length;e+=1)v(R[e]);k=!0}},o(e){R=R.filter(Boolean);for(let e=0;e<R.length;e+=1)$(R[e]);k=!1},d(e){e&&i(l),B(R,e)}}}function R(e){return[[{placeholder:"username"},{placeholder:"Full name"},{placeholder:"sex (checkboxes or dropdown)"},{placeholder:"birth"},{placeholder:"email"},{placeholder:"tel"},{placeholder:"location (autocomplete)"}]]}export default class extends e{constructor(e){super(),l(this,e,R,O,s,{})}}
