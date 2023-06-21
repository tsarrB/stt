<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
</script>

<template>
  <div>
    <h1>Home Page</h1>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<style>

</style>
