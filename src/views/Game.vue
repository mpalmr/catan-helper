<template>
	<b-container>
		<DiceRoll v-if="hasMinimumSettlements" :settlements="settlements" />

		<h1>Settlements</h1>
		<ul class="settlements">
			<li v-for="settlement in settlements" :key="settlement.id">
				<settlement v-bind="settlement" />
			</li>
		</ul>

		<b-button @click="toggleCreate" v-if="hasMinimumSettlements" variant="warning">
			{{ this.isCreating ? 'Cancel' : 'Create Settlement' }}
		</b-button>

		<CreateSettlement v-if="isCreating" :createSettlement="createSettlement" />
	</b-container>
</template>


<script>
import { getGame } from '@/storage';
import DiceRoll from '@/components/DiceRoll';
import Settlement from '@/components/Settlement';
import CreateSettlement from '@/components/CreateSettlement';

export default {
	data() {
		return {
			settlements: getGame().settlements,
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
