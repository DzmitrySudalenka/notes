import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import AddNoteView from '../views/AddNoteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/add',
      name: 'add',
      component: AddNoteView
    }
  ]
})

export default router
