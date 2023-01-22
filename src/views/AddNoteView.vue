<script setup>
import router from '@/router'
import { useNotesStore } from '@/stores/notes'

const notesStore = useNotesStore()

let name = 'Name';

const addNote = () => {
  notesStore.addNote(name)
  router.push('/')
}
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col notes-wrap">
          <input type="text" class="input" v-model="name">
          <button class="btn-add" @click="addNote()">Add</button>
        </div>
      </div>
    </div>
  </main>
</template>
