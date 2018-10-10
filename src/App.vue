<template>
	<div id="app">
		<Header />

		<main>
			<router-view />
		</main>
	</div>
</template>


<script>
import Header from './components/Header.vue';

export default {
	components: { Header },
};
</script>
