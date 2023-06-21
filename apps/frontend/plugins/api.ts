import { ofetch } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
  const api = ofetch.create({ baseURL: 'http://localhost:9000/api' })

  // now available on `nuxtApp.$injected`
  nuxtApp.provide('api', api)
})
