<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/24/solid'
import Content from '~/components/content2.vue'

const faqs = [
  {
    question: 'Why do I need server-side tracking?',
    answer: `
    In comparison with client-side tracking, the server-side technology provides several advantages:
    <ul><li><p>fuller and more accurate data; </p></li><li><p>a better protection of data and more control over it; </p></li><li><p>an additional layer of security; </p></li><li><p>improved website performance; </p></li><li><p>data enrichment opportunities.</p></li></ul>
    `,
  },
  {
    question: 'What does server-side tracking mean?',
    answer: 'Server-side tracking is a way of collecting behavioral data on your website. It implies collecting data first on the server that hosts your website and then sending it to a data processing tool, like Google Analytics or Facebook Pixel. With server-side tracking prevents data distortion due to third-party cookie restrictions and provides you with fuller and more accurate data.',
  },
  {
    question: 'Is server-side tracking GDPR compliant?',
    answer: 'Yes, server-side tracking does meet all the requirements of General Data Protection Regulation, as well as other international data collection regulations and restrictions. Note that server-side tracking does not exempt you from getting consent from users before collecting data on them. Don’t forget to set upi a consent management platform on your website.',
  },
  {
    question: 'What is the difference between client-side and server-side tracking?',
    answer: 'With client-side tracking, behavioral data is directly transferred from a user’s browser to a data processing platform. The cookie request to the browser is sent from a third-party platform — this means, that cookie restrictions and ad blocking extensions can seriously affect the data collected this way. Server-side tracking implies adding an extra step to the process that will protect the data from that impact. First, the data goes to the server that hosts the website and only then it can be transferred to analytics platforms. This way, the cookie request is sent from your website and is recognised as first-party.',
  },
]
</script>

<template>
  <Container class="!p-0">
    <div class="mx-auto max-w-2xl w-full rounded-2xl p-2">
      <div v-for="item in faqs" :key="item.question" class="mb-5">
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="w-full flex items-center justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-lg text-gray-800 dark:bg-trueGray-800 hover:bg-gray-100 dark:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:hover:bg-gray-800">
            <span>{{ item.question }}</span>

            <ChevronUpIcon
              class="h-5 w-5 transform text-blue-500"
              :class="[open ? 'rotate-180' : '']"
            />
          </DisclosureButton>

          <DisclosurePanel class="px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300">
            <Content>
              <div v-html="item.answer" />
            </Content>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </Container>
</template>
