<script setup lang="ts">
import Header from '~/components/Header/Header.vue'
</script>

<template>
  <main class="min-h-100vh px-4 sm:px-8">
    <Header />

    <div class="mx-auto w-full py-8 2xl:max-w-7xl">
      <slot />
    </div>
  </main>
</template>
