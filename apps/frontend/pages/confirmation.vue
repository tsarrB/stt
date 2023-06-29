<script lang="ts" setup>
import { useBootstrapStore } from '~/store/bootstrap'

const { $api } = useNuxtApp()

const bootstrapStore = useBootstrapStore()

const route = useRoute()
const router = useRouter()

const { data, error } = await useAsyncData(
  'confirmation-email',
  () => bootstrapStore.checkToken(route.query.token as string),
)

if (error.value)
  navigateTo('/sign-up')

const state = ref({
  loading: false,
  firstName: '',
  password: '',
  repeatPassword: '',
  marketingEmails: true,
})

async function onSubmit() {
  // TODO: Add validation 'Passwords do not match'
  if (state.value.password !== state.value.repeatPassword)
    return

  try {
    state.value.loading = true

    await $api('/authentication/registration', {
      method: 'POST',
      body: {
        token: route.query.token,
        ...state.value,
      },
    })

    await $api('/authentication/login', {
      method: 'POST',
      body: {
        email: data.value,
        password: state.value.password,
      },
    })

    router.push('/')
  }
  finally {
    state.value.loading = false
  }
}
</script>

<template>
  <main class="min-h-100vh flex flex-col items-center justify-center">
    <section>
      <div class="relative mx-auto max-w-7xl w-full items-center">
        <div class="mx-auto p-8 text-center">
          <div>
            <h2 class="text-4xl tracking-tighter text-black">
              ServerTagTracking
            </h2>
          </div>

          <div class="mt-8 min-w-2xl">
            <div class="mt-6">
              <form class="space-y-2" @submit.prevent="onSubmit">
                <div class="col-span-full">
                  <input id="fname" v-model="state.firstName" name="fname" class="block w-full appearance-none border border-gray-200 rounded-2 bg-white px-6 py-3 text-center text-black focus:border-blue-500 sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500" placeholder="First name" autocomplete="true" type="text">
                </div>

                <div class="col-span-full">
                  <input id="password" v-model="state.password" name="password" class="block w-full appearance-none border border-gray-200 rounded-2 bg-white px-6 py-3 text-center text-black focus:border-blue-500 sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500" placeholder="Password" autocomplete="false" type="password">
                </div>

                <div class="col-span-full">
                  <input id="passwordConfirmation" v-model="state.repeatPassword" name="passwordConfirmation" class="block w-full appearance-none border border-gray-200 rounded-2 bg-white px-6 py-3 text-center text-black focus:border-blue-500 sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500" placeholder="Repeat password" autocomplete="false" type="password">
                </div>

                <div class="col-span-full">
                  <div class="mb-8 mt-4 flex items-center">
                    <input id="email-marketing" v-model="state.marketingEmails" type="checkbox" class="h-4 w-4 border-gray-300 rounded bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600">
                    <label for="email-marketing" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Sign me up for marketing emails from stape
                    </label>
                  </div>
                </div>

                <div class="col-span-full">
                  <button type="submit" class="block w-full border-2 border-black rounded-2 bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus-visible:outline-black focus:outline-none focus-visible:ring-black" :disabled="state.loading">
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
