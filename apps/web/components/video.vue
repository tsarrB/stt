<script lang="ts" setup>
import { PlayCircleIcon } from '@heroicons/vue/24/solid'

const isVideoVisible = ref(false)
</script>

<template>
  <Container>
    <div class="mx-auto max-w-4xl w-full overflow-hidden rounded-2xl lg:mb-20">
      <div
        class="aspect-16x9 relative cursor-pointer bg-blue-300 from-purple-400 to-blue-700 bg-gradient-to-tr"
        @click="isVideoVisible = !isVideoVisible"
      >
        <button v-if="!isVideoVisible" class="absolute inset-auto left-1/2 top-1/2 h-16 w-16 transform text-white lg:h-28 lg:w-28 -translate-x-1/2 -translate-y-1/2">
          <PlayCircleIcon
            class="h-16 w-16 lg:h-28 lg:w-28"
          />
        </button>

        <iframe
          v-else
          class="aspect-16x9 w-full"
          src="https://www.youtube-nocookie.com/embed/BmK7xAvL2N4?controls=0&autoplay=1"
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
