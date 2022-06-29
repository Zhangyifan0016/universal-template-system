<template>
  <div class="navbar">
    <div class="hamburger-container">
      <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
    </div>
    <div class="right-menu">
      <div class="hamburger-container">
        <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
      </div>
      <div class="hamburger-container">
        <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
      </div>
      <div class="hamburger-container">
        <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
      </div>
      <div class="hamburger-container">
        <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
      </div>
      <div class="hamburger-container">
        <svg-icon className="hamburger" icon="hamburger-opened"></svg-icon>
      </div>
    </div>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  // line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
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
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
  }
}
</style>
