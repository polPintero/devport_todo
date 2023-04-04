import { createRouter, createWebHistory } from 'vue-router'
import routeList from './routeList'
import store from '../store'

function getToDos(){
  store.dispatch('getToDos')
}

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
      component: () => import('@/views/ToDoPage.vue'),
      beforeEnter:[getToDos]

    }
  ]
})
router.routeList = routeList

export default router
