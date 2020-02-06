import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, F as space, j as element, E as create_component, H as claim_space, k as claim_element, l as children, G as claim_component, m as detach_dev, p as add_location, n as attr_dev, q as insert_dev, D as append_dev, I as mount_component, t as transition_in, h as transition_out, J as destroy_component } from './index.a981e887.js';
import { S as SearchLine, f as ListItems, F as Footer } from './index.b3207573.js';
import { a as api } from './index.7abbb523.js';

/* src/routes/list.svelte generated by Svelte v3.16.7 */
const file = "src/routes/list.svelte";

function create_fragment(ctx) {
	let t0;
	let div0;
	let br0;
	let t1;
	let t2;
	let br1;
	let t3;
	let div1;
	let br2;
	let t4;
	let t5;
	let br3;
	let t6;
	let br4;
	let t7;
	let current;
	const searchline = new SearchLine({ $$inline: true });

	const listitems = new ListItems({
			props: { items: /*organizations*/ ctx[0] },
			$$inline: true
		});

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
			div1 = element("div");
			br2 = element("br");
			t4 = space();
			create_component(listitems.$$.fragment);
			t5 = space();
			br3 = element("br");
			t6 = space();
			br4 = element("br");
			t7 = space();
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
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			br2 = claim_element(div1_nodes, "BR", {});
			t4 = claim_space(div1_nodes);
			claim_component(listitems.$$.fragment, div1_nodes);
			t5 = claim_space(div1_nodes);
			br3 = claim_element(div1_nodes, "BR", {});
			t6 = claim_space(div1_nodes);
			br4 = claim_element(div1_nodes, "BR", {});
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - is the application for helping those in need.";
			add_location(br0, file, 18, 4, 476);
			add_location(br1, file, 22, 4, 505);
			attr_dev(div0, "class", "search theme-bg container svelte-krioku");
			add_location(div0, file, 17, 0, 432);
			add_location(br2, file, 26, 4, 546);
			add_location(br3, file, 30, 4, 596);
			add_location(br4, file, 31, 4, 605);
			attr_dev(div1, "class", "list-wrap svelte-krioku");
			add_location(div1, file, 25, 0, 518);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, br0);
			append_dev(div0, t1);
			mount_component(searchline, div0, null);
			append_dev(div0, t2);
			append_dev(div0, br1);
			insert_dev(target, t3, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, br2);
			append_dev(div1, t4);
			mount_component(listitems, div1, null);
			append_dev(div1, t5);
			append_dev(div1, br3);
			append_dev(div1, t6);
			append_dev(div1, br4);
			insert_dev(target, t7, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const listitems_changes = {};
			if (dirty & /*organizations*/ 1) listitems_changes.items = /*organizations*/ ctx[0];
			listitems.$set(listitems_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(searchline.$$.fragment, local);
			transition_in(listitems.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(searchline.$$.fragment, local);
			transition_out(listitems.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			destroy_component(searchline);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div1);
			destroy_component(listitems);
			if (detaching) detach_dev(t7);
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
	let organizations = [];

	onMount(async () => {
		await new Promise(r => setTimeout(r, 2000));
		$$invalidate(0, organizations = await api.getOrganizations());
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("organizations" in $$props) $$invalidate(0, organizations = $$props.organizations);
	};

	return [organizations];
}

class List extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "List",
			options,
			id: create_fragment.name
		});
	}
}

export default List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC42ZTVjYzRkNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9saXN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPkNoYXJpdGlmeSAtIGlzIHRoZSBhcHBsaWNhdGlvbiBmb3IgaGVscGluZyB0aG9zZSBpbiBuZWVkLjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG4gICAgaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMnXG4gICAgaW1wb3J0IHsgU2VhcmNoTGluZSwgTGlzdEl0ZW1zLCBGb290ZXIgfSBmcm9tICcuLi9sYXlvdXRzJ1xuXG4gICAgbGV0IG9yZ2FuaXphdGlvbnMgPSBbXVxuXG4gICAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAyMDAwKSlcbiAgICAgICAgb3JnYW5pemF0aW9ucyA9IGF3YWl0IGFwaS5nZXRPcmdhbml6YXRpb25zKClcbiAgICB9KVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggdGhlbWUtYmcgY29udGFpbmVyXCI+XG4gICAgPGJyPlxuXG4gICAgPFNlYXJjaExpbmUvPlxuXG4gICAgPGJyPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJsaXN0LXdyYXBcIj5cbiAgICA8YnI+XG5cbiAgICA8TGlzdEl0ZW1zIGl0ZW1zPXtvcmdhbml6YXRpb25zfS8+XG5cbiAgICA8YnI+XG4gICAgPGJyPlxuPC9kaXY+XG5cbjxGb290ZXIvPlxuXG48c3R5bGU+XG4gICAgLnNlYXJjaCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogNDdweDtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5saXN0LXdyYXAge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS1zY3JlZW4tcGFkZGluZylcbiAgICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBS1EsYUFBYTs7Q0FFakIsT0FBTztZQUNPLE9BQU8sQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJO2tCQUN6QyxhQUFhLFNBQVMsR0FBRyxDQUFDLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
