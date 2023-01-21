<script setup>
  import { useNotesStore } from '@/stores/notes'

  const notesStore = useNotesStore()
</script>

<template>
  {{notesStore.notes}}
</template>
