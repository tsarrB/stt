<script lang="ts" setup>
import { useBootstrapStore } from '~/store/bootstrap'

const router = useRouter()
const bootstrapStore = useBootstrapStore()

const { $api } = useNuxtApp()

const servers = computed(() => bootstrapStore.servers)

const form = ref({
  name: '',
  config: '',
  serverId: servers.value[0].uuid,
  loading: false,
})

async function onSubmit() {
  if (form.value.loading)
    return

  try {
    form.value.loading = true

    await $api('/gtm-containers/create', {
      method: 'POST',
      body: form.value,
    })

    await bootstrapStore.fetchContainers()

    // TODO: Add redirect to the container page
    router.push('/')
  }
  catch (error) {
    // TODO: Add validation
  }
  finally {
    form.value.loading = false
  }
}

function onBack() {
  router.go(-1)
}
</script>

<template>
  <div>
    <form class="mx-auto max-w-2xl" @submit.prevent="onSubmit">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-xl font-semibold leading-7 text-gray-900">
            New Container
          </h2>

          <div class="mt-4 space-y-2">
            <div class="col-span-full">
              <label for="container-name" class="block text-sm font-medium leading-6 text-gray-900">Container name</label>
              <div class="mt-2">
                <input id="container-name" v-model="form.name" type="text" class="block w-full border-0 rounded-md p-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset">
              </div>
            </div>

            <div class="col-span-full">
              <label for="container-configuration" class="block text-sm font-medium leading-6 text-gray-900">Container configuration</label>
              <div class="mt-2">
                <input id="container-configuration" v-model="form.config" type="text" class="block w-full border-0 rounded-md p-2.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:text-sm sm:leading-6 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset">
              </div>
            </div>

            <div class="col-span-full">
              <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Servers location</label>

              <div class="mt-2">
                <select id="location" v-model="form.serverId" class="block w-full border border-gray-300 rounded-md bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400">
                  <option v-for="server in servers" :key="server.uuid" :value="server.uuid">
                    {{ server.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900" @click="onBack">
          Discard
        </button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 focus-visible:outline">
          Create container
        </button>
      </div>
    </form>
  </div>
</template>
