<template>
  <section class="bike-card">
    <h2>{{ bike.year }} {{ bike.manufacturer }} {{ bike.model }}</h2>
    <img :src="bikeImage" :alt="bike.model">
    <p>{{ bike.color }}</p>
    <p>{{ bike.description }}</p>
    <p>{{ bike.power }} {{ bike.displacement }}</p>
  </section>
</template>

<script>
export default {
  computed: {
    bikeImage() {
      const imagePath = this.bike && this.bike.image;
      return require(`@/assets/${imagePath}`);
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
    img {
      max-width: 900px;
    }
  }
</style>
