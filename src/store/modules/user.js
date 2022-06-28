import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const res = await UserApi.login(payload)
        commit('setToken', res.token)
        console.log(res)
        return res
      } catch (error) {
        console.log(error)
      }
    }
  }
}
