import { createRouter, createWebHistory } from 'vue-router'
import Notes from '../components/Notes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: Notes
    }
  ]
})

export default router
