import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Login from '@/views/login'
import ShowVlog from '@/views/show_vlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/login',
      name: 'login ',
      component: Login
    }, {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/show_vlog',
      name: 'show_vlog',
      component: ShowVlog
    }
  ]
})
