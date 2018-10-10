<template>
	<b-form @submit.prevent="onSubmit">
		<b-form-group label-for="dice-roll" label="Dice Roll">
			<b-form-input
				v-model.number="diceRoll"
				v-mask="'##'"
				id="dice-roll"
				type="number"
				min="2"
				max="12"
				step="1"
			/>
		</b-form-group>

		<b-button type="submit" variant="info">
			Roll
		</b-button>
	</b-form>
</template>


<script>
export default {
	props: {
		resources: {
			required: true,
			validator(value) {
				return value.length;
			},
		},
	},

	data() {
		return {
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
				this.diceRoll = null;
			}
		},
	},
};
</script>
