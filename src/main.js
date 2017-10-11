import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import order from 'components/order/order'
import content from 'components/content/content'
import manage from 'components/manage/manage'
import mine from 'components/mine/mine'

import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: order
}, {
  path: '/order',
  component: order
}, {
  path: '/content',
  component: content
}, {
  path: '/manage',
  component: manage
}, {
  path: '/mine',
  component: mine
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
