<template>
  <section class="bike-view">
    <router-link to="/" class="link">Return to all bikes</router-link>
    <h2>{{ bike.year }} {{ bike.manufacturer }} {{ bike.model }}</h2>
    <img :src="bikeImage" :alt="bike.model">
    <p>{{ bike.description }}</p>
    <p>{{ bike.color }}</p>
    <p>Power: {{ bike.power }}</p>
    <p>Displacement: {{ bike.displacement }}</p>
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
.bike-view {
  max-width: 1400px;
  margin: 0 auto;
  .link {
    display: block;
    text-align: left;
    margin-left: 12px;
  }
  img {
    border-radius: $border-radius;
    max-width: 700px;
  }
  p {
    max-width: 600px;
    margin: 12px auto;
  }
  @media (max-width: $breakpoint-md) {
    img {
      max-width: 400px;
    }
  }
  @media (max-width: $breakpoint-sm) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}

</style>
