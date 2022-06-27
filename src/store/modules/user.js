import UserApi from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {},
  actions: {
    async login({ commit }, payload) {
      const res = await UserApi.login(payload)
      return res
    }
  }
}
