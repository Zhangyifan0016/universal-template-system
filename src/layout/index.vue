<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <app-menu class="sidebar-container"></app-menu>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 -->
        <app-navbar></app-navbar>
        <!-- tagsview -->
        <tags-view></tags-view>
      </div>
      <!-- 主体内容 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import AppMenu from './AppMenu/index.vue'
import AppNavbar from './AppNavbar/index.vue'
import AppMain from './AppMain/index.vue'
import TagsView from '../components/TagsView'
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    // transition: width 0.28s;
    width: 210px;
    height: 100%;
    position: fixed;
    background-color: #304156;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
    z-index: 1001;
    // overflow: hidden;
  }
  .main-container {
    min-height: 100%;
    // transition: margin-left 0.28s;
    margin-left: 210px;
    position: relative;
    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - 210px);
      transition: width 0.28s;
    }
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
