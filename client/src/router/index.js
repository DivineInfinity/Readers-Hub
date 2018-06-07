import Vue from 'vue'
import Router from 'vue-router'
import BookDescription from '../components/book-description'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bookdescription',
      name: 'BookDescription',
      component: BookDescription
    }
  ]
})
