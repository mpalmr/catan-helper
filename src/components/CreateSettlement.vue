<template>
	<form @submit.prevent="onSubmit" novalidate>
		<h1>
			Create Settlement
		</h1>

		<ul>
			<li v-for="(resource, i) in resources" :key="resource.id">
				<InputWrap :error="resource.errors.type" label="Type">
					<select v-model="resource.type">
						<option disabled selected :value="null">
							Select...
						</option>
						<option
							v-for="resourceType in resourceTypes"
							:key="resourceType.id"
							:value="resourceType.id"
						>
							{{ resourceType.name }}
						</option>
					</select>
				</InputWrap>

				<InputWrap :error="resource.errors.diceNumber" label="Dice Number">
					<input v-model.number="resource.diceNumber" type="number" min="2" max="12" step="1" />
				</InputWrap>

				<b-button v-if="i > 0" @click="removeResource(resource.id)">
					Remove
				</b-button>
			</li>
		</ul>

		<b-button @click="addResource" :disabled="this.resources.length >= 3" variant="info">
			Add Resource
		</b-button>

		<b-button @click="reset" type="button" variant="warning">
			Reset
		</b-button>
		<b-button type="submit" variant="success">
			Create
		</b-button>
	</form>
</template>


<script>
import uuid from 'uuid/v4';
import InputWrap from './input/Wrap';
import { resources as resourceTypes } from '../constants';

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
			resourceTypes,
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
		reset() {
			this.resources = [defaultSettlement()];
		},

		validate() {
			this.resources = this.resources.map(({ type, diceNumber, ...resource }) => ({
				...resource,
				type,
				diceNumber,
				applyErrors: true,
				errors: {
					type: type ? null : 'Required',
					diceNumber: validateDiceNumber(diceNumber),
				},
			}));
		},

		onSubmit() {
			this.validate();
			if (this.isValid) {
				this.createSettlement({
					id: uuid(),
					resources: this.resources.map(({ applyErrors, errors, ...resource }) => resource),
				});
				this.reset();
			}
		},

		addResource() {
			this.validate();
			if (this.isValid) this.resources.push(defaultSettlement());
		},

		removeResource(id) {
			this.resources = this.resources.filter(resource => resource.id !== id);
		},
	},

	components: { InputWrap },
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
