<script setup lang="ts"></script>

<template>
  <Container>
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">
        Our Blog
      </h2>
    </div>
    <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <article v-for="(_, index) in 4" :key="index" class="border border-gray-200 rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <RouterLink to="/blog/test/test" class="block p-6">
          <div class="mb-5 flex items-center justify-between text-gray-500">
            <span class="inline-flex items-center rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Tutorial
            </span>
            <span class="text-sm">Jun 19, 2023</span>
          </div>
          <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How to quickly deploy a static website
          </h2>

          <p class="font-light text-gray-500 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.
          </p>
        </RouterLink>
      </article>
    </div>
  </Container>
</template>
