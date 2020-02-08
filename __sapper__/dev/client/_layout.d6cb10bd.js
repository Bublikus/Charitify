import { S as SvelteComponentDev, i as init, d as dispatch_dev, Z as globals, s as safe_not_equal, F as space, j as element, E as create_component, U as text, H as claim_space, k as claim_element, l as children, G as claim_component, V as claim_text, m as detach_dev, p as add_location, n as attr_dev, M as toggle_class, q as insert_dev, D as append_dev, I as mount_component, h as transition_out, u as check_outros, t as transition_in, J as destroy_component, r as group_outros } from './index.a981e887.js';
import { S as SearchLine, F as Footer } from './index.f7582281.js';
import './index.a95748c4.js';
import CharitiesList from './index.7f1ec8bc.js';
import OrganizationsList from './index.1759caf4.js';

/* src/routes/lists/_layout.svelte generated by Svelte v3.16.7 */

const { console: console_1 } = globals;
const file = "src/routes/lists/_layout.svelte";

// (33:1) {:else}
function create_else_block(ctx) {
	let current;
	const charitieslist = new CharitiesList({ $$inline: true });

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
	const organizationslist = new OrganizationsList({ $$inline: true });

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

function create_fragment(ctx) {
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
			add_location(br0, file, 15, 1, 380);
			add_location(br1, file, 19, 1, 403);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", "lists");
			toggle_class(a0, "selected", /*segment*/ ctx[0] === undefined);
			add_location(a0, file, 22, 6, 421);
			add_location(li0, file, 22, 2, 417);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "lists/organizations");
			toggle_class(a1, "selected", /*segment*/ ctx[0] === "organizations");
			add_location(a1, file, 23, 6, 511);
			add_location(li1, file, 23, 2, 507);
			add_location(ul, file, 21, 1, 410);
			attr_dev(div0, "class", "search theme-bg container svelte-15uoncq");
			add_location(div0, file, 14, 0, 339);
			add_location(br2, file, 28, 1, 664);
			add_location(br3, file, 36, 1, 765);
			add_location(br4, file, 37, 1, 771);
			attr_dev(div1, "class", "list-wrap svelte-15uoncq");
			add_location(div1, file, 27, 0, 639);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { segment } = $$props;
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Layout> was created with unknown prop '${key}'`);
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

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console_1.warn("<Layout> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC5kNmNiMTBiZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9saXN0cy9fbGF5b3V0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5DaGFyaXRpZnkgLSBpcyB0aGUgYXBwbGljYXRpb24gZm9yIGhlbHBpbmcgdGhvc2UgaW4gbmVlZC48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgU2VhcmNoTGluZSwgRm9vdGVyIH0gZnJvbSAnLi4vLi4vbGF5b3V0cydcblx0aW1wb3J0IENoYXJpdGllc0xpc3QgZnJvbSAnLi9jaGFyaXRpZXMvaW5kZXguc3ZlbHRlJ1xuXHRpbXBvcnQgT3JnYW5pemF0aW9uc0xpc3QgZnJvbSAnLi9vcmdhbml6YXRpb25zL2luZGV4LnN2ZWx0ZSdcblxuXHRleHBvcnQgbGV0IHNlZ21lbnRcblxuXHQkOiBjb25zb2xlLmxvZyhzZWdtZW50KVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggdGhlbWUtYmcgY29udGFpbmVyXCI+XG5cdDxicj5cblxuXHQ8U2VhcmNoTGluZS8+XG5cblx0PGJyPlxuXG5cdDx1bD5cblx0XHQ8bGk+PGEgcmVsPXByZWZldGNoIGhyZWY9J2xpc3RzJyBjbGFzczpzZWxlY3RlZD0ne3NlZ21lbnQgPT09IHVuZGVmaW5lZH0nPmxpc3Q8L2E+PC9saT5cblx0XHQ8bGk+PGEgcmVsPXByZWZldGNoIGhyZWY9J2xpc3RzL29yZ2FuaXphdGlvbnMnIGNsYXNzOnNlbGVjdGVkPSd7c2VnbWVudCA9PT0gXCJvcmdhbml6YXRpb25zXCJ9Jz5vcmdhbml6YXRpb25zPC9hPjwvbGk+XG5cdDwvdWw+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImxpc3Qtd3JhcFwiPlxuXHQ8YnI+XG5cblx0eyNpZiBzZWdtZW50ID09PSAnb3JnYW5pemF0aW9ucyd9XG5cdFx0PE9yZ2FuaXphdGlvbnNMaXN0Lz5cblx0ezplbHNlfVxuXHRcdDxDaGFyaXRpZXNMaXN0Lz5cblx0ey9pZn1cblxuXHQ8YnI+XG5cdDxicj5cbjwvZGl2PlxuXG48Rm9vdGVyLz5cblxuPHN0eWxlPlxuXHQuc2VhcmNoIHtcblx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdHRvcDogNDdweDtcblx0XHRib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XG5cdH1cblxuXHQubGlzdC13cmFwIHtcblx0XHRmbGV4OiAxIDEgYXV0bztcblx0XHRwYWRkaW5nOiAwIHZhcigtLXNjcmVlbi1wYWRkaW5nKVxuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4Qk0sR0FBTyxRQUFLLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQVJtQixHQUFPLFFBQUssU0FBUzs7Ozs7NENBQ1AsR0FBTyxRQUFLLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUR6QyxHQUFPLFFBQUssU0FBUzs7Ozs2Q0FDUCxHQUFPLFFBQUssZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FsQmpGLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUVsQixDQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
