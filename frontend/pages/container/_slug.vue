<script lang="ts" setup>
import { useBootstrapStore } from '~/store/bootstrap'

import DomainCard from '~/components/DomainCard/DomainCard.vue'
import DomainField from '~/components/DomainField/DomainField.vue'

const route = useRoute()
const bootstrapStore = useBootstrapStore()

const slug = computed(() => route.params.slug as string)

const container = computed(() => bootstrapStore.gtmContainersDict[slug.value])
const containerServer = computed(() => container.value?.server)
const containerDomains = computed(() => container.value?.domains)

const domainFormVisible = ref(false)

async function onCreateDomain(domain: string) {
  // TODO: Add creating logic
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <div>
      <img class="h-10 w-10" :src="prepareContainerIcon(container.name)" alt="">

      <div class="text-base font-semibold">
        {{ container.name }}
      </div>

      <div class="font-normal text-gray-500">
        Status: active
      </div>
    </div>

    <div class="flex gap-6">
      <div>
        <strong>Plan:</strong> Free
      </div>
      <div>
        <strong>Server:</strong> {{ containerServer.name }}
      </div>
      <div>
        <strong>Custom domain IP:</strong> {{ containerServer.ipAddress }}
      </div>
      <div>
        <strong>Valid till:</strong> 11.11.2024
      </div>
    </div>

    <div>
      <span>
        Usage: 22%
      </span>
    </div>

    <div>
      <div class="mb-4 text-lg font-bold">
        Container Settings
      </div>

      <div class="flex flex-col gap-2">
        <div>
          <strong>Name:</strong>
          {{ container.name }}
        </div>
        <div>
          <strong>Container config:</strong>
          {{ container.config }}
        </div>
        <div>
          <strong>Container identifier:</strong>
          {{ container.identifier }}
        </div>
      </div>
    </div>

    <div>
      <div class="mb-2 text-lg font-bold">
        Domains
      </div>

      <div class="flex flex-col gap-4">
        <DomainCard
          v-for="item in containerDomains"
          :key="item.uuid"
          :domain="item"
          :server="containerServer"
        />

        <DomainField
          v-if="domainFormVisible"
          :callback="onCreateDomain"
          action-button-text="Add domain"
          @cancel="domainFormVisible = false"
        />

        <UiButton
          v-else
          @click="domainFormVisible = !domainFormVisible"
        >
          Add domain
        </UiButton>
      </div>
    </div>
  </div>
</template>
