<template>
	<div>
		<main-header title="Start a Game">
			<v-btn @click="newGame">New Game</v-btn>
		</main-header>

		<main>
			<section>
				<saved-games />
			</section>
		</main>
	</div>
</template>


<script>
import MainHeader from '@/components/MainHeader.vue';
import SavedGames from '@/components/SavedGames.vue';
import savedGames from '@/saved-games';

export default {
	components: { MainHeader, SavedGames },

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
