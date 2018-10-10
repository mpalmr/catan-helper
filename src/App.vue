<template>
	<div id="app">
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
				<settlement v-bind="settlement" />
			</li>
		</ul>

		<Button @click="toggleCreateSettlement" :disabled="!hasMinimumSettlements">
			{{ createSettlementButtonText }}
		</Button>

		<CreateSettlement v-if="isCreatingSettlement" :createSettlement="createSettlement" />
	</div>
</template>


<script>
import Settlement from './components/Settlement.vue';
import CreateSettlement from './components/CreateSettlement.vue';
import Button from './components/Button.vue';

export default {
	name: 'app',

	data() {
		return {
			settlements: [],
			isCreatingSettlementToggled: false,
		};
	},

	computed: {
		hasMinimumSettlements() {
			return this.settlements.length >= 2;
		},

		isCreatingSettlement() {
			return !this.hasMinimumSettlements || this.isCreatingSettlementToggled;
		},

		createSettlementButtonText() {
			return this.isCreatingSettlement ? 'Cancel' : 'Create Settlement';
		},
	},

	methods: {
		toggleCreateSettlement() {
			this.isCreatingSettlementToggled = !this.isCreatingSettlementToggled;
		},

		createSettlement(settlement) {
			this.settlements.push(settlement);
		},
	},

	components: { Settlement, CreateSettlement, Button },
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
