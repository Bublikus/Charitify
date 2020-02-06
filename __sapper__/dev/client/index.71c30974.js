import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, p as space, e as element, o as create_component, A as text, r as claim_space, c as claim_element, b as children, q as claim_component, f as detach_dev, B as claim_text, g as attr_dev, h as add_location, j as set_style, k as insert_dev, t as mount_component, l as append_dev, w as transition_in, x as transition_out, y as destroy_component, n as noop } from './index.272f3989.js';
import { C as Carousel, P as Progress, T as TitleSubTitle, a as ContentHolder, b as Comment, c as CharityCards, F as Footer } from './index.3b5087fc.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

// (58:4) <Carousel amount="2">
function create_default_slot(ctx) {
	let current;

	const charitycards = new CharityCards({
			props: { amount: "2", listName: "Nearest to you" },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(charitycards.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(charitycards.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(charitycards, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(charitycards.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charitycards.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(charitycards, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(58:4) <Carousel amount=\\\"2\\\">",
		ctx
	});

	return block;
}

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
	let br14;
	let t21;
	let t22;
	let br15;
	let t23;
	let br16;
	let t24;
	let br17;
	let t25;
	let br18;
	let t26;
	let br19;
	let t27;
	let section1;
	let ul;
	let li0;
	let t28;
	let br20;
	let t29;
	let li1;
	let t30;
	let br21;
	let t31;
	let li2;
	let t32;
	let br22;
	let t33;
	let li3;
	let t34;
	let br23;
	let t35;
	let br24;
	let t36;
	let br25;
	let t37;
	let br26;
	let t38;
	let br27;
	let t39;
	let br28;
	let t40;
	let section2;
	let t41;
	let br29;
	let t42;
	let br30;
	let t43;
	let br31;
	let t44;
	let br32;
	let t45;
	let br33;
	let t46;
	let current;
	const carousel0 = new Carousel({ $$inline: true });

	const progress = new Progress({
			props: { borderRadius: "0 0 8px 8px", value: "30" },
			$$inline: true
		});

	const titlesubtitle = new TitleSubTitle({
			props: {
				title: "Charitify",
				subtitle: "Charity application for helping those in need"
			},
			$$inline: true
		});

	const carousel1 = new Carousel({
			props: {
				amount: "2",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const contentholder = new ContentHolder({ $$inline: true });

	const comment0 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const comment1 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const comment2 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const comment3 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const charitycards = new CharityCards({ props: { amount: "2" }, $$inline: true });
	const footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			create_component(carousel0.$$.fragment);
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
			create_component(carousel1.$$.fragment);
			t16 = space();
			br10 = element("br");
			t17 = space();
			br11 = element("br");
			t18 = space();
			br12 = element("br");
			t19 = space();
			br13 = element("br");
			t20 = space();
			br14 = element("br");
			t21 = space();
			create_component(contentholder.$$.fragment);
			t22 = space();
			br15 = element("br");
			t23 = space();
			br16 = element("br");
			t24 = space();
			br17 = element("br");
			t25 = space();
			br18 = element("br");
			t26 = space();
			br19 = element("br");
			t27 = space();
			section1 = element("section");
			ul = element("ul");
			li0 = element("li");
			create_component(comment0.$$.fragment);
			t28 = space();
			br20 = element("br");
			t29 = space();
			li1 = element("li");
			create_component(comment1.$$.fragment);
			t30 = space();
			br21 = element("br");
			t31 = space();
			li2 = element("li");
			create_component(comment2.$$.fragment);
			t32 = space();
			br22 = element("br");
			t33 = space();
			li3 = element("li");
			create_component(comment3.$$.fragment);
			t34 = space();
			br23 = element("br");
			t35 = space();
			br24 = element("br");
			t36 = space();
			br25 = element("br");
			t37 = space();
			br26 = element("br");
			t38 = space();
			br27 = element("br");
			t39 = space();
			br28 = element("br");
			t40 = space();
			section2 = element("section");
			create_component(charitycards.$$.fragment);
			t41 = space();
			br29 = element("br");
			t42 = space();
			br30 = element("br");
			t43 = space();
			br31 = element("br");
			t44 = space();
			br32 = element("br");
			t45 = space();
			br33 = element("br");
			t46 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(carousel0.$$.fragment, div_nodes);
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
			claim_component(carousel1.$$.fragment, section0_nodes);
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
			br14 = claim_element(nodes, "BR", {});
			t21 = claim_space(nodes);
			claim_component(contentholder.$$.fragment, nodes);
			t22 = claim_space(nodes);
			br15 = claim_element(nodes, "BR", {});
			t23 = claim_space(nodes);
			br16 = claim_element(nodes, "BR", {});
			t24 = claim_space(nodes);
			br17 = claim_element(nodes, "BR", {});
			t25 = claim_space(nodes);
			br18 = claim_element(nodes, "BR", {});
			t26 = claim_space(nodes);
			br19 = claim_element(nodes, "BR", {});
			t27 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			ul = claim_element(section1_nodes, "UL", { style: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { style: true });
			var li0_nodes = children(li0);
			claim_component(comment0.$$.fragment, li0_nodes);
			t28 = claim_space(li0_nodes);
			br20 = claim_element(li0_nodes, "BR", {});
			li0_nodes.forEach(detach_dev);
			t29 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { style: true });
			var li1_nodes = children(li1);
			claim_component(comment1.$$.fragment, li1_nodes);
			t30 = claim_space(li1_nodes);
			br21 = claim_element(li1_nodes, "BR", {});
			li1_nodes.forEach(detach_dev);
			t31 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { style: true });
			var li2_nodes = children(li2);
			claim_component(comment2.$$.fragment, li2_nodes);
			t32 = claim_space(li2_nodes);
			br22 = claim_element(li2_nodes, "BR", {});
			li2_nodes.forEach(detach_dev);
			t33 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { style: true });
			var li3_nodes = children(li3);
			claim_component(comment3.$$.fragment, li3_nodes);
			t34 = claim_space(li3_nodes);
			br23 = claim_element(li3_nodes, "BR", {});
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t35 = claim_space(nodes);
			br24 = claim_element(nodes, "BR", {});
			t36 = claim_space(nodes);
			br25 = claim_element(nodes, "BR", {});
			t37 = claim_space(nodes);
			br26 = claim_element(nodes, "BR", {});
			t38 = claim_space(nodes);
			br27 = claim_element(nodes, "BR", {});
			t39 = claim_space(nodes);
			br28 = claim_element(nodes, "BR", {});
			t40 = claim_space(nodes);
			section2 = claim_element(nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			claim_component(charitycards.$$.fragment, section2_nodes);
			section2_nodes.forEach(detach_dev);
			t41 = claim_space(nodes);
			br29 = claim_element(nodes, "BR", {});
			t42 = claim_space(nodes);
			br30 = claim_element(nodes, "BR", {});
			t43 = claim_space(nodes);
			br31 = claim_element(nodes, "BR", {});
			t44 = claim_space(nodes);
			br32 = claim_element(nodes, "BR", {});
			t45 = claim_space(nodes);
			br33 = claim_element(nodes, "BR", {});
			t46 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - list of charities you can donate.";
			attr_dev(div, "class", "top-pic svelte-b9nco9");
			add_location(div, file, 31, 0, 544);
			add_location(p, file, 37, 0, 641);
			add_location(br0, file, 39, 0, 737);
			add_location(br1, file, 40, 0, 742);
			add_location(br2, file, 41, 0, 747);
			add_location(br3, file, 42, 0, 752);
			add_location(br4, file, 43, 0, 757);
			add_location(br5, file, 50, 0, 873);
			add_location(br6, file, 51, 0, 878);
			add_location(br7, file, 52, 0, 883);
			add_location(br8, file, 53, 0, 888);
			add_location(br9, file, 54, 0, 893);
			attr_dev(section0, "class", "container");
			add_location(section0, file, 56, 0, 899);
			add_location(br10, file, 62, 0, 1042);
			add_location(br11, file, 63, 0, 1047);
			add_location(br12, file, 64, 0, 1052);
			add_location(br13, file, 65, 0, 1057);
			add_location(br14, file, 66, 0, 1062);
			add_location(br15, file, 70, 0, 1086);
			add_location(br16, file, 71, 0, 1091);
			add_location(br17, file, 72, 0, 1096);
			add_location(br18, file, 73, 0, 1101);
			add_location(br19, file, 74, 0, 1106);
			add_location(br20, file, 84, 12, 1426);
			set_style(li0, "width", "50%");
			add_location(li0, file, 78, 8, 1196);
			add_location(br21, file, 92, 12, 1683);
			set_style(li1, "width", "50%");
			add_location(li1, file, 86, 8, 1453);
			add_location(br22, file, 100, 12, 1940);
			set_style(li2, "width", "50%");
			add_location(li2, file, 94, 8, 1710);
			add_location(br23, file, 108, 12, 2197);
			set_style(li3, "width", "50%");
			add_location(li3, file, 102, 8, 1967);
			set_style(ul, "display", "flex");
			set_style(ul, "flex-wrap", "wrap");
			add_location(ul, file, 77, 4, 1144);
			attr_dev(section1, "class", "container");
			add_location(section1, file, 76, 0, 1112);
			add_location(br24, file, 113, 0, 2238);
			add_location(br25, file, 114, 0, 2243);
			add_location(br26, file, 115, 0, 2248);
			add_location(br27, file, 116, 0, 2253);
			add_location(br28, file, 117, 0, 2258);
			attr_dev(section2, "class", "container");
			add_location(section2, file, 119, 0, 2264);
			add_location(br29, file, 123, 0, 2335);
			add_location(br30, file, 124, 0, 2340);
			add_location(br31, file, 125, 0, 2345);
			add_location(br32, file, 126, 0, 2350);
			add_location(br33, file, 127, 0, 2355);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			mount_component(carousel0, div, null);
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
			mount_component(carousel1, section0, null);
			insert_dev(target, t16, anchor);
			insert_dev(target, br10, anchor);
			insert_dev(target, t17, anchor);
			insert_dev(target, br11, anchor);
			insert_dev(target, t18, anchor);
			insert_dev(target, br12, anchor);
			insert_dev(target, t19, anchor);
			insert_dev(target, br13, anchor);
			insert_dev(target, t20, anchor);
			insert_dev(target, br14, anchor);
			insert_dev(target, t21, anchor);
			mount_component(contentholder, target, anchor);
			insert_dev(target, t22, anchor);
			insert_dev(target, br15, anchor);
			insert_dev(target, t23, anchor);
			insert_dev(target, br16, anchor);
			insert_dev(target, t24, anchor);
			insert_dev(target, br17, anchor);
			insert_dev(target, t25, anchor);
			insert_dev(target, br18, anchor);
			insert_dev(target, t26, anchor);
			insert_dev(target, br19, anchor);
			insert_dev(target, t27, anchor);
			insert_dev(target, section1, anchor);
			append_dev(section1, ul);
			append_dev(ul, li0);
			mount_component(comment0, li0, null);
			append_dev(li0, t28);
			append_dev(li0, br20);
			append_dev(ul, t29);
			append_dev(ul, li1);
			mount_component(comment1, li1, null);
			append_dev(li1, t30);
			append_dev(li1, br21);
			append_dev(ul, t31);
			append_dev(ul, li2);
			mount_component(comment2, li2, null);
			append_dev(li2, t32);
			append_dev(li2, br22);
			append_dev(ul, t33);
			append_dev(ul, li3);
			mount_component(comment3, li3, null);
			append_dev(li3, t34);
			append_dev(li3, br23);
			insert_dev(target, t35, anchor);
			insert_dev(target, br24, anchor);
			insert_dev(target, t36, anchor);
			insert_dev(target, br25, anchor);
			insert_dev(target, t37, anchor);
			insert_dev(target, br26, anchor);
			insert_dev(target, t38, anchor);
			insert_dev(target, br27, anchor);
			insert_dev(target, t39, anchor);
			insert_dev(target, br28, anchor);
			insert_dev(target, t40, anchor);
			insert_dev(target, section2, anchor);
			mount_component(charitycards, section2, null);
			insert_dev(target, t41, anchor);
			insert_dev(target, br29, anchor);
			insert_dev(target, t42, anchor);
			insert_dev(target, br30, anchor);
			insert_dev(target, t43, anchor);
			insert_dev(target, br31, anchor);
			insert_dev(target, t44, anchor);
			insert_dev(target, br32, anchor);
			insert_dev(target, t45, anchor);
			insert_dev(target, br33, anchor);
			insert_dev(target, t46, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const carousel1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				carousel1_changes.$$scope = { dirty, ctx };
			}

			carousel1.$set(carousel1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(carousel0.$$.fragment, local);
			transition_in(progress.$$.fragment, local);
			transition_in(titlesubtitle.$$.fragment, local);
			transition_in(carousel1.$$.fragment, local);
			transition_in(contentholder.$$.fragment, local);
			transition_in(comment0.$$.fragment, local);
			transition_in(comment1.$$.fragment, local);
			transition_in(comment2.$$.fragment, local);
			transition_in(comment3.$$.fragment, local);
			transition_in(charitycards.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(carousel0.$$.fragment, local);
			transition_out(progress.$$.fragment, local);
			transition_out(titlesubtitle.$$.fragment, local);
			transition_out(carousel1.$$.fragment, local);
			transition_out(contentholder.$$.fragment, local);
			transition_out(comment0.$$.fragment, local);
			transition_out(comment1.$$.fragment, local);
			transition_out(comment2.$$.fragment, local);
			transition_out(comment3.$$.fragment, local);
			transition_out(charitycards.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_component(carousel0);
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
			destroy_component(carousel1);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(br10);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(br11);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(br12);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(br13);
			if (detaching) detach_dev(t20);
			if (detaching) detach_dev(br14);
			if (detaching) detach_dev(t21);
			destroy_component(contentholder, detaching);
			if (detaching) detach_dev(t22);
			if (detaching) detach_dev(br15);
			if (detaching) detach_dev(t23);
			if (detaching) detach_dev(br16);
			if (detaching) detach_dev(t24);
			if (detaching) detach_dev(br17);
			if (detaching) detach_dev(t25);
			if (detaching) detach_dev(br18);
			if (detaching) detach_dev(t26);
			if (detaching) detach_dev(br19);
			if (detaching) detach_dev(t27);
			if (detaching) detach_dev(section1);
			destroy_component(comment0);
			destroy_component(comment1);
			destroy_component(comment2);
			destroy_component(comment3);
			if (detaching) detach_dev(t35);
			if (detaching) detach_dev(br24);
			if (detaching) detach_dev(t36);
			if (detaching) detach_dev(br25);
			if (detaching) detach_dev(t37);
			if (detaching) detach_dev(br26);
			if (detaching) detach_dev(t38);
			if (detaching) detach_dev(br27);
			if (detaching) detach_dev(t39);
			if (detaching) detach_dev(br28);
			if (detaching) detach_dev(t40);
			if (detaching) detach_dev(section2);
			destroy_component(charitycards);
			if (detaching) detach_dev(t41);
			if (detaching) detach_dev(br29);
			if (detaching) detach_dev(t42);
			if (detaching) detach_dev(br30);
			if (detaching) detach_dev(t43);
			if (detaching) detach_dev(br31);
			if (detaching) detach_dev(t44);
			if (detaching) detach_dev(br32);
			if (detaching) detach_dev(t45);
			if (detaching) detach_dev(br33);
			if (detaching) detach_dev(t46);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzFjMzA5NzQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
