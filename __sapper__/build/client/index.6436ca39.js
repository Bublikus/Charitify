function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(){return $("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:e[o]&&e[o].set?t[o]=n[o]:_(t,o,n[o])}function w(t,n){for(const e in n)_(t,e,n[e])}function E(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function A(t){return Array.from(t.childNodes)}function N(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?g(n):h(n)}function j(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return $(n)}function k(t){return j(t," ")}function C(t,n){n=""+n,t.data!==n&&(t.data=n)}function O(t,n){(null!=n||t.value)&&(t.value=n)}function S(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function L(t,n,e){t.classList[e?"add":"remove"](n)}let P;function M(t){P=t}function T(){if(!P)throw new Error("Function called outside component initialization");return P}function q(t){T().$$.on_mount.push(t)}function z(){const t=T();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function B(t,n){T().$$.context.set(t,n)}const D=[],F=[],G=[],H=[],I=Promise.resolve();let J=!1;function K(t){G.push(t)}function Q(){const t=new Set;do{for(;D.length;){const t=D.shift();M(t),R(t.$$)}for(;F.length;)F.pop()();for(let n=0;n<G.length;n+=1){const e=G[n];t.has(e)||(e(),t.add(e))}G.length=0}while(D.length);for(;H.length;)H.pop()();J=!1}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||r(V.c),V=V.p}function Y(t,n){t&&t.i&&(U.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push(()=>{U.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function tt(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,o){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,o),K(()=>{const n=u.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(K)}function ct(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){-1===t.$$.dirty[0]&&(D.push(t),J||(J=!0,I.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ut(n,e,c,s,u,i,a=[-1]){const f=P;M(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a};let p=!1;d.ctx=c?c(n,l,(t,e,o=e)=>(d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&st(n,t)),e)):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(A(e.target)):d.fragment&&d.fragment.c(),e.intro&&Y(n.$$.fragment),rt(n,e.target,e.anchor),Q()),M(f)}class it{$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{O as A,r as B,W as C,X as D,y as E,k as F,S as G,$ as H,j as I,et as J,ot as K,rt as L,ct as M,q as N,C as O,nt as P,B as Q,m as R,it as S,n as a,g as b,N as c,A as d,p as e,_ as f,w as g,d as h,ut as i,l as j,tt as k,f as l,u as m,t as n,h as o,x as p,i as q,a as r,s,L as t,Y as u,Z as v,z as w,E as x,b as y,v as z};
