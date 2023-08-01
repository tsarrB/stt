<script setup lang="ts">
// import Header from '~/components/Header/Header.vue'
</script>

<template>
  <main>
    <Navbar />
    <slot />

    <Footer />

    <CallbackModal />
  </main>
</template>
