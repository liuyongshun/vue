<template>
  <div class="full-screen-bgwhite">
    <div class="j_main-body">
      <div class="j_user-main">
        <ul>
          <li>
            <div class="fl">手机号码：</div>
            <input id="mobile" class="l_profile_input" type="number" placeholder="请输入第一联系人电话">
          </li>
          <li class="person">
            <div class="fl">验证码：</div>
            <input id="verify" class="l_profile_input" type="text" placeholder="请输入验证码" style="width: 53%;">
            <div class="j_code-button blue">获取验证码</div>
          </li>
          <li>
            <div class="fl">新密码：</div>
            <input id="newpwd" class="l_profile_input" type="password" placeholder="请输入新密码">
          </li>
        </ul>
        <h4 class="l_tip_content">* 验证码将发送到第一联系人手机，请及时获取验证码</h4>
      </div>
      <div class="j_login">
        <div class="j_button-red">保存</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .j_user-main ul li
    line-height: 0.45rem
    padding: 0.2rem
    border-bottom: 1px solid #e4e0d9
    overflow: hidden
    color: #373838
  .j_user-main ul li a
    display: block
    color: #373838
    overflow: hidden
</style>
