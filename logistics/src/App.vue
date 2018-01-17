<template>
  <div id="app">
    <div class="b_search">
      <h1 class="l_home_tit">物流营口<img src="" alt=""></h1>
      <div id="listA" class="b_search_content">请输入关键字</div>
    </div>
    <v-list></v-list>
    <div class="l_nav_flex">
      <router-link to="/" tag="div" exact="true" class="l_flex_item">
        <span>货源交易</span>
      </router-link>
      <router-link to="/deal" tag="div" class="l_flex_item l_wire">
        <span>货源交易</span>
      </router-link>
      <router-link to="/rent" tag="div" class="l_flex_item">
        <span>货源交易</span>
      </router-link>
    </div>
    <router-view></router-view>
    <div class="j_foot-nav">
      <ul class="foot-navli">
        <li class="now">
          <a href=""><img src="./asset/shouye@3x.png"/><br>首页</a>
        </li>
        <li>
          <a href=""><img src="./asset/shipin@3x.png"/><br>地图</a>
        </li>
        <li>
          <a href=""><img src="./asset/index_bar_release@3x.png"/><br>发布</a>
        </li>
        <li>
          <a href=""><img src="./asset/huikan@3x.png"/><br>物流圈</a>
        </li>
        <li>
          <a href=""><img src="./asset/wode@3x.png"/><br>我的</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
  import list from './components/listNav/list.vue'

  export default {
    components: {
      'v-list': list
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Helvetica Neue', Helvetica, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  .b_search
    background: url(asset/bj.png) no-repeat
    background-size: 100%
    height: 3.57rem
    padding: 0.6rem 20px 0px

  .b_search_content
    width: 100%
    height: 0.72rem
    line-height: 0.72rem
    background: url("asset/search_icon.png") no-repeat 2rem .22rem/0.28rem 0.28rem #ffffff
    border-radius: 5px
    text-align: center
    color: #8f8f8f
    font-size: 0.28rem

  .l_home_tit
    margin-bottom: 1.48rem
    font-size: .44rem
    text-align: center
    line-height: 100%
    color: #fff
// tab
  .l_nav_flex
    display: -webkit-box
    -webkit-box-align: center
    display: -webkit-flex
    display: flex
    align-items: center
    margin-bottom: 2px
    background-color: #fff
  .l_flex_item
    display: block
    box-sizing: border-box
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    text-align: center
  .l_flex_item
    span
      display: inline-block
      padding: 0.28rem 4px
  .l_nav_flex .hover
    span
      position: relative
      top: 1px
      color: #2c9bfa
      border-bottom: 2px solid #2c9bfa
  .l_wire:after
    position: absolute
    top: 0.3rem
    bottom: 0.3rem
    width: 1px
    content: ''
    background-color: #e0e0e0
    -webkit-transform: scaleX(0.5)
    transform: scaleX(0.5)
  .l_wire:before
    @extend .l_wire:after
  .l_wire:after
    right: 0
  .l_wire:before
    left: 0

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
</style>
