const state = {
  moduleName: "store-module-z"
}

export default {
  namespaced: true,
  state,
  actions: async () => await (await import(/* webpackChunkName: "sm-z-actions" */ './actions')).default,
  mutations: async () => await (await import(/* webpackChunkName: "sm-z-mutations" */ './mutations')).default,
  getters: async () => await (await import(/* webpackChunkName: "sm-z-getters" */ './getters')).default,
};
