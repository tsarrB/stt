<script setup lang="ts">
import Header from '~/components/Header/Header.vue'
import { useBootstrapStore } from '~/store/bootstrap'

const bootstrapStore = useBootstrapStore()

const isAuthenticated = computed(() => bootstrapStore.isAuthenticated)
</script>

<template>
  <main class="min-h-100vh px-4 sm:px-8">
    <Header v-if="isAuthenticated" />

    <div class="mx-auto w-full py-8 2xl:max-w-7xl">
      <slot />
    </div>
  </main>
</template>
