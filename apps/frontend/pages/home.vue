<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import ContainersList from '~/components/ContainersList/ContainersList.vue'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
const gtmContainers = computed(() => authStore.gtmContainers)
</script>

<template>
  <div>
    <h1 class="mb-8">
      Home Page
    </h1>

    <ContainersList :containers="gtmContainers" />

    <pre>
      {{ gtmContainers }}
    </pre>
  </div>
</template>

<style>

</style>
