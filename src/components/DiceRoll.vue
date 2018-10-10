<template>
	<section>
		<p v-if="result" class="result">
			{{ result }}
		</p>

		<b-form @submit.prevent="onSubmit">
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
		</b-form>
	</section>
</template>


<script>
export default {
	data() {
		return {
			result: null,
			diceRoll: null,
			error: null,
		};
	},

	methods: {
		onSubmit() {
			if (this.diceRoll === null) this.error = 'Required';
			else if (this.diceRoll < 2) this.error = 'Cannot be less than two';
			else if (this.diceRoll > 12) this.error = 'Cannot be more than twelve';
			else {
				this.error = null;
				this.result = this.diceRoll;
				this.diceRoll = null;
			}
		},
	},
};
</script>


<style lang="scss" scoped>
.result {
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
}
</style>
