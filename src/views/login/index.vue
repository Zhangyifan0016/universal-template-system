<template>
  <div class="login-container">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <el-tooltip
          class="box-item"
          effect="light"
          content="国际化"
          placement="bottom"
        >
          <svg-icon className="svg-language" icon="language"></svg-icon>
        </el-tooltip>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="user"></svg-icon>
          </el-icon>
        </span>
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input :type="inputType" v-model="loginForm.password"></el-input>
        <span class="svg-pwd" @click="handlePassWordStatus">
          <el-icon>
            <svg-icon :icon="passwordIconStatus"></svg-icon>
          </el-icon>
        </span>
      </el-form-item>
      <el-button
        class="login-button"
        type="primary"
        @click="handleLoginSubmit()"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { validatePassword } from './rules'

const LoginForm = ref()
const inputType = ref('password')
const loginForm = reactive({
  username: '',
  password: ''
})
// show password
const passwordIconStatus = computed(() => {
  return inputType.value === 'password' ? 'eye' : 'eye-open'
})
// 校验规则
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名必填'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 切换密码框眼睛状态
const handlePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
// 登录
const handleLoginSubmit = async () => {
  await LoginForm.value.validate((valid) => {
    if (!valid) return
    if (valid) {
      alert('登录')
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .svg-container {
        padding: 10px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }

      .svg-pwd {
        position: absolute;
        right: 10px;
        top: 11px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }

    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent;
        box-shadow: none;
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      :deep(.svg-language) {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
