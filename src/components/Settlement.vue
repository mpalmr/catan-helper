<template>
  <div id="settlement">
    <img :src="imgSrc" :alt="imgAlt">

    <button @click="toggleIsCity">
      {{ toggleIsCityText }}
    </button>

    <button @click="addResource">
      Add Resource
    </button>

    <ul v-for="resource in resources" :key="resource.id">
      <li>
        {{ resource }}
      </li>
    </ul>
  </div>
</template>


<script>
// import Resource from './Resource.vue';

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
    toggleIsCityText() {
      return this.isCity ? 'City' : 'Town';
    },

    imgSrc() {
      const img = this.isCity ? 'city' : 'town';
      return `/assets/${img}.png`;
    },

    imgAlt() {
      return this.isCity ? 'City' : 'Town';
    },
  },

  // Components: {
  //   Resource,
  // },
};
</script>


<style lang="scss" scoped>

</style>
