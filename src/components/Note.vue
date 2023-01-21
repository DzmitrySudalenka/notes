<script setup>
defineProps({
  note: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>

<template>
  <div class="note">{{note.name}}</div>
</template>
