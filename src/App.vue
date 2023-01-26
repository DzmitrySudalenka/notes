<script setup>
import { watchEffect } from 'vue'
import { useModalStore } from '@/stores/ModalStore'
import router from '@/router'
import { useRoute } from 'vue-router'
import Modal from './components/Modal.vue'

const modal = useModalStore()

const route = useRoute()

const checkPath = () => {
  if (route.name === 'note' || route.name === 'add') {
    modal.open(
      'Undo edit',
      'Are you sure you want to cancel edit without saving?',
      'Confirm',
      () => router.push('/')
    )
  } else {
    router.push('/')
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo" @click="checkPath">
        <img class="logo__icon" src="@/assets/logo.svg" alt="logo" width="32" height="32" />
        Notes
      </div>
    </div>
  </header>
  
  <main class="main">
    <div class="container">
      <Modal />
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  margin: 0 auto;
  
  font-size: 45px;
  color: #f76695;
  
  text-decoration: none;
  cursor: pointer;
}

.logo__icon {
  height: 32px;
  margin-right: 10px;
}

.main {
  margin-top: 50px;
}
</style>
