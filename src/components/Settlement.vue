<template>
  <div id="settlement">
    <img :src="imgSrc" :alt="imgAlt">

    <button @click="addResource">
      Add Resource
    </button>

    <ul v-for="resource in resources" :key="resource">
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
    isCity: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      resources: [],
    };
  },

  methods: {
    addResource() {
      console.log(this);
      this.resources.push({
        type: null,
        number: null,
      });
    },
  },

  computed: {
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
