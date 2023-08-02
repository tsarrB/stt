<script lang="ts" setup>
import { useBootstrapStore } from '~/store/bootstrap'
import ContainersList from '~/components/ContainersList/ContainersList.vue'

const bootstrapStore = useBootstrapStore()

// const user = computed(() => bootstrapStore.user)
const gtmContainers = computed(() => bootstrapStore.gtmContainers)
</script>

<template>
  <div>
    <ContainersList :containers="gtmContainers" />
  </div>
</template>

<style>

</style>
