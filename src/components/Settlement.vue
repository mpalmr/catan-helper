<template>
	<div>
		<img v-bind="imgProps">

		<button v-if="!isCity" @click="upgradeToCity">
			Upgrade
		</button>

		<ul>
			<li v-for="resource in resources" :key="resource.id">
				<Resource v-bind="resource" />
			</li>
		</ul>
	</div>
</template>


<script>
import Resource from './Resource.vue';
import townImage from '../assets/images/town.png';
import cityImage from '../assets/images/city.png';

export default {
	props: {
		id: { type: String, required: true },
		resources: { type: Array, required: true },
	},

	data() {
		return { isCity: false };
	},

	computed: {
		settlementText() {
			return this.isCity ? 'City' : 'Town';
		},

		imgProps() {
			return {
				src: this.isCity ? cityImage : townImage,
				alt: this.isCity ? 'City' : 'Town',
			};
		},
	},

	methods: {
		upgradeToCity() {
			this.isCity = true;
		},
	},

	components: { Resource },
};
</script>


<style lang="scss" scoped>
@import "../sass/list";

img {
	width: 5rem;
	height: 5rem;
}

ul {
	@extend %list-clear;
	display: flex;
}
</style>
