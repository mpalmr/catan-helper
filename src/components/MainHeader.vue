<template>
	<header>
		<v-toolbar dark color="primary">
			<v-toolbar-title>{{ title }}</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<slot />
			</v-toolbar-items>
		</v-toolbar>
	</header>
</template>


<script>
export default {
	props: {
		title: { type: String, required: true },
	},
};
</script>
