<script setup>
import Notes from '../components/Notes.vue'
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col notes-wrap">
          <Notes />
          <RouterLink to="/add" class="btn-add">Add new</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
