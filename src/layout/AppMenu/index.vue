<template>
  <div class="app-menu">
    <el-menu
      active-text-color="#fff"
      default-active="2"
      background-color="rgb(48, 65, 86)"
      text-color="#bfcbd9"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><document /></el-icon>
        <span>数据可视化</span>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">员工管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-2">角色列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-3">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><location /></el-icon>
          <span>文章</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">文章排名</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="4-2">创建文章</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
