<template>
	<header>
		<b-navbar type="dark">
			<b-navbar-brand>
				Catan Buddy
			</b-navbar-brand>

			<b-navbar-nav>
				<router-link class="link" to="/">
					Home
				</router-link>
			</b-navbar-nav>
		</b-navbar>
	</header>
</template>


<style lang="scss" scoped>
@import "../sass/colors";

header {
	background-color: $color-success;
}

.link {
	color: $color-text-light;
}
</style>
