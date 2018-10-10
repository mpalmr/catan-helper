<template>
	<div>
		<img :src="imgSrc" :alt="this.isCity ? 'City' : 'Town'" />

		<b-button v-if="!isCity" @click="upgrade">
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
import townImage from '@/assets/images/town.png';
import cityImage from '@/assets/images/city.png';

export default {
	props: {
		id: { type: String, required: true },
		isCity: { type: Boolean, required: true },
		resources: { type: Array, required: true },
		upgradeSettlement: { type: Function, required: true },
	},

	computed: {
		imgSrc() {
			return this.isCity ? cityImage : townImage;
		},
	},

	methods: {
		upgrade() {
			this.upgradeSettlement(this.id);
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
