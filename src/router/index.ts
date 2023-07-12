import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blackjack',
      name: 'Blackjack',
      // @ts-ignore
      component: () => import ('../views/JackView.vue')
    },
    {
      path: '/twenty-four',
      name: 'Twenty-Four',
      // @ts-ignore
      component: () => import ('../views/FiveView.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      // @ts-ignore
      component: () => import ('../views/CardView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
