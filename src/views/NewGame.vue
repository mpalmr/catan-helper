<template>
	<div>
		<main-header title="New Game">
			<v-btn to="/" color="warning">Back</v-btn>
		</main-header>

		<new-game-form />
	</div>
</template>


<script>
import MainHeader from '@/components/MainHeader.vue';
import NewGameForm from '@/components/NewGameForm.vue';

export default {
	components: { MainHeader, NewGameForm },
};
</script>
