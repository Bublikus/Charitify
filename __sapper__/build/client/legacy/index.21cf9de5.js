import{c as t,Z as e,_ as r,y as n,a as o,b as s,d as i,e as a,$ as u,a0 as c}from"./index.86e134b3.js";import{_ as f,a as h}from"./asyncToGenerator.a4e4e88d.js";var p=t((function(t){t.exports=function(t){return(t instanceof Buffer?t:Buffer.from(t.toString(),"binary")).toString("base64")}})),d=t((function(t,e){var o;window,t.exports=(o=p,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==r(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,r){for(var n=r(1),o=r(5),s=o.handleResponse,i=o.handleError,a=function(t,e){var r=n(Object.assign({url:t},e));return fetch(r.url,r).then(s).catch(i)},u=function(){var t=f[c];a[t]=function(e,r){return r=Object.assign({method:t},r),a(e,r)}},c=0,f=["get","post","put","patch","delete"];c<f.length;c++)u();t.exports=a,t.exports.default=a},function(t,e,o){var s=function(t){if(t)return Object.entries(t).reduce((function(t,e,r){var o=n(e,2),s=o[0],i=o[1];return"".concat(t).concat(0===r?"".concat(s,"=").concat(encodeURIComponent(i)):"&".concat(s,"=").concat(encodeURIComponent(i)))}),"")};t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},t);return e.url=function(t){var e=t.url,r=t.queries;return r?"".concat(e,"?").concat(s(r)):e}(e),e.method=e.method||"get",e.headers=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.headers,n=void 0===e?{}:e,s=(t.body,t.method),i=void 0===s?"get":s,a=t.auth;"undefined"==typeof Headers&&o(2);var u=new Headers(n);if(u.get("content-type")||"get"===i||u.set("content-type","application/json"),a)if("object"==r(a)){var c=a.username,f=a.password;if(!c)throw new Error("Username required for basic authentication");if(!f)throw new Error("Password required for basic authentication");var h=window.btoa||o(4);u.set("Authorization","Basic "+h("".concat(c,":").concat(f)))}else u.set("Authorization","Bearer ".concat(a));return u}(e),e.body=function(t){if("get"!==t.method){var e=t.headers.get("content-type");return e?e.includes("x-www-form-urlencoded")?s(t.body):e.includes("json")?JSON.stringify(t.body):t.body:void 0}}(e),delete e.auth,e}},function(t,e,r){r(3),t.exports=self.fetch.bind(self)},function(t,e,r){r.r(e),r.d(e,"Headers",(function(){return d})),r.d(e,"Request",(function(){return g})),r.d(e,"Response",(function(){return _})),r.d(e,"DOMException",(function(){return A})),r.d(e,"fetch",(function(){return E}));var n="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in self,a="ArrayBuffer"in self;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&s&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,r=y(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=f(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[f(t)]},d.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},d.prototype.set=function(t,e){this.map[f(t)]=h(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},o&&(d.prototype[Symbol.iterator]=d.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t,e){var r,n,o=(e=e||{}).body;if(t instanceof g){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),m.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function x(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function _(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},w.call(g.prototype),w.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];_.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})};var A=self.DOMException;try{new A}catch(t){(A=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),A.prototype.constructor=A}function E(t,e){return new Promise((function(r,n){var o=new g(t,e);if(o.signal&&o.signal.aborted)return n(new A("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;r(new _(o,n))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new A("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),o.headers.forEach((function(t,e){i.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",a)}),i.send(void 0===o._bodyInit?null:o._bodyInit)}))}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=d,self.Request=g,self.Response=_)},function(t,e){t.exports=o},function(t,e){var r=function(t,e){var r=("function"==typeof t.clone?t.clone():void 0)||t;return t[e]().then((function(t){return function(t,e){var r={body:e,headers:function(t){return t.headers.entries?function(t){var e={},r=!0,o=!1,s=void 0;try{for(var i,a=t.headers.entries()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var u=n(i.value,2),c=u[0],f=u[1];e[c]=f}}catch(t){o=!0,s=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return e}(t):function(t){var e={},r=t.headers._headers;for(var n in r)e[n]=r[n].join("");return e}(t)}(t),response:t,status:t.status,statusText:t.statusText};return t.ok?Promise.resolve(r):Promise.reject(r)}(r,t)}))};t.exports={handleResponse:function(t){var e=t.headers.get("content-type");if(e.includes("json"))return r(t,"json");if(e.includes("text"))return r(t,"text");if(e.includes("image"))return r(t,"blob");throw new Error("zlFetch does not support content-type ".concat(e," yet"))},handleError:function(t){return"Failed to fetch"===t.message?Promise.reject({error:t}):Promise.reject(t)}}}]))})),l=e(d),y=(d.zlFetch,function(){return"recent_news.json"}),b=function(t){return"charity.json?id=".concat(t)},v=function(){return"charities.json"},w=function(t){return"charity_comments.json?id=".concat(t)},m=function(t){return"organization.json?id=".concat(t)},g=function(){return"organizations.json"},x=function(t){return"$organization/comments.json?id=".concat(t)},_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,t),this._adapter=e.adapter||l,this._base_path=e.basePath?"".concat(e.basePath,"/"):"",this._requestInterceptor=e.requestInterceptor||f(h.mark((function t(){var e,r,n,o=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=o.length,r=new Array(e),n=0;n<e;n++)r[n]=o[n];return t.abrupt("return",r);case 2:case"end":return t.stop()}}),t)}))),this._responseInterceptor=e.responseInterceptor||f(h.mark((function t(){var e,r,n,o=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=o.length,r=new Array(e),n=0;n<e;n++)r[n]=o[n];return t.abrupt("return",r);case 2:case"end":return t.stop()}}),t)}))),this._errorInterceptor=e.errorInterceptor||Promise.reject}var e,r,n,o,i;return u(t,[{key:"newRequest",value:(i=f(h.mark((function t(e){var r,n,o,s=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=s.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=s[o];return t.abrupt("return",this.withInterceptors.apply(this,[this._adapter[e]].concat(n)));case 2:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"withInterceptors",value:(o=f(h.mark((function t(e){var r,n,o,s,i,a=this,u=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=u.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=u[o];return t.next=3,this.requestInterceptor.apply(this,n);case 3:return s=t.sent,t.next=6,this._requestInterceptor.apply(this,c(s));case 6:return i=t.sent,t.abrupt("return",e.apply(void 0,c(i)).then(function(){var t=f(h.mark((function t(e){var r;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._responseInterceptor(e);case 2:return r=t.sent,t.next=5,a.handleResponse(r);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=f(h.mark((function t(e){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a._errorInterceptor(e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()).catch(this.handleReject));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"requestInterceptor",value:(n=f(h.mark((function t(){var e,r,n,o=arguments;return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=o.length,r=new Array(e),n=0;n<e;n++)r[n]=o[n];return"string"==typeof r[0]&&(r[0]="".concat(this._base_path).concat(r[0])),t.abrupt("return",[].concat(r));case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"handleResponse",value:(r=f(h.mark((function t(e){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.body);case 1:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},{key:"handleReject",value:(e=f(h.mark((function t(e){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw e;case 1:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),t}(),j=new(function(t){function e(t){return s(this,e),i(this,a(e).call(this,t))}return o(e,_),u(e,[{key:"getCharity",value:function(t,e,r){return this.newRequest("get",b(t),e,r)}},{key:"getCharities",value:function(t,e){return this.newRequest("get",v(),t,e)}},{key:"getCharityComments",value:function(t,e,r){return this.newRequest("get",w(t),e,r)}},{key:"getOrganization",value:function(t,e,r){return this.newRequest("get",m(t),e,r)}},{key:"getOrganizations",value:function(t,e){return this.newRequest("get",g(),t,e)}},{key:"getOrganizationComments",value:function(t,e,r){return this.newRequest("get",x(t),e,r)}},{key:"getRecentNews",value:function(t,e){return this.newRequest("get",y(),t,e)}}]),e}())({basePath:"./mock",responseInterceptor:function(t){return console.info("response -------\n",t),t},errorInterceptor:function(t){return console.warn("request error -------\n",t),Promise.reject(t)}});export{j as a};
