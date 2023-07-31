<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { useColorMode } from '@vueuse/core'

const theme = useColorMode()
</script>

<template>
  <div class="flex items-center">
    <button
      v-if="theme === 'dark'"
      class="rounded-full text-gray-300 outline-none focus:outline-none"
      @click="theme = 'light'"
    >
      <MoonIcon class="h-20px w-20px" />
    </button>

    <button
      v-else
      class="rounded-full text-gray-500 outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
      @click="theme = 'dark'"
    >
      <SunIcon class="h-20px w-20px" />
    </button>
  </div>
</template>
