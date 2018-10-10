<template>
	<section>
		<div v-if="diceRollResult">
			<h1 class="result">
				{{ diceRollResult }}
			</h1>

			<h2>Cards Gained</h2>
			<ul>
				<li v-for="resource in resourcesGained" :key="resource.type">
					<span class="resource-amount">
						{{ resource.amount }}
					</span>
					{{ resource.type }}
				</li>
			</ul>
		</div>

		<b-form @submit.prevent="onSubmit">
			<b-form-group label-for="dice-roll" label="Dice Roll">
				<b-form-input
					v-model.number="diceRollInput"
					id="dice-roll"
					type="number"
					min="2"
					max="12"
					step="1"
				/>
			</b-form-group>
		</b-form>
	</section>
</template>


<script>
export default {
	props: {
		settlements: { type: Array, required: true },
	},

	data() {
		return { diceRollResult: null, diceRollInput: null };
	},

	computed: {
		resourcesGained() {
			const totalsPerSettlement = this.settlements
				.map(({ resources, isCity }) => resources
					.filter(({ diceRoll }) => diceRoll === this.diceRollResult)
					.map(({ type }) => ({
						type,
						amount: isCity ? 2 : 1,
					})));

			const totals = totalsPerSettlement
				.flat()
				.reduce((acc, { type, amount }) => ({
					...acc,
					[type]: (acc[type] || 0) + amount,
				}), {});

			return Object.entries(totals)
				.map(([type, amount]) => ({ type, amount }))
				.sort((a, b) => b.amount - a.amount);
		},
	},

	methods: {
		onSubmit() {
			this.diceRollResult = this.diceRollInput;
			this.diceRollInput = null;
		},
	},
};
</script>


<style lang="scss" scoped>
@import "../sass/list";

h1 {
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
}

ul {
	@extend %list-clear;
}
</style>
