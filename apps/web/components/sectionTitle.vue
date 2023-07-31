<script setup lang="ts">
defineProps<{
  pretitle?: string
  title?: string
}>()
</script>

<template>
  <Container
    class="mt-4 w-full flex flex-col items-center justify-center text-center"
  >
    <div v-if="pretitle" class="text-sm font-bold tracking-wider uppercase text-blue-600">
      {{ pretitle }}
    </div>

    <h2 v-if="title" class="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight dark:text-white">
      {{ title }}
    </h2>

    <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
      <slot />
    </p>
  </Container>
</template>
