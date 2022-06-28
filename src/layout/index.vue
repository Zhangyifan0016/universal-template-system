<template>
  <div>
    <!-- 顶部 -->
    <app-navbar></app-navbar>
    <!-- 侧边栏 -->
    <app-menu></app-menu>
    <!-- 主体内容 -->
    <app-main></app-main>
  </div>
</template>

<script setup>
import {} from 'vue'
import AppMenu from './AppMenu/index.vue'
import AppNavbar from './AppNavbar/index.vue'
import AppMain from './AppMain/index.vue'
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: absolute;
  left: 210px;
  top: 0;
  right: 0;
  background-color: #ffffff;
  line-height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.app-menu {
  width: 210px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgb(48, 65, 86);
}
.main {
  position: absolute;
  left: 210px;
  right: 0;
  top: 82px;
  bottom: 0;
  overflow: auto;
  padding: 20px;
}
</style>
