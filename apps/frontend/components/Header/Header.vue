<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { prepareAvatar } from '~/utils/boring-avatars'

const authStore = useAuthStore()

const burgerMenuOpened = ref(false)
const profileMenuOpened = ref(false)

const { $api } = useNuxtApp()

const user = computed(() => authStore.user)
const email = computed(() => user.value.authentication.email)

async function logout() {
  await $api('/authentication/logout', {
    method: 'POST',
  })

  window.location.reload()
}
</script>

<template>
  <UiContainer class="border-b bg-white">
    <div class="relative mx-auto w-full flex flex-col bg-white py-5 md:flex-row md:items-center md:justify-between">
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <NuxtLink class="text-lg tracking-tight uppercase text-black lg:text-2xl focus:outline-none focus:ring" to="/">
          <span class="uppecase lg:text-lg focus:ring-0">
            <!-- ServerTagTracking -->
            sttag
          </span>
        </NuxtLink>

        <button class="inline-flex items-center justify-center p-2 text-gray-400 md:hidden focus:text-black hover:text-black focus:outline-none" @click="burgerMenuOpened = !burgerMenuOpened">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{ 'hidden': burgerMenuOpened, 'inline-flex': !burgerMenuOpened }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{ 'hidden': !burgerMenuOpened, 'inline-flex': burgerMenuOpened }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="{ flex: burgerMenuOpened, hidden: !burgerMenuOpened }" class="flex-grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0">
        <a class="px-2 py-2 text-sm text-gray-500 lg:ml-auto lg:px-6 md:px-3 hover:text-blue-600" href="#">
          Dashboard
        </a>
        <a class="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600" href="#">
          sGTM Containers
        </a>
        <a class="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600" href="#">
          Tools
        </a>

        <div class="inline-flex list-none items-center gap-2 lg:ml-auto">
          <div class="relative ml-5 flex-shrink-0">
            <div>
              <button id="user-menu-button" type="button" class="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false" aria-haspopup="true" @click="profileMenuOpened = !profileMenuOpened">
                <span class="sr-only">
                  Open user menu
                </span>
                <img class="h-8 w-8 rounded-full object-cover" :src="prepareAvatar(email)" alt="">
              </button>
            </div>

            <div v-show="profileMenuOpened" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <a id="user-menu-item-0" href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1">
                Your Profile
              </a>

              <a id="user-menu-item-1" href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1">
                Settings
              </a>

              <a id="user-menu-item-2" href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" @click.prevent="logout">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </UiContainer>
</template>
