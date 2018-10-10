<template>
	<div class="container">
		<img :src="imgSrc" :alt="type">
		<span class="dice-number">
			{{ diceNumber }}
		</span>
	</div>
</template>


<script>
import * as images from '../assets/images/resources';

export default {
	name: 'resource',

	props: {
		type: { type: String, required: true },
		diceNumber: { type: Number, required: true },
	},

	computed: {
		imgSrc() {
			console.log(this);
			return images[this.type];
		},
	},
};
</script>


<style lang="scss" scoped>
@import "../sass/colors";

.container {
	position: relative;
}

img {
	width: 2.5rem;
	height: 2.5rem;
}

.dice-number {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 1.25em;
	height: 1.25em;
	background-color: rgba(0, 0, 0, .35);
	border-radius: 50%;
	text-align: center;
	color: $color-text-light;
}
</style>
