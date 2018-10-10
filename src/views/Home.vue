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
import { getGame } from '@/storage';
export default {
	data() {
		return { game: getGame() };
	},

	methods: {
		continueGame() {
			localStorage.setItem('game', JSON.stringify({
				...this.game,
				modified: new Date(),
			}));
			this.$router.push('/game');
		},

		newGame() {
			localStorage.setItem('game', JSON.stringify({
				settlements: [],
				created: new Date(),
				modified: new Date(),
			}));
			this.$router.push('/game');
		},
	},
};
</script>
