<template>
	<button :class="theme" :disabled="disabled">
		<slot />
	</button>
</template>


<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		theme: {
			validator(value) {
				return ['success', 'warning', 'danger'].includes(value);
			},
		},
	},
};
</script>


<style lang="scss" scoped>
@import "../sass/colors";

@mixin bg($color) {
	background-color: $color;
	&:hover {
		background-color: lighten($color, 7.5%);
	}
	&:disabled {
		background-color: darken($color, 7.5%);
		opacity: .8;
	}
}

button {
	@include bg(steelblue);
	display: inline-block;
	vertical-align: middle;
	padding: .375em .75em;
	border: 1px solid transparent;
	border-radius: .25em;
	line-height: 1.5;
	text-align: center;
	white-space: nowrap;
	font-size: 1rem;
	color: $color-text-light;
	user-select: none;
	transition: opacity .15s linear,
		background-color .15s linear;
	&:not(:disabled) {
		cursor: pointer;
	}
	&.success {
		@include bg($color-success);
	}
	&.warning {
		@include bg($color-warning);
	}
	&.danger {
		@include bg($color-danger);
	}
}
</style>
