import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Beers from '../views/Beers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/beers',
    name: 'Beers',
    component: Beers
  },
]

const router = new VueRouter({
  routes
})

export default router
