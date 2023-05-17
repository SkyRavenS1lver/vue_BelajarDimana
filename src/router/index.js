import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OCView from '../views/OCView.vue'
import SearchView from '../views/SearchView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: HomeView
    },
    {
      path: '/:search',
      name: 'Search',
      props: true,
      component: SearchView
    },
    {
      path: '/maps',
      name: 'maps',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/profile/:id/:mode',
      name: 'Profile',
      props: true,
      component: OCView
    }
  ]
})

export default router
