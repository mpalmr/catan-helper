<template>
	<div id="app">
		<ul v-for="settlement in settlements" :key="settlement.id">
			<li>
				<Settlement :settlement="settlement"/>
			</li>
		</ul>

		<button @click="addSettlement">
			Add Settlement
		</button>
	</div>
</template>


<script>
import Settlement from "./components/Settlement.vue";

export default {
	name: "app",

	data() {
		return {
			settlements: [{ id: "a" }]
		};
	},

	methods: {
		addSettlement() {
			this.settlements.push({ id: "b" });
		}
	},

	components: {
		Settlement
	}
};
</script>
