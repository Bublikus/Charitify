import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as onMount, E as create_component, G as claim_component, I as mount_component, t as transition_in, h as transition_out, J as destroy_component, Z as globals, F as space, j as element, U as text, H as claim_space, k as claim_element, l as children, V as claim_text, m as detach_dev, p as add_location, n as attr_dev, M as toggle_class, q as insert_dev, D as append_dev, u as check_outros, r as group_outros } from './index.a981e887.js';
import { f as ListItems, S as SearchLine, F as Footer } from './index.f7582281.js';
import { a as api } from './index.a95748c4.js';

/* src/routes/lists/_charities.svelte generated by Svelte v3.16.7 */

function create_fragment(ctx) {
	let current;

	const listitems = new ListItems({
			props: { items: /*chariries*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(listitems.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(listitems.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(listitems, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const listitems_changes = {};
			if (dirty & /*chariries*/ 1) listitems_changes.items = /*chariries*/ ctx[0];
			listitems.$set(listitems_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listitems.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listitems.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(listitems, detaching);
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
	let chariries = [];

	onMount(async () => {
		await new Promise(r => setTimeout(r, 2000));
		const chars = await api.getCharities();
		$$invalidate(0, chariries = new Array(1).fill(chars).reduce((a, o) => a.concat(...o), []));
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("chariries" in $$props) $$invalidate(0, chariries = $$props.chariries);
	};

	return [chariries];
}

class Charities extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Charities",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/lists/_organizations.svelte generated by Svelte v3.16.7 */

function create_fragment$1(ctx) {
	let current;

	const listitems = new ListItems({
			props: { items: /*organizations*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(listitems.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(listitems.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(listitems, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const listitems_changes = {};
			if (dirty & /*organizations*/ 1) listitems_changes.items = /*organizations*/ ctx[0];
			listitems.$set(listitems_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listitems.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listitems.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(listitems, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let organizations = [];

	onMount(async () => {
		await new Promise(r => setTimeout(r, 2000));
		const orgs = await api.getOrganizations();
		$$invalidate(0, organizations = new Array(5).fill(orgs).reduce((a, o) => a.concat(...o), []));
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("organizations" in $$props) $$invalidate(0, organizations = $$props.organizations);
	};

	return [organizations];
}

class Organizations extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Organizations",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/lists/index.svelte generated by Svelte v3.16.7 */

const { console: console_1 } = globals;
const file = "src/routes/lists/index.svelte";

// (33:1) {:else}
function create_else_block(ctx) {
	let current;
	const charitieslist = new Charities({ $$inline: true });

	const block = {
		c: function create() {
			create_component(charitieslist.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(charitieslist.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(charitieslist, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(charitieslist.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charitieslist.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(charitieslist, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(33:1) {:else}",
		ctx
	});

	return block;
}

// (31:1) {#if segment === 'organizations'}
function create_if_block(ctx) {
	let current;
	const organizationslist = new Organizations({ $$inline: true });

	const block = {
		c: function create() {
			create_component(organizationslist.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(organizationslist.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(organizationslist, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(organizationslist.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(organizationslist.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(organizationslist, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(31:1) {#if segment === 'organizations'}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let t0;
	let div0;
	let br0;
	let t1;
	let t2;
	let br1;
	let t3;
	let ul;
	let li0;
	let a0;
	let t4;
	let t5;
	let li1;
	let a1;
	let t6;
	let t7;
	let div1;
	let br2;
	let t8;
	let current_block_type_index;
	let if_block;
	let t9;
	let br3;
	let t10;
	let br4;
	let t11;
	let current;
	const searchline = new SearchLine({ $$inline: true });
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*segment*/ ctx[0] === "organizations") return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	const footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			br0 = element("br");
			t1 = space();
			create_component(searchline.$$.fragment);
			t2 = space();
			br1 = element("br");
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t4 = text("list");
			t5 = space();
			li1 = element("li");
			a1 = element("a");
			t6 = text("organizations");
			t7 = space();
			div1 = element("div");
			br2 = element("br");
			t8 = space();
			if_block.c();
			t9 = space();
			br3 = element("br");
			t10 = space();
			br4 = element("br");
			t11 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			br0 = claim_element(div0_nodes, "BR", {});
			t1 = claim_space(div0_nodes);
			claim_component(searchline.$$.fragment, div0_nodes);
			t2 = claim_space(div0_nodes);
			br1 = claim_element(div0_nodes, "BR", {});
			t3 = claim_space(div0_nodes);
			ul = claim_element(div0_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { rel: true, href: true });
			var a0_nodes = children(a0);
			t4 = claim_text(a0_nodes, "list");
			a0_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { rel: true, href: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "organizations");
			a1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			br2 = claim_element(div1_nodes, "BR", {});
			t8 = claim_space(div1_nodes);
			if_block.l(div1_nodes);
			t9 = claim_space(div1_nodes);
			br3 = claim_element(div1_nodes, "BR", {});
			t10 = claim_space(div1_nodes);
			br4 = claim_element(div1_nodes, "BR", {});
			div1_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - is the application for helping those in need.";
			add_location(br0, file, 15, 1, 370);
			add_location(br1, file, 19, 1, 393);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", ".");
			toggle_class(a0, "selected", /*segment*/ ctx[0] === undefined);
			add_location(a0, file, 22, 6, 411);
			add_location(li0, file, 22, 2, 407);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "organizations");
			toggle_class(a1, "selected", /*segment*/ ctx[0] === "organizations");
			add_location(a1, file, 23, 6, 497);
			add_location(li1, file, 23, 2, 493);
			add_location(ul, file, 21, 1, 400);
			attr_dev(div0, "class", "search theme-bg container svelte-15uoncq");
			add_location(div0, file, 14, 0, 329);
			add_location(br2, file, 28, 1, 644);
			add_location(br3, file, 36, 1, 743);
			add_location(br4, file, 37, 1, 749);
			attr_dev(div1, "class", "list-wrap svelte-15uoncq");
			add_location(div1, file, 27, 0, 619);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, br0);
			append_dev(div0, t1);
			mount_component(searchline, div0, null);
			append_dev(div0, t2);
			append_dev(div0, br1);
			append_dev(div0, t3);
			append_dev(div0, ul);
			append_dev(ul, li0);
			append_dev(li0, a0);
			append_dev(a0, t4);
			append_dev(ul, t5);
			append_dev(ul, li1);
			append_dev(li1, a1);
			append_dev(a1, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, br2);
			append_dev(div1, t8);
			if_blocks[current_block_type_index].m(div1, null);
			append_dev(div1, t9);
			append_dev(div1, br3);
			append_dev(div1, t10);
			append_dev(div1, br4);
			insert_dev(target, t11, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*segment, undefined*/ 1) {
				toggle_class(a0, "selected", /*segment*/ ctx[0] === undefined);
			}

			if (dirty & /*segment*/ 1) {
				toggle_class(a1, "selected", /*segment*/ ctx[0] === "organizations");
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index !== previous_block_index) {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(div1, t9);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(searchline.$$.fragment, local);
			transition_in(if_block);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(searchline.$$.fragment, local);
			transition_out(if_block);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			destroy_component(searchline);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div1);
			if_blocks[current_block_type_index].d();
			if (detaching) detach_dev(t11);
			destroy_component(footer, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { segment } = $$props;
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Lists> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$capture_state = () => {
		return { segment };
	};

	$$self.$inject_state = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*segment*/ 1) {
			 console.log(segment);
		}
	};

	return [segment];
}

class Lists extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Lists",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console_1.warn("<Lists> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Lists>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Lists>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Lists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTE0MWQxMWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbGlzdHMvX2NoYXJpdGllcy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2xpc3RzL19vcmdhbml6YXRpb25zLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbGlzdHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSdcbiAgICBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcydcbiAgICBpbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICcuLi8uLi9sYXlvdXRzJ1xuXG4gICAgbGV0IGNoYXJpcmllcyA9IFtdXG5cbiAgICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDIwMDApKVxuICAgICAgICBjb25zdCBjaGFycyA9IGF3YWl0IGFwaS5nZXRDaGFyaXRpZXMoKVxuICAgICAgICBjaGFyaXJpZXMgPSBuZXcgQXJyYXkoMSkuZmlsbChjaGFycykucmVkdWNlKChhLCBvKSA9PiBhLmNvbmNhdCguLi5vKSwgW10pXG4gICAgfSlcbjwvc2NyaXB0PlxuXG48TGlzdEl0ZW1zIGl0ZW1zPXtjaGFyaXJpZXN9Lz5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSdcbiAgICBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcydcbiAgICBpbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICcuLi8uLi9sYXlvdXRzJ1xuXG4gICAgbGV0IG9yZ2FuaXphdGlvbnMgPSBbXVxuXG4gICAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAyMDAwKSlcbiAgICAgICAgY29uc3Qgb3JncyA9IGF3YWl0IGFwaS5nZXRPcmdhbml6YXRpb25zKClcbiAgICAgICAgb3JnYW5pemF0aW9ucyA9IG5ldyBBcnJheSg1KS5maWxsKG9yZ3MpLnJlZHVjZSgoYSwgbykgPT4gYS5jb25jYXQoLi4ubyksIFtdKVxuICAgIH0pXG48L3NjcmlwdD5cblxuPExpc3RJdGVtcyBpdGVtcz17b3JnYW5pemF0aW9uc30vPlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Q2hhcml0aWZ5IC0gaXMgdGhlIGFwcGxpY2F0aW9uIGZvciBoZWxwaW5nIHRob3NlIGluIG5lZWQuPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IFNlYXJjaExpbmUsIEZvb3RlciB9IGZyb20gJy4uLy4uL2xheW91dHMnXG5cdGltcG9ydCBDaGFyaXRpZXNMaXN0IGZyb20gJy4vX2NoYXJpdGllcy5zdmVsdGUnXG5cdGltcG9ydCBPcmdhbml6YXRpb25zTGlzdCBmcm9tICcuL19vcmdhbml6YXRpb25zLnN2ZWx0ZSdcblxuXHRleHBvcnQgbGV0IHNlZ21lbnRcblxuXHQkOiBjb25zb2xlLmxvZyhzZWdtZW50KVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggdGhlbWUtYmcgY29udGFpbmVyXCI+XG5cdDxicj5cblxuXHQ8U2VhcmNoTGluZS8+XG5cblx0PGJyPlxuXG5cdDx1bD5cblx0XHQ8bGk+PGEgcmVsPXByZWZldGNoIGhyZWY9Jy4nIGNsYXNzOnNlbGVjdGVkPSd7c2VnbWVudCA9PT0gdW5kZWZpbmVkfSc+bGlzdDwvYT48L2xpPlxuXHRcdDxsaT48YSByZWw9cHJlZmV0Y2ggaHJlZj0nb3JnYW5pemF0aW9ucycgY2xhc3M6c2VsZWN0ZWQ9J3tzZWdtZW50ID09PSBcIm9yZ2FuaXphdGlvbnNcIn0nPm9yZ2FuaXphdGlvbnM8L2E+PC9saT5cblx0PC91bD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibGlzdC13cmFwXCI+XG5cdDxicj5cblxuXHR7I2lmIHNlZ21lbnQgPT09ICdvcmdhbml6YXRpb25zJ31cblx0PE9yZ2FuaXphdGlvbnNMaXN0Lz5cblx0ezplbHNlfVxuXHQ8Q2hhcml0aWVzTGlzdC8+XG5cdHsvaWZ9XG5cblx0PGJyPlxuXHQ8YnI+XG48L2Rpdj5cblxuPEZvb3Rlci8+XG5cbjxzdHlsZT5cblx0LnNlYXJjaCB7XG5cdFx0cG9zaXRpb246IHN0aWNreTtcblx0XHR0b3A6IDQ3cHg7XG5cdFx0Ym94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xuXHR9XG5cblx0Lmxpc3Qtd3JhcCB7XG5cdFx0ZmxleDogMSAxIGF1dG87XG5cdFx0cGFkZGluZzogMCB2YXIoLS1zY3JlZW4tcGFkZGluZylcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUtRLFNBQVM7O0NBRWIsT0FBTztZQUNPLE9BQU8sQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ25DLEtBQUssU0FBUyxHQUFHLENBQUMsWUFBWTtrQkFDcEMsU0FBUyxPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDTG5FLGFBQWE7O0NBRWpCLE9BQU87WUFDTyxPQUFPLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUNuQyxJQUFJLFNBQVMsR0FBRyxDQUFDLGdCQUFnQjtrQkFDdkMsYUFBYSxPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDb0J4RSxHQUFPLFFBQUssZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBUmUsR0FBTyxRQUFLLFNBQVM7Ozs7OzRDQUNULEdBQU8sUUFBSyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FEdkMsR0FBTyxRQUFLLFNBQVM7Ozs7NkNBQ1QsR0FBTyxRQUFLLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbEIzRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FFbEIsQ0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
