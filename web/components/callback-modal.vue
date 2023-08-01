<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const isOpened = computed(() => {
  return route.query.callback === 'true'
})

function onClose() {
  router.replace({
    query: {
      ...route.query,
      callback: undefined,
    },
  })
}
</script>

<template>
  <!-- Main modal -->
  <div v-if="isOpened" class="fixed bottom-0 left-0 right-0 top-0 z-50 overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-50 p-4 md:inset-0 dark:bg-gray-900 dark:bg-opacity-50">
    <div class="flex items-center justify-center">
      <div class="relative max-h-full max-w-md w-full">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button type="button" class="absolute right-2.5 top-3 ml-auto h-8 w-8 inline-flex items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal" @click="onClose">
            <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>

          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Book a call with our Expert Team
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label for="firstName" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input id="firstName" type="text" name="firstName" class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white focus:ring-blue-500 dark:placeholder-gray-400" required>
              </div>
              <div>
                <label for="lastName" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                <input id="lastName" type="text" name="lastName" class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white focus:ring-blue-500 dark:placeholder-gray-400" required>
              </div>
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Work email</label>
                <input id="email" type="email" name="email" class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white focus:ring-blue-500 dark:placeholder-gray-400" required>
              </div>
              <div>
                <label for="company" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Company</label>
                <input id="company" type="text" name="company" class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white focus:ring-blue-500 dark:placeholder-gray-400">
              </div>
              <div>
                <label for="message" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                <textarea name="message" class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white focus:ring-blue-500 dark:placeholder-gray-400" />
              </div>

              <Content>
                <p class="text-xs font-normal text-gray-400 dark:text-gray-400">
                  I agree that my data may be processed for the purpose of establishing contact and providing occasional information about our company, our products, and our services. You may withdraw your consent at any time by sending us a message at <a href="mailto:contact@servertagtracking.com">contact@servertagtracking.com</a>. For more information on which personal data we collect and how we process it, please refer to our <a href="/">Privacy notice</a>.
                </p>
              </Content>

              <button type="submit" class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white dark:bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
