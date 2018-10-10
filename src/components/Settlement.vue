<template>
	<div>
		<img :src="imgSrc" :alt="settlementText">

		<button @click="toggleIsCity">
			{{ settlementText }}
		</button>

		<ul>
			<li v-for="resource in resources" :key="resource.id">
				<resource v-bind="resource" />
			</li>
		</ul>
	</div>
</template>


<script>
import Resource from './Resource.vue';
import townImage from '../assets/images/town.png';
import cityImage from '../assets/images/city.png';

export default {
	name: 'settlement',

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

		imgSrc() {
			return this.isCity ? cityImage : townImage;
		},
	},

	methods: {
		toggleIsCity() {
			this.isCity = !this.isCity;
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
