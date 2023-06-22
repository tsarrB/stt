<script lang="ts" setup>
const burderMenuOpened = ref(false)
const profileMenuOpened = ref(false)
</script>

<template>
  <div class="mx-auto w-full border-b bg-white 2xl:max-w-7xl">
    <div class="relative mx-auto w-full flex flex-col bg-white p-5 md:flex-row md:items-center md:justify-between lg:px-8 md:px-6">
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <NuxtLink class="text-lg tracking-tight uppercase text-black lg:text-2xl focus:outline-none focus:ring" to="/">
          <span class="uppecase lg:text-lg focus:ring-0">
            <!-- ServerTagTracking -->
            sttag
          </span>
        </NuxtLink>

        <button class="inline-flex items-center justify-center p-2 text-gray-400 md:hidden focus:text-black hover:text-black focus:outline-none" @click="burderMenuOpened = !burderMenuOpened">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{ 'hidden': burderMenuOpened, 'inline-flex': !burderMenuOpened }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{ 'hidden': !burderMenuOpened, 'inline-flex': burderMenuOpened }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="{ flex: burderMenuOpened, hidden: !burderMenuOpened }" class="flex-grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0">
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
                <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" alt="">
              </button>
            </div>

            <div v-show="profileMenuOpened" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <a id="user-menu-item-0" href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1">
                Your Profile
              </a>

              <a id="user-menu-item-1" href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1">
                Settings
              </a>

              <a id="user-menu-item-2" href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1">
                Sign out
              </a>
            </div>
          </div>

          <button class="group inline-flex items-center justify-center rounded-full bg-black p-4 text-sm font-semibold text-white active:bg-gray-800 hover:bg-gray-700 active:text-white focus-visible:outline-2 focus-visible:outline-blue-900 focus-visible:outline-offset-2 focus:outline-none">
            <i name="add-outline" role="img" class="md hydrated i-carbon:add" aria-label="add outline" />
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
