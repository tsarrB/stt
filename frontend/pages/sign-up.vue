<script lang="ts" setup>
const { $api } = useNuxtApp()

const router = useRouter()

const data = ref({
  loading: false,
  email: '',
  submitted: false,
})

async function onSubmit() {
  try {
    data.value.loading = true

    await $api('/authentication/confirmation', {
      method: 'POST',
      body: data.value,
    })

    data.value.submitted = true
  }
  catch (error: any) {
    if (error.data.message === 'User with that email already exists')
      return onSignIn()

    throw error
  }
  finally {
    data.value.loading = false
  }
}

async function onSignIn() {
  return router.push('/login')
}
</script>

<template>
  <main class="min-h-100vh flex flex-col items-center justify-center">
    <section v-if="data.submitted">
      <h3 class="text-xl tracking-tighter text-black">
        Mail sent. Check your mailbox and comeback to login.
      </h3>
    </section>

    <section v-else>
      <div class="relative mx-auto max-w-7xl w-full items-center">
        <div class="mx-auto p-8 text-center">
          <div>
            <h2 class="text-4xl tracking-tighter text-black">
              Sign Up
            </h2>
            <h3 class="mt-3 block text-sm font-medium text-gray-600" name="email">
              Already have an account? <NuxtLink class="underline" to="/login" @click.prevent="onSignIn">
                Sign In!
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
                  <button type="submit" class="block w-full border-2 border-black rounded-2 bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus-visible:outline-black focus:outline-none focus-visible:ring-black" :disabled="data.loading">
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
