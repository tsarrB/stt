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

        <NuxtLink :to="{ name: 'container-create' }" class="mt-4 inline-flex items-start justify-start rounded bg-indigo-700 px-6 py-3 sm:mt-0 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
          <p class="text-sm font-medium leading-none text-white">
            Create container
          </p>
        </NuxtLink>
      </div>

      <div class="mt-7">
        <table v-if="containers.length" class="w-full whitespace-nowrap">
          <tbody>
            <template v-for="(item, index) in containers" :key="index">
              <ContainerListRow :container="item" />

              <tr v-if="index + 1 !== containers.length" class="h-3" />
            </template>
          </tbody>
        </table>

        <div v-else class="my-8 border border-gray-100 rounded py-16 text-center">
          <h3 class="mb-2 text-xl font-semibold">
            No containers found
          </h3>
          <p>
            Get started by creating a new container.
          </p>
        </div>
      </div>
    </div>
  </UiContainer>
</template>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
