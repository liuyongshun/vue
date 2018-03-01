<template>
  <div class="full-screen-bgwhite">
    <div class="j_login">
      <h4 class="l_tip_content" style="padding: 0.2rem 0">注册用户完成入驻签约事宜后，可进行在线交易</h4>
      <ul class="l_tab_list l_login_identifier">
        <li class="l_list_cell">
          <span class="orange valign">* </span>
          <img src="./yonghuming.png" alt="">
          <input id="user" style="width: 85%;" class="l_profile_input" type="text" placeholder="请输入用户名，一经注册不可修改">
        </li>
        <li class="l_list_cell">
          <span class="orange valign">* </span>
          <img src="./mima.png" alt="">
          <input id="write_pwd" class="l_profile_input" type="password" style="width: 80%;" placeholder="请输入6-16位字母或数字登录密码">
          <img style="width: 0.44rem;" id="l_eye1" src="./byhg.png" alt="">
        </li>
        <li class="l_list_cell">
          <span class="orange valign">* </span>
          <img src="./mima.png" alt="">
          <input id="write_pwd_again" class="l_profile_input" type="password" placeholder="请再次输入密码" style="width: 80%;">
          <img style="width: 0.44rem;" id="l_eye2" src="./byhg.png" alt="">
        </li>
        <li class="l_list_cell">
          <span class="orange valign">* </span>
          <img src="./shouiji.png" alt="">
          <input id="mobile" class="l_profile_input" type="number" placeholder="请输入手机号">
        </li>
        <li class="l_list_cell">
          <span class="orange valign">* </span>
          <img src="./yanzhengmadd.png" alt="">
          <input id="write_code" class="l_profile_input" type="text" style="width: 57%" placeholder="请输入验证码">
          <div class="j_code-button" style="width: 30%">获取验证码</div>
        </li>
      </ul>
      <div class="j_button-red">注册</div>
      <div class="l_exist_account">已有账户，请点击 <a href="">登录</a></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .l_exist_account
    padding-top: 0.28rem
    text-align: right
  .l_exist_account > a
    color: #fe9025
</style>
