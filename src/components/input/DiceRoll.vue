<template>
	<b-form-group label-for="dice-roll" label="Dice Roll">
		<b-form-input
			@input="handleInput"
			:value="inputValue"
			id="dice-roll"
			type="number"
			min="2"
			max="12"
			step="1"
		/>
	</b-form-group>
</template>


<script>
export default {
	props: {
		value: {
			type: Number,
			validator(value) {
				return value >= 2 && value <= 12;
			},
		},
		id: {
			type: String,
			required: true,
		},
	},

	data() {
		return { inputValue: this.value };
	},

	methods: {
		handleInput(value) {
			this.$emit('input', value === '' ? null : value);
		},
	},
};
</script>
