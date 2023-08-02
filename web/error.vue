<script lang="ts" setup>
</script>

<template>
  <NuxtLayout name="404">
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl dark:text-blue-500">
            404
          </h1>
          <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </p>

          <RouterLink to="/" class="my-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Back to Homepage
          </RouterLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
