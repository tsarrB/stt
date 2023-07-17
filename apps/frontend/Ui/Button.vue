<script lang="ts" setup>
interface IDefineProps {
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  theme?: 'primary' | 'secondary' | 'link' | 'danger'
  loading?: boolean
}

const props = defineProps<IDefineProps>()

const type = computed(() => props.type || 'button')
const loading = computed(() => props.loading || false)

const THEMES = {
  'primary': 'px-8 border border-blue-700 hover:border-blue-800 bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300',
  'primary-outline': 'px-8 text-gray-900 focus:outline-none border border-blue-700 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300',
  'secondary': 'px-8 border border-[#F7BE38] hover:border-[#F7BE38]/90 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50',
  'link': 'px-4 border border-gray-100 border-opacity-0 text-blue-700 hover:border-opacity-100 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-100',
  'danger': 'px-4 border border-gray-100 border-opacity-0 text-red-500 hover:border-opacity-100 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-100',
}

const SIZES = {
  sm: 'py-2 text-sm',
  md: 'py-3 text-sm',
  lg: 'py-4 text-base',
}

const size = computed(() => SIZES[props.size || 'md'])
const theme = computed(() => THEMES[props.theme || 'primary'])
</script>

<template>
  <button
    :type="type"
    class="relative rounded-2 font-medium" :class="[
      size,
      theme,
    ]"
    :disabled="loading"
  >
    <span :class="[{ 'opacity-0': loading }]">
      <slot />
    </span>

    <UiSpinner v-if="loading" class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2" />
  </button>
</template>
