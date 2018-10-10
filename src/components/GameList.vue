<template>
	<section>
		<h1>
			Game List
		</h1>

		<b-table v-if="items.length" :fields="fields" :items="items" bordered striped hover>
			<template slot="id" slot-scope="data">
				<router-link :to="`/${data.item.id}`">
					{{ data.item.id }}
				</router-link>
			</template>

			<template slot="actions" slot-scope="data">
				<b-button @click="deleteGame(data.item.id)" variant="danger">
					Delete
				</b-button>
			</template>
		</b-table>

		<p v-else>
			No games are started yet...
		</p>
	</section>
</template>


<script>
export default {
	data() {
		return {
			storage: {},
			fields: [
				{ key: 'id', label: 'ID' },
				{
					key: 'created',
					label: 'Started',
					formatter(value) {
						return value.toLocaleString();
					},
				},
				{
					key: 'lastPlayed',
					label: 'Last Played',
					formatter(value) {
						return value ? value.toLocaleString() : 'Not started';
					}
				},
				'actions',
			],
		};
	},

	computed: {
		games() {
			return this.storage.games;
		},

		items() {
			return Object.entries(this.games)
				.map(([id, game]) => ({ id, ...game }))
				.sort((a, b) => {
					if (a.lastPlayed < b.lastPlayed) return 1;
					if (a.lastPlayed > b.lastPlayed) return -1;
					if (a.created < b.created) return 1;
					if (a.created > b.created) return -1;
					return 0;
				});
		},
	},

	methods: {
		deleteGame(id) {
			gameStorage.remove(id);
		},
	},
};
</script>


<style lang="scss" scoped>
@import "../sass/list";

ul {
	@extend %list-clear;
}
</style>
