<template>
	<v-app>
		<main-header />

		<main>
			<router-view />
		</main>
	</v-app>
</template>


<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
	components: { MainHeader },
};
</script>
