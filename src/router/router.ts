import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import RecipePage from '../pages/RecipePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      component: MainPage
    },

    {
      path: '/recipe/:id',
      name: 'recipePage',
      component: RecipePage
    }
  ]
})

export default router
