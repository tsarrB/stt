<script lang="ts" setup>
const props = defineProps<{
  defaultValue?: string
  actionButtonText?: string
  callback: (domain: string) => Promise<void>
}>()

defineEmits(['cancel'])

const isLoading = ref(false)
const domainValue = ref(props.defaultValue || '')

async function onSubmit() {
  isLoading.value = true

  try {
    if (!domainValue.value) {
      // TODO: Add better validation
      window.alert('Domain field is required')
      return
    }

    await props.callback(domainValue.value)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="domain-field">
    <div class="domain-field__input">
      <UiInput v-model="domainValue" type="text" placeholder="track.example.com" />
    </div>

    <div class="domain-field__buttons my-4 flex justify-between gap-4">
      <slot name="buttons-prepend" />

      <div class="flex gap-4">
        <UiButton theme="link" @click="$emit('cancel')">
          Discard
        </UiButton>

        <UiButton :loading="isLoading" @click="onSubmit">
          {{ actionButtonText || 'Submit' }}
        </UiButton>
      </div>
    </div>
  </div>
</template>
