<template>
  <div id="pullrefresh" class="mui-content mui-scroll-wrapper" style="margin-bottom: 0.8rem;background-color: #efeff4;"
       data-pullrefresh="1">
    <div class="mui-pull-top-pocket">
      <div class="mui-pull">
        <div class="mui-pull-loading mui-icon mui-icon-pulldown"></div>
        <div class="mui-pull-caption">下拉可以刷新</div>
      </div>
    </div>
    <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
      <section id="list" class="mui-table-view mui-table-view-striped mui-table-view-condensed"
               style="background-color: #efeff4;">
        <div class="l_box">
          <div class="l_bg">
            <div class="l_card_lf"><img src="" alt="" class="l_card_pic">
              <h2 class="l_user_name_login ellipsis">电话</h2><i class="l_first_contact">第一联系人</i><span>前台显示</span></div>
            <ul class="l_card_md">
              <li><img src="./bm_icon_05.jpg" alt=""></li>
              <li><img src="./conta.png" alt=""></li>
              <li><img src="./tel_icon_11.jpg" alt=""></li>
              <li><img src="./tel.png" alt=""></li>
              <li><img src="./fax.png" alt=""></li>
              <li><img src="./email_icon_18.jpg" alt=""></li>
              <li><img src="./qq.png" alt=""></li>
            </ul>
            <ul class="l_card_rg">
              <li>部门：</li>
              <li>职务：</li>
              <li>手机：15754287933</li>
              <li>电话：</li>
              <li>传真：</li>
              <li>邮箱：</li>
              <li>&nbsp;QQ：</li>
            </ul>
          </div>
          <div class="l_bg1"></div>
          <div class="l_bg2"></div>
          <div class="l_bg3"></div>
          <div class="l_bg4"></div>
        </div>
        <div class="l_box">
          <div class="l_bg">
            <div class="l_card_lf"><img src="" alt="" class="l_card_pic">
              <h2 class="l_user_name_login ellipsis">电话</h2><i class="l_first_contact">第一联系人</i><span>前台显示</span></div>
            <ul class="l_card_md">
              <li><img src="./bm_icon_05.jpg" alt=""></li>
              <li><img src="./conta.png" alt=""></li>
              <li><img src="./tel_icon_11.jpg" alt=""></li>
              <li><img src="./tel.png" alt=""></li>
              <li><img src="./fax.png" alt=""></li>
              <li><img src="./email_icon_18.jpg" alt=""></li>
              <li><img src="./qq.png" alt=""></li>
            </ul>
            <ul class="l_card_rg">
              <li>部门：</li>
              <li>职务：</li>
              <li>手机：15754287933</li>
              <li>电话：</li>
              <li>传真：</li>
              <li>邮箱：</li>
              <li>&nbsp;QQ：</li>
            </ul>
          </div>
          <div class="l_bg1"></div>
          <div class="l_bg2"></div>
          <div class="l_bg3"></div>
          <div class="l_bg4"></div>
        </div>
      </section>
      <div class="mui-pull-bottom-pocket">
        <div class="mui-pull">
          <div class="mui-pull-loading mui-icon mui-spinner"></div>
          <div class="mui-pull-caption">上拉显示更多</div>
        </div>
      </div>
    </div>
    <div class="mui-scrollbar mui-scrollbar-vertical">
      <div class="mui-scrollbar-indicator"
           style="transition-duration: 0ms; display: block; height: 8px; transform: translate3d(0px, 615px, 0px) translateZ(0px);"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .l_user_name_login
    box-sizing: border-box
    height: auto
    line-height: 1.5
    font-size: 0.3rem
    margin: 0
  .l_box
    position: relative
    height: 4.4rem
    padding: 0 1.6% 0 2.4%
  .l_box:first-child
    margin-top: 0.24rem
  .l_bg,.l_bg1,.l_bg2,.l_bg3,.l_bg4
    position: absolute
    width: 92.77%
    height: 4rem
    background-color: white
    border: 1px solid #dcdcdc
    box-sizing: border-box
  .l_bg
    display: -webkit-box
    display: -webkit-flex
    display: -webkit-box
    display: flex
    z-index: 5
  .l_bg1
    transform: translate(2px,2px)
    -webkit-transform:translate(2px,2px)
    z-index: 4
  .l_bg2
    transform: translate(4px,4px)
    -webkit-transform: translate(4px,4px)
    z-index: 3
  .l_bg3
    transform: translate(6px,6px)
    -webkit-transform: translate(6px,6px)
    z-index: 2
  .l_bg4
    transform: translate(8px,8px)
    -webkit-transform: translate(8px,8px)
    z-index: 1
    box-shadow: 0 1px 15px #666
  .l_select_icon
    display: block
    position: absolute
    right: 5px
    top: 5px
    width: .4rem
  .l_card_lf,
  .l_card_rg,
  .l_card_md
    box-sizing: border-box
    height: 100%
    padding-top: 1px
  .l_card_lf
    display: -webkit-box
    -webkit-box-orient: vertical
    -webkit-box-direction:normal
    -webkit-box-pack: center
    display: -webkit-flex
    display: flex
    justify-content: center
    flex-direction: column
    width: 32%
    text-align: center
  .l_card_pic
    display: block
    width: 1.4rem
    height: 1.4rem
    margin: 0.1rem auto
    border-radius: 50%
    overflow: hidden
  .l_first_contact
    margin: 0.08rem 0
    color: #fe8301
  .l_card_rg,
  .l_card_md
    padding-top: 0.28rem
    font-size: .22rem
    line-height: 1.3
    color: #999
  .l_card_md
    width: 10%
    text-align: center
    background-color: #ebebeb
  .l_card_rg
    width: 60%
  .l_card_rg li,
  .l_card_md li
    line-height:0.48rem
  .l_card_md li img
    height: 0.3rem
    vertical-align: -3px
  .l_card_rg li
    padding-left: 0.2rem
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
  .l_addres_limit
    float: left
    width: 81%
    padding-top: 0.08rem
    vertical-align: top
    line-height: 1.4
    white-space: normal
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
  @media screen and (max-width: 361px) {
    .l_addres_limit {
      width: 77%;
    }
    .l_card_rg,
    .l_card_md {
      padding-top: 0.2rem;
    }
  }
</style>
