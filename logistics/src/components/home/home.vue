<template>
  <div class="box">
    <div class="b_search">
      <h1 class="l_home_tit">物流<img src="" alt=""></h1>
      <div id="listA" class="b_search_content">请输入关键字</div>
    </div>
    <div class="b_mom_div">
      <div class="b_nav_type b_nav_company">
        <a href=""><img src="./huoyuanjyy.png">货源</a>
        <a href=""><img src="./yunlijy.png">运力</a>
        <a href=""><img src="./cangpeijiaoyi.png">仓配</a>
        <a href=""><img src="./chefabu.png">快递</a>
        <a href=""><img src="./peitaoziyuan.png">配套</a>
      </div>
      <div class="b_nav_type b_nav_company">
        <a href=""><img src="./wuliuminglu.png">物流</a>
        <a href=""><img src="./wuliushuju.png">数据</a>
        <a href=""><img src="./hangyedongtai.png">行业</a>
        <a href=""><img src="./wuliuhangye.png">招聘</a>
        <a href=""><img src="./quanbuziyuan.png">资源</a>
      </div>
    </div>
    <div class="l_nav_flex">
      <div class="l_flex_item hover"><span>货源</span></div>
      <div class="l_flex_item l_wire"><span>运力</span></div>
      <div class="l_flex_item"><span>出租</span></div>
    </div>
    <section id="company_list">
      <ul class="l_tab_list" v-for="item in results" v-bind:identify="item.id">
        <li class="l_list_cell pdleft"><span class="fl">{{item.goodsName}}</span><span class="fr">{{item.unit}}吨</span></li>
        <li class="l_list_cell ellipsis">
          <img class="l_path_address" src="./qidian.png" alt="">
          {{item.startAddress}}
        </li>
        <li class="l_list_cell ellipsis">
          <img class="l_path_address" src="./zhongdian.png" alt="">
          {{item.endAddress}}
        </li>
        <li class="l_list_cell">
          <span class="l_split">{{item.cityUltilityVehicle}}</span>
          <span class="l_split"></span>
          <span class="l_split">剩余运力：<span class="light_gray">{{item.transportCapacity}}吨</span></span>
        </li>
        <li class="l_list_cell">
          发车时间：
          <span class="light_gray">{{item.departTime}}</span>
        </li>
      </ul>
    </section>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import bottomNav from '../bottomNav/bottom-nav'
  import axios from 'axios'

  export default {
    components: {
      bottomNav
    },
    data () {
      return {
        sell: {},
        results: []
      }
    },
    mounted () {
      let that = this
      axios({
        method: 'get',
        url: '/api/aa',
        responseType: 'json'
      })
        .then(function (response) {
          that.results = response.data.data.list
        })
      // axios({
      //   method: 'get',
      //   url: '/api/aa',
      //   responseType: 'json'
      // })
      //   .then(function (response) {
      //     this.result = response.data
      //   })
    },
    created () {
      // fetch('/api/aa').then(function (response) {
      //   return response.json()
      // }).then(function (data) {
      //   console.log(data)
      // }).catch(function (e) {
      //   console.log('Oops, error')
      // })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    width: 100%;
    padding-bottom: 0.9rem;
    overflow: hidden;
  .l_nav_flex
    display: -webkit-box
    -webkit-box-align: center
    display: -webkit-flex
    display: flex
    align-items: center
    margin-bottom: 2px
    background-color: #fff
  .l_flex_item
    box-sizing: border-box
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    flex: 1
    text-align: center
  .l_flex_item span
    display: inline-block
    padding: 0.28rem 4px
  .l_nav_flex .hover span
    position: relative
    top: 1px
    color: #2c9bfa
    border-bottom: 2px solid #2c9bfa
  .l_wire:after,
  .l_wire:before
    position: absolute
    top: 0.3rem
    bottom: 0.3rem
    width: 1px
    content: ''
    background-color: #e0e0e0
    -webkit-transform: scaleX(0.5)
    transform: scaleX(0.5)
  .l_wire:after
    right: 0
  .l_wire:before
    left: 0
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
  .l_list_cell a
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
