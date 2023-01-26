<script setup>
import { onMounted } from 'vue'
import { Modal } from 'bootstrap'
import { useModalStore } from '@/stores/ModalStore'

const modal = useModalStore()

onMounted(() => {
  modal.setInstance(new Modal('#modal'))
})
</script>

<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">{{modal.title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">{{modal.body}}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="modal.doAction">{{modal.actionLbl}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-title,
.modal-body {
  color: #343d46;
}

.modal-title {
  font-weight: 700;
}
</style>
