<template>
	<div>
		<img :src="imgSrc" :alt="settlementText">

		<button @click="toggleIsCity">
			{{ settlementText }}
		</button>

		<button @click="addResource">
			Add Resource
		</button>

		<ul v-for="resource in resources" :key="resource.id">
			<li>
				<Resource :resource="resource"/>
			</li>
		</ul>
	</div>
</template>


<script>
import Resource from './Resource.vue';
import townImage from '../assets/town.png';
import cityImage from '../assets/city.png';

export default {
	name: 'settlement',

	props: {
		settlement: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			isCity: false,
			resources: [],
		};
	},

	methods: {
		toggleIsCity() {
			this.isCity = !this.isCity;
		},

		addResource() {
			this.resources.push({ type: null, number: null });
		},
	},

	computed: {
		settlementText() {
			return this.isCity ? 'City' : 'Town';
		},

		imgSrc() {
			return this.isCity ? cityImage : townImage;
		},
	},

	Components: {
		Resource,
	},
};
</script>


<style lang="scss" scoped>
img {
	width: 5rem;
	height: 5rem;
}
</style>
