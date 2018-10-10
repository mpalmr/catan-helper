<template>
	<b-container>
		<GameList v-if="games.length" :games="games" />

		<b-button to="/new" variant="success">
			New Game
		</b-button>
	</b-container>
</template>


<script>
import GameList from '@/components/GameList.vue';

export default {
	data() {
		return {
			games: JSON.parse(localStorage.getItem('games')) || [],
		};
	},

	components: { GameList },
};
</script>
