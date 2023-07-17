<script setup lang="ts">
import { generateId } from '~/utils/generate-id'

const props = defineProps<{
  trim?: boolean
  label?: string
  modelValue?: string | number
}>()

const emit = defineEmits(['update:modelValue'])

const attrs = useAttrs()

const id = String(attrs.id || `input-field-${generateId()}`)

function onInput(event: Event) {
  let value = (event.target as HTMLInputElement).value

  if (props.trim)
    value = value.trim()

  emit('update:modelValue', value)
}
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="mb-2 block text-sm font-medium text-gray-900">
      {{ label }}
    </label>

    <div class="relative">
      <!-- TODO: Add icon component -->
      <!-- <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
        <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </div> -->

      <input
        v-bind="{
          ...$attrs,
          id,
        }"
        :value="modelValue"
        type="text"
        class="block w-full border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        @input="onInput"
      >
    </div>

    <p v-if="$slots.explanation" id="helper-text-explanation" class="mt-2 text-sm text-gray-500">
      <slot name="explanation" />
    </p>
  </div>
</template>
