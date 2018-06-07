import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import Review from '../components/reviews'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/reviews',
      name:'Review',
      component:Review
    }
  ]
})
