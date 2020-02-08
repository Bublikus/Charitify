import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, Q as ListItems, I as onMount, g as create_component, m as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component } from './client.b0361f7d.js';
import { a as api } from './index.06062564.js';

/* src/routes/lists/charities.svelte generated by Svelte v3.18.1 */

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
		await new Promise(r => setTimeout(r, 1000));
		const chars = await api.getCharities();
		$$invalidate(0, chariries = new Array(5).fill(chars).reduce((a, o) => a.concat(...o), []));
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("chariries" in $$props) $$invalidate(0, chariries = $$props.chariries);
	};

	return [chariries];
}

class Charities extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Charities",
			options,
			id: create_fragment.name
		});
	}
}

export default Charities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcml0aWVzLjQ5MzdlZDYzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2xpc3RzL2NoYXJpdGllcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJ1xuICAgIGltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJ1xuICAgIGltcG9ydCB7IExpc3RJdGVtcyB9IGZyb20gJy4uLy4uL2xheW91dHMnXG5cbiAgICBsZXQgY2hhcmlyaWVzID0gW11cblxuICAgIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgMTAwMCkpXG4gICAgICAgIGNvbnN0IGNoYXJzID0gYXdhaXQgYXBpLmdldENoYXJpdGllcygpXG4gICAgICAgIGNoYXJpcmllcyA9IG5ldyBBcnJheSg1KS5maWxsKGNoYXJzKS5yZWR1Y2UoKGEsIG8pID0+IGEuY29uY2F0KC4uLm8pLCBbXSlcbiAgICB9KVxuPC9zY3JpcHQ+XG5cbjxMaXN0SXRlbXMgaXRlbXM9e2NoYXJpcmllc30vPlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FLUSxTQUFTOztDQUViLE9BQU87WUFDTyxPQUFPLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUNuQyxLQUFLLFNBQVMsR0FBRyxDQUFDLFlBQVk7a0JBQ3BDLFNBQVMsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
