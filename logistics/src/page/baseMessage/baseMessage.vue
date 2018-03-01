<template>
  <div class="full-screen-bgwhite">
    <form method="post" enctype="multipart/form-data" id="infoForm">
      <div class="mui-row z_release_li">
        <div class="mui-col-sm-3 mui-col-xs-3 z_release_title">
          用户名：
        </div>
        <div class="mui-col-sm-9 mui-col-xs-9">
          <input id="company" class="l_profile_input" type="text" placeholder="请输入用户名">
        </div>
      </div>
      <div class="mui-row z_release_li" style="padding-right: 0.06rem;">
        <div class="mui-col-sm-3 mui-col-xs-3 z_release_title" style="margin-top: 0.1rem">
          头像：
        </div>
        <div class="mui-col-sm-9 mui-col-xs-9">
          <div class="j_arrow fr" style="margin: 0.1rem 0;">
            <p class="a_basic_head" style="display: inline-block;">
              <img style="height: 1rem" src="./add_img.png" id="headlogo">
            </p>
          </div>
        </div>
      </div>
    </form>
    <div class="j_login">
      <div  class="j_button-red">保存</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .z_release_li
    border-bottom: 1px solid #efecec
    padding:1px 0.2rem
  .z_release_li input[type='text'],input[type='number']
    line-height: 0.9rem
    height: 0.9rem
    margin-bottom: 0
    padding:0 0.16rem 0 0
    border: 0
    color: #a5aab1
  .z_release_li .z_release_title
    line-height: 0.9rem
</style>
