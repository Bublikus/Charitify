import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, B as Br, aJ as Map, ac as stores$1, ad as validate_store, ae as component_subscribe, v as validate_slots, aH as goto, af as API, aK as MapMarker, ai as globals, aj as validate_each_argument, f as space, g as create_component, q as query_selector_all, h as detach_dev, j as claim_space, m as claim_component, r as insert_dev, u as mount_component, x as transition_in, y as transition_out, z as destroy_component, at as is_function, Q as empty, R as group_outros, U as check_outros, ak as destroy_each } from './client.02b1df94.js';

/* src/routes/map/[id].svelte generated by Svelte v3.24.0 */

const { console: console_1 } = globals;

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (45:4) {#each organizations as o}
function create_each_block(ctx) {
	let mapmarker;
	let current;

	mapmarker = new MapMarker({
			props: {
				lat: /*o*/ ctx[7].location.lat,
				lng: /*o*/ ctx[7].location.lng
			},
			$$inline: true
		});

	mapmarker.$on("click", function () {
		if (is_function(/*onMarkerClick*/ ctx[4].bind(null, /*o*/ ctx[7]))) /*onMarkerClick*/ ctx[4].bind(null, /*o*/ ctx[7]).apply(this, arguments);
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
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const mapmarker_changes = {};
			if (dirty & /*organizations*/ 1) mapmarker_changes.lat = /*o*/ ctx[7].location.lat;
			if (dirty & /*organizations*/ 1) mapmarker_changes.lng = /*o*/ ctx[7].location.lng;
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
		source: "(45:4) {#each organizations as o}",
		ctx
	});

	return block;
}

// (44:0) <Map on:ready={onCreate} {center}>
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*organizations*/ ctx[0];
	validate_each_argument(each_value);
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
			if (dirty & /*organizations, onMarkerClick*/ 17) {
				each_value = /*organizations*/ ctx[0];
				validate_each_argument(each_value);
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
		source: "(44:0) <Map on:ready={onCreate} {center}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let br;
	let t1;
	let map;
	let current;

	br = new Br({
			props: { size: "var(--header-height)" },
			$$inline: true
		});

	map = new Map({
			props: {
				center: /*center*/ ctx[2],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	map.$on("ready", /*onCreate*/ ctx[3]);

	const block = {
		c: function create() {
			t0 = space();
			create_component(br.$$.fragment);
			t1 = space();
			create_component(map.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1vy6te4\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(br.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(map.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - Map of organizations.";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(br, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(map, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const map_changes = {};

			if (dirty & /*$$scope, organizations*/ 1025) {
				map_changes.$$scope = { dirty, ctx };
			}

			map.$set(map_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(br.$$.fragment, local);
			transition_in(map.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(br.$$.fragment, local);
			transition_out(map.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(br, detaching);
			if (detaching) detach_dev(t1);
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
	let $page;
	const { page } = stores$1();
	validate_store(page, "page");
	component_subscribe($$self, page, value => $$invalidate(5, $page = value));
	let center = undefined;
	let markerId = $page.params.id;
	let organizations = [];

	async function onCreate({ detail: map }) {
		$$invalidate(0, organizations = await API.getOrganizations());
		console.log(organizations);
		const getRange = (type, metric) => Math[type](...organizations.map(o => o.location[metric]));
		const scale = -2;

		const area = [
			[getRange("min", "lng") + scale, getRange("min", "lat") + scale],
			[getRange("max", "lng") - scale, getRange("max", "lat") - scale]
		];

		const center = organizations.filter(org => org.id === markerId)[0];

		if (center) {
			map.flyTo({
				center: [center.location.lng, center.location.lat],
				zoom: 10
			});
		} else {
			map.fitBounds(area);
		}
	}

	async function onMarkerClick(organization) {
		goto(`organizations/${organization.id}`);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bidu5D", $$slots, []);

	$$self.$capture_state = () => ({
		stores: stores$1,
		goto,
		page,
		API,
		Br,
		Map,
		MapMarker,
		center,
		markerId,
		organizations,
		onCreate,
		onMarkerClick,
		$page
	});

	$$self.$inject_state = $$props => {
		if ("center" in $$props) $$invalidate(2, center = $$props.center);
		if ("markerId" in $$props) markerId = $$props.markerId;
		if ("organizations" in $$props) $$invalidate(0, organizations = $$props.organizations);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [organizations, page, center, onCreate, onMarkerClick];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});
	}
}

export default U5Bidu5D;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5iYjQ2OTBmZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9tYXAvW2lkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5DaGFyaXRpZnkgLSBNYXAgb2Ygb3JnYW5pemF0aW9ucy48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzdG9yZXMsIGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCc7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBzdG9yZXMoKTtcbiAgICBpbXBvcnQgeyBBUEkgfSBmcm9tICdAc2VydmljZXMnXG4gICAgaW1wb3J0IHsgQnIsIE1hcCwgTWFwTWFya2VyIH0gZnJvbSAnQGNvbXBvbmVudHMnXG5cbiAgICBsZXQgY2VudGVyID0gdW5kZWZpbmVkXG4gICAgbGV0IG1hcmtlcklkID0gJHBhZ2UucGFyYW1zLmlkXG4gICAgbGV0IG9yZ2FuaXphdGlvbnMgPSBbXVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DcmVhdGUoeyBkZXRhaWw6IG1hcCB9KSB7XG4gICAgICAgIG9yZ2FuaXphdGlvbnMgPSBhd2FpdCBBUEkuZ2V0T3JnYW5pemF0aW9ucygpXG5cbiAgICAgICAgY29uc29sZS5sb2cob3JnYW5pemF0aW9ucylcblxuICAgICAgICBjb25zdCBnZXRSYW5nZSA9ICh0eXBlLCBtZXRyaWMpID0+IE1hdGhbdHlwZV0oLi4ub3JnYW5pemF0aW9ucy5tYXAobyA9PiBvLmxvY2F0aW9uW21ldHJpY10pKVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gLTJcbiAgICAgICAgY29uc3QgYXJlYSA9IFtcbiAgICAgICAgICAgIFtnZXRSYW5nZSgnbWluJywgJ2xuZycpICsgc2NhbGUsIGdldFJhbmdlKCdtaW4nLCAnbGF0JykgKyBzY2FsZV0sXG4gICAgICAgICAgICBbZ2V0UmFuZ2UoJ21heCcsICdsbmcnKSAtIHNjYWxlLCBnZXRSYW5nZSgnbWF4JywgJ2xhdCcpIC0gc2NhbGVdXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgY2VudGVyID0gb3JnYW5pemF0aW9ucy5maWx0ZXIob3JnID0+IG9yZy5pZCA9PT0gbWFya2VySWQpWzBdXG5cbiAgICAgICAgaWYgKGNlbnRlcikge1xuICAgICAgICAgICAgbWFwLmZseVRvKHsgY2VudGVyOiBbY2VudGVyLmxvY2F0aW9uLmxuZywgY2VudGVyLmxvY2F0aW9uLmxhdF0sIHpvb206IDEwIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhhcmVhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uTWFya2VyQ2xpY2sob3JnYW5pemF0aW9uKSB7XG4gICAgICAgIGdvdG8oYG9yZ2FuaXphdGlvbnMvJHtvcmdhbml6YXRpb24uaWR9YClcbiAgICB9XG48L3NjcmlwdD5cblxuIDxCciBzaXplPVwidmFyKC0taGVhZGVyLWhlaWdodClcIi8+XG48TWFwIG9uOnJlYWR5PXtvbkNyZWF0ZX0ge2NlbnRlcn0+XG4gICAgeyNlYWNoIG9yZ2FuaXphdGlvbnMgYXMgb31cbiAgICAgICAgPE1hcE1hcmtlciBsYXQ9e28ubG9jYXRpb24ubGF0fSBsbmc9e28ubG9jYXRpb24ubG5nfSBvbjpjbGljaz17b25NYXJrZXJDbGljay5iaW5kKG51bGwsIG8pfS8+XG4gICAgey9lYWNofVxuPC9NYXA+XG4iXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNkN3QixHQUFDLElBQUMsUUFBUSxDQUFDLEdBQUc7ZUFBTyxHQUFDLElBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7OztvQ0FBWSxHQUFhLElBQUMsSUFBSSxDQUFDLElBQUksUUFBRSxHQUFDLHlCQUExQixHQUFhLElBQUMsSUFBSSxDQUFDLElBQUksUUFBRSxHQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztrRUFBekUsR0FBQyxJQUFDLFFBQVEsQ0FBQyxHQUFHO2tFQUFPLEdBQUMsSUFBQyxRQUFRLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBRGhELEdBQWE7Ozs7Z0NBQWxCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FBQyxHQUFhOzs7OytCQUFsQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBREssR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW5DWCxJQUFJLEtBQUtBLFFBQU07OztLQUluQixNQUFNLEdBQUcsU0FBUztLQUNsQixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0tBQzFCLGFBQWE7O2dCQUVGLFFBQVEsR0FBRyxNQUFNLEVBQUUsR0FBRztrQkFDakMsYUFBYSxTQUFTLEdBQUcsQ0FBQyxnQkFBZ0I7RUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO1FBRW5CLFFBQVEsSUFBSSxJQUFJLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBRW5GLEtBQUssSUFBSSxDQUFDOztRQUNWLElBQUk7SUFDTCxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSztJQUM5RCxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksS0FBSzs7O1FBRTdELE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRSxDQUFDOztNQUU3RCxNQUFNO0dBQ04sR0FBRyxDQUFDLEtBQUs7SUFBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0lBQUcsSUFBSSxFQUFFLEVBQUU7OztHQUV4RSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7Z0JBSVgsYUFBYSxDQUFDLFlBQVk7RUFDckMsSUFBSSxrQkFBa0IsWUFBWSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
