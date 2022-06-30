import request from '../utils/request'

// 登录
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}

// 获取用户信息
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}

// 个人中心
// 获取项目功能
const getFeature = () => {
  return request({ url: '/user/feature', method: 'GET' })
}

export default {
  login,
  getUserInfo,
  getFeature
}
