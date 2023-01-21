<script setup>
import { useNotesStore } from '@/stores/notes'
import Note from './Note.vue'

const notesStore = useNotesStore()
</script>

<template>
  <Note 
    v-for='note of notesStore.notes'
    :key='note.id'
    :note='note'
  />
</template>
