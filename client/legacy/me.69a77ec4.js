import{_ as n,a,b as t,c as e,i as r,s,d as o,S as c,X as f,Y as $,Z as l,h as i,j as u,g,m,n as p,o as h,l as v,k as d,r as w,u as x,w as b,v as j,$ as y,a0 as E,y as B,z as R,A as z,a1 as I,x as S,a2 as k,a3 as C,t as L,p as N,a4 as O,a5 as T,a6 as A}from"./client.bfe5a8d3.js";function D(n,a,t){var e=n.slice();return e[1]=a[t],e}function F(n){var a;return{c:function(){a=L("success")},l:function(n){a=N(n,"success")},m:function(n,t){x(n,a,t)},d:function(n){n&&d(a)}}}function U(n){var a;return{c:function(){a=L("warning")},l:function(n){a=N(n,"warning")},m:function(n,t){x(n,a,t)},d:function(n){n&&d(a)}}}function V(n){var a;return{c:function(){a=L("danger")},l:function(n){a=N(n,"danger")},m:function(n,t){x(n,a,t)},d:function(n){n&&d(a)}}}function X(n){var a;return{c:function(){a=L("info")},l:function(n){a=N(n,"info")},m:function(n,t){x(n,a,t)},d:function(n){n&&d(a)}}}function Y(n){for(var a,t,e,r=[n[1]],s={},o=0;o<r.length;o+=1)s=O(s,r[o]);var c=new T({props:s});return{c:function(){a=i("li"),u(c.$$.fragment),t=g(),this.h()},l:function(n){a=m(n,"LI",{class:!0});var e=p(a);h(c.$$.fragment,e),t=v(e),e.forEach(d),this.h()},h:function(){w(a,"class","svelte-16ij8e1")},m:function(n,r){x(n,a,r),b(c,a,null),j(a,t),e=!0},p:function(n,a){var t=1&a?y(r,[E(n[1])]):{};c.$set(t)},i:function(n){e||(B(c.$$.fragment,n),e=!0)},o:function(n){R(c.$$.fragment,n),e=!1},d:function(n){n&&d(a),z(c)}}}function Z(n){for(var a,t,e,r,s,o,c,y,E,L,N,O,T,Z,_,q,G,H,J,K,M,P,Q,W=new f({props:{src:"https://placeimg.com/100/100/people",alt:"user avatar"}}),nn=new $({props:{is:"success",auto:!0,$$slots:{default:[F]},$$scope:{ctx:n}}}),an=new l({props:{size:"2"}}),tn=new $({props:{is:"warning",auto:!0,$$slots:{default:[U]},$$scope:{ctx:n}}}),en=new l({props:{size:"2"}}),rn=new $({props:{is:"danger",auto:!0,$$slots:{default:[V]},$$scope:{ctx:n}}}),sn=new l({props:{size:"2"}}),on=new $({props:{is:"info",auto:!0,$$slots:{default:[X]},$$scope:{ctx:n}}}),cn=n[0],fn=[],$n=0;$n<cn.length;$n+=1)fn[$n]=Y(D(n,cn,$n));var ln=function(n){return R(fn[n],1,1,(function(){fn[n]=null}))};return{c:function(){a=i("section"),t=i("br"),e=g(),r=i("div"),u(W.$$.fragment),s=g(),o=i("br"),c=g(),y=i("br"),E=g(),L=i("section"),u(nn.$$.fragment),N=g(),u(an.$$.fragment),O=g(),u(tn.$$.fragment),T=g(),u(en.$$.fragment),Z=g(),u(rn.$$.fragment),_=g(),u(sn.$$.fragment),q=g(),u(on.$$.fragment),G=g(),H=i("br"),J=g(),K=i("br"),M=g(),P=i("ul");for(var n=0;n<fn.length;n+=1)fn[n].c();this.h()},l:function(n){a=m(n,"SECTION",{class:!0});var f=p(a);t=m(f,"BR",{}),e=v(f),r=m(f,"DIV",{class:!0});var $=p(r);h(W.$$.fragment,$),$.forEach(d),s=v(f),o=m(f,"BR",{}),c=v(f),y=m(f,"BR",{}),E=v(f),L=m(f,"SECTION",{style:!0,class:!0});var l=p(L);h(nn.$$.fragment,l),N=v(l),h(an.$$.fragment,l),O=v(l),h(tn.$$.fragment,l),T=v(l),h(en.$$.fragment,l),Z=v(l),h(rn.$$.fragment,l),_=v(l),h(sn.$$.fragment,l),q=v(l),h(on.$$.fragment,l),l.forEach(d),G=v(f),H=m(f,"BR",{}),J=v(f),K=m(f,"BR",{}),M=v(f),P=m(f,"UL",{class:!0});for(var i=p(P),u=0;u<fn.length;u+=1)fn[u].l(i);i.forEach(d),f.forEach(d),this.h()},h:function(){w(r,"class","user-avatar svelte-16ij8e1"),I(L,"display","flex"),I(L,"flex-direction","row"),w(L,"class","svelte-16ij8e1"),w(P,"class","svelte-16ij8e1"),w(a,"class","container svelte-16ij8e1")},m:function(n,f){x(n,a,f),j(a,t),j(a,e),j(a,r),b(W,r,null),j(a,s),j(a,o),j(a,c),j(a,y),j(a,E),j(a,L),b(nn,L,null),j(L,N),b(an,L,null),j(L,O),b(tn,L,null),j(L,T),b(en,L,null),j(L,Z),b(rn,L,null),j(L,_),b(sn,L,null),j(L,q),b(on,L,null),j(a,G),j(a,H),j(a,J),j(a,K),j(a,M),j(a,P);for(var $=0;$<fn.length;$+=1)fn[$].m(P,null);Q=!0},p:function(n,a){var t=S(a,1)[0],e={};16&t&&(e.$$scope={dirty:t,ctx:n}),nn.$set(e);var r={};16&t&&(r.$$scope={dirty:t,ctx:n}),tn.$set(r);var s={};16&t&&(s.$$scope={dirty:t,ctx:n}),rn.$set(s);var o={};if(16&t&&(o.$$scope={dirty:t,ctx:n}),on.$set(o),1&t){var c;for(cn=n[0],c=0;c<cn.length;c+=1){var f=D(n,cn,c);fn[c]?(fn[c].p(f,t),B(fn[c],1)):(fn[c]=Y(f),fn[c].c(),B(fn[c],1),fn[c].m(P,null))}for(A(),c=cn.length;c<fn.length;c+=1)ln(c);k()}},i:function(n){if(!Q){B(W.$$.fragment,n),B(nn.$$.fragment,n),B(an.$$.fragment,n),B(tn.$$.fragment,n),B(en.$$.fragment,n),B(rn.$$.fragment,n),B(sn.$$.fragment,n),B(on.$$.fragment,n);for(var a=0;a<cn.length;a+=1)B(fn[a]);Q=!0}},o:function(n){R(W.$$.fragment,n),R(nn.$$.fragment,n),R(an.$$.fragment,n),R(tn.$$.fragment,n),R(en.$$.fragment,n),R(rn.$$.fragment,n),R(sn.$$.fragment,n),R(on.$$.fragment,n),fn=fn.filter(Boolean);for(var a=0;a<fn.length;a+=1)R(fn[a]);Q=!1},d:function(n){n&&d(a),z(W),z(nn),z(an),z(tn),z(en),z(rn),z(sn),z(on),C(fn,n)}}}function _(n){return[[{placeholder:"username"},{placeholder:"Full name"},{placeholder:"sex (checkboxes or dropdown)"},{placeholder:"birth"},{placeholder:"email"},{placeholder:"tel"},{placeholder:"location (autocomplete)"}]]}var q=function(f){function $(n){var c;return a(this,$),c=t(this,e($).call(this)),r(o(c),n,_,Z,s,{}),c}return n($,c),$}();export default q;
