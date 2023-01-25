<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useNotesStore } from '@/stores/NotesStore'
import { useModalStore } from '@/stores/ModalStore'
import TrashIcon from './icons/TrashIcon.vue'

const notesStore = useNotesStore()
const modal = useModalStore()

const route = useRoute()

const noteId = +route.params.id

const note = reactive({...notesStore.notes.find(note => note.id === noteId)})

const newTask = reactive({
  id: 0,
  completed: false,
  text: ''
})

const save = () => {
  if (note.name !== '') {
    const noteIndex = notesStore.notes.findIndex(note => note.id === noteId)
    notesStore.notes[noteIndex] = note;
    router.push('/')
  }
}

const addTask = () => {
  if (newTask.text !== '') {
    newTask.id = note.nextTaskId++
    note.tasks.push({...newTask})
    newTask.text = ''
  }
}

const removeTask = (id) => {
  note.tasks = note.tasks.filter((task) => {
    return task.id !== id;
  })
}

const showRemoveConfirmation = (task) => {
  modal.open(
    'Remove task confirmation',
    `Are you sure you want to remove task "${task.text}"?`,
    'Confirm',
    () => removeTask(task.id)
  )
}
</script>

<template>
  <div class="form">
    <input
      type="text"
      class="input form__input"
      v-model="note.name"
      placeholder="Note name"
    >
    <button class="note-btn form__btn" @click="save()">Save</button>
  </div>
  <div class="form task-form">
    <input
      type="text"
      class="input form__input"
      v-model="newTask.text"
      placeholder="New task name"
    >
    <button class="note-btn form__btn" @click="addTask()">Add task</button>
  </div>
  <div class="tasks">
    <div class="list-item" v-for="task of note.tasks.slice().reverse()" :key="task.id">
      <div class="task-item__text-wrap">
        <input class="task-item__checkbox" type="checkbox" v-model="task.completed">
        {{task.text}}
      </div>
      <TrashIcon class="btn-trash" @click="showRemoveConfirmation(task)" />
    </div>
  </div>
</template>

<style scoped>
.task-form {
  margin-top: 50px;
}

.form__btn {
  margin-left: 20px;
}

.tasks {
  min-width: 467px;
  margin-top: 50px;
}

.list-item {
  justify-content: space-between;
  align-items: center;
}

.task-item__checkbox {
  margin-right: 10px;
}
</style>
