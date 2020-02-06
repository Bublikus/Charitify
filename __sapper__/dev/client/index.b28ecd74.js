import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, p as space, e as element, o as create_component, A as text, r as claim_space, c as claim_element, b as children, q as claim_component, f as detach_dev, B as claim_text, g as attr_dev, h as add_location, k as insert_dev, t as mount_component, l as append_dev, w as transition_in, x as transition_out, y as destroy_component, n as noop, j as set_style } from './index.272f3989.js';
import { C as Carousel, P as Progress, T as TitleSubTitle, a as ContentHolder, D as Divider, L as ListOfFeatures, F as Footer, b as CharityCards, c as Comment } from './index.443cb765.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

// (59:4) <Carousel amount="2">
function create_default_slot_5(ctx) {
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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(59:4) <Carousel amount=\\\"2\\\">",
		ctx
	});

	return block;
}

// (84:16) <Comment                         src="https://placeimg.com/300/300/people"                         title="Tina Kandelaki"                         subtitle="ORG charity charitify"                 >
function create_default_slot_4(ctx) {
	let pre;
	let t;

	const block = {
		c: function create() {
			pre = element("pre");
			t = text("I really hate this things.\n                        It looks awful. Will never ever enter here.");
			this.h();
		},
		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {});
			var pre_nodes = children(pre);
			t = claim_text(pre_nodes, "I really hate this things.\n                        It looks awful. Will never ever enter here.");
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(pre, file, 88, 20, 1667);
		},
		m: function mount(target, anchor) {
			insert_dev(target, pre, anchor);
			append_dev(pre, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(84:16) <Comment                         src=\\\"https://placeimg.com/300/300/people\\\"                         title=\\\"Tina Kandelaki\\\"                         subtitle=\\\"ORG charity charitify\\\"                 >",
		ctx
	});

	return block;
}

// (97:16) <Comment                         src="https://placeimg.com/300/300/people"                         title="Tinaramisimuss el-de-la Kandelakinuskas"                         subtitle="ORG charity charitify"                 >
function create_default_slot_3(ctx) {
	let pre;
	let t;

	const block = {
		c: function create() {
			pre = element("pre");
			t = text("👍");
			this.h();
		},
		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {});
			var pre_nodes = children(pre);
			t = claim_text(pre_nodes, "👍");
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(pre, file, 101, 20, 2179);
		},
		m: function mount(target, anchor) {
			insert_dev(target, pre, anchor);
			append_dev(pre, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(97:16) <Comment                         src=\\\"https://placeimg.com/300/300/people\\\"                         title=\\\"Tinaramisimuss el-de-la Kandelakinuskas\\\"                         subtitle=\\\"ORG charity charitify\\\"                 >",
		ctx
	});

	return block;
}

// (109:16) <Comment                         src="https://placeimg.com/300/300/people"                         title="Tina Kandelaki"                         subtitle="ORG charity charitify"                 >
function create_default_slot_2(ctx) {
	let pre;
	let t;

	const block = {
		c: function create() {
			pre = element("pre");
			t = text("Like");
			this.h();
		},
		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {});
			var pre_nodes = children(pre);
			t = claim_text(pre_nodes, "Like");
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(pre, file, 113, 20, 2575);
		},
		m: function mount(target, anchor) {
			insert_dev(target, pre, anchor);
			append_dev(pre, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(109:16) <Comment                         src=\\\"https://placeimg.com/300/300/people\\\"                         title=\\\"Tina Kandelaki\\\"                         subtitle=\\\"ORG charity charitify\\\"                 >",
		ctx
	});

	return block;
}

// (121:16) <Comment                         src="https://placeimg.com/300/300/people"                         title="Tina Kandelaki"                         subtitle="Head of the organization with loooooooong-naaaaaamed charity"                 >
function create_default_slot_1(ctx) {
	let pre;
	let t;

	const block = {
		c: function create() {
			pre = element("pre");
			t = text("Don't listen him, hi's wrong. I think this is a good idea and we should continue.\n                         Anyway, I wish you lusk.");
			this.h();
		},
		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {});
			var pre_nodes = children(pre);
			t = claim_text(pre_nodes, "Don't listen him, hi's wrong. I think this is a good idea and we should continue.\n                         Anyway, I wish you lusk.");
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(pre, file, 125, 21, 3012);
		},
		m: function mount(target, anchor) {
			insert_dev(target, pre, anchor);
			append_dev(pre, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(121:16) <Comment                         src=\\\"https://placeimg.com/300/300/people\\\"                         title=\\\"Tina Kandelaki\\\"                         subtitle=\\\"Head of the organization with loooooooong-naaaaaamed charity\\\"                 >",
		ctx
	});

	return block;
}

// (81:4) <Carousel amount="4">
function create_default_slot(ctx) {
	let ul;
	let li0;
	let t0;
	let br0;
	let t1;
	let li1;
	let t2;
	let br1;
	let t3;
	let li2;
	let t4;
	let br2;
	let t5;
	let li3;
	let t6;
	let br3;
	let current;

	const comment0 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const comment1 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tinaramisimuss el-de-la Kandelakinuskas",
				subtitle: "ORG charity charitify",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const comment2 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const comment3 = new Comment({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "Head of the organization with loooooooong-naaaaaamed charity",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			create_component(comment0.$$.fragment);
			t0 = space();
			br0 = element("br");
			t1 = space();
			li1 = element("li");
			create_component(comment1.$$.fragment);
			t2 = space();
			br1 = element("br");
			t3 = space();
			li2 = element("li");
			create_component(comment2.$$.fragment);
			t4 = space();
			br2 = element("br");
			t5 = space();
			li3 = element("li");
			create_component(comment3.$$.fragment);
			t6 = space();
			br3 = element("br");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { style: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { style: true });
			var li0_nodes = children(li0);
			claim_component(comment0.$$.fragment, li0_nodes);
			t0 = claim_space(li0_nodes);
			br0 = claim_element(li0_nodes, "BR", {});
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { style: true });
			var li1_nodes = children(li1);
			claim_component(comment1.$$.fragment, li1_nodes);
			t2 = claim_space(li1_nodes);
			br1 = claim_element(li1_nodes, "BR", {});
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { style: true });
			var li2_nodes = children(li2);
			claim_component(comment2.$$.fragment, li2_nodes);
			t4 = claim_space(li2_nodes);
			br2 = claim_element(li2_nodes, "BR", {});
			li2_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { style: true });
			var li3_nodes = children(li3);
			claim_component(comment3.$$.fragment, li3_nodes);
			t6 = claim_space(li3_nodes);
			br3 = claim_element(li3_nodes, "BR", {});
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(br0, file, 93, 16, 1862);
			set_style(li0, "width", "50%");
			add_location(li0, file, 82, 12, 1410);
			add_location(br1, file, 105, 16, 2283);
			set_style(li1, "width", "50%");
			add_location(li1, file, 95, 12, 1897);
			add_location(br2, file, 117, 16, 2680);
			set_style(li2, "width", "50%");
			add_location(li2, file, 107, 12, 2318);
			add_location(br3, file, 130, 16, 3245);
			set_style(li3, "width", "50%");
			add_location(li3, file, 119, 12, 2715);
			set_style(ul, "display", "flex");
			set_style(ul, "flex-wrap", "wrap");
			set_style(ul, "overflow", "hidden");
			add_location(ul, file, 81, 8, 1336);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			mount_component(comment0, li0, null);
			append_dev(li0, t0);
			append_dev(li0, br0);
			append_dev(ul, t1);
			append_dev(ul, li1);
			mount_component(comment1, li1, null);
			append_dev(li1, t2);
			append_dev(li1, br1);
			append_dev(ul, t3);
			append_dev(ul, li2);
			mount_component(comment2, li2, null);
			append_dev(li2, t4);
			append_dev(li2, br2);
			append_dev(ul, t5);
			append_dev(ul, li3);
			mount_component(comment3, li3, null);
			append_dev(li3, t6);
			append_dev(li3, br3);
			current = true;
		},
		p: function update(ctx, dirty) {
			const comment0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				comment0_changes.$$scope = { dirty, ctx };
			}

			comment0.$set(comment0_changes);
			const comment1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				comment1_changes.$$scope = { dirty, ctx };
			}

			comment1.$set(comment1_changes);
			const comment2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				comment2_changes.$$scope = { dirty, ctx };
			}

			comment2.$set(comment2_changes);
			const comment3_changes = {};

			if (dirty & /*$$scope*/ 1) {
				comment3_changes.$$scope = { dirty, ctx };
			}

			comment3.$set(comment3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(comment0.$$.fragment, local);
			transition_in(comment1.$$.fragment, local);
			transition_in(comment2.$$.fragment, local);
			transition_in(comment3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(comment0.$$.fragment, local);
			transition_out(comment1.$$.fragment, local);
			transition_out(comment2.$$.fragment, local);
			transition_out(comment3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
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
		source: "(81:4) <Carousel amount=\\\"4\\\">",
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
	let h3;
	let t29;
	let t30;
	let t31;
	let t32;
	let br20;
	let t33;
	let br21;
	let t34;
	let br22;
	let t35;
	let br23;
	let t36;
	let br24;
	let t37;
	let t38;
	let br25;
	let t39;
	let br26;
	let t40;
	let br27;
	let t41;
	let br28;
	let t42;
	let br29;
	let t43;
	let t44;
	let br30;
	let t45;
	let br31;
	let t46;
	let br32;
	let t47;
	let br33;
	let t48;
	let br34;
	let t49;
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
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const contentholder0 = new ContentHolder({ $$inline: true });
	const divider0 = new Divider({ props: { size: "16" }, $$inline: true });
	const divider1 = new Divider({ props: { size: "20" }, $$inline: true });

	const carousel2 = new Carousel({
			props: {
				amount: "4",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const contentholder1 = new ContentHolder({ $$inline: true });
	const listoffeatures = new ListOfFeatures({ $$inline: true });
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
			create_component(contentholder0.$$.fragment);
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
			create_component(divider0.$$.fragment);
			t28 = space();
			h3 = element("h3");
			t29 = text("Comments:");
			t30 = space();
			create_component(divider1.$$.fragment);
			t31 = space();
			create_component(carousel2.$$.fragment);
			t32 = space();
			br20 = element("br");
			t33 = space();
			br21 = element("br");
			t34 = space();
			br22 = element("br");
			t35 = space();
			br23 = element("br");
			t36 = space();
			br24 = element("br");
			t37 = space();
			create_component(contentholder1.$$.fragment);
			t38 = space();
			br25 = element("br");
			t39 = space();
			br26 = element("br");
			t40 = space();
			br27 = element("br");
			t41 = space();
			br28 = element("br");
			t42 = space();
			br29 = element("br");
			t43 = space();
			create_component(listoffeatures.$$.fragment);
			t44 = space();
			br30 = element("br");
			t45 = space();
			br31 = element("br");
			t46 = space();
			br32 = element("br");
			t47 = space();
			br33 = element("br");
			t48 = space();
			br34 = element("br");
			t49 = space();
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
			claim_component(contentholder0.$$.fragment, section_nodes);
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
			claim_component(divider0.$$.fragment, section_nodes);
			t28 = claim_space(section_nodes);
			h3 = claim_element(section_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t29 = claim_text(h3_nodes, "Comments:");
			h3_nodes.forEach(detach_dev);
			t30 = claim_space(section_nodes);
			claim_component(divider1.$$.fragment, section_nodes);
			t31 = claim_space(section_nodes);
			claim_component(carousel2.$$.fragment, section_nodes);
			t32 = claim_space(section_nodes);
			br20 = claim_element(section_nodes, "BR", {});
			t33 = claim_space(section_nodes);
			br21 = claim_element(section_nodes, "BR", {});
			t34 = claim_space(section_nodes);
			br22 = claim_element(section_nodes, "BR", {});
			t35 = claim_space(section_nodes);
			br23 = claim_element(section_nodes, "BR", {});
			t36 = claim_space(section_nodes);
			br24 = claim_element(section_nodes, "BR", {});
			t37 = claim_space(section_nodes);
			claim_component(contentholder1.$$.fragment, section_nodes);
			t38 = claim_space(section_nodes);
			br25 = claim_element(section_nodes, "BR", {});
			t39 = claim_space(section_nodes);
			br26 = claim_element(section_nodes, "BR", {});
			t40 = claim_space(section_nodes);
			br27 = claim_element(section_nodes, "BR", {});
			t41 = claim_space(section_nodes);
			br28 = claim_element(section_nodes, "BR", {});
			t42 = claim_space(section_nodes);
			br29 = claim_element(section_nodes, "BR", {});
			t43 = claim_space(section_nodes);
			claim_component(listoffeatures.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			t44 = claim_space(nodes);
			br30 = claim_element(nodes, "BR", {});
			t45 = claim_space(nodes);
			br31 = claim_element(nodes, "BR", {});
			t46 = claim_space(nodes);
			br32 = claim_element(nodes, "BR", {});
			t47 = claim_space(nodes);
			br33 = claim_element(nodes, "BR", {});
			t48 = claim_space(nodes);
			br34 = claim_element(nodes, "BR", {});
			t49 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - list of charities you can donate.";
			attr_dev(div, "class", "top-pic svelte-b9nco9");
			add_location(div, file, 32, 0, 568);
			add_location(p, file, 38, 0, 665);
			add_location(br0, file, 40, 0, 761);
			add_location(br1, file, 41, 0, 766);
			add_location(br2, file, 42, 0, 771);
			add_location(br3, file, 43, 0, 776);
			add_location(br4, file, 44, 0, 781);
			add_location(br5, file, 52, 4, 945);
			add_location(br6, file, 53, 4, 954);
			add_location(br7, file, 54, 4, 963);
			add_location(br8, file, 55, 4, 972);
			add_location(br9, file, 56, 4, 981);
			add_location(br10, file, 62, 4, 1096);
			add_location(br11, file, 63, 4, 1105);
			add_location(br12, file, 64, 4, 1114);
			add_location(br13, file, 65, 4, 1123);
			add_location(br14, file, 66, 4, 1132);
			add_location(br15, file, 70, 4, 1164);
			add_location(br16, file, 71, 4, 1173);
			add_location(br17, file, 72, 4, 1182);
			add_location(br18, file, 73, 4, 1191);
			add_location(br19, file, 74, 4, 1200);
			attr_dev(h3, "class", "h2 text-right");
			add_location(h3, file, 77, 4, 1235);
			add_location(br20, file, 135, 4, 3303);
			add_location(br21, file, 136, 4, 3312);
			add_location(br22, file, 137, 4, 3321);
			add_location(br23, file, 138, 4, 3330);
			add_location(br24, file, 139, 4, 3339);
			add_location(br25, file, 143, 4, 3371);
			add_location(br26, file, 144, 4, 3380);
			add_location(br27, file, 145, 4, 3389);
			add_location(br28, file, 146, 4, 3398);
			add_location(br29, file, 147, 4, 3407);
			attr_dev(section, "class", "container");
			add_location(section, file, 45, 0, 786);
			add_location(br30, file, 152, 0, 3447);
			add_location(br31, file, 153, 0, 3452);
			add_location(br32, file, 154, 0, 3457);
			add_location(br33, file, 155, 0, 3462);
			add_location(br34, file, 156, 0, 3467);
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
			mount_component(contentholder0, section, null);
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
			mount_component(divider0, section, null);
			append_dev(section, t28);
			append_dev(section, h3);
			append_dev(h3, t29);
			append_dev(section, t30);
			mount_component(divider1, section, null);
			append_dev(section, t31);
			mount_component(carousel2, section, null);
			append_dev(section, t32);
			append_dev(section, br20);
			append_dev(section, t33);
			append_dev(section, br21);
			append_dev(section, t34);
			append_dev(section, br22);
			append_dev(section, t35);
			append_dev(section, br23);
			append_dev(section, t36);
			append_dev(section, br24);
			append_dev(section, t37);
			mount_component(contentholder1, section, null);
			append_dev(section, t38);
			append_dev(section, br25);
			append_dev(section, t39);
			append_dev(section, br26);
			append_dev(section, t40);
			append_dev(section, br27);
			append_dev(section, t41);
			append_dev(section, br28);
			append_dev(section, t42);
			append_dev(section, br29);
			append_dev(section, t43);
			mount_component(listoffeatures, section, null);
			insert_dev(target, t44, anchor);
			insert_dev(target, br30, anchor);
			insert_dev(target, t45, anchor);
			insert_dev(target, br31, anchor);
			insert_dev(target, t46, anchor);
			insert_dev(target, br32, anchor);
			insert_dev(target, t47, anchor);
			insert_dev(target, br33, anchor);
			insert_dev(target, t48, anchor);
			insert_dev(target, br34, anchor);
			insert_dev(target, t49, anchor);
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
			transition_in(contentholder0.$$.fragment, local);
			transition_in(divider0.$$.fragment, local);
			transition_in(divider1.$$.fragment, local);
			transition_in(carousel2.$$.fragment, local);
			transition_in(contentholder1.$$.fragment, local);
			transition_in(listoffeatures.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(carousel0.$$.fragment, local);
			transition_out(progress.$$.fragment, local);
			transition_out(titlesubtitle.$$.fragment, local);
			transition_out(carousel1.$$.fragment, local);
			transition_out(contentholder0.$$.fragment, local);
			transition_out(divider0.$$.fragment, local);
			transition_out(divider1.$$.fragment, local);
			transition_out(carousel2.$$.fragment, local);
			transition_out(contentholder1.$$.fragment, local);
			transition_out(listoffeatures.$$.fragment, local);
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
			destroy_component(contentholder0);
			destroy_component(divider0);
			destroy_component(divider1);
			destroy_component(carousel2);
			destroy_component(contentholder1);
			destroy_component(listoffeatures);
			if (detaching) detach_dev(t44);
			if (detaching) detach_dev(br30);
			if (detaching) detach_dev(t45);
			if (detaching) detach_dev(br31);
			if (detaching) detach_dev(t46);
			if (detaching) detach_dev(br32);
			if (detaching) detach_dev(t47);
			if (detaching) detach_dev(br33);
			if (detaching) detach_dev(t48);
			if (detaching) detach_dev(br34);
			if (detaching) detach_dev(t49);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjI4ZWNkNzQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
