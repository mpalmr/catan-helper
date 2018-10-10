<template>
	<b-container id="app">
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
				<settlement v-bind="settlement" />
			</li>
		</ul>

		<b-form-group label-for="dice-roll" label="Dice Roll">
			<b-form-input
				v-model.number="diceRoll"
				id="dice-roll"
				type="number"
				min="2"
				max="12"
				step="1"
			/>
		</b-form-group>

		<b-button @click="toggleCreateSettlement" :disabled="!hasMinimumSettlements" variant="warning">
			{{ createSettlementButtonText }}
		</b-button>

		<CreateSettlement v-if="isCreatingSettlement" :createSettlement="createSettlement" />
	</b-container>
</template>


<script>
import Settlement from '@/components/Settlement';
import CreateSettlement from '@/components/CreateSettlement';

export default {
	data() {
		return {
			diceRoll: null,
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

	components: { Settlement, CreateSettlement },
};
</script>

<style lang="scss">
@import "../sass/list";

.settlements {
	@extend %list-clear;
}
</style>
