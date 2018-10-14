<template>
	<b-container>
		<b-button v-if="game" @click="continueGame" variant="success">
			Continue
		</b-button>

		<b-button @click="newGame" variant="warning">
			New Game
		</b-button>
	</b-container>
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
