import { createStore } from 'vuex'
import User from '../api/user'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async handleLoginSubmit({ commit }, payload) {
      const res = await User.login(payload)
      // if (res) {
      //   console.log(res);
      //   commit('setToken', res.token)
      // }
      return res
    }
  },
  modules: {}
})
