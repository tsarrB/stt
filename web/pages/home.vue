<script lang="ts" setup>
import { benefitOne, benefitTwo } from '~/constants/benefits'
</script>

<template>
  <div>
    <Hero />

    <Benefits :data="benefitOne" />

    <Benefits id="features" img-pos="right" :data="benefitTwo" />

    <div class="mb-24 bg-gray-100 py-8 dark:bg-trueGray-800">
      <SectionTitle
        pretitle="important"
        title="Great hosting"
      >
        Deploy cloud tagging servers for Meta Conversions API Gateway and server Google Tag Manager in 1 click. No more struggling and wasting your on tedious GCP or AWS configuration.
      </SectionTitle>
    </div>

    <SectionTitle
      pretitle="Watch a video"
      title="Learn more about server side tracking"
    >
      Setting up server-side tracking can be a difficult and time-consuming process. With ServerTagTracking, you get access to extensive solutions designed to simplify your server-side tracking setup.
    </SectionTitle>

    <Video />

    <!-- <SectionTitle
      pretitle="Testimonials"
      title="Here's what our customers said"
    >
      Testimonails is a great way to increase the brand trust and awareness.
      Use this section to highlight your popular customers.
    </SectionTitle>

    <Testimonials /> -->

    <SectionTitle
      pretitle="FAQ"
      title="Frequently Asked Questions"
    >
      Any questions left? Please write to us!
    </SectionTitle>

    <Faq />

    <Cta />
  </div>
</template>
