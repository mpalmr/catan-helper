<template>
	<b-form @submit.prevent="onSubmit" @reset="onReset" novalidate>
		<h1>
			Create Settlement
		</h1>

		<ul>
			<li v-for="(resource, i) in resources" :key="resource.id">
				<b-form-group
					:invalid-feedback="resource.errors.type"
					:label-for="`type_${resource.id}`"
					label="Type"
				>
					<b-form-select
						v-model="resource.type"
						:id="`type_${resource.id}`"
						:options="resourceTypeOptions"
					/>
				</b-form-group>

				<b-form-group
					:invalid-feedback="resource.errors.diceNumber"
					:label-for="`diceNumber_${resource.id}`"
					label="Dice Number"
				>
					<b-form-input
						v-model.number="resource.diceNumber"
						:id="`diceNumber_${resource.id}`"
						type="number"
						min="2"
						max="12"
						step="1"
					/>
				</b-form-group>

				<b-button v-if="i > 0" @click="removeResource(resource.id)">
					Remove
				</b-button>
			</li>
		</ul>

		<b-button @click="addResource" :disabled="this.resources.length >= 3" variant="info">
			Add Resource
		</b-button>
		<b-button type="reset" variant="warning">
			Reset
		</b-button>
		<b-button type="submit" variant="success">
			Create
		</b-button>
	</b-form>
</template>


<script>
import uuid from 'uuid/v4';
import { resources as resourceTypes } from '@/constants';

const resourceTypeOptions = [{ value: null, text: 'Select...', disabled: true }]
	.concat(resourceTypes.map(({ id, name }) => ({ value: id, text: name })));

function validateDiceNumber(diceNumber) {
	if (diceNumber === null) return 'Required';
	if (diceNumber < 2) return 'Minimum of two.';
	if (diceNumber > 12) return 'Maximum of twelve.';
	return null;
}

const defaultSettlement = () => ({
	id: uuid(),
	type: null,
	diceNumber: null,
	applyErrors: false,
	errors: { type: null, diceNumber: null },
});

export default {
	props: {
		createSettlement: { type: Function, required: true },
	},

	data() {
		return {
			resourceTypeOptions,
			resources: [defaultSettlement()],
		};
	},

	computed: {
		isValid() {
			return this.resources
				.every(({ errors }) => Object.values(errors)
					.every(error => error === null));
		},
	},

	methods: {
		validate() {
			this.resources = this.resources.map(resource => ({
				...resource,
				applyErrors: true,
				errors: {
					type: resource.type ? null : 'Required',
					diceNumber: validateDiceNumber(resource.diceNumber),
				},
			}));
		},

		addResource() {
			this.validate();
			if (this.isValid) this.resources.push(defaultSettlement());
		},

		removeResource(id) {
			this.resources = this.resources.filter(resource => resource.id !== id);
		},

		onReset() {
			this.resources = [defaultSettlement()];
		},

		onSubmit() {
			this.validate();
			if (this.isValid) {
				this.createSettlement({
					id: uuid(),
					resources: this.resources.map(({ applyErrors, errors, ...resource }) => resource),
				});
				this.onReset();
			}
		},
	},
};
</script>


<style lang="scss" scoped>
@import "../sass/list";

ul {
	@extend %list-clear;
	margin-bottom: 2em;

	> li {
		margin-top: 1.5em;
	}
}

Button + Button {
	margin-left: .5em;
}
</style>
