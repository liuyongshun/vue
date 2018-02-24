<template>
  <div>
    <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
      <div class="mui-scroll">
        <ul id="logistics_list" class="l_list_show mui-table-view mui-table-view-striped mui-table-view-condensed">
          <li>
            <img class="l_sign" src="./cccccc.png" alt="">
            <figure class="l_avator_lf fl">
              <img class="l_avator" src="./zhantingttmr.png" alt="">
              <figcaption>FSFS</figcaption>
            </figure>
            <div class="l_content_rg fl">
              <time>2012-01-01</time>
              <p class="elli">符号放了使命光荣</p>
              <ul class="l_pic_list mui-content-padded">
                <li class="l_view"><img class="l_list_lazy" src="./zhantingttmr.png" alt=""></li>
                <li class="l_view"><img class="l_list_lazy" src="./zhantingttmr.png" alt=""></li>
                <li class="l_view"><img class="l_list_lazy" src="./zhantingttmr.png" alt=""></li>
                <li class="l_view"><img class="l_list_lazy" src="./zhantingttmr.png" alt=""></li>
                <li class="l_view"><img class="l_list_lazy" src="./zhantingttmr.png" alt=""></li>
                <li class="l_view"><img class="l_list_lazy" src="./zhantingttmr.png" alt=""></li>
              </ul>
              <div class="l_msg_count">
                <img src="./pingluu.png" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <bottomNav></bottomNav>
  </div>
</template>

<script type="text/ecmascript-6">
  import bottomNav from '../bottomNav/bottom-nav'

  export default {
    components: {
      bottomNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .l_list_show
    overflow: hidden
    -webkit-overflow-scrolling: touch
  .l_list_show > li
    display: block
    position: relative
    margin-bottom: 0.22rem
    padding-bottom: 0.22rem
    color: #555
    background-color: #fff
    overflow: hidden

  .l_sign
    position: absolute
    top: 0
    right: 0
    width: 0.8rem
  .l_avator_lf,
  .l_content_rg
    -webkit-box-sizing: border-box
    box-sizing: border-box
    text-align: center
  .l_avator_lf
    position: relative
    width: 24%
    margin: 0
    font-size: 0.2rem
  .l_avator_lf:after
    display: block
    position: absolute
    content: ''
    width: 1px
    top: 0.5rem
    right: 0
    bottom: 0
    background-color: #dddddd
    -webkit-transform: scaleX(0.5)
    transform: scaleX(0.5)
  .l_avator
    display: block
    width: 0.9rem
    height: 0.9rem
    margin: 0.3rem auto 0.1rem
    /*border: 1px solid #dedede*/
    /*border-radius: 100%*/
  .l_content_rg
    width: 76%
    padding: 0.16rem 0 0 0.12rem
    text-align: left
    line-height: 0.36rem
  .l_pic_list
    padding-top: 0.1rem
    overflow: hidden
  .l_pic_list > li
    box-sizing: border-box
    float: left
    width: 15.66666%
    padding: 1px
    margin: 0 1% 0.1rem 0
    border: 1px solid #dddddd
  .l_pic_list li > img
    display: block
    height: 0.8rem
    max-width: 98%
    margin: 0 auto
  .l_msg_count
    float: right
    padding: 0 0.16rem 0 0
  .l_msg_count img
    width: 0.38rem
    margin-right: 4px
    vertical-align: middle
  .l_mine_logistics
    display: block
    position: fixed
    right: 0.2rem
    bottom: 1.6rem
    padding: 0.14rem 0.24rem
    color: #fff
    background-color: #3da0f7
    border-radius: 1rem
    z-index: 3
  .l_mine_logistics:hover
    color: #fff
</style>
