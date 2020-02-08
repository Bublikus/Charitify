import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, E as create_component, G as claim_component, I as mount_component, t as transition_in, h as transition_out, J as destroy_component } from './index.a981e887.js';
import { f as ListItems } from './index.ac55f844.js';
import { a as api } from './index.9c871af2.js';

/* src/routes/lists/index.svelte generated by Svelte v3.16.7 */

function create_fragment(ctx) {
	let current;

	const listitems = new ListItems({
			props: { items: /*chariries*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(listitems.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(listitems.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(listitems, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const listitems_changes = {};
			if (dirty & /*chariries*/ 1) listitems_changes.items = /*chariries*/ ctx[0];
			listitems.$set(listitems_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listitems.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listitems.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(listitems, detaching);
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
	let chariries = [];

	onMount(async () => {
		await new Promise(r => setTimeout(r, 2000));
		const chars = await api.getCharities();
		$$invalidate(0, chariries = new Array(1).fill(chars).reduce((a, o) => a.concat(...o), []));
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("chariries" in $$props) $$invalidate(0, chariries = $$props.chariries);
	};

	return [chariries];
}

class Lists extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Lists",
			options,
			id: create_fragment.name
		});
	}
}

export default Lists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjdhZmQyMzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbGlzdHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSdcbiAgICBpbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcydcbiAgICBpbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICcuLi8uLi9sYXlvdXRzJ1xuXG4gICAgbGV0IGNoYXJpcmllcyA9IFtdXG5cbiAgICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDIwMDApKVxuICAgICAgICBjb25zdCBjaGFycyA9IGF3YWl0IGFwaS5nZXRDaGFyaXRpZXMoKVxuICAgICAgICBjaGFyaXJpZXMgPSBuZXcgQXJyYXkoMSkuZmlsbChjaGFycykucmVkdWNlKChhLCBvKSA9PiBhLmNvbmNhdCguLi5vKSwgW10pXG4gICAgfSlcbjwvc2NyaXB0PlxuXG48TGlzdEl0ZW1zIGl0ZW1zPXtjaGFyaXJpZXN9Lz5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUtRLFNBQVM7O0NBRWIsT0FBTztZQUNPLE9BQU8sQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ25DLEtBQUssU0FBUyxHQUFHLENBQUMsWUFBWTtrQkFDcEMsU0FBUyxPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
