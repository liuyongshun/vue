<template>
  <div class="b_login">
    <div class="b_login_div">
      <input type="text" placeholder="请输入手机号或用户名" class="b_login-input user-img" id="username">
    </div>
    <div class="b_login_div">
      <input type="password" placeholder="请输入密码" class="b_login-input password-img small-width" id="password">
      <img src="images/yjj@3x.png" class="eye-password" id="eye" onClick="b_eye()">
    </div>
    <div class="b_reminder"></div>
    <input type="button" value="登录" class="b_mom_btn" id="submit-login">
    <div class="b_other"><a class="color_gray" href="new-password.html">忘记密码?</a> <a href="register.html" class="color_red">手机快速注册</a></div>
    <div class="b_reminder-msg">
      <div class="b-msg"></div>
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
  .b_login
    width: 90%
    margin: 0 auto
    padding-top: 0.5rem
    overflow: hidden
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
</style>
