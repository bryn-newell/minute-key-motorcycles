<template>
  <section class="home">
    <h1 class="heading">Motorcycle Garage</h1>
    <p>Hi there! Welcome to the Garage. A site dedicated to interesting bikes, bikes I have owned or currently ride, and possible future bikes! This page is meant to be a fun tool to help encourage others to learn more about these beautiful bikes!</p>
    <p>Click any of the cards below to learn more about the bike!</p>
    <section class="card-container">
      <BikeCard v-for="(bike, index) in motorcycles" :key="index" :bike="bike" />
    </section>
  </section>
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
.home {
  max-width: 1400px;
  margin: 0 auto;
  .heading {
    margin-bottom: 24px;
  }
  p {
    max-width: 600px;
    margin: 0 auto 12px auto;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 24px;
    .bike-card {
      max-width: 45%;
      margin-right: 24px;
      margin-bottom: 24px;
    }
  }
  @media (max-width: $breakpoint-sm) {
    .card-container {
      flex-direction: column;
      align-items: center;
      .bike-card {
        max-width: 90%;
      }
    }
  }
}
</style>
