<script lang="ts" setup>
const route = useRoute()
const page = await useAsyncData('page', () => $fetch(`/api/static-page?slug=${route.path}`))

if (page.error.value)
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

const { data } = page.data.value
</script>

<template>
  <Container>
    <div v-html="data.content" />
  </Container>
</template>
