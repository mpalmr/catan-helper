<template>
	<div>
		<img :src="imgSrc" :alt="settlementText">

		<button @click="toggleIsCity">
			{{ settlementText }}
		</button>

		<button @click="addResource">
			Add Resource
		</button>

		<ul>
			<li v-for="resource in resources" :key="resource.id">
				<resource v-bind="resource"/>
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

	data() {
		return {
			isCity: false,
			resources: [],
		};
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

		addResource() {
			this.resources.push({ type: null, number: null });
		},
	},

	components: { Resource },
};
</script>


<style lang="scss" scoped>
img {
	width: 5rem;
	height: 5rem;
}
</style>
