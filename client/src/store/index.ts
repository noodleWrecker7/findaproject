import Vuex from 'vuex';
import state from '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()]
});
