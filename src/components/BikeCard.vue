<template>
  <section class="bike-card" tabindex="0" @click="viewBikePage" @keypress.enter="viewBikePage">
    <h2>{{ bike.year }} {{ bike.manufacturer }} {{ bike.model }}</h2>
    <img :src="bikeImage" :alt="bike.model">
  </section>
</template>

<script>
import BikeMixin from '@/mixins/BikeMixin.vue';

export default {
  mixins: [BikeMixin],
  methods: {
    viewBikePage() {
      const id = this.bike && this.bike.id;
      this.$router.push({ name: 'BikePage', params: { id } });
    },
  },
  props: {
    bike: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .bike-card {
    cursor: pointer;
    img {
      max-width: 900px;
    }
  }
</style>
