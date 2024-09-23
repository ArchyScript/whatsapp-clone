import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// views 
const HomePage = () => import('@/views/Home.vue') 

const routes: Array<RouteRecordRaw> = [ 
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
