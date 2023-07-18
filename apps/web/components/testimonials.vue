<script setup lang="ts">
const Avatar = createReusableTemplate()
const Mark = createReusableTemplate()
</script>

<template>
  <Avatar.define v-slot="{ image, name, title }">
    <div class="mt-8 flex items-center space-x-3">
      <div class="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
        <img
          :src="image"
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        >
      </div>
      <div>
        <div class="text-lg font-medium">
          {{ name }}
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          {{ title }}
        </div>
      </div>
    </div>
  </Avatar.define>

  <Mark.define v-slot="{ $slots }">
    <mark class="rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900">
      <component :is="$slots.default" />
    </mark>
  </Mark.define>

  <Container>
    <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      <div class="xl:col-auto lg:col-span-2">
        <div class="h-full w-full flex flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
          <p class="text-2xl leading-normal">
            Share a real <Mark.reuse>testimonial</Mark.reuse>
            that hits some of your benefits from one of your popular customer.
          </p>

          <Avatar.reuse
            image="/img/user1.jpg"
            name="Sarah Steiner"
            title="VP Sales at Google"
          />
        </div>
      </div>
      <div class="">
        <div class="h-full w-full flex flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
          <p class="text-2xl leading-normal">
            Make sure you only pick the <Mark.reuse>right sentence</Mark.reuse>
            to keep it short and simple.
          </p>

          <Avatar.reuse
            image="/img/user2.jpg"
            name="Dylan Ambrose"
            title="Lead marketer at Netflix"
          />
        </div>
      </div>
      <div class="">
        <div class="h-full w-full flex flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800">
          <p class="text-2xl leading-normal">
            This is an <Mark.reuse>awesome</Mark.reuse> landing page template I&apos;ve seen. I
            would use this for anything.
          </p>

          <Avatar.reuse
            image="/img/user3.jpg"
            name="Gabrielle Winn"
            title="Co-founder of Acme Inc"
          />
        </div>
      </div>
    </div>
  </Container>
</template>
