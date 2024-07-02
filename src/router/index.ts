import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/characters',
      // component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/ag-grid',
      name: 'ag-grid',
      component: () => import('../views/AgGridView.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersGridView.vue')
    }
  ]
})

export default router