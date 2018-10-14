<template>
	<section>
		<h1 v-if="diceRollResult" class="result">
			{{ diceRollResult }}
		</h1>

		<v-form @submit.prevent="onSubmit">
			<DiceRollInput v-model.number="diceRollInput" id="diceRoll" />
		</v-form>

		<div v-if="resourcesGained.length">
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
		<p v-else-if="diceRollResult">
			No resources this roll...
		</p>
	</section>
</template>


<script>
import DiceRollInput from './input/DiceRoll.vue';

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
				.map(([type, amount]) => ({
					amount,
					type: `${type.charAt(0).toUpperCase()}${type.slice(1)}`,
				}))
				.sort((a, b) => b.amount - a.amount);
		},
	},

	methods: {
		onSubmit() {
			this.diceRollResult = this.diceRollInput;
			this.diceRollInput = null;
		},
	},

	components: { DiceRollInput },
};
</script>


<style lang="scss" scoped>
@import "../sass/list";

section {
	margin-bottom: 2rem;
}

h1 {
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
}

ul {
	@extend %list-clear;
}

.resource-amount {
	margin-right: .5em;
	letter-spacing: -.1em;
	font-weight: bold;
	font-style: italic;
	&::before {
		content: "x";
	}
}
</style>
