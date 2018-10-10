<template>
	<div class="container">
		<label>
			<span class="label-text">
				{{ label }}
			</span>
			<slot />
		</label>

		<span v-if="error" class="error">
			{{ error }}
		</span>
	</div>
</template>


<script>
export const commonProps = {
	label: String,
	error: String,
};

export default { props: commonProps };
</script>


<style lang="scss" scoped>
@import "../../sass/colors";

.container:not(:first-child) {
	margin-top: 2em;
}

label {
	display: flex;
	flex-direction: column;
}

.label-text {
	margin-bottom: .5em;
}

.error {
	margin-top: .5em;
	font-size: .8em;
	color: $color-error;
}
</style>
