<script lang="ts" setup>
const { imgPos = 'left' } = defineProps<{
  imgPos?: 'right' | 'left'
  data: typeof benefitOne | typeof benefitTwo
}>()

const Benefit = createReusableTemplate()
</script>

<template>
  <Benefit.define v-slot="{ $slots, title, icon }">
    <div class="mt-8 flex items-start space-x-3">
      <div class="mt-1 h-11 w-11 flex flex-shrink-0 items-center justify-center rounded-md bg-indigo-500">
        <component :is="icon" class="h-7 w-7 text-indigo-50" />
      </div>
      <div>
        <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">
          {{ title }}
        </h4>

        <p class="mt-1 text-gray-500 dark:text-gray-400">
          <component :is="$slots.default" />
        </p>
      </div>
    </div>
  </Benefit.define>

  <Container class="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10">
    <div
      class="w-full flex items-center justify-center lg:w-1/2"
      :class="[imgPos === 'right' ? 'lg:order-1' : '']"
    >
      <div>
        <img
          :src="data.image"
          width="521"
          height="auto"
          alt="Benefits"
          class="{&quot;object-cover&quot;}"
          placeholder="blur"
        >
      </div>
    </div>

    <div
      class="w-full flex flex-wrap items-center lg:w-1/2"
    >
      <div>
        <div class="mt-4 w-full flex flex-col">
          <h3 class="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight dark:text-white">
            {{ data.title }}
          </h3>

          <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {{ data.desc }}
          </p>
        </div>

        <div class="mt-5 w-full">
          <Benefit.reuse v-for="(item, index) in data.bullets" :key="index" :title="item.title" :icon="item.icon">
            {{ item.desc }}
          </Benefit.reuse>
        </div>
      </div>
    </div>
  </Container>
</template>
