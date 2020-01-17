import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, r as space, e as element, H as create_component, t as text, u as claim_space, c as claim_element, a as children, I as claim_component, f as detach_dev, b as claim_text, h as attr_dev, g as add_location, W as set_style, j as insert_dev, J as mount_component, k as append_dev, n as noop, x as transition_in, y as transition_out, K as destroy_component } from './index.f1512f61.js';
import { C as Carousel, P as Progress, T as TitleSubTitle, a as CharityCards, b as ContentHolder, A as AvatarAndName } from './index.dbc0bcd5.js';

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
	let br29;
	let t41;
	let section2;
	let t42;
	let br30;
	let t43;
	let br31;
	let t44;
	let br32;
	let t45;
	let br33;
	let current;
	const carousel = new Carousel({ $$inline: true });

	const progress = new Progress({
			props: { borderRadius: "0 0 8px 8px", value: "30" },
			$$inline: true
		});

	const titlesubtitle = new TitleSubTitle({ $$inline: true });
	const charitycards0 = new CharityCards({ props: { amount: "2" }, $$inline: true });
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

	const avatarandname2 = new AvatarAndName({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const avatarandname3 = new AvatarAndName({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const charitycards1 = new CharityCards({ props: { amount: "2" }, $$inline: true });

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
			create_component(charitycards0.$$.fragment);
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
			create_component(avatarandname0.$$.fragment);
			t28 = space();
			br20 = element("br");
			t29 = space();
			li1 = element("li");
			create_component(avatarandname1.$$.fragment);
			t30 = space();
			br21 = element("br");
			t31 = space();
			li2 = element("li");
			create_component(avatarandname2.$$.fragment);
			t32 = space();
			br22 = element("br");
			t33 = space();
			li3 = element("li");
			create_component(avatarandname3.$$.fragment);
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
			br29 = element("br");
			t41 = space();
			section2 = element("section");
			create_component(charitycards1.$$.fragment);
			t42 = space();
			br30 = element("br");
			t43 = space();
			br31 = element("br");
			t44 = space();
			br32 = element("br");
			t45 = space();
			br33 = element("br");
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
			claim_component(charitycards0.$$.fragment, section0_nodes);
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
			claim_component(avatarandname0.$$.fragment, li0_nodes);
			t28 = claim_space(li0_nodes);
			br20 = claim_element(li0_nodes, "BR", {});
			li0_nodes.forEach(detach_dev);
			t29 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { style: true });
			var li1_nodes = children(li1);
			claim_component(avatarandname1.$$.fragment, li1_nodes);
			t30 = claim_space(li1_nodes);
			br21 = claim_element(li1_nodes, "BR", {});
			li1_nodes.forEach(detach_dev);
			t31 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { style: true });
			var li2_nodes = children(li2);
			claim_component(avatarandname2.$$.fragment, li2_nodes);
			t32 = claim_space(li2_nodes);
			br22 = claim_element(li2_nodes, "BR", {});
			li2_nodes.forEach(detach_dev);
			t33 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { style: true });
			var li3_nodes = children(li3);
			claim_component(avatarandname3.$$.fragment, li3_nodes);
			t34 = claim_space(li3_nodes);
			br23 = claim_element(li3_nodes, "BR", {});
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t35 = claim_space(section1_nodes);
			br24 = claim_element(section1_nodes, "BR", {});
			t36 = claim_space(section1_nodes);
			br25 = claim_element(section1_nodes, "BR", {});
			section1_nodes.forEach(detach_dev);
			t37 = claim_space(nodes);
			br26 = claim_element(nodes, "BR", {});
			t38 = claim_space(nodes);
			br27 = claim_element(nodes, "BR", {});
			t39 = claim_space(nodes);
			br28 = claim_element(nodes, "BR", {});
			t40 = claim_space(nodes);
			br29 = claim_element(nodes, "BR", {});
			t41 = claim_space(nodes);
			section2 = claim_element(nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			claim_component(charitycards1.$$.fragment, section2_nodes);
			section2_nodes.forEach(detach_dev);
			t42 = claim_space(nodes);
			br30 = claim_element(nodes, "BR", {});
			t43 = claim_space(nodes);
			br31 = claim_element(nodes, "BR", {});
			t44 = claim_space(nodes);
			br32 = claim_element(nodes, "BR", {});
			t45 = claim_space(nodes);
			br33 = claim_element(nodes, "BR", {});
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
			add_location(br14, file, 60, 0, 888);
			add_location(br15, file, 64, 0, 912);
			add_location(br16, file, 65, 0, 917);
			add_location(br17, file, 66, 0, 922);
			add_location(br18, file, 67, 0, 927);
			add_location(br19, file, 68, 0, 932);
			add_location(br20, file, 79, 12, 1259);
			set_style(li0, "width", "50%");
			add_location(li0, file, 73, 8, 1023);
			add_location(br21, file, 87, 12, 1522);
			set_style(li1, "width", "50%");
			add_location(li1, file, 81, 8, 1286);
			add_location(br22, file, 95, 12, 1785);
			set_style(li2, "width", "50%");
			add_location(li2, file, 89, 8, 1549);
			add_location(br23, file, 103, 12, 2048);
			set_style(li3, "width", "50%");
			add_location(li3, file, 97, 8, 1812);
			set_style(ul, "display", "flex");
			set_style(ul, "flex-wrap", "wrap");
			add_location(ul, file, 72, 4, 971);
			add_location(br24, file, 107, 4, 2082);
			add_location(br25, file, 108, 4, 2091);
			attr_dev(section1, "class", "container");
			add_location(section1, file, 70, 0, 938);
			add_location(br26, file, 112, 0, 2109);
			add_location(br27, file, 113, 0, 2114);
			add_location(br28, file, 114, 0, 2119);
			add_location(br29, file, 115, 0, 2124);
			attr_dev(section2, "class", "container");
			add_location(section2, file, 117, 0, 2130);
			add_location(br30, file, 121, 0, 2201);
			add_location(br31, file, 122, 0, 2206);
			add_location(br32, file, 123, 0, 2211);
			add_location(br33, file, 124, 0, 2216);
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
			mount_component(charitycards0, section0, null);
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
			mount_component(avatarandname0, li0, null);
			append_dev(li0, t28);
			append_dev(li0, br20);
			append_dev(ul, t29);
			append_dev(ul, li1);
			mount_component(avatarandname1, li1, null);
			append_dev(li1, t30);
			append_dev(li1, br21);
			append_dev(ul, t31);
			append_dev(ul, li2);
			mount_component(avatarandname2, li2, null);
			append_dev(li2, t32);
			append_dev(li2, br22);
			append_dev(ul, t33);
			append_dev(ul, li3);
			mount_component(avatarandname3, li3, null);
			append_dev(li3, t34);
			append_dev(li3, br23);
			append_dev(section1, t35);
			append_dev(section1, br24);
			append_dev(section1, t36);
			append_dev(section1, br25);
			insert_dev(target, t37, anchor);
			insert_dev(target, br26, anchor);
			insert_dev(target, t38, anchor);
			insert_dev(target, br27, anchor);
			insert_dev(target, t39, anchor);
			insert_dev(target, br28, anchor);
			insert_dev(target, t40, anchor);
			insert_dev(target, br29, anchor);
			insert_dev(target, t41, anchor);
			insert_dev(target, section2, anchor);
			mount_component(charitycards1, section2, null);
			insert_dev(target, t42, anchor);
			insert_dev(target, br30, anchor);
			insert_dev(target, t43, anchor);
			insert_dev(target, br31, anchor);
			insert_dev(target, t44, anchor);
			insert_dev(target, br32, anchor);
			insert_dev(target, t45, anchor);
			insert_dev(target, br33, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(carousel.$$.fragment, local);
			transition_in(progress.$$.fragment, local);
			transition_in(titlesubtitle.$$.fragment, local);
			transition_in(charitycards0.$$.fragment, local);
			transition_in(contentholder.$$.fragment, local);
			transition_in(avatarandname0.$$.fragment, local);
			transition_in(avatarandname1.$$.fragment, local);
			transition_in(avatarandname2.$$.fragment, local);
			transition_in(avatarandname3.$$.fragment, local);
			transition_in(charitycards1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(carousel.$$.fragment, local);
			transition_out(progress.$$.fragment, local);
			transition_out(titlesubtitle.$$.fragment, local);
			transition_out(charitycards0.$$.fragment, local);
			transition_out(contentholder.$$.fragment, local);
			transition_out(avatarandname0.$$.fragment, local);
			transition_out(avatarandname1.$$.fragment, local);
			transition_out(avatarandname2.$$.fragment, local);
			transition_out(avatarandname3.$$.fragment, local);
			transition_out(charitycards1.$$.fragment, local);
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
			destroy_component(charitycards0);
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
			destroy_component(avatarandname0);
			destroy_component(avatarandname1);
			destroy_component(avatarandname2);
			destroy_component(avatarandname3);
			if (detaching) detach_dev(t37);
			if (detaching) detach_dev(br26);
			if (detaching) detach_dev(t38);
			if (detaching) detach_dev(br27);
			if (detaching) detach_dev(t39);
			if (detaching) detach_dev(br28);
			if (detaching) detach_dev(t40);
			if (detaching) detach_dev(br29);
			if (detaching) detach_dev(t41);
			if (detaching) detach_dev(section2);
			destroy_component(charitycards1);
			if (detaching) detach_dev(t42);
			if (detaching) detach_dev(br30);
			if (detaching) detach_dev(t43);
			if (detaching) detach_dev(br31);
			if (detaching) detach_dev(t44);
			if (detaching) detach_dev(br32);
			if (detaching) detach_dev(t45);
			if (detaching) detach_dev(br33);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWE5OGE1ZTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=