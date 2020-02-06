import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as space, E as create_component, H as claim_space, G as claim_component, q as insert_dev, I as mount_component, t as transition_in, h as transition_out, m as detach_dev, J as destroy_component, K as empty, r as group_outros, u as check_outros, T as destroy_each } from './index.a981e887.js';
import { f as createCommonjsModule, u as unwrapExports, M as Map, g as MapMarker } from './index.36245c96.js';

var btoa = createCommonjsModule(function (module) {
(function () {

  function btoa(str) {
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());
});

var dist = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e(btoa);}(window,(function(t){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o});},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){const o=r(1),{handleResponse:n,handleError:s}=r(5),i=(t,e)=>{const r=o(Object.assign({url:t},e));return fetch(r.url,r).then(n).catch(s)},a=["get","post","put","patch","delete"];for(const t of a)i[t]=function(e,r){return r=Object.assign({method:t},r),i(e,r)};t.exports=i,t.exports.default=i;},function(t,e,r){const o=t=>{if(t)return Object.entries(t).reduce((t,e,r)=>{const[o,n]=e;return `${t}${0===r?`${o}=${encodeURIComponent(n)}`:`&${o}=${encodeURIComponent(n)}`}`},"")};t.exports=(t={})=>{const e=Object.assign({},t);return e.url=(t=>{const{url:e,queries:r}=t;return r?`${e}?${o(r)}`:e})(e),e.method=e.method||"get",e.headers=(({headers:t={},body:e,method:o="get",auth:n}={})=>{"undefined"==typeof Headers&&r(2);const s=new Headers(t);if(s.get("content-type")||"get"===o||s.set("content-type","application/json"),n)if("object"==typeof n){const{username:t,password:e}=n;if(!t)throw new Error("Username required for basic authentication");if(!e)throw new Error("Password required for basic authentication");const o=window.btoa||r(4);s.set("Authorization","Basic "+o(`${t}:${e}`));}else s.set("Authorization",`Bearer ${n}`);return s})(e),e.body=(t=>{if("get"===t.method)return;const e=t.headers.get("content-type");return e?e.includes("x-www-form-urlencoded")?o(t.body):e.includes("json")?JSON.stringify(t.body):t.body:void 0})(e),delete e.auth,e};},function(t,e,r){r(3),t.exports=self.fetch.bind(self);},function(t,e,r){r.r(e),r.d(e,"Headers",(function(){return f})),r.d(e,"Request",(function(){return b})),r.d(e,"Response",(function(){return w})),r.d(e,"DOMException",(function(){return v})),r.d(e,"fetch",(function(){return x}));var o={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return !1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(o.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return "string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return {done:void 0===e,value:e}}};return o.iterable&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t);}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1]);}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e]);}),this);}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0;}function d(t){return new Promise((function(e,r){t.onload=function(){e(t.result);},t.onerror=function(){r(t.error);};}))}function h(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o.arrayBuffer&&o.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"));},o.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t,e,r,o=c(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=d(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=i(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e;},f.prototype.delete=function(t){delete this.map[i(t)];},f.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},f.prototype.set=function(t,e){this.map[i(t)]=a(e);},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this);},f.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r);})),u(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e);})),u(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e]);})),u(t)},o.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var r,o,n=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0);}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),y.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n);}function m(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n));}})),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t);}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},p.call(b.prototype),p.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];w.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var v=self.DOMException;try{new v;}catch(t){(v=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack;}).prototype=Object.create(Error.prototype),v.prototype.constructor=v;}function x(t,e){return new Promise((function(r,n){var s=new b(t,e);if(s.signal&&s.signal.aborted)return n(new v("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort();}i.onload=function(){var t,e,o={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n);}})),e)};o.url="responseURL"in i?i.responseURL:o.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new w(n,o));},i.onerror=function(){n(new TypeError("Network request failed"));},i.ontimeout=function(){n(new TypeError("Network request failed"));},i.onabort=function(){n(new v("Aborted","AbortError"));},i.open(s.method,s.url,!0),"include"===s.credentials?i.withCredentials=!0:"omit"===s.credentials&&(i.withCredentials=!1),"responseType"in i&&o.blob&&(i.responseType="blob"),s.headers.forEach((function(t,e){i.setRequestHeader(e,t);})),s.signal&&(s.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&s.signal.removeEventListener("abort",a);}),i.send(void 0===s._bodyInit?null:s._bodyInit);}))}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=f,self.Request=b,self.Response=w);},function(e,r){e.exports=t;},function(t,e){const r=(t,e)=>{const r=("function"==typeof t.clone?t.clone():void 0)||t;return t[e]().then(t=>((t,e)=>{const r={body:e,headers:(t=>t.headers.entries?(t=>{const e={};for(const[r,o]of t.headers.entries())e[r]=o;return e})(t):(t=>{const e={},r=t.headers._headers;for(const t in r)e[t]=r[t].join("");return e})(t))(t),response:t,status:t.status,statusText:t.statusText};return t.ok?Promise.resolve(r):Promise.reject(r)})(r,t))};t.exports={handleResponse:t=>{const e=t.headers.get("content-type");if(e.includes("json"))return r(t,"json");if(e.includes("text"))return r(t,"text");if(e.includes("image"))return r(t,"blob");throw new Error(`zlFetch does not support content-type ${e} yet`)},handleError:t=>"Failed to fetch"===t.message?Promise.reject({error:t}):Promise.reject(t)};}])}));
});

var zlFetch = unwrapExports(dist);
var dist_1 = dist.zlFetch;

/**
 *
 * @description API URLs builders.
 */
const endpoints = {
  BASE_URL: './mock/',

  CHARITY: (id) => `${endpoints.BASE_URL}charity.json?id=${id}`,
  CHARITIES: () => `${endpoints.BASE_URL}charities.json`,
  CHARITY_COMMENTS: (id) => `${endpoints.BASE_URL}charity_comments.json?id=${id}`,

  ORGANIZATION: (id) => `${endpoints.BASE_URL}organization.json?id=${id}`,
  ORGANIZATIONS: () => `${endpoints.BASE_URL}organizations.json`,
  ORGANIZATION_COMMENTS: (id) => `${endpoints.BASE_URL}organization_comments.json?id=${id}`,

  RECENT_NEWS: () => `${endpoints.BASE_URL}recent_news.json`,
};

/**
 *
 * @description API class for making REST API requests in a browser.
 */
var api = new class {
  constructor() {
    this._localConfig = {};
    this._adapter = zlFetch;
  }

  getCharity(id, params, config) {
    return this._adapter.get(endpoints.CHARITY(id), params, { ...this._localConfig, ...config })
  }
  getCharities(params, config) {
    return this._adapter.get(endpoints.CHARITIES(), params, { ...this._localConfig, ...config })
  }
  getCharityComments(id, params, config) {
    return this._adapter.get(endpoints.CHARITY_COMMENTS(id), params, { ...this._localConfig, ...config })
  }

  getOrganization(id, params, config) {
    return this._adapter.get(endpoints.ORGANIZATION(id), params, { ...this._localConfig, ...config })
  }
  getOrganizations(params, config) {
    return this._adapter.get(endpoints.ORGANIZATIONS(), params, { ...this._localConfig, ...config })
  }
  getOrganizationComments(id, params, config) {
    return this._adapter.get(endpoints.ORGANIZATION_COMMENTS(id), params, { ...this._localConfig, ...config })
  }

  getRecentNews(params, config) {
    return this._adapter.get(endpoints.RECENT_NEWS(), params, { ...this._localConfig, ...config })
  }

};

/* src/routes/map.svelte generated by Svelte v3.16.7 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (40:4) {#each organizations as o}
function create_each_block(ctx) {
	let current;

	const mapmarker = new MapMarker({
			props: {
				lat: /*o*/ ctx[2].location.lat,
				lon: /*o*/ ctx[2].location.lon
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(mapmarker.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(mapmarker.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(mapmarker, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const mapmarker_changes = {};
			if (dirty & /*organizations*/ 1) mapmarker_changes.lat = /*o*/ ctx[2].location.lat;
			if (dirty & /*organizations*/ 1) mapmarker_changes.lon = /*o*/ ctx[2].location.lon;
			mapmarker.$set(mapmarker_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(mapmarker.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(mapmarker.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(mapmarker, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(40:4) {#each organizations as o}",
		ctx
	});

	return block;
}

// (39:0) <Map onCreate={onCreate}>
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*organizations*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*organizations*/ 1) {
				each_value = /*organizations*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(39:0) <Map onCreate={onCreate}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let current;

	const map = new Map({
			props: {
				onCreate: /*onCreate*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			create_component(map.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
			claim_component(map.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - Map of organizations.";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(map, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const map_changes = {};

			if (dirty & /*$$scope, organizations*/ 33) {
				map_changes.$$scope = { dirty, ctx };
			}

			map.$set(map_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(map.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(map.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(map, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let organizations = [];

	async function onCreate(map, mapboxgl) {
		$$invalidate(0, organizations = (await api.getOrganizations()).body);

		for (let i = 0; i < organizations.length; i++) {
			const lng = organizations[i].location.lng;
			const lat = organizations[i].location.lat;
			new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
		}

		const getRange = (type, metric) => Math[type](...organizations.map(o => o.location[metric]));

		map.fitBounds([
			[getRange("min", "lng"), getRange("min", "lat")],
			[getRange("max", "lng"), getRange("max", "lat")]
		]);

		return map;
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("organizations" in $$props) $$invalidate(0, organizations = $$props.organizations);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*organizations*/ 1) {
			 console.log(organizations);
		}
	};

	return [organizations, onCreate];
}

class Map_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Map_1",
			options,
			id: create_fragment.name
		});
	}
}

export default Map_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLjJlNmFhZDQzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYnRvYS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy96bC1mZXRjaC9kaXN0L2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2FwaS5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbWFwLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBidG9hKHN0cikge1xuICAgIHZhciBidWZmZXI7XG5cbiAgICBpZiAoc3RyIGluc3RhbmNlb2YgQnVmZmVyKSB7XG4gICAgICBidWZmZXIgPSBzdHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHN0ci50b1N0cmluZygpLCAnYmluYXJ5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG59KCkpO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwiYnRvYVwiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJidG9hXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuemxGZXRjaD1lKHJlcXVpcmUoXCJidG9hXCIpKTp0LnpsRmV0Y2g9ZSh0Ll8pfSh3aW5kb3csKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiByKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgbj1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyxyKSxuLmw9ITAsbi5leHBvcnRzfXJldHVybiByLm09dCxyLmM9ZSxyLmQ9ZnVuY3Rpb24odCxlLG8pe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PXIodCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBuIGluIHQpci5kKG8sbixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG4pKTtyZXR1cm4gb30sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIlwiLHIoci5zPTApfShbZnVuY3Rpb24odCxlLHIpe2NvbnN0IG89cigxKSx7aGFuZGxlUmVzcG9uc2U6bixoYW5kbGVFcnJvcjpzfT1yKDUpLGk9KHQsZSk9Pntjb25zdCByPW8oT2JqZWN0LmFzc2lnbih7dXJsOnR9LGUpKTtyZXR1cm4gZmV0Y2goci51cmwscikudGhlbihuKS5jYXRjaChzKX0sYT1bXCJnZXRcIixcInBvc3RcIixcInB1dFwiLFwicGF0Y2hcIixcImRlbGV0ZVwiXTtmb3IoY29uc3QgdCBvZiBhKWlbdF09ZnVuY3Rpb24oZSxyKXtyZXR1cm4gcj1PYmplY3QuYXNzaWduKHttZXRob2Q6dH0sciksaShlLHIpfTt0LmV4cG9ydHM9aSx0LmV4cG9ydHMuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUscil7Y29uc3Qgbz10PT57aWYodClyZXR1cm4gT2JqZWN0LmVudHJpZXModCkucmVkdWNlKCh0LGUscik9Pntjb25zdFtvLG5dPWU7cmV0dXJuYCR7dH0kezA9PT1yP2Ake299PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG4pfWA6YCYke299PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG4pfWB9YH0sXCJcIil9O3QuZXhwb3J0cz0odD17fSk9Pntjb25zdCBlPU9iamVjdC5hc3NpZ24oe30sdCk7cmV0dXJuIGUudXJsPSh0PT57Y29uc3R7dXJsOmUscXVlcmllczpyfT10O3JldHVybiByP2Ake2V9PyR7byhyKX1gOmV9KShlKSxlLm1ldGhvZD1lLm1ldGhvZHx8XCJnZXRcIixlLmhlYWRlcnM9KCh7aGVhZGVyczp0PXt9LGJvZHk6ZSxtZXRob2Q6bz1cImdldFwiLGF1dGg6bn09e30pPT57XCJ1bmRlZmluZWRcIj09dHlwZW9mIEhlYWRlcnMmJnIoMik7Y29uc3Qgcz1uZXcgSGVhZGVycyh0KTtpZihzLmdldChcImNvbnRlbnQtdHlwZVwiKXx8XCJnZXRcIj09PW98fHMuc2V0KFwiY29udGVudC10eXBlXCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpLG4paWYoXCJvYmplY3RcIj09dHlwZW9mIG4pe2NvbnN0e3VzZXJuYW1lOnQscGFzc3dvcmQ6ZX09bjtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJVc2VybmFtZSByZXF1aXJlZCBmb3IgYmFzaWMgYXV0aGVudGljYXRpb25cIik7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiUGFzc3dvcmQgcmVxdWlyZWQgZm9yIGJhc2ljIGF1dGhlbnRpY2F0aW9uXCIpO2NvbnN0IG89d2luZG93LmJ0b2F8fHIoNCk7cy5zZXQoXCJBdXRob3JpemF0aW9uXCIsXCJCYXNpYyBcIitvKGAke3R9OiR7ZX1gKSl9ZWxzZSBzLnNldChcIkF1dGhvcml6YXRpb25cIixgQmVhcmVyICR7bn1gKTtyZXR1cm4gc30pKGUpLGUuYm9keT0odD0+e2lmKFwiZ2V0XCI9PT10Lm1ldGhvZClyZXR1cm47Y29uc3QgZT10LmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO3JldHVybiBlP2UuaW5jbHVkZXMoXCJ4LXd3dy1mb3JtLXVybGVuY29kZWRcIik/byh0LmJvZHkpOmUuaW5jbHVkZXMoXCJqc29uXCIpP0pTT04uc3RyaW5naWZ5KHQuYm9keSk6dC5ib2R5OnZvaWQgMH0pKGUpLGRlbGV0ZSBlLmF1dGgsZX19LGZ1bmN0aW9uKHQsZSxyKXtyKDMpLHQuZXhwb3J0cz1zZWxmLmZldGNoLmJpbmQoc2VsZil9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtyLnIoZSksci5kKGUsXCJIZWFkZXJzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSksci5kKGUsXCJSZXF1ZXN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KSksci5kKGUsXCJSZXNwb25zZVwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpLHIuZChlLFwiRE9NRXhjZXB0aW9uXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHZ9KSksci5kKGUsXCJmZXRjaFwiLChmdW5jdGlvbigpe3JldHVybiB4fSkpO3ZhciBvPXtzZWFyY2hQYXJhbXM6XCJVUkxTZWFyY2hQYXJhbXNcImluIHNlbGYsaXRlcmFibGU6XCJTeW1ib2xcImluIHNlbGYmJlwiaXRlcmF0b3JcImluIFN5bWJvbCxibG9iOlwiRmlsZVJlYWRlclwiaW4gc2VsZiYmXCJCbG9iXCJpbiBzZWxmJiZmdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEJsb2IsITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpLGZvcm1EYXRhOlwiRm9ybURhdGFcImluIHNlbGYsYXJyYXlCdWZmZXI6XCJBcnJheUJ1ZmZlclwiaW4gc2VsZn07aWYoby5hcnJheUJ1ZmZlcil2YXIgbj1bXCJbb2JqZWN0IEludDhBcnJheV1cIixcIltvYmplY3QgVWludDhBcnJheV1cIixcIltvYmplY3QgVWludDhDbGFtcGVkQXJyYXldXCIsXCJbb2JqZWN0IEludDE2QXJyYXldXCIsXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiLFwiW29iamVjdCBJbnQzMkFycmF5XVwiLFwiW29iamVjdCBVaW50MzJBcnJheV1cIixcIltvYmplY3QgRmxvYXQzMkFycmF5XVwiLFwiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdLHM9QXJyYXlCdWZmZXIuaXNWaWV3fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmbi5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSk+LTF9O2Z1bmN0aW9uIGkodCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0PVN0cmluZyh0KSksL1teYS16MC05XFwtIyQlJicqKy5eX2B8fl0vaS50ZXN0KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZVwiKTtyZXR1cm4gdC50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIGEodCl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0PVN0cmluZyh0KSksdH1mdW5jdGlvbiB1KHQpe3ZhciBlPXtuZXh0OmZ1bmN0aW9uKCl7dmFyIGU9dC5zaGlmdCgpO3JldHVybntkb25lOnZvaWQgMD09PWUsdmFsdWU6ZX19fTtyZXR1cm4gby5pdGVyYWJsZSYmKGVbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBlfSksZX1mdW5jdGlvbiBmKHQpe3RoaXMubWFwPXt9LHQgaW5zdGFuY2VvZiBmP3QuZm9yRWFjaCgoZnVuY3Rpb24odCxlKXt0aGlzLmFwcGVuZChlLHQpfSksdGhpcyk6QXJyYXkuaXNBcnJheSh0KT90LmZvckVhY2goKGZ1bmN0aW9uKHQpe3RoaXMuYXBwZW5kKHRbMF0sdFsxXSl9KSx0aGlzKTp0JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5mb3JFYWNoKChmdW5jdGlvbihlKXt0aGlzLmFwcGVuZChlLHRbZV0pfSksdGhpcyl9ZnVuY3Rpb24gYyh0KXtpZih0LmJvZHlVc2VkKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFwiQWxyZWFkeSByZWFkXCIpKTt0LmJvZHlVc2VkPSEwfWZ1bmN0aW9uIGQodCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihlLHIpe3Qub25sb2FkPWZ1bmN0aW9uKCl7ZSh0LnJlc3VsdCl9LHQub25lcnJvcj1mdW5jdGlvbigpe3IodC5lcnJvcil9fSkpfWZ1bmN0aW9uIGgodCl7dmFyIGU9bmV3IEZpbGVSZWFkZXIscj1kKGUpO3JldHVybiBlLnJlYWRBc0FycmF5QnVmZmVyKHQpLHJ9ZnVuY3Rpb24gbCh0KXtpZih0LnNsaWNlKXJldHVybiB0LnNsaWNlKDApO3ZhciBlPW5ldyBVaW50OEFycmF5KHQuYnl0ZUxlbmd0aCk7cmV0dXJuIGUuc2V0KG5ldyBVaW50OEFycmF5KHQpKSxlLmJ1ZmZlcn1mdW5jdGlvbiBwKCl7cmV0dXJuIHRoaXMuYm9keVVzZWQ9ITEsdGhpcy5faW5pdEJvZHk9ZnVuY3Rpb24odCl7dmFyIGU7dGhpcy5fYm9keUluaXQ9dCx0P1wic3RyaW5nXCI9PXR5cGVvZiB0P3RoaXMuX2JvZHlUZXh0PXQ6by5ibG9iJiZCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpP3RoaXMuX2JvZHlCbG9iPXQ6by5mb3JtRGF0YSYmRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCk/dGhpcy5fYm9keUZvcm1EYXRhPXQ6by5zZWFyY2hQYXJhbXMmJlVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KT90aGlzLl9ib2R5VGV4dD10LnRvU3RyaW5nKCk6by5hcnJheUJ1ZmZlciYmby5ibG9iJiYoKGU9dCkmJkRhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGUpKT8odGhpcy5fYm9keUFycmF5QnVmZmVyPWwodC5idWZmZXIpLHRoaXMuX2JvZHlJbml0PW5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSk6by5hcnJheUJ1ZmZlciYmKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpfHxzKHQpKT90aGlzLl9ib2R5QXJyYXlCdWZmZXI9bCh0KTp0aGlzLl9ib2R5VGV4dD10PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTp0aGlzLl9ib2R5VGV4dD1cIlwiLHRoaXMuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIil8fChcInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLmhlYWRlcnMuc2V0KFwiY29udGVudC10eXBlXCIsXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik6dGhpcy5fYm9keUJsb2ImJnRoaXMuX2JvZHlCbG9iLnR5cGU/dGhpcy5oZWFkZXJzLnNldChcImNvbnRlbnQtdHlwZVwiLHRoaXMuX2JvZHlCbG9iLnR5cGUpOm8uc2VhcmNoUGFyYW1zJiZVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCkmJnRoaXMuaGVhZGVycy5zZXQoXCJjb250ZW50LXR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCIpKX0sby5ibG9iJiYodGhpcy5ibG9iPWZ1bmN0aW9uKCl7dmFyIHQ9Yyh0aGlzKTtpZih0KXJldHVybiB0O2lmKHRoaXMuX2JvZHlCbG9iKXJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpO2lmKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSk7aWYodGhpcy5fYm9keUZvcm1EYXRhKXRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYlwiKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKX0sdGhpcy5hcnJheUJ1ZmZlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ib2R5QXJyYXlCdWZmZXI/Yyh0aGlzKXx8UHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcik6dGhpcy5ibG9iKCkudGhlbihoKX0pLHRoaXMudGV4dD1mdW5jdGlvbigpe3ZhciB0LGUscixvPWModGhpcyk7aWYobylyZXR1cm4gbztpZih0aGlzLl9ib2R5QmxvYilyZXR1cm4gdD10aGlzLl9ib2R5QmxvYixlPW5ldyBGaWxlUmVhZGVyLHI9ZChlKSxlLnJlYWRBc1RleHQodCkscjtpZih0aGlzLl9ib2R5QXJyYXlCdWZmZXIpcmV0dXJuIFByb21pc2UucmVzb2x2ZShmdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IFVpbnQ4QXJyYXkodCkscj1uZXcgQXJyYXkoZS5sZW5ndGgpLG89MDtvPGUubGVuZ3RoO28rKylyW29dPVN0cmluZy5mcm9tQ2hhckNvZGUoZVtvXSk7cmV0dXJuIHIuam9pbihcIlwiKX0odGhpcy5fYm9keUFycmF5QnVmZmVyKSk7aWYodGhpcy5fYm9keUZvcm1EYXRhKXRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dFwiKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KX0sby5mb3JtRGF0YSYmKHRoaXMuZm9ybURhdGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50ZXh0KCkudGhlbihtKX0pLHRoaXMuanNvbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpfSx0aGlzfWYucHJvdG90eXBlLmFwcGVuZD1mdW5jdGlvbih0LGUpe3Q9aSh0KSxlPWEoZSk7dmFyIHI9dGhpcy5tYXBbdF07dGhpcy5tYXBbdF09cj9yK1wiLCBcIitlOmV9LGYucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbih0KXtkZWxldGUgdGhpcy5tYXBbaSh0KV19LGYucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdD1pKHQpLHRoaXMuaGFzKHQpP3RoaXMubWFwW3RdOm51bGx9LGYucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkoaSh0KSl9LGYucHJvdG90eXBlLnNldD1mdW5jdGlvbih0LGUpe3RoaXMubWFwW2kodCldPWEoZSl9LGYucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gdGhpcy5tYXApdGhpcy5tYXAuaGFzT3duUHJvcGVydHkocikmJnQuY2FsbChlLHRoaXMubWFwW3JdLHIsdGhpcyl9LGYucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKChmdW5jdGlvbihlLHIpe3QucHVzaChyKX0pKSx1KHQpfSxmLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKChmdW5jdGlvbihlKXt0LnB1c2goZSl9KSksdSh0KX0sZi5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiB0aGlzLmZvckVhY2goKGZ1bmN0aW9uKGUscil7dC5wdXNoKFtyLGVdKX0pKSx1KHQpfSxvLml0ZXJhYmxlJiYoZi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1mLnByb3RvdHlwZS5lbnRyaWVzKTt2YXIgeT1bXCJERUxFVEVcIixcIkdFVFwiLFwiSEVBRFwiLFwiT1BUSU9OU1wiLFwiUE9TVFwiLFwiUFVUXCJdO2Z1bmN0aW9uIGIodCxlKXt2YXIgcixvLG49KGU9ZXx8e30pLmJvZHk7aWYodCBpbnN0YW5jZW9mIGIpe2lmKHQuYm9keVVzZWQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFscmVhZHkgcmVhZFwiKTt0aGlzLnVybD10LnVybCx0aGlzLmNyZWRlbnRpYWxzPXQuY3JlZGVudGlhbHMsZS5oZWFkZXJzfHwodGhpcy5oZWFkZXJzPW5ldyBmKHQuaGVhZGVycykpLHRoaXMubWV0aG9kPXQubWV0aG9kLHRoaXMubW9kZT10Lm1vZGUsdGhpcy5zaWduYWw9dC5zaWduYWwsbnx8bnVsbD09dC5fYm9keUluaXR8fChuPXQuX2JvZHlJbml0LHQuYm9keVVzZWQ9ITApfWVsc2UgdGhpcy51cmw9U3RyaW5nKHQpO2lmKHRoaXMuY3JlZGVudGlhbHM9ZS5jcmVkZW50aWFsc3x8dGhpcy5jcmVkZW50aWFsc3x8XCJzYW1lLW9yaWdpblwiLCFlLmhlYWRlcnMmJnRoaXMuaGVhZGVyc3x8KHRoaXMuaGVhZGVycz1uZXcgZihlLmhlYWRlcnMpKSx0aGlzLm1ldGhvZD0ocj1lLm1ldGhvZHx8dGhpcy5tZXRob2R8fFwiR0VUXCIsbz1yLnRvVXBwZXJDYXNlKCkseS5pbmRleE9mKG8pPi0xP286ciksdGhpcy5tb2RlPWUubW9kZXx8dGhpcy5tb2RlfHxudWxsLHRoaXMuc2lnbmFsPWUuc2lnbmFsfHx0aGlzLnNpZ25hbCx0aGlzLnJlZmVycmVyPW51bGwsKFwiR0VUXCI9PT10aGlzLm1ldGhvZHx8XCJIRUFEXCI9PT10aGlzLm1ldGhvZCkmJm4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzXCIpO3RoaXMuX2luaXRCb2R5KG4pfWZ1bmN0aW9uIG0odCl7dmFyIGU9bmV3IEZvcm1EYXRhO3JldHVybiB0LnRyaW0oKS5zcGxpdChcIiZcIikuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYodCl7dmFyIHI9dC5zcGxpdChcIj1cIiksbz1yLnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csXCIgXCIpLG49ci5qb2luKFwiPVwiKS5yZXBsYWNlKC9cXCsvZyxcIiBcIik7ZS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG8pLGRlY29kZVVSSUNvbXBvbmVudChuKSl9fSkpLGV9ZnVuY3Rpb24gdyh0LGUpe2V8fChlPXt9KSx0aGlzLnR5cGU9XCJkZWZhdWx0XCIsdGhpcy5zdGF0dXM9dm9pZCAwPT09ZS5zdGF0dXM/MjAwOmUuc3RhdHVzLHRoaXMub2s9dGhpcy5zdGF0dXM+PTIwMCYmdGhpcy5zdGF0dXM8MzAwLHRoaXMuc3RhdHVzVGV4dD1cInN0YXR1c1RleHRcImluIGU/ZS5zdGF0dXNUZXh0OlwiT0tcIix0aGlzLmhlYWRlcnM9bmV3IGYoZS5oZWFkZXJzKSx0aGlzLnVybD1lLnVybHx8XCJcIix0aGlzLl9pbml0Qm9keSh0KX1iLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgYih0aGlzLHtib2R5OnRoaXMuX2JvZHlJbml0fSl9LHAuY2FsbChiLnByb3RvdHlwZSkscC5jYWxsKHcucHJvdG90eXBlKSx3LnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgdyh0aGlzLl9ib2R5SW5pdCx7c3RhdHVzOnRoaXMuc3RhdHVzLHN0YXR1c1RleHQ6dGhpcy5zdGF0dXNUZXh0LGhlYWRlcnM6bmV3IGYodGhpcy5oZWFkZXJzKSx1cmw6dGhpcy51cmx9KX0sdy5lcnJvcj1mdW5jdGlvbigpe3ZhciB0PW5ldyB3KG51bGwse3N0YXR1czowLHN0YXR1c1RleHQ6XCJcIn0pO3JldHVybiB0LnR5cGU9XCJlcnJvclwiLHR9O3ZhciBnPVszMDEsMzAyLDMwMywzMDcsMzA4XTt3LnJlZGlyZWN0PWZ1bmN0aW9uKHQsZSl7aWYoLTE9PT1nLmluZGV4T2YoZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHN0YXR1cyBjb2RlXCIpO3JldHVybiBuZXcgdyhudWxsLHtzdGF0dXM6ZSxoZWFkZXJzOntsb2NhdGlvbjp0fX0pfTt2YXIgdj1zZWxmLkRPTUV4Y2VwdGlvbjt0cnl7bmV3IHZ9Y2F0Y2godCl7KHY9ZnVuY3Rpb24odCxlKXt0aGlzLm1lc3NhZ2U9dCx0aGlzLm5hbWU9ZTt2YXIgcj1FcnJvcih0KTt0aGlzLnN0YWNrPXIuc3RhY2t9KS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpLHYucHJvdG90eXBlLmNvbnN0cnVjdG9yPXZ9ZnVuY3Rpb24geCh0LGUpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24ocixuKXt2YXIgcz1uZXcgYih0LGUpO2lmKHMuc2lnbmFsJiZzLnNpZ25hbC5hYm9ydGVkKXJldHVybiBuKG5ldyB2KFwiQWJvcnRlZFwiLFwiQWJvcnRFcnJvclwiKSk7dmFyIGk9bmV3IFhNTEh0dHBSZXF1ZXN0O2Z1bmN0aW9uIGEoKXtpLmFib3J0KCl9aS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgdCxlLG89e3N0YXR1czppLnN0YXR1cyxzdGF0dXNUZXh0Omkuc3RhdHVzVGV4dCxoZWFkZXJzOih0PWkuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCl8fFwiXCIsZT1uZXcgZix0LnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csXCIgXCIpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIHI9dC5zcGxpdChcIjpcIiksbz1yLnNoaWZ0KCkudHJpbSgpO2lmKG8pe3ZhciBuPXIuam9pbihcIjpcIikudHJpbSgpO2UuYXBwZW5kKG8sbil9fSkpLGUpfTtvLnVybD1cInJlc3BvbnNlVVJMXCJpbiBpP2kucmVzcG9uc2VVUkw6by5oZWFkZXJzLmdldChcIlgtUmVxdWVzdC1VUkxcIik7dmFyIG49XCJyZXNwb25zZVwiaW4gaT9pLnJlc3BvbnNlOmkucmVzcG9uc2VUZXh0O3IobmV3IHcobixvKSl9LGkub25lcnJvcj1mdW5jdGlvbigpe24obmV3IFR5cGVFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWRcIikpfSxpLm9udGltZW91dD1mdW5jdGlvbigpe24obmV3IFR5cGVFcnJvcihcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWRcIikpfSxpLm9uYWJvcnQ9ZnVuY3Rpb24oKXtuKG5ldyB2KFwiQWJvcnRlZFwiLFwiQWJvcnRFcnJvclwiKSl9LGkub3BlbihzLm1ldGhvZCxzLnVybCwhMCksXCJpbmNsdWRlXCI9PT1zLmNyZWRlbnRpYWxzP2kud2l0aENyZWRlbnRpYWxzPSEwOlwib21pdFwiPT09cy5jcmVkZW50aWFscyYmKGkud2l0aENyZWRlbnRpYWxzPSExKSxcInJlc3BvbnNlVHlwZVwiaW4gaSYmby5ibG9iJiYoaS5yZXNwb25zZVR5cGU9XCJibG9iXCIpLHMuaGVhZGVycy5mb3JFYWNoKChmdW5jdGlvbih0LGUpe2kuc2V0UmVxdWVzdEhlYWRlcihlLHQpfSkpLHMuc2lnbmFsJiYocy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsYSksaS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aS5yZWFkeVN0YXRlJiZzLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIixhKX0pLGkuc2VuZCh2b2lkIDA9PT1zLl9ib2R5SW5pdD9udWxsOnMuX2JvZHlJbml0KX0pKX14LnBvbHlmaWxsPSEwLHNlbGYuZmV0Y2h8fChzZWxmLmZldGNoPXgsc2VsZi5IZWFkZXJzPWYsc2VsZi5SZXF1ZXN0PWIsc2VsZi5SZXNwb25zZT13KX0sZnVuY3Rpb24oZSxyKXtlLmV4cG9ydHM9dH0sZnVuY3Rpb24odCxlKXtjb25zdCByPSh0LGUpPT57Y29uc3Qgcj0oXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jbG9uZT90LmNsb25lKCk6dm9pZCAwKXx8dDtyZXR1cm4gdFtlXSgpLnRoZW4odD0+KCh0LGUpPT57Y29uc3Qgcj17Ym9keTplLGhlYWRlcnM6KHQ9PnQuaGVhZGVycy5lbnRyaWVzPyh0PT57Y29uc3QgZT17fTtmb3IoY29uc3RbcixvXW9mIHQuaGVhZGVycy5lbnRyaWVzKCkpZVtyXT1vO3JldHVybiBlfSkodCk6KHQ9Pntjb25zdCBlPXt9LHI9dC5oZWFkZXJzLl9oZWFkZXJzO2Zvcihjb25zdCB0IGluIHIpZVt0XT1yW3RdLmpvaW4oXCJcIik7cmV0dXJuIGV9KSh0KSkodCkscmVzcG9uc2U6dCxzdGF0dXM6dC5zdGF0dXMsc3RhdHVzVGV4dDp0LnN0YXR1c1RleHR9O3JldHVybiB0Lm9rP1Byb21pc2UucmVzb2x2ZShyKTpQcm9taXNlLnJlamVjdChyKX0pKHIsdCkpfTt0LmV4cG9ydHM9e2hhbmRsZVJlc3BvbnNlOnQ9Pntjb25zdCBlPXQuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIik7aWYoZS5pbmNsdWRlcyhcImpzb25cIikpcmV0dXJuIHIodCxcImpzb25cIik7aWYoZS5pbmNsdWRlcyhcInRleHRcIikpcmV0dXJuIHIodCxcInRleHRcIik7aWYoZS5pbmNsdWRlcyhcImltYWdlXCIpKXJldHVybiByKHQsXCJibG9iXCIpO3Rocm93IG5ldyBFcnJvcihgemxGZXRjaCBkb2VzIG5vdCBzdXBwb3J0IGNvbnRlbnQtdHlwZSAke2V9IHlldGApfSxoYW5kbGVFcnJvcjp0PT5cIkZhaWxlZCB0byBmZXRjaFwiPT09dC5tZXNzYWdlP1Byb21pc2UucmVqZWN0KHtlcnJvcjp0fSk6UHJvbWlzZS5yZWplY3QodCl9fV0pfSkpOyIsImltcG9ydCB6bEZldGNoIGZyb20gJ3psLWZldGNoJyAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWxsd2svemwtZmV0Y2hcblxuLyoqXG4gKlxuICogQGRlc2NyaXB0aW9uIEFQSSBVUkxzIGJ1aWxkZXJzLlxuICovXG5leHBvcnQgY29uc3QgZW5kcG9pbnRzID0ge1xuICBCQVNFX1VSTDogJy4vbW9jay8nLFxuXG4gIENIQVJJVFk6IChpZCkgPT4gYCR7ZW5kcG9pbnRzLkJBU0VfVVJMfWNoYXJpdHkuanNvbj9pZD0ke2lkfWAsXG4gIENIQVJJVElFUzogKCkgPT4gYCR7ZW5kcG9pbnRzLkJBU0VfVVJMfWNoYXJpdGllcy5qc29uYCxcbiAgQ0hBUklUWV9DT01NRU5UUzogKGlkKSA9PiBgJHtlbmRwb2ludHMuQkFTRV9VUkx9Y2hhcml0eV9jb21tZW50cy5qc29uP2lkPSR7aWR9YCxcblxuICBPUkdBTklaQVRJT046IChpZCkgPT4gYCR7ZW5kcG9pbnRzLkJBU0VfVVJMfW9yZ2FuaXphdGlvbi5qc29uP2lkPSR7aWR9YCxcbiAgT1JHQU5JWkFUSU9OUzogKCkgPT4gYCR7ZW5kcG9pbnRzLkJBU0VfVVJMfW9yZ2FuaXphdGlvbnMuanNvbmAsXG4gIE9SR0FOSVpBVElPTl9DT01NRU5UUzogKGlkKSA9PiBgJHtlbmRwb2ludHMuQkFTRV9VUkx9b3JnYW5pemF0aW9uX2NvbW1lbnRzLmpzb24/aWQ9JHtpZH1gLFxuXG4gIFJFQ0VOVF9ORVdTOiAoKSA9PiBgJHtlbmRwb2ludHMuQkFTRV9VUkx9cmVjZW50X25ld3MuanNvbmAsXG59XG5cbi8qKlxuICpcbiAqIEBkZXNjcmlwdGlvbiBBUEkgY2xhc3MgZm9yIG1ha2luZyBSRVNUIEFQSSByZXF1ZXN0cyBpbiBhIGJyb3dzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2xvY2FsQ29uZmlnID0ge31cbiAgICB0aGlzLl9hZGFwdGVyID0gemxGZXRjaFxuICB9XG5cbiAgZ2V0Q2hhcml0eShpZCwgcGFyYW1zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXQoZW5kcG9pbnRzLkNIQVJJVFkoaWQpLCBwYXJhbXMsIHsgLi4udGhpcy5fbG9jYWxDb25maWcsIC4uLmNvbmZpZyB9KVxuICB9XG4gIGdldENoYXJpdGllcyhwYXJhbXMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldChlbmRwb2ludHMuQ0hBUklUSUVTKCksIHBhcmFtcywgeyAuLi50aGlzLl9sb2NhbENvbmZpZywgLi4uY29uZmlnIH0pXG4gIH1cbiAgZ2V0Q2hhcml0eUNvbW1lbnRzKGlkLCBwYXJhbXMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldChlbmRwb2ludHMuQ0hBUklUWV9DT01NRU5UUyhpZCksIHBhcmFtcywgeyAuLi50aGlzLl9sb2NhbENvbmZpZywgLi4uY29uZmlnIH0pXG4gIH1cblxuICBnZXRPcmdhbml6YXRpb24oaWQsIHBhcmFtcywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZ2V0KGVuZHBvaW50cy5PUkdBTklaQVRJT04oaWQpLCBwYXJhbXMsIHsgLi4udGhpcy5fbG9jYWxDb25maWcsIC4uLmNvbmZpZyB9KVxuICB9XG4gIGdldE9yZ2FuaXphdGlvbnMocGFyYW1zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXQoZW5kcG9pbnRzLk9SR0FOSVpBVElPTlMoKSwgcGFyYW1zLCB7IC4uLnRoaXMuX2xvY2FsQ29uZmlnLCAuLi5jb25maWcgfSlcbiAgfVxuICBnZXRPcmdhbml6YXRpb25Db21tZW50cyhpZCwgcGFyYW1zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXQoZW5kcG9pbnRzLk9SR0FOSVpBVElPTl9DT01NRU5UUyhpZCksIHBhcmFtcywgeyAuLi50aGlzLl9sb2NhbENvbmZpZywgLi4uY29uZmlnIH0pXG4gIH1cblxuICBnZXRSZWNlbnROZXdzKHBhcmFtcywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZ2V0KGVuZHBvaW50cy5SRUNFTlRfTkVXUygpLCBwYXJhbXMsIHsgLi4udGhpcy5fbG9jYWxDb25maWcsIC4uLmNvbmZpZyB9KVxuICB9XG5cbn1cbiIsIjxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+Q2hhcml0aWZ5IC0gTWFwIG9mIG9yZ2FuaXphdGlvbnMuPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMnXG4gICAgaW1wb3J0IHsgTWFwLCBNYXBNYXJrZXIgfSBmcm9tICcuLi9sYXlvdXRzJ1xuXG4gICAgbGV0IG9yZ2FuaXphdGlvbnMgPSBbXVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DcmVhdGUobWFwLCBtYXBib3hnbCkge1xuICAgICAgICBvcmdhbml6YXRpb25zID0gKGF3YWl0IGFwaS5nZXRPcmdhbml6YXRpb25zKCkpLmJvZHlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IG9yZ2FuaXphdGlvbnNbaV0ubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBjb25zdCBsYXQgPSBvcmdhbml6YXRpb25zW2ldLmxvY2F0aW9uLmxhdFxuXG4gICAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKClcbiAgICAgICAgICAgICAgICAgICAgLnNldExuZ0xhdChbbG5nLCBsYXRdKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8obWFwKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0UmFuZ2UgPSAodHlwZSwgbWV0cmljKSA9PiBNYXRoW3R5cGVdKC4uLm9yZ2FuaXphdGlvbnMubWFwKG8gPT4gby5sb2NhdGlvblttZXRyaWNdKSlcblxuICAgICAgICBtYXAuZml0Qm91bmRzKFtcbiAgICAgICAgICAgIFtnZXRSYW5nZSgnbWluJywgJ2xuZycpLCBnZXRSYW5nZSgnbWluJywgJ2xhdCcpXSxcbiAgICAgICAgICAgIFtnZXRSYW5nZSgnbWF4JywgJ2xuZycpLCBnZXRSYW5nZSgnbWF4JywgJ2xhdCcpXVxuICAgICAgICBdKTtcblxuICAgICAgICByZXR1cm4gbWFwXG4gICAgfVxuXG4gICAgJDogY29uc29sZS5sb2cob3JnYW5pemF0aW9ucylcbjwvc2NyaXB0PlxuXG48TWFwIG9uQ3JlYXRlPXtvbkNyZWF0ZX0+XG4gICAgeyNlYWNoIG9yZ2FuaXphdGlvbnMgYXMgb31cbiAgICAgICAgPE1hcE1hcmtlciBsYXQ9e28ubG9jYXRpb24ubGF0fSBsb249e28ubG9jYXRpb24ubG9ufS8+XG4gICAgey9lYWNofVxuPC9NYXA+XG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsWUFBWTs7RUFHWCxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDakIsSUFBSSxNQUFNLENBQUM7O0lBRVgsSUFBSSxHQUFHLFlBQVksTUFBTSxFQUFFO01BQ3pCLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FDZCxNQUFNO01BQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEOztJQUVELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUNsQzs7RUFFRCxjQUFjLEdBQUcsSUFBSSxDQUFDO0NBQ3ZCLEVBQUUsRUFBRTs7OztBQ2hCTCxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQWtELGNBQWMsQ0FBQyxDQUFDLENBQUNBLElBQWUsQ0FBQyxDQUFzSSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsNEJBQTRCLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxFQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsaURBQWlELENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsd0JBQXdCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxz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
