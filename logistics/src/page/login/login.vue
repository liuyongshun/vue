<template>
  <div class="full-screen-bgwhite">
    <div class="j_login">
      <ul class="l_tab_list l_login_identifier">
        <li class="l_list_cell">
          <img src="./yonghuming.png" alt="">
          <input id="user" class="l_profile_input" type="text" placeholder="请输入用户名">
        </li>
        <li class="l_list_cell">
          <img src="./mima.png" alt="">
          <input id="write_pwd" class="l_profile_input" type="password" placeholder="请输入密码" style="width: 80%;">
          <img style="width: 0.44rem;" id="show_password" src="./byhg.png" alt="">
        </li>
      </ul>
      <div class="l_skip_operate">
        <div class="l_login_related">
          <router-link tag="a" :to="{name: 'register'}">免费注册</router-link>
          <router-link tag="a" :to="{name: 'forget'}">忘记密码？</router-link>
        </div>
      </div>
      <div id="login" class="j_button-red">登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .b_login_div
    height: 0.7rem
    border-bottom: 1px solid #e8e8e8
    width: 99%
    margin: .25rem auto 0
    background: #fff

  .b_login-input
    width: 100%
    text-indent: 0.9rem
    border: 0px
    height: 0.7rem
    float: left

  .l_login
    position: fixed;
    bottom: 0
    width: 100%
    z-index: 4

  .l_skip_operate
    margin-bottom: 0.7rem
    overflow: hidden

  .l_skip_operate
    input[type="checkbox"]
      margin-right: 0.1rem


</style>
