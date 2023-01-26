import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { demoData } from './NotesStoreDemoData'

const state = localStorage.getItem('state') ? localStorage.getItem('state') : demoData

export const useNotesStore = defineStore("notesStore", {
  state: () => (useLocalStorage('state', {state})),
  actions: {
    addNote(note) {
      note.id = this.nextNoteId++
      this.notes.push(note)
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      })
    }
  }
})
