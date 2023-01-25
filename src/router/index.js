import { createRouter, createWebHistory } from 'vue-router'
import Notes from '../components/Notes.vue'
import NoteAdd from '../components/NoteAdd.vue'
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
      component: NoteAdd
    },
    {
      path: '/note/:id',
      name: 'note',
      component: Note
    },
  ]
})

export default router
