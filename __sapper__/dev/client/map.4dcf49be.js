import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as create_slot, I as get_slot_context, J as get_slot_changes, v as transition_in, w as transition_out, q as space, o as element, t as claim_space, c as claim_element, f as children, g as detach_dev, h as attr_dev, j as add_location, k as insert_dev, U as binding_callbacks } from './index.2af2a444.js';

/* src/routes/map.svelte generated by Svelte v3.16.7 */

const file = "src/routes/map.svelte";

// (56:4) {#if map}
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
		source: "(56:4) {#if map}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let section;
	let current;
	let if_block = /*map*/ ctx[1] && create_if_block(ctx);

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
			document.title = "Charitify - Map of organizations.";
			attr_dev(section, "class", "svelte-1tw6as9");
			add_location(section, file, 54, 0, 1496);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, section, anchor);
			if (if_block) if_block.m(section, null);
			/*section_binding*/ ctx[4](section);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*map*/ ctx[1]) if_block.p(ctx, dirty);
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
	let { $$slots = {}, $$scope } = $$props;

	function section_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("map" in $$props) $$invalidate(1, map = $$props.map);
		if ("container" in $$props) $$invalidate(0, container = $$props.container);
	};

	return [container, map, $$scope, $$slots, section_binding];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLjRkY2Y0OWJlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL21hcC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5DaGFyaXRpZnkgLSBNYXAgb2Ygb3JnYW5pemF0aW9ucy48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHN0eWxlPlxuICAgIHNlY3Rpb24ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICAvLyBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuXG4gICAgbGV0IG1hcFxuICAgIGxldCBjb250YWluZXJcblxuICAgIC8vIFNlZSBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vY2NkLWFkYy1kZXYvc2FwcGVyLW1hcGJveC90cmVlL21hc3Rlci9zcmMvY29tcG9uZW50cy9tYXBcblxuICAgIC8vIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCB7IGRlZmF1bHQ6IG1hcGJveGdsIH0gPSBhd2FpdCBpbXBvcnQoJ21hcGJveC1nbCcpXG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAvLyAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgLy8gICAgIGxpbmsuaHJlZiA9ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MS43LjAvbWFwYm94LWdsLmNzcyc7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgdG9rZW4gPSAncGsuZXlKMUlqb2lZblZpYkdscklpd2lZU0k2SW1Ock5YcHhkemd4YlRBd05uY3piR3h3ZUcwd2NUVjNjakFpZlEucnQxcGVMakNRSFpVa3JNNEFXejVNdydcbiAgICAvL1xuICAgIC8vICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRva2VuXG4gICAgLy9cbiAgICAvLyAgICAgbGluay5vbmxvYWQgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAvLyAgICAgICAgICAgICBjb250YWluZXIsXG4gICAgLy8gICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExJyxcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy9cbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBsbmcgPSBNYXRoLnJhbmRvbSgpICogMzYwIC0gMTgwXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgbGF0ID0gTWF0aC5yYW5kb20oKSAqIDE4MCAtIDkwXG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKClcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5zZXRMbmdMYXQoW2xuZywgbGF0XSlcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICAgICAgICBtYXAucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgLy8gICAgIH07XG4gICAgLy8gfSlcbjwvc2NyaXB0PlxuXG48c2VjdGlvbiBiaW5kOnRoaXM9e2NvbnRhaW5lcn0+XG4gICAgeyNpZiBtYXB9XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICB7L2lmfVxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FHUSxHQUFHO0tBQ0gsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
