<template>
  <div>
    <div class="j_main-body">
      <router-link tag="div" :to=" isLogin ?  {name: 'login'} : {name: 'profile'}" class="l_mine_head">
        <!--<div class="l_msg_tip">-->
        <!--<img class="l_msg_point" src="../images/bydd.png" alt="">-->
        <!--<img class="l_msg_pic" src="../images/xiaoxixx.png" alt="">-->
        <!--</div>-->
        <a href="javascript:;" class="l_user_avator"><img class="avator" src="./zhantingttmr.png" alt=""></a>
        <span class="l_user_name">登录</span>
      </router-link>
      <ul class="l_tab_list l_mine">
        <li class="l_list_cell">
          <a href="">
            <img src="./yijianfkk.png" alt="">
            意见反馈
          </a>
        </li>
        <li class="l_list_cell">
          <a href="">
            <img src="./guanyiwmm.png" alt="">
            关于我们
          </a>
        </li>
        <li class="l_list_cell">
          <a href="">
            <img style="vertical-align: -1px;" src="./banbenjkl.png" alt="">
            版本记录
          </a>
        </li>
      </ul>
    </div>
    <bottomNav></bottomNav>
  </div>
</template>

<script type="text/ecmascript-6">
  import bottomNav from '../bottomNav/bottom-nav'

  export default {
    components: {
      bottomNav
    },
    data () {
      return {
        isLogin: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .b_mom_div
    background: #fff
    margin: 0 0 0.18rem
  .b_nav_type
    display: -webkit-box
    -webkit-box-align: center
    display: -webkit-flex
    display: flex
    align-items: center
    padding: 0.3rem 0 0.2rem
  .b_nav_type
    a
      -webkit-box-flex: 1
      -webkit-flex: 1
      flex: 1
      display: block
      text-align: center
      color: #363636
  .b_nav_type
    a
      img
        display: block
        margin: 0 auto 0.2rem
        height: 0.7rem
  .b_nav_company
    a
      width: 20%
  .l_mine_head
    box-sizing: content-box
    height: 2.6rem
    padding: 0.7rem 0.2rem 0px
    text-align: center
    background: url(./zhantingbj.png) no-repeat
    background-size: 100% 100%
  .l_msg_tip
    position: relative
    width: 100%
    height: 0.7rem
  .l_msg_point
    position: absolute
    right: 0
    top: 0.2rem
    width: 0.16rem
  .l_msg_pic
    position: absolute
    right: 3px
    top: 0.2rem
    width: 0.42rem
  .l_user_avator
    display: block
    width: 1.3rem
    height: 1.3rem
    margin: 0 auto
    background-color: #fff
    border: 4px solid #65b7fb
    border-radius: 100%
    overflow: hidden
    cursor: pointer
  .avator
    display: block
    width: 100%
    height: 100%
    margin: 0 auto
  .l_user_name
    display: inline-block
    margin-top: 0.2rem
    font-size: 0.34rem
    text-align: center
    color: #fff
  .l_font_set
    a
      font-size: .24rem
  .l_tab_list
    margin-bottom: 0.18rem
    background-color: #fff
  .l_list_cell
    box-sizing: border-box
    width: 100%
    position: relative
    padding: 0 0.2rem
    line-height: 1rem
    overflow: hidden
    display: block
    color: #555555
  .l_list_cell:after
    position: absolute
    right: 0
    bottom: 0
    left: 0
    height: 1px
    content: ''
    background-color: #e0e0e0
    -webkit-transform: scaleY(0.5)
    transform: scaleY(0.5)
  .l_list_cell
    a
      display: block
      color: #555
      text-decoration: none
  .l_path_address
    width: 0.34rem
    vertical-align: -4px
  .l_split
    box-sizing: border-box
    display: block
    float: left
  .l_split:first-child
    width: 39%
  .l_split:last-child
    float: right
    width: 46%
    text-align: right
  .l_split:nth-child(2)
    width: 15%
  .l_split_2
    box-sizing: border-box
    display: block
    float: left
    width: 50%
  .l_special_2
    display: block
    float: right
    width: 56%
    line-height: 0.32rem
    margin-top: 0.34rem
    padding-bottom: 0.1rem
  .l_close_fork
    width: 0.54rem
    position: absolute
    bottom: 0.4rem
    left: 46%
    left: -webkit-calc(50% - 0.27rem)
    left: calc(50% - 0.27rem)
  .l_mine
    li
      a > img
        width: 0.3rem
        margin-right: 0.2rem
        vertical-align: -3px
</style>
