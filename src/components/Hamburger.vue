<template>
  <div class="hamburger-container">
    <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style scoped lang="scss">
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  padding: 0 16px;
  transition: background 0.5s;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px !important;
    height: 20px;
  }
}
</style>
