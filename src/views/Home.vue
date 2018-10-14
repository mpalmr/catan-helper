<template>
	<div>
		<main-header title="Start a Game">
			<v-btn to="/new">New Game</v-btn>
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

export default {
	components: { MainHeader, SavedGames },
};
</script>
