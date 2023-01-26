import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { demoData } from './NotesStoreDemoData'

export const useNotesStore = defineStore("notesStore", {
  state: () => (useLocalStorage('state', demoData)),
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
