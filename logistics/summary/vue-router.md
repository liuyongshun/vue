### 一、vue-router 2.x版本在vue-cli的使用。

[router-link](https://router.vuejs.org/zh-cn/api/router-link.html)

首先：vue-cli的src下有App.vue和main.js
**App.vue**

```
    <div class="l_nav_flex">
      <div class="l_flex_item hover">
      // router-link 默认渲染为a，tag可以指定为其他
        <router-link to="/goods" tag="div">货源交易</router-link>
      </div>
      <div class="l_flex_item l_wire">
        <router-link to="/deal" tag="div">货源交易</router-link>
      </div>
      <div class="l_flex_item">
        <router-link to="/rent" tag="div">货源交易</router-link>
      </div>
    </div>
    // 引入的组件被渲染的位置
    <router-view></router-view>

    // 有时候我们要让激活 class 应用在外层元素
    <router-link tag="li" to="/foo">
      <a>/foo</a>
    </router-link>
```

**基础5步：**

**main.js**
```
// 1、import vue vue-router and invoke Vue.use(VueRouter) 导入vue-router 调用 Vue.use(VueRouter)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2. appoint router component 指定被路由的组件
import goods from './components/goods/goods.vue'
import deal from './components/deal/deal.vue'
import rent from './components/rent/rent.vue'

// 3. appoint router  指定路由方式
注意：该处的routes是必须的，如果我写的route将无法实现
const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/deal',
    component: deal
  },
  {
    path: '/rent',
    component: rent
  }
]

// 4. create router instance(实例) and pass to(传入) the configuration of route
const router = new VueRouter({
    routes
    // 2.5.0+通过该方式指定active（当前激活状态，常用的tab切换，当前激活的tab）
    // linkExactActiveClass: 'hover'
    })

// 5、. create and mount(挂载) to #app
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

// 这里结尾处app只是声明了。如果安装了eslint-friendly-formatter，会导致错误，可以改成如下写法。
//const app = new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
// app.$mount('#app')
```
