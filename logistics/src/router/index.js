import App from '../App'
const home = r => require.ensure([], () => r(require('../components/goods/goods')), 'home')
// import home from '../components/goods/goods'

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    {
      path: '',
      component: home
    },
    {
      path: '/home',
      component: home
    }
  ]
}]
