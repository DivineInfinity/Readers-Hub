import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Reviews from '../components/reviews'
import BookDetails from '../components/book-details'
import SearchPage from '../components/search-page'
import Genre from '../components/genre'
import Login from '../components/login'
import SignUp from '../components/signup'
import ContactUs from '../components/contact-us'
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
      component: SignUp
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/book/genre',
      name: 'genre',
      component: Genre
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
      path: '/book/search/genre/:searchQuery',
      name: 'search-genre',
      component: SearchPage
    },
    {
      path:'/book/discussions/:id',
      name:'discussions',
      component: Discussions
    },
    {
      path: '/user/shelf',
      name: 'shelf',
      component: Shelf
    },
    {
      path:'/user/profile/:id',
      name:'profile',
      component:ProfilePage
    }
  ],
  mode: 'history'
})
