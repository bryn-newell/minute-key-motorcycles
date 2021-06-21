<template>
  <main>
    <h1>Bryn's Garage</h1>
    <p>Hi there! Welcome to Bryn's garage. A site dedicated to the motorcycles that have been or will be in my garage one day and to help encourage others to learn more about these beautiful bikes!</p>
    <section>
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
