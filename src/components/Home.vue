<template>
  <main>
    <h1>Motorcycle Garage</h1>
    <p>Hi there! Welcome to the Motorcycle garage. A site dedicated to the interesting bikes, bikes I have or do own, and possible future bikes! This page is meant to be a fun tool to help encourage others to learn more about these beautiful bikes!</p>
    <section>
      <h3>Click any of the cards below to learn more about the bike!</h3>
      <BikeCard v-for="(bike, index) in motorcycles" :key="index" :bike="bike" />
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import BikeCard from '@/components/BikeCard.vue';

export default {
  created() {
    this.$store.dispatch('fetchBikes');
  },
  components: {
    BikeCard,
  },
  computed: {
    ...mapState([
      'motorcycles',
    ]),
  },
};
</script>

<style lang="scss">

</style>
