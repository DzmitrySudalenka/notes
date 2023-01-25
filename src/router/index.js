import { createRouter, createWebHistory } from 'vue-router'
import Notes from '../components/Notes.vue'
import NoteForm from '../components/NoteForm.vue'
import Note from '../components/Note.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: Notes
    },
    {
      path: '/add',
      name: 'add',
      component: NoteForm
    },
    {
      path: '/note/:id',
      name: 'note',
      component: Note
    },
  ]
})

export default router
