import App from '../App'
const home = r => require.ensure([], () => r(require('../components/home/home')), 'home')
const map = r => require.ensure([], () => r(require('../components/map/map')), 'map')
const circle = r => require.ensure([], () => r(require('../components/circle/circle')), 'circle')
const mine = r => require.ensure([], () => r(require('../components/mine/mine')), 'mine')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const register = r => require.ensure([], () => r(require('../page/register/register')), 'register')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const baseMessage = r => require.ensure([], () => r(require('../page/baseMessage/baseMessage')), 'baseMessage')
const contact = r => require.ensure([], () => r(require('../page/contact/contact')), 'contact')

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
      // children: [
      //   {
      //     name: 'profile',
      //     path: '/profile',
      //     component: 'profile'
      //   },
      // ]
    },
    {
      name: 'circle',
      path: '/circle',
      component: circle
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'register',
      path: '/register',
      component: register
    },
    {
      name: 'forget',
      path: '/forget',
      component: forget
    },
    {
      name: 'contact',
      path: '/contact',
      component: contact
    },
    {
      name: 'baseMessage',
      path: '/baseMessage',
      component: baseMessage
    },
    {
      name: 'changePassword',
      path: '/changePassword',
      component: forget
    },
    {
      name: 'profile',
      path: '/profile',
      component: profile
    }
  ]
}]
