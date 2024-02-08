import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Index.vue'
import Test from '../views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

export default router
