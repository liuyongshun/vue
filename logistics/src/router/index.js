import App from '../App'
// const home = r => require.ensure([], () => r(require('../components/home/home')), 'home')
const home = {
  template: '<div>ssss</div>'
}
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
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/map',
      component: map
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/circle',
      component: circle
    }
  ]
}]
