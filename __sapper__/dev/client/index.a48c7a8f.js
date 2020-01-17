import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, r as space, e as element, G as create_component, t as text, u as claim_space, c as claim_element, a as children, H as claim_component, f as detach_dev, b as claim_text, h as attr_dev, g as add_location, j as insert_dev, I as mount_component, k as append_dev, n as noop, x as transition_in, y as transition_out, J as destroy_component } from './index.8396e5bf.js';
import { C as Carousel, P as Progress, T as TitleSubTitle, a as CharityCards, b as ContentHolder, A as AvatarAndName } from './index.97e891b4.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let br0;
	let t5;
	let br1;
	let t6;
	let br2;
	let t7;
	let br3;
	let t8;
	let br4;
	let t9;
	let t10;
	let br5;
	let t11;
	let br6;
	let t12;
	let br7;
	let t13;
	let br8;
	let t14;
	let br9;
	let t15;
	let section0;
	let t16;
	let br10;
	let t17;
	let br11;
	let t18;
	let br12;
	let t19;
	let br13;
	let t20;
	let t21;
	let br14;
	let t22;
	let br15;
	let t23;
	let br16;
	let t24;
	let br17;
	let t25;
	let section1;
	let t26;
	let t27;
	let br18;
	let t28;
	let br19;
	let t29;
	let br20;
	let t30;
	let br21;
	let current;
	const carousel = new Carousel({ $$inline: true });

	const progress = new Progress({
			props: { borderRadius: "0 0 8px 8px", value: "30" },
			$$inline: true
		});

	const titlesubtitle = new TitleSubTitle({ $$inline: true });
	const charitycards = new CharityCards({ props: { amount: "2" }, $$inline: true });
	const contentholder = new ContentHolder({ $$inline: true });

	const avatarandname0 = new AvatarAndName({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const avatarandname1 = new AvatarAndName({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			create_component(carousel.$$.fragment);
			t1 = space();
			create_component(progress.$$.fragment);
			t2 = space();
			p = element("p");
			t3 = text("These guys rise a pound of vegetables. They like vegetables and long text under photos.");
			t4 = space();
			br0 = element("br");
			t5 = space();
			br1 = element("br");
			t6 = space();
			br2 = element("br");
			t7 = space();
			br3 = element("br");
			t8 = space();
			br4 = element("br");
			t9 = space();
			create_component(titlesubtitle.$$.fragment);
			t10 = space();
			br5 = element("br");
			t11 = space();
			br6 = element("br");
			t12 = space();
			br7 = element("br");
			t13 = space();
			br8 = element("br");
			t14 = space();
			br9 = element("br");
			t15 = space();
			section0 = element("section");
			create_component(charitycards.$$.fragment);
			t16 = space();
			br10 = element("br");
			t17 = space();
			br11 = element("br");
			t18 = space();
			br12 = element("br");
			t19 = space();
			br13 = element("br");
			t20 = space();
			create_component(contentholder.$$.fragment);
			t21 = space();
			br14 = element("br");
			t22 = space();
			br15 = element("br");
			t23 = space();
			br16 = element("br");
			t24 = space();
			br17 = element("br");
			t25 = space();
			section1 = element("section");
			create_component(avatarandname0.$$.fragment);
			t26 = space();
			create_component(avatarandname1.$$.fragment);
			t27 = space();
			br18 = element("br");
			t28 = space();
			br19 = element("br");
			t29 = space();
			br20 = element("br");
			t30 = space();
			br21 = element("br");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(carousel.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(progress.$$.fragment, nodes);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "These guys rise a pound of vegetables. They like vegetables and long text under photos.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t5 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t6 = claim_space(nodes);
			br2 = claim_element(nodes, "BR", {});
			t7 = claim_space(nodes);
			br3 = claim_element(nodes, "BR", {});
			t8 = claim_space(nodes);
			br4 = claim_element(nodes, "BR", {});
			t9 = claim_space(nodes);
			claim_component(titlesubtitle.$$.fragment, nodes);
			t10 = claim_space(nodes);
			br5 = claim_element(nodes, "BR", {});
			t11 = claim_space(nodes);
			br6 = claim_element(nodes, "BR", {});
			t12 = claim_space(nodes);
			br7 = claim_element(nodes, "BR", {});
			t13 = claim_space(nodes);
			br8 = claim_element(nodes, "BR", {});
			t14 = claim_space(nodes);
			br9 = claim_element(nodes, "BR", {});
			t15 = claim_space(nodes);
			section0 = claim_element(nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			claim_component(charitycards.$$.fragment, section0_nodes);
			section0_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			br10 = claim_element(nodes, "BR", {});
			t17 = claim_space(nodes);
			br11 = claim_element(nodes, "BR", {});
			t18 = claim_space(nodes);
			br12 = claim_element(nodes, "BR", {});
			t19 = claim_space(nodes);
			br13 = claim_element(nodes, "BR", {});
			t20 = claim_space(nodes);
			claim_component(contentholder.$$.fragment, nodes);
			t21 = claim_space(nodes);
			br14 = claim_element(nodes, "BR", {});
			t22 = claim_space(nodes);
			br15 = claim_element(nodes, "BR", {});
			t23 = claim_space(nodes);
			br16 = claim_element(nodes, "BR", {});
			t24 = claim_space(nodes);
			br17 = claim_element(nodes, "BR", {});
			t25 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			claim_component(avatarandname0.$$.fragment, section1_nodes);
			t26 = claim_space(section1_nodes);
			claim_component(avatarandname1.$$.fragment, section1_nodes);
			section1_nodes.forEach(detach_dev);
			t27 = claim_space(nodes);
			br18 = claim_element(nodes, "BR", {});
			t28 = claim_space(nodes);
			br19 = claim_element(nodes, "BR", {});
			t29 = claim_space(nodes);
			br20 = claim_element(nodes, "BR", {});
			t30 = claim_space(nodes);
			br21 = claim_element(nodes, "BR", {});
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - list of charities you can donate.";
			attr_dev(div, "class", "top-pic svelte-b9nco9");
			add_location(div, file, 30, 0, 534);
			add_location(p, file, 36, 0, 631);
			add_location(br0, file, 38, 0, 727);
			add_location(br1, file, 39, 0, 732);
			add_location(br2, file, 40, 0, 737);
			add_location(br3, file, 41, 0, 742);
			add_location(br4, file, 42, 0, 747);
			add_location(br5, file, 46, 0, 771);
			add_location(br6, file, 47, 0, 776);
			add_location(br7, file, 48, 0, 781);
			add_location(br8, file, 49, 0, 786);
			add_location(br9, file, 50, 0, 791);
			attr_dev(section0, "class", "container");
			add_location(section0, file, 52, 0, 797);
			add_location(br10, file, 56, 0, 868);
			add_location(br11, file, 57, 0, 873);
			add_location(br12, file, 58, 0, 878);
			add_location(br13, file, 59, 0, 883);
			add_location(br14, file, 63, 0, 907);
			add_location(br15, file, 64, 0, 912);
			add_location(br16, file, 65, 0, 917);
			add_location(br17, file, 66, 0, 922);
			attr_dev(section1, "class", "container");
			add_location(section1, file, 68, 0, 928);
			add_location(br18, file, 81, 0, 1288);
			add_location(br19, file, 82, 0, 1293);
			add_location(br20, file, 83, 0, 1298);
			add_location(br21, file, 84, 0, 1303);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(carousel, div, null);
			insert_dev(target, t1, anchor);
			mount_component(progress, target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, br0, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, br1, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, br2, anchor);
			insert_dev(target, t7, anchor);
			insert_dev(target, br3, anchor);
			insert_dev(target, t8, anchor);
			insert_dev(target, br4, anchor);
			insert_dev(target, t9, anchor);
			mount_component(titlesubtitle, target, anchor);
			insert_dev(target, t10, anchor);
			insert_dev(target, br5, anchor);
			insert_dev(target, t11, anchor);
			insert_dev(target, br6, anchor);
			insert_dev(target, t12, anchor);
			insert_dev(target, br7, anchor);
			insert_dev(target, t13, anchor);
			insert_dev(target, br8, anchor);
			insert_dev(target, t14, anchor);
			insert_dev(target, br9, anchor);
			insert_dev(target, t15, anchor);
			insert_dev(target, section0, anchor);
			mount_component(charitycards, section0, null);
			insert_dev(target, t16, anchor);
			insert_dev(target, br10, anchor);
			insert_dev(target, t17, anchor);
			insert_dev(target, br11, anchor);
			insert_dev(target, t18, anchor);
			insert_dev(target, br12, anchor);
			insert_dev(target, t19, anchor);
			insert_dev(target, br13, anchor);
			insert_dev(target, t20, anchor);
			mount_component(contentholder, target, anchor);
			insert_dev(target, t21, anchor);
			insert_dev(target, br14, anchor);
			insert_dev(target, t22, anchor);
			insert_dev(target, br15, anchor);
			insert_dev(target, t23, anchor);
			insert_dev(target, br16, anchor);
			insert_dev(target, t24, anchor);
			insert_dev(target, br17, anchor);
			insert_dev(target, t25, anchor);
			insert_dev(target, section1, anchor);
			mount_component(avatarandname0, section1, null);
			append_dev(section1, t26);
			mount_component(avatarandname1, section1, null);
			insert_dev(target, t27, anchor);
			insert_dev(target, br18, anchor);
			insert_dev(target, t28, anchor);
			insert_dev(target, br19, anchor);
			insert_dev(target, t29, anchor);
			insert_dev(target, br20, anchor);
			insert_dev(target, t30, anchor);
			insert_dev(target, br21, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(carousel.$$.fragment, local);
			transition_in(progress.$$.fragment, local);
			transition_in(titlesubtitle.$$.fragment, local);
			transition_in(charitycards.$$.fragment, local);
			transition_in(contentholder.$$.fragment, local);
			transition_in(avatarandname0.$$.fragment, local);
			transition_in(avatarandname1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(carousel.$$.fragment, local);
			transition_out(progress.$$.fragment, local);
			transition_out(titlesubtitle.$$.fragment, local);
			transition_out(charitycards.$$.fragment, local);
			transition_out(contentholder.$$.fragment, local);
			transition_out(avatarandname0.$$.fragment, local);
			transition_out(avatarandname1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(carousel);
			if (detaching) detach_dev(t1);
			destroy_component(progress, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(br2);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(br3);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(br4);
			if (detaching) detach_dev(t9);
			destroy_component(titlesubtitle, detaching);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(br5);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(br6);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(br7);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(br8);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(br9);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(section0);
			destroy_component(charitycards);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(br10);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(br11);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(br12);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(br13);
			if (detaching) detach_dev(t20);
			destroy_component(contentholder, detaching);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(br14);
			if (detaching) detach_dev(t22);
			if (detaching) detach_dev(br15);
			if (detaching) detach_dev(t23);
			if (detaching) detach_dev(br16);
			if (detaching) detach_dev(t24);
			if (detaching) detach_dev(br17);
			if (detaching) detach_dev(t25);
			if (detaching) detach_dev(section1);
			destroy_component(avatarandname0);
			destroy_component(avatarandname1);
			if (detaching) detach_dev(t27);
			if (detaching) detach_dev(br18);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(br19);
			if (detaching) detach_dev(t29);
			if (detaching) detach_dev(br20);
			if (detaching) detach_dev(t30);
			if (detaching) detach_dev(br21);
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

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTQ4YzdhOGYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
