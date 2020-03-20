import Vue from 'vue'
import Vuex from 'vuex';
import x from './modules/x';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    x
  }
})

export const requireStoreModule = async (args) => {
  for (let moduleName of args) {
    if (!Object.prototype.hasOwnProperty.call(store.state, moduleName)) {
      const _module = await (await import(`@/store/modules/${moduleName}`)).default;
      const state = _module.state;
      const namespaced = _module.namespaced || false;
      const actions = typeof _module.actions === "function" ? await _module.actions() : _module.actions;
      const mutations = typeof _module.mutations === "function" ? await _module.mutations() : _module.mutations;
      const getters = typeof _module.getters === "function" ? await _module.getters() : _module.getters;
  
      store.registerModule(moduleName, { namespaced, state, actions, mutations, getters });
    }
  }
}

store.requireStoreModule = requireStoreModule;

export default store;
