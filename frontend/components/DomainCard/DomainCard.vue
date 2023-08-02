<script lang="ts" setup>
const props = defineProps<{
  domain?: any
  server?: any
}>()

const isEditing = ref(false)
const isLoading = ref(false)

const [DomainLinkDefineTemplate, DomainLinkReuseTemplate] = createReusableTemplate()

const isDefaultDomain = !props.domain.isPersonal

async function onSave(domain: string) {
  // TODO: Add saving logic
  try {
    // eslint-disable-next-line no-console
    console.log(domain)
    // await bootstrapStore.updateDomain({
    //   domain,
    //   serverId: props.server.id,
    // })
  }
  catch (error) {
    console.error(error)
  }
  finally {
    isEditing.value = false
  }
}

function onDelete() {
  // TODO: Add deleting logic

  isLoading.value = true
  try {
    // await bootstrapStore.deleteDomain({
    //   domain: props.domain,
    //   serverId: props.server.id,
    // })
  }
  catch (error) {
    console.error(error)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <DomainLinkDefineTemplate>
    <a :href="`https://${domain.hostName}/healthz`" target="_blank" class="domain-card-panel__value text-sm font-medium">
      https://{{ domain.hostName }}
    </a>
  </DomainLinkDefineTemplate>

  <div v-if="isDefaultDomain" class="border border-gray-300 rounded-md bg-gray-50 px-6 py-4">
    <DomainLinkReuseTemplate />
  </div>

  <div v-else class="domain-card-panel border border-gray-300 rounded-md bg-gray-50 px-6 py-4">
    <DomainField
      v-if="isEditing"
      :callback="onSave"
      :default-value="domain.hostName"
      action-button-text="Save changes"
      @cancel="isEditing = false"
    >
      <template #buttons-prepend>
        <UiButton theme="danger" :loading="isLoading" @click="onDelete">
          Delete domain
        </UiButton>
      </template>
    </DomainField>

    <template v-else>
      <div class="domain-card-panel__head flex justify-between">
        <div class="flex flex-col items-start gap-4">
          <!-- bg-purple-100 -->
          <!-- bg-green-200 -->
          <!-- bg-red-200 -->
          <div class="domain-card-panel__status rounded-md bg-purple-100 px-2.5 py-1 text-xs font-medium text-dark-700">
            Verifying domain...
          </div>

          <DomainLinkReuseTemplate />
        </div>

        <UiButton theme="link" @click="isEditing = !isEditing">
          Edit
        </UiButton>
      </div>

      <table class="domain-card-panel__table mt-10 text-left text-sm text-gray-500">
        <thead class="text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" class="py-2">
              TYPE
            </th>
            <th scope="col" class="px-8 py-2">
              HOST
            </th>
            <th scope="col" class="py-2">
              VALUE
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="py-2">
              A
            </td>

            <td class="px-8 py-2">
              <div>
                {{ domain.hostName }}
                <!-- <strong>test</strong>.googleddf.com -->
              </div>
            </td>

            <td class="py-2">
              <div>
                {{ server.ipAddress }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<style lang="">
</style>
