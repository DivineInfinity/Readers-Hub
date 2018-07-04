import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Reviews from '../components/reviews'
import BookDetails from '../components/book-details'
import SearchPage from '../components/search-page'
import Login from '../components/login'
import Signup from '../components/signup'
import Discussions from '../components/discussions.vue'
import ProfilePage from '../components/profile.vue'
import Shelf from '../components/shelf'

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
      component: Signup
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
    },
    {
      path: '/book/discussions/:id',
      name: 'discussions',
      component: Discussions
    },
    {
      path: '/user/shelf',
      name: 'shelf',
      component: Shelf
    },
    {
      path: '/user/profile',
      name: 'profile',
      component: ProfilePage
    }
  ],
  mode: 'history'
})
