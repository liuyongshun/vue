<template>
  <div>
    <div class="j_foot-nav">
      <ul class="foot-navli">
        <router-link tag="li" :to='{name: "home"}'>
          <i class="iconfont icon-shouye"></i><br>首页
        </router-link>
        <router-link tag="li" :to='{name: "map"}'>
          <i class="iconfont icon-iconset0395"></i><br>地图
        </router-link>
        <li @click = "showDialogMethod()">
          <i class="iconfont icon-tianjia"></i><br>发布
        </li>
        <router-link tag="li" :to='{name: "circle"}'>
          <i class="iconfont icon-shu"></i><br>商圈
        </router-link>
        <router-link tag="li" :to='{name: "mine"}'>
          <i class="iconfont icon-wode"></i><br>我的
        </router-link>
      </ul>
    </div>
    <div v-show="showDialog" class="l_dialog" style="height: 100%">
      <div class="clearfix dialog-wrapper">
        <ul class="l_filter_list">
          <li>
            <h3 class="l_detail_tit ellipsis" style="font-size: 1.17em">资源交易</h3>
            <div id="source" class="b_nav_type b_nav_company">
              <a href="javascript:;"><img src="./huoyuanjyy.png">车</a>
              <a href="javascript:;"><img src="./yunlijy.png">货</a>
              <a href="javascript:;"><img src="./cangpeijiaoyi.png">仓</a>
            </div>
          </li>
          <li>
            <h3 class="l_detail_tit ellipsis" style="font-size: 1.17em">物流圈</h3>
            <div id="logistics" class="b_nav_type b_nav_company">
              <a href="javascript:;"><img src="./huoyuanjyy.png">车</a>
              <a href=""><img src="./yunlijy.png">货</a>
              <a href=""><img src="./cangpeijiaoyi.png">仓</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="detail-close" @click="hideDialogMethod()">
        <img class="l_close_fork" src="./close.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        showDialog: false
      }
    },
    created () {

    },
    mounted () {

    },
    methods: {
      // gotoAddress (path) {
      //   this.$router.push(path)
      // },
      showDialogMethod () {
        this.showDialog = true
      },
      hideDialogMethod () {
        this.showDialog = false
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .j_foot-nav
    box-sizing: border-box
    width: 100%
    padding: 0.1rem 0
    border-top: 1px solid #e4e0d9
    position: fixed
    z-index: 2
    bottom: 0
    left: 0
    background: #fff

  .foot-navli
    width: 100%
    height: 0.7rem
    overflow: hidden
  .foot-navli li .l_add_btn
    display: block
    height: .8rem
    margin: -0.09rem auto 0
  .foot-navli li
    width: 20%
    float: left
    text-align: center
    font-size: 0.25rem
    line-height: 0.3rem
  .foot-navli li img
    height: 0.38rem
  .foot-navli .now a
    color: #3da0f7
  .foot-navli li a
    color: #292929
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
  .b_nav_type a
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    display: block
    text-align: center
    color: #363636
  .b_nav_type a img
    display: block
    margin: 0 auto 0.2rem
    height: 0.7rem
  .b_nav_company a
    width: 20%
  .l_close_fork
    width: 0.54rem
    position: absolute
    bottom: 0.4rem
    left: 46%
    left: -webkit-calc(50% - 0.27rem)
    left: calc(50% - 0.27rem)
  .l_detail_tit
    padding: 0.27rem 0.22rem
    border-bottom: 1px solid #f0eced
  .l_dialog
    box-sizing: border-box
    position: fixed
    bottom: 0
    width: 100%
    height: 92%
    height: -webkit-calc(100% - 0.8rem)
    height: calc(100% - 0.8rem)
    padding-bottom: 0.42rem
    background-color: #efeff4
    overflow: auto
    z-index: 4
    -webkit-overflow-scrolling: touch
  .l_filter_list li
    margin-bottom: 0.19rem
    background-color: #fff
</style>
