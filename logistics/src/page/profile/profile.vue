<template>
  <div class="full-screen-bgwhite">
    <div class="j_user-main">
      <ul class="l_profile_list">
        <router-link tag="li" :to="{name: 'baseMessage'}">
          <a href="">
            <div class="fl">基本信息</div>
            <div class="fr j_arrow"><img src="./gengduoaan_image@3x.png"></div>
          </a>
        </router-link>
        <router-link tag="li" :to="{name: 'contact'}">
          <a href="">
            <div class="fl">联系方式</div>
            <div class="fr j_arrow"><img src="./gengduoaan_image@3x.png"></div>
          </a>
        </router-link>
        <router-link tag="li" :to="{name: 'changePassword'}">
          <a href="">
            <div class="fl">修改密码</div>
            <div class="fr j_arrow"><img src="./gengduoaan_image@3x.png"></div>
          </a>
        </router-link>
      </ul>
      <div class="j_button-red l_special">退出当前账户</div>
    </div>
    <div class="popups-bak" style="display: none;"></div>
    <div class="popups" style="display: none;">
      <div class="poup-title">提示</div>
      <div class="poup-words">确定要退出登录吗</div>
      <div class="poup-a"><span   class="color-gray"  id="colse">取消 </span><span class="colorOrange"  onclick="exit()">确定</span></div>
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
    a
      display: block
      overflow: hidden;
      color: #222
  .j_arrow img
    height: 0.3rem
    vertical-align: middle
  .j_button-red.l_special
    position: fixed
    bottom: 0
    width: 100%
    background-color: #ff8500
    border-radius: 0
</style>
