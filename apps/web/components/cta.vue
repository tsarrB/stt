<script setup lang="ts">
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
  <Container>
    <div class="mx-auto max-w-4xl w-full flex flex-wrap items-center justify-between gap-5 rounded-xl bg-blue-600 px-7 py-7 text-white lg:flex-nowrap lg:px-12 lg:py-12">
      <div class="flex-grow text-center lg:text-left">
        <h2 class="text-2xl font-medium lg:text-3xl">
          Ready to host your GTM server at ServerTagTracking?
        </h2>
      </div>
      <div class="w-full flex-shrink-0 text-center lg:w-auto">
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="mx-auto inline-block rounded-md bg-white px-7 py-3 text-center text-lg font-medium text-blue-600 lg:px-10 lg:py-5"
          @click.prevent="onOpenCallback"
        >
          Try for Free
        </a>
      </div>
    </div>
  </Container>
</template>
