<template>
	<div id="app">
		<ul v-for="settlement in settlements" :key="settlement.id">
			<li>
				<settlement :settlement="settlement"/>
			</li>
		</ul>

		<button @click="addSettlement">
			Add Settlement
		</button>
	</div>
</template>


<script>
import Settlement from './components/Settlement.vue';

export default {
	name: 'app',

	data() {
		return {
			settlements: [],
		};
	},

	methods: {
		addSettlement() {
			this.settlements.push({ id: 'b' });
		}
	},

	components: {
		Settlement,
	}
};
</script>
