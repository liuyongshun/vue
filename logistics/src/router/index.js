import App from '../App'
const home = r => require.ensure([], () => r(require('../components/home/home')), 'home')
const map = r => require.ensure([], () => r(require('../components/map/map')), 'map')
const circle = r => require.ensure([], () => r(require('../components/circle/circle')), 'circle')
const mine = r => require.ensure([], () => r(require('../components/mine/mine')), 'mine')
// import home from '../components/goods/goods'

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    {
      path: '',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: home
    },
    {
      name: 'map',
      path: '/map',
      component: map
    },
    {
      name: 'mine',
      path: '/mine',
      component: mine
    },
    {
      name: 'circle',
      path: '/circle',
      component: circle
    }
  ]
}]
