import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore("notesStore", {
  state: () => ({
    notes: [
      {
        id: 1,
        name: 'First note'
      },
      {
        id: 2,
        name: 'Second note'
      }
    ]
  })
});
