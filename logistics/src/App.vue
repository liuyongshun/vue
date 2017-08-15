<template>
  <div id="app">
    <v-header></v-header>
    <v-list></v-list>
    <!--<router-view></router-view>-->
  </div>
</template>

<script >
  import header from './components/home/header.vue'
  import list from './components/home/list.vue'

  export default {
    components: {
      'v-header': header,
      'v-list': list
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
</style>
