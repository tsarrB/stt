<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

function onOpenCallback() {
  router.replace({
    query: {
      ...route.query,
      callback: 'true',
    },
  })
}
</script>

<template>
  <Container class="px-4 py-16 lg:px-8 lg:py-20 md:px-24">
    <div class="mx-auto max-w-2xl md:max-w-2xl sm:max-w-xl">
      <div class="text-center">
        <div class="mb-10 max-w-xl md:mx-auto md:mb-12 lg:max-w-2xl sm:text-center">
          <div class="">
            <p class="mb-4 inline-block rounded-full bg-teal-400 px-3 py-px text-xs font-semibold tracking-wider uppercase text-teal-900">
              Boost Your business
            </p>
          </div>
          <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto sm:text-4xl dark:text-white">
            <span class="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" class="absolute left-0 top-0 z-0 hidden w-32 text-blue-gray-200 -ml-20 -mt-8 sm:block lg:w-32 lg:-ml-28 lg:-mt-10">
                <defs>
                  <pattern id="b039bae0-fdd5-4311-b198-8557b064fce0" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)" width="52" height="24" />
              </svg>

              <span class="relative">The</span>
            </span>
            simplest method to <span class="whitespace-nowrap">server-side tracking</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Starting server-side tracking can be a difficult task, but with our set of tools, you can begin promptly.
          </p>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="focus:shadow-outline h-12 min-w-280px w-full inline-flex items-center justify-center whitespace-nowrap rounded bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:w-auto hover:bg-blue-700 focus:outline-none"
            @click="onOpenCallback"
          >
            Contact for try
          </button>
        </div>

        <!-- <form class="mb-4 w-full flex flex-col items-center md:flex-row md:px-16">
          <input
            placeholder="Enter your email"
            required
            type="text"
            class="focus:shadow-outline mb-3 h-12 w-full flex-grow appearance-none border border-gray-300 rounded bg-white px-4 shadow-sm transition duration-200 md:mb-0 md:mr-2 focus:border-blue-600 focus:outline-none"
          >

          <button
            type="submit"
            class="focus:shadow-outline h-12 w-full inline-flex items-center justify-center whitespace-nowrap rounded bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:w-auto hover:bg-blue-700 focus:outline-none"
          >
            Try for free
          </button>
        </form> -->
      </div>
    </div>
  </Container>
</template>
