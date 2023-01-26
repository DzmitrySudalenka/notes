<script setup>
import { useNotesStore } from '@/stores/NotesStore'
import NotesListItem from './NotesListItem.vue'

const notesStore = useNotesStore()
</script>

<template>
  <div class="notes-list">
    <NotesListItem
      v-if="notesStore.notes.length"
      v-for="note of notesStore.notes.slice().reverse()"
      :key="note.id"
      :note="note"
    />
    <div v-else>No notes</div>
  </div>
</template>

<style scoped>
.notes-list {
  width: 100%;
  max-width: 430px;
  margin-top: 50px;
}
</style>
