import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, p as space, e as element, o as create_component, r as claim_space, c as claim_element, b as children, q as claim_component, f as detach_dev, h as add_location, g as attr_dev, k as insert_dev, l as append_dev, t as mount_component, n as noop, w as transition_in, x as transition_out, y as destroy_component } from './index.5da15d85.js';
import './_commonjsHelpers.7baa5521.js';
import { T as TitleSubTitle, C as Carousel, D as DonatingGroup, P as Progress, A as AvatarAndName, R as Rate, b as CharityCards, F as Footer } from './index.e332c9d1.js';

/* src/routes/charity.svelte generated by Svelte v3.16.7 */
const file = "src/routes/charity.svelte";

function create_fragment(ctx) {
	let t0;
	let section3;
	let section0;
	let br0;
	let t1;
	let t2;
	let br1;
	let t3;
	let section1;
	let div0;
	let t4;
	let t5;
	let t6;
	let section2;
	let t7;
	let t8;
	let br2;
	let t9;
	let br3;
	let t10;
	let br4;
	let t11;
	let div1;
	let t12;
	let br5;
	let t13;
	let br6;
	let t14;
	let br7;
	let t15;
	let br8;
	let t16;
	let br9;
	let t17;
	let div2;
	let t18;
	let br10;
	let t19;
	let br11;
	let t20;
	let br12;
	let t21;
	let br13;
	let t22;
	let br14;
	let t23;
	let current;
	const titlesubtitle = new TitleSubTitle({ $$inline: true });
	const carousel = new Carousel({ $$inline: true });
	const donatinggroup = new DonatingGroup({ $$inline: true });

	const progress = new Progress({
			props: { value: "65", size: "big" },
			$$inline: true
		});

	const avatarandname = new AvatarAndName({
			props: {
				src: "https://placeimg.com/300/300/people",
				title: "Tina Kandelaki",
				subtitle: "ORG charity charitify"
			},
			$$inline: true
		});

	const rate = new Rate({ $$inline: true });
	const charitycards0 = new CharityCards({ $$inline: true });
	const charitycards1 = new CharityCards({ $$inline: true });
	const footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			section3 = element("section");
			section0 = element("section");
			br0 = element("br");
			t1 = space();
			create_component(titlesubtitle.$$.fragment);
			t2 = space();
			br1 = element("br");
			t3 = space();
			section1 = element("section");
			div0 = element("div");
			create_component(carousel.$$.fragment);
			t4 = space();
			create_component(donatinggroup.$$.fragment);
			t5 = space();
			create_component(progress.$$.fragment);
			t6 = space();
			section2 = element("section");
			create_component(avatarandname.$$.fragment);
			t7 = space();
			create_component(rate.$$.fragment);
			t8 = space();
			br2 = element("br");
			t9 = space();
			br3 = element("br");
			t10 = space();
			br4 = element("br");
			t11 = space();
			div1 = element("div");
			create_component(charitycards0.$$.fragment);
			t12 = space();
			br5 = element("br");
			t13 = space();
			br6 = element("br");
			t14 = space();
			br7 = element("br");
			t15 = space();
			br8 = element("br");
			t16 = space();
			br9 = element("br");
			t17 = space();
			div2 = element("div");
			create_component(charitycards1.$$.fragment);
			t18 = space();
			br10 = element("br");
			t19 = space();
			br11 = element("br");
			t20 = space();
			br12 = element("br");
			t21 = space();
			br13 = element("br");
			t22 = space();
			br14 = element("br");
			t23 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			section3 = claim_element(nodes, "SECTION", { class: true });
			var section3_nodes = children(section3);
			section0 = claim_element(section3_nodes, "SECTION", {});
			var section0_nodes = children(section0);
			br0 = claim_element(section0_nodes, "BR", {});
			t1 = claim_space(section0_nodes);
			claim_component(titlesubtitle.$$.fragment, section0_nodes);
			t2 = claim_space(section0_nodes);
			br1 = claim_element(section0_nodes, "BR", {});
			section0_nodes.forEach(detach_dev);
			t3 = claim_space(section3_nodes);
			section1 = claim_element(section3_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div0 = claim_element(section1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(carousel.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(section1_nodes);
			claim_component(donatinggroup.$$.fragment, section1_nodes);
			section1_nodes.forEach(detach_dev);
			t5 = claim_space(section3_nodes);
			claim_component(progress.$$.fragment, section3_nodes);
			t6 = claim_space(section3_nodes);
			section2 = claim_element(section3_nodes, "SECTION", { class: true });
			var section2_nodes = children(section2);
			claim_component(avatarandname.$$.fragment, section2_nodes);
			t7 = claim_space(section2_nodes);
			claim_component(rate.$$.fragment, section2_nodes);
			section2_nodes.forEach(detach_dev);
			section3_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			br2 = claim_element(nodes, "BR", {});
			t9 = claim_space(nodes);
			br3 = claim_element(nodes, "BR", {});
			t10 = claim_space(nodes);
			br4 = claim_element(nodes, "BR", {});
			t11 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(charitycards0.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			br5 = claim_element(nodes, "BR", {});
			t13 = claim_space(nodes);
			br6 = claim_element(nodes, "BR", {});
			t14 = claim_space(nodes);
			br7 = claim_element(nodes, "BR", {});
			t15 = claim_space(nodes);
			br8 = claim_element(nodes, "BR", {});
			t16 = claim_space(nodes);
			br9 = claim_element(nodes, "BR", {});
			t17 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(charitycards1.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			br10 = claim_element(nodes, "BR", {});
			t19 = claim_space(nodes);
			br11 = claim_element(nodes, "BR", {});
			t20 = claim_space(nodes);
			br12 = claim_element(nodes, "BR", {});
			t21 = claim_space(nodes);
			br13 = claim_element(nodes, "BR", {});
			t22 = claim_space(nodes);
			br14 = claim_element(nodes, "BR", {});
			t23 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - Charity page and donate.";
			add_location(br0, file, 38, 8, 903);
			add_location(br1, file, 40, 8, 941);
			add_location(section0, file, 37, 4, 885);
			attr_dev(div0, "class", "pics-wrap svelte-uz5elz");
			add_location(div0, file, 44, 8, 996);
			attr_dev(section1, "class", "top svelte-uz5elz");
			add_location(section1, file, 43, 4, 966);
			attr_dev(section2, "class", "rate-section svelte-uz5elz");
			add_location(section2, file, 53, 4, 1144);
			attr_dev(section3, "class", "container");
			add_location(section3, file, 35, 0, 852);
			add_location(br2, file, 64, 0, 1399);
			add_location(br3, file, 65, 0, 1404);
			add_location(br4, file, 66, 0, 1409);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 68, 0, 1415);
			add_location(br5, file, 72, 0, 1467);
			add_location(br6, file, 73, 0, 1472);
			add_location(br7, file, 74, 0, 1477);
			add_location(br8, file, 75, 0, 1482);
			add_location(br9, file, 76, 0, 1487);
			attr_dev(div2, "class", "container");
			add_location(div2, file, 78, 0, 1493);
			add_location(br10, file, 82, 0, 1545);
			add_location(br11, file, 83, 0, 1550);
			add_location(br12, file, 84, 0, 1555);
			add_location(br13, file, 85, 0, 1560);
			add_location(br14, file, 86, 0, 1565);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section3, anchor);
			append_dev(section3, section0);
			append_dev(section0, br0);
			append_dev(section0, t1);
			mount_component(titlesubtitle, section0, null);
			append_dev(section0, t2);
			append_dev(section0, br1);
			append_dev(section3, t3);
			append_dev(section3, section1);
			append_dev(section1, div0);
			mount_component(carousel, div0, null);
			append_dev(section1, t4);
			mount_component(donatinggroup, section1, null);
			append_dev(section3, t5);
			mount_component(progress, section3, null);
			append_dev(section3, t6);
			append_dev(section3, section2);
			mount_component(avatarandname, section2, null);
			append_dev(section2, t7);
			mount_component(rate, section2, null);
			insert_dev(target, t8, anchor);
			insert_dev(target, br2, anchor);
			insert_dev(target, t9, anchor);
			insert_dev(target, br3, anchor);
			insert_dev(target, t10, anchor);
			insert_dev(target, br4, anchor);
			insert_dev(target, t11, anchor);
			insert_dev(target, div1, anchor);
			mount_component(charitycards0, div1, null);
			insert_dev(target, t12, anchor);
			insert_dev(target, br5, anchor);
			insert_dev(target, t13, anchor);
			insert_dev(target, br6, anchor);
			insert_dev(target, t14, anchor);
			insert_dev(target, br7, anchor);
			insert_dev(target, t15, anchor);
			insert_dev(target, br8, anchor);
			insert_dev(target, t16, anchor);
			insert_dev(target, br9, anchor);
			insert_dev(target, t17, anchor);
			insert_dev(target, div2, anchor);
			mount_component(charitycards1, div2, null);
			insert_dev(target, t18, anchor);
			insert_dev(target, br10, anchor);
			insert_dev(target, t19, anchor);
			insert_dev(target, br11, anchor);
			insert_dev(target, t20, anchor);
			insert_dev(target, br12, anchor);
			insert_dev(target, t21, anchor);
			insert_dev(target, br13, anchor);
			insert_dev(target, t22, anchor);
			insert_dev(target, br14, anchor);
			insert_dev(target, t23, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(titlesubtitle.$$.fragment, local);
			transition_in(carousel.$$.fragment, local);
			transition_in(donatinggroup.$$.fragment, local);
			transition_in(progress.$$.fragment, local);
			transition_in(avatarandname.$$.fragment, local);
			transition_in(rate.$$.fragment, local);
			transition_in(charitycards0.$$.fragment, local);
			transition_in(charitycards1.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(titlesubtitle.$$.fragment, local);
			transition_out(carousel.$$.fragment, local);
			transition_out(donatinggroup.$$.fragment, local);
			transition_out(progress.$$.fragment, local);
			transition_out(avatarandname.$$.fragment, local);
			transition_out(rate.$$.fragment, local);
			transition_out(charitycards0.$$.fragment, local);
			transition_out(charitycards1.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section3);
			destroy_component(titlesubtitle);
			destroy_component(carousel);
			destroy_component(donatinggroup);
			destroy_component(progress);
			destroy_component(avatarandname);
			destroy_component(rate);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(br2);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(br3);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(br4);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div1);
			destroy_component(charitycards0);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(br5);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(br6);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(br7);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(br8);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(br9);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(div2);
			destroy_component(charitycards1);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(br10);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(br11);
			if (detaching) detach_dev(t20);
			if (detaching) detach_dev(br12);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(br13);
			if (detaching) detach_dev(t22);
			if (detaching) detach_dev(br14);
			if (detaching) detach_dev(t23);
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

class Charity extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Charity",
			options,
			id: create_fragment.name
		});
	}
}

export default Charity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcml0eS43YmM3MjMzMi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
