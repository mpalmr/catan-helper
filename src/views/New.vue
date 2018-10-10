<template>
	<b-container>
		<h1>New Game</h1>

		<b-form @submit.prevent="onSubmit" novalidate>
			<b-form-group :invalid-feedback="errors.id" label="Game ID" label-for="id">
				<b-form-input v-model="id" id="id" type="text" />
			</b-form-group>

			<b-button type="submit" variant="success">
				Create
			</b-button>
		</b-form>
	</b-container>
</template>


<script>
import gameStorage from '@/storage/games';

function validateId(id) {
	if (!id) return 'Required';
	if (gameStorage.games[id]) return 'Game ID must be unique'
	return null;
}

export default {
	data() {
		return {
			id: null,
			errors: { id: null },
		};
	},

	methods: {
		onSubmit() {
			this.errors = { id: validateId(this.id) };
			if (this.errors.id === null) {
				gameStorage.add({ id: this.id });
				this.$router.push(`/${this.id}`);
			}
		},
	},
};
</script>
