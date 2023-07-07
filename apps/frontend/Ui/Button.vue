<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <button :type="type" class="relative rounded-2 bg-blue-700 px-6 py-3 text-sm text-white dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :disabled="loading">
    <span :class="[{ 'opacity-0': loading }]">
      <slot />
    </span>

    <UiSpinner v-if="loading" class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
  </button>
</template>
