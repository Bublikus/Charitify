function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function l(t){return null==t?"":t}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function x(){return y("")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t){return function(n){return n.preventDefault(),t.call(this,n)}}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:e[o]&&e[o].set?t[o]=n[o]:w(t,o,n[o])}function A(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function N(t){return Array.from(t.childNodes)}function j(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?g(n):$(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return y(n)}function C(t){return k(t," ")}function O(t,n){n=""+n,t.data!==n&&(t.data=n)}function S(t,n){(null!=n||t.value)&&(t.value=n)}function L(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function P(t,n,e){t.classList[e?"add":"remove"](n)}let T;function D(t){T=t}function M(){if(!T)throw new Error("Function called outside component initialization");return T}function q(t){M().$$.on_mount.push(t)}function z(t){M().$$.on_destroy.push(t)}function B(){const t=M();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function F(t,n){M().$$.context.set(t,n)}const G=[],H=[],I=[],J=[],K=Promise.resolve();let Q=!1;function R(t){I.push(t)}function U(){const t=new Set;do{for(;G.length;){const t=G.shift();D(t),V(t.$$)}for(;H.length;)H.pop()();for(let n=0;n<I.length;n+=1){const e=I[n];t.has(e)||(e(),t.add(e))}I.length=0}while(G.length);for(;J.length;)J.pop()();Q=!1}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}const W=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,n){t&&t.i&&(W.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push(()=>{W.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function et(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function ot(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function ct(t,n){t&&t.l(n)}function st(t,n,o){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(n,o),R(()=>{const n=u.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(R)}function ut(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){-1===t.$$.dirty[0]&&(G.push(t),Q||(Q=!0,K.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,c,s,u,i,a=[-1]){const f=T;D(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a};let p=!1;d.ctx=c?c(n,l,(t,e,o=e)=>(d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&it(n,t)),e)):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(N(e.target)):d.fragment&&d.fragment.c(),e.intro&&tt(n.$$.fragment),st(n,e.target,e.anchor),U()),D(f)}class ft{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{C as A,st as B,ut as C,x as D,E,P as F,S as G,et as H,r as I,Y as J,Z as K,q as L,y as M,k as N,L as O,O as P,ot as Q,F as R,ft as S,m as T,z as U,H as V,g as a,N as b,j as c,h as d,w as e,p as f,d as g,t as h,at as i,n as j,f as k,u as l,$ as m,l as n,_ as o,v as p,i as q,a as r,s,tt as t,nt as u,B as v,rt as w,A as x,b as y,ct as z};