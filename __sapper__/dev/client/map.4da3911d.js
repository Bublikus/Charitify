import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, V as onMount, X as onDestroy, m as create_slot, u as get_slot_context, v as get_slot_changes, w as transition_in, x as transition_out, A as text, B as claim_text, k as insert_dev, f as detach_dev, p as space, e as element, r as claim_space, c as claim_element, b as children, g as attr_dev, h as add_location, l as append_dev, J as check_outros, Y as binding_callbacks, z as globals, I as group_outros } from './index.272f3989.js';

/* src/routes/map.svelte generated by Svelte v3.16.7 */

const { document: document_1 } = globals;
const file = "src/routes/map.svelte";

// (81:4) {#if map}
function create_if_block_1(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 32) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(81:4) {#if map}",
		ctx
	});

	return block;
}

// (85:4) {#if mapError}
function create_if_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Map error");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Map error");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(85:4) {#if mapError}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let t1;
	let current;
	let if_block0 = /*map*/ ctx[0] && create_if_block_1(ctx);
	let if_block1 = /*mapError*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			if (if_block0) if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			if (if_block0) if_block0.l(section_nodes);
			t1 = claim_space(section_nodes);
			if (if_block1) if_block1.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Charitify - Map of organizations.";
			attr_dev(section, "class", "svelte-1tw6as9");
			add_location(section, file, 79, 0, 1845);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			if (if_block0) if_block0.m(section, null);
			append_dev(section, t1);
			if (if_block1) if_block1.m(section, null);
			/*section_binding*/ ctx[7](section);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*map*/ ctx[0]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
					transition_in(if_block0, 1);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(section, t1);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*mapError*/ ctx[1]) {
				if (!if_block1) {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(section, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			/*section_binding*/ ctx[7](null);
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
	let map;
	let mapError;
	let container;

	function renderMap() {
		$$invalidate(0, map = new mapboxgl.Map({
				container,
				style: "mapbox://styles/mapbox/streets-v11"
			}));

		for (let i = 0; i < 50; i += 1) {
			const lng = Math.random() * 360 - 180;
			const lat = Math.random() * 180 - 90;
			new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
		}

		return map;
	}

	function createMap() {
		const scriptTag = document.createElement("script");
		scriptTag.type = "text/javascript";
		scriptTag.src = "https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.js";
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css";

		scriptTag.onload = () => {
			if ("mapboxgl" in window) {
				$$invalidate(1, mapError = true);
				return;
			}

			$$invalidate(1, mapError = false);
			const token = "pk.eyJ1IjoiYnVibGlrIiwiYSI6ImNrNXpxdzgxbTAwNnczbGxweG0wcTV3cjAifQ.rt1peLjCQHZUkrM4AWz5Mw";
			mapboxgl.accessToken = token;
			link.onload = () => renderMap();
			document.head.appendChild(link);
		};

		scriptTag.onerror = () => {
			$$invalidate(1, mapError = true);
		};

		document.body.appendChild(scriptTag);
	}

	onMount(() => {
		if ("mapboxgl" in window && !mapError) {
			renderMap();
		} else {
			createMap();
		}
	});

	onDestroy(() => {
		map && map.remove();
	});

	let { $$slots = {}, $$scope } = $$props;

	function section_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(2, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("map" in $$props) $$invalidate(0, map = $$props.map);
		if ("mapError" in $$props) $$invalidate(1, mapError = $$props.mapError);
		if ("container" in $$props) $$invalidate(2, container = $$props.container);
	};

	return [
		map,
		mapError,
		container,
		renderMap,
		createMap,
		$$scope,
		$$slots,
		section_binding
	];
}

class Map extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Map",
			options,
			id: create_fragment.name
		});
	}
}

export default Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLjRkYTM5MTFkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL21hcC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5DaGFyaXRpZnkgLSBNYXAgb2Ygb3JnYW5pemF0aW9ucy48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHN0eWxlPlxuICAgIHNlY3Rpb24ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50LCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnXG5cbiAgICBsZXQgbWFwXG4gICAgbGV0IG1hcEVycm9yXG4gICAgbGV0IGNvbnRhaW5lclxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWFwKCkge1xuICAgICAgICBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1MDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBsbmcgPSBNYXRoLnJhbmRvbSgpICogMzYwIC0gMTgwXG4gICAgICAgICAgICBjb25zdCBsYXQgPSBNYXRoLnJhbmRvbSgpICogMTgwIC0gOTBcblxuICAgICAgICAgICAgbmV3IG1hcGJveGdsLk1hcmtlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRMbmdMYXQoW2xuZywgbGF0XSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFwKCkge1xuICAgICAgICBjb25zdCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgICBzY3JpcHRUYWcudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjEuNy4wL21hcGJveC1nbC5qcydcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnXG4gICAgICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MS43LjAvbWFwYm94LWdsLmNzcydcblxuICAgICAgICBzY3JpcHRUYWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCdtYXBib3hnbCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgbWFwRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcEVycm9yID0gZmFsc2VcblxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSAncGsuZXlKMUlqb2lZblZpYkdscklpd2lZU0k2SW1Ock5YcHhkemd4YlRBd05uY3piR3h3ZUcwd2NUVjNjakFpZlEucnQxcGVMakNRSFpVa3JNNEFXejVNdydcbiAgICAgICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdG9rZW5cblxuICAgICAgICAgICAgbGluay5vbmxvYWQgPSAoKSA9PiByZW5kZXJNYXAoKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHRUYWcub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIG1hcEVycm9yID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpXG4gICAgfVxuXG4gICAgb25Nb3VudCgoKSA9PiB7XG4gICAgICAgIGlmICgnbWFwYm94Z2wnIGluIHdpbmRvdyAmJiAhbWFwRXJyb3IpIHtcbiAgICAgICAgICAgIHJlbmRlck1hcCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVNYXAoKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgICAgIG1hcCAmJiBtYXAucmVtb3ZlKClcbiAgICB9KVxuPC9zY3JpcHQ+XG5cbjxzZWN0aW9uIGJpbmQ6dGhpcz17Y29udGFpbmVyfT5cbiAgICB7I2lmIG1hcH1cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIHsvaWZ9XG5cbiAgICB7I2lmIG1hcEVycm9yfVxuICAgICAgICBNYXAgZXJyb3JcbiAgICB7L2lmfVxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFvRlMsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FqRlQsR0FBRztLQUNILFFBQVE7S0FDUixTQUFTOztVQUVKLFNBQVM7a0JBQ2QsR0FBRyxPQUFPLFFBQVEsQ0FBQyxHQUFHO0lBQ2xCLFNBQVM7SUFDVCxLQUFLLEVBQUUsb0NBQW9DOzs7V0FHdEMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHO1NBQy9CLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO09BRWhDLFFBQVEsQ0FBQyxNQUFNLEdBQ1YsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQ25CLEtBQUssQ0FBQyxHQUFHOzs7U0FFZixHQUFHOzs7VUFHTCxTQUFTO1FBQ1IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUTtFQUNqRCxTQUFTLENBQUMsSUFBSSxHQUFHLGlCQUFpQjtFQUNsQyxTQUFTLENBQUMsR0FBRyxHQUFHLHlEQUF5RDtRQUVuRSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNO0VBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWTtFQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLDBEQUEwRDs7RUFFdEUsU0FBUyxDQUFDLE1BQU07T0FDUixVQUFVLElBQUksTUFBTTtvQkFDcEIsUUFBUSxHQUFHLElBQUk7Ozs7bUJBSW5CLFFBQVEsR0FBRyxLQUFLO1NBRVYsS0FBSyxHQUFHLDBGQUEwRjtHQUN4RyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUs7R0FFNUIsSUFBSSxDQUFDLE1BQU0sU0FBUyxTQUFTO0dBRTdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7OztFQUdsQyxTQUFTLENBQUMsT0FBTzttQkFDYixRQUFRLEdBQUcsSUFBSTs7O0VBR25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7OztDQUd2QyxPQUFPO01BQ0MsVUFBVSxJQUFJLE1BQU0sS0FBSyxRQUFRO0dBQ2pDLFNBQVM7O0dBRVQsU0FBUzs7OztDQUlqQixTQUFTO0VBQ0wsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
