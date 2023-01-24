<script setup>
import TrashIcon from './icons/TrashIcon.vue'
import { useNotesStore } from '@/stores/NotesStore'
import { useModalStore } from '@/stores/ModalStore'

const notes = useNotesStore()
const modal = useModalStore()

const props = defineProps({
  note: {}
})

const showRemoveConfirmation = () => {
  modal.open(
    'Remove note confirmation',
    `Are you sure you want to remove note "${props.note.name}" ?`,
    'Confirm',
     () => notes.removeNote(props.note.id)
  )
}

const removeNote = () => {
  modal.show();
}
</script>

<template>
  <div class="note">
    {{note.name}}
    <TrashIcon class="btn-trash" @click="showRemoveConfirmation()" />
  </div>
</template>

<style scoped>
.note {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
  cursor: pointer;
  border-radius: 5px;
  
  transition: .3s;
}

.note:hover {
  background: rgba(255, 255, 255, .1);
}

.btn-trash {
  height: 20px;
  
  opacity: 0;
  fill: #f76695;
  
  transition: .3s;
}

.note:hover .btn-trash {
  opacity: 1;
}
</style>
