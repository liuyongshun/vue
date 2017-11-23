<template>
  <ul class="l_tab_list">
    <li class="l_list_cell pdleft">deal</li>
    <li class="l_list_cell ellipsis"><img class="l_path_address" src="./qidian.png" alt="">盘锦市双台子区</li>
    <li class="l_list_cell ellipsis"><img class="l_path_address" src="./qidian.png" alt=""> 辽宁省营口市老边区</li><li class="l_list_cell"><span class="l_split ellipsis">重量/体积：<span class="light_gray">3方</span></span><span class="l_split"></span><span class="l_split">期望运价：<span class="orange">电议</span></span></li>
    <li class="l_list_cell">发货时间：<span class="light_gray">2017-11-21</span></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
</style>
