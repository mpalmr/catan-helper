<template>
	<div>
		<v-data-table v-if="games.length" :headers="headers" :items="games">
			<template slot="items" slot-scope="row">
				<td>{{ row.items.name }}</td>
				<td>{{ row.items.created.toLocaleString() }}</td>
				<td>{{ row.items.created.toLocaleString() }}</td>
			</template>
		</v-data-table>

		<v-alert :value="!games.length" type="warning">
			There are no saved games. Please create a new one.
		</v-alert>
	</div>
</template>


<script>
import savedGames from '@/saved-games';

export default {
	data() {
		return {
			games: savedGames.getAll(),
			headers: [
				{ text: 'Name', value: 'name' },
				{ text: 'Started', value: 'created' },
				{ text: 'Last Played', value: 'modified' },
			],
		};
	},
};
</script>
