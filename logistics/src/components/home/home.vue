<template>
  <div>
    <div class="b_search">
      <h1 class="l_home_tit">物流营口<img src="" alt=""></h1>
      <div id="listA" class="b_search_content">请输入关键字</div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import bottomNav from '../bottomNav/bottom-nav'
  // import axios from 'axios'
  export default {
    components: {
      bottomNav
    }
//     data () {
//       return {
//         sell: {}
//       }
//     },
//     created () {
//       axios({
//         method: 'get',
//         url: '/api/aa',
//         responseType: 'json'
//       })
//         .then(function (response) {
//           console.log(response.data)
//         })
// //      fetch('/api/aa').then(function (response) {
// //        return response.json()
// //      }).then(function (data) {
// //        console.log(data)
// //      }).catch(function (e) {
// //        console.log('Oops, error')
// //      })
//     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
