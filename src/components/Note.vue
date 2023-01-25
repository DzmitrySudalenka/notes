<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useNotesStore } from '@/stores/NotesStore'
import NoteForm from './NoteForm.vue'

const notesStore = useNotesStore()

const route = useRoute()

const noteId = +route.params.id

const originalNote = notesStore.notes.find(note => note.id === noteId)

const note = reactive(JSON.parse(JSON.stringify(originalNote)))

const save = () => {
  if (note.name !== '') {
    const noteIndex = notesStore.notes.findIndex(note => note.id === noteId)
    notesStore.notes[noteIndex] = note;
    router.push('/')
  }
}

const action = {label: 'Save', callback: save}
</script>

<template>
  <NoteForm :note="note" :action="action" />
</template>

<style scoped>

</style>
