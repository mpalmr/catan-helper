<template>
	<v-container>
		<v-btn @click="newGame" variant="warning">
			New Game
		</v-btn>
	</v-container>
</template>


<script>
import savedGames from '@/saved-games';

export default {
	methods: {
		newGame() {
			savedGames.new();
			this.$router.push('/play');
		},

		continueGame() {
			savedGames.continue();
			this.$router.push('/play');
		},
	},
};
</script>
