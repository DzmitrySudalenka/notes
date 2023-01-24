<script setup>
import Modal from './components/Modal.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">
        <img class="logo__icon" src="@/assets/logo.svg" alt="logo" width="32" height="32" />
        Notes
      </RouterLink>
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
}

.logo__icon {
  height: 32px;
  margin-right: 10px;
}

.main {
  margin-top: 50px;
}
</style>
