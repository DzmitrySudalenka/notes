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
    `Are you sure you want to remove note "${props.note.name}"?`,
    'Confirm',
    () => notes.removeNote(props.note.id)
  )
}
</script>

<template>
  <RouterLink :to="{name: 'note', params: {id: note.id}}">
    <div class="list-item">
      <div class="list-item__name-wrap">
        {{note.name}}
        <TrashIcon class="btn-trash" @click.prevent="showRemoveConfirmation()" />
      </div>
      <div class="list-item__tasks-wrap">
        <div
          class="task-item"
          v-for="task of note.tasks.slice(-2).reverse()"
          :key="task.id"
        >
          <input class="task-item__checkbox" type="checkbox" :checked="task.completed" disabled>
          {{task.text}}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.list-item {
  flex-direction: column;
  
  color: #f8f0e4;
}

.list-item__name-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.task-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

.task-item__checkbox {
  margin-right: 10px;
}
</style>
