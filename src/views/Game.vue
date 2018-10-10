<template>
	<b-container>
		<DiceRoll v-if="hasMinimumSettlements" />

		<h1>Settlements</h1>
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
				<settlement v-bind="settlement" />
			</li>
		</ul>

		<b-button @click="toggleCreateSettlement" v-if="hasMinimumSettlements" variant="warning">
			{{ this.isCreatingSettlement ? 'Cancel' : 'Create Settlement' }}
		</b-button>

		<CreateSettlement v-if="isCreatingSettlement" :createSettlement="createSettlement" />
	</b-container>
</template>


<script>
import DiceRoll from '@/components/DiceRoll';
import Settlement from '@/components/Settlement';
import CreateSettlement from '@/components/CreateSettlement';

export default {
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
	},

	methods: {
		toggleCreateSettlement() {
			this.isCreatingSettlementToggled = !this.isCreatingSettlementToggled;
		},

		createSettlement(settlement) {
			this.settlements.push(settlement);
		},
	},

	components: { DiceRoll, Settlement, CreateSettlement },
};
</script>

<style lang="scss">
@import "../sass/list";

.settlements {
	@extend %list-clear;
}
</style>
