<script setup>
import { reactive } from 'vue'
import router from '@/router'
import { useNotesStore } from '@/stores/NotesStore'
import NoteForm from './NoteForm.vue'

const notesStore = useNotesStore()

const newNote = reactive({
  name: '',
  nextTaskId: 0,
  tasks: []
})

const addNote = () => {
  if (newNote.name !== '') {
    notesStore.addNote(newNote)
    router.push('/')
  }
}

const action = {label: 'Add note', callback: addNote}
</script>

<template>
  <NoteForm :note="newNote" :action="action" />
</template>

<style scoped>

</style>
