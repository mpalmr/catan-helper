<template>
	<b-form-group :label-for="id" label="Dice Roll">
		<b-form-input
			@input="handleInput"
			:value="inputValue"
			:id="id"
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
		id: { type: String, required: true },
		value: {
			type: Number,
			validator(value) {
				return value >= 2 && value <= 12;
			},
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
