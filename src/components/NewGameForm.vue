<template>
	<v-container>
		<v-form @submit.prevent="handleSubmit" lazy-validation>
			<v-layout row wrap>
				<v-flex xs12>
					<v-text-field
						v-model.trim="name"
						@input="$v.name.$touch()"
						@blur="$v.name.$touch()"
						:error-messages="getNameErrors()"
						label="Name"
						required
					/>
				</v-flex>

				<v-flex class="controls" xs12>
					<v-btn type="submit" color="success">Start</v-btn>
				</v-flex>
			</v-layout>
		</v-form>
	</v-container>
</template>


<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import savedGames from '@/saved-games';

export default {
	mixins: [validationMixin],

	data() {
		return { name: '' };
	},

	validations: {
		name: {
			required,
			isUnique(value) {
				return !savedGames.getAll()
					.map(game => game.name)
					.includes(value);
			},
		},
	},

	methods: {
		handleSubmit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				const { id } = savedGames.new(this.name);
				this.$router.push(`/game/${id}`);
			}
		},

		// Validation
		getNameErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.name.required && errors.push('Required');
			!this.$v.name.isUnique && errors.push('Name must be unique');
			return errors;
		},
	},
};
</script>


<style lang="scss" scoped>
.controls {
	display: flex;
	justify-content: flex-end;
}
</style>
