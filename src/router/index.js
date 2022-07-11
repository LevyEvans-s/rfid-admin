import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
