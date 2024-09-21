import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// views 
const ChatsPage = () => import('@/views/Chats.vue')

const routes: Array<RouteRecordRaw> = [ 
  {
    path: '/',
    name: 'Chats',
    component: ChatsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
