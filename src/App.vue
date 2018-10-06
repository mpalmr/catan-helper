<template>
  <div id="app">
    <ul v-for="settlement in settlements" :key="settlement.id">
      <Settlement settlement="settlement"/>
    </ul>
  </div>
</template>


<script>
import Settlement from './components/Settlement.vue';

export default {
  name: 'app',

  data() {
    return {
      settlements: [{ id: 'a' }],
    };
  },

  components: {
    Settlement,
  },
};
</script>
