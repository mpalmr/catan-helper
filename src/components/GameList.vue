<template>
	<section>
		<h1>
			Game List
		</h1>

		<b-table :fields="fields" :items="games" striped hover>

		</b-table>
	</section>
</template>


<script>
export default {
	props: {
		games: { type: Array, required: true },
	},

	data() {
		return {
			fields: [
				{ key: 'id', label: 'ID' },
				{ key: 'started', label: 'Started' },
				{ key: 'lastPlayed', label: 'Last Played' },
			],
		};
	},
};
</script>


<style lang="scss" scoped>
@import "../sass/list";

ul {
	@extend %list-clear;
}
</style>
