<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/24/solid'

const faqs = [
  {
    question: 'Is this template completely free to use?',
    answer: 'Yes, this template is completely free to use.',
  },
  {
    question: 'Can I use it in a commercial project?',
    answer: 'Yes, this you can.',
  },
  {
    question: 'What is your refund policy? ',
    answer:
      'If you\'re unhappy with your purchase for any reason, email us within 90 days and we\'ll refund you in full, no questions asked.',
  },
  {
    question: 'Do you offer technical support? ',
    answer:
      'No, we don\'t offer technical support for free downloads. Please purchase a support plan to get 6 months of support.',
  },
]
</script>

<template>
  <Container class="!p-0">
    <div class="mx-auto max-w-2xl w-full rounded-2xl p-2">
      <div v-for="item in faqs" :key="item.question" class="mb-5">
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="w-full flex items-center justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-lg text-gray-800 dark:bg-trueGray-800 hover:bg-gray-100 dark:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
            <span>{{ item.question }}</span>

            <ChevronUpIcon
              class="h-5 w-5 transform text-indigo-500"
              :class="[open ? 'rotate-180' : '']"
            />
          </DisclosureButton>

          <DisclosurePanel class="px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300">
            {{ item.answer }}
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </Container>
</template>
