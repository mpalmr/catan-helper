<template>
	<header>
		<v-toolbar dark color="primary">
			<v-toolbar-title>{{ title }}</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<v-btn to="/">Home</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</header>
</template>


<script>
export default {
	data() {
		return { title: this.$route.name === 'game' ? 'Playing' : 'Pick a Game' };
	},
};
</script>
