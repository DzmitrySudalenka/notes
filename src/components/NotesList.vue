<script setup>
import { useNotesStore } from '@/stores/NotesStore'
import NotesListItem from './NotesListItem.vue'

const notesStore = useNotesStore()
</script>

<template>
  <div class="notes-list">
    <NotesListItem
      v-for='note of notesStore.notes'
      :key='note.id'
      :note='note'
    />
  </div>
</template>

<style scoped>
.notes-list {
  min-width: 430px;
  margin-top: 50px;
}
</style>
