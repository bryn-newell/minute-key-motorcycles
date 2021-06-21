<template>
  <section>
    <h2>{{ bike.year }} {{ bike.manufacturer }} {{ bike.model }}</h2>
    <img :src="bikeImage" :alt="bike.model">
    <p>{{ bike.color }}</p>
    <p>{{ bike.description }}</p>
    <p>Power: {{ bike.power }}</p>
    <p>Displacement:{{ bike.displacement }}</p>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import BikeMixin from '@/mixins/BikeMixin.vue';

export default {
  computed: {
    ...mapState([
      'motorcycles',
    ]),
  },
  data() {
    return {
      bike: {},
    };
  },
  mixins: [BikeMixin],
  mounted() {
    if (this.motorcycles && this.motorcycles.length) {
      const bike = this.motorcycles.find((motorcycle) => motorcycle.id === this.$route.params.id);
      this.bike = bike;
    }
  },
};
</script>

<style lang="scss">

</style>
