import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as space, j as element, E as create_component, H as claim_space, k as claim_element, l as children, G as claim_component, m as detach_dev, p as add_location, n as attr_dev, q as insert_dev, D as append_dev, I as mount_component, x as noop, t as transition_in, h as transition_out, J as destroy_component } from './index.a981e887.js';
import { S as SearchLine, e as ListItems, F as Footer } from './index.3fe52a50.js';

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
	const listitems = new ListItems({ props: { amount: "20" }, $$inline: true });
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
			add_location(br0, file, 10, 4, 235);
			add_location(br1, file, 14, 4, 264);
			attr_dev(div0, "class", "search theme-bg container svelte-f0geyz");
			add_location(div0, file, 9, 0, 191);
			add_location(br2, file, 18, 4, 305);
			add_location(br3, file, 22, 4, 345);
			add_location(br4, file, 23, 4, 354);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 17, 0, 277);
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
		p: noop,
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

class List extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "List",
			options,
			id: create_fragment.name
		});
	}
}

export default List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC44ZWI2MzU5OC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
