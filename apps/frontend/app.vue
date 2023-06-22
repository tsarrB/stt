<script setup lang="ts">
const layout = computed(() => {
  const route = useRoute()

  return route.meta.layout || 'default'
})
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* CSS */
:root { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  :root { font-family: 'Inter var', sans-serif; }
}

html, body , #__nuxt{
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
