import { defineStore } from 'pinia'

export const useNotesStore = defineStore("notesStore", {
  state: () => ({
    nextNoteId: 3,
    notes: [
      {
        id: 1,
        name: 'First note',
        nextTaskId: 4,
        tasks: [
          {
            id: 1,
            text: 'First note First task',
            completed: false
          },
          {
            id: 2,
            text: 'First note Second task',
            completed: true
          },
          {
            id: 3,
            text: 'First note Third task',
            completed: false
          }
        ]
      },
      {
        id: 2,
        name: 'Second note',
        nextTaskId: 4,
        tasks: [
          {
            id: 1,
            text: 'Second note First task',
            completed: false
          },
          {
            id: 2,
            text: 'Second note Second task',
            completed: true
          },
          {
            id: 3,
            text: 'Second note Third task',
            completed: false
          }
        ]
      }
    ]
  }),
  actions: {
    addNote(name) {
      this.notes.push({ id: this.nextNoteId++, name: name, nextTaskId: 0, tasks: [] })
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      })
    }
  }
})
