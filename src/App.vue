<template>
	<div id="app">
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
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
		return { settlements: [] };
	},

	methods: {
		addSettlement() {
			this.settlements.push({ id: 'b' });
		},
	},

	components: { Settlement },
};
</script>

<style lang="scss">
@import "./sass/list";

body {
	margin: 0;
	font-family: Helvetica, Arial, sans-serif;
}

.settlements {
	@extend %list-clear;
}
</style>
