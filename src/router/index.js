import { createRouter, createWebHistory } from 'vue-router'
import routeList from './routeList'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routeList.base,
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: routeList.todo,
      name: 'todo',
      component: () => import('@/views/ToDoPage.vue')

    }
  ]
})
router.routeList = routeList

export default router
