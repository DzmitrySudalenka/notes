<script setup>
import NoteForm from './NoteForm.vue'
import NotesList from './NotesList.vue'
</script>

<template>
  <RouterLink to="/add" class="note-btn">Add new</RouterLink>
  <NotesList />
</template>
