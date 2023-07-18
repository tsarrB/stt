<script lang="ts" setup>
const isVideoVisible = ref(false)
</script>

<template>
  <Container>
    <div class="mx-auto max-w-4xl w-full overflow-hidden rounded-2xl lg:mb-20">
      <div
        class="aspect-16x9 relative cursor-pointer bg-indigo-300 from-purple-400 to-indigo-700 bg-gradient-to-tr"
        @click="isVideoVisible = !isVideoVisible"
      >
        <button v-if="!isVideoVisible" class="absolute inset-auto left-1/2 top-1/2 h-16 w-16 transform text-white lg:h-28 lg:w-28 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 lg:h-28 lg:w-28"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>

          <!-- <span class="sr-only">Play Video</span> -->
        </button>

        <iframe
          v-else
          class="aspect-16x9 w-full"
          src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </Container>
</template>

<style>
.aspect-16x9 {
  aspect-ratio: 16 / 9;
}
</style>
