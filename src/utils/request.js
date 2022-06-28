// 引入axios
import axios from 'axios'

// 引入md5
import md5 from 'md5'

// 引入loading加载
import loading from '../utils/loading'

// 引入vuex
import store from '../store'

// 创建一个实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 8000 // 超时时间
})
// 请求拦截
instance.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) {
      config.headers.authorization = 'Bearer ' + token
    }
    // 开启loading加载
    loading.open()
    // md5
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    console.log('拦截成功')
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
    const { success, data } = res.data
    if (success) {
      return data
    } else {
      // return Promise.reject()
    }
    // 请求成功的处理
  },
  (err) => {
    // 关闭loading加载
    loading.close()
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

// 封装 处理get请求方式的参数问题
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return instance(options)
}

export default request
