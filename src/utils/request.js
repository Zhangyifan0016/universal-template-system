// 引入axios
import axios from 'axios'

// 引入md5
import md5 from 'md5'

// 引入loading加载
import loading from '../utils/loading'

// 引入vuex
import store from '../store'

import { ElMessage } from 'element-plus'

import router from '../router'

import { isCheckTimeout } from './auth'

// 创建一个实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 8000 // 超时时间
})
// 请求拦截
instance.interceptors.request.use(
  (config) => {
    // 开启loading加载
    loading.open()

    // md5 调用接口要传的参数
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    const token = store.getters.token

    if (token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        router.push('/login')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    // 关闭loading加载
    loading.close()
    return Promise.reject(err)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    // 关闭loading加载
    loading.close()
    // 全局响应处理
    const { success, data, message } = res.data
    if (success) {
      return data
    } else {
      _showError(message)
      return Promise.reject(new Error(message))
    }
    // 请求成功的处理
  },
  (err) => {
    // 关闭loading加载
    loading.close()
    if (err.response && err.response.data && err.response.data.code === 401) {
      store.dispatch('user/logout')
      router.push('/login')
    }

    // 响应失败进行信息提示
    _showError(err.message)

    return Promise.reject(err)
  }
)
// 实现code
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}

// 封装 处理get请求方式的参数问题
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return instance(options)
}

export default request
