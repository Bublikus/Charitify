import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, V as onMount, m as create_slot, u as get_slot_context, v as get_slot_changes, w as transition_in, x as transition_out, p as space, e as element, r as claim_space, c as claim_element, b as children, f as detach_dev, g as attr_dev, h as add_location, k as insert_dev, J as check_outros, Y as binding_callbacks, z as globals, I as group_outros } from './index.b5b1b293.js';

/* src/routes/map.svelte generated by Svelte v3.16.7 */

const { document: document_1 } = globals;
const file = "src/routes/map.svelte";

// (54:4) {#if map}
function create_if_block(ctx) {
	let current;
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

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
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 4) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
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
		id: create_if_block.name,
		type: "if",
		source: "(54:4) {#if map}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let section;
	let current;
	let if_block = /*map*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			t = space();
			section = element("section");
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			if (if_block) if_block.l(section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Charitify - Map of organizations.";
			attr_dev(section, "class", "svelte-1tw6as9");
			add_location(section, file, 52, 0, 1284);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, section, anchor);
			if (if_block) if_block.m(section, null);
			/*section_binding*/ ctx[4](section);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*map*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(section, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(section);
			if (if_block) if_block.d();
			/*section_binding*/ ctx[4](null);
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
	let container;

	onMount(async () => {
		const { default: mapboxgl } = await import('./mapbox-gl.5fb802d9.js');
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css";
		const token = "pk.eyJ1IjoiYnVibGlrIiwiYSI6ImNrNXpxdzgxbTAwNnczbGxweG0wcTV3cjAifQ.rt1peLjCQHZUkrM4AWz5Mw";
		mapboxgl.accessToken = token;

		link.onload = () => {
			$$invalidate(0, map = new mapboxgl.Map({
					container,
					style: "mapbox://styles/mapbox/streets-v11"
				}));

			for (let i = 0; i < 100; i += 1) {
				const lng = Math.random() * 360 - 180;
				const lat = Math.random() * 180 - 90;
				new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
			}
		};

		document.head.appendChild(link);

		return () => {
			map.remove();
			link.parentNode.removeChild(link);
		};
	});

	let { $$slots = {}, $$scope } = $$props;

	function section_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(1, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("map" in $$props) $$invalidate(0, map = $$props.map);
		if ("container" in $$props) $$invalidate(1, container = $$props.container);
	};

	return [map, container, $$scope, $$slots, section_binding];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmE5MGRhYjhmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL21hcC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5DaGFyaXRpZnkgLSBNYXAgb2Ygb3JnYW5pemF0aW9ucy48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHN0eWxlPlxuICAgIHNlY3Rpb24ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSdcblxuICAgIGxldCBtYXBcbiAgICBsZXQgY29udGFpbmVyXG5cbiAgICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0OiBtYXBib3hnbCB9ID0gYXdhaXQgaW1wb3J0KCdtYXBib3gtZ2wnKVxuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjEuNy4wL21hcGJveC1nbC5jc3MnO1xuXG4gICAgICAgIGNvbnN0IHRva2VuID0gJ3BrLmV5SjFJam9pWW5WaWJHbHJJaXdpWVNJNkltTnJOWHB4ZHpneGJUQXdObmN6Ykd4d2VHMHdjVFYzY2pBaWZRLnJ0MXBlTGpDUUhaVWtyTTRBV3o1TXcnXG5cbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0b2tlblxuXG4gICAgICAgIGxpbmsub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG5nID0gTWF0aC5yYW5kb20oKSAqIDM2MCAtIDE4MFxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdCA9IE1hdGgucmFuZG9tKCkgKiAxODAgLSA5MFxuXG4gICAgICAgICAgICAgICAgbmV3IG1hcGJveGdsLk1hcmtlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KFtsbmcsIGxhdF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkVG8obWFwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgbWFwLnJlbW92ZSgpO1xuICAgICAgICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgICB9O1xuICAgIH0pXG48L3NjcmlwdD5cblxuPHNlY3Rpb24gYmluZDp0aGlzPXtjb250YWluZXJ9PlxuICAgIHsjaWYgbWFwfVxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgey9pZn1cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUdRLEdBQUc7S0FDSCxTQUFTOztDQUViLE9BQU87VUFDSyxPQUFPLEVBQUUsUUFBUSxrQkFBa0IseUJBQVc7UUFFaEQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTTtFQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVk7RUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRywwREFBMEQ7UUFFaEUsS0FBSyxHQUFHLDBGQUEwRjtFQUV4RyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUs7O0VBRTVCLElBQUksQ0FBQyxNQUFNO21CQUNQLEdBQUcsT0FBTyxRQUFRLENBQUMsR0FBRztLQUNsQixTQUFTO0tBQ1QsS0FBSyxFQUFFLG9DQUFvQzs7O1lBR3RDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztVQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEdBQUcsR0FBRztVQUMvQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUVoQyxRQUFRLENBQUMsTUFBTSxHQUNWLFNBQVMsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUNuQixLQUFLLENBQUMsR0FBRzs7OztFQUkxQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7R0FHMUIsR0FBRyxDQUFDLE1BQU07R0FDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
