<template>
	<b-container>
		<DiceRoll v-if="hasMinimumSettlements" :settlements="settlements" />

		<h1>Settlements</h1>
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
				<Settlement v-bind="settlement" :upgradeSettlement="upgradeSettlement" />
			</li>
		</ul>

		<b-button @click="toggleCreate" v-if="hasMinimumSettlements" variant="warning">
			{{ this.isCreating ? 'Cancel' : 'Create Settlement' }}
		</b-button>

		<CreateSettlement v-if="isCreating" :createSettlement="createSettlement" />
	</b-container>
</template>


<script>
import savedGames from '@/saved-games';
import DiceRoll from '@/components/DiceRoll';
import Settlement from '@/components/Settlement';
import CreateSettlement from '@/components/CreateSettlement';

export default {
	data() {
		return {
			settlements: savedGames.games.settlements,
			isCreatingToggled: false,
		};
	},

	computed: {
		hasMinimumSettlements() {
			return this.settlements.length >= 2;
		},

		isCreating() {
			return !this.hasMinimumSettlements || this.isCreatingToggled;
		},
	},

	methods: {
		toggleCreate() {
			this.isCreatingToggled = !this.isCreatingToggled;
		},

		createSettlement(settlement) {
			this.settlements.push(settlement);
		},

		upgradeSettlement(id) {
			this.settlements = this.settlements
				.map(settlement => (settlement.id !== id ? settlement : {
					...settlement,
					isCity: true,
				}));
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
