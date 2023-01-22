<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/NotesStore'

const notesStore = useNotesStore()

let name = ref('')

const addNote = () => {
  if (name.value !== '') {
    notesStore.addNote(name.value)
    name.value = ''
  }
}
</script>

<template>
  <div class="note-form">
    <input
      type="text"
      class="input note-form__input"
      v-model="name"
      placeholder="New note name"
    >
    <button class="note-btn note-form__btn" @click="addNote()">Add</button>
  </div>
</template>

<style scoped>
.note-form {
  display: flex;
}

.note-form__btn {
  margin-left: 20px;
}
</style>
