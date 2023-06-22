<script setup lang="ts">
import Header from '~/components/Header/Header.vue'
</script>

<template>
  <main class="min-h-100vh">
    <Header />
    <slot />
  </main>
</template>
