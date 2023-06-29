<script setup>
import ContainerListRow from './ContainersListRow.vue'

defineProps({
  containers: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <UiContainer>
    <div class="bg-white">
      <div class="items-center justify-between sm:flex">
        <p tabindex="0" class="text-base font-bold leading-normal text-gray-800 lg:text-2xl md:text-xl sm:text-lg focus:outline-none">
          Recent sGTM Containers
        </p>

        <button onclick="popuphandler(true)" class="mt-4 inline-flex items-start justify-start rounded bg-indigo-700 px-6 py-3 sm:mt-0 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
          <p class="text-sm font-medium leading-none text-white">
            Create container
          </p>
        </button>
      </div>

      <div class="mt-7 overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <tbody>
            <template v-for="(item, index) in containers" :key="index">
              <ContainerListRow :container="item" />

              <tr v-if="index + 1 !== containers.length" class="h-3" />
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </UiContainer>
</template>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
