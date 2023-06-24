<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
const gtmContainers = computed(() => authStore.gtmContainers)
</script>

<template>
  <div>
    <h1>Home Page</h1>

    <pre>
      {{ user }}
    </pre>

    <pre>
      {{ gtmContainers }}
    </pre>
  </div>
</template>

<style>

</style>
