import UserApi from '../../api/user'
import { setItem, getItem, removeAllItem } from '../../utils/storage'
import { setTimeStamp } from '../../utils/auth'
import { resetRouter } from '../../utils/removeRouter'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: {}
  },
  mutations: {
    // 存储token
    setToken(state, token) {
      state.token = token
      setItem('token', token)
      setTimeStamp()
    },
    // 存储用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录
    async login({ commit }, payload) {
      try {
        const res = await UserApi.login(payload)
        commit('setToken', res.token)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      try {
        const res = await UserApi.getUserInfo()
        commit('setUserInfo', res)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    // 退出登录
    logout({ commit }) {
      resetRouter()
      commit('setToken', '')
      commit('setUserInfo', {})
      // removeItem('token')
      // removeItem('userInfo')
      // removeItem('timeStamp')
      removeAllItem()
    }
  }
}
