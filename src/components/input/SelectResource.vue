<template>
	<b-form-group :label-for="id" label="Resource Type">
		<b-form-select
			@change="handleChange"
			:value="inputValue"
			:id="id"
			:options="options"
			required
		/>
	</b-form-group>
</template>


<script>
import { resources as resourceTypes } from '@/constants';

const resourceIds = resourceTypes.map(({ id }) => id);

export default {
	props: {
		id: { type: String, required: true },
		options: { type: Array, required: true },
		value: {
			type: String,
			validator(value) {
				return resourceIds.includes(value);
			},
		},
	},

	data() {
		return { inputValue: this.value };
	},

	methods: {
		handleChange(value) {
			this.$emit('input', value);
		},
	},
};
</script>
