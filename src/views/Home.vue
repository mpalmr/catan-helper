<template>
	<b-container>
		<GameList />

		<b-button to="/new" variant="success">
			New Game
		</b-button>
	</b-container>
</template>


<script>
import GameList from '@/components/GameList.vue';

export default {
	components: { GameList },
};
</script>
