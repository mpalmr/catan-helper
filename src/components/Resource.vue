<template>
	<div class="container">
		<v-img :src="imgSrc" :alt="type" />
		<span class="dice-roll">
			{{ diceRoll }}
		</span>
	</div>
</template>


<script>
import * as images from '@/assets/images/resources';

export default {
	props: {
		type: { type: String, required: true },
		diceRoll: {
			required: true,
			validator(value) {
				return value >= 2 && value <= 12;
			},
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
@import "../sass/colors";

.container {
	position: relative;
}

img {
	width: 2.5rem;
	height: 2.5rem;
}

.dice-roll {
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
