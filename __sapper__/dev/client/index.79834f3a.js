import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, p as space, e as element, o as create_component, A as text, r as claim_space, c as claim_element, b as children, q as claim_component, f as detach_dev, B as claim_text, g as attr_dev, h as add_location, k as insert_dev, t as mount_component, l as append_dev, w as transition_in, x as transition_out, y as destroy_component, n as noop, j as set_style } from './index.272f3989.js';
import { C as Carousel, P as Progress, T as TitleSubTitle, a as ContentHolder, b as CharityCards, F as Footer, D as Divider, c as Comment } from './index.00f71c0c.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

// (58:4) <Carousel amount="2">
function create_default_slot_1(ctx) {
	let current;

	const charitycards = new CharityCards({
			props: { amount: "2", listName: "Nearest to you:" },
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
		id: create_default_slot_1.name,
		type: "slot",
		source: "(58:4) <Carousel amount=\\\"2\\\">",
		ctx
	});

	return block;
}

// (76:4) <Carousel amount="4">
function create_default_slot(ctx) {
	let t0;
	let h3;
	let t1;
	let t2;
	let t3;
	let ul;
	let li0;
	let t4;
	let br0;
	let t5;
	let li1;
	let t6;
	let br1;
	let t7;
	let li2;
	let t8;
	let br2;
	let t9;
	let li3;
	let t10;
	let br3;
	let current;
	const divider0 = new Divider({ props: { size: "16" }, $$inline: true });
	const divider1 = new Divider({ props: { size: "20" }, $$inline: true });

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

	const block = {
		c: function create() {
			create_component(divider0.$$.fragment);
			t0 = space();
			h3 = element("h3");
			t1 = text("Comments:");
			t2 = space();
			create_component(divider1.$$.fragment);
			t3 = space();
			ul = element("ul");
			li0 = element("li");
			create_component(comment0.$$.fragment);
			t4 = space();
			br0 = element("br");
			t5 = space();
			li1 = element("li");
			create_component(comment1.$$.fragment);
			t6 = space();
			br1 = element("br");
			t7 = space();
			li2 = element("li");
			create_component(comment2.$$.fragment);
			t8 = space();
			br2 = element("br");
			t9 = space();
			li3 = element("li");
			create_component(comment3.$$.fragment);
			t10 = space();
			br3 = element("br");
			this.h();
		},
		l: function claim(nodes) {
			claim_component(divider0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Comments:");
			h3_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(divider1.$$.fragment, nodes);
			t3 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { style: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { style: true });
			var li0_nodes = children(li0);
			claim_component(comment0.$$.fragment, li0_nodes);
			t4 = claim_space(li0_nodes);
			br0 = claim_element(li0_nodes, "BR", {});
			li0_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { style: true });
			var li1_nodes = children(li1);
			claim_component(comment1.$$.fragment, li1_nodes);
			t6 = claim_space(li1_nodes);
			br1 = claim_element(li1_nodes, "BR", {});
			li1_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { style: true });
			var li2_nodes = children(li2);
			claim_component(comment2.$$.fragment, li2_nodes);
			t8 = claim_space(li2_nodes);
			br2 = claim_element(li2_nodes, "BR", {});
			li2_nodes.forEach(detach_dev);
			t9 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { style: true });
			var li3_nodes = children(li3);
			claim_component(comment3.$$.fragment, li3_nodes);
			t10 = claim_space(li3_nodes);
			br3 = claim_element(li3_nodes, "BR", {});
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", "h2");
			add_location(h3, file, 77, 8, 1245);
			add_location(br0, file, 87, 16, 1623);
			set_style(li0, "width", "50%");
			add_location(li0, file, 81, 12, 1369);
			add_location(br1, file, 95, 16, 1912);
			set_style(li1, "width", "50%");
			add_location(li1, file, 89, 12, 1658);
			add_location(br2, file, 103, 16, 2201);
			set_style(li2, "width", "50%");
			add_location(li2, file, 97, 12, 1947);
			add_location(br3, file, 111, 16, 2490);
			set_style(li3, "width", "50%");
			add_location(li3, file, 105, 12, 2236);
			set_style(ul, "display", "flex");
			set_style(ul, "flex-wrap", "wrap");
			add_location(ul, file, 80, 8, 1313);
		},
		m: function mount(target, anchor) {
			mount_component(divider0, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t1);
			insert_dev(target, t2, anchor);
			mount_component(divider1, target, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			mount_component(comment0, li0, null);
			append_dev(li0, t4);
			append_dev(li0, br0);
			append_dev(ul, t5);
			append_dev(ul, li1);
			mount_component(comment1, li1, null);
			append_dev(li1, t6);
			append_dev(li1, br1);
			append_dev(ul, t7);
			append_dev(ul, li2);
			mount_component(comment2, li2, null);
			append_dev(li2, t8);
			append_dev(li2, br2);
			append_dev(ul, t9);
			append_dev(ul, li3);
			mount_component(comment3, li3, null);
			append_dev(li3, t10);
			append_dev(li3, br3);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(divider0.$$.fragment, local);
			transition_in(divider1.$$.fragment, local);
			transition_in(comment0.$$.fragment, local);
			transition_in(comment1.$$.fragment, local);
			transition_in(comment2.$$.fragment, local);
			transition_in(comment3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(divider0.$$.fragment, local);
			transition_out(divider1.$$.fragment, local);
			transition_out(comment0.$$.fragment, local);
			transition_out(comment1.$$.fragment, local);
			transition_out(comment2.$$.fragment, local);
			transition_out(comment3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(divider0, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t2);
			destroy_component(divider1, detaching);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(ul);
			destroy_component(comment0);
			destroy_component(comment1);
			destroy_component(comment2);
			destroy_component(comment3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(76:4) <Carousel amount=\\\"4\\\">",
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
	let section;
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
	let t28;
	let br20;
	let t29;
	let br21;
	let t30;
	let br22;
	let t31;
	let br23;
	let t32;
	let br24;
	let t33;
	let t34;
	let br25;
	let t35;
	let br26;
	let t36;
	let br27;
	let t37;
	let br28;
	let t38;
	let br29;
	let t39;
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
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const contentholder = new ContentHolder({ $$inline: true });

	const carousel2 = new Carousel({
			props: {
				amount: "4",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
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
			section = element("section");
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
			create_component(carousel2.$$.fragment);
			t28 = space();
			br20 = element("br");
			t29 = space();
			br21 = element("br");
			t30 = space();
			br22 = element("br");
			t31 = space();
			br23 = element("br");
			t32 = space();
			br24 = element("br");
			t33 = space();
			create_component(charitycards.$$.fragment);
			t34 = space();
			br25 = element("br");
			t35 = space();
			br26 = element("br");
			t36 = space();
			br27 = element("br");
			t37 = space();
			br28 = element("br");
			t38 = space();
			br29 = element("br");
			t39 = space();
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
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			claim_component(titlesubtitle.$$.fragment, section_nodes);
			t10 = claim_space(section_nodes);
			br5 = claim_element(section_nodes, "BR", {});
			t11 = claim_space(section_nodes);
			br6 = claim_element(section_nodes, "BR", {});
			t12 = claim_space(section_nodes);
			br7 = claim_element(section_nodes, "BR", {});
			t13 = claim_space(section_nodes);
			br8 = claim_element(section_nodes, "BR", {});
			t14 = claim_space(section_nodes);
			br9 = claim_element(section_nodes, "BR", {});
			t15 = claim_space(section_nodes);
			claim_component(carousel1.$$.fragment, section_nodes);
			t16 = claim_space(section_nodes);
			br10 = claim_element(section_nodes, "BR", {});
			t17 = claim_space(section_nodes);
			br11 = claim_element(section_nodes, "BR", {});
			t18 = claim_space(section_nodes);
			br12 = claim_element(section_nodes, "BR", {});
			t19 = claim_space(section_nodes);
			br13 = claim_element(section_nodes, "BR", {});
			t20 = claim_space(section_nodes);
			br14 = claim_element(section_nodes, "BR", {});
			t21 = claim_space(section_nodes);
			claim_component(contentholder.$$.fragment, section_nodes);
			t22 = claim_space(section_nodes);
			br15 = claim_element(section_nodes, "BR", {});
			t23 = claim_space(section_nodes);
			br16 = claim_element(section_nodes, "BR", {});
			t24 = claim_space(section_nodes);
			br17 = claim_element(section_nodes, "BR", {});
			t25 = claim_space(section_nodes);
			br18 = claim_element(section_nodes, "BR", {});
			t26 = claim_space(section_nodes);
			br19 = claim_element(section_nodes, "BR", {});
			t27 = claim_space(section_nodes);
			claim_component(carousel2.$$.fragment, section_nodes);
			t28 = claim_space(section_nodes);
			br20 = claim_element(section_nodes, "BR", {});
			t29 = claim_space(section_nodes);
			br21 = claim_element(section_nodes, "BR", {});
			t30 = claim_space(section_nodes);
			br22 = claim_element(section_nodes, "BR", {});
			t31 = claim_space(section_nodes);
			br23 = claim_element(section_nodes, "BR", {});
			t32 = claim_space(section_nodes);
			br24 = claim_element(section_nodes, "BR", {});
			t33 = claim_space(section_nodes);
			claim_component(charitycards.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			t34 = claim_space(nodes);
			br25 = claim_element(nodes, "BR", {});
			t35 = claim_space(nodes);
			br26 = claim_element(nodes, "BR", {});
			t36 = claim_space(nodes);
			br27 = claim_element(nodes, "BR", {});
			t37 = claim_space(nodes);
			br28 = claim_element(nodes, "BR", {});
			t38 = claim_space(nodes);
			br29 = claim_element(nodes, "BR", {});
			t39 = claim_space(nodes);
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
			add_location(br5, file, 51, 4, 921);
			add_location(br6, file, 52, 4, 930);
			add_location(br7, file, 53, 4, 939);
			add_location(br8, file, 54, 4, 948);
			add_location(br9, file, 55, 4, 957);
			add_location(br10, file, 61, 4, 1072);
			add_location(br11, file, 62, 4, 1081);
			add_location(br12, file, 63, 4, 1090);
			add_location(br13, file, 64, 4, 1099);
			add_location(br14, file, 65, 4, 1108);
			add_location(br15, file, 69, 4, 1140);
			add_location(br16, file, 70, 4, 1149);
			add_location(br17, file, 71, 4, 1158);
			add_location(br18, file, 72, 4, 1167);
			add_location(br19, file, 73, 4, 1176);
			add_location(br20, file, 116, 4, 2548);
			add_location(br21, file, 117, 4, 2557);
			add_location(br22, file, 118, 4, 2566);
			add_location(br23, file, 119, 4, 2575);
			add_location(br24, file, 120, 4, 2584);
			attr_dev(section, "class", "container");
			add_location(section, file, 44, 0, 762);
			add_location(br25, file, 125, 0, 2633);
			add_location(br26, file, 126, 0, 2638);
			add_location(br27, file, 127, 0, 2643);
			add_location(br28, file, 128, 0, 2648);
			add_location(br29, file, 129, 0, 2653);
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
			insert_dev(target, section, anchor);
			mount_component(titlesubtitle, section, null);
			append_dev(section, t10);
			append_dev(section, br5);
			append_dev(section, t11);
			append_dev(section, br6);
			append_dev(section, t12);
			append_dev(section, br7);
			append_dev(section, t13);
			append_dev(section, br8);
			append_dev(section, t14);
			append_dev(section, br9);
			append_dev(section, t15);
			mount_component(carousel1, section, null);
			append_dev(section, t16);
			append_dev(section, br10);
			append_dev(section, t17);
			append_dev(section, br11);
			append_dev(section, t18);
			append_dev(section, br12);
			append_dev(section, t19);
			append_dev(section, br13);
			append_dev(section, t20);
			append_dev(section, br14);
			append_dev(section, t21);
			mount_component(contentholder, section, null);
			append_dev(section, t22);
			append_dev(section, br15);
			append_dev(section, t23);
			append_dev(section, br16);
			append_dev(section, t24);
			append_dev(section, br17);
			append_dev(section, t25);
			append_dev(section, br18);
			append_dev(section, t26);
			append_dev(section, br19);
			append_dev(section, t27);
			mount_component(carousel2, section, null);
			append_dev(section, t28);
			append_dev(section, br20);
			append_dev(section, t29);
			append_dev(section, br21);
			append_dev(section, t30);
			append_dev(section, br22);
			append_dev(section, t31);
			append_dev(section, br23);
			append_dev(section, t32);
			append_dev(section, br24);
			append_dev(section, t33);
			mount_component(charitycards, section, null);
			insert_dev(target, t34, anchor);
			insert_dev(target, br25, anchor);
			insert_dev(target, t35, anchor);
			insert_dev(target, br26, anchor);
			insert_dev(target, t36, anchor);
			insert_dev(target, br27, anchor);
			insert_dev(target, t37, anchor);
			insert_dev(target, br28, anchor);
			insert_dev(target, t38, anchor);
			insert_dev(target, br29, anchor);
			insert_dev(target, t39, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const carousel1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				carousel1_changes.$$scope = { dirty, ctx };
			}

			carousel1.$set(carousel1_changes);
			const carousel2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				carousel2_changes.$$scope = { dirty, ctx };
			}

			carousel2.$set(carousel2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(carousel0.$$.fragment, local);
			transition_in(progress.$$.fragment, local);
			transition_in(titlesubtitle.$$.fragment, local);
			transition_in(carousel1.$$.fragment, local);
			transition_in(contentholder.$$.fragment, local);
			transition_in(carousel2.$$.fragment, local);
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
			transition_out(carousel2.$$.fragment, local);
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
			if (detaching) detach_dev(section);
			destroy_component(titlesubtitle);
			destroy_component(carousel1);
			destroy_component(contentholder);
			destroy_component(carousel2);
			destroy_component(charitycards);
			if (detaching) detach_dev(t34);
			if (detaching) detach_dev(br25);
			if (detaching) detach_dev(t35);
			if (detaching) detach_dev(br26);
			if (detaching) detach_dev(t36);
			if (detaching) detach_dev(br27);
			if (detaching) detach_dev(t37);
			if (detaching) detach_dev(br28);
			if (detaching) detach_dev(t38);
			if (detaching) detach_dev(br29);
			if (detaching) detach_dev(t39);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzk4MzRmM2EuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
