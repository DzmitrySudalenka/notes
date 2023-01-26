export const demoData = {
  nextNoteId: 3,
  notes: [
    {
      id: 1,
      name: 'First note',
      nextTaskId: 4,
      tasks: [
        {
          id: 1,
          completed: true,
          text: 'First note First task',
        },
        {
          id: 2,
          completed: false,
          text: 'First note Second task'
        },
        {
          id: 3,
          completed: true,
          text: 'First note Third task'
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
          completed: false,
          text: 'Second note First task'
        },
        {
          id: 2,
          completed: true,
          text: 'Second note Second task'
        },
        {
          id: 3,
          completed: false,
          text: 'Second note Third task'
        }
      ]
    }
  ]
}
