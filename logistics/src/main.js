// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App.vue'
//
// /* vue router step 5 */
// // 0. import vue vue-router and invoke Vue.use(VueRouter)
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// // import router from './router'
// // Vue.config.productionTip = false
//
// // 1. appoint router component
// import goods from './components/goods/goods.vue'
// import deal from './components/deal/deal.vue'
// import rent from './components/rent/rent.vue'
// /* eslint-disable no-new */
//
// // 2. appoint router
// const routes = [
//   {
//     path: '/',
//     component: goods
//   },
//   {
//     path: '/deal',
//     component: deal
//   },
//   {
//     path: '/rent',
//     component: rent
//   }
// ]
//
// // 3. create router instance(实例) and pass to(传入) the configuration of route
// const router = new VueRouter({
//   routes,
//   linkActiveClass: 'hover'
//   // linkExactActiveClass: 'hover'
// })
//
// // 4. create and mount(挂载) to #app
// const app = new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
// app.$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* ********************************************************************************* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
const app = new Vue({
  router
})
app.$mount('#app')
