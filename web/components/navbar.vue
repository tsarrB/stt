<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import ThemeChanger from './ThemeChanger.vue'
import { main as mainMenu } from '~/constants/menu'

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
  <div class="w-full">
    <nav class="relative mx-auto flex flex-wrap items-center justify-between p-8 container lg:justify-between xl:px-0">
      <!-- {/* Logo  */} -->
      <Disclosure v-slot="{ open }">
        <div class="w-full flex flex-wrap items-center justify-between lg:w-auto">
          <NuxtLink to="/">
            <span class="flex items-center text-2xl font-medium text-blue-800 space-x-2 dark:text-gray-100">
              <span>
                <img
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  class="w-8"
                >
              </span>
              <span>Tracking</span>
            </span>
          </NuxtLink>

          <DisclosureButton
            aria-label="Toggle Menu"
            class="ml-auto rounded-md px-2 py-1 text-gray-500 lg:hidden focus:bg-blue-100 dark:text-gray-300 focus:text-blue-500 hover:text-blue-500 focus:outline-none dark:focus:bg-trueGray-700"
          >
            <svg
              class="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                v-if="open"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-else
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </DisclosureButton>

          <DisclosurePanel class="my-5 w-full flex flex-wrap lg:hidden">
            <NuxtLink v-for="(item, index) in mainMenu" :key="index" :to="item.to" class="w-full rounded-md px-4 py-2 text-gray-500 -ml-4 focus:bg-blue-100 dark:text-gray-300 focus:text-blue-500 hover:text-blue-500 focus:outline-none dark:focus:bg-gray-800">
              {{ item.title }}
            </NuxtLink>

            <a
              @click.prevent="onOpenCallback"
              href="/"
              class="mt-3 w-full rounded-md bg-blue-600 px-6 py-2 text-center text-white lg:ml-5"
            >
              <!-- Login & Sign Up -->
              Contact
            </a>
          </DisclosurePanel>
        </div>
      </Disclosure>

      <!-- {/* menu  */} -->
      <div class="hidden text-center lg:flex lg:items-center">
        <ul class="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
          <li v-for="(item, index) in mainMenu" :key="index" class="nav__item mr-3">
            <NuxtLink :to="item.to" class="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline focus:bg-blue-100 dark:text-gray-200 focus:text-blue-500 hover:text-blue-500 focus:outline-none dark:focus:bg-gray-800">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="nav__item mr-3 hidden lg:flex space-x-4">
        <a @click.prevent="onOpenCallback" href="/" class="rounded-md bg-blue-600 px-6 py-2 text-white md:ml-5">
          Contact
          <!-- Login & Sign Up -->
        </a>

        <ThemeChanger />
      </div>
    </nav>
  </div>
</template>
