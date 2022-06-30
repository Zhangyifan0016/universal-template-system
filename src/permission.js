// 引入router
import router from './router'
// 引入vuex
import store from './store'
// 设置白名单
const whiteList = ['/login']

// 挂载路由守卫
router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.token
  // 获取用户信息
  const userInfo = store.getters.userInfo
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      // next()
      if (userInfo) {
        next()
      } else {
        const res = await store.dispatch('user/getUserInfo')
        if (res) {
          next()
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
