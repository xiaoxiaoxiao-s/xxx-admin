import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    IsMoreMenu: false
  },
  mutations: {
    SetIsMoreMenu (state, payload) {
      // 变更状态
      state.IsMoreMenu = payload;
    }
  }
});

export default store;