import Vue from 'vue';
import Vuex from 'vuex';
import data from '../data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    motorcycles: [],
  },
  mutations: {
    setBikes(state, motorcycles) {
      state.motorcycles = motorcycles;
    },
  },
  actions: {
    fetchBikes({ commit }) {
      // This is where a request to an API would live if this data weren't static
      const motorcycles = data.bikes;
      commit('setBikes', motorcycles);
    },
  },
});
