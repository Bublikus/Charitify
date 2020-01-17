import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, r as space, e as element, t as text, G as create_component, u as claim_space, c as claim_element, a as children, b as claim_text, f as detach_dev, H as claim_component, g as add_location, V as set_style, h as attr_dev, j as insert_dev, k as append_dev, I as mount_component, n as noop, x as transition_in, y as transition_out, J as destroy_component } from './index.1e1e7223.js';
import { C as Carousel } from './index.8b19345e.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h10;
	let t1;
	let span0;
	let t2;
	let t3;
	let h11;
	let t4;
	let span1;
	let t5;
	let t6;
	let h20;
	let t7;
	let span2;
	let t8;
	let t9;
	let h21;
	let t10;
	let span3;
	let t11;
	let t12;
	let h30;
	let t13;
	let span4;
	let t14;
	let t15;
	let h31;
	let t16;
	let span5;
	let t17;
	let t18;
	let h4;
	let t19;
	let span6;
	let t20;
	let t21;
	let h5;
	let t22;
	let span7;
	let t23;
	let t24;
	let h6;
	let t25;
	let span8;
	let t26;
	let t27;
	let div;
	let t28;
	let section;
	let current;

	const carousel = new Carousel({
			props: { images: /*images*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			h10 = element("h1");
			t1 = text("Main title 1");
			span0 = element("span");
			t2 = text("with text");
			t3 = space();
			h11 = element("h1");
			t4 = text("Main title 1");
			span1 = element("span");
			t5 = text("with text");
			t6 = space();
			h20 = element("h2");
			t7 = text("Main title 2");
			span2 = element("span");
			t8 = text("with text");
			t9 = space();
			h21 = element("h2");
			t10 = text("Main title 2");
			span3 = element("span");
			t11 = text("with text");
			t12 = space();
			h30 = element("h3");
			t13 = text("Main title 3");
			span4 = element("span");
			t14 = text("with text");
			t15 = space();
			h31 = element("h3");
			t16 = text("Main title 3");
			span5 = element("span");
			t17 = text("with text");
			t18 = space();
			h4 = element("h4");
			t19 = text("Main title 4");
			span6 = element("span");
			t20 = text("with text");
			t21 = space();
			h5 = element("h5");
			t22 = text("Main title 5");
			span7 = element("span");
			t23 = text("with text");
			t24 = space();
			h6 = element("h6");
			t25 = text("Main title 6");
			span8 = element("span");
			t26 = text("with text");
			t27 = space();
			div = element("div");
			create_component(carousel.$$.fragment);
			t28 = space();
			section = element("section");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			h10 = claim_element(nodes, "H1", {});
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "Main title 1");
			h10_nodes.forEach(detach_dev);
			span0 = claim_element(nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t2 = claim_text(span0_nodes, "with text");
			span0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			h11 = claim_element(nodes, "H1", { style: true });
			var h11_nodes = children(h11);
			t4 = claim_text(h11_nodes, "Main title 1");
			h11_nodes.forEach(detach_dev);
			span1 = claim_element(nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t5 = claim_text(span1_nodes, "with text");
			span1_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			h20 = claim_element(nodes, "H2", {});
			var h20_nodes = children(h20);
			t7 = claim_text(h20_nodes, "Main title 2");
			h20_nodes.forEach(detach_dev);
			span2 = claim_element(nodes, "SPAN", {});
			var span2_nodes = children(span2);
			t8 = claim_text(span2_nodes, "with text");
			span2_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			h21 = claim_element(nodes, "H2", { style: true });
			var h21_nodes = children(h21);
			t10 = claim_text(h21_nodes, "Main title 2");
			h21_nodes.forEach(detach_dev);
			span3 = claim_element(nodes, "SPAN", {});
			var span3_nodes = children(span3);
			t11 = claim_text(span3_nodes, "with text");
			span3_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			h30 = claim_element(nodes, "H3", {});
			var h30_nodes = children(h30);
			t13 = claim_text(h30_nodes, "Main title 3");
			h30_nodes.forEach(detach_dev);
			span4 = claim_element(nodes, "SPAN", {});
			var span4_nodes = children(span4);
			t14 = claim_text(span4_nodes, "with text");
			span4_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", { style: true });
			var h31_nodes = children(h31);
			t16 = claim_text(h31_nodes, "Main title 3");
			h31_nodes.forEach(detach_dev);
			span5 = claim_element(nodes, "SPAN", {});
			var span5_nodes = children(span5);
			t17 = claim_text(span5_nodes, "with text");
			span5_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			h4 = claim_element(nodes, "H4", {});
			var h4_nodes = children(h4);
			t19 = claim_text(h4_nodes, "Main title 4");
			h4_nodes.forEach(detach_dev);
			span6 = claim_element(nodes, "SPAN", {});
			var span6_nodes = children(span6);
			t20 = claim_text(span6_nodes, "with text");
			span6_nodes.forEach(detach_dev);
			t21 = claim_space(nodes);
			h5 = claim_element(nodes, "H5", {});
			var h5_nodes = children(h5);
			t22 = claim_text(h5_nodes, "Main title 5");
			h5_nodes.forEach(detach_dev);
			span7 = claim_element(nodes, "SPAN", {});
			var span7_nodes = children(span7);
			t23 = claim_text(span7_nodes, "with text");
			span7_nodes.forEach(detach_dev);
			t24 = claim_space(nodes);
			h6 = claim_element(nodes, "H6", {});
			var h6_nodes = children(h6);
			t25 = claim_text(h6_nodes, "Main title 6");
			h6_nodes.forEach(detach_dev);
			span8 = claim_element(nodes, "SPAN", {});
			var span8_nodes = children(span8);
			t26 = claim_text(span8_nodes, "with text");
			span8_nodes.forEach(detach_dev);
			t27 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(carousel.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Charitify - list of charities you can donate.";
			add_location(h10, file, 62, 0, 1935);
			add_location(span0, file, 62, 21, 1956);
			set_style(h11, "font-size", "2em");
			add_location(h11, file, 63, 0, 1979);
			add_location(span1, file, 63, 44, 2023);
			add_location(h20, file, 64, 0, 2046);
			add_location(span2, file, 64, 21, 2067);
			set_style(h21, "font-size", "1.5em");
			add_location(h21, file, 65, 0, 2090);
			add_location(span3, file, 65, 46, 2136);
			add_location(h30, file, 66, 0, 2159);
			add_location(span4, file, 66, 21, 2180);
			set_style(h31, "font-size", "1.25em");
			add_location(h31, file, 67, 0, 2203);
			add_location(span5, file, 67, 47, 2250);
			add_location(h4, file, 68, 0, 2273);
			add_location(span6, file, 68, 21, 2294);
			add_location(h5, file, 69, 0, 2317);
			add_location(span7, file, 69, 21, 2338);
			add_location(h6, file, 70, 0, 2361);
			add_location(span8, file, 70, 21, 2382);
			attr_dev(div, "class", "top-pic svelte-sujd4x");
			add_location(div, file, 72, 0, 2406);
			attr_dev(section, "class", "container");
			add_location(section, file, 76, 0, 2461);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h10, anchor);
			append_dev(h10, t1);
			insert_dev(target, span0, anchor);
			append_dev(span0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, h11, anchor);
			append_dev(h11, t4);
			insert_dev(target, span1, anchor);
			append_dev(span1, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, h20, anchor);
			append_dev(h20, t7);
			insert_dev(target, span2, anchor);
			append_dev(span2, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, h21, anchor);
			append_dev(h21, t10);
			insert_dev(target, span3, anchor);
			append_dev(span3, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, h30, anchor);
			append_dev(h30, t13);
			insert_dev(target, span4, anchor);
			append_dev(span4, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, t16);
			insert_dev(target, span5, anchor);
			append_dev(span5, t17);
			insert_dev(target, t18, anchor);
			insert_dev(target, h4, anchor);
			append_dev(h4, t19);
			insert_dev(target, span6, anchor);
			append_dev(span6, t20);
			insert_dev(target, t21, anchor);
			insert_dev(target, h5, anchor);
			append_dev(h5, t22);
			insert_dev(target, span7, anchor);
			append_dev(span7, t23);
			insert_dev(target, t24, anchor);
			insert_dev(target, h6, anchor);
			append_dev(h6, t25);
			insert_dev(target, span8, anchor);
			append_dev(span8, t26);
			insert_dev(target, t27, anchor);
			insert_dev(target, div, anchor);
			mount_component(carousel, div, null);
			insert_dev(target, t28, anchor);
			insert_dev(target, section, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(carousel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(carousel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h10);
			if (detaching) detach_dev(span0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(h11);
			if (detaching) detach_dev(span1);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(h20);
			if (detaching) detach_dev(span2);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(h21);
			if (detaching) detach_dev(span3);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(span4);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(span5);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(h4);
			if (detaching) detach_dev(span6);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(h5);
			if (detaching) detach_dev(span7);
			if (detaching) detach_dev(t24);
			if (detaching) detach_dev(h6);
			if (detaching) detach_dev(span8);
			if (detaching) detach_dev(t27);
			if (detaching) detach_dev(div);
			destroy_component(carousel);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(section);
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

function instance($$self) {
	const cards = [
		{
			src: "https://placeimg.com/300/300/tech",
			title: "The main title and short description.",
			percent: 45,
			orgHead: "Tina Kandelaki",
			orgHeadSrc: "https://placeimg.com/300/300/people",
			organization: "ORG charity of Charitify."
		},
		{
			src: "https://placeimg.com/300/300/arch",
			title: "Second bigger major card title line with a bit longer description.",
			percent: 65,
			orgHead: "Tina Kandelaki",
			orgHeadSrc: "https://placeimg.com/300/300/people",
			organization: "ORG charity of Charitify."
		},
		{
			src: "https://placeimg.com/300/300/any",
			title: "The main title and short description.",
			percent: 5,
			orgHead: "Tinaramisimuss Kandelakinuskas",
			orgHeadSrc: "https://placeimg.com/300/300/people",
			organization: "ORG charity of Charitify."
		},
		{
			src: "https://placeimg.com/300/300/nature",
			title: "The main title and short description.",
			percent: 95,
			orgHead: "Tina Kandelaki",
			orgHeadSrc: "https://placeimg.com/300/300/people",
			organization: "ORG giant charity organization of big Charitify company."
		}
	];

	const images = cards.map(card => ({
		src: [card.src, card.src, card.src],
		alt: card.title
	}));

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		
	};

	return [images];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTE1Y2M2MmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICcuLi9sYXlvdXRzJ1xuXG4gICAgY29uc3QgY2FyZHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzMwMC8zMDAvdGVjaCcsXG4gICAgICAgICAgICB0aXRsZTogJ1RoZSBtYWluIHRpdGxlIGFuZCBzaG9ydCBkZXNjcmlwdGlvbi4nLFxuICAgICAgICAgICAgcGVyY2VudDogNDUsXG4gICAgICAgICAgICBvcmdIZWFkOiAnVGluYSBLYW5kZWxha2knLFxuICAgICAgICAgICAgb3JnSGVhZFNyYzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzMwMC8zMDAvcGVvcGxlJyxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJ09SRyBjaGFyaXR5IG9mIENoYXJpdGlmeS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL3BsYWNlaW1nLmNvbS8zMDAvMzAwL2FyY2gnLFxuICAgICAgICAgICAgdGl0bGU6ICdTZWNvbmQgYmlnZ2VyIG1ham9yIGNhcmQgdGl0bGUgbGluZSB3aXRoIGEgYml0IGxvbmdlciBkZXNjcmlwdGlvbi4nLFxuICAgICAgICAgICAgcGVyY2VudDogNjUsXG4gICAgICAgICAgICBvcmdIZWFkOiAnVGluYSBLYW5kZWxha2knLFxuICAgICAgICAgICAgb3JnSGVhZFNyYzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzMwMC8zMDAvcGVvcGxlJyxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJ09SRyBjaGFyaXR5IG9mIENoYXJpdGlmeS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL3BsYWNlaW1nLmNvbS8zMDAvMzAwL2FueScsXG4gICAgICAgICAgICB0aXRsZTogJ1RoZSBtYWluIHRpdGxlIGFuZCBzaG9ydCBkZXNjcmlwdGlvbi4nLFxuICAgICAgICAgICAgcGVyY2VudDogNSxcbiAgICAgICAgICAgIG9yZ0hlYWQ6ICdUaW5hcmFtaXNpbXVzcyBLYW5kZWxha2ludXNrYXMnLFxuICAgICAgICAgICAgb3JnSGVhZFNyYzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzMwMC8zMDAvcGVvcGxlJyxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJ09SRyBjaGFyaXR5IG9mIENoYXJpdGlmeS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL3BsYWNlaW1nLmNvbS8zMDAvMzAwL25hdHVyZScsXG4gICAgICAgICAgICB0aXRsZTogJ1RoZSBtYWluIHRpdGxlIGFuZCBzaG9ydCBkZXNjcmlwdGlvbi4nLFxuICAgICAgICAgICAgcGVyY2VudDogOTUsXG4gICAgICAgICAgICBvcmdIZWFkOiAnVGluYSBLYW5kZWxha2knLFxuICAgICAgICAgICAgb3JnSGVhZFNyYzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzMwMC8zMDAvcGVvcGxlJyxcbiAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJ09SRyBnaWFudCBjaGFyaXR5IG9yZ2FuaXphdGlvbiBvZiBiaWcgQ2hhcml0aWZ5IGNvbXBhbnkuJyxcbiAgICAgICAgfSxcbiAgICBdXG5cbiAgICBjb25zdCBpbWFnZXMgPSBjYXJkcy5tYXAoY2FyZCA9PiAoe1xuICAgICAgICBzcmM6IFtjYXJkLnNyYywgY2FyZC5zcmMsIGNhcmQuc3JjXSxcbiAgICAgICAgYWx0OiBjYXJkLnRpdGxlLFxuICAgIH0pKVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICAudG9wLXBpYyB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctcHJpbWFyeSk7XG4gICAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICAgIDx0aXRsZT5DaGFyaXRpZnkgLSBsaXN0IG9mIGNoYXJpdGllcyB5b3UgY2FuIGRvbmF0ZS48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPk1haW4gdGl0bGUgMTwvaDE+PHNwYW4+d2l0aCB0ZXh0PC9zcGFuPlxuPGgxIHN0eWxlPVwiZm9udC1zaXplOiAyZW1cIj5NYWluIHRpdGxlIDE8L2gxPjxzcGFuPndpdGggdGV4dDwvc3Bhbj5cbjxoMj5NYWluIHRpdGxlIDI8L2gyPjxzcGFuPndpdGggdGV4dDwvc3Bhbj5cbjxoMiBzdHlsZT1cImZvbnQtc2l6ZTogMS41ZW1cIj5NYWluIHRpdGxlIDI8L2gyPjxzcGFuPndpdGggdGV4dDwvc3Bhbj5cbjxoMz5NYWluIHRpdGxlIDM8L2gzPjxzcGFuPndpdGggdGV4dDwvc3Bhbj5cbjxoMyBzdHlsZT1cImZvbnQtc2l6ZTogMS4yNWVtXCI+TWFpbiB0aXRsZSAzPC9oMz48c3Bhbj53aXRoIHRleHQ8L3NwYW4+XG48aDQ+TWFpbiB0aXRsZSA0PC9oND48c3Bhbj53aXRoIHRleHQ8L3NwYW4+XG48aDU+TWFpbiB0aXRsZSA1PC9oNT48c3Bhbj53aXRoIHRleHQ8L3NwYW4+XG48aDY+TWFpbiB0aXRsZSA2PC9oNj48c3Bhbj53aXRoIHRleHQ8L3NwYW4+XG5cbjxkaXYgY2xhc3M9XCJ0b3AtcGljXCI+XG4gICAgPENhcm91c2VsIHtpbWFnZXN9Lz5cbjwvZGl2PlxuXG48c2VjdGlvbiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BR1UsS0FBSzs7R0FFSCxHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSx1Q0FBdUM7R0FDOUMsT0FBTyxFQUFFLEVBQUU7R0FDWCxPQUFPLEVBQUUsZ0JBQWdCO0dBQ3pCLFVBQVUsRUFBRSxxQ0FBcUM7R0FDakQsWUFBWSxFQUFFLDJCQUEyQjs7O0dBR3pDLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLG9FQUFvRTtHQUMzRSxPQUFPLEVBQUUsRUFBRTtHQUNYLE9BQU8sRUFBRSxnQkFBZ0I7R0FDekIsVUFBVSxFQUFFLHFDQUFxQztHQUNqRCxZQUFZLEVBQUUsMkJBQTJCOzs7R0FHekMsR0FBRyxFQUFFLGtDQUFrQztHQUN2QyxLQUFLLEVBQUUsdUNBQXVDO0dBQzlDLE9BQU8sRUFBRSxDQUFDO0dBQ1YsT0FBTyxFQUFFLGdDQUFnQztHQUN6QyxVQUFVLEVBQUUscUNBQXFDO0dBQ2pELFlBQVksRUFBRSwyQkFBMkI7OztHQUd6QyxHQUFHLEVBQUUscUNBQXFDO0dBQzFDLEtBQUssRUFBRSx1Q0FBdUM7R0FDOUMsT0FBTyxFQUFFLEVBQUU7R0FDWCxPQUFPLEVBQUUsZ0JBQWdCO0dBQ3pCLFVBQVUsRUFBRSxxQ0FBcUM7R0FDakQsWUFBWSxFQUFFLDBEQUEwRDs7OztPQUkxRSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0VBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7RUFDbEMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
