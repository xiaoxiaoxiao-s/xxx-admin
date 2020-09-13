<template>
  <div class="login">
    <div class="content animate__animated animate__fadeInRight">
      <div class="import">
        <span>Account :</span>
        <input type="text" v-model="account"/>
      </div>

      <div class="import">
        <span>Password :</span>
        <input type="password" v-model="Password"/>
      </div>
      
      <div class="label">
        <span>注册</span>
        <span>忘记密码</span>
      </div>

      <div class="btn">登录</div>
    </div>

    <Cat/>
  </div>
</template>

<script>
import Cat from '@/components/Cat/Cat.vue';

export default {
  name: "Login",
  components: { Cat }
}
</script>

<style lang="less" scoped>
@import '@/less/base.less';

.login:extend(.flex-column) {
  background-color: @bg-color;
  width: 100%;
  height: 100%;
  .import {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 3px;
    display: flex;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background-color:#fff;
      color: #fff;
      display: flex;
      align-items: center;
    }
    
    span {
      color: #fff;
    }
    input {
      flex: 1;
      padding-left: 10px;
      color: #fff;
    }
  }
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    span {
      color: #fff;
      font-size: 14px;
      cursor:pointer;
    }
  }
  .btn {
    color: #fff;
    font-size: 14px;
    cursor:pointer;
  }
}
</style>