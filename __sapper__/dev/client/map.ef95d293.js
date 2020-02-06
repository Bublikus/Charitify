import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as space, E as create_component, H as claim_space, G as claim_component, q as insert_dev, I as mount_component, t as transition_in, h as transition_out, m as detach_dev, J as destroy_component, K as empty, r as group_outros, u as check_outros, T as destroy_each } from './index.a981e887.js';
import { M as Map, g as MapMarker } from './index.2478dcf5.js';
import { a as api } from './index.024fcaf5.js';

/* src/routes/map.svelte generated by Svelte v3.16.7 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (32:4) {#each organizations as o}
function create_each_block(ctx) {
	let current;

	const mapmarker = new MapMarker({
			props: {
				lat: /*o*/ ctx[2].location.lat,
				lng: /*o*/ ctx[2].location.lng
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
			if (dirty & /*organizations*/ 1) mapmarker_changes.lng = /*o*/ ctx[2].location.lng;
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
		source: "(32:4) {#each organizations as o}",
		ctx
	});

	return block;
}

// (31:0) <Map on:ready={onCreate}>
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
		source: "(31:0) <Map on:ready={onCreate}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let current;

	const map = new Map({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	map.$on("ready", /*onCreate*/ ctx[1]);

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

	async function onCreate({ detail: map }) {
		await new Promise(r => setTimeout(r, 2000));
		$$invalidate(0, organizations = await api.getOrganizations());
		console.log(organizations);
		const getRange = (type, metric) => Math[type](...organizations.map(o => o.location[metric]));
		const scale = -2;

		const area = [
			[getRange("min", "lng") + scale, getRange("min", "lat") + scale],
			[getRange("max", "lng") - scale, getRange("max", "lat") - scale]
		];

		map.fitBounds(area);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("organizations" in $$props) $$invalidate(0, organizations = $$props.organizations);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmVmOTVkMjkzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL21hcC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5DaGFyaXRpZnkgLSBNYXAgb2Ygb3JnYW5pemF0aW9ucy48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcydcbiAgICBpbXBvcnQgeyBNYXAsIE1hcE1hcmtlciB9IGZyb20gJy4uL2xheW91dHMnXG5cbiAgICBsZXQgb3JnYW5pemF0aW9ucyA9IFtdXG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNyZWF0ZSh7IGRldGFpbDogbWFwIH0pIHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDIwMDApKVxuICAgICAgICBvcmdhbml6YXRpb25zID0gYXdhaXQgYXBpLmdldE9yZ2FuaXphdGlvbnMoKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG9yZ2FuaXphdGlvbnMpXG5cbiAgICAgICAgY29uc3QgZ2V0UmFuZ2UgPSAodHlwZSwgbWV0cmljKSA9PiBNYXRoW3R5cGVdKC4uLm9yZ2FuaXphdGlvbnMubWFwKG8gPT4gby5sb2NhdGlvblttZXRyaWNdKSlcblxuICAgICAgICBjb25zdCBzY2FsZSA9IC0yXG4gICAgICAgIGNvbnN0IGFyZWEgPSBbXG4gICAgICAgICAgICBbZ2V0UmFuZ2UoJ21pbicsICdsbmcnKSArIHNjYWxlLCBnZXRSYW5nZSgnbWluJywgJ2xhdCcpICsgc2NhbGVdLFxuICAgICAgICAgICAgW2dldFJhbmdlKCdtYXgnLCAnbG5nJykgLSBzY2FsZSwgZ2V0UmFuZ2UoJ21heCcsICdsYXQnKSAtIHNjYWxlXVxuICAgICAgICBdXG4gICAgICAgIG1hcC5maXRCb3VuZHMoYXJlYSk7XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxNYXAgb246cmVhZHk9e29uQ3JlYXRlfT5cbiAgICB7I2VhY2ggb3JnYW5pemF0aW9ucyBhcyBvfVxuICAgICAgICA8TWFwTWFya2VyIGxhdD17by5sb2NhdGlvbi5sYXR9IGxuZz17by5sb2NhdGlvbi5sbmd9Lz5cbiAgICB7L2VhY2h9XG48L01hcD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFnQ3dCLEdBQUMsSUFBQyxRQUFRLENBQUMsR0FBRztlQUFPLEdBQUMsSUFBQyxRQUFRLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQUFuQyxHQUFDLElBQUMsUUFBUSxDQUFDLEdBQUc7a0VBQU8sR0FBQyxJQUFDLFFBQVEsQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FEaEQsR0FBYTs7O2dDQUFsQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBQUMsR0FBYTs7OytCQUFsQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBREssR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMUJmLGFBQWE7O2dCQUVGLFFBQVEsR0FBRyxNQUFNLEVBQUUsR0FBRztZQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSTtrQkFDekMsYUFBYSxTQUFTLEdBQUcsQ0FBQyxnQkFBZ0I7RUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO1FBRW5CLFFBQVEsSUFBSSxJQUFJLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBRW5GLEtBQUssSUFBSSxDQUFDOztRQUNWLElBQUk7SUFDTCxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSztJQUM5RCxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSzs7O0VBRW5FLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
