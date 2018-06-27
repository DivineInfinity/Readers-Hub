import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Reviews from '../components/reviews'
import BookDetails from '../components/book-details'
import SearchPage from '../components/search-page'
import Login from '../components/login'
import SignUp from '../components/signup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/reviews/:id',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/book-details/:id',
      name: 'book-details',
      component: BookDetails
    },
    {
      path: '/book/search/:searchQuery',
      name: 'search-page',
      component: SearchPage
    }
  ],
  mode: 'history'
})
