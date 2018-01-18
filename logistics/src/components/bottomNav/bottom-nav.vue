<template>
  <div class="j_foot-nav">
    <ul class="foot-navli">
      <li class="now">
        <div @click = "gotoAddress('/home')"><img src="./shouye@3x.png"/><br>首页</div>
      </li>
      <li>
        <div @click = "gotoAddress('/map')"><img src="./shipin@3x.png"/><br>地图</div>
      </li>
      <li>
        <div @click = "gotoAddress('/release')"><img src="./index_bar_release@3x.png"/><br>发布</div>
      </li>
      <li>
        <div @click = "gotoAddress('/circle')"><img src="./huikan@3x.png"/><br>物流圈</div>
      </li>
      <li>
        <div @click = "gotoAddress('/mine')"><img src="./wode@3x.png"/><br>我的</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    created () {

    },
    mounted () {

    },
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
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
</style>
