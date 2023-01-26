<script setup>
import { reactive } from 'vue'
import router from '@/router'
import { useNotesStore } from '@/stores/NotesStore'
import { useModalStore } from '@/stores/ModalStore'
import TrashIcon from './icons/TrashIcon.vue'

const notes = useNotesStore()
const modal = useModalStore()

const props = defineProps({
  note: {},
  action: {},
  showRemoveBtn: true
})

let noteNameBuffer = []
noteNameBuffer.push(props.note.name)

let noteNameBufferIndex = 0

const showNoteRemoveConfirmation = () => {
  modal.open(
    'Remove note confirmation',
    `Are you sure you want to remove note "${props.note.name}"?`,
    'Confirm',
    () => {
      notes.removeNote(props.note.id)
      router.push('/')
    }
  )
}

const newTask = reactive({
  id: 0,
  completed: false,
  text: ''
})

const addTask = () => {
  if (newTask.text !== '') {
    newTask.id = props.note.nextTaskId++
    props.note.tasks.push({...newTask})
    newTask.text = ''
  }
}

const removeTask = (id) => {
  props.note.tasks = props.note.tasks.filter((task) => {
    return task.id !== id;
  })
}

const showTaskRemoveConfirmation = (task) => {
  modal.open(
    'Remove task confirmation',
    `Are you sure you want to remove task "${task.text}"?`,
    'Confirm',
    () => removeTask(task.id)
  )
}

const cancelEdit = () => {
  modal.open(
    'Undo edit',
    'Are you sure you want to cancel edit without saving?',
    'Confirm',
    () => router.push('/')
  )
}

const updateBuffer = () => {
  noteNameBufferIndex++
  noteNameBuffer = noteNameBuffer.slice(0, noteNameBufferIndex)
  noteNameBuffer.push(props.note.name)
}

const undo = () => {
  if (noteNameBufferIndex > 0) {
    noteNameBufferIndex--
    props.note.name = noteNameBuffer[noteNameBufferIndex]
  }
}

const redo = () => {
  if (noteNameBufferIndex < noteNameBuffer.length - 1) {
    noteNameBufferIndex++
    props.note.name = noteNameBuffer[noteNameBufferIndex]
  }
}
</script>

<template>
  <div class="form">
      <input
        type="text"
        class="input form__input"
        v-model="note.name"
        @input="updateBuffer"
        placeholder="Note name"
      >
      <button class="note-btn form__btn" @click="action.callback">{{action.label}}</button>
    </div>
    <div class="btns-wrap btns-wrap_multiple">
      <button class="note-btn" @click="undo">Undo</button>
      <button class="note-btn" @click="redo">Redo</button>
    </div>
    <div class="btns-wrap" :class="showRemoveBtn ? 'btns-wrap_multiple' : 'btns-wrap_single'">
      <button class="note-btn" @click="cancelEdit">Cancel edit</button>
      <button class="note-btn" v-if="showRemoveBtn" @click="showNoteRemoveConfirmation">Remove</button>
    </div>
    <div class="form task-form">
      <input
        type="text"
        class="input form__input"
        v-model="newTask.text"
        placeholder="New task name"
      >
      <button class="note-btn form__btn" @click="addTask">Add task</button>
    </div>
    <div class="tasks">
      <div class="list-item" v-for="task of note.tasks.slice().reverse()" :key="task.id">
        <div class="task-item__text-wrap">
          <input class="task-item__checkbox" type="checkbox" v-model="task.completed">
          <input class="task-item__text" type="text" v-model="task.text">
        </div>
        <TrashIcon class="btn-trash" @click="showTaskRemoveConfirmation(task)" />
      </div>
  </div>
</template>

<style scoped>
.task-form {
  margin-top: 50px;
}

.btns-wrap {
  display: flex;
  width: 100%;
  max-width: 467px;
  margin-top: 50px;
}

.btns-wrap_multiple {
  justify-content: space-between;
}

.btns-wrap_multiple .note-btn {
  width: 45%;
}

.btns-wrap_single {
  justify-content: center;
}

.form__btn {
  margin-left: 20px;
}

.tasks {
  width: 100%;
  max-width: 467px;
  margin-top: 50px;
}

.list-item {
  justify-content: space-between;
  align-items: center;
}

.task-item__text-wrap {
  display: flex;
  align-items: center;
}

.task-item__text {
  color: #f8f0e4;

  border: none;
  background: none;
  outline: none;
}

.task-item__checkbox {
  margin-right: 10px;
}

.btn-trash {
  cursor: pointer;
}

@media (max-width: 500px) {
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form__btn {
    width: 100%;
    max-width: 200px;
    margin: 20px 0 0;
  }
  
  .btns-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .btns-wrap_single .note-btn,
  .btns-wrap_multiple .note-btn {
    width: 100%;
    max-width: 200px;
  }
  
  .btns-wrap .note-btn {
    margin-top: 20px;
  }
}
</style>
