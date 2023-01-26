import { defineStore } from 'pinia'

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    instance: {},
    title: '',
    body: '',
    actionLbl: '',
    action: {},
  }),
  actions: {
    setInstance(instance) {
      this.instance = instance
    },
    open(title, body, actionLbl, action) {
      this.title = title
      this.body = body
      this.actionLbl = actionLbl
      this.action = action
      this.instance.show()
    },
    doAction() {
      this.action()
      this.instance.hide()
      this.title = ''
      this.body = ''
      this.actionLbl = ''
      this.action = {}
    }
  }
})
