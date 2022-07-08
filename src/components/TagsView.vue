<template>
  <div class="tags-view-container">
    <ul class="tags-view-list">
      <li
        class="tags-view-item"
        @click="handleSelectTag(item.path)"
        :class="{ active: $route.path === item.path }"
        v-for="(item, index) in tagsView"
        :key="index"
      >
        {{ item.title }}
        <span @click.stop="handleCloseTag(index)">
          <svg-icon
            className="close"
            v-if="!($route.path === item.path)"
            icon="close"
          ></svg-icon>
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
const store = useStore()
// 监听路由的变化
watch(
  () => router.currentRoute.value,
  () => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsView', obj)
    }
    console.log(router)
  },
  { immediate: true, deep: true }
)
const tagsView = computed(() => {
  return store.getters.tagsview
})

const handleSelectTag = (path) => {
  router.push(path)
}
const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagItem', index)
}
</script>
<style scoped lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  overflow-x: auto;
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      background-color: rgb(48, 65, 86);
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    .close {
      display: inline-block;
      vertical-align: middle;
      width: 16px !important;
      height: 16px;
    }
  }
}
</style>
