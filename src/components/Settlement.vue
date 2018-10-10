<template>
	<div>
		<img :src="imgSrc" :alt="this.isCity ? 'City' : 'Town'" />

		<b-button v-if="!isCity" @click="upgradeToCity">
			Upgrade
		</b-button>

		<ul>
			<li v-for="resource in resources" :key="resource.id">
				<Resource v-bind="resource" />
			</li>
		</ul>
	</div>
</template>


<script>
import Resource from './Resource';
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
		imgSrc() {
			return this.isCity ? cityImage : townImage;
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
