<template>
  <router-view></router-view>
</template>

<script type="text/ecmascript-6">
  // import bottomNav from './components/bottomNav/bottom-nav'

  export default {
    components: {
      // bottomNav
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
