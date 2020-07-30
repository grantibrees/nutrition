import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // Search and display
  },
  {
    path: '/tracker',
    name: 'Tracker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // @ts-ignore
    component: () => import(/* webpackChunkName: "tracker" */ '../views/Tracker.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
