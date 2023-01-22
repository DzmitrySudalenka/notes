import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore("notesStore", {
  state: () => ({
    notes: [
      {
        id: 0,
        name: 'First note'
      },
      {
        id: 1,
        name: 'Second note'
      }
    ]
  }),
  actions: {
    addNote(name) {
      this.notes.push({ id: this.notes.length, name: name })
    }
  }
});
