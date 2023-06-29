import { ofetch } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const api = ofetch.create({
    baseURL: runtimeConfig.public.apiURL,
    credentials: 'include',
  })

  // now available on `nuxtApp.$injected`
  nuxtApp.provide('api', api)
})

interface PluginsInjections {
  $api: typeof ofetch
}

declare module '#app' {
  interface NuxtApp extends PluginsInjections {}
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends PluginsInjections {}
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginsInjections {}
}
