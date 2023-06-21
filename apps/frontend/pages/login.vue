<script lang="ts" setup>
const { $api } = useNuxtApp()

const data = ref({
  email: '',
  password: '',
})

async function onRegistration() {
  const result = await $api('/authentication/registration', {
    method: 'POST',
    body: JSON.stringify(data.value),
  })
}
</script>

<template>
  <main class="min-h-100vh flex flex-col items-center justify-center">
    <section>
      <div class="relative mx-auto max-w-7xl w-full items-center">
        <div class="mx-auto p-8 text-center">
          <div>
            <h2 class="text-4xl tracking-tighter text-black">
              Sign In
            </h2>
            <h3 class="mt-3 block text-sm font-medium text-gray-600" name="email">
              Continue to your account
            </h3>
          </div>
          <div class="mt-8 min-w-2xl">
            <div class="mt-6">
              <form class="space-y-2" @submit.prevent="onRegistration">
                <div class="col-span-full">
                  <input v-model="data.email" class="block w-full appearance-none border border-gray-200 rounded-2 bg-white px-6 py-3 text-center text-black focus:border-blue-500 sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500" placeholder="email@example.com" autocomplete="true" type="email">
                </div>
                <div class="flex space-x-4">
                  <button type="submit" class="flex flex-1 items-center justify-center border-2 border-black rounded-2 bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus-visible:outline-black focus:outline-none focus-visible:ring-black">
                    <span> Continue </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>

</style>
