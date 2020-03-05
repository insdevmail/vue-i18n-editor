import Vue from 'vue';
import Vuex from 'vuex';

import project from './project';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    project,
  },
});
