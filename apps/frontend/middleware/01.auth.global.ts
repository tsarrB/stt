import { useBootstrapStore } from '~/store/bootstrap'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const bootstrapStore = useBootstrapStore()

  if (to.meta.auth === false || bootstrapStore.isAuthenticated)
    return

  try {
    await bootstrapStore.fetch()
  }
  catch (error) {
    return navigateTo('/login')
  }
})
