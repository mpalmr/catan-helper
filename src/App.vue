<template functional>
	<v-app>
		<router-view />

		<v-footer color="primary" dark absolute>
			<v-layout justify-center>
				<h1>Catan Buddy</h1>
			</v-layout>
		</v-footer>
	</v-app>
</template>


<style lang="scss" scoped>
h1 {
	font-size: 1.5rem;
}
</style>
