<template>
  <el-menu
    active-text-color="#fff"
    :default-active="$route.path"
    background-color="#304156"
    text-color="#bfcbd9"
    unique-opened
    router
  >
    <Item v-for="item in menuList" :menuList="item" :key="item"></Item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Item from './Item'
import { filterMenuData } from '../../utils/menu'
import { filterRoutes, generateMenus } from '../../utils/router'
const router = useRouter()

const menuList = computed(() => {
  const routes = filterRoutes(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>
<style lang="scss" scoped></style>
