import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
<<<<<<< HEAD
=======
    path: '/chart',
    name: 'chart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartView.vue')
  },
  {
>>>>>>> 117c001c9f531e67dff6353148ff374f516ed8f3
    path: '/booking/:id/',
    name: 'booking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingView.vue')
  },
<<<<<<< HEAD
  {
    path: '/chart',
    name: 'chart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartView.vue')
  }
=======
>>>>>>> 117c001c9f531e67dff6353148ff374f516ed8f3
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
