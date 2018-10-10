<template>
	<b-container>
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
				<settlement v-bind="settlement" />
			</li>
		</ul>

		<!-- <DiceRoll /> -->

		<b-button @click="toggleCreateSettlement" :disabled="!hasMinimumSettlements" variant="warning">
			{{ createSettlementButtonText }}
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

	components: { DiceRoll, Settlement, CreateSettlement },
};
</script>

<style lang="scss">
@import "../sass/list";

.settlements {
	@extend %list-clear;
}
</style>
