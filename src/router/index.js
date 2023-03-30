import { createRouter, createWebHistory } from 'vue-router'
import CalculatePage from '@/views/CalculatePage.vue'

const routes = [
  {
    path: '/',
    name: 'CalculatePage',
    component: CalculatePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
