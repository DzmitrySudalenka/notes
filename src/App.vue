<script setup>

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col logo-wrap">
          <RouterLink to="/" class="logo">
            <img class="logo__icon" src="@/assets/logo.svg" alt="logo" width="32" height="32" />
            Notes
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped>

</style>
