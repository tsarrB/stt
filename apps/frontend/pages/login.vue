<script lang="ts" setup>
const { $api } = useNuxtApp()

const router = useRouter()

const data = ref({
  loading: false,
  email: '',
  password: '',
})

async function onSubmit() {
  data.value.loading = true

  try {
    await $api('/authentication/login', {
      method: 'POST',
      body: data.value,
    })

    await router.push('/')
  }
  catch (error: any) {
    if (error.data.message === 'Wrong credentials provided') {
      // TODO: show error message
      return
    }

    throw error
  } finally {
    data.value.loading = false
  }
}

function onSignUp() {
  return router.push('/sign-up')
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
              Don't have an account yet? <NuxtLink class="underline" to="/sign-up" @click.prevent="onSignUp">
                Sign Up!
              </NuxtLink>
            </h3>
          </div>

          <div class="mt-8 min-w-2xl">
            <div class="mt-6">
              <form class="space-y-2" @submit.prevent="onSubmit">
                <div class="col-span-full">
                  <input id="email" v-model="data.email" name="email" class="block w-full appearance-none border border-gray-200 rounded-2 bg-white px-6 py-3 text-center text-black focus:border-blue-500 sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500" placeholder="email@example.com" autocomplete="true" type="email">
                </div>
                <div class="col-span-full">
                  <input id="password" v-model="data.password" name="password" class="block w-full appearance-none border border-gray-200 rounded-2 bg-white px-6 py-3 text-center text-black focus:border-blue-500 sm:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-blue-500" placeholder="Your password" autocomplete="true" type="password">
                </div>
                <div class="col-span-full">
                  <UiButton class="w-full" type="submit" :loading="data.loading">
                    Continue
                  </UiButton>
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
