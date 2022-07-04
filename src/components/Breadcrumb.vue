<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <template v-for="(item, index) in breadcrumbData" :key="index">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-if="index !== breadcrumbData.length - 1"
          :to="{ path: item.path }"
          ><a class="redirect">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{ item.meta.title }}</el-breadcrumb-item>
      </transition-group>
    </template>
  </el-breadcrumb>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const breadcrumbData = computed(() => {
  return route.matched.filter((item) => item.meta.title && item.meta.icon)
})
console.log(breadcrumbData)
</script>
<style scoped lang="scss">
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .redirect {
    color: #666;
    font-weight: 600;
  }
}
.breadcrumb-leave-active {
  position: absolute;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
</style>
