<template>
	<div class="container">
		<img :src="imgSrc" :alt="type">
		<span>
			{{ diceNumber }}
		</span>
	</div>
</template>


<script>
import * as images from '../assets/images/resources';

export default {
	name: 'resource',

	props: {
		type: {
			type: String,
			required: true,
		},
		diceNumber: {
			type: Number,
			required: true,
		},
	},

	computed: {
		imgSrc() {
			return images[this.type];
		},
	},
};
</script>


<style lang="scss" scoped>
.container {
	position: relative;
}

img {
	width: 2.5rem;
	height: 2.5rem;
}
</style>
