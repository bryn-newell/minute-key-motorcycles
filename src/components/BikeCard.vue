<template>
  <section class="bike-card" tabindex="0" @click="viewBikePage" @keypress.enter="viewBikePage">
    <h2 class="card-heading">{{ bike.year }} {{ bike.manufacturer }} {{ bike.model }}</h2>
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
    border: 1px solid $black;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      border-radius: $border-radius;
      max-width: 100%;
      height: auto;
    }
    @media (max-width: $breakpoint-md) {
      .card-heading {
        font-size: $font-size-28;
      }
    }
  }
</style>
