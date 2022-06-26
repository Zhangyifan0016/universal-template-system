import { createStore } from 'vuex'
import User from '../api/user'
// 引入md5
import md5 from 'md5'
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async handleLoginSubmit({ commit }, payload) {
      const { username, password } = payload
      const res = await User.login({ username, password: md5(password) })
      // if (res) {
      //   console.log(res);
      //   commit('setToken', res.token)
      // }
      return res
    }
  },
  modules: {}
})
