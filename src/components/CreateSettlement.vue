<template>
	<form @submit.prevent="onSubmit">
		<h1>
			Create Settlement
		</h1>

		<ul>
			<li v-for="(resource, i) in resources" :key="resource.id">
				<label>
					Type:
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
					<span v-if="resource.errors.type" class="error">
						{{ resource.errors.type }}
					</span>
				</label>

				<label>
					Dice Number:
					<input v-model.number="resource.diceNumber" type="number" min="2" max="12" step="1" />
					<span v-if="resource.errors.diceNumber" class="error">
						{{ resource.errors.diceNumber }}
					</span>
				</label>

				<button v-if="i > 0" @click="removeResource(resource.id)" type="button">
					Remove
				</button>
			</li>
		</ul>

		<button @click="addResource" :disabled="hasMaximumResources" type="button">
			Add Resource
		</button>

		<button @click="reset" type="button">
			Reset
		</button>
		<button type="submit">
			Create
		</button>
	</form>
</template>


<script>
import uuid from 'uuid/v4';
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
	name: 'create-settlement',

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

		hasMaximumResources() {
			return this.resources.length >= 3;
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
				console.log(this.resources);
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
};
</script>


<style lang="scss" scoped>
@import "../sass/list";
@import "../sass/colors";

ul {
	@extend %list-clear;
	margin-bottom: 2em;

	> li {
		margin-top: 1.5em;
	}
}

label {
	display: flex;
	flex-direction: column;
	&:not(:first-child) {
		margin-top: 2em;
	}
}

.error {
	margin-top: .5em;
	font-size: .8em;
	color: $color-error;
}
</style>
