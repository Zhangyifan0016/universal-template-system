<template>
  <div class="navbar">
    <Hamburger></Hamburger>
    <Breadcrumb></Breadcrumb>
    <div class="right-menu">
      <div class="right-menu-item hover-effect">
        <el-tooltip effect="dark" content="功能向导" placement="bottom">
          <svg-icon icon="guide"></svg-icon>
        </el-tooltip>
      </div>
      <div class="right-menu-item hover-effect">
        <svg-icon className="search-icon" icon="search"></svg-icon>
      </div>
      <div class="right-menu-item hover-effect">
        <svg-icon icon="fullscreen"></svg-icon>
      </div>
      <div class="right-menu-item hover-effect">
        <el-tooltip effect="dark" content="主题修改" placement="bottom">
          <svg-icon icon="change-theme"></svg-icon>
        </el-tooltip>
      </div>
      <div class="right-menu-item hover-effect">
        <el-tooltip effect="dark" content="国际化" placement="bottom">
          <svg-icon icon="language"></svg-icon>
        </el-tooltip>
      </div>
      <el-dropdown
        class="avatar-container"
        trigger="click"
        @command="handleCommand"
      >
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="squareUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="classHome">课程主页</el-dropdown-item>
            <el-dropdown-item command="logout" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Hamburger from '../../components/Hamburger'
import Breadcrumb from '../../components/Breadcrumb'

const store = useStore()
const router = useRouter()
// 获取用户头像
const squareUrl = computed(() => {
  return store.getters.userInfo.avatar
})
// 下拉菜单点击事件
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleGoToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
// 跳转首页
const handleGoToHome = () => {
  router.push('/')
}
// 退出登录
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  // line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      .search-icon {
        font-size: 18px;
        height: 32px;
        vertical-align: middle !important;
      }
    }
    .hover-effect {
      cursor: pointer;
      transition: background 0.3s;
    }

    .avatar-container {
      cursor: pointer;
      .el-dropdown-link {
        margin-top: 5px;
        margin-right: 12px;
      }
    }
  }
}
</style>
