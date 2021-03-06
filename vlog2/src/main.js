// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

axios.defaults.baseURL='/aif-app'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false

/*声明全局变量*/
Vue.prototype.$http = axios;


Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

/*router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');
  if(!user && to.path !== '/login'){
    next({
      path: '/login'
    })
  }else{
    next();
  }
})*/
